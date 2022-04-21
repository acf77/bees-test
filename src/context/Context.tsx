import React, { createContext, useState } from "react";

export interface IUserName {
  name?: string | undefined;
  breweryList?: [];
}

interface IContextProps {
  state: IUserName;
  setState: React.Dispatch<React.SetStateAction<IUserName>>;
}

export const DEFAULT_STATE: IContextProps = {
  state: {
    name: "",
    breweryList: [],
  },
  setState: () => {},
};

const Context = createContext<IContextProps>(DEFAULT_STATE);

const NameContextProvider = ({ children }: any) => {
  const [state, setState] = useState(DEFAULT_STATE.state);

  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
};

export { Context, NameContextProvider };
