import React, { useState } from "react";
import { useAuth } from "../context/authContext";

export const Signup = () => {
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    
    if(password.length < 6) {
      alert("Password is too short");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await signUp(email, password);
    } catch (error) {
      alert("Failed to sign")
    }
  }

  return(
    <div className="container">
      <h2>Cadastro de Usuarios</h2>
      
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />   

        <label>Password</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />

        <label>Password Confirmation</label>
        <input 
          type="password"
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)}  
        />

        <button  
          className="button-block" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};