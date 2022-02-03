## Vor der ersten Nutzung

Damit die App laufen kann, müssen npm-Befehle ausgeführt werden. Dafür muss [Node.js](https://nodejs.org/en/download/) heruntergeladen und installiert werden.

Durch Doppelklick auf 
```bash
Install.bat
```
werden alle notwendigen Pakete installiert (eigentlich nur notwendig, wenn es keinen __node_modules__-Ordner gibt)

Das wars schon.

## Getting Started

Doppelklick auf

```bash
Start.bat
```
startet die App.

Öffne [http://localhost:3000](http://localhost:3000) im Browser, um die App zu benutzen.


## Daten

Nach der Dateneingabe wird man auf dem __Home__-Seite verwiesen. Dort kann man auf __in CSV umwandeln__ klicken. Hierdurch wird die __output.csv__ im Hauptordner aktualisiert. 
Die Daten hierfür werden immer aus der __db.json__-Datei gezogen. Wenn man die Daten resetten möchte, kann man die Datei __db_Vorlage.json__ duplizieren und die Kopie in _db.json_ umbenennen.

Sollte die Vorlage mal verloren gehen: Die Datei braucht ein minimales Grundgerüst, um zu funkionieren. Wenn die Datei nur Zeilen enthält, funktioniert es:

```json
{
    "Goals": [],
    "moveChallenge": [],
    "userDetails": []
}
```

## Code 

Der Code ist in meinem privaten Git-Repository. Gerne kann ich den veröffentlichen, wenn andere Personen die App weiterentwickeln möchten.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
