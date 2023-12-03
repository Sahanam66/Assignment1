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
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';


const Faq = () => {
  React.useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  const [textColor, setTextColor] = useState("black");

  const handleTextColorChange = () => {
    setTextColor(textColor === "black" ? "rgb(130, 71, 255)" : "black");
  };
  const [textColor1, setTextColor1] = useState("black");

  const handleTextColorChange1 = () => {
    setTextColor1(textColor1 === "black" ? "rgb(130, 71, 255)" : "black");
  };
  const [textColor2, setTextColor2] = useState("black");

  const handleTextColorChange2 = () => {
    setTextColor2(textColor2 === "black" ? "rgb(130, 71, 255)" : "black");
  };
  const [textColor3, setTextColor3] = useState("black");

  const handleTextColorChange3 = () => {
    setTextColor3(textColor3 === "black" ? "rgb(130, 71, 255)" : "black");
  };
  const [textColor4, setTextColor4] = useState("black");

  const handleTextColorChange4 = () => {
    setTextColor4(textColor4 === "black" ? "rgb(130, 71, 255)" : "black");
  };
  return (
    <div style={{background:'linear-gradient(180deg, #fdf2ec 0%, rgb(255, 255, 255) 100%) 180%'}} id="FAQ"
    >
        <Grid
        container
        spacing={2}
        pl={4}
      >
        <Grid item mt={3}>
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
               <b>🙋‍♂️ FAQ</b>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        pl={4}
      >
        <Grid item xs={12} mt={1} data-aos="fade-up">
          <Typography
            variant="h1"
            component="div"
            color={"black"}
            fontSize={"45px"}
            textAlign={"left"}
            fontFamily={'sans-serif'}
          >
            <b>Need {" "}
            <span style={{ color: "orange" }}>Answers?</span></b>
          </Typography>
          <Typography
          textAlign={"left"}
          fontFamily={'sans-serif'}
          color={'gray'}
          fontSize={'16px'}
          >
          <p   >
          Check out our most commonly asked questions below to find the information you need.          </p>
          </Typography>
       </Grid>
       </Grid>
       <Grid container>
        <Grid item data-aos="fade-up">
        <Accordion style={{margin:'2%',borderRadius:'2%',padding:'1%'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={handleTextColorChange}
        >
          <Typography color={textColor}>
            <b>What is Manage Wise and what does it offer?</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>
           Manage Wise is a comprehensive management platform designed to streamline your business operations,enhanced productivity and drive success.It offers a range of features including task management, scheduling,communication tools analytics and more.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion style={{margin:'2%',borderRadius:'2%',padding:'1%'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={handleTextColorChange1}
        >
          <Typography color={textColor1}><b>Is Manage Wise suitable for small business and larger enterprises alike?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            Yes,Manage Wise is designed to cater to the needs of both small business and larger enterprises.Its scalable features and customizable options make it versatile for various business sizes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{margin:'2%',borderRadius:'2%',padding:'1%'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={handleTextColorChange2}
        >
          <Typography color={textColor2}><b>Can I access Manage Wise from different devices and platforms?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            Yes,Manage Wise  offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops,web browsers and mobile devices.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{margin:'2%',borderRadius:'2%',padding:'1%'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={handleTextColorChange3}
        >
          <Typography color={textColor3}><b>What kind of support options do you offer to users?
            </b></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          We provide responsive customer support via chat and email to assist you with any inquiries,issues or guidance you may need while using Manage Wise.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{margin:'2%',borderRadius:'2%',padding:'1%'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={handleTextColorChange4}
        >
          <Typography color={textColor4}><b>How secure is the data stored within Manage Wise?
            </b></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          Your data's security is a top priority. Manage Wise employs robust data encryption and follows industry best practices to ensure your sensitive information is safe and protected.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>
      </Grid>
    </div>
  );
}




   

export default Faq