import {useState} from 'react'
import { deleteUser } from '../../api/users.api'

function DeleteUser(){
const [id, setId]=useState()

const handledelation= async(e)=>{
    e.preventDefault()
    await deleteUser(id)
}


    return(
<div className="main containe">
    <div className="signup">
        <form>
            <label>
              Delete User  
            </label>
            <input
           onChange= {(e)=>setId(e.target.value)}
            type='text'
            className="input1"
            placeholder="user id"
            
            />
            <button className="button1" onClick={handledelation}>Delete</button>
        </form>

    </div>
    
</div>
    )
}
export default DeleteUser