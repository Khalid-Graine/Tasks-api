import React from 'react';

export default function Message({ obj }) {
  let backgroundColor;
  if (obj.type === 'success') {
    backgroundColor = 'bg-green-100 text-green-600';
  } else if (obj.type === 'error') {
    backgroundColor = 'bg-red-100 text-red-600';
  }

  return (
    <div>
      {obj.show && (
        <div className={`text-center ${backgroundColor}`}>
          {obj.text}
        </div>
      )}
    </div>
  );
}
