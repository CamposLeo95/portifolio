// Hooks
import { useState } from "react"

// Styled-Components
import { SecondContainer, CardForm, Form } from "./styles"

// EmailJs
import emailjs from "@emailjs/browser"

export default function Contacts() {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')


    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault()
        if (name === '' || email === '' || message === '') {
            alert('Preencha todos os campos')
            return
        }

        const templateParams = {
            from_name: name,
            email: email,
            message: message
        }

        emailjs.send(
            'service_wx498zd',
            'template_2sku1jq',
            templateParams,
            'jYluPEAoagLYTi8LZ'
        ).then((res) => {
            console.log('Email enviado', res.status, res.text);
            setName('')
            setEmail('')
            setMessage('')
        }, (error) => {
            console.log("Erro: ", error);
        })

    }
    return (

        <SecondContainer>
            <CardForm>
                <Form onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <textarea
                        name="message"
                        placeholder="Digite sua mensagem..."
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                    <div>
                        <button type="submit">Enviar</button>
                    </div>
                </Form>
                <div className="descricao">
                    <h3>Envie uma Mensagem</h3>
                    <p>
                        Fique a vontade para entrar em contato comigo atraves de umas das minhas redes sociais ou me enviando um e-mail preenchendo os campos ao lado
                    </p>

                    <div className="redes">
                        <a href="https://www.linkedin.com/in/leonardo-a-campos/" target="_blank">
                            <i className="bi bi-linkedin" />
                        </a>
                        <a href="https://wa.me/5511958639720" target="_blank">
                            <i className="bi bi-whatsapp" />
                        </a>
                        <a href="https://github.com/CamposLeo95" target="_blank">
                            <i className="bi bi-github" />
                        </a>
                    </div>
                </div>
            </CardForm>
        </SecondContainer>
    )
}