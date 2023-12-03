import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import img1 from '../assessts/t9qCSNfZSNdBCMSiohCGNEIl4.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  React.useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div style={{ background: 'linear-gradient(180deg, #fdf2ec 0%, rgb(255, 255, 255) 100%) 180%' }}data-aos="fade-up">
      <Grid container style={{ background: 'linear-gradient(180deg, #fdf2ec 0%, rgb(255, 255, 255) 100%) 180%' }}
        margin={'auto'}
        maxWidth={'80%'}
      >
        <Box boxShadow={'0 5px 5px -5px rgba(0,0,0,0.5)'}>
          <Grid
            container
            spacing={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid item mt={12}>
              <Card style={{ padding: '0px' }}>
                <CardContent style={{ padding: '4px' }}>
                  <Typography
                    variant="h5"
                    component="div"
                    color={" rgb(130, 71, 255)"}
                    fontSize={"15px"}
                    textAlign={"center"}
                    fontFamily={'sans-serif'}
                  >
                    <b> 👋 WELCOME TO MANAGE WISE!</b>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid item xs={12} mt={1}>
              <Typography
                variant="h1"
                component="div"
                color={"black"}
                fontSize={"55px"}
                textAlign={"center"}
                fontFamily={''}
              >
                <b>Empower your business with{" "}
                  <span style={{ color: "orange" }}>Strategic</span> insights</b>
              </Typography>
              <Typography
              style={{ textAlign: "center" }} 
              fontFamily={'sans-serif'}
              color={'gray'}
              fontSize={'20px'}
              >
              <p >
                Powerful management platform designed to streamline your business
                operations, boost productivity and drive success
              </p>
              </Typography>
              <Grid
                container
                spacing={2}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Grid container item xs={12} md={6} lg={6} justifyContent={'flex-end'}>
                  <Button
                    variant="contained"
                    sx={{
                      background: "rgb(130, 71, 255)",
                      color: "white",
                      width: '100%', 
                      borderRadius: 0, 
                      '@media (min-width: 1280px)': {
                        width: '40%', 
                        borderRadius: '8px', 
                      },
                    }}
                    fontFamily={'sans-serif'}
                    fullWidth={true}
                  >
                    Get started
                  </Button>
                </Grid>
                <Grid container item xs={12} md={6} lg={6} justifyContent={'flex-start'}>
                  <Button
                    variant="contained"
                    sx={{
                      background: "#fff",
                      color: "black",
                      width: '100%', 
                      borderRadius: 0, 
                      '@media (min-width: 1280px)': {
                        width: '40%', 
                        borderRadius: '8px', 
                      },
                    }}
                    fontFamily={'sans-serif'}
                    fullWidth={true}
                  >
                    Watch Demo <PlayCircleFilledIcon />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems="center" mt={5}>
              <Grid item xs={12} display="flex" justifyContent="center">
                <img src={img1} alt="graph" style={{ 
                       maxWidth: '100%', 
                       height: 'auto',
                       width: '70%', 
                       '@media (max-width: 959px)': {
                         width: '100%', 
                         height:'100%'
                       },
                       '@media (min-width: 1280px)': {
                         width: '70%', 
                       },
                       }} data-aos="zoom-in-up" />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export default Home;
