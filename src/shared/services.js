import axios from 'axios';
const headers = {
    headers:{
        Accept:'application/json',
        'Content-Type': 'application/json'
    }
}
export const getAPI = async(url) => {
    return await axios.get(url, headers);
};