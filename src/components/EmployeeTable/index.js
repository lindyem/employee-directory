import React, { Component } from "react";
import axios from "axios";
import { Table } from 'react-bootstrap';

class EmployeeTable extends Component {
  state = {
    users: []
  };
  
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log('response', response.data);
        this.setState({users: response.data})
      })
      .catch((err) => console.error(err));
  }

  render() {
    console.log('users in render', this.state.users);
    return (
      <div>
        <h1>Employee Directory</h1>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            
          </tbody>
        </Table>
      </div>
    );
  }
}

export default EmployeeTable;
