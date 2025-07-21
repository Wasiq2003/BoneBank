'use client';

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { UserSchema } from '@/schemas/userSchema';

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { DatePicker } from '@/components/ui/datePicker';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import CNICInput from '@/components/ui/cnicInput';

const UserForm = () => {
    const form = useForm<z.infer<typeof UserSchema>>({
        resolver: zodResolver(UserSchema),
        defaultValues: {
            id: "",
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
    })

    function onSubmit(values: z.infer<typeof UserSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center justify-center min-h-screen px-4">
                <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md space-y-6">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-5">
                        Add Bone Graft
                    </h2>

                    <FormField
                        control={form.control}
                        name="pName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Patient Name:</FormLabel>
                                <FormControl>
                                    <Input className='w-full' placeholder="Enter your name..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="cnicNo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>CNIC No:</FormLabel>
                                <FormControl>
                                    {/* <Input className='w-full' placeholder="42101-1234567-1" {...field} /> */}
                                    <CNICInput type='tel' placeholder="42101-1234567-1" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="medicalRecordNo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Medical Record Number:</FormLabel>
                                <FormControl>
                                    <Input className='w-full' placeholder="Enter MRN..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="dateOfBirth"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Date of Birth:</FormLabel>
                                <FormControl>
                                    <DatePicker />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Age:</FormLabel>
                                <FormControl>
                                    <Input className='w-full' type='tel' placeholder="Enter your age..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Gender:</FormLabel>
                                <FormControl>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Gender" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Man">Man</SelectItem>
                                            <SelectItem value="Woman">Woman</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="guardianName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Guardian Name:</FormLabel>
                                <FormControl>
                                    <Input className='w-full' placeholder="Enter guardian name..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="contact"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contact:</FormLabel>
                                <FormControl>
                                    <Input className='w-full' type='tel' placeholder="03XX-XXXXXXX" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="admissionDate"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Admission Date:</FormLabel>
                                <FormControl>
                                    <DatePicker />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="surgeryDate"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Surgeon Date:</FormLabel>
                                <FormControl>
                                    <DatePicker />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="procedureUnderTaken"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Procedure UnderTaken:</FormLabel>
                                <FormControl>
                                    <Input className='w-full' placeholder="Enter procedure..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="femoralHead"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Procedure UnderTaken:</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-2 mt-2"
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
                    <FormField
                        control={form.control}
                        name="kneeReplacementCuts"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Knee Replacement Cuts:</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-2 mt-2"
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
                    <FormField
                        control={form.control}
                        name="otherBone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Procedure UnderTaken:</FormLabel>
                                <FormControl>
                                    <Input className='w-full' placeholder="Enter bone..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="tissue"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Procedure UnderTaken:</FormLabel>
                                <FormControl>
                                    <Input className='w-full' placeholder="Enter tissue..." {...field} />
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
    )
}

export default UserForm;
