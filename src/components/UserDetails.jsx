import React from 'react';

const UserDetails = ({ name, id, email, phone }) => {
  return (
    <>
      {' '}
      <ul>
        <li>{name}</li>
        <li>{email}</li>
        <li>{phone}</li>
        <li>{id}</li>
      </ul>
    </>
  );
};

export default UserDetails;
