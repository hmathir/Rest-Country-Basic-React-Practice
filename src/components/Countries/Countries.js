import { useEffect, useState } from 'react';
import SingleCountry from '../SingleCountry/SingleCountry';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [searchText, setSearchText] = useState('');
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
            <input type="text" name="" id="" onChange={(e)=>setSearchText(e.target.value)} />
            <div className='country-container'>
            {
                 countries.filter((country)=>{
                    if(country===""){
                      return country;
                    }else if(country.name.common.toLowerCase().includes(searchText.toLowerCase())){
                      return country
                    }
                return 0;
                }).map((country)=>{
                    return(<SingleCountry countryProps={country} key={country.cca3}></SingleCountry>);
                  })}
            </div>
        </div>
    );
};

export default Countries;