import React, { useState } from "react";

import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";

//Importing the text
import TermsAndConditional from "assets/text/TermsAndConditions.txt";

// Modal component
import Modal from "components/ModalComponent";
import { CheckBox } from "@mui/icons-material";

const initialForm = {
  name: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
  termsAndConditional: false,
};

const PastorForm = () => {
  const [form, setForm] = useState(initialForm);
  const [termsAndConditionalText, setTermsAndConditionalText] = useState("");
  const [passwordUnConfirmed, setPasswordUnConfirmed] = useState(null);
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(false);
  const [modalState, setModalState] = useState(false);

  const handlerSubmit = (e) => {
    e.preventDefault();
    /* 
      if(!form.name || !form.lastname || !form.email || !form.password || !form.confirmPassword || !checked){
        setError(!error);
      }else{
          if(form.password === form.confirmPassword){
          activeStep === 3 ? setActiveStep(0) : setActiveStep(activeStep + 1)
          setPasswordUnConfirmed(false);

        }else{
          setPasswordUnConfirmed(true);
        }
      } */
  };

  const handlerChange = (e) => {
    /* setForm({
      ...form,
      [e.target.name]: e.target.value,
    }); */
  };

  const onCheckedChange = (e) => {
    setChecked(e.target.checked);
  };

  const onModalClick = (e) => {
    /* setModalState(!modalState);
    fetch(TermsAndConditional)
      .then((r) => r.text())
      .then((text) => {
        setTermsAndConditionalText(text);
      }); */
  };

  return (
    <MDBox component="form" role="form" onSubmit={handlerSubmit}>
      <MDBox mb={2}>
        <MDInput
          type="text"
          name="name"
          label="Nombre"
          variant="standard"
          fullWidth
          onChange={handlerChange}
          value={form.name}
        />
      </MDBox>
      <MDBox mb={2}>
        <MDInput
          type="text"
          name="lastname"
          label="Apellido"
          variant="standard"
          fullWidth
          onChange={handlerChange}
          value={form.lastname}
        />
      </MDBox>
      <MDBox mb={2}>
        <MDInput
          type="email"
          name="email"
          label="Correo electrónico "
          variant="standard"
          fullWidth
          onChange={handlerChange}
          value={form.email}
        />
      </MDBox>
      <MDBox mb={2}>
        <MDInput
          type="password"
          name="password"
          label="Contraseña"
          variant="standard"
          fullWidth
          onChange={handlerChange}
          value={form.password}
        />
      </MDBox>
      <MDBox mb={2}>
        <MDInput
          type="password"
          name="confirmPassword"
          label="Confirmar contraseña"
          variant="standard"
          fullWidth
          onChange={handlerChange}
          value={form.confirmPassword}
          error={passwordUnConfirmed}
        />
      </MDBox>
      <MDBox display="flex" alignItems="center" ml={-1}>
        <CheckBox checked={checked} onChange={onCheckedChange} />
        <MDTypography
          variant="button"
          fontWeight="regular"
          color="text"
          sx={{ userSelect: "none", ml: -1 }}
        >
          &nbsp;&nbsp;Acepto&nbsp;
        </MDTypography>
        <MDTypography
          component="a"
          variant="button"
          fontWeight="bold"
          color="info"
          textGradient
          onClick={onModalClick}
          sx={{ cursor: "pointer", userSelect: "none" }}
        >
          Términos y Condiciones
        </MDTypography>
        {!checked && (
          <MDBox mt={-1} mb={1} textAlign="center">
            <MDTypography variant="caption" color="error">
              Acepta términos y condiciones para continuar
            </MDTypography>
          </MDBox>
        )}
      </MDBox>
    </MDBox>
  );
};

export default PastorForm;

{
  /* <MDSnackbar
        color="error"
        icon="warning"
        title="Notificación Tekiah"
        content="Llena todos los campos para continuar con el registro"
        open={error}
        dateTime=""
        onClose={handlerSubmit}
        close={handlerSubmit}
        bgWhite
      /> */
}
{
  /* <Modal
        color="info"
        icon="gavel"
        title="Terminos y condiciones legales"
        content={termsAndConditionalText}
        open={modalState}
        dateTime=""
        onClose={onModalClick}
        close={onModalClick}
        bgWhite
      /> */
}
