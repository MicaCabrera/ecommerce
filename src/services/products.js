import { collection, getDocs } from 'firebase/firestore'

import { db } from '../firebase/config'

export const getAll = async () => {
  const data = await getDocs(collection(db, 'products'))

  let products = []

  data.forEach((doc) => {
    // console.log(doc.data(), doc.id) Esto es el objeto q yo estoy esperando, doc.data() pero no te trae el id doc.id, lo trae por separado

    products.push({
      ...doc.data(),
      id: doc.id,
    })
  })

  return products
}
