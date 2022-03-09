/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Snackbar notification
import MDSnackbar from "components/MDSnackbar";

// Modal component
import Modal from "components/ModalComponent";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

//Importing the text
import TermsAndConditional from "assets/text/TermsAndConditions.txt";

const initialForm = {
  name: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
  termsAndConditional: false,
}

function Cover() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState(false);
  const [checked, setChecked] = useState(false);
  const [success, setSuccess] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [termsAndConditionalText, setTermsAndConditionalText] = useState("");

    const handlerChange = (e) => {
      setForm({
          ...form,
          [e.target.name]: e.target.value,
      });      
  };

  const handlerSubmit = (e) => {
      e.preventDefault();
      
      if(!form.name || !form.lastname || !form.email || !form.password || !form.confirmPassword || !checked){
        setError(!error);
      }else{
        setSuccess(!success);
      }
    };

    const onCheckedChange = (e) => {
      setChecked(e.target.checked);
    }

    const onModalClick = (e) => {
      setModalState(!modalState);
      fetch(TermsAndConditional)
        .then(r => r.text())
        .then(text => {
          setTermsAndConditionalText(text);
          console.log(termsAndConditionalText);
      });
    }

  return (
    <CoverLayout image={bgImage}>
      <MDSnackbar
      color="error"
      icon="warning"
      title="Notificación Tekiah"
      content="Llena todos los campos para continuar con el registro (no olvides marcar terminos y condiciones)"
      open={error}
      dateTime=""
      onClose={handlerSubmit}
      close={handlerSubmit}
      bgWhite
    />
    <MDSnackbar
      color="success"
      icon="check"
      title="Notificación Tekiah"
      content="Acceso a cuenta realizado"
      open={success}
      dateTime=""
      onClose={handlerSubmit}
      close={handlerSubmit}
      bgWhite
    />
    <Modal
      color="info"
      icon="gavel"
      title="Terminos y condiciones legales"
      content={termsAndConditionalText}
      open={modalState}
      dateTime=""
      onClose={onModalClick}
      close={onModalClick}
      bgWhite
    />
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Únete a Tekiah hoy
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Llena los campos para empezar a administrar tu Iglesia
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handlerSubmit}>
            <MDBox mb={2}>
              <MDInput type="text" name="name" label="Nombre" variant="standard" fullWidth onChange={handlerChange} value={form.name}/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" name="lastname" label="Apellido" variant="standard" fullWidth onChange={handlerChange} value={form.lastname}/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="email" name="email" label="Correo electrónico " variant="standard" fullWidth onChange={handlerChange} value={form.email}/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" name="password" label="Contraseña" variant="standard" fullWidth onChange={handlerChange} value={form.password}/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" name="confirmPassword" label="Confirmar contraseña" variant="standard" fullWidth onChange={handlerChange} value={form.confirmPassword}/>
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox 
                checked={checked}
                onChange={onCheckedChange}
                />
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
                sx={{ cursor: "pointer", userSelect: "none"}}
              >
                Términos y Condiciones
              </MDTypography>
            </MDBox>
            {
              !checked 
              ?
              <MDBox mt={-1} mb={1} textAlign="center">
                <MDTypography  variant="caption" color="error">
                  Acepta términos y condiciones para continuar
                </MDTypography>
              </MDBox>
              : ""
            }
            <MDBox mt={2} mb={1}>
              <MDButton type="submit" variant="gradient" color="info" fullWidth>
                Iniciar sesión
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography  variant="button" color="text">
                ¿Ya tienes una cuenta?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Inicia sesión
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
