import { createContext, useState, useEffect } from "react";
const HousingContext = createContext();

function HousingContextProvider({ children }) {
  const url = "./data.json";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log("inside context");

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    console.log("inside use effct");

    fetch(url)
      .then(result => result.json())
      .then(data => {
        setLoading(false);
        setData(data);
      })
      .catch(error => {
        setLoading(false);
        setError("An error occurred. Awkward..", error);
      });
  }, []);

  return (
    <HousingContext.Provider value={{ data, loading, error }}>{children}</HousingContext.Provider>
  );
}

export { HousingContextProvider, HousingContext };
