import { useEffect, useState } from 'react';
import SingleCountry from '../SingleCountry/SingleCountry';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries]=  useState([]);
    useEffect(()=> {
        const fetchCountries = async () => {
            const res = await fetch('https://restcountries.com/v3.1/all');
            const data = await res.json();
            setCountries(data);
        }
        fetchCountries();
    },[])

    return (
        <div>
            <h1>All Countries In One Page!</h1>
            <div className='country-container'>
            {
                countries.map(country => <SingleCountry countryProps={country} key={country.cca3}></SingleCountry>)
            }
            </div>
        </div>
    );
};

export default Countries;