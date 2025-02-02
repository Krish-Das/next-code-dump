import { Box } from "@radix-ui/themes"

import { Main } from "@/components/layout/mainwraper"
import LogoutButton from "@/components/user/LogoutButton"
import UserProfile from "@/components/user/UserProfile"

export default function Page() {
  return (
    <Main className="relative grid h-dvh place-content-center p-5">
      <UserProfile />

      <Box className="absolute left-3 top-3">
        <LogoutButton />
      </Box>
    </Main>
  )
}
