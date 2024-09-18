import './Login.css';
import TextField from '../TextField';
const Login = () => {
    return (
       
        <section className="login">
            <form>
                <h1>Faça o seu Login</h1>
                <TextField placeholder="Digite seu nome" label="Nome de usuário" />
                <TextField placeholder="Digite sua senha" label="Senha" type="password" />

                <button>Login</button>
            </form>
        </section>
    )
}

export default Login;