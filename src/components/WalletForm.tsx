import React from "react";

export default function WalletForm() {
    const [values, setValues] = React.useState({
        email: "",
        tokens:0,
    });
    const [messages, setMessages] = React.useState("");

    function handleSubmit(evt: { preventDefault: () => void; }) {
        evt.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "process": "27642404-f756-47e6-b435-178a0c136525",
            "token": "064eeb4ef87bf90710bb54fb85e597400ed1a3785ef0270d0522757f0ad88a19",
            "scope": "dev",
            "params": [
                {
                    "name": "email",
                    "value": "gabimancinir@gmail.com"
                },
                {
                    "name": "token",
                    "value": "200"
                }
            ]
        });

        const requestOptions: RequestInit = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("https://api.stamping.io/exec/", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
            setValues({
                email: "",
                tokens: 0,
            })
            setMessages("Token Enviado con éxito. Revisa tu email")
    }

    function handleChange(evt: { target: any; }) {
        const { target } = evt;
        const { name, value } = target;
        const newValues = {
            ...values,
            [name]: value,
        };
        setValues(newValues);
        setMessages("")
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4-slate">
            <h2>Solicitud de Tokens</h2>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Correo Electrónico</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tokens">Cantidad de Tokens</label>
                <input
                    id="tokens"
                    name="passtokensword"
                    type="number"
                    value={values.tokens}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <p>{messages}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Enviar</button>
        </form>
    );
}