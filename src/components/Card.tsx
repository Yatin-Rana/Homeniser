// components/Card.tsx
'use client'
import React from 'react';
import { IconType } from 'react-icons';
import { MdOutlinePlumbing, MdBathroom } from "react-icons/md";
import { GiAutoRepair, GiMoldova, GiDoorHandle } from "react-icons/gi";
import { FaTree } from "react-icons/fa";

interface CardProps {
    Icon: IconType;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ Icon, title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-3 sm:p-4 flex justify-start bg-[#142257] w-fit rounded-lg m-4">
                <Icon size={24} className="text-white sm:text-3xl md:text-4xl lg:text-5xl" />
            </div>
            <div className="p-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{title}</h2>
                <p className="text-sm sm:text-base text-gray-600">{description}</p>
            </div>
        </div>
    );
};

const CardContainer: React.FC = () => {
    const cards: CardProps[] = [
        {
            Icon: MdOutlinePlumbing,
            title: 'Plumbing Services',
            description: 'Expert plumbing solutions for your home.'
        },
        {
            Icon: MdBathroom,
            title: 'Bathroom Remodeling',
            description: 'Transform your bathroom with our remodeling services.'
        },
        {
            Icon: GiAutoRepair,
            title: 'General Repairs',
            description: 'Quick and reliable repairs for various home issues.'
        },
        {
            Icon: FaTree,
            title: 'Landscaping',
            description: 'Beautify your outdoor space with our landscaping services.'
        },
        {
            Icon: GiMoldova,
            title: 'Mold Remodeling',
            description: 'Professional mold removal and prevention.'
        },
        {
            Icon: GiDoorHandle,
            title: 'Door Installation',
            description: 'Professional door installation and repair services.'
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8">
            {cards.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    );
};

export default CardContainer;
