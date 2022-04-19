import { NameContextProvider } from "./Context";

export const GlobalContext = ({ children }: any) => {
  return <NameContextProvider>{children}</NameContextProvider>;
};
