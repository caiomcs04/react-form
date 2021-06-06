import React, { useState } from 'react';
import PersonalData from './PersonalData';
import UserData from './UserData';
import AddressData from './AddressData'
import { Typography } from '@material-ui/core';


function RegisterForm(props) {
  const forms = [
    <UserData next={next} handleForm={props.handleForm}/>,
    <PersonalData next={next} handleForm={props.handleForm} />,
    <AddressData handleForm={props.handleForm} />
  ]
  const [tab, setTab] = useState(0)

  function next() {
    setTab(tab + 1)
  }

  return (
    <>
      {forms[tab]}
    </>
  )
}

export default RegisterForm