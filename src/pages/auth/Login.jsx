import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../context/authContext'

export const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: '',
  })

  const { signInUser } = useContext(AuthContext)

  const handleChange = (e) => {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    })
  }

  const loginUser = (e) => {
    e.preventDefault()
    signInUser(userLogin)
  }

  return (
    <>
      <VStack>
        <Heading p={5}> Iniciar Sesión </Heading>

        <Box>
          <FormControl onClick={loginUser}>
            <Box>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={userLogin.email}
                onChange={handleChange}
                name="email"
              />
            </Box>
            <Box>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={userLogin.password}
                onChange={handleChange}
                name="password"
              />
            </Box>
            <VStack p={5}>
              <Link to="/productos">
                <Button bgColor="green.300" type="submit">
                  Iniciar Sesión
                </Button>
              </Link>
              <Link to="/register">
                <Button>Registrarse</Button>
              </Link>
            </VStack>
          </FormControl>
        </Box>
      </VStack>
    </>
  )
}
