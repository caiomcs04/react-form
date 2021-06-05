import React from 'react';
import { TextField } from '@material-ui/core';
import Button from "@material-ui/core/Button"

function UserData(props) {


  return (
    <form>
      <TextField type="email"
        label="email"
        id="email"
        fullWidth
        margin="normal"
        variant="outlined" />
      <TextField
        type="password"
        label="password"
        id="password"
        fullWidth
        margin="normal"
        variant="outlined" />
      <Button
        type="submit"
        variant="contained"
        color="primary">
        Cadastrar
      </Button>
    </form>
  )
}

export default UserData