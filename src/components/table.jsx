import React from "react";
import { useState , useEffect} from "react";
import users from "./Data";

export default function Tab(props){
    const {name,username,email,address,phone,website,company} = props;
    const [show,setShow] = useState(false);
    const [Name,setName] = useState(name);
    const [Username,setUsername] = useState(username);
    const [Email,setEmail] = useState(email);
    const [Company,setCompany] = useState(company);
    const [Address,setAddress] = useState(address);
    const [Phone,setPhone] = useState(phone);
    const [Website,setWebsite] = useState(website);
    const {updatedAt , setUpdatedAt} = useState(null);
    
    const closeModal =() => setShow(!show);
    const handleSubmit = (e) =>{
      e.preventDefault()
  }
 const ChangeName = (e) =>{
          setName(e.target.value())
 }
 const ChangeUsername = (e) =>{
  setUsername(e.target.value())
}
const ChangeEmail = (e) =>{
  setEmail(e.target.value())
}
const ChangeCompany= (e) =>{
  setCompany(e.target.value())
}
const ChangeAddress = (e) =>{
  setAddress(e.target.value())
}
const ChangePhone = (e) =>{
  setPhone(e.target.value())
}
const ChangeWebsite = (e) =>{
  setWebsite(e.target.value())
}
  /* Methode PUT AXIOS*/
  
  try{
    const{data} = users({
      method : 'put',
      url : 'https://jsonplaceholder.typicode.com/users',
      data:{
        name : Name,
        username : Username,
        email : Email,
        address : {
          street:"",
          suite : "",
          city:Address,
          zipcode : "",
          geo:{
            lat:"",
            lng:""
          }
        },
        phone : Phone,
        website : Website,
        company:{
          name : Company,
          catchPhrase : "",
          bs:""
        }
      }
    });
  console.log("ressources ok");
  }catch(err){
    if(err.response.status === 404){
      console.log("Ressource could not be found !");
    }else{
      console.log(err.message);
    }
  }
    return(
    <>
    {
        show ? <div className="modal-drop" onClick={()=>setShow(!show)}></div> : null
      }
        <tr onClick={()=>setShow(true)}>
        <td>{name}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{address}</td>
        <td>{phone}</td>
        <td>{website}</td>
        <td>{company}</td>
      </tr>
      <div>
      <div className="modal-wrapper"
        style={{
          transform : show ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0'
        }}
        >
          <div className="modal-header" onClick={closeModal}>
              <b className="add" > Change</b>
              <span className="close-modal-btn" onClick={closeModal} >X</span>
          </div> 
          <div className="modal-content">
              <div className="modal-body">
              <form onSubmit={handleSubmit}>
                  
                  <input type="text" placeholder={name} onChange={ChangeName}/>
                  <input type="text" placeholder={username} onChange={ChangeUsername}/>
                  <input type="text" placeholder={email} onChange={ChangeEmail}/>
                  <input type="text"  placeholder={company} onChange={ChangeCompany}/>
                  <input type="text" placeholder={address} onChange={ChangeAddress}/>
                  <input type="text" placeholder={phone} onChange={ChangePhone}/>
                  <input type="text" placeholder={website} onChange={ChangeWebsite}/>
  
                  <button className="btn-cancel">Changer</button>
                  </form>
  
              </div>
              <div className="modal-footer" onClick={closeModal}>
  
              </div>
          </div>
        </div>
    </div>
    </>
    )
}