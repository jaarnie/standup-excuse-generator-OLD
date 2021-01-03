import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}))

export default function Header() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            className={classes.title}
            component='div'
            variant='overline'
            align='center'
          >
            standup excuse generator
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}
