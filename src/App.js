import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import '@fontsource/roboto/400.css';

const App = () => {


  return (

    <Container component="article" maxWidth="sm">

      <Typography align="center" component="h1" variant="h4">Formulário de cadastro</Typography>

      <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF}/>

    </Container>

  );
}

const cadastros = [];

function aoEnviarForm(dados){
  
  cadastros.push(dados);
  console.log(cadastros);

};


function validarCPF(cpf){

  if(cpf.length !== 11){
    return{valido:false, texto:'CPF deve ter 11 digitos'}

  }else{
    return{valido:true, texto:''}
  }
}


export default App;
