'use client';

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { UserSchema } from "@/schemas/userSchema";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { DatePicker } from "@/components/ui/datePicker";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import CNICInput from "@/components/ui/cnicInput";

const UserForm = () => {
    const router = useRouter();
    const addPatient = useMutation(api.patients.addPatient);

    const form = useForm<z.infer<typeof UserSchema>>({
        resolver: zodResolver(UserSchema),
        defaultValues: {
            pName: "",
            cnicNo: "",
            medicalRecordNo: "",
            dateOfBirth: new Date(),
            age: "",
            gender: undefined,
            guardianName: "",
            contact: "",
            admissionDate: new Date(),
            surgeryDate: new Date(),
            procedureUnderTaken: "",
            femoralHead: undefined,
            kneeReplacementCuts: undefined,
            otherBone: "",
            tissue: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof UserSchema>) => {
        try {
            await addPatient({
                pName: values.pName,
                cnicNo: values.cnicNo,
                medicalRecordNo: values.medicalRecordNo,
                dateOfBirth: values.dateOfBirth.toISOString(),
                age: values.age,
                gender: values.gender,
                guardianName: values.guardianName,
                contact: values.contact,
                admissionDate: values.admissionDate.toISOString(),
                surgeryDate: values.surgeryDate.toISOString(),
                procedureUnderTaken: values.procedureUnderTaken,

                femoralHead: values.femoralHead,
                kneeReplacementCuts: values.kneeReplacementCuts,

                otherBone: values.otherBone || undefined,
                tissue: values.tissue || undefined
            });

            toast.success("Patient record created successfully!");
            router.push("/dashboard");
        } catch (error) {
            toast.error("Failed to create patient record");
            console.error("Error:", error);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" flex p-6 items-center justify-center min-h-screen bg-[#f0f8ff] ">
                <div className="bg-white p-10 rounded-2xl shadow-2xl shadow-amber-950 w-full max-w-md space-y-6" >
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-5">
                        Add Bone Graft
                    </h2>
                    {/* Name Field */}
                    <FormField
                        control={form.control}
                        name="pName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Patient Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter patient name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* CNIC Field */}
                    <FormField
                        control={form.control}
                        name="cnicNo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>CNIC Number</FormLabel>
                                <FormControl>
                                    <CNICInput placeholder="XXXXX-XXXXXXX-X" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Medical Record Number */}
                    <FormField
                        control={form.control}
                        name="medicalRecordNo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Medical Record Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter medical record number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Date of Birth */}
                    <FormField
                        control={form.control}
                        name="dateOfBirth"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Date of Birth</FormLabel>
                                <FormControl>
                                    <DatePicker
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Age */}
                    <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Age</FormLabel>
                                <FormControl>
                                    <Input type="tel" placeholder="Enter age" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Gender */}
                    <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Gender</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select gender" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Male">Male</SelectItem>
                                        <SelectItem value="Female">Female</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Guardian Name */}
                    <FormField
                        control={form.control}
                        name="guardianName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Guardian Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter guardian name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Contact */}
                    <FormField
                        control={form.control}
                        name="contact"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contact Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="03XX-XXXXXXX" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Admission Date */}
                    <FormField
                        control={form.control}
                        name="admissionDate"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Admission Date</FormLabel>
                                <FormControl>
                                    <DatePicker
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Surgery Date */}
                    <FormField
                        control={form.control}
                        name="surgeryDate"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Surgery Date</FormLabel>
                                <FormControl>
                                    <DatePicker
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Procedure Undertaken */}
                    <FormField
                        control={form.control}
                        name="procedureUnderTaken"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Procedure Undertaken</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter procedure" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Femoral Head */}
                    <FormField
                        control={form.control}
                        name="femoralHead"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Femoral Head</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        className="flex space-x-4"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="Yes" id="femoral-yes" />
                                            <Label htmlFor="femoral-yes">Yes</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="No" id="femoral-no" />
                                            <Label htmlFor="femoral-no">No</Label>
                                        </div>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Knee Replacement Cuts */}
                    <FormField
                        control={form.control}
                        name="kneeReplacementCuts"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Knee Replacement Cuts</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        className="flex space-x-4"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="Yes" id="knee-yes" />
                                            <Label htmlFor="knee-yes">Yes</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="No" id="knee-no" />
                                            <Label htmlFor="knee-no">No</Label>
                                        </div>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Other Bone */}
                    <FormField
                        control={form.control}
                        name="otherBone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Other Bone (Optional)</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter other bone details" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Tissue */}
                    <FormField
                        control={form.control}
                        name="tissue"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tissue (Optional)</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter tissue details" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 transition-colors">
                        Add
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default UserForm;