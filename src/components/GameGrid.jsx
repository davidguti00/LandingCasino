import React from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";

function GameGrid({games}) {

        // Texto del mensaje predeterminado
        const defaultMessage = "Hola, quiero comunicarme con un cajero!";
        // Codificar el mensaje para que funcione correctamente en la URL
        const encodedMessage = encodeURIComponent(defaultMessage);
        // Número de teléfono de destino
        const phoneNumber = "2235368498";
    
        // Combinar el número de teléfono y el mensaje codificado en el enlace de WhatsApp
        const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    return (
        <Grid container spacing={2}>
            
            {games.length > 0 ? games.map((game, index) => (
                <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                <Card style={{borderRadius: "15px", border: "4px solid #424242"}}>
                    <div className="cardImageContainer" >
                    <img src={game.image} alt={game.name} className="cardImage" />
                    </div>
                    <CardContent style={{ backgroundColor: '#424242' }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography gutterBottom 
                            variant="h7" 
                            component="div" 
                            style={{ 
                                color: "white",
                                paddingLeft: "10px", 
                                fontWeight: 500 }}>
                        {game.name}
                        </Typography>
                        <Button 
                            variant="contained" 
                            href={whatsappLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ 
                                padding: "5px",
                                backgroundColor: "#128C7E",
                                fontWeight: 500,
                                color: "white", 
                                // border: "0.1px solid white",
                                width: "85px",
                                height: "35px",
                                }}>
                        Jugar
                        </Button>
                    </div>
                    </CardContent>
                </Card>
                </Grid>
            )):
            <Grid item container xs={12} direction="row" justifyContent="center" alignItems="center" sx={{ marginTop:"90px"}}>
                <Typography 
                    variant="h4"  
                    style={{ 
                        color: "white",
                        paddingLeft: "10px", 
                        fontWeight: 500
                    }}>
                    No hay juegos disponibles
                </Typography>
            </Grid>}
        </Grid>
    );

        
}

export default GameGrid;
