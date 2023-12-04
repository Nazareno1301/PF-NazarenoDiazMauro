import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore"

const Collections = () => {
  const { productos, setProductos } = useState([])

  useEffect(() => {


    const db = getFirestore

    const itemsCollection = collection(db, "ropa")

    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => {
        let documento = {
          ...doc.data(), id : doc.id
        }
        return documento
    })

    setProductos(docs)
  })
},[])
  return (
    <div>
      <h2>Productos</h2>
      {
        productos.map((p) => {
          <div key={p.nombre}>
            <h4>{p.nombre}</h4>
            <h5>{p.descripcion}</h5>
          </div>
        })
      }



    </div>


  )
}
export default Collections