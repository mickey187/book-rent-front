import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;
const apiToken = localStorage.getItem("bookApiKey");
const storedData = localStorage.getItem("user");
const userData = JSON.parse(storedData);

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

export const fetchAllBooks = async () => {
  const authUserData = fetchAuthUserData();
  try {
    const books = await axios.get(`${baseUrl}/owner/book/fetch/${authUserData.userData.id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `${authUserData.apiToken}`,
      },
    });
    return books.data.data;
  } catch (error) {
    console.error(`error fetching books: ${books}`);
  }
};
