import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardActions, CardContent, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  card: {
    padding: '5vh',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
})

export default function ExcuseCard({ excuseString, today }) {
  const classes = useStyles()
  const bullet = <span className={classes.bullet}>•</span>

  const todayYesterday = () => {
    return (
      <Typography component='div' align='center' variant='overline'>
        {today ? 'and today...' : 'yesterday i...'}
      </Typography>
    )
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        {todayYesterday()}
        <Typography variant='h5'>
          {bullet}
          {excuseString || excuseString}
          {bullet}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  )
}
