import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField"
import Switch from "@material-ui/core/Switch"
import FormControlLabel from "@material-ui/core/FormControlLabel"


function RegisterForm() {
  const [name, setName] = useState("");
  const [surName, setSurname] = useState("");

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      console.log(name)
    }}>
      <TextField
      value={name}
        onChange={(event) => {
          setName(event.target.value)
        }}
        margin="normal"
        variant="outlined"
        id="name"
        fullWidth
        label="Nome"
      />
      <TextField
          value={surName}
          onChange={(event) => {
            setSurname(event.target.value)
          }}
        margin="normal"
        variant="outlined"
        id="surname"
        fullWidth
        label="Sobrenome"
      />
      <TextField
        margin="normal"
        variant="outlined"
        id="cpf"
        fullWidth
        label="CPF"
      />
      <FormControlLabel
        label="Promoções"
        control={<Switch margin="normal"
          id="promotion"
          defaultChecked
          color="primary"
          name="Promoções" />}
      />
      <FormControlLabel
        label="Novidades"
        control={<Switch
          margin="normal"
          id="news"
          defaultChecked
          color="primary"
          name="Novidades" />}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary">
        Cadastrar
      </Button>
    </form>
  )
}

export default RegisterForm