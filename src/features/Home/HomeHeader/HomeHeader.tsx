import { Button, TextField, Typography } from "@mui/material";
import { ChangeEvent } from "react";
import styles from "styles/pages/Home.module.scss";

export const HomeHeader = ({
  setOpen,
  onSearch,
}: {
  setOpen: (data: boolean) => void;
  onSearch: (text: string) => void;
}) => {
  return (
    <div className={styles.content}>
      <Typography variant="h6" color="warning">
        İstifadəçilər
      </Typography>
      <div>
        <TextField
          variant="outlined"
          color="secondary"
          size="small"
          placeholder="Axtar..."
          style={{ marginRight: 8 }}
          onChange={(e: ChangeEvent) => onSearch(e.target.value)}
        />
        <Button
          variant="contained"
          color="warning"
          onClick={() => setOpen(true)}
        >
          Yarat
        </Button>
      </div>
    </div>
  );
};
