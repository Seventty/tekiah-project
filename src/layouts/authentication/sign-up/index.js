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

import { useState, useEffect } from "react";

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

// Stepper
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

// Prototype and style structure of stepper
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

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
import efesiosQuote from "assets/text/efesiosQuote.txt";

// Step Connector
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

// Check icon
import Check from '@mui/icons-material/Check';

const initialForm = {
  name: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
  termsAndConditional: false,
}

const churchInitialForm = {
  churchName: "",
  denomination: "",
  phone: "",
  foundingPastor: "",
  currentPastor: "",
  location: ""
}

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#00ccff',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#00ccff',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.grey[800],
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.grey[700],
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#00ccff',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#00ccff',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const steps = ['Datos del pastor', 'Datos de la Iglesia', "Dios te bendiga"];

function Cover() {
  const [form, setForm] = useState(initialForm);
  const [churchForm, setChurchForm] = useState(churchInitialForm);
  const [passwordUnConfirmed, setPasswordUnConfirmed] = useState(null);
  const [error, setError] = useState(false);
  const [checked, setChecked] = useState(false);
  const [success, setSuccess] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [termsAndConditionalText, setTermsAndConditionalText] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [efesiosText, setEfesiosText] = useState("");

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
          if(form.password === form.confirmPassword){
          activeStep === 3 ? setActiveStep(0) : setActiveStep(activeStep + 1)
          activeStep === 2 && setSuccess(!success)
          setPasswordUnConfirmed(false);
        }else{
          setPasswordUnConfirmed(true);
        }
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
      });
    }

    useEffect(() => {
      fetch(efesiosQuote)
        .then(r => r.text())
        .then(text => {
          setEfesiosText(text);
      });
    }, [])
    

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
      content="Registro completado, bienvenido a Tekiah."
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
        {/* Aqui empieza el stepper */}
          <MDBox pt={2}>
            <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
              {steps.map((step) => (
                <Step key={step}>
                  <StepLabel StepIconComponent={QontoStepIcon}>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </MDBox>
        {/* Aqui termina el stepper */}
        <MDBox pt={4} pb={3} px={3} mt={-1}>
          <MDBox component="form" role="form" onSubmit={handlerSubmit}>

              {/* User form */}
            {
              activeStep === 0 &&
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
                <MDInput type="password" name="password" label="Contraseña" variant="standard" fullWidth onChange={handlerChange} value={form.password} />
              </MDBox>
              <MDBox mb={2}>
                <MDInput type="password" name="confirmPassword" label="Confirmar contraseña" variant="standard" fullWidth onChange={handlerChange} value={form.confirmPassword} error={passwordUnConfirmed} />
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
            </MDBox>
            }

                {/* Church form  */}
            {
              activeStep === 1 &&
              <MDBox component="form" role="form" onSubmit={handlerSubmit}>
                <MDBox mb={2}>
                  <MDInput type="text" name="churchName" label="Nombre" variant="standard" fullWidth onChange={handlerChange} value={churchForm.churchName}/>
                </MDBox>
                <MDBox mb={2}>
                  <MDInput type="text" name="denomination" label="Denominacion" variant="standard" fullWidth onChange={handlerChange} value={churchForm.denomination}/>
                </MDBox>
                <MDBox mb={2}>
                  <MDInput type="text" name="phone" label="Telefono" variant="standard" fullWidth onChange={handlerChange} value={churchForm.phone}/>
                </MDBox>
                <MDBox mb={2}>
                  <MDInput type="text" name="foundingPastor" label="Pastor fundador" variant="standard" fullWidth onChange={handlerChange} value={churchForm.foundingPastor}/>
                </MDBox>
                <MDBox mb={2}>
                  <MDInput type="text" name="currentPastor" label="Pastor actual" variant="standard" fullWidth onChange={handlerChange} value={churchForm.currentPastor}/>
                </MDBox>
                <MDBox mb={2}>
                  <MDInput type="text" name="ubication" label="Ubicacion" variant="standard" fullWidth onChange={handlerChange} value={churchForm.location}/>
                </MDBox>
              </MDBox>
            }

              {/* biblical passage */}
            {
              activeStep === 2 &&
                <MDBox>
                  <MDBox
                  p={0}
                  sx={{
                     textAlign: "center",
                     }}
                  >
                    <MDTypography variant="body2" fontWeight="medium">Efesios 3:14-19</MDTypography>
                  </MDBox>
                  <MDBox
                    mt={1}
                    sx={{
                      textAlign: "left",
                      }}
                  >
                  <MDTypography variant="subtitle2" fontWeight="light">{efesiosText}</MDTypography>
                  </MDBox>
                </MDBox>
            }

              {/* Welcome to Tekiah */}
            {
              activeStep === 3 &&
                <MDBox>
                  <MDTypography variant="body1">Bienvenido a Tekiah</MDTypography>
                  <MDTypography variant="body2">puedes empezar a administra tu iglesia dando click en iniciar sesion. Tus ovejas tambien pueden registrarse en tu iglesia a traves de la aplicacion de Tekiah.</MDTypography>
                </MDBox>
            }

            {
              (!checked && activeStep === 0) 
              &&
              <MDBox mt={-1} mb={1} textAlign="center">
                <MDTypography  variant="caption" color="error">
                  Acepta términos y condiciones para continuar
                </MDTypography>
              </MDBox>
            }

            <MDBox mt={2} mb={1}>
              <MDButton type="submit" variant="gradient" color="info" fullWidth>
                Continuar
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
      <MDBox mt={3}/>
    </CoverLayout>
  );
}

export default Cover;
