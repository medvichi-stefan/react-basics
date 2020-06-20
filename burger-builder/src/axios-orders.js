import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-my-burger-6a843.firebaseio.com/"
});

export default instance;