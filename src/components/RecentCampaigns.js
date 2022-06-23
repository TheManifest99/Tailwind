import React from 'react';
import MyCombobox from "./MyCombobox";

export default function RecentCampaigns() {
    return (
        <div className="flex flex-col justify-between bg-white rounded p-5 mt-10">
            <div className="flex py-5">
                <p className="flex items-center pr-10">Recently sent campaigns:</p>
                <MyCombobox/>
            </div>
            <div className="flex py ">
                <p>Send to 0 recipient(s)</p>
            </div>
            <div className="grid grid-rows-1 py-2 ">
                <p className="flex row-start-1 ">From:</p>
                <p className="flex text-slate-400 row-start-1 col-span-1 ">Delivery at:</p>
            </div>
            <div className="grid grid-rows-1 py-3">
                <p className="flex row-start-1">Subject:</p>
                <p className="flex text-slate-400 row-start-1 col-span-1 ">Run at:</p>
            </div>
        </div>
    );
}