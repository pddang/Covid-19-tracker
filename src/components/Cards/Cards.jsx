import React from 'react'
import {Card, CardContent,CircularProgress, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';


const Cards = ({data: {NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered, lastUpdate}}) =>{
    if(!TotalConfirmed){
        return <CircularProgress />
    }
    return(
        <div>
          <div className={styles.container}>
            <Grid container spacing={3} justify="center">
            <Grid item xs={12} md={3} component={Card} className={cx(styles.card, )}>
            <CardContent>
              <Typography color="textPrimary" gutterBottom>
                Total Confirmed
              </Typography>
              <Typography variant="h3" className = {styles.confirmed}>
                <CountUp start={0} end={TotalConfirmed} duration={2.75} separator="," />
              </Typography>
              
              <Typography variant="h6" className = {styles.confirmedText}>
                %{(NewConfirmed/TotalConfirmed * 100).toFixed(2)} Increased Daily
              </Typography>
            </CardContent>
          </Grid>

          <Grid item xs={12} md={3} component={Card} className={cx(styles.card, )}>
            <CardContent>
              <Typography color="textPrimary" gutterBottom>
                Total Recovered
              </Typography>
              <Typography variant="h3" className = {styles.recovered}>
                <CountUp start={0} end={TotalRecovered} duration={2.75} separator="," />
              </Typography>
              
              <Typography variant="h6" className = {styles.recoveredText}>
                %{(TotalRecovered/TotalConfirmed * 100).toFixed(2)} Recovered Rate
              </Typography>
            </CardContent>
          </Grid>

          <Grid item xs={12} md={3} component={Card} className={cx(styles.card, )}>
            <CardContent>
              <Typography color="textPrimary" gutterBottom>
                Total Deaths
              </Typography>
              <Typography variant="h3" className = {styles.deaths}>
                <CountUp start={0} end={TotalDeaths} duration={2.75} separator="," />
              </Typography>
              
              <Typography variant="h6" className = {styles.deathsText}>
                %{(TotalDeaths/TotalConfirmed * 100).toFixed(2)} Fatality Rate
              </Typography>
            </CardContent>
          </Grid>        
        </Grid>
          </div>
          <div className= {styles.lastUpdate}>
            <Typography md ={12} variant ="overline" >Last Update: {new Date(lastUpdate).toDateString()}</Typography>
        </div>
       </div>
    
    )
}
export default Cards;