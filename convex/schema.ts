// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import {v} from 'convex/values'

export default defineSchema({
  patients: defineTable({
    pName: v.string(),
    cnicNo: v.string(),
    medicalRecordNo: v.string(),
    dateOfBirth: v.string(), // Use ISO date strings
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
  }),
});
