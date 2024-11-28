import { cn } from "@/lib/utils"
import { Grid } from "@/app/test/skills-cards/Cards"

export default function Child() {
  return (
    <section className="container flex h-screen flex-col items-center justify-center p-0">
      <Grid className="">
        <div className="col-span-full col-start-4 flex w-full max-w-[41ch] flex-col gap-16 text-sm text-foreground/90">
          <p>
            Over the course of <GambarinoEm>my career</GambarinoEm>,<br />
            I&apos;ve strived to develop a <GambarinoEm>
              diverse
            </GambarinoEm>{" "}
            set of core skills.
            <br />
            Ever since I started working with{" "}
            <GambarinoEm>WebGL and Shaders</GambarinoEm>.
          </p>

          <p className="">
            Hi! I&apos;m Maxime, a frontend engineer based in New York. Welcome
            to my corner of the Internet, where I showcase my work, craft,
            <GambarinoEm> unfinished or imperfect projects</GambarinoEm>, and
            the many other things I&apos;m exploring.
          </p>

          <p>
            Ever since I started working with{" "}
            <GambarinoEm>WebGL and Shaders</GambarinoEm>.
          </p>
        </div>
      </Grid>
    </section>
  )
}

export function GambarinoEm({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <em
      className={cn(
        "text-base font-normal not-italic text-foreground",
        className
      )}
      style={{
        fontFamily: "var(--font-gambarino), serif",
      }}
    >
      {children}
    </em>
  )
}

const _aboutText = `
Over the course of my career, I've strived to develop a diverse set of core skills.
Ever since I started working with WebGL and Shaders.

Hi! I'm Maxime, a frontend engineer based in New York. Welcome to my corner of the Internet, where I showcase my work, craft, unfinished or imperfect projects, and the many other things I'm exploring.

Throughout the past decade, I have worked with many startups building well designed, fast, and delightful user experiences. During this time.

My appetite for learning recently lead me to focus on what I believe is the future of the web: 3D, WebGL, and shaders.
`
