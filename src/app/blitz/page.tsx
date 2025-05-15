import Image from "next/image"

import { FoldersUI } from "./Folders"

export default function Page() {
  return (
    <main className="">
      <section className="p-7.5s grid h-dvh grid-cols-12 gap-5">
        <div className="relative col-span-full">
          <BackgroundImage />

          <div className="relative h-full w-full">
            <Content />
          </div>
        </div>
      </section>
    </main>
  )
}

const Content = () => {
  return (
    <div className="flex h-full w-full items-center justify-center p-7.5">
      <div className="h-92 rounded-[0.8rem] bg-black/90 p-px shadow-xl shadow-black/45 backdrop-blur-xs backdrop-contrast-300">
        <div className="h-full w-full space-y-2 rounded-xl border-1 border-zinc-500/50 px-4 py-7">
          <span className="inline-block w-50" aria-hidden />
          <h2 className="text-xl font-medium">Folders</h2>
          <FoldersUI />
        </div>
      </div>
    </div>
  )
}

const BackgroundImage = () => (
  <div className="bg-background absolute inset-0">
    <Image
      fill
      style={{ objectFit: "cover" }}
      alt="blitz image"
      src="/images/branding/wallpaper-1.jpg"
      // src="/images/branding/mono_light_distortion_2.jpg"
      // src="/images/branding/blitz-blurred.png"
    />
  </div>
)
