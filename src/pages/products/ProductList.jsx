import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { Loading } from '../../components/Loading'
import { CartContext } from '../../context/CartContext'
import { getAll } from '../../services/products'
import { Filters } from './Filters'

export const ProductList = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  // eslint-disable-next-line no-unused-vars
  const [filter, setFilters] = useState({
    name: '',
    category: '',
    price: '',
  })
  const [filteredProducts, setFilteredProducts] = useState([])
  // eslint-disable-next-line no-unused-vars
  const { productsCart, addToCart } = useContext(CartContext)

  useEffect(() => {
    const getData = async () => {
      try {
        const allProducts = await getAll()
        setLoading(false)
        setProducts(allProducts)
        setFilteredProducts(allProducts)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])

  const handleFilters = (name, value) => {
    const filtered = products.filter((product) => {
      if (name === 'name') {
        return product.name.toLowerCase().includes(value.toLowerCase())
      } else if (name === 'category') {
        return product.category === value
      } else if (name === 'price') {
        return product.price <= value
      } else if (name === 'all') {
        return products
      }
      return false
    })

    setFilteredProducts(filtered)
  }
  return (
    <div>
      <Center>
        <Filters handleFilters={handleFilters} />
      </Center>
      <SimpleGrid columns={3} spacing={10} p={10}>
        {loading && <Loading />}
        {filteredProducts.map((product) => (
          <Card key={product.id} maxW="sm">
            <CardBody>
              <Image
                src="https://axa.com.ar/webaxa/24594-medium_default/notebook-lenovo-ideapad-3-15iil05-intel-core-i7-1065g7-8gb-ram-ssd-256gb-156-w10.jpg"
                alt="Computadora"
                borderRadius="lg"
              />
              <Stack align="center" mt="6" spacing="3">
                <Heading size="md">{product.name}</Heading>
                <Text>{product.description}</Text>
                <Text color="blue.600" fontSize="2xl">
                  {product.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button as={Link} to={product.id} colorScheme="blue">
                  Detalles
                </Button>
                <Button
                  onClick={() => addToCart(product)}
                  variant="ghost"
                  colorScheme="blue"
                >
                  Agregar al Carrito
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
        {!loading && filteredProducts.length === 0 && (
          <p>No hay productos que coincidan con los filtros.</p>
        )}
      </SimpleGrid>
    </div>
  )
}
