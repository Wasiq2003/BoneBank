'use client';
import { z } from "zod";

export const UserSchema = z.object({

  //id: z.string().min(1, { message: "ID is required" }),
  pName: z.string().min(3, { message: "Name should be at least 3 characters" }),
  cnicNo: z.string().regex(/^\d{5}-\d{7}-\d{1}$/, { message: "Enter a valid CNIC format" }),
  medicalRecordNo: z.string().min(1, { message: "Medical Record Number is required" }),
  dateOfBirth: z.date({ required_error: "Date of Birth is required" }),
  age: z.string().min(1, { message: "Age is required" }),
  gender: z.enum(["Male", "Female"], { errorMap: () => ({ message: "Gender is required" }), }),
  guardianName: z.string().min(3, { message: "Guardian name must be at least 3 characters" }),
  contact: z.string().min(11, { message: "Contact must be at least 11 digits" }),
  admissionDate: z.date({ message: "Date is required" }),
  surgeryDate: z.date({ message: "Expiration Date is required" }),
  procedureUnderTaken: z.string().min(1, { message: "Procedure is required" }),
  femoralHead: z.enum(["Yes", "No"], { required_error: "Please select an option", }),
  kneeReplacementCuts: z.enum(["Yes", "No"], {required_error: "Please select an option",}),
  otherBone: z.string().optional(),
  tissue: z.string().optional(),
})

