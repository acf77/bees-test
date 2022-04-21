import {
  Card,
  Title,
  Address,
  YellowToast,
  YellowToastText,
  YellowToastContainer,
  TrashButton,
  AddMoreInput,
} from "./styles";

import { useContext, useState } from "react";
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

  const [addMoreInput, setAddMoreInput] = useState<boolean>(false);
  const [addMoreInputValue, setAddMoreInputValue] =
    useState<string>("Add more");

  const handleDeleteCard = () => {
    breweryList?.splice(
      breweryList?.findIndex((brewery: { id: string }) => brewery.id === id),
      1
    );

    setState({ breweryList: breweryList, name: name });
  };

  const handleAddMore = () => {
    setAddMoreInput(true);
  };

  const handleKeyPress = (e: { key: string; target: any }) => {
    if (e.key === "Enter") {
      setAddMoreInputValue(e.target.value);
      setAddMoreInput(false);
    } else if (e.key === "Escape") {
      setAddMoreInput(false);
    }
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
          <YellowToast onClick={handleAddMore}>
            <YellowToastText>
              {addMoreInput ? (
                <>
                  <AddMoreInput
                    maxLength={10}
                    onKeyDown={(e) => handleKeyPress(e)}
                  />
                </>
              ) : (
                <>
                  <IoIosAddCircleOutline size={16} /> {addMoreInputValue}
                </>
              )}
            </YellowToastText>
          </YellowToast>
        </YellowToastContainer>
      </Card>
    </>
  );
};
