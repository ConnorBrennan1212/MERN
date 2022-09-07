import React from 'react';
import {useState} from 'react';


const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm,] = useState("");

    return (
    <>
    <div>
        <form>
            <div>
                <label>First Name:</label>
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } value ={firstName} />
                {firstName.length < 2 && firstName.length>0 ? <p>name must be 2 or more characters</p>:null}
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" onChange={ (e) => setLastName(e.target.value) } value ={lastName}/>
                {lastName.length < 2 && lastName.length>0 ? <p>name must be 2 or more characters</p>:null}
            </div>
            <div>
                <label htmlFor="">Email:</label>
                <input type="email" onChange={ (e) => setEmail(e.target.value) } value ={email}/>
                {email.length < 2 && email.length>0 ? <p>name must be 2 or more characters</p>:null}
            </div>
            <div>
                <label htmlFor="">Password:</label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } value ={password}/>
                {password.length < 8 && password.length>0 ? <p>name must be 8 or more characters</p>:null}
            </div>
            <div>
                <label htmlFor="">Confirm Password:</label>
                <input type="password" onChange={ (e) => setConfirm(e.target.value) } value ={confirm}/>
                {confirm !== password && confirm.length > 0 ? <p>passwords must match</p>:null}
            </div>
        </form>
    </div>
    <div>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirm}</p>
    </div>
    </>
    )
}

export default Form