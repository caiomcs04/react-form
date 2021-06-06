import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField"
import Switch from "@material-ui/core/Switch"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import cpfValidadtion from "../../utils/Validations"


function PersonalData(props) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cpf, setCpf] = useState("")
  const [promotions, setPromotions] = useState(true)
  const [news, setNews] = useState(true)
  const [cpfError, setCpfError] = useState(false)
  const [cpfErrorMsg, setCpfErrorMsg] = useState("")

  const cpfMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  const cpfCheck = (cpfValue) => {
    cpfValue.replace("-","").replace(".","").replace(".","")

    if (cpfValue.length === 14) {
      if (cpfValidadtion(cpfValue)) {
        setCpfErrorMsg("")
        return false
      } else {
        setCpfErrorMsg("CPF inválido")
        return true
      }
    }else{
      setCpfErrorMsg("CPF precisa ter 11 dígitos")
      return true
    }
  }


  return (
    <form onSubmit={(event)=>{
      event.preventDefault();
      props.handleForm({name,surname,cpf,promotions,news})
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
        onBlur={() => {
          cpfCheck(cpf) ? setCpfError(true) : setCpfError(false)
        }}
        error={cpfError}
        helperText={cpfErrorMsg}
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
        onClick={()=>props.next()}>
        Próximo
      </Button>
    </form>
  )
}

export default PersonalData