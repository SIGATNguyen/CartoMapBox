import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import scrollama from 'scrollama';
import config from './config';
import './App.css';

function App() {
  const mapContainer = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    // Définition du token Mapbox
    mapboxgl.accessToken = config.accessToken;

    // Création de la carte
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: config.style,
      center: config.chapters[0].location.center,
      zoom: config.chapters[0].location.zoom,
      bearing: config.chapters[0].location.bearing,
      pitch: config.chapters[0].location.pitch,
      interactive: false,
    });
    mapRef.current = map;

    // Ajout d'un marqueur si activé
    if (config.showMarkers) {
      const marker = new mapboxgl.Marker({ color: config.markerColor })
        .setLngLat(config.chapters[0].location.center)
        .addTo(map);
      markerRef.current = marker;
    }

    // Initialisation de scrollama
    const scroller = scrollama();

    map.on('load', () => {
      // Terrain en 3D si activé
      if (config.use3dTerrain) {
        map.addSource('mapbox-dem', {
          type: 'raster-dem',
          url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
          tileSize: 512,
          maxzoom: 14,
        });
        map.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 });
      }

      // Configuration de scrollama
      scroller
        .setup({
          step: '.step',
          offset: 0.5,
          progress: true,
        })
        .onStepEnter((response) => {
          const chapter = config.chapters.find(
            (chap) => chap.id === response.element.id
          );
          response.element.classList.add('active');

          // Déplacement de la caméra
          map[chapter.mapAnimation || 'flyTo'](chapter.location);

          // Déplacement du marqueur
          if (config.showMarkers && markerRef.current) {
            markerRef.current.setLngLat(chapter.location.center);
          }
        })
        .onStepExit((response) => {
          response.element.classList.remove('active');
        });
    });

    // Nettoyage lors du démontage du composant
    return () => {
      if (map) map.remove();
      scroller.destroy();
    };
  }, []);

  // Génère le contenu du storytelling
  const renderStory = () => (
    <div id="story">
      {(config.title || config.subtitle || config.byline) && (
        <div id="header" className={config.theme}>
          {config.title && <h1>{config.title}</h1>}
          {config.subtitle && <h2>{config.subtitle}</h2>}
          {config.byline && <p>{config.byline}</p>}
        </div>
      )}
      <div id="features">
        {config.chapters.map((record) => (
          <div
            key={record.id}
            id={record.id}
            className={`step ${record.hidden ? 'hidden' : ''} ${record.alignment}`}
          >
            <div className={`${config.theme} text-container`}>
              {record.title && <h3>{record.title}</h3>}
              {record.description && (
                <p dangerouslySetInnerHTML={{ __html: record.description }} />
              )}
            </div>
          </div>
        ))}
      </div>
      {config.footer && (
        <div id="footer" className={config.theme}>
          <p dangerouslySetInnerHTML={{ __html: config.footer }} />
        </div>
      )}
    </div>
  );

  return (
    <>
      <div
        id="map"
        ref={mapContainer}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
        }}
      />
      {renderStory()}
    </>
  );
}

export default App;
