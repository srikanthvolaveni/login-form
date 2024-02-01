import {useState} from 'react';
import './App.css';

function App() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [errors,setErrors] = useState({
    email:'',
    password:''
  })
  const emailpattern= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const onClickButton = () =>{
    if(email.trim() === ""){
      setErrors((errors)=>({...errors,email:"Enter emailId"}))
    }
    else if(!emailpattern.test(email)){
      setErrors((errors)=>({...errors,email:'Enter valid emailId'}))
    }
    else{
      setErrors((errors)=>({...errors,email:''}))
    }
    if(password.trim() === ""){
      setErrors((errors)=>({...errors,password:'Enter Password'}))
    }
    else if(password.trim().length < 8){
      setErrors((errors)=>({...errors,password:"password must be 8 charecters"}))
    }
    else{
      setErrors((errors)=>({...errors,password:""}))
    }
    
  }
  return (
    <>
    <div className=" border w-25 mt-3 p-2">
      <h1 className='text-primary'>Login Form</h1>
      <div>
        <label>Email</label>
        <input type="email" className="form-control" value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
        {errors.email&&<span className='text-danger'>{errors.email}</span>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" className="form-control" value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
        {errors.password&&<span className='text-danger'>{errors.password}</span>}
      </div>
      <div>
        <button className='btn btn-primary w-50 mt-3' onClick={onClickButton}>Save</button>
      </div>
    </div>
    </>
  );
}

export default App;
