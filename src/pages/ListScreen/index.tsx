import { useContext, useState, useEffect } from "react";
import { Container, ShowMoreButton, Loading } from "./styles";
import axios from "axios";

import { Context } from "../../context/Context";

import { HeaderComponent } from "../../components/Header";
import { BreweryCard } from "../../components/BreweryCard";

import beesLogo from "../../assets/bees-log.svg";

export const ListScreen = () => {
  const { state, setState } = useContext(Context);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const { breweryList, name } = state;

  const url = "https://api.openbrewerydb.org/breweries";

  useEffect(() => {
    const request = async () => {
      try {
        const req = await axios.get(url);
        setState({ breweryList: req.data, name: name });
        setLoading(false);
      } catch (error: any) {
        console.error(error.message);
      }
    };
    request();
  }, [name, setState]);

  return (
    <>
      <HeaderComponent name={name} />
      <Container>
        {loading ? (
          <Loading src={beesLogo} />
        ) : !showMore ? (
          breweryList
            ?.slice(0, 6)
            .map((b: any) => (
              <BreweryCard
                key={b.id}
                id={b.id}
                brewery_name={b.name}
                street={b.street}
                city={b.city}
                brewery_state={b.state}
                country={b.country}
                brewery_type={b.brewery_type}
                postal_code={b.postal_code}
                phone={b.phone}
                b={b}
              />
            ))
        ) : (
          breweryList?.map((b: any) => (
            <BreweryCard
              key={b.id}
              id={b.id}
              brewery_name={b.name}
              street={b.street}
              city={b.city}
              brewery_state={b.state}
              country={b.country}
              brewery_type={b.brewery_type}
              postal_code={b.postal_code}
              phone={b.phone}
              b={b}
            />
          ))
        )}
      </Container>
      <ShowMoreButton onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show less" : "Show more"}
      </ShowMoreButton>
    </>
  );
};
