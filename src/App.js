
import React from 'react';
import {Cards, Chart, CountryPicker, Footer} from './components'
import styles from './App.module.css';
import {fetchDailyData,fetchSummary} from './api';
import logo from './img/logo.png';

class App extends React.Component {
    state = {
        summary: {},
        country: '',
        data: {}
    }

    async componentDidMount() {
        const data = await fetchDailyData();
        const summary = await fetchSummary();
        this.setState({data: data,summary });
      }

    handleCountryChange = async (country) =>{
        const fetchedData = await fetchDailyData(country);
       this.setState({data: fetchedData, country: country})
    }
    render(){
        const {country,summary,data} = this.state;

        return(
            <div className = {styles.container}>
                <img className={styles.image} src={logo} alt="COVID-19" />
                <Cards data= {summary} />   
                <h3>See Data By Country/Region</h3>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data = {data} country={country} /> 
                <Footer/>
                
            </div>
         
        )
    }
}

export default App;

