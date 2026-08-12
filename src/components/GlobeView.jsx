import React, { useRef, useEffect, useState, useMemo } from 'react';
import Globe from 'react-globe.gl';
import { ALL_HOTSPOT_DOTS, COUNTRY_POPULATION_DATA } from '../data/jewishPopulationData';

export default function GlobeView({ selectedCountry, onSelectCountry, isAutoRotate, setIsAutoRotate }) {
  const globeEl = useRef();
  const [countriesGeoJson, setCountriesGeoJson] = useState([]);
  const getDimensions = () => {
    return {
      width: window.innerWidth,
      height: window.innerWidth <= 768 ? 340 : window.innerHeight
    };
  };

  const [dimensions, setDimensions] = useState(getDimensions());

  // Fetch standard country boundary polygons GeoJSON
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(data => {
        setCountriesGeoJson(data.features || []);
      })
      .catch(err => console.error('Failed to load GeoJSON boundaries:', err));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getDimensions());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.pointOfView({ lat: 31.0461, lng: 34.8516, altitude: 2.2 }, 1000);
      globeEl.current.controls().autoRotate = isAutoRotate;
      globeEl.current.controls().autoRotateSpeed = 0.6;

      window.__recenterGlobe = () => {
        if (globeEl.current) {
          globeEl.current.pointOfView({ lat: 31.0461, lng: 34.8516, altitude: 2.2 }, 1200);
        }
      };
    }
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = isAutoRotate;
    }
  }, [isAutoRotate]);

  useEffect(() => {
    if (selectedCountry && globeEl.current) {
      globeEl.current.pointOfView(
        { lat: selectedCountry.lat, lng: selectedCountry.lng, altitude: 1.5 },
        1500
      );
    }
  }, [selectedCountry]);

  // Bubble spots data
  const dotsData = useMemo(() => {
    return ALL_HOTSPOT_DOTS.map(d => ({
      ...d,
      color: d.fiveYearChangePct >= 0 ? '#10b981' : '#f43f5e'
    }));
  }, []);

  // Large Radiating Gradient Wave Rings for ALL spots (big or small)
  const ringsData = useMemo(() => {
    return ALL_HOTSPOT_DOTS.map((d, index) => ({
      ...d,
      lat: d.lat,
      lng: d.lng,
      maxR: Math.max(3.2, Math.log10(d.population || 50) * 1.2),
      propagationSpeed: 2.2 + (index % 3) * 0.3,
      repeatPeriod: 1000 + (index % 4) * 200
    }));
  }, []);

  const handleHotspotClick = (hotspot) => {
    const matchedCountry = COUNTRY_POPULATION_DATA.find(c => c.id === hotspot.id) || hotspot;
    onSelectCountry(matchedCountry);
  };

  const handlePolygonClick = (polygon) => {
    const iso = polygon.properties.ISO_A3 || polygon.properties.ADM0_A3;
    const name = polygon.properties.NAME || polygon.properties.ADMIN;
    const matchedCountry = COUNTRY_POPULATION_DATA.find(
      c => c.id === iso || c.country.toLowerCase() === name?.toLowerCase()
    );
    if (matchedCountry) {
      onSelectCountry(matchedCountry);
    }
  };

  return (
    <div className="globe-container" style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Globe
        ref={globeEl}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="#000000"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        globeImageUrl={null}
        bumpImageUrl={null}
        showAtmosphere={false}

        // Plain Vector Globe Surface & Highlighted Country Boundaries
        polygonsData={countriesGeoJson}
        polygonCapColor={d => {
          const iso = d.properties.ISO_A3 || d.properties.ADM0_A3;
          if (iso === selectedCountry?.id) return '#10b98125';
          return '#090d16'; // Plain dark vector fill without texture
        }}
        polygonSideColor={() => '#090d16'}
        polygonStrokeColor={d => {
          const iso = d.properties.ISO_A3 || d.properties.ADM0_A3;
          if (iso === selectedCountry?.id) return '#10b981'; // Vibrant emerald green for selected
          return '#38bdf8'; // Plain highlighted cyan boundary outlines
        }}
        polygonAltitude={0.008}
        onPolygonClick={handlePolygonClick}

        // 2D Spot Markers with Continuous Radiating Wave Aura
        htmlElementsData={dotsData}
        htmlLat="lat"
        htmlLng="lng"
        htmlAltitude={0.012}
        htmlElement={d => {
          const el = document.createElement('div');
          const size = Math.max(9, Math.min(22, Math.log10(d.population) * 3.8));
          el.innerHTML = `
            <div style="position: relative; transform: translate(-50%, -50%); cursor: pointer; pointer-events: auto;">
              <div style="
                position: absolute;
                top: 50%;
                left: 50%;
                width: ${size * 3.5}px;
                height: ${size * 3.5}px;
                border-radius: 50%;
                background: radial-gradient(circle, ${d.color}70 0%, ${d.color}00 70%);
                border: 1px solid ${d.color}40;
                transform: translate(-50%, -50%);
                animation: dot-pulse-wave 1.8s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
                pointer-events: none;
              "></div>
              <div style="
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background-color: ${d.color};
                border: 1.5px solid #ffffff;
                box-shadow: 0 0 10px ${d.color};
                position: relative;
                z-index: 2;
              "></div>
            </div>
          `;
          el.title = `${d.country} (${d.formattedPop} Jews)`;
          el.onclick = () => handleHotspotClick(d);
          return el;
        }}

        // Continuous Radiating Gradient Wave Rings
        ringsData={ringsData}
        ringLat="lat"
        ringLng="lng"
        ringColor={d => (t) => d.fiveYearChangePct >= 0 
          ? `rgba(16, 185, 129, ${Math.max(0, (1 - t) * 0.9)})` 
          : `rgba(244, 63, 94, ${Math.max(0, (1 - t) * 0.9)})`
        }
        ringMaxRadius="maxR"
        ringPropagationSpeed="propagationSpeed"
        ringRepeatPeriod="repeatPeriod"
        ringAltitude={0.015}

        onRingClick={handleHotspotClick}
      />
    </div>
  );
}
