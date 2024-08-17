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
export const createBookApi = async (bookData) => {
  try {
    const authUserData = fetchAuthUserData();
    const response = await axios.post(
      `${baseUrl}/owner/book/create`,
      bookData,
      {
        headers: {
          Accept: "multipart/form-data",
          Authorization: `${authUserData.apiToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("create book api:", error);
  }
};

export const fetchBooksByOwnerIdApi = async (ownerId) => {
  
  const authUserData = fetchAuthUserData();
  try {
    const response = await axios.get(
      `${baseUrl}/owner/book/fetch/${authUserData.userData.id}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `${authUserData.apiToken}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.log("create book api:", error);
  }
};
