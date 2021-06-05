import React, {useState} from 'react';
import PersonalData from './PersonalData';
import UserData from './UserData';
import AddressData from './AddressData'
import { Typography } from '@material-ui/core';


function RegisterForm(props) {
  const [tab,setTab] = useState(0)

  function next(){
    setTab(tab+1)
  }

  function actualForm(form) {
    switch (form) {
      case (0): {
        return <UserData next={next} />
      }
      case (1): {
        return <PersonalData next={next} />
      }
      case (2): {
        return <AddressData handleForm={props.handleForm}/>
      }
      default:{
        <Typography>Erro ao selecionar o tab</Typography>
      }
    }

  }

  return (
    <>
      {actualForm(tab)}
    </>
  )
}

export default RegisterForm