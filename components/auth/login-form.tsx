"use client"

import { useState } from "react"
import { Login } from "@/actions/authenticate"
import { Button, Flex, IconButton, Text, TextField } from "@radix-ui/themes"
import { RotateCw } from "lucide-react"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [isLoggingIn, setLoggingIn] = useState(false)

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
          className="form-login"
          onSubmit={async e => {
            e.preventDefault()
            setLoggingIn(true)

            const credentials = { email, password: pass }
            const { error: authError } = await Login(credentials)

            if (authError) console.error(authError) // TODO: Render a toast

            setLoggingIn(false)
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
            type="submit"
            variant="classic"
            disabled={!isSubmissionValid || isLoggingIn}
            loading={isLoggingIn}
          >
            Login
          </Button>

          <IconButton
            variant="soft"
            type="button"
            onClick={resetValues}
            disabled={isLoggingIn}
          >
            <RotateCw size="16" />
          </IconButton>
        </form>
      </Flex>
    </>
  )
}
