import axios  from 'axios';

export const URL='http://localhost:45000';

export const apiClient = axios.create({
  baseURL: URL,
  headers: {
    "Content-type": "application/json",
  },
  
  withCredentials: true
});

