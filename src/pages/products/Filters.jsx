import { Input, Select, SimpleGrid } from '@chakra-ui/react'

export const Filters = ({ handleFilters }) => {
  return (
    <SimpleGrid w="6l" columns={{ base: 1, md: 3 }} spacing={2}>
      <Input
        onChange={(e) => {
          handleFilters('name', e.target.value.toLowerCase())
        }}
        type="text"
        name="name"
        placeholder="Nombre"
      />

      <Select
        placeholder="Todas las categorías"
        name="all"
        onChange={(e) => {
          handleFilters('category', e.target.value)
        }}
      >
        <option value="tecnology"> Tecnología </option>
        <option value="components"> Componentes </option>
        <option value="headphones"> Auriculares </option>
      </Select>

      <Input
        onChange={(e) => {
          handleFilters('price', e.target.value)
        }}
        type="number"
        name="price"
        placeholder="Precio hasta"
      />
    </SimpleGrid>
  )
}
