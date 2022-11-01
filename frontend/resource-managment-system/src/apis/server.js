import axios from 'axios';
import env from "react-dotenv";

const BASE_URL = env.BASE_URL;

export async function post(endPoint, payload) {
    const headers = {'Content-Type': 'application/json'}
    try {
        const response = await axios.post(
            BASE_URL + endPoint,
            payload,
            headers 
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

