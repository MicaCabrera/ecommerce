import { Box, Heading, HStack, Link, SimpleGrid } from '@chakra-ui/react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { AuthContext } from '../context/AuthContext'
import { CartDrawer } from './cart/CartDrawer'

export const Nav = () => {
  const { user, checkout, isLoggedIn } = useContext(AuthContext)
  console.log(user)

  return (
    <SimpleGrid columns={2} ml={5} p={1}>
      <HStack as="nav">
        <Heading> Ecommerce</Heading>

        <Link color="teal" as={NavLink} to="/">
          Productos
        </Link>
      </HStack>
      <HStack justifyContent="flex-end" p={2}>
        <Box>
          <CartDrawer />
        </Box>
        {isLoggedIn ? (
          <Link onClick={checkout} as={NavLink} to="/register">
            Cerrar Sesión
          </Link>
        ) : (
          <Link as={NavLink} to="/login">
            Iniciar Sesión
          </Link>
        )}
      </HStack>
    </SimpleGrid>
  )
}
