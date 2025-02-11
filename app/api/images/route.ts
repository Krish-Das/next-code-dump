import { NextResponse, type NextRequest } from "next/server"
import { z } from "zod"

import { TImage, unsplashImagesSchema } from "@/lib/types"

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams
    const c = searchParams.get("c")
    if (!c)
      return NextResponse.json(
        { error: "Missing count: provide the `c` parameter." },
        { status: 400 }
      )

    const parsedCount = parseInt(c)
    if (isNaN(parsedCount))
      return NextResponse.json(
        { error: "Invalid count: c parameter must be a number." },
        { status: 400 }
      )

    const clientId = process.env.UNSPLASH_ACCESS_KEY
    const count = parsedCount
    const URL = `https://api.unsplash.com/photos/random?count=${count}&client_id=${clientId}`

    const response = await fetch(URL, {
      cache: "force-cache",
      next: { revalidate: 60 * 60 * 24 }, // Every 24 hours
    })
    if (!response.ok) {
      const errorData = await response.json()
      return NextResponse.json(
        { error: "Unsplash API error", details: errorData },
        { status: response.status }
      )
    }

    const images = await response.json()
    const validate = z.array(unsplashImagesSchema).safeParse(images)
    if (!validate.success) {
      console.error("Validation error:", validate.error)
      return NextResponse.json(
        {
          error: "Unsplash API error",
          details: "Invalid response structure from Unsplash API.",
          validationErrors: validate.error?.errors,
        },
        { status: 500 }
      )
    }

    // TODO:  Add credits as well
    const mappedImages: TImage[] = validate.data.map(image => ({
      id: image.id,
      url: image.urls.small,
    }))

    return NextResponse.json(mappedImages)
  } catch (error) {
    console.error("Error fetching images:", error)
    return NextResponse.json(
      { error: "Failed to fetch images from Unsplash." },
      { status: 500 }
    )
  }
}
