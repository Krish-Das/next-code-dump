import { Box, Tabs } from "@radix-ui/themes"

import LoginForm from "@/components/auth/login-form"
import SignupForm from "@/components/auth/signup-form"

export default function ChildWrapper() {
  return (
    <>
      <Tabs.Root defaultValue="signup">
        <Tabs.List>
          <Tabs.Trigger value="signup">Create new</Tabs.Trigger>
          <Tabs.Trigger value="login">Login</Tabs.Trigger>
        </Tabs.List>

        <Box pt="3">
          <Tabs.Content value="signup">
            <SignupForm />
          </Tabs.Content>

          <Tabs.Content value="login">
            <LoginForm />
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </>
  )
}