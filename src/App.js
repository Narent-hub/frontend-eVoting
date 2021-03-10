import './App.css'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'

function App() {
  return (
    <div className='App'>
      <div className='containerDiv'>
        <Container style={{ marginBottom: '150px' }}>
          <Row noGutters={true}>
            <Col sm={12} md={12} lg={6}></Col>
            <Col sm={12} md={12} lg={6}>
              <Card className='text-center cards registerCard'>
                <Card.Title className='title'>
                  Welcome to our eVoting platform
                </Card.Title>
                <Card.Text style={{ marginBottom: '30px', fontSize: '14px' }}>
                  Please enter your credentials to set up an account with us!
                </Card.Text>
                <Form>
                  <Form.Group controlId='formBasicName'>
                    <Form.Control
                      type='text'
                      name='name'
                      placeholder='First Name'
                    />
                  </Form.Group>
                  <Form.Group controlId='formBasicName'>
                    <Form.Control
                      type='text'
                      name='name'
                      placeholder='Last Name'
                    />
                  </Form.Group>
                  <Form.Group controlId='formBasicUsername'>
                    <Form.Control
                      type='text'
                      name='username'
                      placeholder='Username'
                    />
                  </Form.Group>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Control
                      type='text'
                      name='email'
                      placeholder='Email'
                    />
                  </Form.Group>
                  <Form.Group controlId='formBasicPassword'>
                    <Form.Control
                      type='password'
                      name='password'
                      placeholder='Password'
                    />
                  </Form.Group>
                  <Form.Group controlId='exampleForm.SelectCustom'>
                    <Form.Control as='select' required={true} custom>
                      <option hidden value='choose'>
                        --Gender--
                      </option>
                      <option value='user'>Female</option>
                      <option value='admin'>Male</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId='exampleForm.SelectCustom'>
                    <Form.Label style={{ fontSize: '14px' }}>
                      You are registering as a:
                    </Form.Label>
                    <Form.Group controlId='exampleForm.SelectCustom'>
                      <Form.Control as='select' required={true} custom>
                        <option hidden value='choose'>
                          ---Choose one---
                        </option>
                        <option value='user'>Creator</option>
                        <option value='admin'>Voter</option>
                      </Form.Control>
                    </Form.Group>
                  </Form.Group>
                  <Button className='register' type='submit'>
                    SUBMIT
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default App
