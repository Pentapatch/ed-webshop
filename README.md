# Blombruket webshop

## Ett gruppprojekt inom kursen "Test, Verifiering och certifiering"

av **Emelie Baker** och **Dennis Hankvist**.
December 2023.

## Beskrivning

Detta är vår frontend för en webshop som säljer blommor.
Det är en klon av [Blombruket](https://www.blombruket.se).

Webplatsen följer orginaldesignen mer eller mindre exakt.
Vi har implementerat funktioner för att "browse:a" produkter, se individuella detaljer för produkter samt en fullt fungerande varukorg.
Menyknappen har vi uteslutit med flit, och du landar direkt i webshopen, till skillnad mot originalsidan.
Du kan inte gå vidare till "check-out" från varukorgen - då vi inte haft tid att implementera detta.
Mycket fokus har lagts på att få sidan 100% responsiv. Testa gärna i mobilläge.

### Tekniker

- Next-JS: React Single Page Application (SPA).
- Typescript för att tillse type safety.
- Tailwind för CSS.
- Jest för enhetstester.

### Projektindelning (SoC)

- `src/app` - Huvudsidan
- `src/components` - React components
  - `/common` - Delade components (ofta använda av andra komponenter)
  - `/layout` - Subcomponents till sidor (views)
  - `/shoppingCart` - Varukorgen är ett större system och har en egen mapp
- `contracts` - DTOs
- `models` - Modeller
- `services` - Underlättar pratandet med APIer
- `views` - "Content-sidor i vår single page app"
  - `/product` - Enskilda produktdetaljer
  - `/products` - Lista med produkter

## Till opponenter

Vi har inkluderat `node_modules` i repot så ni kommer att behöva köra:
`npm install`
i terminalen (öppna terminalen med `ctrl + ö` i Visual Studio Code) det första ni gör.

Vi har inkluderat `.env` i repot, så ni kan **köra projektet direkt** (denna fil har varit utesluten från repot fram till inlämningen).
Vi har arbetat enligt Gitflow, men har inför inlämningen mergat in development i master.

För att köra projektet behöver ni köra:
`npm run dev` i terminalen (öppna terminalen med `ctrl + ö`).

Vi har 28 tester som täcker den en stor del av våra komponenter - dock inte alla, inte heller hela "sidor" (views). Vi tester inte modeller och DTOer, då dessa inte innehåller någon logik.
För att köra våra tester, skriv `skriv npm test` i terminalen - se till att inte köra projektet samtidigt, alternativt öppna en extra terminal (genom `ctrl + shift + ö`).

## Felsökning

Om ni inte kan se några produkter betyder det att ni måste ändra inställningar i `.env` i frontend samt `launchSettings.json` i backend så de matchar varrandra.

Specifikt: `NEXT_PUBLIC_SERVER_ADDRESS=http://localhost:5098` måste matcha:

```
"profiles": {
  "http": {
    "commandName": "Project",
    "dotnetRunMessages": true,
    "launchBrowser": true,
    "launchUrl": "swagger",
    "applicationUrl": "http://localhost:5098",
    "environmentVariables": {
      "ASPNETCORE_ENVIRONMENT": "Development"
    }
  }
}
```
