import { useEffect, useRef, useState } from "react";
import { countrieServices } from "./services/countries";
import Content from "./component/Content";
import SearchBox from "./component/SearchBox";

function App() {
  const [newCountries, setNewCountries] = useState(null);
  const [newCountry, setNewCountry] = useState("");
  const [newCurrentList, setNewCurrentList] = useState([]);
  const [newFailedToFetch, setnewFailedToFetch] = useState({
    error: "",
    status: false,
    keepAlive: false,
  });
  const newTimeOut = useRef(null);

  const change_handler = (setState, state) => {
    setState(state);
    const querie_results = newCountries.filter((country) =>
      country.name.common.includes(state)
    );
    setNewCurrentList([...querie_results]);
  };

  useEffect(() => {
    countrieServices
      .get_all()
      .then((countries) => {
        if (newTimeOut.current) {
          setnewFailedToFetch({
            message: null,
            status: false,
            keepAlive: false,
          });
          clearTimeout(newTimeOut);
          newTimeOut.current = null;
        }
        return setNewCountries(
          countries.map((country) => {
            return { ...country, show: false };
          })
        );
      })
      .catch((error) => {
        newTimeOut.current = setTimeout(() => {
          setnewFailedToFetch({
            message: `Failed to load resources due to  ${error.message} Retraing ...`,
            status: !newFailedToFetch.status,
            keepAlive: true,
          });
        }, 15000);
      });
  }, []);

  if (newCountries) {
    return (
      <div className="App">
        <SearchBox
          change_handler={change_handler}
          country={newCountry}
          setCountry={setNewCountry}
        />
        <Content
          current_list={newCurrentList}
          set_current_list={setNewCurrentList}
        />
      </div>
    );
  }
  if (newFailedToFetch.keepAlive) {
    return (
      <div className="App">
        <p>{newFailedToFetch.message}</p>
      </div>
    );
  }
  return (
    <div className="App">
      <p>Loading countries info ...</p>
    </div>
  );
}

export default App;
