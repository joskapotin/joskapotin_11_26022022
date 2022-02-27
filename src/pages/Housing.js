import { useContext } from "react";
import { useParams } from "react-router-dom";
import { HousingContext } from "../contexts/HousingContext";

import Loading from "../components/Loading";
import Error from "../components/Error";
import Carousel from "../components/Carousel";
import TagList from "../components/TagList";
import Rating from "../components/Rating";
import Host from "../components/Host";
import Accordion from "../components/Accordion";

function Housing() {
  const { data, loading, error } = useContext(HousingContext);
  console.log(data);
  const { id } = useParams();

  const housing = data.find(item => item.id === id);

  const equipmentElements = housing.equipments.map((equipment, index) => (
    <li key={index} className="equipment-list__item">
      {equipment}
    </li>
  ));

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <main className="main">
      <Carousel />
      <h1 className="h1">{housing.title}</h1>
      <p className="housing__location">{housing.location}</p>
      <TagList tags={housing.tags} />
      <Rating rating={housing.rating} />
      <Host host={housing.host} />
      <Accordion title="Description">
        <p>{housing.description}</p>
      </Accordion>
      <Accordion title="Equipements">{equipmentElements}</Accordion>
    </main>
  );
}

export default Housing;
