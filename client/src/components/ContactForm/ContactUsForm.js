import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact-us.css"

const ContactUsForm = () => {
  const form = useRef();
  const [state, setState] = useState({ user_name: "", user_email: "", user_subject:"", message: "" });
  function reset(e) {
    e.preventDefault();
    setState({user_name: "", user_email: "", user_subject:"", message: "" });
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jnhb905",
        "template_5fj45hh",
        form.current,
        "NN3r09qjTUa9l3wfc"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("SUCCESSFUL - Message sent!")
        },
        (error) => {
          console.log(error.text);
          window.alert("ERROR - Message NOT sent!")
        }
      );
  };

  return (
    <div className='form-container'>
        <h1>Send us a message</h1>
        <form ref={form} onSubmit={sendEmail}>
        <input
        name="user_name"
        placeholder="Full Name"
        value={state.user_name}
        onChange={(e) => {
          setState({ ...state, user_name: e.target.value });
        }}
      />
        <input
        name="user_email"
        type="email"
        placeholder="Email"
        value={state.user_email}
        onChange={(e) => {
          setState({ ...state, user_email: e.target.value });
        }}
      />  
        <input
        name="user_subject"
        placeholder="Subject"
        value={state.user_subject}
        onChange={(e) => {
          setState({ ...state, user_subject: e.target.value });
        }}
      />
        <textarea
        name="message"
        placeholder="Message"
        value={state.message}
        onChange={(e) => {
          setState({ ...state, message: e.target.value });
        }}
      />
        <button type="submit" value="Send">Send</button>
        <button onClick={reset}>Reset</button>
      </form>
    </div>
  );
}

export default ContactUsForm;
