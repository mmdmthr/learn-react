import React from 'react';
import ReactDOM from 'react-dom/client';

const myElement = (
    <table>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </table>
  );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);