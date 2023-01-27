import { Container } from "@mui/material";
import { Header } from "../Header";

type Props = {
  children: JSX.Element | React.ReactElement | any;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />

      <Container
        maxWidth="lg"
        style={{ marginTop: 50, marginBottom: 50, position: "relative" }}
      >
        {children}
      </Container>
    </>
  );
};
