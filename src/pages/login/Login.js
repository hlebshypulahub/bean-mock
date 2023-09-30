// import * as React from "react";
// import { Stack, Typography, Container, TextField, Button } from "@mui/material";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Yup } from '@/validation';
// import { yupResolver } from '@hookform/resolvers/yup';
// import bean from "../camera/bean.png";
// import { useContext, useState } from "react";
// import { useForm, FormProvider } from 'react-hook-form';
// import { AuthContext } from "../../components/AuthProvider";
//
// const defaultValues = {
//   email: '',
//   password: ''
// };
//
// const schema = Yup.object({
//   email: Yup.string().nullable().required(),
//   password: Yup.string().nullable().required()
// });
//
// export const Login = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [ isError, setIsError ] = useState(false);
//   const { login } = useContext(AuthContext);
//   const form = useForm({
//     defaultValues,
//     resolver: yupResolver(schema)
//   });
//   const handleSubmit = (values) => {
//     console.log(values);
//     // authApi.login(values)
//     //   .then((user) => {
//     //     console.log(user);
//     //     login(user);
//     //     if (user) navigate(location.state?.from?.pathname || '/', { replace: true });;
//     //   })
//     //   .catch(() => {
//     //     setIsError(true);
//     //   });
//   };
//   return (
//     <Container maxWidth="xs">
//       {/*<FormProvider {...form}>*/}
//
//         <Stack sx={{ alignItems: 'center' }}>
//
//           <img src={bean} alt="bean" />
//           <Typography variant="h3" color="primary" mb={3}>
//             Rejestracja
//           </Typography>
//
//           <Typography variant="h6" color="primary">
//             Dobrze Cię widzieć!
//           </Typography>
//         </Stack>
//
//         <Stack
//           noValidate
//           spacing={2}
//           mt={2}
//           component="form"
//           // onSubmit={}
//           onSubmit={handleSubmit}
//         >
//
//           <TextField
//             required
//             type="email"
//             name="email"
//             label="Email"
//             placeholder="Email"
//           />
//
//           <TextField
//             required
//             type="password"
//             name="password"
//             label="Hasło"
//             placeholder="Hasło"
//           />
//
//           {/*{isError &&*/}
//           {/*  <>*/}
//           {/*    <Typography align="center" color="error">*/}
//           {/*      Login details are not correct*/}
//           {/*    </Typography>*/}
//           {/*  </>*/}
//           {/*}*/}
//
//           <Button
//             type="submit"
//             variant="contained"
//             size="large"
//           >
//             Zaloguj mnie!
//           </Button>
//
//         </Stack>
//       {/*</FormProvider>*/}
//     </Container>
//   )
// }