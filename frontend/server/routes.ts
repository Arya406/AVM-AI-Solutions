import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { storage } from "./storage";
import { 
  insertConsultationRequestSchema, 
  insertBrochureRequestSchema 
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Consultation request endpoint
  app.post("/api/consultation", async (req, res) => {
    try {
      const consultationData = insertConsultationRequestSchema.parse(req.body);
      const consultation = await storage.createConsultationRequest(consultationData);
      res.json({ 
        success: true, 
        message: "Consultation request submitted successfully",
        id: consultation.id 
      });
    } catch (error) {
      console.error("Error creating consultation request:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Brochure request endpoint
  app.post("/api/brochure", async (req, res) => {
    try {
      const brochureData = insertBrochureRequestSchema.parse(req.body);
      const brochure = await storage.createBrochureRequest(brochureData);
      res.json({ 
        success: true, 
        message: "Brochure request submitted successfully",
        id: brochure.id 
      });
    } catch (error) {
      console.error("Error creating brochure request:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get consultation requests (for admin purposes)
  app.get("/api/consultations", async (req, res) => {
    try {
      const consultations = await storage.getAllConsultationRequests();
      res.json({ success: true, data: consultations });
    } catch (error) {
      console.error("Error fetching consultation requests:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  // Get brochure requests (for admin purposes)
  app.get("/api/brochures", async (req, res) => {
    try {
      const brochures = await storage.getAllBrochureRequests();
      res.json({ success: true, data: brochures });
    } catch (error) {
      console.error("Error fetching brochure requests:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
