import {
  Card,
  Title,
  Address,
  YellowToast,
  YellowToastText,
  YellowToastContainer,
  TrashButton,
} from "./styles";
import { useContext } from "react";
import { Context } from "../../context/Context";

import { HiOutlineLocationMarker, HiTrash } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";

import brewery_type_icon from "../../assets/brewery_type_icon.svg";

export interface BreweryCardProps {
  id: string;
  brewery_name: string;
  street: string;
  city: string;
  brewery_state: string;
  country: string;
  brewery_type: string;
  postal_code: number;
  phone: number;
  b: any;
}

export const BreweryCard = ({
  id,
  brewery_name,
  street,
  city,
  brewery_state,
  country,
  brewery_type,
  postal_code,
  phone,
  b,
}: BreweryCardProps) => {
  const { state, setState } = useContext(Context);
  const { breweryList, name } = state;

  const handleDeleteCard = () => {
    breweryList?.splice(
      breweryList?.findIndex((brewery: any) => brewery.id === id),
      1
    );

    setState({ breweryList: breweryList, name: name });
  };

  return (
    <>
      <Card>
        <TrashButton onClick={handleDeleteCard}>
          <HiTrash />
        </TrashButton>
        <Title>{brewery_name}</Title>
        <Address> {street ? street : "No address availabe"} </Address>
        <Address>
          {city}, {brewery_state} - {country}
        </Address>
        <YellowToastContainer>
          <YellowToast>
            <YellowToastText>
              <img alt="brewery type icon" src={brewery_type_icon} />{" "}
              {brewery_type}
            </YellowToastText>
          </YellowToast>
          <YellowToast>
            <YellowToastText>
              <HiOutlineLocationMarker size={16} /> {postal_code}
            </YellowToastText>
          </YellowToast>
        </YellowToastContainer>
        <YellowToastContainer>
          <YellowToast>
            <YellowToastText>
              <BsTelephone size={16} /> {phone ? phone : "Not availabe"}
            </YellowToastText>
          </YellowToast>
          <YellowToast>
            <YellowToastText>
              <IoIosAddCircleOutline size={16} /> add more
            </YellowToastText>
          </YellowToast>
        </YellowToastContainer>
      </Card>
    </>
  );
};
