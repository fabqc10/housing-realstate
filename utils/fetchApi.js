import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '49a45d0a29mshe0d81cbd596c38bp12d2dcjsnac9f9d3681fe'
          }
    });

    return data;
}

