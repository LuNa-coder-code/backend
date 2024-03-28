# BoxCal Backend

Das Backend von BoxCal dient als API-Server für die BoxCal Kalender-App, die alle anstehenden Boxwettkämpfe anzeigt. Es ermöglicht das Abrufen, Aktualisieren und Löschen von Wettkampfdaten über REST-API.

## Inhaltsverzeichnis

- [Voraussetzungen](#voraussetzungen)
- [Installation](#installation)
- [Datenbankkonfiguration](#datenbankkonfiguration)
- [Starten des Servers](#starten-des-servers)
- [Deployment](#deployment)
- [Lizenz](#lizenz)

## Voraussetzungen

- Node.js Version 20.9.0
- MongoDB oder ein MongoDB Atlas Konto

## Installation

1. **Repository klonen**

   ```
   git clone https://github.com/LuNa-coder-code/backend
   cd backend
   ```

2. **Abhängigkeiten installieren**

   ```
   npm install
   ```

## Datenbankkonfiguration

Erstellen Sie ein Cluster in MongoDB Atlas und fügen Sie Ihre Verbindungszeichenfolge zu einer `.env`-Datei im Wurzelverzeichnis des Projekts hinzu:

```
DB_CONNECTION=mongodb+srv_your_string_here
DATABASE=your_db_name
```

## Starten des Servers

```
npm start
```

Der Server ist jetzt auf `http://localhost:3000` erreichbar.

## Deployment

Das Backend ist auf [Render](https://render.com/) deployed.


## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert.

