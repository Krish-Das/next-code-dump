"use client"

import { useState } from "react"
import { Button, Flex, IconButton, Text, TextField } from "@radix-ui/themes"
import { RotateCw } from "lucide-react"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const isEmailValid = email.length > 2
  const isPassValid = pass.length > 2

  const isSubmissionValid = isEmailValid && isPassValid

  const resetValues = () => {
    setEmail("")
    setPass("")
  }

  return (
    <>
      <Flex direction="column" gap="3" asChild>
        <form
          className="form-signup"
          onSubmit={async e => {
            e.preventDefault()
            const credentials = { email, password: pass }
            console.log(credentials)
          }}
        >
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Email
            </Text>
            <TextField.Root
              placeholder="freja@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              name="email"
              type="email"
            />
          </label>

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Password
            </Text>
            <TextField.Root
              value={pass}
              onChange={e => setPass(e.target.value)}
              name="password"
              type="password"
            />
          </label>

          <Button
            mt="2"
            disabled={!isSubmissionValid}
            type="submit"
            variant="classic"
          >
            Login
          </Button>

          <IconButton variant="soft" onClick={resetValues} type="button">
            <RotateCw size="16" />
          </IconButton>
        </form>
      </Flex>
    </>
  )
}