function Book (props) {
  const { item } = props
  
  return (
    <div>{item.title} has content {item.content}</div>
  ) 
}

export default Book