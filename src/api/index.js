import axios from 'axios';
const url = "https://api.covid19api.com"
const urlGlobal = 'https://covid19.mathdro.id/api';

//Fetch Data Summary
export const fetchSummary = async() =>{
    try {
        const { data: { lastUpdate } } = await axios.get(urlGlobal);
        const {data: {Global: { NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered}}} = await axios.get(`${url}/summary`);
        const modifiedData = {NewConfirmed,NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered, lastUpdate};
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}



  export const fetchDailyData = async (country) => {
    try {

      if(!country){
        const { data } = await axios.get(`${urlGlobal}/daily`);
        return data.map(({ confirmed, deaths, recovered, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, recovered: recovered.total, date }));   
      } else{
        const {data} = await axios.get( `${url}/country/${country}`);
        return data.map(({Confirmed: confirmed, Deaths: deaths, Recovered:recovered, Date: date}) =>({confirmed:confirmed, deaths: deaths, recovered:recovered, date}));
      }
     
    } catch (error) {
      return error;
    }
  };

export const fetchCountries = async() =>{
    try {
        const {data:countries} = await axios.get(`${url}/countries`); 
        const arr = [];
        countries.forEach(country => {
            arr.push(country['Country'])
        })  
       return arr;
    } catch (error) {
        
    }
}



