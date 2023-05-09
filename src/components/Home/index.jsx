import React from 'react';
import './styles.css';

export default function Index() {
  return (
    <div className="center">
      <div className="container">
        <div className="box total-device">
          Total Device <br />
          1000
        </div>
        <div className="box total-assets">
          Total Assets <br />
          1000
        </div>
        <div className="box available">
          In Stock <br />
          1000
        </div>
        <div className="box used">
          In Use <br />
          1000
        </div>
        <div className="box repairing">
          Missing <br />
          1000
        </div>
        <div className="box broken">
          Retired (or consumed) <br />
          1000
        </div>
      </div>
    </div>
  );
}
