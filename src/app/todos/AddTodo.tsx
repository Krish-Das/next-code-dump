import { Spacer } from "@/components/ui/Spacer"

import AddTodoButton from "./AddTodoButton"

const AddTodo = () => {
  return (
    <div className="flex w-full">
      <Spacer className="h-full w-7" />
      <AddTodoButton />
    </div>
  )
}

export default AddTodo
