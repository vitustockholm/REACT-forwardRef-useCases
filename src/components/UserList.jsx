import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';
import User from './User';
import UserDetails from './UserDetails';
//Styles
import { ListWrapper, List, Loading } from './UserList.style';

const UserList = () => {
  // Hooks
  // --state
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  // -- side Effects
  useEffect(() => {
    const getUsers = async () => {
      const data = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      setUsers(data.data);
      setIsLoading(false);
    };
    getUsers();
  }, []);
  //Custom functions
  const openModal = (e) => {
    const id = e.target.dataset.id;
    console.log(e.target.dataset.id);

    setUser(users.filter((user) => user.id === +id)[0]);
    createUser(user); //one user
    console.log(user);
  };
  //
  const closeModal = () => setIsOpen(false);
  //
  const createUser = () => {
    <ul>
      <li>{user.name}</li>
      <li>{user.email}</li>
      <li>{user.phone}</li>
    </ul>;
  };
  return (
    <>
      <ListWrapper>
        {isLoading ? (
          <Loading>Loading...</Loading>
        ) : (
          <List>
            {users.map((user) => (
              <User
                name={user.name}
                userID={user.id}
                action={openModal}
                key={user.id}
              />
            ))}
          </List>
        )}
      </ListWrapper>
      {isOpen && (
        <Modal action={closeModal}>
          {createUser(user)}
          <UserDetails
            name={user.name}
            id={user.id}
            email={user.email}
            phone={user.phone}
          />
        </Modal>
      )}
    </>
  );
};

export default UserList;
