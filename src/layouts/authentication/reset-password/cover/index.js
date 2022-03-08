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
// State hook
import { useState } from "react";
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

//Notitifications
import MDSnackbar from "components/MDSnackbar";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-reset-cover.jpeg";

const initialForm = {
  email: "",
}

function Cover() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

    const handlerChange = (e) => {
      setForm({
          ...form,
          [e.target.name]: e.target.value,
      });      
  };

  const handlerSubmit = (e) => {
      e.preventDefault();

      if(!form.email){
        setError(!error);
        return;
      }else{
        setSuccess(!success);
      }
    };

  return (
    <CoverLayout coverHeight="50vh" image={bgImage}>
      <MDSnackbar
      color="error"
      icon="warning"
      title="Notificación Tekiah"
      content="Introduce el correo electronico con el que te registraste"
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
      content="Recibiras un correo de recuperacion en tu bandeja de correo electronico"
      open={success}
      dateTime=""
      onClose={handlerSubmit}
      close={handlerSubmit}
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
          py={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Reiniciar contraseña
          </MDTypography>
          <MDTypography display="block" fontWeight="medium" variant="caption" color="white" my={1}>
            Recibirás un correo de recuperación en los próximos 60 segundos
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handlerSubmit}>
            <MDBox mb={4}>
              <MDInput type="email" name="email" label="Correo electrónico" variant="standard" fullWidth onChange={handlerChange} value={form.email}/>
            </MDBox>
            <MDBox textAlign="center">
              <MDTypography variant="button" color="text">
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="text"
                  fontWeight="medium"
                >
                  Ir al inicio de sesión
                </MDTypography>
              </MDTypography>
            </MDBox>
            <MDBox mt={1} mb={1}>
              <MDButton type="submit" variant="gradient" color="info" fullWidth>
                Reiniciar
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
