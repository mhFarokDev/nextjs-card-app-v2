"use client"
import faruk from "@/public/images/faruk.jpg"
import Image from "next/image"
import { Suspense, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchAllUsers} from "./users/userAPI"
import { userSelector } from "./users/userSlice"



export default function Home() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchAllUsers())
  }, [dispatch])
  

  const {users} = useSelector(userSelector)

  return (
    <main>
      <section>
        <div className="container">
          <div className="hero-section">
              <Image src={faruk}/>
          </div>
        </div>
      </section>
      <div className="all-users container">
        <h2>Users List</h2>
        <div className="user-list">

        {
          users.map(data => 
            <div className="user-body">
              <div className="image">
                <Image src={data.photo} width="100" height="100"/>
              </div>
              <div className="contain">
                <p>Name : {data.name}</p>
                <p>E-mail : {data.email}</p>
                <p>Phone : {data.call}</p>
                <p>Gender : {data.gender}</p>
              </div>
            </div>
          
          )
        }

          


        </div>
      </div>
    </main>
  )
}
