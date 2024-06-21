import React from "react";
export default function WalletForm() {
    const [values, setValues] = React.useState({
        email: "",
        tokens: "",
    });
    const [messages, setMessages] = React.useState("");
    const [loading, setLoading] = React.useState(false)
    function handleSubmit(evt: { preventDefault: () => void; }) {
        evt.preventDefault();
        setLoading(true)
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "process": "27642404-f756-47e6-b435-178a0c136525",
            "token": "064eeb4ef87bf90710bb54fb85e597400ed1a3785ef0270d0522757f0ad88a19",
            "scope": "dev",
            "params": [
                {
                    "name": "email",
                    "value": values.email
                  },
                  {
                    "name": "token",
                    "value": values.tokens
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
            .then((result) => {
                console.log(result)
                setLoading(false)
                setMessages("Token Enviado con éxito. Revisa tu email")
            })
            .catch((error) =>{
                console.error(error)
                setMessages("Error al errar enviar tokens")
            });
            console.log(values)
            setValues({
                email: "",
                tokens:"",
            })
           
    }

    function handleChange(evt: { target: any; }) {
        const { target } = evt;
        const { name, value } = target;
        const newValues = {
            ...values,
            [name]: value,
        };
        setValues(newValues);
        setMessages("");
      
    }

    return (
        <div className="px-20 order-1  md:w-[50%] flex flex-col justify-center">
         <h2 className="text-white text-[35px] ">Solicitud de Tokens</h2>
        <form onSubmit={handleSubmit} className="flex flex-col max-w-[420px] shadow-md rounded  mb-4-slate">
            <div className="mt-6">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="email">Correo Electrónico</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    placeholder="miemail@email.com"
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mt-6">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="tokens">Cantidad de Tokens</label>
                <input
                    id="tokens"
                    name="tokens"
                    type="text"
                    value={values.tokens}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            {loading && <p className="text-white">Enviando tokens...</p>}
            <p className="text-green-400 mt-4">{messages}</p>
            <button className=" hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-12" type="submit">Enviar</button>
        </form>
        </div>
    );
}