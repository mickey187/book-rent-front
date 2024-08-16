import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;
const apiToken = localStorage.getItem("bookApiKey");
const storedData = localStorage.getItem("user");
const userData = JSON.parse(storedData);

export const fetchAllBooks = async () => {
  try {
    const books = await axios.get(`${baseUrl}/owner/book/fetch/${userData.id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `${apiToken}`,
      },
    });
    return books.data.data;
  } catch (error) {
    console.error(`error fetching books: ${books}`);
  }
};
