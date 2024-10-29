import CountryData from "../CountryData/CountryData";


const CountryDetail = (props) => {
    //const {country, handleVisiedCountry, handleVisitedFlags} = props;
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            {/* <CountryData
                country={country}
                handleVisiedCountry={handleVisiedCountry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryData> */}

            <CountryData {...props}></CountryData>
            
        </div>
    );
};

export default CountryDetail;