import { Container } from "@mui/material";
import { Header } from "../Header";

type Props = {
  children: JSX.Element | React.ReactElement | HTMLElement;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />

      <Container maxWidth="lg" style={{ marginTop: 50, marginBottom: 50 }}>
        {children}
      </Container>
    </>
  );
};
