import React from 'react';

export default function Function({ name, years }) {
  return (
    <p>
        <ul>
            <li>
                {name}
            </li>
            <li>
                ({years})
            </li>
        </ul>
    </p>
  );
}