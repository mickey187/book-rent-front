import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiToken = localStorage.getItem("bookApiKey");

export const rentBookApi = async(rentData)=>{
    try {
        const response = await axios.post(`${baseUrl}/renter/rent`, rentData, {
            headers: {
              Accept: 'application/json',
              Authorization: `${apiToken}`
            },
          });
          return response.data;
    } catch (error) {
        console.log("rent book api:",error);        
    }
}

export const fetchRentedBooks = async(renterId)=>{
  try {
      const response = await axios.get(`${baseUrl}/renter/rented-books`, {
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

