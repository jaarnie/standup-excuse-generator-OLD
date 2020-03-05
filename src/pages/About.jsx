import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography } from "@material-ui/core"
import { ArrowBack, GitHub } from "@material-ui/icons"
import { Link } from "react-router-dom"

import { GITHUB } from "../constants/index"

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    textAlign: "center"
  }
})

export default function Home() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="h6">
            Tired of thinking what to say during standup? Fret no more and let a
            robotic generator do it for you! Comes preloaded with seven
            high-quality excuses for you to breeze through your morning standup
            in a vague and non-incriminating way. <br />
            <br />
            Click the button at the bottom to randomise, or click on each card
            to individually change the excuse.
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ marginBottom: "5vh" }}>
          <Typography>
            <Link to="/">
              <ArrowBack />
            </Link>
          </Typography>
        </Grid>
        <Grid
          container
          spacing={3}
          justify="center"
          style={{ marginBottom: "5vh" }}
        >
          <a href={GITHUB}>
            <GitHub />
          </a>
        </Grid>
      </Grid>
    </div>
  )
}
