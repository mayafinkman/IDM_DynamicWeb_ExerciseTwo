import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCloudRain, faSun, faSmog,faCloud } from '@fortawesome/free-solid-svg-icons'

const Icon = ({weatherType}) => {
    switch (weatherType) {
        case 'Clouds':
            return <FontAwesomeIcon icon={faCloud} />;
        case 'Clear':
            return <FontAwesomeIcon icon={faSun} />;
        case 'Mist':
            return <FontAwesomeIcon icon={faSmog} />;
        case 'Rainy':
            return <FontAwesomeIcon icon={faCloudRain} />;
        default: return <FontAwesomeIcon icon={faCoffee}/>
    }
}

function WeatherImage({ weatherType }) {
    return (
        <div className="WeatherType">
            <Icon weatherType={weatherType} />
        </div>
    );

}

export default WeatherImage;