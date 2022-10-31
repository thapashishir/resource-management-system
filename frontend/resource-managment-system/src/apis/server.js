import axios from 'axios';
import env from "react-dotenv";

const BASE_URL = env.BASE_URL;

export async function post(endPoint, payload) {
    try {
        const response = await axios.post(
            endPoint,
            payload
        );
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export async function get(endPoint) {
    try {
        const response = await axios.get( BASE_URL + endPoint);
        return response;
        
    } catch (error) {
        console.error(error);
    }
}

