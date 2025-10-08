import NewTaskForm from "./NewTaskForm"
import Tasks from "./Tasks"

const Page = () => {
  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-4">
      <div className="h-4" />
      <NewTaskForm />
      <div className="h-6" />
      <Tasks />
    </main>
  )
}

export default Page
