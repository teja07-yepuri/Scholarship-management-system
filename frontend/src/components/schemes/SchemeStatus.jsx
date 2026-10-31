import React from 'react';
import Badge from '../common/Badge';

const SchemeStatus = ({ status = 'Active' }) => {
  if (status === 'Active') {
    return (
      <Badge variant="success">
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
        Active
      </Badge>
    );
  }

  if (status === 'Upcoming') {
    return (
      <Badge variant="warning">
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
        Upcoming
      </Badge>
    );
  }

  return (
    <Badge variant="default">
      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
      {status}
    </Badge>
  );
};

export default SchemeStatus;
