import React from 'react';
import Accordion from '../Accordion';
import { afterData } from '../../assets/after-content';

export default function After() {
  return (
    <div className="page-content">
      <h1>→ After</h1>
      <div className="accordion">
        {afterData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
}
