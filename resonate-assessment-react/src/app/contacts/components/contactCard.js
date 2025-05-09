import { useState } from "react";
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

export default function ContactCard({ contact }) {
  console.log(contact);
  const [showContact, setShowContact] = useState(false);

  const handleClick = () => {
    setShowContact(true);
  };
  
  return (
    <>
      <button className="flex w-screen sm:w-112 h-48 bg-white shadow-md rounded-md sm:rounded-lg p-4 border-b-purple-800 border-b-4 items-center" onClick={handleClick}>
        <div className="flex items-center justify-center">
          <img
            src="https://www.svgrepo.com/show/335455/profile-default.svg"
            alt="Contact Avatar"
            className="w-20 sm:w-32 h-20 sm:h-32 rounded-full"
          />
        </div>
        <div className="flex flex-col grow items-center justify-center">
          <h2 className="text-xl font-bold text-center max-w-2/3">{contact.name}</h2>
          <p className="text-gray-600 text-center max-w-2/3 wrap-anywhere">{contact.email}</p>
          <p className="text-gray-600 text-center max-w-2/3 wrap-anywhere">{contact.phone}</p>
        </div>
      </button>
      <Dialog open={showContact} onClose={() => setShowContact(false)} className="relative z-10">
        <div className="fixed inset-0 flex items-center justify-center w-screen h-screen backdrop-blur-xs backdrop-brightness-75 gap-4">
          <DialogPanel className="max-w-256 h-3/4 grow bg-white rounded-3xl p-8 m-4 mb-24 shadow-2xl overflow-scroll inset-shadow-[0_-12px_8px_-8px_rgba(0,0,0,0.25)]">
            <DialogTitle className="text-2xl font-bold text-center mb-4">{contact.name}</DialogTitle>
            <div className="flex flex-wrap gap-8 mb-4">
              <img
                src="https://www.svgrepo.com/show/335455/profile-default.svg"
                alt="Contact Avatar"
                className="w-32 h-32 rounded-full"
              />
              <div className="flex flex-wrap basis-0 grow justify-center items-center">
                <span className="text-gray-600 text-lg grow min-w-48"><p className="text-black font-bold">Username: </p>{contact.username}</span>
                <span className="text-gray-600 text-lg grow min-w-48">
                  <p className="text-black font-bold">Email: </p>
                  <a className="underline" href={`mailto:${contact.email}`}>{contact.email}</a>
                </span>
                <span className="text-gray-600 text-lg grow min-w-48"><p className="text-black font-bold">Phone: </p>{contact.phone}</span>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <span className="text-gray-600 text-lg grow min-w-48">
                <p className="text-black font-bold text-wrap">Address: </p>
                {contact.address.street}, {contact.address.suite}, {contact.address.city}, {contact.address.zipcode}
              </span>
            </div>
            <div className="flex flex-col gap-8">
              <span className="text-gray-600 text-lg grow min-w-48">
                <p className="text-black font-bold text-wrap">Company: </p>
                <p className="text-gray-600 text-lg grow min-w-48">{contact.company.name}</p>
                <p className="text-gray-600 text-lg grow min-w-48">{contact.company.catchPhrase}</p>
                <p className="text-gray-600 text-lg grow min-w-48">{contact.company.bs}</p>
              </span>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}