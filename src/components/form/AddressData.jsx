import React from 'react';
import {TextField, Button} from "@material-ui/core"

function AddressData() {
  return (
    <form>
      <TextField type="number"
        label="cep"
        id="cep"
        fullWidth
        margin="normal"
        variant="outlined" />
      <TextField type="text"
        label="endereço"
        id="address"
        fullWidth
        margin="normal"
        variant="outlined" />
      <TextField type="number"
        label="numero"
        id="number"
        margin="normal"
        variant="outlined" />
      <TextField type="text"
        label="estado"
        id="state"
        margin="normal"
        variant="outlined" />
      <TextField type="text"
        label="cidade"
        id="city"
        margin="normal"
        variant="outlined" />
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