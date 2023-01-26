import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import UserImage from "assents/image/user.jpeg";

type Props = {
  name: string;
  companyName: string | undefined;
  handleRouteClick: () => void;
};

export const UserCard = ({ name, companyName, handleRouteClick }: Props) => {
  return (
    <Card sx={{ width: 258, height: 320 }}>
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

          <Button
            variant="contained"
            color="warning"
            size="small"
            onClick={handleRouteClick}
          >
            Redakte et
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
