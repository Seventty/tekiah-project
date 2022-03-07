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
import Switch from "@mui/material/Switch";
/* import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google"; */

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Snackbar notification
import MDSnackbar from "components/MDSnackbar";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

const initialForm = {
  email: "",
  password: "",
}

function Basic() {
    const [form, setForm] = useState(initialForm);
    const [rememberMe, setRememberMe] = useState(false);

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

      if(!form.email || !form.password){
        setError(!error);
        return;
      }else{
        setSuccess(!success);
      }
    };

    const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <BasicLayout image={bgImage}>
      <MDSnackbar
      color="error"
      icon="warning"
      title="Notificación Tekiah"
      content="Introduce ambos campos."
      open={error}
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
      onClose={handlerSubmit}
      close={handlerSubmit}
      bgWhite
    />
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="body1" fontFamily="Praise" style={{"fontSize": "60px"}}  color="white" mt={1}>
            Tekiah
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handlerSubmit}>
            <MDBox mb={2}>
              <MDInput type="email" name="email" label="Correo electrónico" fullWidth onChange={handlerChange} value={form.email}/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" name="password" label="Contraseña" fullWidth onChange={handlerChange} value={form.password}/>
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Recuerdame
              </MDTypography>
            </MDBox>
            <MDBox textAlign="center">
              <MDTypography variant="button" color="text">
                <MDTypography
                  component={Link}
                  to="/authentication/reset-password/cover"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  ¿Has olvidado tu contraseña?
                </MDTypography>
              </MDTypography>
            </MDBox>
            <MDBox mt={1} mb={1}>
              <MDButton type="submit" variant="gradient" color="info" fullWidth>
                Inicia Sesión
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                ¿No tienes una cuenta?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Registrate aquí
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
