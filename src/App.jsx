import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const dictionary = [
  'einfach - просто',
  'hauptstadt - столица',
  'kannst - может',
];

export const App = () => {


  return (
    <div className="section content">
      <ul>
        {dictionary.map(word => (
          <li key={word}>
            {word}
          </li>
        ))}
      </ul>
    </div>
  );
};
