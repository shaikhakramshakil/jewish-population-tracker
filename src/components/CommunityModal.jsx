import React, { useState } from 'react';
import { X, Users, Mail, CheckCircle2, Terminal } from 'lucide-react';
import { COUNTRY_POPULATION_DATA } from '../data/jewishPopulationData';

export default function CommunityModal({ isOpen, onClose }) {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [activeCategory, setActiveCategory] = useState('All');
  const [connectSuccess, setConnectSuccess] = useState(false);
  const [contactEmail, setContactEmail] = useState('');

  if (!isOpen) return null;

  const categories = [
    { id: 'All', name: 'All Resources' },
    { id: 'Heritage & Prayer', name: 'Synagogues & Prayer' },
    { id: 'Cultural & Religious Hub', name: 'Community Centers' },
    { id: 'Innovation Hub', name: 'Professional & Tech' },
    { id: 'Youth & Academia', name: 'Youth & Students' }
  ];

  const allHubs = COUNTRY_POPULATION_DATA.flatMap(country => 
    (country.hubs || []).map(hub => ({ ...hub, country: country.country }))
  );

  const filteredHubs = allHubs.filter(hub => {
    const regionMatch = selectedRegion === 'All' || hub.country === selectedRegion;
    const catMatch = activeCategory === 'All' || hub.type.includes(activeCategory);
    return regionMatch && catMatch;
  });

  const handleJoinNetwork = (e) => {
    e.preventDefault();
    if (contactEmail) {
      setConnectSuccess(true);
      setTimeout(() => {
        setConnectSuccess(false);
        setContactEmail('');
      }, 4000);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-brand">
            <span className="terminal-prompt">&gt;_</span>
            <div>
              <h2 className="modal-title">Global Community Directory</h2>
              <p className="modal-subtitle">Connect with community hubs, hospitality centers & networks anywhere you travel</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Filter Controls */}
        <div className="modal-filters">
          <div className="filter-group">
            <label className="filter-label">Filter Region:</label>
            <select 
              className="filter-select" 
              value={selectedRegion} 
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              <option value="All">Worldwide (All Countries)</option>
              {COUNTRY_POPULATION_DATA.map(c => (
                <option key={c.id} value={c.country}>{c.flag} {c.country}</option>
              ))}
            </select>
          </div>

          <div className="category-pills">
            {categories.map(cat => (
              <button 
                key={cat.id} 
                className={`cat-pill ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Hubs Grid */}
        <div className="hubs-grid">
          {filteredHubs.length > 0 ? (
            filteredHubs.map((hub, index) => (
              <div key={index} className="hub-card">
                <div className="hub-card-header">
                  <span className="hub-badge">{hub.type}</span>
                  <span className="hub-country-tag">{hub.country}</span>
                </div>
                <h3 className="hub-title">{hub.name}</h3>
                <p className="hub-location">📍 {hub.city}, {hub.country}</p>
                <div className="hub-card-actions">
                  <button className="hub-action-btn" onClick={() => alert(`Connecting with ${hub.name} in ${hub.city}...`)}>
                    <Mail size={12} /> Contact Hub
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-hubs" style={{ color: '#737373', fontSize: '12px', fontFamily: 'JetBrains Mono' }}>
              No specific hubs found for this filter.
            </div>
          )}
        </div>

        {/* Connection Form Banner */}
        <div className="connection-banner">
          <div className="banner-info">
            <Terminal size={20} color="#10b981" />
            <div>
              <h4 className="banner-heading">Join Global Network</h4>
              <p className="banner-sub">Register to receive community updates and local host contacts when traveling.</p>
            </div>
          </div>
          {connectSuccess ? (
            <div className="success-badge">
              <CheckCircle2 size={14} /> Registered! Welcome to the network.
            </div>
          ) : (
            <form className="banner-form" onSubmit={handleJoinNetwork}>
              <input 
                type="email" 
                className="banner-input" 
                placeholder="email address..."
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                required
              />
              <button type="submit" className="banner-submit">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
