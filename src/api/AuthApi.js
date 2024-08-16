import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const signupApi = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/signup`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(`error on signup: ${error}`);
    
  }
};

export const signinApi = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/signin`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(`error on signup: ${error}`);
    
  }
};


