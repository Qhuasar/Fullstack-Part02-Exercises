import axios from "axios";
const baseUrl = "https://restcountries.com/v3.1/all";
const baseUrl2 = "http://localhost:3001/countries";

const get_all = () =>
  axios.get(baseUrl2).then((response) => {
    //console.log(response.data);
    return response.data;
  });

export const countrieServices = {
  get_all,
};
