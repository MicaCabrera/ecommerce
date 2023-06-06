import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  SimpleGrid,
  useDisclosure,
} from '@chakra-ui/react'
import { useContext } from 'react'

import { CartContext } from '../../context/CartContext'
import { CartProducts } from './CartProducts'

export const CartDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { productsCart, clearCart } = useContext(CartContext)
  // console.log(cartProducts)
  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        Carrito
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Carrito de compras</DrawerHeader>

          <DrawerBody>
            <SimpleGrid gap={2}>
              {productsCart.map((product) => (
                <CartProducts key={`buy-${product.id}`} product={product} />
              ))}
            </SimpleGrid>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={clearCart}>
              Vaciar Carrito
            </Button>
            <Button colorScheme="blue">Finalizar compra</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
