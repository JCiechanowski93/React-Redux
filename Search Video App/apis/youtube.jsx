import axios from 'axios';

// const KEY = 'get the KEY from Youtube API v3 if you will need it';



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});