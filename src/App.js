import './App.css';
import RegisterForm from './components/form/RegisterForm';
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import "fontsource-roboto"

function App() {
  function handleForm(params) {
    console.log(params)
  }

  return (
    <Container component="article"
      maxWidth="sm">
      <Typography variant="h3" component="h1">Formulário de Cadastro</Typography>
      <RegisterForm handleForm={handleForm} />
    </Container>
  );
}

export default App;
