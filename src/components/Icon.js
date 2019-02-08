import React from 'react';

const Icon = ({ iconName, color }) => (
  <i className={`fa fa-${iconName} text-${color}`} />
);

export default Icon;
