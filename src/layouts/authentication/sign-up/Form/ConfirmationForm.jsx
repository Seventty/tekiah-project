import React from "react";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

const ConfirmationForm = () => {
  return (
    <MDBox>
      <MDTypography variant="body1">Bienvenido a Tekiah</MDTypography>
      <MDTypography variant="body2">
        puedes empezar a administra tu iglesia dando click en iniciar sesion. Tus ovejas tambien
        pueden registrarse en tu iglesia a traves de la aplicacion de Tekiah.
      </MDTypography>
    </MDBox>
  );
};

export default ConfirmationForm;
