
import { useState } from "react";
import "./index.css";

export default function MyForm() {
  const [name, setName] = useState("");
  const [namep, setNamep] = useState("");

  const [password, setPassword] = useState("");
  const [passwordp, setPasswordp] = useState("");

  const [Email, setEmail] = useState("");
  const [Emailp, setEmailp] = useState("");


  
  const handleSubmit = (event) => {
    event.preventDefault();

    validateName(name)
    validatePassword(password)
    validateEmail(Email)

    if( validateName(name) && validatePassword(password) && validateEmail(Email)){
    alert(`welcome ${name}`)
    }
    
    
    
  }

  function validateName(name){
    if(name=== ""){
      setNamep("please enter your name");
      return false;
    }else{
      setNamep("");
      return true;
    }
  }

	function validateEmail(userEmail){
		if (!/\S+@\S+\.\S+/.test(userEmail)){
	setEmailp("E-mail must be in a valid format such as example@gmail.com");
  return false;
   }else{
  setEmailp("");
  return true;
   }

	}


  function validatePassword(userPassword){
    let password = userPassword;
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordp("Password must contain at least 8 characters, 1 number, 1 uppercase letter, and 1 special character")
            return false;
          }else{
            setPasswordp("")
            return true;
           }
    }

  return (
    <form onSubmit={handleSubmit}>
<fieldset>
<legend>SignUP</legend>

<div className="divP">
<div className="LabelInput">
       <label>name: </label>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <p > {namep} </p>
</div>


<div className="divP">

<div className="LabelInput">
       <label>password:</label>
        <input 
          type="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <p > {passwordp} </p>
</div>


<div className="divP">

<div className="LabelInput">
     <label>Email:</label>
 <input 
   type="Email" 
   value={Email}
   onChange={(e) => setEmail(e.target.value)}
 />
</div>
<p > {Emailp} </p>

</div>






   
      <input type="submit" />


</fieldset>
     



    </form>
  )



}

