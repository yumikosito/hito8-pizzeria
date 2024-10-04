import { createContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext=createContext()

const UserProvider = ({children}) => {
  const [user,setUser]=useState([ {logged: null} ])
  const [userLog,setUserlog]=useState("")

  const loginUser = async (datos)  => {
    console.log(user);
    const response= await axios.post("http://localhost:5000/api/auth/login", {email: datos.email, password: datos.password})
    localStorage.setItem("token", response.data.token)
    if (response.data){
      setUser( {email: datos.email, logged: true, token: response.data.token})
    }
    alert("Autentificacion correcta")

  }

  function profileUserfunc(){
    useEffect(()=>{
      const profileUser = async()=>{
        const token= user.token
        const response= await axios.get('http://localhost:5000/api/auth/me',{
          headers:{
            Authorization:`Bearer ${token}`,
        },
      })
        setUserlog( {email: response.data.email, id:response.data.id, token: response.data.token})
      }
       profileUser() 
    },[])
  }




  const logoutUser = () => {
    localStorage.setItem("")
    setUser( {logged: false})

  }

    return <UserContext.Provider value={{user,setUser,loginUser, logoutUser,profileUserfunc,userLog,setUserlog}}>
      {children}
      </UserContext.Provider>
  
}
export {UserContext, UserProvider}