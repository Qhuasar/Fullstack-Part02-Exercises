import axios from "axios";
const baseUrl = "https://restcountries.com/v3.1/all";
const testUrl2 = "http://localhost:3001/countries";

const get_all = () =>
  axios.get(baseUrl).then((response) => {
    return response.data;
  });

export const countrieServices = {
  get_all,
};
