import React from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";

function GameGrid({games}) {

        // Texto del mensaje predeterminado
        const defaultMessage = "Hola, quiero comunicarme con un cajero!";
        // Codificar el mensaje para que funcione correctamente en la URL
        const encodedMessage = encodeURIComponent(defaultMessage);
        // Número de teléfono de destino
        const phoneNumber = "+5492235854088";
    
        // Combinar el número de teléfono y el mensaje codificado en el enlace de WhatsApp
        const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    return (
        <Grid container spacing={2}>
            
            {games.length > 0 ? games.map((game, index) => (
                <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                    <Card style={{borderRadius: "15px", border: "4px solid #424242", backgroundColor: "#424242"}}>
                        <div className="cardImageContainer" >
                        <img src={game.image} alt={game.name} className="cardImage" />
                        </div>
                        <CardContent style={{ backgroundColor: '#424242' }}>
                        <Grid container xs={12} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Grid item  xs={6}>
                                <Typography gutterBottom 
                                variant="h7" 
                                component="div" 
                                style={{ 
                                    color: "white",
                                    paddingLeft: "5px", 
                                    fontWeight: 500 
                                }}>
                                    {game.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={5} >
                                <Button 
                                variant="contained" 
                                href={whatsappLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ 
                                    
                                    padding: "5px 10px",
                                    backgroundColor: "#128C7E",
                                    fontWeight: 500,
                                    color: "white", 
                                    // border: "0.1px solid white",
                                    // width: "150px",
                                    // height: "60px",
                                    lineHeight: 1.3,
                                    textAlign: 'center',
                                }}>
                                    Crear usuario
                                </Button>
                            </Grid>
                            
                        </Grid>
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
