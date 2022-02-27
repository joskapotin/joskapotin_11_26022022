import Hero from "../components/hero";
import image from "../assets/images/hero01.png";

import HousingList from "../components/HousingList";

function Home() {
  return (
    <main className="main">
      <Hero text="Chez vous, partout et ailleurs" image={image} />
      <HousingList />
    </main>
  );
}

export default Home;
