import React from "react";
import { useState } from "react";
import { getFirestore, collection } from "firebase/firestore";

const Contact = () => {
    {/*Se que esto se puede mejorar pero, Estoy cansado jefe:,,v */}
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const db = getFirestore();
    const [loader, setLoader] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("contacts").add({
            name: name,
            email: email,
            number: number,
        }).then(() => {
            alert('Su factura ha sido creada');
            setLoader(false);
        }).catch((error) => {
            alert("Error al crear factura")
            setLoader(false);
        });

        setName('');
        setEmail('');
        setNumber('');
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="number">Celular</label>
            <input type="number" id="number" name="number" placeholder="Numero Telefonico/Celular" value={number} onChange={(e) => setNumber(e.target.value)}/>
            <button type="submit" style={{}}>Enviar</button>
        </form>
    );
};
export default Contact;