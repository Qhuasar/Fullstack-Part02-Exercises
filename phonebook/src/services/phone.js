import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const get_all = () => axios.get(baseUrl).then((response) => response.data);

const create_phone_entry = (new_entry) =>
  axios.post(baseUrl, new_entry).then((response) => response.data);

export default {
  get_all,
  create_phone_entry,
};
