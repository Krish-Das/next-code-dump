"use server"

import { auth } from "@/lib/auth"
import { LoginCredentials, SignupCredentials } from "@/lib/types"

export const Signup = async (cred: SignupCredentials) => {
  try {
    console.log("Signing up with email...")
    await auth.api.signUpEmail({ body: cred })
  } catch (err) {
    console.log("Error while signing up")
    console.log(err)
  }
}

export const Login = async (cred: LoginCredentials) => {
  try {
    console.log("Logging in with email...")
    await auth.api.signInEmail({ body: cred })
  } catch (err) {
    console.log("Error while logging in")
    console.log(err)
  }
}