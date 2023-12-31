import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { useState } from 'react';

export default function MainBody() {
  const [name, setName] = useState("owais");
  const [email, setEmail] = useState("owaismohammed183@gmail.com");
  const [text, setText] = useState("notice the change after submitting the form");

  const onSubmit = () => {
    setName("Ahmed");
    setEmail("owaismohammed184@gmail.com");
    setText("have you noticed the change of text?");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10">
          <h1 style={{ fontSize: 48, fontWeight: 800 }}>CONTACT US</h1>
          <p>LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT OR JUST WANT TO CHAT, YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-5 py-5">
          <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
            <button className="btn btn-dark px-4"><MdMessage fontSize="24px" /><b>   VIA SUPPORT CHAT</b></button>
            <button className="btn btn-dark mx-3 px-4 "><FaPhoneAlt fontSize="20px" /><b>  VIA CALL</b></button><br />
            <button className="btn btn-outline-dark my-2 px-5 w-100"><MdOutlineMessage fontSize="24px" /><b>VIA EMAIL FORM</b></button><br />
            <b>Name</b><br /><input type="text" className=" mb-2 w-100" value={name} onChange={handleNameChange} /><br />
            <b>E-Mail</b><br /><input type="text" className=" mb-2 w-100" value={email} onChange={handleEmailChange} /><br />
            <b>TEXT</b><br /><textarea className=" mb-2 w-100" cols="30" rows="4" value={text} onChange={handleTextChange}></textarea><br />
            <button type="submit" className="btn btn-dark px-5"><b>SUBMIT</b></button>
          </form>
        </div>
        <div className="col-7">
          <img src="/woman-logo.jpg" alt="customer support" className="w-100 h-100" width="" height="" />
        </div>
      </div>
      <div>
        The name entered is {name}<br />
        The email entered is {email}<br />
        The text entered is {text}
      </div>
    </div>
  );
}
