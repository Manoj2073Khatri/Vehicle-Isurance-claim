
import { useNavigate } from 'react-router-dom'
import {FiChevronLeft} from 'react-icons/fi'
import { Button } from 'react-bootstrap';

const BackButton = () => {
    const navigate=useNavigate();
  return (
    <Button variant="outline-secondary" size="lg" onClick={() => navigate(-1)} className="me-2 d-flex justify-content-between align-items-center"><FiChevronLeft className='me-1'/> back</Button>
  )
}

export default BackButton