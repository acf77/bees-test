import { Header, Username, BackArrow } from "./styles";

import backArrow from "../../assets/back-arrow-bees.svg";
import { Link } from "react-router-dom";

interface HeaderProps {
  name: string | undefined;
}

export const HeaderComponent = ({ name }: HeaderProps) => {
  return (
    <Header>
      <Link to="/">
        <BackArrow>
          <img alt="back home arrow" src={backArrow} /> Go back
        </BackArrow>
      </Link>
      <Username>{name}</Username>
    </Header>
  );
};
