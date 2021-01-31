import React from 'react';
import ReactWeather, {useOpenWeather} from 'react-open-weather';

const Weather = () => {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: 'c83d2db5f9135872a5faa233dce920f3',
        lat: '45.5017',
        lon: '73.5673',
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
    });
    return (
        <ReactWeather
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang="en"
            locationLabel="Montreal"
            unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
            showForecast={false}
        />
    );
};
export default Weather;