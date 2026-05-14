# TournamentX - Sports Tournament Management Website

Modern responsive tournament platform (React + Tailwind + Firebase) with dark neon sports UI.

## Quick Start (Working Setup)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create env file:
   ```bash
   cp .env.example .env
   ```
3. Run development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

> If you see a blank page, open browser DevTools console first. The most common reason is missing install (`vite: not found`) or wrong env setup.

## Features Included
- Team registration with approval workflow
- League + knockout fixtures
- Live score architecture (Firestore realtime listeners)
- Auto points table model
- Player profiles
- Sponsors/prize pool sections
- Notifications architecture
- Admin dashboard modules
- EN/ML language toggle
- WhatsApp/social/live-stream embeds ready
- SEO + PWA baseline

## Firestore Schema

```text
admins/{adminId}: { name, email, role }
teams/{teamId}: { name, logo, captainName, captainPhone, contactEmail, status, createdAt }
teams/{teamId}/players/{playerId}: { fullName, jerseyNumber, imageUrl, stats }
fixtures/{fixtureId}: { stage, teamAId, teamBId, dateTime, venue, status, scoreA, scoreB }
pointsTable/{groupId}/rows/{teamId}: { played, wins, losses, draws, gdOrNrr, points }
notifications/{notificationId}: { title, message, type, publishAt }
sponsors/{sponsorId}: { name, logoUrl, bannerUrl, tier, adLink }
prizes/{prizeId}: { title, amount, description }
gallery/{imageId}: { imageUrl, caption, uploadedBy, uploadedAt }
streams/{streamId}: { matchId, embedUrl, isLive }
registrations/{registrationId}: { teamPayload, playerFileUrl, approvedBy, status }
```

## Hosting
- Works on Vercel / Netlify
- Add Firebase env variables in hosting dashboard
