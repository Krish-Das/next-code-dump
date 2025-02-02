"use client"

import { useState } from "react"
import { Button, Flex, IconButton, Text, TextField } from "@radix-ui/themes"
import { RotateCw } from "lucide-react"

import { wait } from "@/lib/utils"

export default function SignupForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [pass2, setPass2] = useState("")
  const [isSigningUp, setSigningUp] = useState(false)

  const isNameValid = name.length > 2
  const isEmailValid = email.length > 2
  const isPassValid = pass.length > 2
  const isPassMatching = pass === pass2

  const isSubmissionValid =
    isNameValid && isEmailValid && isPassValid && isPassMatching

  const resetValues = () => {
    setName("")
    setEmail("")
    setPass("")
    setPass2("")
  }

  return (
    <>
      <Flex direction="column" gap="3" asChild>
        <form
          className="form-signup"
          onSubmit={async e => {
            const start = performance.now()
            e.preventDefault()
            setSigningUp(true)
            const credentials = { name, email, password: pass }

            try {
              await wait(3000)
              console.log(credentials)

              const finish = performance.now()
              console.log(
                `[LOG] signing up of ${email} took ${finish - start}ms`
              )
            } catch (err) {
              console.error(
                `[AUTH ERROR] error while signing up ${email}\n\nERROR:`,
                err
              )
            } finally {
              setSigningUp(false)
            }
          }}
        >
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Name
            </Text>
            <TextField.Root
              placeholder="Freja Johnsen"
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              name="name"
            />
          </label>

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Email
            </Text>
            <TextField.Root
              placeholder="freja@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              name="email"
            />
          </label>

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Password
            </Text>
            <TextField.Root
              value={pass}
              onChange={e => setPass(e.target.value)}
              type="password"
              name="password"
            />
          </label>

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Confirm Password
            </Text>
            <TextField.Root
              value={pass2}
              onChange={e => setPass2(e.target.value)}
              type="password"
              name="pass2"
            />
          </label>

          <Button
            mt="2"
            type="submit"
            variant="classic"
            disabled={!isSubmissionValid || isSigningUp}
            loading={isSigningUp}
          >
            Create acc.
          </Button>

          <IconButton
            variant="soft"
            type="button"
            onClick={resetValues}
            disabled={isSigningUp}
          >
            <RotateCw size="16" />
          </IconButton>
        </form>
      </Flex>
    </>
  )
}