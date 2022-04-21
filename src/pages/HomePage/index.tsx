import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Context } from "../../context/Context";
import { Background, Input, Check, Button } from "./styles";

import beesLogo from "../../assets/bees-log.svg";

export const HomePage = () => {
  const navigate = useNavigate();

  const { setState } = useContext(Context);

  const [name, setName] = useState<string>("");
  const [isOver18, setIsOver18] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);

  const handleInput = (e: any) => {
    e.preventDefault();

    const regex = /[\d.,]/;

    if (regex.test(name)) {
      setAlert(true);
    } else if (name === "") {
      setAlert(true);
    } else {
      setState({ name });
      localStorage.setItem("username", JSON.stringify(name));
      navigate("/list");
    }
  };

  const handleAgeCheck = () => {
    setIsOver18(!isOver18);
  };

  return (
    <Background>
      <p>Please, enter your full name below</p>
      <p>Only alphabetical characters are accepted</p>
      <form onSubmit={handleInput}>
        <Input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full name"
        />
        <p>
          <Check type="checkbox" onChange={handleAgeCheck} />
          Are you older than 18 years old?
        </p>
        <Button disabled={!isOver18} type="submit">
          Enter
        </Button>
        {alert && <p>Only letters are accepted.</p>}
      </form>
      <img alt="bees logo" src={beesLogo} />
    </Background>
  );
};
