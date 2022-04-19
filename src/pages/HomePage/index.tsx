import { Background, Input, Check, Button } from "./styles";

export const HomePage = () => {
  return (
    <Background>
      <p>Please, enter your full name below</p>
      <p>Only alphabetical characters are accepted</p>
      <Input type="text" placeholder="Full name" />
      <p>
        {" "}
        <Check type="checkbox" />
        Are you older than 18 years old?
      </p>
      <Button>Enter</Button>
    </Background>
  );
};
