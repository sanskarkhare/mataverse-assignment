"use client"
import Image from 'next/image'
import styles from './page.module.css'
import axios from 'axios';
import { useState } from 'react';
import ContactPage from './contactpage';

export default function Home() {

  const [contacts, setContacts] = useState([])

async function getContacts (){
  console.log('dd')
  const res = await axios.get('http://localhost:3001/contact');
  console.log(res.data[0])
  setContacts(res.data)
  
}

  return (
    <main className={styles.main} >
      <div className={styles.description} style={{margin:'auto', }}>
        <button style={{ width: "200px", height: "50px",fontSize:'20px',float:'left'}} onClick={getContacts}>
          Get all contacts&nbsp;
          
        </button>
       <div>
        {
          contacts.map(contact => (
            <ContactPage key={contact.name} contact={contact}/>
        ))
        }
       </div>
      </div>
    </main>
  )
}
