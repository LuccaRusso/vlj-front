import { useState, useEffect } from "react";
import style from "./Cadastro.module.css";
import { useNavigate } from "react-router-dom";

function Cadastro() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        address: ""
    });

    const navigate = useNavigate();
    const [mensagem, setMensagem] = useState("");

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) navigate("/");
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://vlj-api.onrender.com/customer/insert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.text())
            .then(data => {
                // Salva o nome do usuário no localStorage para indicar que ele está logado
                // Pega só o primeiro nome antes de salvar
                const primeiroNome = formData.name.trim().split(" ")[0];
                localStorage.setItem("usuarioLogado", primeiroNome);


                setMensagem("Cadastro realizado com sucesso!");
                setFormData({
                    name: "",
                    email: "",
                    password: "",
                    address: ""
                });

                navigate("/");
            })
            .catch(error => {
                setMensagem('Erro ao enviar os dados.');
                console.error('Erro:', error);
            });
    };

    return (
        <div className={style.form_container}>
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit} className={style.form}>
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Digite seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                /><br /><br />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Digite seu email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                /><br /><br />

                <label htmlFor="password">Senha:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Digite sua senha"
                    value={formData.password}
                    onChange={handleChange}
                    required
                /><br /><br />

                <label htmlFor="address">Endereço:</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Digite seu endereço"
                    value={formData.address}
                    onChange={handleChange}
                    required
                /><br /><br />

                <button type="submit">Enviar</button>
            </form>

            <p>{mensagem}</p>
        </div>
    );
}

export default Cadastro;