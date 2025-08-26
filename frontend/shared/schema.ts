import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const consultationRequests = pgTable("consultation_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  phone: text("phone"),
  industry: text("industry").notNull(),
  services: json("services").$type<string[]>().notNull(),
  projectDetails: text("project_details").notNull(),
  budget: text("budget"),
  timeline: text("timeline"),
  privacy: text("privacy").notNull().default("true"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const brochureRequests = pgTable("brochure_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  industry: text("industry").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertConsultationRequestSchema = createInsertSchema(consultationRequests).pick({
  name: true,
  email: true,
  company: true,
  phone: true,
  industry: true,
  services: true,
  projectDetails: true,
  budget: true,
  timeline: true,
  privacy: true,
});

export const insertBrochureRequestSchema = createInsertSchema(brochureRequests).pick({
  name: true,
  email: true,
  company: true,
  industry: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertConsultationRequest = z.infer<typeof insertConsultationRequestSchema>;
export type ConsultationRequest = typeof consultationRequests.$inferSelect;
export type InsertBrochureRequest = z.infer<typeof insertBrochureRequestSchema>;
export type BrochureRequest = typeof brochureRequests.$inferSelect;
