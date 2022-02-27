import { useContext } from "react";
import { HousingContext } from "../contexts/HousingContext";
import HousingCard from "./HousingCard";
import Loading from "../components/Loading";
import Error from "../components/Error";

function HousingList() {
  const { data, error } = useContext(HousingContext);

  let content = <Loading />;
  if (error) {
    content = <Error />;
  }
  if (data) {
    content = data.map(housing => <HousingCard key={housing.id} housing={housing} />);
  }

  return <div className="card-grid">{content}</div>;
}

export default HousingList;
