import axios from "axios";
const baseUrl = "https://restcountries.com/v3.1/all";
const get_all = () =>
  axios
    .get("https://restcountries.com/v3.1/all")
    .then((response) => response.data);

export const countrieServices = {
  get_all,
};
