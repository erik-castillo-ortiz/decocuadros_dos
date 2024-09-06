import React from 'react'

const Categoria = ({ params }: { params: { name: string[] } }) => {
  return (
    <div>Categoria {params.name}</div>
  )
}

export default Categoria