"use client"

import { Avatar, Flex, Heading, Text } from "@radix-ui/themes"

import { useSession } from "@/lib/auth-client"
import SessionError from "@/components/error/SessionError"
import UserProfileSkeleton from "@/components/loading/UserProfileSkeleton"

export default function UserProfile() {
  const { data, isPending, error } = useSession()

  if (isPending) return <UserProfileSkeleton />
  if (error) return <SessionError />
  if (!data) return

  const { user } = data

  return (
    <Flex gap="2">
      <Avatar fallback="A" />
      <Flex direction="column" gap="0" className="">
        <Flex gap="1">
          <Heading as="h4" size="2">
            {user.name}
          </Heading>
          <Text size="2" color="gray">
            {" "}
            · 11h
          </Text>
        </Flex>

        <Text as="p" size="2">
          {user.email}
        </Text>
      </Flex>
    </Flex>
  )
}
