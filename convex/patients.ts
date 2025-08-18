import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getAllPatients = query({
    handler: async (ctx) => {
        return await ctx.db.query("patients").order("desc").collect();
    },
});

export const addPatient = mutation({
    args: {
        pName: v.string(),
        cnicNo: v.string(),
        medicalRecordNo: v.string(),
        dateOfBirth: v.string(),
        age: v.string(),
        gender: v.union(v.literal("Male"), v.literal("Female")),
        guardianName: v.string(),
        contact: v.string(),
        admissionDate: v.string(),
        surgeryDate: v.string(),
        procedureUnderTaken: v.string(),
        femoralHead: v.union(v.literal("Yes"), v.literal("No")),
        kneeReplacementCuts: v.union(v.literal("Yes"), v.literal("No")),
        otherBone: v.optional(v.string()),
        tissue: v.optional(v.string()),
    },
    handler: async(ctx, args) => {
        const patient = {
            pName: args.pName,
            cnicNo: args.cnicNo,
            medicalRecordNo: args.medicalRecordNo,
            dateOfBirth: args.dateOfBirth,
            age: args.age,
            gender: args.gender,
            guardianName: args.guardianName,
            contact: args.contact,
            admissionDate: args.admissionDate,
            surgeryDate: args.surgeryDate,
            procedureUnderTaken: args.procedureUnderTaken,
            femoralHead: args.femoralHead,
            kneeReplacementCuts: args.kneeReplacementCuts,
            otherBone: args.otherBone,
            tissue: args.tissue,
        };
        const newPatient = await ctx.db.insert("patients", patient);

        return await ctx.db.get(newPatient);
    },
});

export const deletePatient = mutation({
    args: { id: v.id("patients")},
    handler: async(ctx, args) => {
        await ctx.db.delete(args.id); 
    }
})