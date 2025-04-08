import style from "./Cadastro.module.css"

function Cadastro (){

    return(
        <>
            <form className={style.form}>
                <h1>Cadastro</h1>
                
                <input type="text" placeholder="Nome Completo" className="entrada"/>
                <input type="email" placeholder="Email"  className="entrada" />
                <input type="password" placeholder="Senha"  className="entrada"/>
                <input type="password" placeholder="Confirme sua senha"  className="entrada"/>
                <button type="submit">Cadastrar</button>
            </form>
        </>
    )

}

export default Cadastro