"use client"

import { Button } from "@radix-ui/themes"
import { LogOut } from "lucide-react"

import { signOut } from "@/lib/auth-client"

export default function LogoutButton() {
  return (
    <Button
      variant="classic"
      color="gray"
      onClick={async () => {
        try {
          console.log("Getting out...")
          await signOut()
        } catch (err) {
          console.log("Error while getting out")
          console.log(err)
        }
      }}
    >
      <LogOut size="16" /> Log out
    </Button>
  )
}
