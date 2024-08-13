import axios from "axios";

const baseUrl = "http://localhost:3000";
const apiToken = localStorage.getItem("bookApiKey");

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
  try {
      const response = await axios.get(`${baseUrl}/owner/book/fetch/${4}`, {
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

