import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
    useTheme,
  } from "@mui/material";
  import { ErrorMessage, Form, Formik } from "formik";
  import React from "react";
  import { tokens } from "../../theme";
  import { AccountCircle, Person } from "@mui/icons-material";
  import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
  import facebookLogo from "../../assests/facebookLogo.png";
  import twitterIcon from "../../assests/twitter-app-icon.png";
  import { useDispatch } from "react-redux";
  
  
  import {login} from '../../redux/createSlice'
  import { signUpWithGoogle } from "../../firebase/signUpUsingEmail";
  import { Link, useNavigate } from "react-router-dom";
import userRegistrations from "../../firebase/createUserRegistration";
  
  
  
  
  const flexStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
  };
  
  function SignUpPage() {
    // dotenv.config();
    // console.log(process.env.REACT_APP_FIREBASE_API_KEY,process.env.REACT_APP_AUTH_DOMAIN);
  
    const dispatch=useDispatch();
  
    // console.log(process.env.FIREBASE_API_KEY);
    // console.log(process.env.REACT_APP_AUTH_DOMAIN)
  
    const theme = useTheme();
    const color = tokens(theme.palette.mode);
    const navigate=useNavigate();



  
    return (
      <Box padding={"20px"} sx={flexStyle}>
        <Box
          height={"500px"}
          width="360px"
          sx={{ backgroundColor: color.lightblue[700] }}
        >
          
          <Box width="100%" height="100%" sx={{ ...flexStyle }}>
          <Box width={'100%'} sx={{...flexStyle,justifyContent:'flex-end',flexDirection:'row'}}>
            <Link style={{padding:"5px 10px",backgroundColor:color.pink[600],color:'inherit',textDecoration:'none',marginRight:'20px'}} to={'/login'}>Login</Link>
            </Box>
            <Formik 
            initialValues={{ email: '', password: '',name:''}}
            validate={values => {
                const errors = {};
                // console.log(values)
                if(!values.name){
                    errors.name="Required"
                }
                else if(values.name.length<3){
                    errors.name="It should be three letters."
                }
                if (!values.email) {
                  errors.email = 'Required';
                } 
                else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                if(!values.password){
                  errors.password='Required'
                }
                else if(values.password.length<6){
                  errors.password = 'It must be at least 6 digit.';
                }
                else if(
                  !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/i.test(values.password)
                ){
                  errors.password = 'It must be contain num,symbols and A-Z.';
                }
                
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                //   alert(JSON.stringify(values, null, 2));
                  userRegistrations(values,navigate,dispatch,login);
                  setSubmitting(false);
                }, 400);
              }}
            >
             {({isSubmitting , handleChange,handleSubmit})=>(
                <Form style={{ flex: ".8", ...flexStyle }}>
                {/* <Box flex={.8} sx={flexStyle}> */}
                <Typography variant="h3">Sign Up</Typography>
                <TextField
                  type="text"
                  name="name"
                  // value={email}
                  helperText={<ErrorMessage name="name" component="div" />}
                  id="input-with-icon-textfield1"
                  label="Full Name"
                  placeholder="Type your Full name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person/>
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  onChange={handleChange}
                />
                <TextField
                  type="email"
                  name="email"
                  // value={email}
                  helperText={<ErrorMessage name="email" component="div" />}
                  id="input-with-icon-textfield"
                  label="Email"
                  placeholder="Type your username"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  onChange={handleChange}
                />
                <TextField
                  type="password"
                  name="password"
                  // value={password}
                  helperText={<ErrorMessage name="password" component="div" />}
                  id="input-with-icon-textfield1"
                  placeholder="Type your password"
                  label="Password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  sx={{
                    backgroundColor: color.pink[600],
                    fontWeight: "600",
                    letterSpacing: "1.5px",
                    "&:hover": { backgroundColor: color.pink[500] },
                  }}
                  onSubmit={handleSubmit}
                  disabled={isSubmitting}
                  fullWidth
                >
                  Sign Up
                </Button>
                {/* </Box> */}
              </Form>
             )
  
             }
            </Formik>
            <Box sx={{ ...flexStyle, justifyContent: "space-between" }}>
              <Typography marginBottom={"20px"} variant="h6">
                Or SignUp Using
              </Typography>
              <Box>
                <IconButton>
                  <img
                    width={40}
                    style={{ borderRadius: "52%", backgroundColor: "inherit" }}
                    src={facebookLogo}
                    alt=""
                  />
                </IconButton>
                <IconButton onClick={()=>{signUpWithGoogle(dispatch,login,navigate)}}>
                  <img
                    width={40}
                    style={{ borderRadius: "52%" }}
                    alt="googleLogo"
                    src="https://cdn-icons-png.flaticon.com/512/7199/7199629.png"
                  />
                </IconButton>
                <IconButton>
                  
                  <img
                    width={40}
                    style={{ borderRadius: "52%" }}
                    src={twitterIcon}
                    alt=""
                  />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
  
  export default SignUpPage;
  