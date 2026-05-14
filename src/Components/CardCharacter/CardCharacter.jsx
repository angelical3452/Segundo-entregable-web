import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./CardCharacter.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const CardCharacter = ({
  name,
  img,
  species,
  status,
  gender,
  origin,
  location,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <>
      <Card className="Card" onClick={handleOpen}>
        <CardActionArea className="Cardarea">
          <CardMedia className="img" component="img" image={img} alt={name} />
          <CardContent className="contenido">
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#cbd5e1",
                fontSize: "0.95rem",
              }}
            >
              {species} - {status} - {gender}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal">
            <div className="modal-Imagen">
              <img src={img} alt={name} />
            </div>
            <div className="modal-Text">
              <Typography variant="h4">{name}</Typography>
              <div className="info">
                <span>{species}</span>
                <span
                  className={
                    status === "Alive"
                      ? "status-alive"
                      : status === "Dead"
                        ? "status-dead"
                        : "status-unknown"
                  }
                >
                  {status}
                </span>
                <span>{gender}</span>
              </div>
              <p>
                <strong>Origin:</strong> {origin}
              </p>
              <p>
                <strong>Location:</strong> {location}
              </p>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default CardCharacter;
