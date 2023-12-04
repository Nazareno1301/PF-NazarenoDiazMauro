import React, { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useParams } from 'react-router-dom'

//eleccion por caategoria
const Documents = () => {
  const {id} = useParams()
  const { producto, setProducto } = useState([])

  useEffect(() => {


    const db = getFirestore

  const oneItem = doc(db, "ropa", `${id}`)

    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        const doc = snapshot.data()
        setProducto(doc)
      }
    })
  }, [])
  return (
    <div>
      <h4>Producto</h4>
      {
        <div>
          <h2>{producto.nombre}</h2>
          <h3>{producto.descripcion}</h3>
        </div>
      }
    </div>
  )
}

export default Documents