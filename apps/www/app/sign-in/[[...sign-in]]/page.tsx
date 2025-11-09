import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn
        appearance={{
          layout: {
            socialButtonsPlacement: "bottom",
            socialButtonsVariant: "blockButton",
            logoImageUrl:
              "https://api.iconify.design/icon-park:bytedance-applets.svg",
          },
        }}
      />
    </div>
  )
}
