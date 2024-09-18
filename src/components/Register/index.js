import TextField from '../TextField';
import './Register.css'
export const Register = ()=>{
    return(
        //<header>
          //  <h1>Bem vindo</h1>
            //<image href="">
        //</header>
        <section className="register">
            <form>
                <h1>Cadastre-se</h1>
                <TextField placeholder="Inserir e-mail" label="E-mail"/>
                <TextField placeholder="Inserir nome de usuário" label="Nome"/>
                <TextField placeholder="Digite uma nova senha" label="Senha" type="password"/>
                <button>Logon</button>
            </form>
        </section>

    )
}

export default Register
