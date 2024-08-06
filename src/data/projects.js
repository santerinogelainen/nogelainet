export default [
  {
    PartitionKey: "Project",
    RowKey: "card-registry",
    Timestamp: "2022-02-25T17:44:08.8067505Z",
    Description:
      "Kilta Card registry allows organizations to keep track of their issued cards and qualifications. It consists of the base registry, course management module, online exam module and the mobile app for cards.\n\nWhat I worked on:\n- Implementation of:\n  - Course management module\n  - Course exam module\n  - Mobile card app (PWA)\n  - Billing and invoicing\n  - Netvisor integration\n  - E-taika integration\n  - Data transfers\n  - CI/CD pipelines",
    DescriptionFI:
      "Kilta Korttirekisteri antaa organisaatioille mahdollisuuden hallinnoida heid\u00e4n jakamia kortteja ja p\u00e4tevyyksi\u00e4. Se koostuu perus rekisterist\u00e4, kurssien hallinnan moduulista, tenttien moduulista ja mobiilikortista.\n\nMit\u00e4 kehitin:\n- Seuraavien toimintojen toteutus:\n  - Kurssien hallinnan moduuli\n  - Tenttien moduuli\n  - Mobiilikortti (PWA)\n  - Laskutus\n  - Netvisor integraatio\n  - E-taika integraatio\n  - Tiedonsiirto\n  - CI/CD-putket",
    Employer: "Keh\u00e4tieto",
    Name: "Card registry",
    NameFI: "Korttirekisteri",
    Order: 30,
  },
  {
    PartitionKey: "Project",
    RowKey: "event-manager",
    Timestamp: "2022-03-01T20:43:24.924922Z",
    Description:
      "Event manager is a module that can be installed on top of the Kilta registry for organizations that needed to manage their events, courses etc. \n\nWhat I worked on:\n- Productization of Event manager as a lead developer\n- Implementation of functionalities like:\n  - Event groups\n  - Event gatherings\n  - Event accommodations\n  - Event statistics and reports\n  - Enrollment form capabilities like\n    - questions under questions\n    - multiple forms for a single event\n  - English and swedish support\n  - Paytrail integration\n  - Netvisor integration\n  - Moodle integration\n  - Priima integration\n  - REST API\n  - CI/CD pipelines\n\n...and much more.",
    DescriptionFI:
      "Kilta Tapahtumienhallinta on moduuli, jolla organisaatiot pystyv\u00e4t hallinoimaan tapahtumia, osallistujia, kursseja jne. Moduuli asennetaan Kilta-rekisterin p\u00e4\u00e4lle.\n\nMit\u00e4 kehitin:\n- Tapahtumahallinnan tuotteistus p\u00e4\u00e4ohjelmoijana\n- Seuraavien toimintojen toteutus:\n  - Tapahtumakokonaisuudet\n  - Tapahtumien kokoontumisten hallinta\n  - Tapahtumien majoituksen hallinta\n  - Tapahtumien tilastot ja raportit\n  - Ilmoittautumislomakkeen toimintoja kuten:\n    - kysymyksen alla kysymys\n    - usea lomake yhdelle tapahtumalle\n  - Englannin ja ruotsin kielen tuki\n  - Paytrail integraatio\n  - Netvisor integraatio\n  - Moodle integraatio\n  - Priima integraatio\n  - REST-rajapinta\n  - CI/CD-putket\n\n...ja paljon muuta.",
    Employer: "Keh\u00e4tieto",
    Name: "Event manager",
    NameFI: "Tapahtumahallinta",
    Order: 20,
  },
  {
    PartitionKey: "Project",
    RowKey: "fund-raising",
    Timestamp: "2022-03-01T20:44:00.0498672Z",
    Description:
      "Kilta Fund raising is a module that can be installed on top of the Kilta registry to manage fund raising for a non profit organization. \n\nWhat I worked on:\n- Designing and building the module as a lead developer\n- Implementation of functionalities like:\n  - Managing donator's information\n  - Managing campaign's information\n  - Invoicing and billing\n  - Donation forms\n  - Automations",
    DescriptionFI:
      "Kilta Varainhankita on moduuli, jolla organisaatiot pystyv\u00e4t hallinnoimaan esim. kampanjoita, lahjoittajia, viestint\u00e4\u00e4 ja laskutusta. Moduulin pystyy asentamaan Kilta-rekisterin p\u00e4\u00e4lle tai omaksi sovellukseksi.\n\nMit\u00e4 kehitin:\n- Moduulin suunnittelu ja toteutus p\u00e4\u00e4ohjelmoijana\n- Seuraavien toimintojen toteutus:\n  - Lahjoittajien tietojen hallinnointi\n  - Kampanjan tietojen hallinnointi\n  - Lahjoittajien laskutus\n  - Lahjoituslomakkeet\n  - Automaatiot",
    Employer: "Keh\u00e4tieto",
    Name: "Fund raising module",
    NameFI: "Varainhankinta",
    Order: 10,
  },
  {
    PartitionKey: "Project",
    RowKey: "mycats",
    Timestamp: "2022-02-25T17:52:11.3000902Z",
    Description:
      "MyCats is a registry for Fif\u00e9 cats, cat shows, cattery names, members, events and invoicing.\n\nWhat I worked on:\n- Productization of MyCats as a lead developer\n- Implementation of functionalities like:\n  - Improved cat's health information\n  - Improved litter registration\n  - Improved EMS Code management\n  - Improved membership registration process\n  - Optimization of the show registry\n  - Danish, Latvian and Dutch support\n  - Mollie integration\n  - E-boekhouden integration\n  - REST API\n  - Data transfers\n  - CI/CD pipelines\n- Deployment for\n  - Suomen Kissaliitto, Finnish Federation\n  - NRR, Norwegian Federation\n  - Felis Danica, Danish Federation\n  - CFCA, Latvian Federation\n  - Mundikat, Dutch Federation",
    DescriptionFI:
      "MyCats on rekisteri Fif\u00e9 kissoille, n\u00e4yttelyille, kasvattajanimille, j\u00e4senille, tapahtumille ja laskutuksille.\n\nMit\u00e4 kehitin:\n- MyCatsin tuotteistus p\u00e4\u00e4ohjelmoijana\n- Seuraavien toimintojen toteutus:\n  - Paranneltu kissan terveystietojen hallinnointi\n  - Paranneltu pentueen rekister\u00f6inti\n  - Paranneltu EMS-koodien hallinta\n  - Paranneltu j\u00e4seneksi rekister\u00f6itymisen prosessi\n  - N\u00e4yttelyrekisterin optimointi\n  - Tanskan, latvian ja hollannin kielen tuki\n  - Mollie integraatio (maksupalvelu)\n  - E-boekhouden integraatio (taloushallinto)\n  - REST-rajapinta\n  - Tiedonsiirtoja\n  - CI/CD-putket\n- K\u00e4ytt\u00f6\u00f6notto j\u00e4rjest\u00f6ille:\n  - Suomen Kissaliitto\n  - NRR (Norjalainen kissaj\u00e4rjest\u00f6)\n  - Felis Danica (Tanskalainen kissaj\u00e4rjest\u00f6)\n  - CFCA (Latvialainen kissaj\u00e4rjest\u00f6)\n  - Mundikat (Alankomainen kissaj\u00e4rjest\u00f6)",
    Employer: "Keh\u00e4tieto",
    Name: "MyCats",
    NameFI: "MyCats",
    Order: 40,
  },
];
