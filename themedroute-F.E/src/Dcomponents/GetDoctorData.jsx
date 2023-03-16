import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Home from "../components/Home";




const GetDoctorData = () => {


    let [users, setUser] = useState(null);
    let [deleted, setDelete] = useState(0);

    useEffect(() => {

        fetch("http://localhost:7071/getDcData")
            .then((result) => {
                result.json().then((resp) => {
                    setUser(resp)
                    console.log(resp);
                })
            })

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
            <h1>  Doctor Details</h1>


            <table border="3px" className="display-users1">
                <thead>
                    <tr>
                        <th>Sl no</th>
                        <th>Doctor Name</th>
                        <th>EmailId</th>
                        <th>Phone</th>
                        <th>PassWord</th>
                        
                        <th> Doctor Address</th>
                            




                        <th>Doctor Specialist </th>

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
                                    <td>{user.doctorname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phno}</td>
                                    <td>{user.password}</td>
                                   
                                    <td>{user.doctorAddress.district}</td>
                                    <td>{user.doctorSpecialist.specialist}</td>
                                   

                                    <td >

                                        < Link to={`/edit/${user.userId}`}><button> EDIT</button> </Link>

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

export default GetDoctorData;