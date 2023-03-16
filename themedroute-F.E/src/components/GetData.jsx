import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";




const GetData = () => {


    let [users, setUser] = useState(null);
    let [deleted, setDelete] = useState(0);

    useEffect(() => {

        fetch("http://localhost:7071/get")
            .then((result) => {
                result.json().then((resp) => {
                    setUser(resp)
                    console.log(resp);
                })
            })


        // fetch("http://localhost:7071/getAddress")
        // .then((result)=>{
        //     result.json().then((resp)=>{
        //         setUser(resp)
        //         console.log(resp);
        //     })
        // })


    }, []
    )

    console.log(users);


    let handleDelete = (id) => {
        fetch("http://localhost:7071/deleteAddress/" + id, { method: "DELETE" });
        setDelete(deleted + 1);

    }
    return (

        <div className="display-users">
            <Home/>
            <h1>  Details</h1>


            <table border="3px" className="display-users1">
                <thead>
                    <tr>
                        <th>Sl no</th>
                        <th>UserName</th>
                        <th>EmailId</th>
                        <th>PassWord</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Interaction Id</th>

                        <th>Edit</th>
                        <th>Delete</th>





                    </tr>
                </thead>
                {users && <tbody>
                    {
                        users.map((user, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>{user.phno}</td>
                                    <td>{user.userAddress.district}</td>
                                    <td>{user.userIssue.id}</td>

                                    <td >

                                        <Link to={`/edit/${user.userId}`}><button> EDIT</button> </Link>

                                    </td>
                                    <td > <button onClick={() => { handleDelete(user.id) }}> DELETE  </button></td>

                                </tr>
                            )
                        })
                    }
                </tbody>}
            </table>
            <br />
            <Link to="/">Go To Home Page</Link>

        </div>

    );
}

export default GetData;