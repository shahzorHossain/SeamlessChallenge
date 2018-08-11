import React, { Component } from 'react';
import json from './q1.json';

/*
Name of patient: Jane Doe
Organization name: College Hospital
Gender: Female
Number of conditions they have: 2
List of all conditions:
- Epilepsy
- Sleep apnea
*/

class App extends Component {
  render() {
    const name = json['identifier'][0]['name'][0];
    const firstName = name['given'];
    const lastName = name['family'];
    const patientName = firstName + ' ' + lastName;
    const organization =
      json['identifier'][0]['managingOrganization']['display'];
    const gender = json['identifier'][0]['gender'];
    const conditionsList = json['identifier'][0]['conditions'];
    const count = conditionsList.length;
    const conditions = conditionsList.map(p => <li>{p}</li>);

    return (
      <div>
        <div className="list-details">
          <ul>
            <li>Name of patient: {patientName}</li>
            <li>Organization Name: {organization}</li>
            <li>Gender: {gender}</li>
            <li>Number of conditions they have: {count}</li>
            <li>
              List of all conditions:
              <ul>{conditions}</ul>
            </li>
          </ul>
        </div>
        <div className="github-link">
          You can find the the source code{' '}
          <a href="https://github.com/shahzorHossain/SeamlessChallenge">here</a>
        </div>
      </div>
    );
  }
}

export default App;
