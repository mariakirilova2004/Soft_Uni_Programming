import User from "./User";
import UserDetails from "./UserDetails";
import UserCreate from "./UserCreate";
import UserDelete from "./UserDelete";
import {useState} from 'react';
import * as userService from '../Services/userService';

export default function UserList({users, onUserCreateSubmit, onUserDelete, onUserUpdateSubmit}){
  const [selectedUser, setSelectedUser] = useState(null); 
  const [showDeleteUser, setShowDeleteUser] = useState(null);
  const [showEditUser, setShowEditUser] = useState(null);
  const [showAddUser, setShowAddUser] = useState(false);

  const onInfoClick = async (userId) =>{
    const selectedUser = await userService.getOne(userId);

    if(selectedUser){
       setSelectedUser(selectedUser);
       console.log(selectedUser)
    }

  };

  const onClose = () =>{
    setSelectedUser(null);
    setShowAddUser(false);
    setShowDeleteUser(null);
    setShowEditUser(null);
  };

  const onUserAddClick = () =>{
    setShowAddUser(true);
  };

  const onUserCreateSubmitHandler = (e) =>{
    onUserCreateSubmit(e);
    setShowAddUser(false);
  };

  const onDeleteClick = (userId) => {
    setShowDeleteUser(userId);
  }

  const onUserDeleteHandler = async () =>{
    await onUserDelete(showDeleteUser);
    onClose();
  };

  const onEditClick = async (userId) =>{
    const user = await userService.getOne(userId);
    setShowEditUser(user);
  };

  const onUserUpdateSubmitHandler = async (e, userId) =>{
    await onUserUpdateSubmit(e, userId);
    setShowEditUser(null);
  };


  return(
    <>
      {selectedUser && <UserDetails {...selectedUser} onClose={onClose}/>}
      {showAddUser && <UserCreate onClose={onClose} onUserCreateSubmit={onUserCreateSubmitHandler}/>}
      {showDeleteUser && <UserDelete onClose={onClose} onDelete={onUserDeleteHandler}/>}
      {showEditUser && <UserCreate user={showEditUser} onClose={onClose} onUserCreateSubmit={onUserUpdateSubmitHandler}/>}
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>
                Image
              </th>
              <th>
                First name<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas"
                  data-icon="arrow-down" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Last name<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Email<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Phone<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Created
                <svg className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas"
                  data-icon="arrow-down" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- Table row component --> */}
            {users.map(user => <User key={user._id} {...user} onInfoClick={onInfoClick} onDeleteClick={onDeleteClick} onEditClick={onEditClick}/>)}
          </tbody>
        </table>
      </div>
      {/* <!-- New user button  --> */}
      <button className="btn-add btn" onClick={onUserAddClick}>Add new user</button> 
    </>
    );
}