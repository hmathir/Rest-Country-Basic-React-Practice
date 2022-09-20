import './SingleCountry.css';

const SingleCountry = (props) => {
    const {name,flags,population,altSpellings} = props.countryProps;
    return (
        <div className='singleCountry'>
            <div>
                <img className="flags" src={flags?.png} alt="" />
            </div>
            <div>
            <h1>Name: {name?.common}</h1>
            <p>Population: {population}</p>
            <p className='country-index-class'>Alt Spellings: {altSpellings?.map(index => <li key={index}>{index}</li>)}</p>
            </div>

        </div>
    );
};

export default SingleCountry;