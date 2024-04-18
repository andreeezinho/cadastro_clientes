import Logo from "./Logo.jsx";
import Input from "./Input";
import {FaUser} from 'react-icons/fa'
import styles from "../css/Form.module.css"

function Form() {
    return(
        <div className={styles.container}>
            <div className={styles.logoDiv}>
                <Logo />
            </div>

            <div className={styles.formDiv}>
            <h1>Insira os seus dados para receber nossas promoções!</h1>
            <FaUser />
                <form action="">
                    <div>
                        <Input type="text" placeholder="Insira o nome aqui"/>
                    </div>
                    
                    <div>
                        <Input type="number" placeholder="Insira o telefone aqui"/>
                    </div>
                    
                    <div>
                        <Input type="submit" value="Confirmar"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;