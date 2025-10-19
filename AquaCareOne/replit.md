# Arroyo Aqua Care - Pool & Water Feature Cleaning Services Website

## Overview
A beautiful, minimalist one-page React website for Arroyo Aqua Care, a professional pool and water feature cleaning service. The website showcases their services, portfolio of work, and provides an easy way for potential customers to get in touch.

## Project Structure

### Frontend (React + TypeScript)
- **Single-page application** with smooth scroll navigation
- **Sections:**
  - Hero: Full-screen hero with pool image background and compelling call-to-action
  - Services: Grid layout showcasing all 7 services with icons and descriptions
  - Gallery: Portfolio of completed pool cleaning projects
  - Contact: Contact form with service selection and business information
  - Footer: Company branding and copyright

### Backend (Express.js)
- Contact form submission endpoint (to be implemented)
- In-memory storage for contact submissions

### Design System
- **Color Palette:**
  - Primary: Deep Ocean Blue (hsl(200, 85%, 25%))
  - Accent: Aqua Fresh (hsl(190, 70%, 50%))
  - Light backgrounds: Crystal Clear (hsl(190, 100%, 96%))
- **Typography:** Inter and Poppins fonts for clean, modern aesthetic
- **Spacing:** Consistent spacing using Tailwind's spacing scale (8, 12, 16, 20, 32)

## Services Offered
1. Acid Washing (Pools, Hot Tubs, and Fountains)
2. Scale Removal
3. Pressure Washing - Water Features
4. Pressure Washing - Outdoor Spaces
5. Fountain Cleaning
6. Artificial Arroyo Cleaning
7. Wastewater Pump-Out

## Technology Stack
- **Frontend:** React, TypeScript, Tailwind CSS, Shadcn UI
- **Backend:** Express.js, Node.js
- **Forms:** React Hook Form with Zod validation
- **State Management:** TanStack Query
- **Routing:** Wouter

## Recent Changes
- 2025-01-19: Initial project setup with complete frontend implementation
  - Created contact form schema in shared/schema.ts
  - Built complete Home page with Hero, Services, Gallery, Contact, and Footer sections
  - Implemented responsive design with mobile-first approach
  - Added smooth scroll navigation
  - Integrated all 5 pool cleaning images from assets
  - Set up SEO meta tags for better discoverability

## Development Status
- ✅ Phase 1: Schema & Frontend - Complete
- ✅ Phase 2: Backend - Complete
- ✅ Phase 3: Integration & Testing - Complete

**MVP Status**: Fully functional and ready for deployment
- Contact form tested and working
- All sections responsive and visually polished
- Backend API validated and operational

## Running the Project
```bash
npm run dev
```
The application runs on port 5000 with both frontend and backend served together.
