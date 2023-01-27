import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import UserImage from "assents/image/user.jpeg";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./UserCard.module.scss";
import { useMotion } from "shared/hooks/useMotion";

type Props = {
  name: string;
  companyName: string | undefined;
  handleRouteClick: () => void;
  onDelete: () => void;
};

export const UserCard = ({
  name,
  companyName,
  handleRouteClick,
  onDelete,
}: Props) => {
  const motionStyle = useMotion({ time: 0.5 });

  return (
    <Card sx={{ width: 258, height: 320 }} style={{ ...motionStyle }}>
      <CardActionArea>
        <CardMedia component="img" height="180" image={UserImage} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            style={{ marginTop: 8, marginBottom: 8 }}
          >
            {companyName ?? "Not work"}
          </Typography>

          <div className={styles.button_group}>
            <Button
              variant="contained"
              color="warning"
              size="small"
              className={styles.button}
              onClick={handleRouteClick}
            >
              Redakte et
            </Button>
            <Button
              color="error"
              size="small"
              className={styles.button}
              onClick={onDelete}
            >
              <DeleteIcon />
            </Button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
