import axios from 'axios';

const KEY = 'AIzaSyDYZFgho0unjda4qYSEq6D_koc8-MBqgTE';



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});