import React, { useState} from 'react'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function Abc() {
  const [show, setShow] = useState(false);

    const toggleExpander =()=>{
      setShow(!show)
    }
 
 
    return (
      <>
      <tr key="main" onClick={toggleExpander}>  
        <td className="uk-text-nowrap">3</td>
        <td className="uk-text-nowrap">3</td>
        <td className="uk-text-nowrap">wdaesgd</td>
        <td className="uk-text-nowrap">DD/MM/YY</td>
        <td className="uk-text-nowrap">Submitted</td>
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
                      <h4>What is your name? </h4>
                    </Col>
                    <Col>
                      <Form.Control type="text" placeholder="Answer" />
                    </Col>
                  </Row>
                  <Row style={{ margin: '20px' }}>
                    <Col>
                      <h4>Question </h4>
                    </Col>
                    <Col>
                      <Form.Control type="text" placeholder="Answer" />
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




function AdminstrationEndorsment() {
  
  return (
      <main>
        <div className='container'>
            
        <Table striped bordered hover>
          <thead style={{background: 'rgb(2,0,36)',
                  background: 'linear-gradient(90deg, rgba(2,0,36,1) 8%, rgba(111,214,235,1) 38%, rgba(2,0,36,1) 98%, rgba(194,226,110,0.08727240896358546) 100%)',textAlign:"center",color:"white"}}>
                <tr>
                  <th>Sl No.</th>
                  <th>Case No.</th>
                  <th>Applicant Name</th>
                  <th>Received Date</th>
                  <th>Status</th>
                </tr>
          </thead>
          <tbody >
              <Abc />
          </tbody>
        </Table>
          </div>
      </main>
    
  )
}


 


export default AdminstrationEndorsment

       


      