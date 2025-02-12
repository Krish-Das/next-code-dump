"use client"

import { useEffect, useReducer } from "react"
import { Button } from "@heroui/react"

import { formatTime } from "@/lib/utils"
import {
  MaterialSymbolsPause,
  MaterialSymbolsPlayArrow,
  MaterialSymbolsRefresh,
} from "@/components/icons/material-icons"

export type TimerState = {
  seconds: number
  isRunning: boolean
}
export type TimerAction = "start" | "stop" | "reset" | "tick"
const timerReducer = (state: TimerState, action: TimerAction) => {
  switch (action) {
    case "start":
      return { ...state, isRunning: true }
    case "stop":
      return { ...state, isRunning: false }
    case "reset":
      return { ...state, seconds: 0, isRunning: false }
    case "tick":
      return { ...state, seconds: state.seconds + 1 }
    default:
      return state
  }
}

export default function Timer() {
  const [state, dispatch] = useReducer(timerReducer, {
    seconds: 0,
    isRunning: false,
  })

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (state.isRunning) {
      interval = setInterval(() => {
        dispatch("tick")
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [state.isRunning])

  const minutes = Math.floor(state.seconds / 60)
  const remainingSeconds = state.seconds % 60
  const parTime = `${formatTime(minutes)}:${formatTime(remainingSeconds)}`

  return (
    <>
      <label className="text-center text-sm font-bold">{parTime}</label>

      {/* NOTE: for developement */}
      <Button
        variant="flat"
        radius="full"
        size="lg"
        color={state.isRunning ? "warning" : "success"}
        isIconOnly
        onPress={() => (state.isRunning ? dispatch("stop") : dispatch("start"))}
      >
        {state.isRunning ? (
          <MaterialSymbolsPause />
        ) : (
          <MaterialSymbolsPlayArrow />
        )}
      </Button>

      <Button
        variant="flat"
        radius="full"
        size="lg"
        color="primary"
        isIconOnly
        onPress={() => dispatch("reset")}
      >
        <MaterialSymbolsRefresh />
      </Button>
    </>
  )
  // <label className="text-center text-sm font-bold">02:35</label>
}
