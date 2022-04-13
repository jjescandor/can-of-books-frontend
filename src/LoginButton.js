import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { IoLogInSharp } from 'react-icons/io5';

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  console.log('login', isAuthenticated);

  return (
    !isAuthenticated && (
      <div>
        <h6 onClick={() => loginWithRedirect()}>
          <IoLogInSharp />
          &nbsp;&nbsp; Login
        </h6>
      </div>
    )
  );
};

export default LoginButton;
