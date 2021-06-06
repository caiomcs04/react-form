import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import Button from "@material-ui/core/Button"
import {passwordValidation} from "../../utils/Validations"

function UserData(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false)

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (passwordValidation(password).valid) {
        props.handleForm({ email, password })
      }else{
        setPasswordError(true)
      }
    }}>
      <TextField type="email"
        label="email"
        value={email}
        id="email"
        fullWidth
        margin="normal"
        variant="outlined"
        onChange={(event) => {
          setEmail(event.target.value)
        }} />
      <TextField
        type="password"
        value={password}
        label="password"
        error={passwordError}
        helperText={passwordError ? passwordValidation(password).errorMsg : ""}
        id="password"
        fullWidth
        margin="normal"
        variant="outlined"
        onChange={(event) => {
          setPassword(event.target.value)
        }} />
      <Button
        type="submit"
        variant="contained"
        color="primary"
      >
        Próximo
      </Button>
    </form>
  )
}

export default UserData