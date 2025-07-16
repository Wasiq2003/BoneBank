'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { CiViewTimeline } from "react-icons/ci";

export default function HomePage() {
    const [user] = useState('nateshkumar485');

    const data = [
        { name: 'kundan', id: '66687ba749e0dcth0abr73b1', date: '6/2/2024', surgeon: '665adad29fa97a9615864b528', boneId: 13 },
        { name: 'malik', id: '66687ae749e0dcth0abr73c1', date: '6/4/2024', surgeon: '665adad29fa97a9615864b528', boneId: 15 },
        { name: 'umer', id: '66687ad749e0dcth0abr73c3', date: '6/5/2024', surgeon: '665adad29fa97a9615864b528', boneId: 16 },
        { name: 'haseeb', id: '66687a2e749e0dcth0abr73c7', date: '6/6/2024', surgeon: '665adad29fa97a9615864b528', boneId: 17 },
        { name: 'ahmed', id: '66687e67e9dcth0abr73c9', date: '6/8/2024', surgeon: '665adad29fa97a9615864b528', boneId: 18 },
    ];

    return (
        <div className="min-h-screen bg-[#f7f0e8] p-6">
            <div className="bg-white rounded-lg shadow-md p-4">
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-4">
                    <h1 className="text-xl font-bold text-red-600">Bone Bank</h1>
                    <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-700">{user}</span>
                        <button className="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600">Logout</button>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-24 mt-6">
                    <button className=" bg-red-500 text-white px-4 py-2 rounded  hover:bg-red-800">
                        <Link href={'/userform'} className=' flex gap-x-2 items-center'>
                            <span><FaPlus size={15} /></span>
                            Add Graft
                        </Link>
                    </button>
                    <button className=" bg-red-500 text-white px-4 py-2 rounded hover:bg-red-800">
                        <Link href={''} className=' flex gap-x-2 items-center'>
                            <span><FaPlus /></span>
                            Add Recipient
                        </Link>
                    </button>
                    <button className=" bg-red-500 text-white px-4 py-2 rounded hover:bg-red-800">
                        <Link href={''} className=' flex gap-x-2 items-center'>
                            <span><CiViewTimeline /></span>
                            Show Grafts
                        </Link>
                    </button>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-white font-semibold text-center">
                    <div className="bg-red-500 rounded py-4">
                        <p>Total Bones</p>
                        <p className="text-2xl">7</p>
                    </div>
                    <div className="bg-red-500 rounded py-4">
                        <p>Usable Bones</p>
                        <p className="text-2xl">6</p>
                    </div>
                    <div className="bg-red-500 rounded py-4">
                        <p>Expire Bones</p>
                        <p className="text-2xl">1</p>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto mt-6">
                    <table className="w-full text-sm border">
                        <thead className="bg-gray-100 text-left">
                            <tr>
                                <th className="p-2 border">ID</th>
                                <th className="p-2 border">Recipient Name</th>
                                <th className="p-2 border">Options</th>
                                <th className="p-2 border">Date Of Surgery</th>
                                <th className="p-2 border">Consultant Surgeon</th>
                                <th className="p-2 border">Bone ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((entry, index) => (
                                <tr key={index} className="bg-white hover:bg-gray-50">
                                    <td className="p-2 border">{index + 1}</td>
                                    <td className="p-2 border">
                                        {entry.name}
                                        <br />
                                        <span className="text-xs text-gray-500">{entry.id}</span>
                                    </td>
                                    <td className="p-2 border">
                                        <button className="border px-3 py-1 rounded">Options ▾</button>
                                    </td>
                                    <td className="p-2 border">{entry.date}</td>
                                    <td className="p-2 border">{entry.surgeon}</td>
                                    <td className="p-2 border">{entry.boneId}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
