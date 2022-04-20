import {
  Card,
  Title,
  Address,
  YellowToast,
  YellowToastText,
  YellowToastContainer,
} from "./styles";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";

import brewery_type_icon from "../../assets/brewery_type_icon.svg";

export interface BreweryCardProps {
  name: string;
  street: string;
  city: string;
  state: string;
  country: string;
  brewery_type: string;
  postal_code: number;
  phone: number;
}

export const BreweryCard = ({
  name,
  street,
  city,
  state,
  country,
  brewery_type,
  postal_code,
  phone,
}: BreweryCardProps) => {
  return (
    <>
      <Card>
        <Title>{name}</Title>
        <Address> {street ? street : "No address availabe"} </Address>
        <Address>
          {city}, {state} - {country}
        </Address>
        <YellowToastContainer>
          <YellowToast>
            <YellowToastText>
              <img src={brewery_type_icon} /> {brewery_type}
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
