function PropsChild (props) {
  const { item } = props

  return (
    <div>
      i am {item.name} and have the email {item.email}
    </div>
  )
}

export default PropsChild