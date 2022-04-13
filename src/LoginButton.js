import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import Button from 'react-bootstrap/Button';
import { IoLogInSharp } from 'react-icons/io5';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  //   return <button onClick={() => loginWithRedirect()}>Log In</button>;
  //   return <Button onClick={() => loginWithRedirect()}>Log In </Button>;
  return (
    <div>
      <h6 onClick={() => loginWithRedirect()}>
        <IoLogInSharp />
        &nbsp;&nbsp; Login
      </h6>
    </div>
  );
};

export default LoginButton;
