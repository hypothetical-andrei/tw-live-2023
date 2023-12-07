function PropsChild(props) {
  const { item } = props

  return (
    <div>
      {item.id} is a {item.description}
    </div>
  )
}

export default PropsChild