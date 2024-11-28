import { Grid } from "@/app/test/skills-cards/Cards"

export default function Child() {
  return (
    <section className="container flex h-screen flex-col items-center justify-center p-0">
      <Grid className="">
        <div className="col-span-full col-start-4 flex w-full max-w-[41ch] flex-col gap-16 text-sm">
          <p>
            Over the course of <em>my career</em>,<br />
            I&apos;ve strived to develop a <em>diverse</em> set of core skills.
            <br />
            Ever since I started working with <em>WebGL and Shaders</em>.
          </p>

          <p className="">
            Hi! I&apos;m Maxime, a frontend engineer based in New York. Welcome
            to my corner of the Internet, where I showcase my work, craft,
            unfinished or imperfect projects, and the many other things I&apos;m
            exploring.
          </p>

          <p>
            Ever since I started working with <em>WebGL and Shaders</em>.
          </p>
        </div>
      </Grid>
    </section>
  )
}

const _aboutText = `
Over the course of my career, I've strived to develop a diverse set of core skills.
Ever since I started working with WebGL and Shaders.

Hi! I'm Maxime, a frontend engineer based in New York. Welcome to my corner of the Internet, where I showcase my work, craft, unfinished or imperfect projects, and the many other things I'm exploring.

Throughout the past decade, I have worked with many startups building well designed, fast, and delightful user experiences. During this time.

My appetite for learning recently lead me to focus on what I believe is the future of the web: 3D, WebGL, and shaders.
`
