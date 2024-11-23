export default function Cover() {
  return (
    <section className="bg-[#da1334]s flex h-dvh flex-col">
      <div className="grid flex-1 place-items-center">
        <p className="text-center font-mona text-xs font-semibold uppercase tracking-wider font-feature-ss01 font-stretch-[115%]">
          Known Technologies
        </p>
      </div>

      <div
        className="
        bg-[#da1334]s grid grid-cols-4 pb-[10vh]
        font-mona text-[0.6rem] font-bold uppercase leading-tight tracking-wider font-feature-ss01 font-stretch-[105%]
        sm:grid-cols-8
        "
      >
        <div className="col-start-1 inline-flex w-full justify-end sm:col-start-3">
          <p className="text-foreground/60">0/3</p>
        </div>
        <div className="col-span-2 col-start-2 inline-grid w-full place-items-center sm:col-start-4">
          <p className="text-foreground/60">
            Mexico <br />
            city 2022
          </p>
        </div>
      </div>
    </section>
  )
}

// Decscription
//
// <div className="col-start-6 col-span-2 hidden sm:block">
//   <p className="text-foreground/80 font-normal normal-case">Blurring the line between web-apps and native mobils apps.</p>
// </div>
