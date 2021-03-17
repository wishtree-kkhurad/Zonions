import React, {useState} from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import Divider from '@material-ui/core/Divider';
import { Divider} from "antd";

/**Social media login options */
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

/**JOI Validations */
import Joi from 'joi';

const schema = Joi.object().keys({
  email: Joi.string().regex(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/).required(),
  password: Joi.string().min(8).required(),
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/landingPage">
        Zonions
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url("../../../images/landingpage_cover.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function UserLoginForm(props) {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  const validate = () => {
    const result = Joi.validate(
      {
        email: email,
        password: password
      }
      , schema)
    return result;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = validate();
  
    if (result.error !== null) {
      const errorField = result.error.details[0].context.key;
      console.log('errorFields', errorField);
  
      if (errorField === 'email') {
        setEmailErr(result.error.details[0].message)
      } else if (errorField === 'password') {
        setPasswordErr(result.error.details[0].message)
      }
    }
    else {
      const data = {email:email, password:password}

      axios.post('http://localhost:1337/api/user/login', data)
        .then((res) => {
          let authToken = res.data.token;
  
          localStorage.setItem('user', JSON.stringify({'email':email, 'authToken': authToken}))
          // Adds the token to the header
          axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
          // NotificationManager.success('Logged in successfully.', 'Success!', 30000);
          props.history.push({ pathname: '/restaurant/manage', from: 'SignIn' });
        })
        .catch((err) => {
          console.log('User sign in error', err);
          alert('Incorrect user credentials')
          // NotificationManager.error('Password did not match', 'Fail!', 30000);
        })
  
    }
  };
  
  const responseFacebook = (response) => {
    console.log('In facebook sign in',response);
    
    localStorage.setItem('user', JSON.stringify({'email':response.email, 'authToken': response.accessToken}))

    props.history.push({ pathname: '/restaurant/manage', from: 'SignIn' });
  }

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

  const responseGoogle = (response) => {
    console.log('in google login',response);
    localStorage.setItem('user', JSON.stringify({'email':response.Hs.nt, 'authToken': response.accessToken}))

    props.history.push({ pathname: '/restaurant/manage', from: 'SignIn' });
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        <div style={{
          marginTop:'12%',
          marginLeft:'15%',
          width:'250px',
          textAlign:'center'}}>
          <h1 style={{fontSize:'3rem', fontWeight:'bolder', color:'white'}}>
            Zonions
          </h1>
        </div>
      </Grid>
      
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={(e)=>handleSubmit(e)}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            {emailErr ? <span style={{color:'red'}}>{emailErr}</span>:null}
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            {passwordErr ? <span style={{color:'red'}}>{passwordErr}</span>:null}

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Divider> OR</Divider>
            <div>
              <FacebookLogin
                appId="490145122393571"
                fields="name,email,picture"
                buttonText="FACEBOOK"
                callback={responseFacebook}
              />
              <GoogleLogin
                clientId="291680999068-5n6h9ptfbt45soa9ivlubrenni7mrb2v.apps.googleusercontent.com"
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              />
            </div>
            
            <Box mt={3}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default UserLoginForm