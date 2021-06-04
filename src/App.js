import './App.css';
import RegisterForm from './components/form/RegisterForm';
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import "fontsource-roboto"

function App() {
  return (
    <Container component="article"
      maxWidth="sm">
      <Typography variant="h3" component="h1">Formulário de Cadastro</Typography>
      <RegisterForm />
    </Container>
  );
}

export default App;
