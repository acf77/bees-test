import { useContext } from "react";
import { HeaderComponent } from "../../components/Header";
import { Context } from "../../context/Context";

export const ListScreen = () => {
  //@ts-ignore
  const { state, setState } = useContext(Context);

  return <HeaderComponent name={state.name} />;
};
