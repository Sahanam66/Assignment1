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
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import img1 from "../assessts/qJeaFhSmQ29M1S55GRW5kYb4.png";
import img2 from "../assessts/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png";
import img3 from "../assessts/p65qwfjd0cd0ZHZoNFpsh7XU.png";
import img4 from "../assessts/FaY6aekE67ytWg6HDfDpy2FaHY.png";
import img5 from "../assessts/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png";
import PhoneAndroidRoundedIcon from "@mui/icons-material/PhoneAndroidRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MailIcon from "@mui/icons-material/Mail";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import GroupsIcon from "@mui/icons-material/Groups";
import Aos from "aos";
import "aos/dist/aos.css";
const Features = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      id="Features"
      style={{
        background:
          "linear-gradient(180deg, #fdf2ec 0%, rgb(255, 255, 255) 100%) 180%",
      }}
      data-aos="fade-up"
    >
      <Grid
        container
        margin={"auto"}
        justifyContent="center"
        alignItems="center"
      >
        <Box boxShadow={"0 5 5 -5 rgba(0,0,0,0.5)"}>
          <Grid
            container
            spacing={2}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid item mt={12}>
              <Card style={{ padding: "0px" }}>
                <CardContent style={{ padding: "4px" }}>
                  <Typography
                    variant="h5"
                    component="div"
                    color={"rgb(130, 71, 255)"}
                    fontSize={"15px"}
                    textAlign={"center"}
                    fontFamily={"sans-serif"}
                  >
                    <b> 🔥 PREMIER FEATURES</b>
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
            <Grid item xs={12} mt={1}>
              <Typography
                variant="h1"
                component="div"
                color={"black"}
                fontSize={"45px"}
                textAlign={"center"}
                fontFamily={"sans-serif"}
              >
                <b>
                  Discover our product's{" "}
                  <span style={{ color: "orange" }}>Capabilities</span>
                </b>
              </Typography>
              <Typography
                style={{ textAlign: "center" }}
                fontFamily={"sans-serif"}
                color={"gray"}
                fontSize={"20px"}
              >
                <p>
                  Don't settle for mediocrity - embrace the future of management
                  with Manage Wise
                </p>
              </Typography>

              <Grid
                container
                justifyContent="center"
                alignItems="center"
                height={"50vh"}
                margin={"auto"}
                xs={10}
                lg={6}
              >
                <Card
                  style={{
                    background: "rgb(237, 237, 250)",
                    height: "60vh",
                    borderRadius: "5%",
                  }}
                  justifyContent={"flex-start"}
                >
                  <CardContent data-aos="fade-up">
                    <Typography variant="h4" fontFamily={"sans-serif"} mt={5}>
                      <div>
                        <StarBorderPurple500Icon />
                      </div>
                      Boost productivity and streamline workflow with us.Enjoy
                      our intuitive interface and robust features
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid container justifyContent={"center"} spacing={2} mt={16}>
        <Grid item justifyContent={"center"}>
          <Card
            sx={{
              maxWidth: "90%", 
              margin: "auto", 
              "@media (min-width: 1280px)": {
                
                maxWidth: "50%",
              },
            }}
            className="cardJPJ"
            style={{
              bowShadow: "10px 10px 10px 10 px ",
              textAlign: "center",
              margin: "auto",
              borderRadius: "5%",
            }}
            data-aos="fade-up"
          >
            <CardActionArea>
              <CardMedia>
                <img
                  src={img1}
                  alt="Smart Task Management"
                  height={"70%"}
                  width={"80%"}
                />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" mt={2}>
                  <b>Smart Task Management</b>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Say goodbye to chaos with our smart task management system
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} spacing={2} mt={12}>
        <Grid item className="grid2">
          <Card
            sx={{
              maxWidth: "90%", 
              margin: "auto", 
              "@media (min-width: 1280px)": {
                maxWidth: "65%",
              },
            }}
            className="cardJPJ"
            style={{
              bowShadow: "10px 10px 10px 10 px ",
              textAlign: "center",
              margin: "auto",
              borderRadius: "5%",
              marginTop: "-5%",
            }}
            data-aos="fade-up"
          >
            <CardActionArea>
              <CardMedia>
                <img src={img2} alt="Flexible Scheduling" width={"60%"} />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" mt={2}>
                  <b>Flexible Scheduling</b>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Stay productive with our flexible scheduling system
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} spacing={2} mt={12}>
        <Grid item className="grid2">
          <Card
            sx={{
              maxWidth: "90%", 
              margin: "auto", 
              "@media (min-width: 1280px)": {
      
                maxWidth: "65%",
              },
            }}
            className="cardJPJ"
            style={{
              bowShadow: "10px 10px 10px 10 px ",
              textAlign: "center",
              margin: "auto",
              borderRadius: "5%",
            }}
            data-aos="fade-up"
          >
            <CardActionArea>
              <CardMedia>
                <img
                  src={img3}
                  alt="Easy Communication"
                  height={"70%"}
                  width={"60%"}
                />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" mt={2}>
                  <b>Easy Communication</b>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Collaborate seamlessly with your team in real-time
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} spacing={2} mt={12}>
        <Grid item className="grid2">
          <Card
            sx={{
              maxWidth: "90%", 
              margin: "auto", 
              "@media (min-width: 1280px)": {
                
                maxWidth: "65%",
              },
            }}
            className="cardJPJ"
            style={{
              bowShadow: "10px 10px 10px 10 px ",
              textAlign: "center",
              margin: "auto",
              borderRadius: "5%",
            }}
            data-aos="fade-up"
          >
            <CardActionArea>
              <CardMedia>
                <img
                  src={img4}
                  alt="Easy Communication"
                  height={"70%"}
                  width={"60%"}
                />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" mt={2}>
                  <b>Analytics</b>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Gain valuable insights with our advanced analytics feature
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Grid container style={{ background: "black", width: "100%" }} mt={3}>
        <Grid item xs={6} mt={10} md={2} ml={4}>
          <Card data-aos="fade-up">
            <CardContent style={{ padding: "4px" }}>
              <Typography
                variant="h5"
                component="div"
                color={"rgb(130, 71, 255)"}
                fontSize={"15px"}
                textAlign={"center"}
                fontFamily={"sans-serif"}
              >
                <b> 😍 AND MORE....</b>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <br />
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
              color={"white"}
              fontSize={"45px"}
              textAlign="left"
              fontFamily={"sans-serif"}
              paddingLeft={4}
            >
              <b>
                Explore an array of features that elevate your{" "}
                <span style={{ color: "orange" }}>Productivity </span>to new
                heights
              </b>
            </Typography>
            <Typography
              paddingLeft={4}
              fontFamily={"sans-serif"}
              textAlign="left"
              color={"gray"}
              fontSize={"25px"}
              data-aos="fade-up"
            >
              <p>
                Discover the tools that will revolutionize the way you manage
                and optimize your operations
              </p>
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"} spacing={2} mt={12}>
          <Grid item className="grid2">
            <Card
              sx={{
                maxWidth: "90%",
                margin: "auto",
                "@media (min-width: 1280px)": {
                  maxWidth: "95%",
                },
              }}
              className="cardJPJ"
              style={{
                bowShadow: "10px 10px 10px 10 px ",
                textAlign: "center",
                margin: "auto",
                borderRadius: "3%",
                background: "rgb(28,28,28)",
              }}
              data-aos="fade-up"
            >
              <CardActionArea>
                <CardMedia>
                  <div
                    style={{
                      background: "rgb(130, 71, 255)",
                      opacity: " 1",
                      border: "2px solid rgb(130, 71, 255)",
                      width: "60px",
                      height: "60px",
                      margin: "5% auto",
                      borderRadius: "15px",
                    }}
                  >
                    <PhoneAndroidRoundedIcon
                      style={{
                        color: "white",
                        maxWidth: "70%",
                        margin: "25% auto",
                      }}
                    />
                  </div>
                </CardMedia>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    mt={-2}
                    color={"white"}
                  >
                    <b>Cross-Platform Compatibility</b>
                  </Typography>
                  <Typography variant="body2" color="gray" fontSize={"16px"}>
                    Enjoy the flexibility of cross-platform compatibility. Our
                    product works seamlessly across desktop, web, and mobile
                    devices, allowing you to work from your preferred device.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"} spacing={2} mt={12}>
          <Grid item className="grid2">
            <Card
              sx={{
                maxWidth: "90%", 
                margin: "auto", 
                "@media (min-width: 1280px)": {
                  
                  maxWidth: "95%",
                },
              }}
              className="cardJPJ"
              style={{
                bowShadow: "10px 10px 10px 10 px ",
                textAlign: "center",
                margin: "auto",
                borderRadius: "3%",
                background: "rgb(28,28,28)",
              }}
              data-aos="fade-up"
            >
              <CardActionArea>
                <CardMedia>
                  <div
                    style={{
                      background: "rgb(130, 71, 255)",
                      opacity: " 1",
                      border: "2px solid rgb(130, 71, 255)",
                      width: "60px",
                      height: "60px",
                      margin: "5% auto",
                      borderRadius: "15px",
                    }}
                  >
                    <NotificationsIcon
                      style={{
                        color: "white",
                        maxWidth: "70%",
                        margin: "25% auto",
                      }}
                    />
                  </div>
                </CardMedia>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    mt={-2}
                    color={"white"}
                  >
                    <b>Stay Informed with Essential Notifications</b>
                  </Typography>
                  <Typography variant="body2" color="gray" fontSize={"16px"}>
                    Automate support from first customer contact to closing the
                    ticket. Drastically improve time to resolution.Automate
                    support from first customer contact to closing the ticket.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"} spacing={2} mt={12}>
          <Grid item className="grid2">
            <Card
              sx={{
                maxWidth: "90%", 
                margin: "auto", 
                "@media (min-width: 1280px)": {
                  
                  maxWidth: "150%",
                },
              }}
              className="cardJPJ"
              style={{
                bowShadow: "10px 10px 10px 10 px ",
                textAlign: "center",
                margin: "auto",
                borderRadius: "3%",
                background: "rgb(28,28,28)",
              }}
              data-aos="fade-up"
            >
              <CardActionArea>
                <CardMedia>
                  <div
                    style={{
                      background: "rgb(130, 71, 255)",
                      opacity: " 1",
                      border: "2px solid rgb(130, 71, 255)",
                      width: "60px",
                      height: "60px",
                      margin: "5% auto",
                      borderRadius: "15px",
                    }}
                  >
                    <WhatshotIcon
                      style={{
                        color: "white",
                        maxWidth: "70%",
                        margin: "25% auto",
                      }}
                    />
                  </div>
                </CardMedia>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    mt={-2}
                    color={"white"}
                  >
                    <b>Secure Data Encryption at all times</b>
                  </Typography>
                  <Typography variant="body2" color="gray" fontSize={"16px"}>
                    Trust in our robust data encryption to keep your sensitive
                    information safe and secure. Rest easy knowing your data is
                    protected at all times.{" "}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item mt={"2%"} data-aos="fade-up">
            <div
              style={{
                background: "rgb(28,28,28)",
                opacity: " 1",
                border: "2px solid rgb(28,28,28)",
                width: "60px",
                height: "60px",
                
                borderRadius: "15px",
              }}
            >
              <MailIcon
                style={{ color: "white", maxWidth: "70%", margin: "25% " }}
              />
            </div>
            </Grid>
            <Grid item mt={"2%"}>
            <div
              style={{
                background: "rgb(28,28,28)",
                opacity: " 1",
                border: "2px solid rgb(28,28,28)",
                width: "60px",
                height: "60px",
                borderRadius: "15px",
              }}
            >
              <GoogleIcon
                style={{ color: "white", maxWidth: "70%", margin: "25% " }}
              />
            </div>
            </Grid>
            <Grid item mt={"2%"}>
            <div
              style={{
                background: "rgb(28,28,28)",
                opacity: " 1",
                border: "2px solid rgb(28,28,28)",
                width: "60px",
                height: "60px",
                borderRadius: "15px",
              }}
            >
              <GitHubIcon
                style={{ color: "white", maxWidth: "70%", margin: "25% " }}
              />
            </div>
            </Grid>
            <Grid item mt={"2%"}>
            <div
              style={{
                background: "rgb(28,28,28)",
                opacity: " 1",
                border: "2px solid rgb(28,28,28)",
                width: "60px",
                height: "60px",
             
                borderRadius: "15px",
              }}
            >
              <NotificationsIcon
                style={{ color: "white", maxWidth: "70%", margin: "25% " }}
              />
            </div>
            </Grid>
            <Grid item mt={"2%"}>
            <div
              style={{
                background: "rgb(28,28,28)",
                opacity: " 1",
                border: "2px solid rgb(28,28,28)",
                width: "60px",
                height: "60px",
                
                borderRadius: "15px",
              }}
            >
              <GroupsIcon
                style={{ color: "white", maxWidth: "70%", margin: "25% " }}
              />
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={6} mt={15} md={2}>
            <Card data-aos="fade-up">
              <CardContent style={{ padding: "4px" }}>
                <Typography
                  variant="h5"
                  component="div"
                  color={"rgb(130, 71, 255)"}
                  fontSize={"15px"}
                  textAlign={"center"}
                  fontFamily={"sans-serif"}
                >
                  <b> 🧰 INTEGRATIONS </b>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} mt={1} data-aos="fade-up">
            <Typography
              variant="h1"
              component="div"
              color={"white"}
              fontSize={"45px"}
              textAlign="center"
              fontFamily={"sans-serif"}
              paddingLeft={4}
            >
              <b>
                Enable <span style={{ color: "orange" }}>integration </span>with
                other popular tools and platforms
              </b>
            </Typography>
            <Typography
              paddingLeft={4}
              fontFamily={"sans-serif"}
              textAlign="center"
              color={"gray"}
              fontSize={"16px"}
            >
              <p>
                Seamlessly connect and amplify your workflow by enabling
                integration with a diverse array of widely-used tools and
                platforms.
              </p>
            </Typography>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" mt={5}>
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="center"
              sx={{
                width: {
                  xs: "100%", 
                  md: "40%", 
                  lg: "40%",
                },
              }}
              data-aos="fade-up"
            >
              <img
                src={img5}
                alt=""
                style={{ maxWidth: "50%", height: "auto" }} // Set max-width to 100% to ensure responsiveness
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Features;
