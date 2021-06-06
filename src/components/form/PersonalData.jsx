import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField"
import Switch from "@material-ui/core/Switch"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import {cpfValidation} from "../../utils/Validations"
import cpfMask from "../../utils/Mask"


function PersonalData(props) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cpf, setCpf] = useState("")
  const [promotions, setPromotions] = useState(true)
  const [news, setNews] = useState(true)
  const [cpfError, setCpfError] = useState(false)


  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (cpfValidation(cpf).valid) {
        props.handleForm({ name, surname, cpf, promotions, news })
      }else{
        setCpfError(true)
      }
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
        value={surname}
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
        value={cpf}
        onChange={(event) => {
          setCpf(cpfMask(event.target.value))
        }}
        name="cpf"
        error={cpfError}
        helperText={cpfError ? cpfValidation(cpf).errorMsg : ""}
        margin="normal"
        variant="outlined"
        id="cpf"
        fullWidth
        label="CPF"
      />
      <FormControlLabel
        onChange={(event) => {
          setPromotions(event.target.value)
        }}
        label="Promoções"
        control={<Switch margin="normal"
          checked={promotions}
          id="promotion"
          onChange={(event) => {
            setPromotions(event.target.checked)
          }}
          color="primary"
          name="Promoções" />}
      />
      <FormControlLabel
        onChange={(event) => {
          setNews(event.target.value)
        }}
        label="Novidades"
        control={<Switch
          checked={news}
          onChange={(event) => {
            setNews(event.target.checked)
          }}
          margin="normal"
          id="news"
          color="primary"
          name="Novidades" />}
      />
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

export default PersonalData