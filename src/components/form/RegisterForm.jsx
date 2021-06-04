import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField"
import Switch from "@material-ui/core/Switch"
import FormControlLabel from "@material-ui/core/FormControlLabel"


function RegisterForm() {
  return (
    <form>
      <TextField margin="normal" variant="outlined" id="name" fullWidth label="Nome"></TextField>
      <TextField margin="normal" variant="outlined" id="surname" fullWidth label="Sobrenome"></TextField>
      <TextField margin="normal" variant="outlined" id="cpf" fullWidth label="CPF"></TextField>
      <FormControlLabel label="Promoções" control={<Switch margin="normal" id="promotion" defaultChecked color="primary" name="Promoções"/>}/>
      <FormControlLabel label="Novidades" control={<Switch margin="normal" id="news" defaultChecked color="primary" name="Novidades"/>}/>
      <Button variant="contained" color="primary">Cadastrar</Button>
    </form>
  )
}

export default RegisterForm