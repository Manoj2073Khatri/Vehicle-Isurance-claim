import { BiRightArrowAlt } from 'react-icons/bi'
import { NavLink } from 'react-router-dom';
import BackButton from '../components/backButton';
import Stepper from "../components/stepper"
import Upload from '../components/upload';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Col, Nav, Row } from 'react-bootstrap';

const UploadImage = () => {

  return (
    <>
      <Stepper activeStep={2} />
      <div className="mt-4">
        <h3 className="text-center fw-bold">Upload the Required Pictures</h3>
        <div className='row justify-content-center mt-2 mb-4'>
          <p className='col-12 col-md-8 col-lg-8 text-center text-muted '>Upload  photos of your vehicle by clicking each of the boxes.Please show the entire side of your vehicle int he required
            exterior images and provide closer views of damage in the Ad Hoc images tab, including the adjacent panel to the damage in the photo</p>
        </div>
      </div>

      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col lg={12}>
            <Nav variant="pills border rounded">
              <Nav.Item className='w-50'>
                <Nav.Link eventKey="first" className='text-center'>Required Images</Nav.Link>
              </Nav.Item>
              <Nav.Item className='w-50'>
                <Nav.Link eventKey="second" className='text-center'>Ad Hoc Images</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col lg={12}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className='mt-4 mt-md-5 mt-lg-5'>
                  <Upload />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className='mt-5'>
                  <Upload />
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
    </Tab.Container>


      {/* <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
          fill
        >
          <Nav eventKey="home" title="Required Images" variant="pills">
              <div className='mt-5'>
                <Upload />
              </div>

          </Nav>
          <Nav eventKey="profile" title="Adhoc Images">
              <div className='mt-5'>
                 <Upload />
              </div>

          </Nav>
          
        </Tabs> */}

      <div className='d-flex justify-content-center align-items-center mt-5'>
        <BackButton />
        <NavLink to="/success" className='btn btn-primary btn-lg rounded cta-btn'>
          Submit and Proceed <BiRightArrowAlt className='arrow' />
        </NavLink>
      </div>

    </>
  )
}

export default UploadImage