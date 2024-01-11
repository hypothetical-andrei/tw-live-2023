import { useParams } from 'react-router-dom'

function Item () {
  const { id } = useParams()

  return (
    <div>
      I am the details for item {id}
    </div>
  )
}

export default Item