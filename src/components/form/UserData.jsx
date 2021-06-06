import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import Button from "@material-ui/core/Button"

function UserData(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={(event)=>{
      event.preventDefault();
      props.handleForm({email,password})
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
        onClick={() => props.next()}>
        Próximo
      </Button>
    </form>
  )
}

export default UserData