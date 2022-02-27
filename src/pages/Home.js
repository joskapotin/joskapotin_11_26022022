import { useContext } from "react";
import { HousingContext } from "../HousingContext";

import Hero from "../components/hero";
import Housing from "../components/Housing";
import image from "../assets/images/hero01.png";

function Home() {
  const { housingList } = useContext(HousingContext);

  const housingListElements = housingList.map(housing => (
    <Housing key={housing.id} housing={housing} />
  ));

  return (
    <main className="main">
      <Hero text="Chez vous, partout et ailleurs" image={image} height="223px" />
      <section className="card-grid">{housingListElements}</section> {/* faire un composant*/}
    </main>
  );
}

export default Home;
