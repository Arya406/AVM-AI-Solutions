# Overview

This is a professional, modern website for an AI solutions company built with React, TypeScript, Express.js, and PostgreSQL. The application provides a comprehensive platform showcasing AI services, company information, and client engagement features including consultation booking and brochure downloads. The architecture follows a full-stack approach with a React frontend using shadcn/ui components and an Express backend with PostgreSQL database integration through Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for build tooling
- **UI Components**: shadcn/ui component library with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom design tokens for consistent theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and form handling with React Hook Form
- **Form Validation**: Zod schemas with React Hook Form resolvers for type-safe validation

## Backend Architecture  
- **Framework**: Express.js with TypeScript running on Node.js
- **API Design**: RESTful API endpoints for consultation and brochure requests
- **Database Integration**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Error Handling**: Centralized error middleware with structured error responses
- **Development Tools**: Hot module replacement via Vite integration in development mode

## Data Storage
- **Database**: PostgreSQL with Drizzle ORM for schema management and migrations
- **Schema Design**: Separate tables for users, consultation requests, and brochure requests
- **Data Validation**: Shared Zod schemas between frontend and backend for consistent validation
- **Connection**: Neon Database serverless PostgreSQL for cloud deployment

## Authentication & Authorization
- **Current State**: Basic user schema exists but authentication is not fully implemented
- **Session Management**: Connect-pg-simple package included for PostgreSQL session storage
- **Future Implementation**: Ready for session-based or JWT authentication patterns

## External Dependencies
- **Database**: Neon Database (@neondatabase/serverless) for serverless PostgreSQL
- **UI Framework**: Radix UI primitives for accessible component foundation
- **Form Handling**: React Hook Form with Zod resolvers for validation
- **Development**: Replit-specific tooling for development environment integration
- **Build Tools**: Vite for frontend bundling, ESBuild for backend compilation
- **Styling**: Tailwind CSS with PostCSS for utility-first styling approach