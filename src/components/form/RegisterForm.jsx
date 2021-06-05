import React from 'react';
import PersonalData from './PersonalData';
import UserData from './UserData';
import AddressData from './AddressData'


function RegisterForm(props) {

  function actualForm(form){
    switch(form){
      case(0):{
        break;
      }
    }

  }

  return (
    <>
    <PersonalData handleForm={props.handleForm} />
    <UserData/>
    <AddressData/>
    </>
    )
}

export default RegisterForm