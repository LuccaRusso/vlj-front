import style from "./Cadastro.module.css"

function Cadastro (){

    return(
        <>
            <form className={style.form}>
                <h1>Cadastro</h1>
                
                <input type="text" placeholder="Nome Completo" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <input type="password" placeholder="Confirme sua senha" />
                <button type="submit">Cadastrar</button>
            </form>
        </>
    )

}

export default Cadastro