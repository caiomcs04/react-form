import React from 'react';
import Button from '@material-ui/core/Button';

function RegisterForm() {
  return (
    <form>
      <label htmlFor="">Nome</label>
      < input type="text" />

      <label htmlFor="">SObrenome</label>
      < input type="text" />

      <label htmlFor="">Cpf</label>
      < input type="text" />

      <label htmlFor="">Promoções</label>
      < input type="text" />

      <label htmlFor="">Novidades</label>
      < input type="text" />
      <Button variant="contained" color="primary">Cadastrar</Button>

    </form>
  )
}

export default RegisterForm