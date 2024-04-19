import {useState, useEffect} from 'react';
import styles from "../css/Clientes.module.css";

function Clientes() {

    ///estado para armazenar os dados recebidos
    const [dados, setDados] = useState([]);

    ///estado para armazenar se der erro
    const [erro, setErro] = useState(null);

    //useEffect server para buscar os dados da api logo quando o componente(<Clientes />) for carregado
    useEffect(() => {

        //busca os dados 
        const buscarDados = async () => {
            try{
                ///fetch como requisição
                const response = await fetch("http://192.168.100.161:5000/clientes", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            ///verifica as respostas
            if(response.ok){
                const data = await response.json();

                //atualiza o estado com os dados
                setDados(data);
            }else{
                ///manda mensagem de erro
                setErro("Erro aos buscar os dados dos clientes");
                console.error("Erro na resposta: ", response.statusText);
            }   
            }catch(error){
                ////manda mensagem de erro de requisição
                setErro("Erro na solicitação");
                console.log("Erro na solicitação", error);
            }
        }

        ///chama a toda essa função
        buscarDados();

    }, [])

    return(
            <div className={styles.container}>
                <tr>
                    <td>Nome</td>
                    <td>Telefone</td>
                </tr>

               {  
                ///renderiza os dados se tiver um ou mais
                dados.length > 0 ? (
                    dados.map((cliente, index) => (
                        <tr className={styles.tabela} key={index}>
                            <td>{cliente.nome}</td>
                            <td>{cliente.telefone}</td>
                        </tr>
                    ))
                ) : (
                    ///mensagem se nao tiver nada para exibir
                    <p>Clientes não registrados</p>
                )}
            </div>
    )
}

export default Clientes;