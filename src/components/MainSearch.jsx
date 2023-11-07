import { useEffect, useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Job from './Job'
import { Heart } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import getJobsAction from '../redux/actions'

const MainSearch = () => {
  const dispatch = useDispatch()
  const jobsFromRedux = useSelector((state) => state.jobs)
  console.log(jobsFromRedux)
  const [query, setQuery] = useState('')
  // const [jobs, setJobs] = useState([])

  const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search='

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(getJobsAction(baseEndpoint, query))

    // try {
    //   const response = await fetch(baseEndpoint + query + '&limit=20')
    //   if (response.ok) {
    //     const { data } = await response.json()
    //     setJobs(data)
    //   } else {
    //     alert('Error fetching results')
    //   }
    // } catch (error) {
    //   console.log(error)
    // }
  }

  return (
    <Container>
      <Row>
        <Col
          xs={10}
          className="mx-auto my-3 d-flex justify-content-between align-items-center"
        >
          <h1 className="display-1">Remote Jobs Search</h1>
          <Link to="/favourites">
            <Heart className="display-4" />
          </Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobsFromRedux.map((jobData, i) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
