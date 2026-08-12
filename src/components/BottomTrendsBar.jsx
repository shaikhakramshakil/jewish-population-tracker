import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { TOP_GAINERS, TOP_LOSERS } from '../data/jewishPopulationData';

export default function BottomTrendsBar({ onSelectCountry }) {
  return (
    <div className="bottom-trends-bar">
      {/* Box 1: Top Gainers */}
      <div className="trend-box-horizontal">
        <div className="box-header">
          <div className="box-title">
            <TrendingUp size={14} /> TOP GAINERS (PAST 5 YEARS)
          </div>
          <span className="box-badge">GROWTH</span>
        </div>
        <div className="trend-grid-horizontal">
          {TOP_GAINERS.map((item, index) => (
            <div 
              key={item.id} 
              className="trend-item-compact"
              onClick={() => onSelectCountry(item)}
            >
              <div className="rank">{index + 1}</div>
              <div className="trend-details">
                <div className="country-name">{item.flag} {item.country}</div>
                <div className="pop-sub">{item.population.toLocaleString()}</div>
              </div>
              <div className="pct-change green-text">
                +{item.fiveYearChangePct}%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Box 2: Top Losers */}
      <div className="trend-box-horizontal">
        <div className="box-header">
          <div className="box-title" style={{ color: '#ef4444' }}>
            <TrendingDown size={14} /> MIGRATION SHIFTS / DECLINE
          </div>
          <span className="box-badge">DECLINE</span>
        </div>
        <div className="trend-grid-horizontal">
          {TOP_LOSERS.map((item, index) => (
            <div 
              key={item.id} 
              className="trend-item-compact"
              onClick={() => onSelectCountry(item)}
            >
              <div className="rank">{index + 1}</div>
              <div className="trend-details">
                <div className="country-name">{item.country}</div>
                <div className="pop-sub">{item.population.toLocaleString()}</div>
              </div>
              <div className="pct-change red-text">
                {item.fiveYearChangePct}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
