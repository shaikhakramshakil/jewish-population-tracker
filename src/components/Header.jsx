import React, { useState } from 'react';
import coinLogo from '../assets/logo.jpeg';
import { COUNTRY_POPULATION_DATA, TOTAL_GLOBAL_JEWISH_POPULATION } from '../data/jewishPopulationData';

export default function Header({ onSelectCountry }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredCountries = COUNTRY_POPULATION_DATA.filter(item => {
    const term = searchTerm.toLowerCase();
    const countryMatch = item.country.toLowerCase().includes(term);
    const cityMatch = item.primaryCities.some(city => city.toLowerCase().includes(term));
    const hubMatch = (item.hubs || []).some(hub => 
      hub.name.toLowerCase().includes(term) || hub.city.toLowerCase().includes(term) || hub.type.toLowerCase().includes(term)
    );
    return countryMatch || cityMatch || hubMatch;
  });

  const handleSelect = (item) => {
    onSelectCountry(item);
    setSearchTerm('');
    setShowDropdown(false);
  };

  return (
    <header className="app-header floating-header">
      {/* Refined Brand Header Badge */}
      <div className="header-brand floating-badge">
        <div className="brand-logo-container">
          <img 
            src={coinLogo} 
            alt="Jew Tracker Logo" 
            className="brand-logo-img"
          />
        </div>
        <div className="brand-text-container">
          <div className="brand-title-row">
            <span className="brand-title">JEW TRACKER</span>
            <span className="brand-status-dot"></span>
          </div>
        </div>
      </div>

      {/* Global Stat Counter - Floating Pill */}
      <div className="stat-ticker-pill floating-badge">
        <div className="ticker-dot"></div>
        <div className="ticker-label">WORLDWIDE POPULATION</div>
        <div className="ticker-value">{TOTAL_GLOBAL_JEWISH_POPULATION.toLocaleString()}</div>
      </div>

      {/* Floating Terminal Style Search Input */}
      <div className="search-container floating-badge">
        <div className="search-input-wrapper">
          <span className="search-prefix">$</span>
          <input
            type="text"
            className="search-input"
            placeholder="search country, city, or hub..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
          />
        </div>

        {showDropdown && searchTerm.trim().length > 0 && (
          <div className="search-dropdown">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((item) => (
                <div 
                  key={item.id} 
                  className="dropdown-item"
                  onClick={() => handleSelect(item)}
                >
                  <div className="item-name">{item.flag} {item.country}</div>
                  <div className="item-details">
                    <span>{item.population.toLocaleString()} Jews</span>
                    <span className="dot-sep">•</span>
                    <span>{item.primaryCities.slice(0, 2).join(', ')}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="dropdown-item" style={{ color: '#64748b' }}>No countries or cities found</div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
