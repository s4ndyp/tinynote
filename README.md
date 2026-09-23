# Smartnote

Smartphone-first notitie- en to-do-app als **PWA**. Donker glas-uiterlijk, opslag in [PocketBase](https://pocketbase.io) 0.40.1.

## Starten met Docker

```bash
docker compose pull
docker compose up -d
```

Het image komt van GitHub Container Registry (`ghcr.io/s4ndyp/tinynote`). Bij een privé-package eerst inloggen: `docker login ghcr.io`.

Open daarna [http://localhost:8080](http://localhost:8080).

Data blijft bewaard in het Docker-volume `smartnote_data`.

Stoppen:

```bash
docker compose down
```

## PWA installeren

1. Open de app in Chrome/Safari op je telefoon (via HTTPS of localhost).
2. Kies **Toevoegen aan startscherm** / **Installeren**.
3. De app opent standalone met eigen icoon.

Bestanden:

- `pb_public/manifest.webmanifest` — app-metadata en iconen
- `pb_public/sw.js` — service worker (shell caching; API blijft live)
- `pb_public/offline.html` — fallback zonder netwerk
- `pb_public/icons/` — app-iconen (16–512 px + maskable)

## Beheer

PocketBase-admin: [http://localhost:8080/_/](http://localhost:8080/_/)

Eerste superuser aanmaken:

```bash
docker compose exec pocketbase /pb/pocketbase superuser upsert admin@example.com 'kies-een-wachtwoord'
```

De collecties `notes` en `todos` zijn publiek lees- en schrijfbaar, bedoeld voor een persoonlijke instance achter je eigen netwerk.

## Zonder Docker

```bash
./pocketbase serve --http=0.0.0.0:8080 --dir=./pb_data --publicDir=./pb_public --migrationsDir=./pb_migrations
```
