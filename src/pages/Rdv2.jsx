import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser";

export default function Rdv() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cos8te7', 'template_4285wtc', form.current, 'Gx6NL4Z6fP3bKnxTy')
            .then((result) => {
                console.log(result.text);
                alert("SUCCESS!");
            }, (error) => {
                console.log(error.text);
                alert("FAILED...", error);
            });

        setName('')
        setPhone('')
        setEmail('')
        setObject('')
        setComments('')
    };

    const [name, setName] = useState('');
    const handleChangeName = e => setName(e.target.value);

    const [phone, setPhone] = useState('');
    const handleChangePhone = e => setPhone(e.target.value);

    const [email, setEmail] = useState('');
    const handleChangeEmail = e => setEmail(e.target.value);

    const [object, setObject] = useState('');
    const handleChangeObject = e => setObject(e.target.value);

    const [comments, setComments] = useState('');
    const handleChangeComments = e => setComments(e.target.value);

    return (
            <div className="picture col-12 col-sm-12 col-lg-12">
                <div className="div-contact col-11">
                    <div className="contact row justify-content-center mx-auto">
                        <div className="form col-10 col-sm-5">
                            <h2>FORMULAIRE DE CONTACT</h2>
                            <hr className="barre2 col-12 col-sm-5 col-lg-12"></hr>
                            <form method="post" ref={form} onSubmit={sendEmail} className="contact-form col-10 col-sm-12 col-lg-12 mx-auto">
                                <div className="name input ">
                                    <input type="text" className="name-box col-12 col-sm-12 col-lg-12" name="name" placeholder="Votre nom" v-model="name" value={name} onChange={handleChangeName} required />
                                </div>
                                <br></br>
                                <div className="email input ">
                                    <input type="email" className="email-box col-12 col-sm-12 col-lg-12" name="email" placeholder="Votre adresse email" key="email-input" v-model="email" value={email} onChange={handleChangeEmail} required />
                                </div>
                                <br></br>
                                <div className="phone input">
                                    <input type="text" className="phone-box col-12 col-sm-12 col-lg-12" name="phone" placeholder="Votre numéro de téléphone" key="phone-input" v-model="phone" value={phone} onChange={handleChangePhone} required />
                                </div>
                                <br></br>
                                <div className="object input ">
                                    <input type="text" className="object-box col-12 col-sm-12 col-lg-12" name="object" placeholder="Sujet" v-model="object" value={object} onChange={handleChangeObject} required />
                                </div>
                                <br></br>
                                <div className="comments_block input">
                                    <textarea className="comments col-12 col-sm-12 col-lg-12" name="comments" placeholder="Votre message" rows="4" maxlength="500" v-model="comments" value={comments} onChange={handleChangeComments}
                                        required></textarea>
                                </div>
                                <br></br>
                                <div id="submit_block">
                                    <button className="submit-button col-lg-3">Envoyer</button>
                                </div>
                            </form>
                        </div>
                        <div className="coordonees col-10 col-sm-5 mx-auto">
                            
                        </div>
                    </div>
                </div>
        </div>
    );
}