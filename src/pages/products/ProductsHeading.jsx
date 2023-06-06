import { Center, Heading } from '@chakra-ui/react'

import { ProductList } from './ProductList'

export const ProductsHeader = () => {
  return (
    <div>
      <Heading p={5}>Productos</Heading>
      <Center>
        <ProductList />
      </Center>
    </div>
  )
}
