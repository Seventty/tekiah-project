import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import React, { useState } from "react";

const churchInitialForm = {
  churchName: "",
  denomination: "",
  phone: "",
  foundingPastor: "",
  currentPastor: "",
  location: "",
};

const ChurchForm = () => {
  const [churchForm, setChurchForm] = useState(churchInitialForm);

  return (
    <MDBox component="form" role="form" onSubmit={handlerSubmit}>
      <MDBox mb={2}>
        <MDInput
          type="text"
          name="churchName"
          label="Nombre"
          variant="standard"
          fullWidth
          onChange={handlerChange}
          value={churchForm.churchName}
        />
      </MDBox>
      <MDBox mb={2}>
        <MDInput
          type="text"
          name="denomination"
          label="Denominacion"
          variant="standard"
          fullWidth
          onChange={handlerChange}
          value={churchForm.denomination}
        />
      </MDBox>
      <MDBox mb={2}>
        <MDInput
          type="text"
          name="phone"
          label="Telefono"
          variant="standard"
          fullWidth
          onChange={handlerChange}
          value={churchForm.phone}
        />
      </MDBox>
      <MDBox mb={2}>
        <MDInput
          type="text"
          name="foundingPastor"
          label="Pastor fundador"
          variant="standard"
          fullWidth
          onChange={handlerChange}
          value={churchForm.foundingPastor}
        />
      </MDBox>
      <MDBox mb={2}>
        <MDInput
          type="text"
          name="currentPastor"
          label="Pastor actual"
          variant="standard"
          fullWidth
          onChange={handlerChange}
          value={churchForm.currentPastor}
        />
      </MDBox>
      <MDBox mb={2}>
        <MDInput
          type="text"
          name="ubication"
          label="Ubicacion"
          variant="standard"
          fullWidth
          onChange={handlerChange}
          value={churchForm.location}
        />
      </MDBox>
    </MDBox>
  );
};

export default ChurchForm;
