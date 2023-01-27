import styles from "./Header.module.scss";

import { Container, Typography } from "@mui/material";
import { AvatarOnline } from "ui/Avatar/Avatar";
import { useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          color="light"
          className={styles.logo}
          onClick={() => navigate("/")}
        >
          Persona
        </Typography>
        <AvatarOnline />
      </Container>
    </header>
  );
};
