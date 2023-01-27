import CircularProgress from "@mui/material/CircularProgress";
import styles from "./Loading.module.scss";

export const Loading = () => {
  return (
    <div className={styles.loading}>
      <CircularProgress color="secondary" />
    </div>
  );
};
