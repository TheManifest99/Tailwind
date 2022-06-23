import React from 'react';
import emailLogo from '../images/email-icon.png';

export default function Card() {
    return (
        <div className="flex px-3 m-5 first:pt-0 last:pb-0 w-full bg-indigo-500 rounded">
            <img className="h-5 w-15 my-auto " src={emailLogo}/>
            <div className="flex ml-5 my-3 flex-col divide-y divide-solid w-full text-white">
                <p className="flex py-1 w-full justify-items-start">Sent Email</p>
                <div className="flex py-1 w-full justify-items-start">0</div>
            </div>
        </div>
    );
}