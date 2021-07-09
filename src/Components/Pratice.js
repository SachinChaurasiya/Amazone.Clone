import React from 'react';
import './Pratice.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      alignItems: 'center',
      width:'80%',
      fontWeight: 'bold',
      margin: '0px 20px 0px 70px',
      fontSize: '30px',
      backgroundColor: "yellow",
      color: 'rgb(236, 16, 248)',
      height: "140",
    },
      control: {
        padding: theme.spacing(2),
      },

      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
  }));

export default function FixedContainer() {
    const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
          <div className="heading_main"> 
             <Grid>
                 <Paper className={classes.paper}>Very very Carefully chosen tutors</Paper>
            </Grid>
            </div>
        <Typography component="div" style={{ backgroundColor: 'rgb(64, 233, 249)', height: '70vh' ,marginTop: '20px'}} >
              <div className="Second-heading" style={{ marginTop:''}}>
                  <h1>Cambridge & IB Mathematics Subjet Choice</h1>
              </div>
              {/* <Paper className={classes.paper} style={{PaddingTop: '100px'}}>Very Very Carefully chosen tutors</Paper> */}





              <Card className='cards' style={{minWidth:"275px" ,backgroundColor:"rgb(64, 233, 249)", outLine:"none", border:'none',boxShadow:"none"}}>
      <CardContent style={{minWidth:"275px" ,backgroundColor:"transparent", outLine:"none", border:'none'}} >
        <Typography className={classes.title}  style={{color:'rgb(12, 0, 78)' , fontSize:'25px' ,fontWeight:'bold' ,lineHeight:"2"}}>
          IGCSE - Mathematics
        </Typography>
        <Typography style={{color:'#fff',lineHeight:"2"}}>
          Mathematics Core/ Extenderd 0580
        </Typography>
        <Typography style={{color:'#fff',lineHeight:"2"}}>
          International Mathematics 0607
        </Typography>
        <Typography style={{color:'#fff',lineHeight:"2"}}>
          Additional Mathematics 0606
        </Typography>
      </CardContent>








      <CardContent>
  <Typography style={{color:'rgb(12, 0, 78)' , fontSize:'25px' ,fontWeight:'bold',lineHeight:"2"}}>
    AS-A level 
  </Typography>
  <Typography style={{color:'#fff',lineHeight:"2"}}>
    Mathematics 9709
  </Typography>
  <Typography style={{color:'#fff',lineHeight:"2"}}>
    Mathematics Further 9231
  </Typography>
</CardContent>










<CardContent>
  <Typography style={{color:'rgb(12, 0, 78)' , fontSize:'25px' ,fontWeight:'bold',lineHeight:"2"}}>
    IBDB
  </Typography>
  <Typography style={{color:'#fff',lineHeight:"2"}}>
    Mathematics AA SL
  </Typography>
  <Typography style={{color:'#fff',lineHeight:"2"}}>
  Mathematics AA HL
  </Typography>
  <Typography style={{color:'#fff',lineHeight:"2"}}>
  Mathematics AA SL
  </Typography>
  <Typography style={{color:'#fff',lineHeight:"2"}}>
Mathematics AA HL
</Typography>
</CardContent>

    </Card>








        </Typography>
        
        
        
      </Container>
    </React.Fragment>
  );
}


















 
 
 























