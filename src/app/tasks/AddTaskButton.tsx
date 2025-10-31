import { SVGProps } from "react"
import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Input,
  Label,
  Modal,
  TextField,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const AddTaskButton = () => {
  const handleCreateTask = () => {
    // create(`task-${Math.floor(performance.now())}`)
  }

  return (
    <DialogTrigger>
      <Button
        className={cn(
          "text-label-secondary flex h-10 w-full items-center gap-1 px-3 font-light",
          "data-pressed:bg-fill-tertiary data-hovered:bg-fill-quaternary data-pressed:text-label-primary ring-ios-blue rounded-sm outline-none data-focus-visible:ring-2"
        )}
        onPress={handleCreateTask}
      >
        <PlusIcon fontSize={20} />
        <span className="mt-0.5 font-medium">Add task</span>
      </Button>
      <Modal
        isDismissable
        className={cn(
          "fixed inset-0 z-10 grid place-content-center",
          "bg-[#000]/20 dark:bg-[#000]/48" // TODO: extract to css variables (overlay)
        )}
      >
        <Dialog>
          <form
            onSubmit={handleCreateTask}
            className={cn(
              "relative flex flex-col gap-2 rounded-lg p-3",
              "bg-[#F2F2F7] dark:bg-[#1C1C1E]" // TODO: extract to css variables (background-secondary)
            )}
          >
            <Heading slot="title" className="text-sm leading-none font-medium">
              Add Task
            </Heading>
            <TextField autoFocus>
              <Label className="sr-only">Text</Label>
              <Input
                placeholder="buy groceries..."
                className={cn(
                  "rounded-lg px-2 py-1.5",
                  "ring-ios-blue ring-offset-background ring-offset-2 outline-none data-focus-visible:ring-2",
                  "bg-[#fff] dark:bg-[#1C1C1E]" // TODO: extract to css variables (background-groued-secondary)
                )}
              />
            </TextField>
            <Button
              slot="close"
              type="submit"
              className="bg-fill-primary text-label-secondary h-7 rounded-full px-2 text-sm"
            >
              Add
            </Button>
            <Button
              slot="close"
              type="button"
              className="text-label-tertiary absolute right-3.5 inline-grid place-content-center text-xs"
            >
              x
              <span className="absolute size-6 -translate-x-1/2 -translate-y-1/4" />
            </Button>
          </form>
        </Dialog>
      </Modal>
    </DialogTrigger>
  )
}

export default AddTaskButton

export function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 15 15"
      {...props}
    >
      {/* Icon from Radix Icons by WorkOS - https://github.com/radix-ui/icons/blob/master/LICENSE */}
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 2.75a.5.5 0 0 0-1 0V7H2.75a.5.5 0 0 0 0 1H7v4.25a.5.5 0 0 0 1 0V8h4.25a.5.5 0 0 0 0-1H8z"
        clipRule="evenodd"
      />
    </svg>
  )
}
