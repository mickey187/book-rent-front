import axios from "axios";
const baseUrl = "http://localhost:3000";
const apiToken = localStorage.getItem("bookApiKey");

export const fetchAllBooks = async () => {
  try {
    const books = await axios.get(`${baseUrl}/owner/book/fetch/${4}`, {
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
