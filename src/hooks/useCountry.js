import {useState, useEffect, useCallback} from 'react';
import {getAPI} from '../shared/services';
import {FETCH_COUNTRIES} from '../shared/urls'; 
export const useCountry = () => {
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [keyword, setKeyword] = useState('');
    const [total, setTotal] = useState(0);
    const [countryList, setCountryList] = useState([]);
    const [error, setError] = useState(null);
    const fetchCountries = useCallback( async () => {
        const url = `${FETCH_COUNTRIES}?page=${page}&limit=${limit}&keyword=${keyword}`;
        try {
            const res = await getAPI(url);
            setTotal(res.data.total);
            setCountryList(res.data.data);
            setError(null);
        } catch (error) {
            setTotal(0);
            setCountryList([]);
            setError(error.message);
        }
    },[page, limit, keyword]);
    useEffect(()=>{
        fetchCountries();
    },[fetchCountries]);
    return {setLimit, setPage, page, setKeyword, limit, total, countryList, error}
}