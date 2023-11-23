"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userSelector } from './userSlice'
import { createUserPush, deleteUserFind, fetchAllUsers, updateRealUser } from './userAPI'
import Modal from "react-modal"
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { createUser, deleteUser, findSingleUser, updateUser } from '@/libs/getUserData'




export default function page() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchAllUsers())
  },[dispatch])
  const {users} = useSelector(userSelector)

  
  
  
  
  // input
  const [input, setInput] = useState({
    name : "",
    email : "",
    call : "",
    gender : "",
    photo : ""
  })

  // handle input fields
  const handleInputs = (e) =>{
    setInput((prevState)=>({
      ...prevState,
      [e.target.name] : e.target.value
  }))
  }

  
  
  
  // handle delete
  const handleDelete = (id) =>{
    Swal.fire({
      title : "Are you sure?",
      showConfirmButton : true,
      confirmButtonText : "Delete",
      confirmButtonColor : "red",
      showDenyButton : true,
      denyButtonText : "Cancel",
      denyButtonColor : "#2fe152",
      icon : 'question',
    }).then((result) => {
      if (result.isConfirmed) {
        const res = deleteUser(id)
        res.then(result =>{
          const msg = result.message
          if (msg === "true") {
            dispatch(deleteUserFind(id))
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success"
            });
          }else{
            Swal.fire({
              title: "Not Deleted!",
              text: msg,
              icon: "warning"
            });
          }
        })
          
        
      }
    })
  }

  
  // handle submit function
  const handleForm = (e) =>{
    e.preventDefault()
    const res = createUser(input)
    res.then(result =>{
      const message = result.message
      if (message == "Data added success!") {
        dispatch(createUserPush(input))
        Swal.fire({
          title : "Success",
          text : message,
          icon : "success"
        })
        setInput({
          name : "",
          email : "",
          call : "",
          gender : "",
          photo : ""
        })
        document.querySelectorAll("input[type='radio'").forEach(element => {
          element.checked = false
        })
      }
    })
  }

  // model
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [editInput, seteditInput] = useState({
    name : "",
    email : "",
    call : "",
    gender : "",
    photo : "",
    id : ""
  })

  // handle edit mail update
  const handleEditInpUpdate = (e) =>{
    seteditInput((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  const handleEdit = (id) => {
    setModalIsOpen(true)
    const userDetails = users.find(data => data._id == id)
    seteditInput({
      name : userDetails.name,
      email : userDetails.email,
      call : userDetails.call,
      gender : userDetails.gender,
      photo : userDetails.photo,
      id : userDetails._id
    })
    
    
  }

  const handleUpdateUser = (e) =>{
    e.preventDefault()
    updateUser(editInput)
    dispatch(updateRealUser(editInput))
    
    seteditInput({
      name : "",
      email : "",
      call : "",
      gender : "",
      photo : "",
      id : ""
    })
    document.querySelectorAll("input[type='radio'").forEach(element => {
      element.checked = false
  })
    setModalIsOpen(false)
  }
  return (
    <div className='container'>
      <div className="contact-form">
        <form action="" onSubmit={handleForm}>
          <input type="text" name="name" required placeholder='Name' value={input.name} onChange={handleInputs}/>
          <input type="text" name="email" placeholder='Email' value={input.email} onChange={handleInputs}/>
          <input type="text" name="call" placeholder='Call' value={input.call} onChange={handleInputs}/>
          <input type="text" name="photo" required placeholder='Use photo url*' value={input.photo} onChange={handleInputs}/>
          <input type="radio" name="gender" value="Male" onChange={handleInputs}/>Male
          <input type="radio" name="gender" value="Female" onChange={handleInputs}/>Female
          <button type='submit'>Add user</button>
        </form>
      </div>

      <div className="user-table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Call</th>
              <th>Gender</th>
              <th>Photo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((data, index) =>
                <tr>
                  <td>{index+1}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.call}</td>
                  <td>{data.gender}</td>
                  <td><Image src={data.photo} width={40} height={40}/></td>
                  <td>
                    <button onClick={()=>handleEdit(data._id)}>✎</button>
                    <button className='trash' onClick={()=>handleDelete(data._id)}>🗑</button>
                  </td>
                </tr>
              
              )
            }
            
          </tbody>
        </table>
      </div>


      <Modal isOpen={modalIsOpen} >
            <div className="contact-form">
              <div className="update-alert-header">
                <h1>Edit Here</h1>
                <button className='closebutton' onClick={()=>setModalIsOpen(false)}>✕</button>
              </div>
              <div className="update-alert-body">
              <form action="" onSubmit={handleUpdateUser}>
                <input type="text" name="name" required placeholder='Name' value={editInput.name} onChange={handleEditInpUpdate}/>
                <input type="text" name="email" placeholder='Email' value={editInput.email} onChange={handleEditInpUpdate}/>
                <input type="text" name="call" placeholder='Call' value={editInput.call} onChange={handleEditInpUpdate}/>
                <input type="text" name="photo" required placeholder='Use photo url*' value={editInput.photo} onChange={handleEditInpUpdate}/>
                <input type="radio" name="gender" value="Male" onChange={handleEditInpUpdate}/>Male
                <input type="radio" name="gender" value="Female" onChange={handleEditInpUpdate}/>Female
                <button type='submit'>Update user</button>
              </form>
              </div>
            </div>
      </Modal>
      
    </div>

    
  )
}
