import React from 'react';
import Accordion from '../Accordion';
import { beforeData } from '../../assets/before-content';

export default function Before() {
  return (
    <div className="page-content">
      <h1>→ Before</h1>
      <div className="accordion">
        {beforeData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
}
