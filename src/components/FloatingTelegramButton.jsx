import React from "react";
import { Fab } from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';

function FloatingTelegramButton() {
    // Enlace del canal de Telegram
    const telegramLink = "https://t.me/premierg_bot";

    return (
        <Fab 
            color="primary" 
            aria-label="Unirse al canal de Telegram" 
            href={telegramLink}
            target="_blank" 
            style={{ 
                color: "white", 
                backgroundColor: "#0088cc",
                border: "2px solid white",
                width: "80px",
                height: "80px",
                position: "fixed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 999999,
                bottom: "140px",
                right: "40px",
                cursor: "pointer",
            }}>
            <TelegramIcon sx={{fontSize: '3.0rem'}} />
        </Fab>
    );
}

export default FloatingTelegramButton;
