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
    const identifier = json['identifier'][0];
    const name = identifier['name'][0];

    // for error checking we've set up custom names
    // in case there are missing information in the json
    const firstName =
      name['given'] !== '' ? name['given'] : 'undefined first name';
    const lastName =
      name['family'] !== '' ? name['family'] : 'undefined last name';
    const patientName = firstName + ' ' + lastName;
    const organization =
      identifier['managingOrganization']['display'] !== ''
        ? identifier['managingOrganization']['display']
        : 'undefined organization name';
    const gender =
      identifier['gender'] !== '' ? identifier['gender'] : 'undefined gender';
    const conditionsList = identifier['conditions'];
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
