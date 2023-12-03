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
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useRef,useEffect } from "react";
import img1 from '../assessts/TESTIMONAL4.jpg'
import img2 from '../assessts/TESTIMONIAL1.jpg'
import img3 from '../assessts/TESTIMONIAL2.jpg'
import img4 from '../assessts/TESTIMONIAL3.jpg'
import img5 from '../assessts/download.jpg'
import img6 from '../assessts/360_F_420429519_1Kz1X9vJNmm2PpMBlY0MAQIumH9Qtnhl.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import img7 from '../assessts/MwRbsJrk7ItYxeL7mKvPzrq3g.png'
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Testimonial = () => {
  const splideRef = useRef(null);
  React.useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  useEffect(() => {
    if (splideRef.current) {
      splideRef.current.splide.options = {
        type: 'carousel',
        autoScroll: true, 
        interval: 3000, 
      };
    }
  }, []);

  return (
    <div id="Testimonials"
      style={{
        background:
          "linear-gradient(180deg, #fdf2ec 0%, rgb(255, 255, 255) 100%) 180%",
      }}
    >
      <Grid container mt={3}>
        <Grid item style={{marginTop:'3%',marginLeft:"5%"}}>
          <Card   data-aos="fade-up">
            <CardContent style={{ padding: '4px' }}>
              <Typography
                variant="h5"
                component="div"
                color={"rgb(130, 71, 255)"}
                fontSize={"15px"}
                textAlign={"center"}
                fontFamily={"sans-serif"}
              >
                <b> 🧡TESTIMONIALS</b>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
      >
        <Grid item xs={12} mt={1}  data-aos="fade-up">
          <Typography
            variant="h1"
            component="div"
            color={"black"}
            fontSize={"45px"}
            textAlign={"left"}
            fontFamily={"sans-serif"}
            ml={5}
          >
            <b>
              Hear from our <span style={{ color: "orange" }}>Satisfied </span>
              clients
            </b>
          </Typography>
          <Typography
            textAlign={"left"}
            fontFamily={"sans-serif"}
            color={"gray"}
            ml={5}
            fontSize={'16px'}
            data-aos="fade-up"
          >
            <p>
              Discover why our clients love working with us. Read their
              testimonials and learn how we has helped businesses.{" "}
            </p>
          </Typography>
        </Grid>
      </Grid>
      <Splide 
  
        ref={splideRef}
            options={{
              type: 'loop',
              perPage: 3,
              autoplay: true,
              interval: 3000,
              pagination: false,
              drag: false,
              arrows: false,
              autoScroll:{
              speed: 800,
              },
              gap: '20px'
            }}
      >
        <SplideSlide>
        <Grid container justifyContent={'center'}>
              <Card style={{maxHeight:'70%',maxWidth:'30vw'}}>
                <CardActionArea>
                <CardContent>
                    
                    <Typography variant="body2" color="text.secondary">
                    "The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly.
                    </Typography>
                  </CardContent>
                  <CardMedia style={{display:'flex',justifyContent:'center'}}>
                    <img
                      src={img1}
                      alt="Image 1"
                      style={{
                        width: "25%",
                        height: "10vh",
                        borderRadius: "75%",
                      }}
                    />
                    <Typography style={{padding:'2%'}}><b>Sarah</b>
                    <p style={{marginTop:'1%'}}>Project Manager</p>
                    </Typography>
                  </CardMedia>
                  </CardActionArea>
                </Card>
                </Grid>
        </SplideSlide>
        <SplideSlide>
        <Grid container justifyContent={'center'}>
              <Card  
             style={{maxHeight:'70%',maxWidth:'30vw'}}>
                <CardActionArea>
                <CardContent>
                    
                    <Typography variant="body2" color="text.secondary">
                    "I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks.                    </Typography>
                  </CardContent>
                  <CardMedia style={{display:'flex',justifyContent:'center'}}>
                    <img
                      src={img2}
                      alt="Image 1"
                      style={{
                        width: "25%",
                        height: "10vh",
                        borderRadius: "75%",
                      }}
                    />
                    <Typography style={{padding:'2%'}}><b>Alex</b>
                    <p style={{marginTop:'1%'}}>IT Manager</p>
                    </Typography>
                  </CardMedia>
                  </CardActionArea>
                </Card>
                </Grid>
        </SplideSlide>
        <SplideSlide>
        <Grid container justifyContent={'center'}>
              <Card  style={{maxHeight:'70%',maxWidth:'30vw'}}>
                <CardActionArea>
                <CardContent>
                    
                    <Typography variant="body2" color="text.secondary">
                    "Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity                    </Typography>
                  </CardContent>
                  <CardMedia style={{display:'flex',justifyContent:'center'}}>
                    <img
                      src={img3}
                      alt="Image 1"
                      style={{
                        width: "25%",
                        height: "10vh",
                        borderRadius: "75%",
                      }}
                    />
                    <Typography style={{padding:'2%'}}><b>David</b>
                    <p style={{marginTop:'1%'}}>Freelancer</p>
                    </Typography>
                  </CardMedia>
                  </CardActionArea>
                </Card>
                </Grid>
        </SplideSlide>
        <SplideSlide>
        <Grid container justifyContent={'center'}>
              <Card  style={{maxHeight:'70%',maxWidth:'30vw'}}>
                <CardActionArea>
                <CardContent>
                    
                    <Typography variant="body2" color="text.secondary">
                    "Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations"                    </Typography>
                  </CardContent>
                  <CardMedia style={{display:'flex',justifyContent:'center'}}>
                    <img
                      src={img4}
                      alt="Image 1"
                      style={{
                        width: "25%",
                        height: "10vh",
                        borderRadius: "75%",
                      }}
                    />
                    <Typography style={{padding:'2%'}}><b>Joe</b>
                    <p style={{marginTop:'1%'}}>Art Director</p>
                    </Typography>
                  </CardMedia>
                  </CardActionArea>
                </Card>
                </Grid>
        </SplideSlide>
        
      </Splide>

      <Grid
        container
        style={{
          background:
            "linear-gradient(180deg, #fdf2ec 0%, rgb(255, 255, 255) 100%) 180%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
          borderRadius: "5%",
        }}
      >
        <Grid item>
          <Grid
            container
            spacing={2}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid>
              <Card  data-aos="fade-up">
                <CardContent style={{padding:'4px'}}>
                  <Typography
                    variant="h5"
                    component="div"
                    color={" rgb(130, 71, 255)"}
                    fontSize={"15px"}
                    textAlign={"center"}
                    fontFamily={"sans-serif"}
                  >
                    <b> 👋 DONT MISS OUT</b>
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
            <Grid item xs={12} mt={1}  data-aos="fade-up">
              <Typography
                variant="h1"
                component="div"
                color={"black"}
                fontSize={"55px"}
                textAlign={"center"}
                fontFamily={""}
              >
                <b>
                  Unleash your{" "}
                  <span style={{ color: "orange" }}>Potential </span> with us
                </b>
              </Typography>
              <p
                style={{ textAlign: "center" }}
                fontFamily={"sans-serif"}
                color={"gray"}
              >
                Join our community of ambitious individuals and organizations
                eager to make a difference.
              </p>

              <Grid container justifyContent={'center'}>
                <Grid item   data-aos="fade-up">
                  <Button
                    variant="contained"
                    sx={{ background: "rgb(130, 71, 255)", color: "white" }}
                    fontFamily={"sans-serif"}
                  >
                    TRY OUT NOW
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
            container
            spacing={2}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={'5%'}
          >
            <Grid>
              <Card  data-aos="fade-up">
                <CardContent style={{padding:'4px'}}>
                  <Typography
                    variant="h5"
                    component="div"
                    color={" rgb(130, 71, 255)"}
                    fontSize={"15px"}
                    textAlign={"center"}
                    fontFamily={"sans-serif"}
                  >
                    <b>200+{" "}<span style={{ color: "black" }}> Happy users</span></b>
                  </Typography>
                </CardContent>
              </Card>
              
            </Grid>
            <Grid container justifyContent="center" alignItems="center" mt={5}>
              <Grid item xs={12} display="flex" justifyContent="center">
                <img src={img6} alt="graph" 
                style={{ 
                       maxWidth: '80%', 
                       height: 'auto',
                       width: '100%', 
                       '@media (max-width: 959px)': {
                         width: '100%', 
                         height:'100%'
                       },
                       '@media (min-width: 1280px)': {
                         width: '70%', 
                       },
                       }} 
                       data-aos="fade-up"/>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justifyContent={'space-between'} >
            <Grid item >
              <Typography  data-aos="fade-up" className="t1" fontSize={'30px'} margin={'auto'}>
              <img src={img7} alt="" style={{maxWidth:'20%',maxHeight:'10vh',marginTop:'3%'}}/>
                <b>ManageWise</b>
              </Typography>
              </Grid>
              <Grid item >
              <Typography  data-aos="fade-up" className="t2" >
                <p>Features</p>
                <p>FAQ</p>
                <p>Pricing</p>
                <p>Testimonials</p>
              </Typography>
              </Grid>
              </Grid>
            <Grid container justifyContent={'space-between'} >
              <Grid item >
              <Typography >
              &copy; 2022 ManageWise, Inc.
              </Typography>
              </Grid>
              <Grid item >
              <Typography >
              <InstagramIcon/>
              <TwitterIcon/>
              <LinkedInIcon/>
              </Typography>
              </Grid>
            </Grid>
          </Grid>

      
      
    </div>
  );
};

export default Testimonial;
