import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;

const fetchAuthUserData = () => {
  const apiToken = localStorage.getItem("bookApiKey");
  const storedData = localStorage.getItem("user");
  const userData = JSON.parse(storedData);
  const authUserData = {
    userData: userData,
    apiToken: apiToken,
  };
  return authUserData;
};

export const rentBookApi = async (rentData) => {
  try {
    const authUserData = fetchAuthUserData();
    const response = await axios.post(`${baseUrl}/renter/rent`, rentData, {
      headers: {
        Accept: "application/json",
        Authorization: `${authUserData.apiToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("rent book api:", error);
  }
};

export const fetchRentedBooks = async (renterId) => {
  try {
    const authUserData = fetchAuthUserData();
    const response = await axios.get(`${baseUrl}/renter/rented-books`, {
      headers: {
        Accept: "application/json",
        Authorization: `${authUserData.apiToken}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.log("create book api:", error);
  }
};

export const fetchBooksForRent = async () => {
  try {
    const authUserData = fetchAuthUserData();
    const response = await axios.get(`${baseUrl}/renter/fetch-books`, {
      headers: {
        Accept: "application/json",
        Authorization: `${authUserData.apiToken}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.log("create book api:", error);
  }
};
