import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../stylesheets/Contact.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    let formUserName = document.getElementById("usernameinput").value;
    let formEmail = document.getElementById("emailinput").value;
    let formText = document.getElementById("textinput").value;

    let formUserNameHTML = document.getElementById("usernameinput");
    let formEmailHTML = document.getElementById("emailinput");
    let formTextHTML = document.getElementById("textinput");

    let formWarningText = document.getElementById("form-warning-message");

    const templateParams = {
      from_name: formUserName,
      from_email: formEmail,
      message: formText,
    };

    if (formUserName !== "" && formEmail !== "" && formText !== "") {
      emailjs
        .send(
          "service_1mdh5zq",
          "template_ruok9uk",
          templateParams,
          "vAgyCIgszAx1SPSpF"
        )
        .then(
          (result) => {
            window.alert("Message Sent Successfully.");
            console.log(result.text);
            formUserNameHTML.style.border = "1px solid black";
            formEmailHTML.style.border = "1px solid black";
            formTextHTML.style.border = "1px solid black";
            formWarningText.hidden = true;
            form.current.reset();
          },
          (error) => {
            window.alert(
              "An error has occurred, please try again later. " + error.text
            );
            console.log(error.text);
          }
        );
    } else {
      formWarningText.hidden = false;
    }
    if (formUserName === "") {
      formUserNameHTML.style.border = "2px solid red";
    }
    if (formEmail === "") {
      formEmailHTML.style.border = "2px solid red";
    }
    if (formText === "") {
      formTextHTML.style.border = "2px solid red";
    }
    if (formUserName !== "") {
      formUserNameHTML.style.border = "1px solid black";
    }
    if (formEmail !== "") {
      formEmailHTML.style.border = "1px solid black";
    }
    if (formText !== "") {
      formTextHTML.style.border = "1px solid black";
    }
  };

  return (
    <>
      <h2 id="contact"></h2>
      <p id="form-warning-message" hidden={true}>
        Please fill out all of the required fields.
        <br /> The required fields are marked in <b id="red-text">red</b>.
      </p>
      <form ref={form} id="contactformbox" onSubmit={sendEmail}>
        <label className="text">
          Name
          <br />
          <input type="text" id="usernameinput" name="from_name" />
        </label>
        <label className="email">
          Email
          <br />
          <input type="email" id="emailinput" name="from_email" />
        </label>
        <label className="message">
          Message
          <br />
          <textarea id="textinput" name="message" />
        </label>
        <label className="submit">
          Submit
          <br />
          <input className="submit" type="submit" value="Send" />
        </label>
      </form>
    </>
  );
};
