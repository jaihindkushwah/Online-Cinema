import {
    Box,
    Button,
    InputAdornment,
    TextField,
    Typography,
    useTheme,
  } from "@mui/material";
  import { ErrorMessage, Form, Formik } from "formik";
  import React from "react";
  import { tokens } from "../../theme";
  import { AccountCircle } from "@mui/icons-material";
    import { Link,useNavigate } from "react-router-dom";
    import { resetPassword } from "../../firebase/resetPassword";

  
  
  
  
  
  
  const flexStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
  };
  
  function ResetPasswordPage() {
  
    const theme = useTheme();
    const color = tokens(theme.palette.mode);
    const navigate=useNavigate();
  
    return (
      <Box padding={"20px"} sx={flexStyle}>
        <Box
          height={"300px"}
          width="360px"
          sx={{ backgroundColor: color.lightblue[700] }}
        >
          
          <Box width="100%" height="100%" sx={{ ...flexStyle }}>
          <Box width={'100%'} sx={{...flexStyle,justifyContent:'flex-end',flexDirection:'row'}}><Link  style={{padding:"5px 10px",backgroundColor:color.pink[600],color:'inherit',textDecoration:'none',margin:'20px'}} to={'/login'}>Login</Link></Box>
            <Formik 
            initialValues={{ email: ''}}
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
                
                
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  // alert(JSON.stringify(values, null, 2));
                  resetPassword(values.email,navigate);
                // alert(values.email)
                  setSubmitting(false);
                }, 400);
              }}
            >
             {({isSubmitting , handleChange,handleSubmit})=>(
                <Form style={{ flex: "1", ...flexStyle }}>
                {/* <Box flex={.8} sx={flexStyle}> */}
                <Typography variant="h3">Reset Password</Typography>
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
                <Button
                  type="submit"
                  sx={{
                    backgroundColor: color.pink[600],
                    fontWeight: "600",
                    marginBottom:'30px',
                    letterSpacing: "1.5px",
                    "&:hover": { backgroundColor: color.pink[500] },
                  }}
                  onSubmit={handleSubmit}
                  disabled={isSubmitting}
                  fullWidth
                >
                  Submit
                </Button>
                {/* </Box> */}
              </Form>
             )
  
             }
            </Formik>
          </Box>
        </Box>
      </Box>
    );
  }
  
  export default ResetPasswordPage;
  