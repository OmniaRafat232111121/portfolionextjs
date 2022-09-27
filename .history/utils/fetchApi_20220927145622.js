import axios from "axios";
export const baseUrl = 'https://bayut.p.rapidapi.com';
export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '878f45e1a8msh8bfaf3e377f7cf6p1e5423jsn6fa1e000179d ',
    },
  });
    
  
}