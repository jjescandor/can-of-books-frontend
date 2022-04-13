import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import Button from 'react-bootstrap/Button';
import { IoLogInSharp } from 'react-icons/io5';

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  console.log("login", isAuthenticated);

  //   return <button onClick={() => loginWithRedirect()}>Log In</button>;
  //   return <Button onClick={() => loginWithRedirect()}>Log In </Button>;
  return !isAuthenticated && (
    <div>
      <h6 onClick={() => loginWithRedirect()}>
        <IoLogInSharp />
        &nbsp;&nbsp; Login
      </h6>
    </div>
  );
};

export default LoginButton;
