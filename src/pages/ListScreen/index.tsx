import { useContext, useState, useEffect } from "react";
import { Container, ShowMoreButton } from "./styles";
import { HeaderComponent } from "../../components/Header";
import { Context } from "../../context/Context";
import { BreweryCard } from "../../components/BreweryCard";
import axios from "axios";

export const ListScreen = () => {
  const { state, setState } = useContext(Context);
  const [showMore, setShowMore] = useState<boolean>(false);

  const { breweryList, name } = state;

  const url = "https://api.openbrewerydb.org/breweries";

  useEffect(() => {
    const request = async () => {
      try {
        const req = await axios.get(url);
        setState({ breweryList: req.data, name: name });
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
        {!showMore
          ? breweryList
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
          : breweryList?.map((b: any) => (
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
            ))}
      </Container>
      <ShowMoreButton onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show less" : "Show more"}
      </ShowMoreButton>
    </>
  );
};
