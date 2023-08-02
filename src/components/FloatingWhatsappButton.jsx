import React from "react";
import { Fab } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function FloatingWhatsappButton() {
    // Texto del mensaje predeterminado
    const defaultMessage = "Hola, quiero comunicarme con un cajero!";

    // Codificar el mensaje para que funcione correctamente en la URL
    const encodedMessage = encodeURIComponent(defaultMessage);

    // Número de teléfono de destino
    const phoneNumber = "+5492235774244";

    // Combinar el número de teléfono y el mensaje codificado en el enlace de WhatsApp
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    return (
        <Fab 
            color="primary" 
            aria-label="Comunicarse con un cajero" 
            href={whatsappLink}
            style={{ 
                color: "white", 
                backgroundColor: "#25D366", 
                border: "2px solid white",
                width: "80px",
                height: "80px",
                position: "fixed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 999999,
                bottom: "40px",
                right: "40px",
                cursor: "pointer",
            }}>
            <WhatsAppIcon sx={{fontSize: '3.0rem'}} />
        </Fab>
    );
}

export default FloatingWhatsappButton;
