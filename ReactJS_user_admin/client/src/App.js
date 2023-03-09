//import {Fragment} from 'react';
import {useEffect, useState} from 'react'
import * as userService from './Services/userService';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import UserList from './components/UserList';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getAll()
    .then(users =>{
      setUsers(users);
    })
    .catch(err => {
      console.log('Error' + err)
    })
  }, []);

  const onUserCreateSubmit = async (e) =>{
    //stop refresh beahavior
    e.preventDefault();
    //Take the data from the form
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    //Add the new user
    const createdUser = await userService.create(data);
    setUsers(users => [...users, createdUser]);
    //Close dialog
  };

  const onUserDelete = async (userId) =>{
    //Delete from server
    await userService.remove(userId);
    //Delete from state
    setUsers(state => state.filter(x => x._id !== userId));
  };

  const onUserUpdateSubmit = async (e, userId) =>{
    //stop refresh beahavior
    e.preventDefault();
    //Take the data from the form
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    //Add the new user
    const updatedUser = await userService.update(userId, data);

    setUsers(state => state.map(u => u._id === userId? updatedUser: u));
  };

  return (
    <>
        <Header/>
        <main className="main">
          <section className="card users-container">
          <Search/>
          <UserList users={users} onUserCreateSubmit={onUserCreateSubmit} onUserDelete={onUserDelete} onUserUpdateSubmit={onUserUpdateSubmit}/>
          </section>
        </main>
        <Footer/>
    </>
  );
}

export default App;
