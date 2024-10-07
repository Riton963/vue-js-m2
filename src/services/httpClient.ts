import axios, { type AxiosInstance } from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

 const httpClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 30000, // milliseconds
  headers: {
    Accept: 'application/json',
  },
});

export  { httpClient }