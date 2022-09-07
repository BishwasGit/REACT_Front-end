import React from 'react' ;
import { Grid , Paper, Button, Avatar, Link } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Typography  from '@material-ui/core/Typography';


const Login = ()=>{

    const paperstyle = {
        padding : 20,
        height : '70vh',
        width : 500,
        margin : "10% auto" 
    }
    const AvatarStyle = {
            backgroundColor : "#3f51b5",
    }
    const buttonstyle = {
        color :'white', 
        margin : '4% auto' 
    }
    const inputstyles = makeStyles({
        root : {
          border : 2 ,
          borderRadius : 3,
          boxShadow: '0 1px 0px 0px #f50057',
          color : 'white',
          padding : '5   30px', 
          width : "70px",
        }
      })
    const navfont = {
        color :"white",
    }
      const textfieldstyle = {
        margin : '8px',
      }

      const [checked , setchecked] = React.useState(true);
    return(
        <div className="form">
            <AppBar color= "primary">
                <ToolBar>

                            <Button style={navfont}>LOGIN</Button>  

                            <Button style={navfont}>REGISTER</Button>   
                </ToolBar>
            </AppBar>

            <Grid>
                <Paper elevation={10} style= {paperstyle}>
                    <Grid align= "center">
                        <Avatar style={AvatarStyle}>B</Avatar>
                            <h2>Sign in</h2>
                        <TextField
                            style={textfieldstyle}
                            className={inputstyles.root}
                            variant='outlined'  
                            color = "secondary"
                            type = "text"
                            label="Username" 
                            placeholder = "Enter username"
                            fullWidth required
                            />
                            <TextField
                            style={textfieldstyle}
                            className={inputstyles.root}
                            variant='outlined'  
                            color = "secondary"
                            type = "password"
                            label="Password" 
                            placeholder = "Enter password"
                            fullWidth required
                            />

                            <FormControlLabel 
                                    control={
                                <Checkbox
                                checked={checked}
                                onChange={(e) => setchecked(e.target.checked)}
                                name = "checkedB"
                                color = "primary"
                                inputProps={{
                                    'aria-label': 'primary checkbox'
                                }} />
                                    } 
                                    label = "Remember me"
                                />
                                <Button 
                                        style={buttonstyle}
                                        variant="contained" 
                                        color="secondary" 
                                        size="large" fullWidth required> 
                                        Sign in
                                </Button>
                                <Typography>
                                   <Link href = "#">Forgot passowd ?</Link>
                                </Typography>
                                <Typography>Create an account
                                   <Link href = "#">Register</Link>
                                </Typography>
                    </Grid>
                </Paper>
             </Grid>
        </div>
    )
}

export default Login ;
