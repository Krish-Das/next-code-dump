"use client"

import { useState } from "react"
import { Button, Flex, IconButton, Text, TextField } from "@radix-ui/themes"
import { RotateCw } from "lucide-react"

import { wait } from "@/lib/utils"

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
          className="form-signup"
          onSubmit={async e => {
            const start = performance.now()
            e.preventDefault()
            setLoggingIn(true)
            const credentials = { email, password: pass }

            try {
              await wait(3000)
              console.log(credentials)

              const finish = performance.now()
              console.log(
                `[LOG] logging in of ${email} took ${finish - start}ms`
              )
            } catch (err) {
              console.error(
                `[AUTH ERROR] error while logging in ${email}\n\nERROR:`,
                err
              )
            } finally {
              setLoggingIn(false)
            }
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