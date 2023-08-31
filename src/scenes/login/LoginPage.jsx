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
import { AccountCircle } from "@mui/icons-material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import facebookLogo from "../../assests/facebookLogo.png";
import twitterIcon from "../../assests/twitter-app-icon.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { useDispatch } from "react-redux";


import {login} from '../../redux/createSlice'
import { signUpWithGoogle } from "../../firebase/signUpUsingEmail";
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";




const flexStyle = {
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "column",
  alignItems: "center",
};

function LoginPage() {
  // dotenv.config();
  // console.log(process.env.REACT_APP_FIREBASE_API_KEY,process.env.REACT_APP_AUTH_DOMAIN);

  const dispatch=useDispatch();

  // console.log(process.env.FIREBASE_API_KEY);
  // console.log(process.env.REACT_APP_AUTH_DOMAIN)

  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  const navigate=useNavigate();

  const userLoginHandler=({email,password})=>{
      console.log(email);
      console.log(password);
      signInWithEmailAndPassword(auth,email,password)
      .then((userCredential)=>{
        const user=userCredential.user;
        const usersCollection=collection(db,'users');
        const q=query(usersCollection,where("uid","==",user.uid));
        getDocs(q)
        .then((data) => {
          if (!data.empty) {
            const doc = data.docs[0];
            console.log("Document already exists. ID:", doc.id);
            dispatch(login(doc.id));
          }
        })
        
        .then(()=>{
            navigate('/');
        })

      })
      .catch((error)=>{
        const errorCode=error.code;
        const errorMessage=error.message;
        alert(errorCode,errorMessage);
      })
      
  }
  return (
    <Box padding={"20px"} sx={flexStyle}>
      <Box
        height={"500px"}
        width="340px"
        sx={{ backgroundColor: color.lightblue[700] }}
      >
        
        <Box width="100%" height="100%" sx={{ ...flexStyle }}>
        <Box width={'100%'} sx={{...flexStyle,justifyContent:'flex-end',flexDirection:'row'}}><Link  style={{padding:"5px 10px",backgroundColor:color.pink[600],color:'inherit',textDecoration:'none',marginRight:'20px'}} to={'/signup'}>Sign Up</Link></Box>
          <Formik 
          initialValues={{ email: '', password: ''}}
          validate={values => {
              const errors = {};
              // console.log(values)
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
                // alert(JSON.stringify(values, null, 2));
                userLoginHandler(values);
                setSubmitting(false);
              }, 400);
            }}
          >
           {({isSubmitting , handleChange,handleSubmit})=>(
              <Form style={{ flex: ".8", ...flexStyle }}>
              {/* <Box flex={.8} sx={flexStyle}> */}
              <Typography variant="h3">Login</Typography>
              <TextField
                type="email"
                name="email"
                // value={email}
                helperText={<ErrorMessage name="email" component="div" />}
                id="input-with-icon-textfield1_"
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
                id="input-with-icon-textfield1_1"
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
              <Link  style={{padding:"1px 2px",alignSelf:'flex-end',fontSize:'10px',textDecoration:'none',margin:'-8px 0px',color:'#0d1024'}} to={'/resetpassword'}>Reset Password ?</Link>
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
                Login
              </Button>
              
              {/* </Box> */}
              
            </Form>
            
           )

           }
           
          </Formik>
          <Box sx={{ ...flexStyle, justifyContent: "space-between" }}>
            <Typography marginBottom={"20px"} variant="h6">
              Or Login Using
            </Typography>
            <Box>
              <IconButton onClick={()=>{alert('Currently gmail login available')}}>
                <img
                  width={40}
                  style={{ borderRadius: "52%", backgroundColor: "inherit" }}
                  src={facebookLogo}
                  alt="facebookLogo"
                  loading="lazy"
                />
              </IconButton>
              <IconButton onClick={()=>{signUpWithGoogle(dispatch,login,navigate)}}>
                <img
                  width={40}
                  style={{ borderRadius: "52%" }}
                  alt="googleLogo"
                  loading="lazy"
                  src="https://cdn-icons-png.flaticon.com/512/7199/7199629.png"
                />
              </IconButton>
              <IconButton onClick={()=>{alert('Currently gmail login available')}}>
                
                <img
                  width={40}
                  style={{ borderRadius: "52%" }}
                  src={twitterIcon}
                  alt="twitterLogo"
                  loading="lazy"
                />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginPage;
