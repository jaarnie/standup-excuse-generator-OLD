import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { InfoOutlined } from '@material-ui/icons'

import ExcuseCard from '../components/ExcuseCard'
import {
  YESTERDAY_EXCUSES,
  TODAY_EXCUSES,
  randomNumber,
  setDate,
} from '../constants/index'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: theme.palette.text.secondary,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

export default function Home() {
  const classes = useStyles()
  const num = randomNumber()
  const todaysExcuses = TODAY_EXCUSES[num]
  const yesterdaysExcuses = YESTERDAY_EXCUSES[num]

  const [excuse, setExcuse] = useState({
    today: todaysExcuses,
    yesterday: yesterdaysExcuses,
    clickToday: todaysExcuses,
    clickYesterday: yesterdaysExcuses,
  })

  const handleCardClick = (event) => {
    const clickTarget = event.currentTarget.id

    return clickTarget === 'today'
      ? setExcuse({ ...excuse, clickToday: todaysExcuses })
      : setExcuse({ ...excuse, clickYesterday: yesterdaysExcuses }) ||
        clickTarget === 'new-excuse-button'
      ? setExcuse({
          clickToday: todaysExcuses,
          clickYesterday: yesterdaysExcuses,
        })
      : null
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            id='yesterday'
            className={classes.paper}
            onClick={handleCardClick}
          >
            <Typography component='div' align='center' variant='overline'>
              {setDate('yesterday')}
            </Typography>

            <ExcuseCard
              defaultExcuse={todaysExcuses}
              excuseString={excuse.clickYesterday}
              today={false}
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper id='today' className={classes.paper} onClick={handleCardClick}>
            <Typography component='div' align='center' variant='overline'>
              {setDate('today')}
            </Typography>
            <ExcuseCard
              defaultExcuse={yesterdaysExcuses}
              excuseString={excuse.clickToday}
              today={true}
            />
          </Paper>
        </Grid>
        <Grid container justify='center'>
          <Button
            id='new-excuse-button'
            variant='outlined'
            color='primary'
            onClick={handleCardClick}
          >
            new excuse
          </Button>
        </Grid>
        <Grid item xs={12} style={{ margin: '1vh' }}>
          <Typography align='center'>
            <Link to='/about'>
              <InfoOutlined />
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}
