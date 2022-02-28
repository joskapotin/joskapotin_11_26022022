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
  const { id } = useParams();
  console.log("data", data);
  console.log("param", id);

  const housing = data.find(item => item.id === id);

  const equipmentElements = housing.equipments.map((equipment, index) => (
    <li key={index} className="equipment-list__item">
      {equipment}
    </li>
  ));

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <main className="main housing__page">
      <Carousel className="housing__carousel" />
      <h1 className="housing__title">{housing.title}</h1>
      <p className="housing__location">{housing.location}</p>
      <TagList className="housing__taglist" tags={housing.tags} />
      <Rating className="housing__rating" rating={housing.rating} />
      <Host className="housing__host" host={housing.host} />
      <Accordion className="housing__description" title="Description">
        <p>{housing.description}</p>
      </Accordion>
      <Accordion className="housing__equipments" title="Equipements">
        <ul className="equipment-list">{equipmentElements}</ul>
      </Accordion>
    </main>
  );
}

export default Housing;
