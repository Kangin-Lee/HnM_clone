import React from 'react'
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };
  return (
    <div>
      <Container className="login-area">
        <Form onSubmit={(event) => loginUser(event)} className="login-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>이메일</Form.Label>
            <Form.Control type="email" placeholder="이메일을 입력해주세요." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="기억하기" />
          </Form.Group>
          <Button
            type="submit"
            className="form-bnt"
            style={{ backgroundColor: "#cd0118", border: "none" }}
          >
            로그인
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login
