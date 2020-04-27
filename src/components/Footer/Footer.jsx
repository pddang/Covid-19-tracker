import React from 'react';
import styles from './Footer.module.css'
import {Typography, Link, Grid} from '@material-ui/core';
import logo from '../../img/logo_footer.png';
import cdc from '../../img/cdc.svg';
import fema from '../../img/fema.svg';
import whitehouse from '../../img/whitehouse.svg';



const Footer = () => {
    console.log(logo);
return (
    <div className={styles.container}>
            <Grid container className={styles.footer} spacing={3} justify="center">
                <Grid item xs={12} md={6} >
                    <img src ={logo} alt = {'Covid-19'} />
                    <Typography  gutterBottom>
                    &copy; 2020 by <Link href = 'http://philipdang.me' variant="textPrimary" color="inherit">Philip Dang</Link>. All rights reserved.
                    </Typography>
                    <Typography  gutterBottom>
                    Data provided by <Link href = 'https://covid19api.com/' variant="textSecondary" color="inherit">COVID19API</Link>
                    </Typography>
                </Grid>
                <Grid container sm ={12} md={6} justify="center" className = {styles.links}>
                    <Typography  gutterBottom justify="center" variant="h6">Useful Link</Typography>
                    <Grid container spacing={1} justify="center">
                        <Grid item md = {3} sm={12} >
                        <Link href ="https://www.coronavirus.gov/"><img src ={cdc} alt = {'cdc'} /></Link>
                        </Grid>
                        <Grid item md = {3} sm={12} >
                        <Link href="https://www.whitehouse.gov/"><img src ={whitehouse} alt = {'whitehouse'} /></Link>
                        </Grid>
                        <Grid item md = {3} sm={12} >
                        <Link href ="https://www.fema.gov/"><img src ={fema}  alt = {"fema"} /></Link>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
         </div>
)
}

export default Footer;