'use client';

import Link from 'next/link';
import { FaPlus } from "react-icons/fa";
import { motion } from 'framer-motion';
import { CiViewTimeline } from "react-icons/ci";
import { UserButton, useUser } from '@clerk/nextjs';
import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';

export default function Dashboard() {
    const { user } = useUser();
    const patients = useQuery(api.patients.getAllPatients)

    if (patients === undefined) {
        return (
            <div className="flex items-center justify-center p-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                <span className="ml-2">Loading patients...</span>
            </div>
        );
    }

    // Handle empty state
    if (patients.length === 0) {
        return (
            <div className="flex items-center justify-center p-8 text-gray-500">
                No patient records found
            </div>
        );
    }

    return (
        < motion.div
            initial={{ y: -50, opacity: 0 }
            }
            animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }}
            exit={{ y: 20, opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}
            className="min-h-screen bg-[#f7f0e8] p-6"
        >
            <div className="bg-white rounded-lg shadow-md p-4">
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-4">
                    <h1 className="text-xl font-bold text-red-600">Bone Bank Module</h1>
                    <div className="flex items-center space-x-3">
                        <h1>
                            {user?.username}
                        </h1>
                        <UserButton />
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
                                <th className="p-2 border">Patient Name</th>
                                <th className="p-2 border">CNIC No</th>
                                <th className="p-2 border">Medical Record No</th>
                                <th className="p-2 border">Date Of Birth</th>
                                <th className="p-2 border">Age</th>
                                <th className="p-2 border">Gender</th>
                                <th className="p-2 border">Guardian Name</th>
                                <th className="p-2 border">Ph No</th>
                                <th className="p-2 border">Admission Date</th>
                                <th className="p-2 border">Surgery Date</th>
                                <th className="p-2 border">Procedure Undertaken</th>
                                <th className="p-2 border">Femoral Head</th>
                                <th className="p-2 border">Knee Replacement</th>
                                <th className="p-2 border">Other Bone</th>
                                <th className="p-2 border">Tissue</th>
                            </tr>
                        </thead>
                        {/* <tbody>
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
                        </tbody> */}
                        <tbody>
                            {patients.map((patient, index) => (
                                <tr key={patient._id} className="bg-white hover:bg-gray-50">
                                    <td className="p-2 border">{index + 1}</td>
                                    <td className="p-2 border">
                                        {patient.pName}
                                        <br />
                                        <span className="text-xs text-gray-500">{patient._id}</span>
                                    </td>
                                    <td className="p-2 border">{patient.cnicNo}</td>
                                    <td className="p-2 border">{patient.medicalRecordNo}</td>
                                    <td className="p-2 border">
                                        {new Date(patient.dateOfBirth).toLocaleDateString()}
                                    </td>
                                    <td className="p-2 border">{patient.age}</td>
                                    <td className="p-2 border">{patient.gender}</td>
                                    <td className="p-2 border">{patient.guardianName}</td>
                                    <td className="p-2 border">{patient.contact}</td>
                                    <td className="p-2 border">
                                        {new Date(patient.admissionDate).toLocaleDateString()}
                                    </td>
                                    <td className="p-2 border">
                                        {new Date(patient.surgeryDate).toLocaleDateString()}
                                    </td>
                                    <td className="p-2 border">{patient.procedureUnderTaken}</td>
                                    <td className="p-2 border">{patient.femoralHead}</td>
                                    <td className="p-2 border">{patient.kneeReplacementCuts}</td>
                                    <td className="p-2 border">{patient.otherBone || "-"}</td>
                                    <td className="p-2 border">{patient.tissue || "-"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.div >
    );
}
