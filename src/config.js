export default {
  socialTags: {
  },
  map: {
    mapCenter: [13.19596, 52.51863377],
    mapZoom: [13],
    marker: {
      color: {
        selected: 'green',
        default: 'black',
      }
    },
    config: {
      minZoom: 6,
      maxZoom: 17,
      dragRotate: false,
      bearing: 0,
      maxBounds: [
        [10, 50],
        [15, 54],
      ],
      accessToken: process.env.REACT_APP_MAP_TOKEN,
      style: process.env.REACT_APP_MAP_STYLE,
    },
  },
  about: {
    legend: {
      id: 'Veranstaltungsort'
    },
    title: "Soziale Einrichtungen und Angebote in Spandau",
    paragraphs: [
      {
        title: "Was zeigt diese Karte?",
        content:
          "Diese Karte stellt eine Übersicht von Einrichtungen die regelmäßige soziale Angebote für Berliner*innen anbieten. Sie können die gezeigten Einrichtungen nach der Art des Angebots Zielgruppen, und Stadtteilen filtern. Durch anklicken der Punkte erhalten Sie mehr Informationen über jede Einrichtung und die dort jeweils stattfindenden Angebote. Sie können Einrichtungen als Favoriten markieren. Über das Herzsymbol der Menüleiste lassen sich die ausgewählten Favoriten als PDF exportieren.",
      },
      {
        title: "Wie kommen die Angebote in die Karte?",
        content:
          "Diese Karte wird von den Stadteilkoordinatoren des Bezirks Spandau gepflegt. Haben Sie Fragen oder möchten ein weiteres Angebot eintragen lassen, dann kontaktieren Sie bitte die jeweilige Stadtteilkoordination.",
      },
    ]
  },
  fav: {
    title: 'Favoriten'
  },
  filter: {
    title: 'Filter und Suche',
     filter: [
      {
        id: "Zielgruppen",
        component: "tags",
        label: "Zielgruppen"
      },
      {
        id: "Angebotstypen",
        component: "tags",
        label: "Angebotstypen"
      },
      {
        id: "Stadtteil",
        component: "tags",
        label: "Stadtteile"
      },
      ]
  },
  pdfExport: {
    pdfName: 'Sozialeinrichtungen',
    columns: [
      { header: 'Veranstaltungsort', dataKey: 'Veranstaltungsort' },
      { header: 'Adresse', dataKey: 'Adresse', },
      //{ header: 'Link', dataKey: 'Link', },
      { header: 'Zielgruppen', dataKey: 'Zielgruppen', },
      { header: 'Angebote', dataKey: 'Angebote', },
      
    ]
  },
  tooltip: [
    {
      id: "Veranstaltungsort",
      component: "title",
      label: "Veranstaltungsort",
    },
    {
      id: "Adresse",
      component: "description",
      label: "Adresse",
    }
   ],
  detail: [
    {
      id: "Veranstaltungsort",
      component: "title",
      label: "Veranstaltungsort",
    },
     {
      id: "Adresse",
      component: "description",
      label: "Adresse",
    },
     {
      id: "Link",
      component: "link",
      label: "Mehr Informationen",
    },
    {
      id: "Zielgruppen",
      component: "tags",
      label: "Das Angebot richtet sich an",
    },
    {
      id: "Angebotstypen",
      component: "tags",
      label: "Angebotstypen",
    },
    {
      id: "Angebote",
      component: "tags_angebote",
      label: "Aktuelle Angebote",
    },
  ],
};

