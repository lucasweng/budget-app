import React from 'react';
// Export a stateless functional component
// description, amount, createdAt

export default ({ description, amount, createdAt }) => (
  <div>
    <li>{description}</li>
    <li>{amount}</li>
    <li>{createdAt}</li>
  </div>
);
