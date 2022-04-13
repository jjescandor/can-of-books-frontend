import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { IoLogOutSharp } from 'react-icons/io5';
const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  //   return (
  //     <button onClick={() => logout({ returnTo: window.location.origin })}>
  //       Log Out
  //     </button>
  //   );
  return (
    isAuthenticated && (
      <div>
        <h6 onClick={() => logout({ returnTo: window.location.origin })}>
          <IoLogOutSharp />
          &nbsp;&nbsp; Log Out
        </h6>
      </div>
    )
  );
};

export default LogoutButton;
