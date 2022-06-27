import React from "react";

export default function Tab(props){
  
    const {name,username,email,address,phone,website,company} = props;

    return(
        <tr>
        <td>{name}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{address}</td>
        <td>{phone}</td>
        <td>{website}</td>
        <td>{company}</td>
      </tr>
    )
}