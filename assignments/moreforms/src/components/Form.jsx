import React from 'react'
import Display from './Display'

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm,] = useState("");

  return (
    <div>
        <form>
            <div>
                <label>First Name:</label>
                <input type="text" />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Email:</label>
                <input type="email" name="" id="" />
            </div>
            <div>
                <label htmlFor="">Password:</label>
                <input type="password" name="" id="" />
            </div>
            <div>
                <label htmlFor="">Confirm Password:</label>
            </div>
        </form>
    </div>
  )
}

export default Form