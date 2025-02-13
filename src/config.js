const config = {
    style: 'mapbox://styles/mapbox/dark-v11',
    accessToken: 'pk.eyJ1Ijoic2lnYXRuZ3V5ZW4iLCJhIjoiY203MzYxdzdzMGZ1ajJpc2ZwZmRzczIwZCJ9.Jpxbl-gh-nuwDodqWlmWEA', // Remplacez par votre token Mapbox
    showMarkers: true,
    markerColor: '#3FB1CE',
    inset: false,
    theme: 'dark',
    use3dTerrain: false,
    auto: false,
    chapters: [
      {
        id: 'pearl-harbor',
        alignment: 'left',
        hidden: false,
        title: 'Attaque de Pearl Harbor (1941)',
        description:
          "Le 7 décembre 1941, l'attaque surprise japonaise sur Pearl Harbor a marqué l'entrée des États-Unis dans la Seconde Guerre mondiale.",
        location: {
          center: [-157.95, 21.35],
          zoom: 10,
          pitch: 60,
          bearing: 0,
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [],
        onChapterExit: [],
      },
      {
        id: 'midway',
        alignment: 'center',
        hidden: false,
        title: 'Bataille de Midway (1942)',
        description:
          "La bataille de Midway fut un tournant majeur dans le conflit, offrant aux États-Unis leur première victoire décisive contre le Japon.",
        location: {
          center: [-177.36912, 28.20889],
          zoom: 13.63,
          pitch: 35.72,
          bearing: 0,
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [],
        onChapterExit: [],
      },
      {
        id: 'iwo-jima',
        alignment: 'left',
        hidden: false,
        title: "Bataille d'Iwo Jima (1945)",
        description:
          "La bataille d'Iwo Jima fut l'une des confrontations les plus féroces, symbolisée par le drapeau américain planté au sommet du mont Suribachi.",
        location: {
          center: [141.27, 24.77],
          zoom: 12,
          pitch: 45,
          bearing: 0,
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [],
        onChapterExit: [],
      },
      {
        id: 'nagasaki',
        alignment: 'right',
        hidden: false,
        title: 'Bombardement de Nagasaki – Fat Man (1945)',
        description:
          "Le bombardement atomique de Nagasaki, avec la bombe 'Fat Man', fut l'un des événements marquants qui conduisirent à la fin de la Seconde Guerre mondiale.",
        location: {
          center: [129.87, 32.75],
          zoom: 10,
          pitch: 20,
          bearing: 0,
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [],
        onChapterExit: [],
      },
    ],
  };
  
  export default config;
  