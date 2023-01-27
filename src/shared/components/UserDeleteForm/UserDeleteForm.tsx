import { Button } from "@mui/material";
import styles from "./UserDeleteForm.module.scss";

type Props = {
  onConfirm: () => void;
  onCancel: () => void;
};

export const UserDeleteForm = ({ onConfirm, onCancel }: Props) => {
  return (
    <div className={styles.button_group}>
      <Button
        variant="outlined"
        className={styles.button}
        color="secondary"
        onClick={onCancel}
      >
        İmtina
      </Button>
      <Button
        variant="contained"
        className={styles.button}
        color="error"
        onClick={onConfirm}
      >
        İstifadəçini sil
      </Button>
    </div>
  );
};
