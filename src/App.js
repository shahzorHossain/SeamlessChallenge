import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
    const firstName = json['identifier'][0]['name'][0]['given'];
    const lastName = json['identifier'][0]['name'][0]['family'];
    const patientName = firstName + ' ' + lastName;
    const organization =
      json['identifier'][0]['managingOrganization']['display'];
    const gender = json['identifier'][0]['gender'];
    const conditionsList = json['identifier'][0]['conditions'];
    const count = conditionsList.length;
    const conditions = conditionsList.map(p => <li>{p}</li>);

    return (
      <div>
        {/* <pre>{JSON.stringify(json, null, 2)}</pre> */}
        <div>
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
      </div>
    );
  }
}

export default App;
