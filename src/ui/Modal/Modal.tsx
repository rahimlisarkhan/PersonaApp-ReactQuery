import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BasicModal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Modal = ({
  title,
  info,
  open,
  onClose,
  children,
}: {
  title: string;
  info: string;
  open: boolean;
  children: JSX.Element;
  onClose: () => void;
}) => {
  return (
    <BasicModal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2, mb: 4 }}>
          {info}
        </Typography>

        {children}
      </Box>
    </BasicModal>
  );
};
