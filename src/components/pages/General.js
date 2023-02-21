import React from 'react';
import Accordion from '../Accordion';
import { generalData } from '../../assets/general-content';

export default function General() {
  return (
    <div className="page-content">
      <h1>→ General</h1>
      <div className="accordion">
        {generalData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
}
