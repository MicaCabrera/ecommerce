import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useContext } from 'react'

import { CartContext } from '../../context/CartContext'

export const CartProducts = ({ product }) => {
  const { removeProduct } = useContext(CartContext)

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '100px' }}
        src={product.image}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{product.name}</Heading>
          <Text py="2">{product.description}</Text>
          <Text py="2">{product.price}</Text>
          <Text py="2"> Cantidad: {product.quantity}</Text>
        </CardBody>

        <CardFooter>
          <Button
            onClick={() => {
              removeProduct(product.id)
            }}
            variant="solid"
            colorScheme="blue"
          >
            Quitar
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
}
