import React from "react";

import { FaAngleUp } from "react-icons/fa";
import dynamic from "next/dynamic";

import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

function WhatsappChat() {
  return (
    <>
      <WhatsAppWidget
        phoneNumber="+8801978159172"
        textReplyTime="Typically replies within a day"
        message="Hello! 👋🏼 Wanna contact with us?"
        companyName="Opedia Technologies Limited "
      />
      <a href="#">
        <p className="Top"><FaAngleUp/></p>
      </a>
    </>
  );
}

export default WhatsappChat;
