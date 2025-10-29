import { Doc } from "#/convex/_generated/dataModel"

import { Spacer } from "@/components/ui/Spacer"

import EmptyState from "./EmptyState"
import TaskItem from "./TaskItem"
import TaskListHeader from "./TaskListHeader"

const TaskList = ({ tasks }: { tasks: Doc<"tasks">[] }) => {
  if (!tasks.length) return <EmptyState />

  return (
    <>
      <TaskListHeader />
      <Spacer className="h-6" />
      <ul className="flex flex-col">
        {tasks.map((task, idx) => (
          <TaskItem task={task} index={idx} key={task._id} />
        ))}
      </ul>
    </>
  )
}

export default TaskList
