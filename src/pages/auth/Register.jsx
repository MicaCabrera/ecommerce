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

export const Register = () => {
  const { registerUser } = useContext(AuthContext)

  const [valueRegister, setValueRegister] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setValueRegister({
      ...valueRegister,
      [e.target.name]: e.target.value,
    })
  }

  const submitUser = (e) => {
    e.preventDefault()
    registerUser(valueRegister)
  }

  return (
    <>
      <VStack>
        <Heading p={5}> Registrarme </Heading>

        <Box>
          <FormControl onClick={submitUser}>
            <Box>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={valueRegister.email}
                onChange={handleChange}
                name="email"
              />
            </Box>
            <Box>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={valueRegister.password}
                onChange={handleChange}
                name="password"
              />
            </Box>
            <VStack p={5}>
              <Button bgColor="green.300" type="submit">
                Registrarse
              </Button>
              <Link to="/login">
                <Button>Iniciar Sesión</Button>
              </Link>
            </VStack>
          </FormControl>
        </Box>
      </VStack>
    </>
  )
}
