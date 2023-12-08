"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react';

export default function ContactPage(props) {




  return (
    <main  >
      <div style={{display:'flex'}}>
        <p>{props.contact.name}</p><span></span><p>{props.contact.phoneNo}</p><p>{ (Date(props.contact.createdAt))}</p>
      </div>
    </main>
  )
}
