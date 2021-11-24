import React from "react";
import { useState } from "react";
import { Button, Switch, TextField, FormControlLabel } from '@material-ui/core/'


const FormularioCadastro = (props) => {
    
    
    //Para definir usamos setVariavel e para consulta usamos nome da variavel
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}})

    return (

        <form 
            onSubmit={(event) => {
                event.preventDefault();
                props.aoEnviar({nome,sobrenome,cpf,promocoes,novidades})

                setNome('')
                setSobrenome('')
                setCPF('')
            }}>

            <TextField
                value={nome}
                onChange={ event =>{   
                    setNome(event.target.value)
                    
                }}
                

                variant="outlined"
                id="nome"
                label="Nome"
                margin="normal"
                fullWidth
            />

            <TextField
                value={sobrenome}
                onChange={ event =>{   
                    setSobrenome(event.target.value)
                 
                }}

                variant="outlined"
                id="sobrenome"
                label="Sobrenome"
                margin="normal"
                fullWidth
            />

            <TextField
                value={cpf}
                onChange={ event =>{   
                    setCPF(event.target.value)

                }}

                onBlur={(event)=>{
                    const validar = props.validarCPF(cpf)
                    setErros({cpf:validar});
                }}
                //evento ativa quando tiramos o focus do campo, para validar o CPF

                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}

                variant="outlined"
                id="CPF"
                label="CPF"
                margin="normal"
                fullWidth
            />

            <FormControlLabel
                onChange={(event) =>{
                    setPromocoes(event.target.checked)
                }}

                value={promocoes}
                label="Promocoes"
                control={<Switch name="promocoes" color="primary" defaultChecked />}

            />

            <FormControlLabel
                onChange={(event) =>{
                    setNovidades(event.target.checked)
                }}

                value={novidades}
                label="Novidades"
                control={<Switch name="novidades" color="primary" defaultChecked />}

            />

            <Button
                type="submit"
                variant="contained"
                color="primary">
                Cadastrar
            </Button>

        </form>

    );


};

export default FormularioCadastro;