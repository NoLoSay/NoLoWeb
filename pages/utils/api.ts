import axios from 'axios';

const baseURL = 'https://localhost:3001/';

const api = axios.create({
  baseURL,
});

export const fetchData = async (endpoint: string) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data from the API');
  }
};