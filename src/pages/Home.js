import { useState, useEffect } from "react";
import Hero from "../components/hero";
import image from "../assets/images/hero01.png";

function Home() {
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

  const housingListElements = housingList.map(housing => <h3 key={housing.id}>{housing.title}</h3>);

  return (
    <main className="main">
      <Hero text="Chez vous, partout et ailleurs" image={image} height="223px" />
      {housingListElements}
    </main>
  );
}

export default Home;
