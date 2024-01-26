import { FaWhatsapp } from "react-icons/fa";

import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const openWhatsAppChat = () => {
    window.open("https://wa.me/1111111111", "_blank");
  };

  return (
    <div className="whatsapp-button" onClick={openWhatsAppChat}>
      <FaWhatsapp />
      
    </div>
  );
};

export default WhatsAppButton;