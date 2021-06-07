import React, { useEffect, useState } from 'react';
import PersonalData from './PersonalData';
import UserData from './UserData';
import AddressData from './AddressData'
import Typography from "@material-ui/core/Typography"
import Stepper from "@material-ui/core/Stepper"
import { Step,StepLabel } from '@material-ui/core';
import {cpfValidation, passwordValidation} from "../../utils/Validations"




function RegisterForm(props) {
  const forms = [
    <UserData handleForm={handleData} validations={{password:passwordValidation}}/>,
    <PersonalData handleForm={handleData} validations={{cpf:cpfValidation}}/>,
    <AddressData handleForm={handleData} />,
    <Typography variant="h3">Cadastro Feito</Typography>
  ]
  const [data, setData] = useState({})
  const [tab, setTab] = useState(0)

  useEffect(()=>{
    console.log(data)
  })

  function next() {
    setTab(tab + 1)
  }

  function handleData(value){
    setData({...data , ...value})
    next()
  }

  return (
    <>
    <Stepper activeStep={tab}>
      <Step><StepLabel>Login</StepLabel></Step>
      <Step><StepLabel>Pessoal</StepLabel></Step>
      <Step><StepLabel>Endereço</StepLabel></Step>
      <Step><StepLabel>Finalização</StepLabel></Step>
    </Stepper>
      {forms[tab]}
    </>
  )
}

export default RegisterForm