"use server"

import { auth } from "@/lib/auth"
import { LoginCredentials, SignupCredentials } from "@/lib/types"

export const Signup = async (cred: SignupCredentials) => {
  try {
    const start = performance.now()
    console.log("Signing up with email...")

    await auth.api.signUpEmail({ body: cred })

    const finish = performance.now()
    console.log(
      `[LOG] signing up of ${cred.email} took ${Math.ceil(finish - start)}ms`
    )
    return { success: true }
  } catch (err) {
    console.log(
      `[AUTH ERROR] error while signing up ${cred.email}\n\nERROR:`,
      err
    )
    return { error: "Error creating account! Please try again." }
  }
}

export const Login = async (cred: LoginCredentials) => {
  try {
    const start = performance.now()
    console.log("Logging in with email...")

    await auth.api.signInEmail({ body: cred })

    const finish = performance.now()
    console.log(
      `[LOG] logging in of ${cred.email} took ${Math.ceil(finish - start)}ms`
    )
    return { success: true }
  } catch (err) {
    console.log(
      `[AUTH ERROR] error while logging in ${cred.email}\n\nERROR:`,
      err
    )
    return { error: "Error logging in! Please try again." }
  }
}
