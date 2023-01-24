
import React, { useState, useEffect } from 'react'

export default function App() {

    const [forecasts, setForecasts] = useState([]);
    const [loading, setLoading] = useState(true);

    const RenderForecastsTable = () => {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(forecast =>
                        <tr key={forecast.date}>
                            <td>{forecast.date}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
    const IsLoading = () => {
        return (
            <p>Loading... </p>
        );
    }

    useEffect(() => {
        const populateWeatherData = async () => {
            const response = await fetch('weatherforecast');
            const data = await response.json();
            setTimeout(() => {
                setForecasts(data);
                setLoading(false);
            }, 2000);

        }
        populateWeatherData();


        return () => {

        }
    }, [])


    return (
        <div>{loading ? <IsLoading /> : <RenderForecastsTable />}
        </div>
    )
}


