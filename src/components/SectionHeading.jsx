import React from 'react';

const SectionHeading = ({ title, subtitle, id }) => {
  return (
    <div className="mb-12" id={id}>
      {subtitle && (
        <span className="inline-block text-accent-DEFAULT text-sm font-semibold tracking-wider uppercase mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
