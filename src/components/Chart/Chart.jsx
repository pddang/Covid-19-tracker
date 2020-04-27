import React, {useState, useEffect} from 'react';
import {fetchDailyData } from '../../api';
import {Line} from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({data,country }) => {
  
  const [dailyData, setDailyData] = useState({});
    useEffect(() => {
      const fetchMyAPI = async () => {
        const initialDailyData = await fetchDailyData();
        setDailyData(initialDailyData);
      };
      fetchMyAPI();
    }, []);

    const lineChart = (
        dailyData[0] ? (
          <Line
            data={{
              labels: dailyData.map(({ date }) => date),
              datasets: [{
                data: dailyData.map((data) => data.confirmed),
                label: 'Confirmed',
                borderColor: '#f4a548',
                backgroundColor: 'rgba(244, 151, 72, 0.5)',
                fill:true
              }, {
                data: dailyData.map((data) => data.deaths),
                label: 'Deaths',
                borderColor: '#c70039',
                backgroundColor: 'rgba(199, 0, 57, 0.5)',
                fill: true,
              },
              ],
            }}
          />
        ) : null
      );
     
      
      const lineChart1 = (
        data[0] ? (
          <Line
            data={{
              labels: data.map(({ date }) => new Date(date).toISOString().slice(0,10)),
              datasets: [{
                data: data.map((data) => data.confirmed),
                label: 'Confirmed',
                borderColor: '#f4a548',
                backgroundColor: 'rgba(244, 151, 72, 0.5)',
                fill:true
              }, {
                data: data.map((data) => data.deaths),
                label: 'Deaths',
                borderColor: '#c70039',
                backgroundColor: 'rgba(199, 0, 57, 0.5)',
                fill: true,
              },
              {
                data: data.map((data) => data.recovered),
                label: 'Recovered',
                borderColor: '#7ebdb4',
                backgroundColor: 'rgba(126, 189, 180, 0.5)',
                fill: true,
              },
              ],
            }}
          />
        ) : <h4 className = {styles.textWarning}>Sorry! Data not available for the selected country</h4>
      );
     
  

    return(
        <div className= {styles.container}>
            {country? lineChart1:lineChart}
        
            
        </div>
    )
}
export default Chart;