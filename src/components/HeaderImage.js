import React from 'react';

const CityImage = ({ cityName }) => {
    
    //console.log(city);
    switch (cityName) {
        case 'tokyo':
            //console.log(city);
            return <img alt="tokyo" src="https://www.japan-guide.com/thumb/destination_tokyo.jpg" />;
        case 'london':
           // console.log(city);
            return <img alt="london" src="https://cdn.londonandpartners.com/-/media/images/london/visit/general-london/towerbridgecopyrightvisitlondoncomantoinebuchet.jpg?mw=1920&hash=B6672601055B38B34C592E0160B0445AA063B876" />;
        case 'chicago':
           // console.log(city);
            return <img alt="chicago" src="https://www.sagaftra.org/files/styles/sa_hero_desktop_2x/public/banner_locals_Chicago.jpg?itok=kfMHHi2C&timestamp=1523990762" />;
        case 'jerusalem':
           // console.log(city);
            return <img alt="jerusalem" src="https://www.touristisrael.com/wp-content/uploads/78133130_2724833184205773_9167498876020588544_n-9.jpg" />;
        default: return <img alt="tokyo" src="https://www.japan-guide.com/thumb/destination_tokyo.jpg" />
    }
}

function HeaderImage( { city } ) {
    console.log(city);
    return (
        <div className="CityImage">
            <CityImage cityName={city}/>
        </div>
    );


}

export default HeaderImage; 