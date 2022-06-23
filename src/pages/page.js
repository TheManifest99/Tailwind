import React from 'react';
import StatsCards from "../components/StatsCards";
import RecentCampaigns from "../components/RecentCampaigns";
import MyModal from "../components/MyModal";
import Input from "../components/Input";

export default function Page() {
    return (
        <div className="bg-slate-200 px-10 pb-10">
            <div className="flex flex-col py-5">
                <h1 className="flex justify-items-start">Statistics</h1>
                <p className="flex justify-items-start">Check out your email campaigns performance statistics and personalized tips</p>
            </div>
            <StatsCards/>
            <RecentCampaigns/>
            <Input/>
        </div>
    );
}