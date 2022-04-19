import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Context } from "../../context/Context";
import { Background, Input, Check, Button } from "./styles";

export const HomePage = () => {
  const navigate = useNavigate();

  const { setState: setGlobalState } = useContext(Context);

  const [name, setName] = useState<string>("");
  const [alert, setAlert] = useState<boolean>(false);

  const handleInput = (e: any) => {
    e.preventDefault();

    const regex = /[\d.,]/;

    if (regex.test(name)) {
      setAlert(true);
    } else {
      setGlobalState({ name });
      navigate("/list");
    }
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
          <Check type="checkbox" />
          Are you older than 18 years old?
        </p>
        <Button disabled={name === ""} type="submit">
          Enter
        </Button>
        {alert && <p>Only letters are accepted.</p>}
      </form>
    </Background>
  );
};
