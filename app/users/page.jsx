"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userSelector } from './userSlice'
import { fetchAllUsers } from './userAPI'
import Modal from "react-modal"
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'




export default function page() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchAllUsers())
  },[dispatch])
  const {users} = useSelector(userSelector)
  console.log(users);

  // model
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modelComponents, setModalComponent] = useState('')




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

  // handle submit function
  const handleForm = (e) =>{
    e.preventDefault()
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
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    })
    
  }
  return (
    <div className='container'>
      <div className="contact-form">
        <form action="" onSubmit={handleForm}>
          <input type="text" name="name" placeholder='Name' value={input.name} onChange={handleInputs}/>
          <input type="text" name="email" placeholder='Email' value={input.email} onChange={handleInputs}/>
          <input type="text" name="call" placeholder='Call' value={input.call} onChange={handleInputs}/>
          <input type="text" name="photo" placeholder='Use photo url*' value={input.photo} onChange={handleInputs}/>
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
                  <td>{index}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.call}</td>
                  <td>{data.gender}</td>
                  <td><Image src={data.photo} width={40} height={40}/></td>
                  <td>
                    <button>✎</button>
                    <button className='trash' onClick={handleDelete}>🗑</button>
                  </td>
                </tr>
              
              )
            }
            
          </tbody>
        </table>
      </div>


      <Modal isOpen={modalIsOpen} >
            .delete-alert
      </Modal>
      
    </div>

    
  )
}
