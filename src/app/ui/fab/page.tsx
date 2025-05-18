import Menu from "./dropdown-menu"

export default function Page() {
  return (
    <div className="h-dvh bg-[url('/images/walls/sample.jpeg')] bg-cover bg-center bg-no-repeat">
      <nav className="fixed bottom-12 left-1/2 h-fit w-fit -translate-x-1/2">
        <Menu />
      </nav>
    </div>
  )
}
