'use client';

import { useEffect, useState } from "react";
import ContactCard from "./components/contactCard";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const innerAsync = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const resJson = await res.json();
      console.log(resJson);
      setContacts(resJson);
    }
    innerAsync();
  }, []);

  return (
    <>
      <div className="flex justify-center bg-white fixed m-0 w-screen top-0 shadow-lg">
        <h1 className="text-2xl font-bold text-center py-4">Contacts</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 mx-4 my-24 sm:gap-8 sm:mx-8">
        {contacts.map((contact) => {
          return (
            <ContactCard key={contact.id} contact={contact}/>
          )
        })}
      </div>
    </>
  );
}
