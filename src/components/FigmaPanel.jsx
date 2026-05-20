import React from 'react';

export default function FigmaPanel({
  tint,
  onTintChange,
  fontWeight,
  onFontWeightChange,
  showCredentials,
  onShowCredentialsChange,
  darkMode,
  onDarkModeChange
}) {
  return (
    <div className="figma-properties-panel">
      <div className="figma-panel-header">
        <span className="figma-panel-title">Component Properties</span>
        <div className="figma-panel-tabs">
          <span className="figma-tab active">Design</span>
          <span className="figma-tab">Prototype</span>
        </div>
      </div>
      
      <div className="figma-panel-section">
        <div className="figma-section-title">Component Styling</div>
        <div className="figma-row">
          <span className="figma-label">Highlight Tint</span>
          <select 
            className="figma-select" 
            id="figma-color-tint"
            value={tint}
            onChange={(e) => onTintChange(e.target.value)}
          >
            <option value="var(--sage-green)">Sage Green</option>
            <option value="var(--lavender)">Lilac Lavender</option>
            <option value="var(--rust-red)">Rust Red</option>
          </select>
        </div>
        <div className="figma-row">
          <span className="figma-label">Font Weight</span>
          <select 
            className="figma-select" 
            id="figma-font-weight"
            value={fontWeight}
            onChange={(e) => onFontWeightChange(e.target.value)}
          >
            <option value="normal">Normal (400)</option>
            <option value="bold">Bold (700)</option>
            <option value="800">Black (800)</option>
          </select>
        </div>
      </div>

      <div className="figma-panel-section">
        <div className="figma-section-title">Component Switches</div>
        <div className="figma-row">
          <span className="figma-label">Show Credentials</span>
          <div>
            <input 
              type="checkbox" 
              id="figma-credentials-switch" 
              className="figma-switch-input"
              checked={showCredentials}
              onChange={(e) => onShowCredentialsChange(e.target.checked)}
            />
            <label htmlFor="figma-credentials-switch" className="figma-switch-label"></label>
          </div>
        </div>
        <div className="figma-row">
          <span className="figma-label">Dark Mode Simulation</span>
          <div>
            <input 
              type="checkbox" 
              id="figma-dark-switch" 
              className="figma-switch-input"
              checked={darkMode}
              onChange={(e) => onDarkModeChange(e.target.checked)}
            />
            <label htmlFor="figma-dark-switch" className="figma-switch-label"></label>
          </div>
        </div>
      </div>
    </div>
  );
}
