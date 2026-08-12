import React from 'react';
import { MapPin, Building2, ChevronRight, X, Navigation, Globe2, ShieldAlert, ShieldCheck } from 'lucide-react';
import { COUNTRY_POPULATION_DATA } from '../data/jewishPopulationData';

export default function StatsPanel({ selectedCountry, onSelectCountry, onCloseSelected }) {
  // Classification Logic: High population density = Dangerous/Unsafe, Low/No population = Safe to move
  const notSafeCountries = COUNTRY_POPULATION_DATA.filter(c => c.population >= 100000).slice(0, 4);
  const safeCountries = [...COUNTRY_POPULATION_DATA].reverse().filter(c => c.population <= 10000).slice(0, 4);

  return (
    <aside className="right-panel">
      {/* Selected Country Card Drawer */}
      {selectedCountry && (
        <div className="selected-card-container">
          <div className="card-header">
            <div>
              <span className="card-badge">SELECTED REGION</span>
              <h2 className="card-title">{selectedCountry.flag} {selectedCountry.country}</h2>
            </div>
            <button className="close-btn" onClick={onCloseSelected}>
              <X size={16} />
            </button>
          </div>

          <div className="stats-grid">
            <div className="stat-box">
              <span className="stat-label">JEWISH POPULATION</span>
              <span className="stat-number">{selectedCountry.population.toLocaleString()}</span>
              <span className="stat-sub">{selectedCountry.pctOfGlobal}% of global total</span>
            </div>

            <div className="stat-box">
              <span className="stat-label">5-YR SHIFT TREND</span>
              <span className={`stat-number ${selectedCountry.fiveYearChangePct >= 0 ? 'green-text' : 'red-text'}`}>
                {selectedCountry.fiveYearChangePct >= 0 ? '+' : ''}{selectedCountry.fiveYearChangePct}%
              </span>
              <span className="stat-sub">
                {selectedCountry.fiveYearChangePct >= 0 ? '+' : ''}{selectedCountry.changeCount.toLocaleString()} net change
              </span>
            </div>
          </div>

          <p className="country-description">{selectedCountry.description}</p>

          <div className="cities-section" style={{ marginBottom: '12px' }}>
            <div className="section-subtitle">
              <MapPin size={12} /> PRIMARY CITIES & HUBS
            </div>
            <div className="city-tags">
              {selectedCountry.primaryCities.map((city, i) => (
                <span key={i} className="city-tag">{city}</span>
              ))}
            </div>
          </div>

          {selectedCountry.hubs && selectedCountry.hubs.length > 0 && (
            <div className="hubs-section" style={{ marginBottom: '12px' }}>
              <div className="section-subtitle">
                <Building2 size={12} /> KEY COMMUNITY HUBS
              </div>
              <div className="hubs-list">
                {selectedCountry.hubs.map((hub, idx) => (
                  <div key={idx} className="hub-item">
                    <div className="hub-name">{hub.name}</div>
                    <div className="hub-meta">{hub.city} • {hub.type}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button 
            className="fly-to-btn"
            onClick={() => onSelectCountry(selectedCountry)}
          >
            <Navigation size={13} /> center view on map
          </button>
        </div>
      )}

      {/* Side Panel: Full Country Directory Ranking */}
      <div className="panel-box rankings-panel-box">
        <div className="panel-title-bar">
          <Globe2 size={14} color="#10b981" />
          <span className="panel-heading-text">GLOBAL RANKINGS (TOP 5)</span>
        </div>
        <div className="rankings-list">
          {COUNTRY_POPULATION_DATA.slice(0, 5).map((item, index) => (
            <div 
              key={item.id} 
              className={`ranking-item ${selectedCountry?.id === item.id ? 'active-row' : ''}`}
              onClick={() => onSelectCountry(item)}
            >
              <span className="rank-num">#{index + 1}</span>
              <div className="rank-info">
                <div className="rank-country">{item.flag} {item.country}</div>
                <div className="rank-pct">{item.pctOfGlobal}% of global</div>
              </div>
              <div className="rank-pop">
                <div>{item.population.toLocaleString()}</div>
                <span className={`rank-trend ${item.fiveYearChangePct >= 0 ? 'green-text' : 'red-text'}`}>
                  {item.fiveYearChangePct >= 0 ? '+' : ''}{item.fiveYearChangePct}%
                </span>
              </div>
              <ChevronRight size={14} className="chevron" />
            </div>
          ))}
        </div>
      </div>

      {/* New Box Below World Rankings: Relocation Safety Classification */}
      <div className="panel-box safety-panel-box">
        <div className="panel-title-bar" style={{ marginBottom: '10px' }}>
          <span className="panel-heading-text" style={{ color: '#e2e8f0' }}>RELOCATION SAFETY CLASSIFICATION</span>
        </div>

        <div className="safety-columns-grid">
          {/* Column 1: Safe To Move (Low / No Population) */}
          <div className="safety-col safe-col">
            <div className="col-header green-header">
              <ShieldCheck size={12} color="#10b981" />
              <span>SAFE TO MOVE</span>
            </div>
            <div className="safety-list">
              {safeCountries.map(item => (
                <div 
                  key={item.id} 
                  className="safety-item"
                  onClick={() => onSelectCountry(item)}
                >
                  <div className="item-title">{item.flag} {item.country}</div>
                  <div className="item-sub green-text">{item.population.toLocaleString()} Jews</div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Not Safe To Move (High Population Density) */}
          <div className="safety-col unsafe-col">
            <div className="col-header red-header">
              <ShieldAlert size={12} color="#f43f5e" />
              <span>NOT SAFE</span>
            </div>
            <div className="safety-list">
              {notSafeCountries.map(item => (
                <div 
                  key={item.id} 
                  className="safety-item"
                  onClick={() => onSelectCountry(item)}
                >
                  <div className="item-title">{item.flag} {item.country}</div>
                  <div className="item-sub red-text">{item.population.toLocaleString()} Jews</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
