# QuicklyEx Premium - Cryptocurrency Exchange Platform

## Overview

QuicklyEx Premium is a modern cryptocurrency exchange platform built for Telegram users. It provides a seamless experience for exchanging various cryptocurrencies and fiat currencies, featuring real-time rates, secure transactions, and comprehensive user support through an integrated chat system.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for client-side routing
- **Mobile-First**: Designed as a Progressive Web App (PWA) with Telegram Web App integration

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Hot reload with Vite middleware integration

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations
- **Fallback**: In-memory storage for development/testing

## Key Components

### 1. User Management
- Telegram Web App integration for seamless authentication
- User profiles with verification status
- Automatic user creation from Telegram data

### 2. Exchange System
- Real-time exchange rates with 6% service fee
- Support for multiple currencies: USDT, INR, THB, AED, RUB
- Transaction lifecycle management (pending → processing → completed)
- Secure payment details for each currency type

### 3. Chat Support System
- Real-time customer support chat
- Bot integration for common queries
- Message history and status tracking
- Automated responses for frequently asked questions

### 4. Transaction History
- Complete transaction tracking
- Status visualization with color-coded badges
- Detailed transaction information display
- Refresh functionality for real-time updates

## Data Flow

1. **User Authentication**: Telegram Web App provides user context
2. **Rate Fetching**: Real-time exchange rates updated every 30 seconds
3. **Transaction Creation**: User inputs → calculation → confirmation → database storage
4. **Payment Processing**: External payment gateway integration (mocked for development)
5. **Status Updates**: Real-time transaction status updates via polling
6. **Support Integration**: Chat messages stored and processed for customer service

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database ORM
- **express**: Web framework
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI components
- **tailwindcss**: Utility-first CSS framework

### Telegram Integration
- **Telegram Web App API**: For user authentication and app integration
- **Telegram Bot API**: For notifications and customer support

### Payment Processing
- **Mock Payment Gateways**: Currently uses mock implementations
- **Future Integration**: Real payment processors for production

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20 runtime
- **Database**: PostgreSQL 16 module
- **Port Configuration**: 5000 (internal) → 80 (external)
- **Hot Reload**: Vite development server with Express middleware

### Production Build
- **Frontend**: Vite build → static files in `dist/public`
- **Backend**: esbuild bundling → single file in `dist/index.js`
- **Database**: Automated migrations with Drizzle Kit
- **Deployment**: Autoscale deployment target on Replit

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `TELEGRAM_BOT_TOKEN`: Bot API token
- `TELEGRAM_ADMIN_CHAT_ID`: Admin notifications
- `NODE_ENV`: Environment mode (development/production)

## Changelog

```
Changelog:
- June 24, 2025. Initial setup
- June 24, 2025. Implemented black and gold theme design
- June 24, 2025. Added 2-level verification system (phone/email + documents)
- June 24, 2025. Created comprehensive settings with security and policies
- June 24, 2025. Added PostgreSQL database integration with Drizzle ORM
- June 24, 2025. Implemented multi-language support (EN, TH, RU, HI, ZH)
- June 24, 2025. Added notification system for exchange status updates
- June 24, 2025. Integrated OpenAI-powered customer support with Telegram bot
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```