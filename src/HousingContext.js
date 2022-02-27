import { createContext, useState, useEffect } from "react";
const HousingContext = createContext();

function HousingContextProvider({ children }) {
  const [housingList, setHousingList] = useState([]);
  const url = "./data.json";

  useEffect(() => {
    function handleSetHousingList(data) {
      setHousingList(data);
    }

    fetch(url)
      .then(result => result.json())
      .then(data => handleSetHousingList(data))
      .catch(error => console.log(error));
  }, []);

  return <HousingContext.Provider value={{ housingList }}>{children}</HousingContext.Provider>;
}

export { HousingContextProvider, HousingContext };
