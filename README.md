# Agent Chatbot

An interactive customer support workspace with a moonlit palette, sakura artwork, and translucent glass panels. Built with React 19, TypeScript, Vite, Lucide icons, and self-hosted variable fonts.

## Run locally

```sh
npm ci
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Vercel detects the Vite framework automatically. Build command: `npm run build`. Output directory: `dist`. No environment variables are required.

## Explore the demo

- **Overview:** weekly metrics, conversation previews, upcoming bookings, and the AI team.
- **Conversations:** search by customer or message, filter status, open threads, send replies, and resolve/reopen conversations.
- **AI Agents:** create agents with unique names and a specialty; pause and reactivate them.
- **Bookings:** create appointments with customer, service, date, and time; cancel appointments.
- **Customers:** open the associated customer conversation.
- **Knowledge base:** expand and edit sources, or add a source.
- **Analytics:** sample weekly conversation volume.
- **Settings:** rename the workspace and choose a timezone.

This is a frontend demo with sample customers and metrics. Agents do not call a model or send messages to external services. Bookings do not send confirmations or synchronize with an external calendar. Data is stored locally in this browser under versioned `ac-v1-*` keys; clear those keys to reset the demo. No authentication or backend is configured.

## Verification

Production TypeScript/Vite build passes. Browser smoke checks cover agent creation and pausing, search and reply, booking creation/persistence/cancellation, knowledge editing, desktop and mobile layout, and runtime errors.
