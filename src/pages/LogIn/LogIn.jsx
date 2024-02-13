import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../../store/slices/userSlice'

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(4, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

});

function LogIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const dispatch = useDispatch()


    const handleLogin = (email, password) => {
        const auth = getAuth();
        // console.log(auth)
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }))
                navigate('/');

            })
            .catch(() => alert('Неправильный логин или пароль'))
    }
    return (
        <Box
            sx={{
                backgroundColor: 'grey',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',

            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
                <Typography variant="h3" gutterBottom sx={{ color: 'white' }}>
                    Войти
                </Typography>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={values => {
                        setEmail(values.email)
                        setPassword(values.password)
                        handleLogin(values.email, values.password)
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <Stack justifyContent="center" spacing={3}>
                                <Field type="email" name="email" placeholder="Enter your email..." />
                                {errors.email && touched.email ? (
                                    <Typography sx={{ color: 'red' }}>{errors.email}</Typography>
                                ) : null}
                                <Field type="password" name="password" placeholder="Password" />
                                {errors.password && touched.password ? (
                                    <Typography sx={{ color: 'red' }}>{errors.password}</Typography>
                                ) : null}
                                <Button color="primary" variant="contained" type="submit">
                                    SUBMIT
                                </Button>
                            </Stack>
                        </Form>
                    )}
                </Formik>
                <p>Если не аккаунта,  <Link to="/signup">зарегестрируйся</Link> </p>
            </Box>
        </Box>
    )
}

export default LogIn