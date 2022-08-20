import { useParams } from 'react-router-dom'
import './Service.css'

const Service = () => {
  const { id } = useParams()

  return (
    <div className="service">
      <h1 className="text-center p-5">Enroll This Course : {id}</h1>
    </div>
  )
}

export default Service
