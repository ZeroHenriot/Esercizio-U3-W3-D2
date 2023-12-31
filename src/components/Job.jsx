import { Row, Col } from 'react-bootstrap'
import { Heart } from 'react-bootstrap-icons'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToFavourtesAction } from '../redux/actions'

const Job = ({ data }) => {
  const dispatch = useDispatch()
  // console.log(data)
  return (
    <>
      <Row
        className="mx-0 mt-3 p-3"
        style={{ border: '1px solid #00000033', borderRadius: 4 }}
      >
        <Col xs={3}>
          <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        </Col>
        <Col xs={7}>
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
        </Col>
        <Col xs={2} className="d-flex align-items-center justify-content-end">
          <Heart
            style={{ cursor: 'pointer' }}
            onClick={() => {
              dispatch(addToFavourtesAction(data))
            }}
          />
        </Col>
      </Row>
    </>
  )
}

export default Job
