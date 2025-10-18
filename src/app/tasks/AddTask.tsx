import { Spacer } from "@/components/ui/Spacer"

import AddTaskButton from "./AddTaskButton"

const AddTask = () => {
  return (
    <div className="flex w-full">
      <Spacer className="h-full w-7" />
      <AddTaskButton />
    </div>
  )
}

export default AddTask
