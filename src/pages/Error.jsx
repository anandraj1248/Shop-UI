import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <main>
    <div className='pg-header'>
      <div className='container'>
      Error 404
    </div>
    </div>
    <div className='container content'>
       <p>Page not found.......</p>
       <Link to="/" className="btn btn-primary">Go Back to Homepage</Link>
    </div>
    </main>
  )
}

export default Error
