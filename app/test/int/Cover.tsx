"use client"

import { motion } from "motion/react"

import { Grid } from "../skills-cards/Cards"

export default function Cover() {
  const style: React.CSSProperties = {
    fontStyle: "oblique 0deg",
    fontStretch: "125%",
    fontSize: "4.5rem",
    lineHeight: "1",
  }

  return (
    <>
      <section className="bg-[#040507]s flex min-h-lvh flex-col justify-center gap-14">
        <div className="grid w-full place-items-center overflow-hidden">
          <Grid className="">
            <motion.h3
              className="col-span-full col-start-4 font-mona font-bold uppercase text-foreground/80"
              animate="end"
              initial="start"
              variants={{
                start: { style },
                end: {
                  fontStyle: "oblique 5deg",
                  fontStretch: "80%",
                  fontSize: "2.25rem",
                  lineHeight: "2.5rem",
                },
              }}
              style={style}
            >
              Given <br />
              Interviews
            </motion.h3>
          </Grid>
        </div>
      </section>
    </>
  )
}
