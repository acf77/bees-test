import { Header, Username, BackArrow } from "./styles";

import backArrow from "../../assets/back-arrow-bees.svg";

interface HeaderProps {
  name: string;
}

export const HeaderComponent = ({ name }: HeaderProps) => {
  return (
    <Header>
      <BackArrow>
        <img src={backArrow} /> Go back
      </BackArrow>
      <Username>{name}</Username>
    </Header>
  );
};
