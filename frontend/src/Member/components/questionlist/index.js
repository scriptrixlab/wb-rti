import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
// import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Abc() {
  const [show, setShow] = useState(false);

  const toggleExpander = () => {
    setShow(!show)
  }


  return (
    <>
      <tr key="main" onClick={toggleExpander}>
        <td className="uk-text-nowrap">3</td>
        <td className="uk-text-nowrap">3</td>
        <td className="uk-text-nowrap">wdaesgd</td>
        <td className="uk-text-nowrap">DD/MM/YY</td>
        <td className="uk-text-nowrap">Pending</td>
      </tr>

      {
        show &&
        <>
          <tr className="expandable" key="tr-expander">
            <td className="uk-background-muted" colSpan={5}>
              <div className="inner uk-grid">
                <Form>
                  <Row>
                    <Col>
                      <h4>Case No.:</h4>
                    </Col>
                    <Col>
                      <h4>23456</h4>
                    </Col>

                    <Col>
                      <h4>Applicant Name:</h4>
                    </Col>
                    <Col>
                      <h4>asdfghj</h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ textAlign: 'center', margin: '20px' }}><h2>All Questions</h2></Col>
                  </Row>
                  <Row style={{ margin: '20px' }}>
                    <Col>
                      <h4>Question </h4>
                    </Col>
                    <Col>
                      <Form.Control type="text" placeholder="Refferd name" />
                    </Col>
                  </Row>
                  <Row style={{ margin: '20px' }}>
                    <Col>
                      <h4>Question </h4>
                    </Col>
                    <Col>
                      <Form.Control type="text" placeholder="Refferd name" />
                    </Col>
                  </Row>
                  <Row style={{ margin: '20px' }}>
                    <Col>
                      <Form.Group controlId="formFileLg" className="mb-3">
                        <Form.Label>Requered Document</Form.Label>
                        <Form.Control type="file" size="lg" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                    </Col>
                  </Row>


                  <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{ margin: '10px 50px' }}>
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button variant="primary" type="submit" style={{ margin: '10px 50px' }}>
                    Submit
                  </Button>
                </Form>
              </div>
            </td>
          </tr>
        </>
      }
    </>
  );

}




function MemberQuestion() {

  return (
    <main>
      <div className='container'>

        <Table striped bordered hover>
          <thead style={{
            background: 'rgb(21,36,111)',
            background: 'linear-gradient(90deg, rgba(21,63,111,1) 0%, rgba(142,242,196,1) 0%, rgba(113,198,223,1) 26%, rgba(111,184,208,1) 60%, rgba(99,192,219,1) 85%, rgba(20,109,171,0.08727240896358546) 100%)', textAlign: "center", color: 'black'
          }}>
            <tr>
              <th>Sl No.</th>
              <th>Case No.</th>
              <th>Applicant Name</th>
              <th>Received Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody  >
            <Abc />
          </tbody>
        </Table>
      </div>
    </main>

  )
}





export default MemberQuestion




