import React from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import NewReleasesIcon from '@mui/icons-material/NewReleases';
//import iconJackpot from "../icons/jackpotBlanco.png";
import iconroulette from "../icons/ruletaBlanco.png";
import iconMegafono from "../icons/megafonoBlanco.png";
import HomeIcon from '@mui/icons-material/Home';

function SearchAndFilter({ onFilter }) {
    return (
        <Grid item container spacing={2} xs={12} direction="row" justifyContent="center" alignItems="center" sx={{ marginTop:"20px"}}>
             <Grid container xs={5} sm={2.5} md={2}  direction="column" justifyContent="center"  alignItems="center" sx={{ marginBottom:"20px"}}>
                <HomeIcon 
                    variant="contained" 
                    onClick={() => onFilter("todos")}
                    style={{ 
                        marginTop: "5px",
                        cursor: "pointer",
                        color: "white", 
                        width: "50px",
                        height: "50px",
                        marginBottom: "1px"
                        }}>

                </HomeIcon>
                <Typography 
                    color="textSecondary" 
                    variant="body3"
                    style={{ color: "white", fontSize: '1.1rem' }}>
                    Todos
                </Typography>
            </Grid>
            <Grid container xs={5} sm={2.5} md={2}  direction="column" justifyContent="center"  alignItems="center" sx={{ marginBottom:"20px"}}>
                <IconButton>
                    <img src={iconMegafono}
                    alt='icono personalizado megafono'
                    onClick={() => onFilter("important")}
                    style={{ 
                        marginTop: "3px",
                        cursor: "pointer",
                        color: "white", 
                        width: "50px",
                        height: "39px",
                        
                        }}
                    />

                </IconButton>
                <Typography 
                    color="textSecondary" 
                    variant="body3"
                    style={{ color: "white", fontSize: '1.1rem' }}>
                    Destacados
                </Typography>
            </Grid>
            
            <Grid container xs={5} sm={2.5} md={2}  direction="column" justifyContent="center"  alignItems="center" sx={{ marginBottom:"20px"}}>
                <IconButton>
                    <img src={iconroulette}
                    alt='icono personalizado roulette'
                    onClick={() => onFilter("roulette")}
                    style={{ 
                        cursor: "pointer",
                        color: "white", 
                        width: "38px",
                        height: "37px",
                        marginBottom: "1px"
                        }}
                    />

                </IconButton>
                <Typography 
                    color="textSecondary" 
                    variant="body3"
                    style={{ color: "white", fontSize: '1.1rem' }}>
                    Ruletas
                </Typography>
            </Grid>
            <Grid container xs={5} sm={2} md={2}  direction="column" justifyContent="center"  alignItems="center" sx={{ marginBottom:"20px"}}>
                <NewReleasesIcon 
                    variant="contained" 
                    onClick={() => onFilter("new")}
                    style={{ 
                        marginTop: "5px",
                        cursor: "pointer",
                        color: "white", 
                        width: "43px",
                        height: "43px",
                        marginBottom: "6px"
                        }}>

                </NewReleasesIcon>
                <Typography 
                    color="textSecondary" 
                    variant="body3"
                    style={{ color: "white", fontSize: '1.1rem' }}>
                    Nuevos
                </Typography>
            </Grid>
            {/* <Grid container xs={4} sm={2.5} md={2} direction="column" justifyContent="center"  alignItems="center" sx={{ marginBottom:"20px"}}>
                <IconButton>
                    <img src={iconJackpot}
                    alt='icono personalizado jackpot'
                    onClick={() => onFilter("opcion1")}
                    style={{ 
                        cursor: "pointer",
                        color: "white", 
                        width: "55px",
                        height: "38px",
                        
                        }}
                    />

                </IconButton>
                <Typography 
                    color="textSecondary" 
                    variant="body3"
                    style={{ color: "white", fontSize: '1.1rem' }}>
                    JackPoint
                </Typography>
            </Grid> */}
            {/* <Grid container xs={10} sm={8} md={3} direction="column" justifyContent="center"  alignItems="center" sx={{ marginBottom:"20px"}}>
                <TextField
                label="Buscar"
                variant="outlined"
                onChange={(e) => onSearch(e.target.value)}
                fullWidth
                />
            </Grid> */}
        </Grid>
    );
}

export default SearchAndFilter;
