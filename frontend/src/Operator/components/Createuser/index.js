import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
// import { useNavigate } from "react-router-dom";

function CreateUser() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dposition, setDposition] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setConfPassword] = useState("");
    const [role, setRole] = useState("");
    // const [msg, setMsg] = useState("");
    // const navigate = useNavigate();


    const saveUser = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:8000/adduser", {
            name: name,
            email: email,
            dposition: dposition,
            password: password,
            cpassword: cpassword,
            role: role,
          });
        //   navigate("/users");
        } catch (error) {
          if (error.response) {
            // setMsg(error.response.data.msg);
          }
        }
      };

    return (

        <>



            <div >

                <div className='container'>
                    <div style={{ backgrondcolor: "#0bba40", margin: '20px', flex: 'left' }}>
                        <input
                            type="text"
                            id="header-search"
                            placeholder="Search Here"
                            name="search"
                            style={{ borderRadius: '3%' }}
                        />
                        <button type="submit" style={{ margin: '20px' }}>
                            <i class="bi bi-search"
                                style={{ fontSize: "20px", fontFamily: "sans-serif", borderRadius: '3%', }}
                            >  Search </i>
                        </button>
                        <Button variant="outline-danger" onClick={handleShow} style={{ margin: '10px', float: 'right' }}><i class="bi bi-plus"
                            style={{ fontSize: "20px", fontFamily: "sans-serif", borderRadius: '3%', }}
                        >  Add User </i></Button>
                    </div>

                    <Table striped bordered hover>
                        <thead style={{
                            background: 'rgb(142,242,196)',
                            background: ' linear-gradient(90deg, rgba(142,242,196,1) 32%, rgba(86,236,47,1) 90%, rgba(11,186,64,1) 100%, rgba(3,227,69,1) 100%, rgba(17,175,0,1) 100%, rgba(20,109,171,0.08727240896358546) 100%)', textAlign: "center"
                        }}>
                            <tr>
                                <th>Sl No.</th>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>Departmental Position</th>
                                <th>Create Date</th>
                                <th>Role</th>
                                <th colSpan={2} >Action</th>
                            </tr>
                        </thead>
                        <tbody style={{
                            textAlign: "center", background: 'rgb(194,226,210)',
                            background: 'linear-gradient(90deg, rgba(194,226,110,0.08727240896358546) 3%, rgba(111,214,235,1) 99%, rgba(2,0,36,1) 100%, rgba(2,0,36,1) 100%)'
                        }}>
                            <tr>
                                <td>1</td>
                                <td>qw1234r</td>
                                <td>Otto@12</td>
                                <td>Otto</td>
                                <td>10/12/22</td>
                                <td>member</td>
                                <td>
                                    <Button variant="outline-danger" style={{ margin: '10px' }}>Edit</Button>
                                    <Button variant="outline-danger" >Delete</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>

            {/* Modal star */}

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>User Add</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={saveUser}>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" name="name" value={name}
                    onChange={(e) => setName(e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                            </Col>


                        </Row>
                        <Row>
                            <Col>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Departmental Position</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" name="dposition" value={dposition}
                    onChange={(e) => setDposition(e.target.value)} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <div className="field">
                                    <label className="label">Role</label>
                                    <div className="control" style={{marginTop:'10px'}}>
                                        <div className="select is-fullwidth" >
                                            <select
                                                value={role}
                                                onChange={(e) => setRole(e.target.value)}
                                                style={{height:'35px',width:'100%'}}
                                            >
                                                <option value="Administration">Administration</option>

                                                <option value="Operator">Operator</option>

                                                <option value="Commitee Member">Commitee Member</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="password" value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="cpassword" value={cpassword}
                    onChange={(e) => setConfPassword(e.target.value)}/>
                                </Form.Group>
                            </Col>
                        </Row>






                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* ---------------------------modal end--------------------------------------------- */}
        </>
    )

}

export default CreateUser;