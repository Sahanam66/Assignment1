import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import { Grid } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Pricing = () => {
  React.useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div style={{background:'linear-gradient(180deg, #fdf2ec 0%, rgb(255, 255, 255) 100%) 180%'}} id="Pricing">
      <Grid
        container
        mt={5}
        spacing={2}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item >
          <Card data-aos="fade-up">
            <CardContent style={{ padding: '4px' }}>
              <Typography
                variant="h5"
                component="div"
                color={"rgb(130, 71, 255)"}
                fontSize={"15px"}
                textAlign={"center"}
                fontFamily={'sans-serif'}
              >
              <b> 💸 Pricing</b>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={12} mt={1} data-aos="fade-up">
          <Typography
            variant="h1"
            component="div"
            color={"black"}
            fontSize={"45px"}
            textAlign={"center"}
            fontFamily={'sans-serif'}
          >
            <b>Select your ideal{" "}
            <span style={{ color: "orange" }}>Pricing </span>plan</b>
          </Typography>
          <Typography 
          textAlign={'center'} 
          fontFamily={'sans-serif'}
          color={'gray'}
          fontSize={'20px'}
          >
          <p >
          At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs.          
          </p>
          </Typography>
          </Grid>
          </Grid>
          <Grid container justifyContent={"center"} spacing={2} mt={12}  >
        <Grid item className='grid2'>
          <Card
             sx={{
              width: { xs: "90%", md: "100%", lg: "100%" },
              margin: "auto",
            }}
            className='cardJPJ'
            style={{
              textAlign: "left",
              background: "rgb(237, 237, 250)",
              marginTop:'-12%'
            }}
            data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
          >
            <CardActionArea>
              <CardContent>
              <Grid
        container
        spacing={2}

      >
        <Grid item>
          <Card  >
            <CardContent style={{ padding: '4px' }}> 
              <Typography
                variant="h6"
                component="div"
                color={"orange"}
                fontSize={"15px"}
                textAlign={"center"}
                fontFamily={'sans-serif'}
              >
              <b>FREE</b>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
                <Typography gutterBottom variant="h5" component="div" mt={2}>
                  <b>$0/month</b>
                </Typography>
                <Typography variant="body2" color="gray" style={{fontSize:'20px'}}>
                <p><CheckIcon style={{color:'green'}}/>Access to all basic features</p>
                <p><CheckIcon style={{color:'green'}}/>Reporting and analytics</p>
                <p><CheckIcon style={{color:'green'}}/>Up to 5 individual users</p>
                <p><CheckIcon style={{color:'green'}}/>Chat and email support</p>

                </Typography>
              </CardContent>
              <Grid container >
              <Grid item xs={12} mt={1} mb={2} >
            <Button
              variant="contained"
              sx={{ background: "rgb(130, 71, 255)", color: "white",ml:'6%' }}
              fontFamily={'sans-serif'}
              
            >
              Get started
            </Button>
            </Grid>
            </Grid>
            </CardActionArea>

          </Card>
        </Grid>
        </Grid>
        <Grid container justifyContent={"center"} spacing={2} mt={12}  >
        <Grid item className='grid2'>
          <Card
            sx={{
              width: { xs: "90%", md: "90%", lg: "90%" },
              margin: "auto",
            }}
            className='cardJPJ'
            style={{
              textAlign: "left",
              background: "rgb(28,28,28)",
              marginTop:'-12%'
            }}
            data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
            
          >
            <CardActionArea>
              <CardContent>
              <Grid
        container
        spacing={2}
      >
        <Grid item >
          <Card  >
            <CardContent style={{ padding: '4px' }}>
              <Typography
                variant="h6"
                component="div"
                color={"orange"}
                fontSize={"15px"}
                textAlign={"center"}
                fontFamily={'sans-serif'}
              >
              <b>STANDARD</b>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
                <Typography gutterBottom variant="h5" component="div" mt={2} color={'white'}>
                  <b>$25/month</b>
                </Typography>
               
                <Typography variant="body2" color="gray" style={{fontSize:'20px'}}>
                <p><CheckIcon style={{color:'green'}}/> Access to all basic features</p>
                <p><CheckIcon style={{color:'green'}}/>Reporting and analytics</p>
                <p><CheckIcon style={{color:'green'}}/>Up to 5 individual users</p>
                <p><CheckIcon style={{color:'green'}}/>Chat and email support</p>
                <p><CheckIcon style={{color:'green'}}/>3+ integrations</p>
                <p><CheckIcon style={{color:'green'}}/>Account performance reporting</p>
                
                </Typography>
              </CardContent>
              <Grid container >
              <Grid item xs={12} mt={1} mb={2}>
            <Button
              variant="contained"
              sx={{ background: "rgb(130, 71, 255)", color: "white" , ml:"6%" }}
              fontFamily={'sans-serif'}
              
            >
              Get started
            </Button>
            </Grid>
            </Grid>
            </CardActionArea>

          </Card>
        </Grid>
        </Grid>
        <Grid container justifyContent={"center"} spacing={2} mt={12}  >
        <Grid item className='grid2'>
          <Card
            sx={{
              width: { xs: "90%", md: "100%", lg: "100%" },
              margin: "auto",
            }}
            className='cardJPJ'
            style={{
              textAlign: "left",
              background: "rgb(237, 237, 250)",
              marginTop:'-12%'
            }}
            data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
          >
            <CardActionArea>
              <CardContent>
              <Grid
        container
        spacing={2}
      >
        <Grid item >
          <Card  >
            <CardContent style={{ padding: '4px' }}>
              <Typography
                variant="h6"
                component="div"
                color={"orange"}
                fontSize={"15px"}
                textAlign={"center"}
                fontFamily={'sans-serif'}
              >
              <b>BUSINESS</b>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
                <Typography gutterBottom variant="h5" component="div" mt={2}>
                  <b>$42/month</b>
                </Typography>
                <Typography variant="body2" color="gray" style={{fontSize:'20px'}}>
                <p><CheckIcon style={{color:'green'}}/>Access to all basic features</p>
                <p><CheckIcon style={{color:'green'}}/>Reporting and analytics</p>
                <p><CheckIcon style={{color:'green'}}/>Up to 5 individual users</p>
                <p><CheckIcon style={{color:'green'}}/>Chat and email support</p>
                <p><CheckIcon style={{color:'green'}}/>3+ integrations</p>

                </Typography>
              </CardContent>
              <Grid container >
              <Grid item xs={12} mt={1} mb={2}>
            <Button
              variant="contained"
              sx={{ background: "rgb(130, 71, 255)", color: "white", ml:'6%' }}
              fontFamily={'sans-serif'}
              
            >
              Get started
            </Button>
            </Grid>
            </Grid>
            </CardActionArea>

          </Card>
        </Grid>
        </Grid>
    </div>
  )
}

export default Pricing
