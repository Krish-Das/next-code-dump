const Menu = () => {
  return (
    <div className="flex h-full w-full items-center justify-center p-7.5">
      <div className="h-92 rounded-[0.8rem] bg-black/90 p-px shadow-xl shadow-black/45 backdrop-blur-xs backdrop-contrast-300">
        <div className="h-full w-full space-y-2 rounded-xl border-1 border-zinc-500/50 px-4 py-7">
          <span className="inline-block w-50" aria-hidden />
          <h2 className="text-xl font-medium">Folders</h2>
          <ul className="flex flex-col text-sm">
            {Array.from({ length: 3 }).map((_, idx) => (
              <li key={idx}>{idx}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export { Menu }
