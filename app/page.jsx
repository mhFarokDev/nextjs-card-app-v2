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
  

  const users = useSelector(userSelector)
  console.log(users);

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
        <div className="user-list">
          <div className="user-body">
            <div className="image">
              {/* <Image/> */}
            </div>
            <div className="contain">
               <p>Name : </p>
               <p>E-mail : </p>
               <p>Phone : </p>
               <p>Call : </p>
               <p>Gender : </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
