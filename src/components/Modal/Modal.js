import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { db } from "../../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { useSelector } from "react-redux";
import "./Modal.Module.css";

const Modal = ({ open, setOpen }) => {
  const [title, setTitle] = useState();
  const [type, setType] = useState();
  const [time, setTime] = useState();
  const [calory, setCalory] = useState();
  const [food1, setFood1] = useState();
  const [food2, setFood2] = useState();
  const [food3, setFood3] = useState();
  const [food4, setFood4] = useState();
  const [food5, setFood5] = useState();
  const [food6, setFood6] = useState();
  const user = useSelector((state) => state.diet.user);
  const [description, setDescription] = useState();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const handleClose = () => {
    setOpen(false);
  };
  const FixedButton = styled(Button)({
    backgroundColor: "#222831",
    color: "#fff",
    marginTop: 30,
    "&:hover": {
      backgroundColor: "#393e46",
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const doc = {
      title: title,
      type: type,
      time: time,
      calory: calory,
      food1: food1,
      food2: food2,
      food3: food3,
      food4: food4,
      food5: food5,
      food6: food6,
      description: description,
      seller: user.displayName,
    };
    const ref = collection(db, "dietList");
    try {
      await addDoc(ref, {
        ...doc,
        email: user.email,
      });
      handleClose();
      console.log("eklendi");
    } catch (error) {
      console.log(error);
    }
    setTitle("");
    setTime("");
    setType("");
    setCalory("");
    setDescription("");
  };

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <form className="dialog" onSubmit={handleSubmit}>
          <DialogTitle id="responsive-dialog-title">
            {"Yeni bir diyet listesi ekle"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText className="dialog-content-text">
              Diyet listesinin içeriklerini buradan oluşturabilirsiniz.
              Kullanıcıya özel diyet programlarının detaylarını burada
              açıklayabilirsiniz. Diyet listesinde bulunan besinlerin
              veritabanında olup olmadığını kontrol etmek için ürünler kısmından
              ingilizce olarak kontrol sağlayınız.
            </DialogContentText>
            <div className="dialog-content">
              <TextField
                margin="dense"
                id="name"
                label="Diyet Listesi Adı"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                autoComplete="off"
                fullWidth
                required
                variant="standard"
              />
              <TextField
                margin="dense"
                id="name"
                label="Diyet Tipi"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
                autoComplete="off"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                margin="dense"
                id="name"
                label="Diyet Zamanı"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
                autoComplete="off"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                margin="dense"
                id="name"
                label="Diyet Kalorisi"
                required
                value={calory}
                onChange={(e) => setCalory(e.target.value)}
                autoComplete="off"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                margin="dense"
                id="name"
                label="1. Besin"
                required
                value={food1}
                onChange={(e) => setFood1(e.target.value)}
                autoComplete="off"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                margin="dense"
                id="name"
                label="2. Besin"
                required
                value={food2}
                onChange={(e) => setFood2(e.target.value)}
                autoComplete="off"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                margin="dense"
                id="name"
                label="3. Besin"
                required
                value={food3}
                onChange={(e) => setFood3(e.target.value)}
                autoComplete="off"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                margin="dense"
                id="name"
                label="4. Besin"
                required
                value={food4}
                onChange={(e) => setFood4(e.target.value)}
                autoComplete="off"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                margin="dense"
                id="name"
                label="5. Besin"
                required
                value={food5}
                onChange={(e) => setFood5(e.target.value)}
                autoComplete="off"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                margin="dense"
                id="name"
                label="6. Besin"
                required
                value={food6}
                onChange={(e) => setFood6(e.target.value)}
                autoComplete="off"
                type="text"
                fullWidth
                variant="standard"
              />
              {/* <Box>
              <FormControl fullWidth sx={{ mt: 3 }}>
                <InputLabel id="demo-simple-select-label">
                  Kategori Seçiniz
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  required
                  label="Kategori Seçiniz"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((category, index) => (
                    <MenuItem value={category} key={index}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box> */}
            </div>
            <TextField
              margin="dense"
              id="outlined-multiline-static"
              autoComplete="off"
              label="Diyet Açıklaması"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              fullWidth
              variant="standard"
              rows={4}
            />
            <div className="form-btn-group">
              <FixedButton className="modal-btn" type="submit">
                Ürünü Ekle
              </FixedButton>
              <FixedButton className="modal-btn" onClick={() => handleClose()}>
                İptal Et
              </FixedButton>
            </div>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};

export default Modal;
