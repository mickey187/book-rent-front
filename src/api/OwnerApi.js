import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiToken = localStorage.getItem("bookApiKey");
const storedData = localStorage.getItem("user");
const userData = JSON.parse(storedData);

export const createBookApi = async(bookData)=>{
    try {
        const response = await axios.post(`${baseUrl}/owner/book/create`, bookData, {
            headers: {
              Accept: 'multipart/form-data',
              Authorization: `${apiToken}`
            },
          });
          return response.data;
    } catch (error) {
        console.log("create book api:",error);
        
    }
}

export const fetchBooksByOwnerIdApi = async(ownerId)=>{
  console.log("userData",userData);
  
  try {
      const response = await axios.get(`${baseUrl}/owner/book/fetch/${userData.id}`, {
          headers: {
            Accept: 'application/json',
            Authorization: `${apiToken}`
          },
        });
        return response.data.data;
  } catch (error) {
      console.log("create book api:",error);
      
  }
}

