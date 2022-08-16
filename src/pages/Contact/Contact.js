import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import { useState } from "react";

export default function Contact() {
  // toast.configure();
  const notify = () => {
    toast.success("Message has been sent!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j7waa6n",
        "template_ic1tqya",
        form.current,
        "lbI2SEzgzNVkZSjXd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <p className="contact-me">Contact Me</p>
      <form className="input-form" ref={form} onSubmit={sendEmail}>
        <label className="label-name">Name</label>
        <input
          className="user-input"
          placeholder="Please enter first and last name"
          type="text"
          name="user_name"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <label className="label-email">Email</label>
        <input
          className="user-input"
          placeholder="Please enter your email"
          type="email"
          name="user_email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <label className="label-message">Message</label>
        <textarea
          className="input-message"
          placeholder="Start your message..."
          name="message"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        />
        <input
          onClick={notify}
          className="button-submit"
          type="submit"
          value="Send"
        />
        <ToastContainer />
      </form>
    </>
  );
}
