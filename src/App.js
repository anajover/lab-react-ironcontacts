import './App.css';
import allContacts from "./contacts.json"
import {useState} from "react"
import React from "react"

function App() {

  const [contacts, setContactsList ] = useState(allContacts.slice(0, 5))

  const handleRandom = () => {

    if (contacts.length === allContacts.length) {
      return;
    } 

    const randomNumber = Math.floor(Math.random() * allContacts.length)
    const randomContact = allContacts[randomNumber]

    const contactsId = contacts.map((eachContact) => eachContact.id)
    if (contactsId.includes(randomContact.id)){
      handleRandom()
    } else {
      setContactsList([...contacts, randomContact])  
    }

    
  }

  const handleOrderName = () => {
    const contactsCopy = [...contacts]

    contactsCopy.sort((a, b) => a.name > b.name ? 1 : -1)

    setContactsList(contactsCopy)
  }

  const handleOrderPop = () => {
    const contactsCopy = [...contacts]

    contactsCopy.sort((a, b) => a.popularity > b.popularity ? -1 : 1)
    setContactsList(contactsCopy)
  }

  const handleDelete = (idToDelete) => {
    
    const filterArr = contacts.filter((eachContact) => eachContact.id !== idToDelete)
    setContactsList(filterArr)
  }

  
 

  return (

      
      <div id="container" className="App">

    
            <div>

            <h1>IronContacts</h1>

            <div id="buttons">
            <button class="each-button" onClick={handleRandom}>Agregar Actor random</button>
            <button class="each-button" onClick={handleOrderName}>Ordenar por Nombre</button>
            <button class="each-button" onClick={handleOrderPop}>Ordenar por Popularidad</button>
            </div>


            <table>
            <thead>
            <tr class="head-table">
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
              </tr>
            </thead>
            <tbody>
            {
        contacts.map((eachContact) => {
          return(
            <tr key={eachContact.id}>
              <td><img src={eachContact.pictureUrl} alt="{eachContact.name}"  width="100px"/></td>
              <td>{eachContact.name}</td>
              <td>{eachContact.popularity.toFixed(2)}</td>
              <td>{eachContact.wonOscar === true ? "🎬" : "💀"}</td>
              <td>{eachContact.wonEmmy === true ? "🎶" : "💀"}</td>
              <td><button class="delete-btn" onClick ={()=> handleDelete(eachContact.id)}>Borrar</button></td>
            </tr>
            
          )
        })
      }
      </tbody>
            </table>
            </div>
           


    </div>
  );
  
}


export default App;
