import { Card, Title, Address } from "./styles";

export interface BreweryCardProps {
  name: string;
  street: string;
  city: string;
  state: string;
  country: string;
  // zipCode: number;
  // size: string;
  // phone: number;
}

export const BreweryCard = ({
  name,
  street,
  city,
  state,
  country,
}: BreweryCardProps) => {
  return (
    <>
      <Card>
        <Title>{name}</Title>
        <Address> {street} </Address>
        <Address>
          {city}, {state} - {country}
        </Address>
      </Card>
    </>
  );
};
