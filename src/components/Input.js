import React from 'react';
import MyModal from "./MyModal";
import { useState} from 'react'


export default function Input() {
    const [openModal, setOpenModal] = useState(false);
    const [signInModal, setSignInModal] = useState(false);
    const [text, setText] = useState("");
    const handleOpenModal = () => {
        setOpenModal(!openModal);
    }

    return (
        <div className="flex flex-col justify-between bg-white rounded p-5 mt-10">
            
            <form className="px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="email" placeholder="email@dom.com"/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" placeholder="*****"/>
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={ () => {
                            setText("Incorect email / password")
                            handleOpenModal();
                            setSignInModal(true);
                        }}>
                        Sign In
                    </button>
                    
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        onClick={ () => {
                            setText("Do you want to recover your password ?")
                            handleOpenModal();
                            setSignInModal(false);
                        }}>
                        Forgot Password?
                    </a>
                    {
                        openModal && <MyModal  toggleModal={handleOpenModal} text={text} />
                    }
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-3 rounded focus:outline-none focus:shadow-outline"
                        type="button">
                        Focus Campaigns
                    </button>
                </div>
            </form>
        </div>
    );
}