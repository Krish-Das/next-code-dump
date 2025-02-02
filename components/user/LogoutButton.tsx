"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@radix-ui/themes"
import { LogOut } from "lucide-react"

import { signOut } from "@/lib/auth-client"

export default function LogoutButton() {
  const router = useRouter()
  const [isLoggingOut, setLoggingOut] = useState(false)

  return (
    <Button
      variant="classic"
      color="gray"
      onClick={async () => {
        try {
          setLoggingOut(true)
          await signOut()
          router.push("/")
        } catch (err) {
          console.log(err)
          setLoggingOut(false)
        }
      }}
      disabled={isLoggingOut}
      loading={isLoggingOut}
    >
      <LogOut size="16" /> Log out
    </Button>
  )
}
