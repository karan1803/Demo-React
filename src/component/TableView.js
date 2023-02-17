import React, {useEffect} from "react";
import Table from 'react-bootstrap/Table';

function TableView() {

  const userList = [
    { id: 1, name: "Senthil R", mobile: "793744", email: "senthil@email.com"},
    { id: 2, name: "Abinaya L", mobile: "895874", email: "abi@email.com" },
    { id: 3, name: "Rahul", mobile: "569329", email: "dristi@email.com" },
    { id: 4, name: "amit", mobile: "798857", email: "amit@email.com" },
    { id: 5, name: "Dheeraj", mobile: "974384", email: "dheeraj@email.com" },
   ];

   useEffect(()=>{

   },[])
  return (
    <div className="col-12">
      <h5>User List</h5>
      <Table responsive striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {

        userList.map((list) =>
          <tr key={list.id}>
            <td>{list.id}</td>
            <td>{list.name}</td>
            <td>{list.mobile}</td>
            <td>{list.email}</td>
          </tr>
          )
        }

        </tbody>
      </Table>
    </div>
  );
}

export default TableView;