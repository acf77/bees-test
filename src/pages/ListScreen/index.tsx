import { useContext, useState, useEffect } from "react";
import { Container, ShowMoreButton } from "./styles";
import { HeaderComponent } from "../../components/Header";
import { Context } from "../../context/Context";
import { BreweryCard } from "../../components/BreweryCard";
// import useGet from "../../hooks/useGet";
import axios from "axios";

interface ReqDataProps {
  map: (b: any) => void;
}

export const ListScreen = () => {
  //@ts-ignore
  const { state, setState } = useContext(Context);
  const [reqData, setReqData] = useState<ReqDataProps>();
  const [showMore, setShowMore] = useState<boolean>(false);

  const url = "https://api.openbrewerydb.org/breweries";

  // const list = useGet({ link: url });

  useEffect(() => {
    const request = async () => {
      try {
        const req = await axios.get(url);
        setReqData(req.data);
      } catch (error: any) {
        console.error(error.message);
      }
    };
    request();
  }, [reqData]);

  return (
    <>
      <HeaderComponent name={state.name} />
      <Container>
        {!showMore
          ? reqData &&
            reqData
              // @ts-ignore
              .slice(0, 6)
              .map((b: any) => (
                <BreweryCard
                  name={b.name}
                  street={b.street}
                  city={b.city}
                  state={b.state}
                  country={b.country}
                  brewery_type={b.brewery_type}
                  postal_code={b.postal_code}
                  phone={b.phone}
                />
              ))
          : reqData &&
            reqData.map((b: any) => (
              <BreweryCard
                name={b.name}
                street={b.street}
                city={b.city}
                state={b.state}
                country={b.country}
                brewery_type={b.brewery_type}
                postal_code={b.postal_code}
                phone={b.phone}
              />
            ))}
        <ShowMoreButton onClick={(e) => setShowMore(!showMore)}>
          {showMore ? "Show less" : "Show more"}
        </ShowMoreButton>
      </Container>
    </>
  );
};
