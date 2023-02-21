import React from 'react';
import Accordion from '../Accordion';
import { duringData } from '../../assets/during-content';

export default function During() {
  return (
    <div className="page-content">
      <h1>→ During</h1>
      <div className="accordion">
        {duringData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
}
