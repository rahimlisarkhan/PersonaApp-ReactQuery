import { Button, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { isEmail } from "shared/utils/isEmail";
import { UserType } from "types";
import styles from "./EditForm.module.scss";

type Props = {
  onSave: (data: UserType) => void;
  userData: UserType;
};

const InitialForm = {
  name: "",
  phone: "",
  email: "",
};

export const EditForm = ({ userData, onSave }: Props) => {
  const [form, setForm] = useState<Partial<UserType>>(InitialForm);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) return;
    setForm(userData);
  }, [userData]);

  const handleForm = (e: ChangeEvent) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(form);
  };

  const handleDisaable = () => {
    if (!form.name || !form.phone || !form.email || !isEmail(form.email))
      return true;

    return false;
  };

  return (
    <div>
      <Container
        maxWidth="sm"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Typography variant="h6" color="warning">
          İstifadəçini redakte et
        </Typography>

        <TextField
          label="Ad Soyad"
          variant="outlined"
          color="success"
          name="name"
          value={form.name}
          error={!form.name}
          style={{ marginTop: 18 }}
          onChange={handleForm}
        />

        <TextField
          label="Email"
          type="email"
          variant="outlined"
          color="success"
          style={{ marginTop: 18 }}
          name="email"
          value={form.email}
          error={!form.email}
          className={styles.input}
          onChange={handleForm}
        />

        <TextField
          label="Mobil"
          variant="outlined"
          color="success"
          name="phone"
          style={{ marginTop: 18 }}
          error={!form.phone}
          value={form.phone}
          onChange={handleForm}
        />

        <Button
          variant="contained"
          color="warning"
          size="large"
          style={{ marginTop: 40 }}
          disabled={handleDisaable()}
          onClick={handleSubmit}
        >
          Məlumatları yenilə
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          style={{ marginTop: 12 }}
          onClick={() => navigate("..")}
        >
          Geri qayıt
        </Button>
      </Container>
    </div>
  );
};
