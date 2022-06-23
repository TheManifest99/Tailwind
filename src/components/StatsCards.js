import React from 'react';
import Card from "./Card";

export default function StatsCards() {
    return (
        <div className="flex justify-between bg-white rounded">
            <Card/>
            <Card/>
        </div>
    );
}