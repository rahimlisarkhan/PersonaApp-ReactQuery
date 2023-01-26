import { Button, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { isEmail } from "shared/utils/isEmail";
import { UserType } from "types";
import styles from "./UserForm.module.scss";

export const UserForm = ({
  onSubmitForm,
}: {
  onSubmitForm: (form: Partial<UserType>) => void;
}) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleForm = (e: ChangeEvent) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmitForm(form);
  };

  const handleDisaable = () => {
    if (!form.name || !form.phone || !form.email || !isEmail(form.email))
      return true;

    return false;
  };

  return (
    <div className={styles.formGroup}>
      <TextField
        label="Ad Soyad"
        variant="outlined"
        color="warning"
        name="name"
        error={!form.name}
        onChange={handleForm}
      />

      <TextField
        label="Email"
        type="email"
        variant="outlined"
        color="success"
        className={styles.input}
        style={{ marginTop: 18 }}
        name="email"
        error={!form.email}
        onChange={handleForm}
      />

      <TextField
        label="Mobil"
        variant="outlined"
        color="success"
        name="phone"
        style={{ marginTop: 18 }}
        error={!form.phone}
        onChange={handleForm}
      />

      <Button
        variant="contained"
        color="success"
        size="large"
        style={{ marginTop: 30 }}
        disabled={handleDisaable()}
        onClick={handleSubmit}
      >
        Yarat
      </Button>
    </div>
  );
};
