import { Paragraph } from "./components/text"

export default function Page() {
  return (
    <div className="grid h-screen place-items-center bg-black">
      <Paragraph>
        Over the course of my career,
        <br /> I&apos;ve strived to develop a diverse set of core skills.
        <br />
        Ever since I started working with WebGL and Shaders.
      </Paragraph>
    </div>
  )
}
