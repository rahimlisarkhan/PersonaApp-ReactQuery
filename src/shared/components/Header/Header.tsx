import styles from "./Header.module.scss";

import { Container } from "@mui/material";
import { AvatarOnline } from "ui/Avatar/Avatar";

export const Header = () => {
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
        <h1 className={styles.logo}>Persona</h1>
        <AvatarOnline />
      </Container>
    </header>
  );
};
