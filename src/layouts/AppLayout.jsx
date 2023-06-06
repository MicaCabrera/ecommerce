import { Flex, Stack } from '@chakra-ui/react'

import { Footer } from '../components/Footer'
import { Nav } from '../components/nav'

export const AppLayout = ({ children }) => {
  return (
    <Flex flexDirection="column" minH="100vh">
      <Nav />
      <Stack flex="1"> {children}</Stack>
      <Footer />
    </Flex>
  )
}
