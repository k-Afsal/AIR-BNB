# AIR-BNB Monorepo

This repository now contains separate frontend and backend apps:

- AirBnb-Frontend: Next.js app (moved from root)
- AirBnb-Backend: ASP.NET Core Web API implementing Wishlist per swagger

## Prerequisites

- Node.js 18+
- .NET SDK 9.0+

## Frontend (Next.js)

```bash
cd AirBnb-Frontend
npm install
npm run dev
```

App runs at http://localhost:3000

## Backend (ASP.NET Core Web API)

```bash
cd AirBnb-Backend
 dotnet run
```

API base URL: http://localhost:5213 (or the port shown in console)

### Endpoints

- GET /api/wishlist → returns array of Property
- POST /api/wishlist { propertyId } → toggles wishlist, returns { success, message, wishlist }

### Notes

- Uses in-memory repository seeded with a few example properties (p1, p2, p3)
- User context is stubbed as "demo-user"

## Swagger

Original swagger at `AirBnb-Frontend/src/docs/swagger.yaml` mirrors implemented endpoints.
