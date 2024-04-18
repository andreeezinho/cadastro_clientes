import { useState } from "react";
import Logo from "./Logo.jsx";
import Input from "./Input.jsx";
import {FaUser} from 'react-icons/fa'
import logo from "../img/logo.jpeg"
import styles from "../css/Form.module.css"

function Formulario() {

    ///estado para armazenar valores do campo, se FormData = "" se setFormData = chama handleChange
    const [FormData, setFormData] = useState({
        nome: '',
        telefone:''
    });


    //faz as mudanças nos campos do formulário, e.target serve para atualizar o estado
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...FormData,
            [name]: value,
        });
    };

    //submissão do form
    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch('http://192.168.100.161:5000/clientes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(FormData)  ///converte para json
            });

            if(response.ok){
                console.log("Dados enviados!")
                alert("Dados enviados!")
                setFormData({nome: '', telefone: ''});
            }else{
                alert("ERRO, dados não enviados");
            }
        }catch(error){
            console.log("erro na requisião", error)
            alert("ERROR .-.")
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.logoDiv}>
                <Logo />
            </div>

            <div className={styles.formDiv}>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <h1>Insira os seus dados para receber nossas promoções!</h1>
                <FaUser />
                <form onSubmit={handleSubmit}>
                    <div>
                        <Input type="text" placeholder="Insira o nome do cliente aqui" name="nome" value={FormData.nome} onChange={handleChange} required/>
                    </div>
                    
                    <div>
                        <Input type="number" placeholder="Insira o telefone do cliente aqui" name="telefone" value={FormData.telefone} onChange={handleChange} required />
                    </div>
                    
                    <div>
                        <Input type="submit" value="Confirmar" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formulario;