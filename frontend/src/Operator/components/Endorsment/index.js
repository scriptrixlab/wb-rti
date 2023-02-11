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
        <td className="uk-text-nowrap">qewretry</td>
        <td className="uk-text-nowrap">Sended</td>
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
                  <Row style={{ textAlign: 'center' }}>
                    <Col><h4> Questions</h4></Col>
                    <Col><h4> Reffered Name</h4></Col>
                  </Row>
                  <Row style={{ margin: '20px' }}>
                    <Col>
                      <h4>Question </h4>
                    </Col>
                    <Col>
                      <h4>rgthsafdghd </h4>
                    </Col>
                  </Row>
                  <Row style={{ margin: '20px' }}>
                    <Col>
                      <h4>Question </h4>
                    </Col>
                    <Col>
                      <h4>sghdfjgh </h4>
                    </Col>
                  </Row>
                  <Row style={{ margin: '20px' }}>
                    <Col xs={3}>
                     <img src='#'style={{height:'100px',width:'100px'}}></img>
                     <Button variant="primary" type="submit" style={{ margin: '10px 30px' }}>
                    View
                  </Button>
                    </Col>
                 
                    <Col xs={8}>
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
                    Send
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




function OperatorEndorsment() {
  
  return (
      <main>
        <div className='container'>
            
        <Table striped bordered hover>
          <thead style={{background: 'rgb(142,242,196)',
             background:' linear-gradient(90deg, rgba(142,242,196,1) 32%, rgba(86,236,47,1) 90%, rgba(11,186,64,1) 100%, rgba(3,227,69,1) 100%, rgba(17,175,0,1) 100%, rgba(20,109,171,0.08727240896358546) 100%)',textAlign:"center"}}>
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

export default OperatorEndorsment;