import React, { useState } from 'react';
import { TextField, Button, Grid } from "@material-ui/core"

function AddressData(props) {
  const [cep, setCep] = useState("")
  const [address, setAddress] = useState("")
  const [number, setNumber] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")


  return (
    <form onSubmit={(event => {
      event.preventDefault()
      props.handleForm({ cep, address, number, state, city })
    })}>
      <TextField type="number"
        value={cep}
        label="cep"
        id="cep"
        fullWidth
        margin="normal"
        variant="outlined"
        onChange={(event) => {
          setCep(event.target.value)
        }} />
      <TextField type="text"
        value={address}
        label="endereço"
        id="address"
        fullWidth
        margin="normal"
        variant="outlined"
        onChange={(event) => {
          setAddress(event.target.value)
        }} />
        <TextField type="number"
          value={number}
          label="numero"
          id="number"
          margin="normal"
          fullWidth
          variant="outlined"
          onChange={(event) => {
            setNumber(event.target.value)
          }} />
        <TextField type="text"
          label="estado"
          value={state}
          id="state"
          fullWidth
          margin="normal"
          variant="outlined"
          onChange={(event) => {
            setState(event.target.value)
          }} />
      <TextField type="text"
        value={city}
        label="cidade"
        id="city"
        margin="normal"
        variant="outlined"
        onChange={(event) => {
          setCity(event.target.value)
        }} />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth>
        Cadastrar
      </Button>
    </form>
  )
}

export default AddressData