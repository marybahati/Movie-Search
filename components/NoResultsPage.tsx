import React from 'react';
import { BsExclamationTriangleFill } from 'react-icons/bs';

const NoResultsPage = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
      <BsExclamationTriangleFill size={72} color="orange" className="mb-4" />
        <h2 className="mb-3">No Results Found</h2>
        <p className="text-muted">Sorry, we couldn't find any matching results.</p>
      </div>
    </div>
  );
};

export default NoResultsPage;
