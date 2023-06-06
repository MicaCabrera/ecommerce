import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getAll } from '../services/products'

export const Details = () => {
  const [product, setProducts] = useState([])
  const { id } = useParams()
  const renderProduct = product.find((product) => product.id === id)

  console.log(renderProduct)

  useEffect(() => {
    const getData = async () => {
      try {
        const allProducts = await getAll()
        setProducts(allProducts)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <VStack p={5}>
      <Flex w="full" bgColor="gray" justify="start" p={5}>
        <Button>Volver</Button>
      </Flex>
      <Card w="lg" p={5}>
        <CardBody>
          <Image
            src="https://img.freepik.com/vector-gratis/ilustracion-concepto-computadora-escritorio_114360-12153.jpg?w=740&t=st=1685933726~exp=1685934326~hmac=a58e312e13bba3bffbb1018b99c478b881d72182bb3aaa16983d5eecb471471a"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading> {renderProduct?.name}</Heading>
            <Text>{renderProduct?.description}</Text>
            <Text color="blue.600" fontSize="2xl">
              {renderProduct?.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button variant="ghost" colorScheme="blue">
            Comprar
          </Button>
        </CardFooter>
      </Card>
    </VStack>
  )
}
