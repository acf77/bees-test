import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { Background, Input, Check, Button } from "./styles";

export const HomePage = () => {
  //@ts-ignore
  const [setName] = useContext(Context);
  const [alert, setAlert] = useState<boolean>();

  const handleInput = (e: any) => {
    const regex = /[\d.,]/;

    if (regex.test(e.target.value)) {
      setAlert(true);
    } else {
      setName(e.target.value);
      setAlert(false);
    }
  };

  return (
    <Background>
      <p>Please, enter your full name below</p>
      <p>Only alphabetical characters are accepted</p>
      <Input
        pattern="[\d.,]"
        onChange={handleInput}
        type="text"
        placeholder="Full name"
      />
      <p>
        <Check type="checkbox" />
        Are you older than 18 years old?
      </p>
      <Button disabled={alert}>Enter</Button>
      {alert && <p>Only letters are accepted.</p>}
    </Background>
  );
};
