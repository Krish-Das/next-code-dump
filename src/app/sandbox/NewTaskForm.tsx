"use client"

import { useForm } from "@tanstack/react-form"
import { api } from "#/convex/_generated/api"
import { useMutation } from "convex/react"
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "react-aria-components"

const NetTaskForm = () => {
  const addTask = useMutation(api.taks.add)

  const form = useForm({
    defaultValues: { text: "" },
    onSubmit: ({ value }) => {
      addTask({ text: value.text })
    },
  })

  return (
    <div>
      <Form
        onSubmit={e => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
        className="flex w-full items-center gap-2"
      >
        <form.Field name="text">
          {field => (
            <TextField
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={e => field.handleChange(e)}
              isRequired
              className="h-10 flex-1"
            >
              <Label className="sr-only">Text</Label>
              <Input className="bg-fill-secondary h-full w-full rounded-md p-2 px-3" />
              <FieldError />
            </TextField>
          )}
        </form.Field>

        <Button
          type="submit"
          className="bg-ios-blue h-9 rounded-full px-4 text-sm data-pressed:brightness-110"
        >
          + Add
        </Button>
      </Form>
    </div>
  )
}

export default NetTaskForm
