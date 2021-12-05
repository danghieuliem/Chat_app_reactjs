import React from 'react';
import {Row, Col, Typography, Button} from 'antd'
import firebase, {auth} from '../../firebase/config'
// import { useNavigate } from 'react-router-dom'

const {Title} = Typography

const fbProvider = new firebase.auth.FacebookAuthProvider()

const Login = () => {
  // const navigate = useNavigate();

  const handleFbLogin = () => {
    auth.signInWithPopup(fbProvider)
  }

  // auth.onAuthStateChanged(user => {
  //   console.log(user);
  //   if(user)
  //   {
  //     navigate('/');
  //   }
  // })

  return (
    <Row justify = "center" style={{height: 800}}>
      <Col span={8}>
        <Title style={{textAlign: 'center'}} level={3}>
          Chat App
        </Title>
        <Button 
        style={{width: '100%', marginBottom: 5}}>
          Google Login
        </Button>
        <Button 
        style={{width: '100%'}}
        onClick={handleFbLogin}>
          Facebook Login
        </Button>
      </Col>
    </Row>
  );
};

export default Login;