import { VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <VStack>
      <h1>404 Not Found</h1>
      <Link to="/">Volver a Inicio</Link>
    </VStack>
  )
}
