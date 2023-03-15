import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const get_all = () => axios.get(baseUrl).then((response) => response.data);

const create_phone_entry = (new_entry) =>
  axios.post(baseUrl, new_entry).then((response) => response.data);

const delete_number = (phone_id) =>
  axios.delete(`${baseUrl}/${phone_id}`).then((response) => response.data);

const update_phone_entry = (entry) => axios.put(`${baseUrl}/${entry.id}`, entry).then(response => response.data)
export const phoneServices = {
  get_all,
  create_phone_entry,
  delete_number,
  update_phone_entry
};
