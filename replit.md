# AloeGuard - AI-Powered Plant Disease Detection

## Overview

AloeGuard is a full-stack web application designed to help users identify and manage plant diseases through AI-powered image analysis. The application provides instant disease detection, treatment recommendations, and tracking capabilities for plant health monitoring.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend components:

- **Frontend**: React with TypeScript using Vite for fast development
- **Backend**: Express.js with TypeScript running on Node.js
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **UI Framework**: Tailwind CSS with shadcn/ui components for consistent design
- **State Management**: TanStack Query for server state management and React Hook Form for form handling

## Key Components

### Database Layer
- **PostgreSQL** with Neon serverless hosting for scalable data storage
- **Drizzle ORM** provides type-safe database queries and migrations
- **Schema Definition**: Centralized in `/shared/schema.ts` with four main tables:
  - `users`: User authentication and profile information
  - `plant_analyses`: Disease detection results and image analysis data
  - `disease_reports`: Geographic disease mapping and reporting
  - `user_feedback`: User ratings and comments for model improvement

### Backend Architecture
- **Express.js** server with TypeScript for type safety
- **Session-based authentication** with simple username/password validation
- **RESTful API** design with dedicated routes for auth, analysis, reports, and feedback
- **Storage abstraction** with in-memory implementation for development (easily replaceable with database layer)
- **Mock AI analysis** endpoint that simulates disease detection with confidence scores

### Frontend Architecture
- **React 18** with TypeScript for component-based UI development
- **Wouter** for lightweight client-side routing
- **TanStack Query** for server state management and caching
- **React Hook Form** with Zod validation for type-safe form handling
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom color scheme

### Authentication System
- Simple session-based authentication without external dependencies
- User registration and login with basic validation
- Protected routes that redirect unauthenticated users
- Centralized auth state management through custom hooks

### UI/UX Design
- Mobile-first responsive design optimized for 393px width
- Custom green color scheme reflecting plant health theme
- Bottom navigation for mobile app-like experience
- Consistent card-based layout with subtle shadows and rounded corners
- Loading states and error handling throughout the application

## Data Flow

1. **User Authentication**: Users sign up/sign in through form validation and session creation
2. **Image Analysis**: Users upload plant images → mock AI analysis → results stored in database
3. **History Tracking**: All analyses are saved and displayed in chronological order
4. **Disease Mapping**: Geographic reports aggregated and displayed for community insights
5. **Feedback Loop**: Users provide ratings that could improve AI model accuracy
6. **Profile Management**: User statistics and account management

## External Dependencies

### Core Framework Dependencies
- **React ecosystem**: React, React DOM, Vite for development
- **Backend**: Express.js, TypeScript execution with tsx
- **Database**: Drizzle ORM, Neon serverless PostgreSQL
- **Validation**: Zod for runtime type checking and form validation

### UI Component Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible components
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Lucide React**: Icon library for consistent iconography
- **shadcn/ui**: Pre-built component system combining Radix + Tailwind

### Development Tools
- **TypeScript**: Type safety across frontend and backend
- **ESBuild**: Fast bundling for production builds
- **Replit plugins**: Development environment integration and error handling

## Deployment Strategy

### Development Environment
- **Vite dev server** for frontend with hot module replacement
- **tsx** for running TypeScript backend files directly
- **Concurrent development** with frontend proxy to backend API

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations managed through `drizzle-kit push`
- **Environment**: Node.js production server serving both API and static files

### Database Management
- **Schema-first approach** with TypeScript definitions in shared folder
- **Migration system** through Drizzle Kit for schema changes
- **Connection pooling** with Neon serverless for scalability

The architecture prioritizes simplicity and rapid development while maintaining type safety throughout the stack. The modular design allows for easy extension of features like real AI integration, enhanced authentication, or additional plant analysis capabilities.