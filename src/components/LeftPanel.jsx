import React from 'react';
import { TrendingUp, TrendingDown, Play, Pause, Navigation, History } from 'lucide-react';
import { TOP_GAINERS, TOP_LOSERS, EXODUS_DATA } from '../data/jewishPopulationData';

export default function LeftPanel({ onSelectCountry, isAutoRotate, setIsAutoRotate, onRecenter }) {
  return (
    <aside className="left-panel">
      {/* Map Controls */}
      <div className="globe-controls-box">
        <button 
          className={`control-btn ${isAutoRotate ? 'active' : ''}`}
          onClick={() => setIsAutoRotate(!isAutoRotate)}
        >
          {isAutoRotate ? <Pause size={12} /> : <Play size={12} />}
          <span>{isAutoRotate ? 'pause' : 'rotate'}</span>
        </button>
        <button 
          className="control-btn"
          onClick={onRecenter}
        >
          <Navigation size={12} />
          <span>recenter</span>
        </button>
      </div>

      {/* Box 1: Top Gainers */}
      <div className="panel-box gainer-panel-box">
        <div className="box-header">
          <div className="box-title">
            <TrendingUp size={14} color="#10b981" />
            <span>TOP GAINERS (5 YEARS)</span>
          </div>
          <span className="box-badge green-badge">GROWTH</span>
        </div>

        <div className="vertical-trend-list">
          {TOP_GAINERS.map((item, index) => (
            <div 
              key={item.id} 
              className="vertical-trend-item"
              onClick={() => onSelectCountry(item)}
            >
              <span className="rank-badge">#{index + 1}</span>
              <div className="trend-main-info">
                <div className="country-name-row">
                  <span className="flag-icon">{item.flag}</span>
                  <span className="country-title">{item.country}</span>
                </div>
                <div className="pop-count">{item.population.toLocaleString()} Jews</div>
              </div>
              <div className="pct-badge green-bg">
                +{item.fiveYearChangePct}%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Box 2: Migration Shifts / Decline */}
      <div className="panel-box loser-panel-box">
        <div className="box-header">
          <div className="box-title">
            <TrendingDown size={14} color="#f43f5e" />
            <span style={{ color: '#f43f5e' }}>MIGRATION SHIFTS / DECLINE</span>
          </div>
          <span className="box-badge red-badge">DECLINE</span>
        </div>

        <div className="vertical-trend-list">
          {TOP_LOSERS.map((item, index) => (
            <div 
              key={item.id} 
              className="vertical-trend-item"
              onClick={() => onSelectCountry(item)}
            >
              <span className="rank-badge">#{index + 1}</span>
              <div className="trend-main-info">
                <div className="country-name-row">
                  <span className="flag-icon">{item.flag}</span>
                  <span className="country-title">{item.country}</span>
                </div>
                <div className="pop-count">{item.population.toLocaleString()} Jews</div>
              </div>
              <div className="pct-badge red-bg">
                {item.fiveYearChangePct}%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Box 3: Historical Expulsion & Exodus Records */}
      <div className="panel-box exodus-panel-box">
        <div className="box-header">
          <div className="box-title" style={{ color: '#f59e0b' }}>
            <History size={14} color="#f59e0b" />
            <span>HISTORICAL EXODUS / REMOVED</span>
          </div>
          <span className="box-badge amber-badge">EXODUS</span>
        </div>

        <div className="vertical-trend-list">
          {EXODUS_DATA.map((item, index) => (
            <div key={index} className="exodus-item">
              <div className="exodus-header-row">
                <span className="flag-icon">{item.flag}</span>
                <span className="country-title">{item.country}</span>
                <span className="exodus-era">{item.era}</span>
              </div>
              <div className="exodus-details-row">
                <span className="exodus-count">{item.count} displaced</span>
                <span className="exodus-cause">{item.cause}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
