

const CountryData = ({country, handleVisiedCountry, handleVisitedFlags}) => {

    console.log('Inside Country Data', country, handleVisiedCountry, handleVisitedFlags)

    return (
        <div>
            <p><small>Country Data: {country.name.common}</small></p>
        </div>
    );
};

export default CountryData;