import Image from "next/image"

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
      {/* NOTE: Blurred material */}
      <div className="h-full max-h-62 w-full max-w-95 rounded-[0.8rem] bg-black/90 p-px shadow-xl shadow-black/45 backdrop-blur-xs backdrop-contrast-300">
        <div className="h-full w-full rounded-xl border-1 border-zinc-500/50" />
      </div>
      {/* <div className="bg-background/50 border border-[#4D4D4D] ring ring-background/50 grid h-full max-h-62 w-full max-w-95 place-content-center rounded-lg backdrop-blur-md"> */}
      {/*   THIS */}
      {/* </div> */}
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
