import React, { Component } from "react";
import axios from "axios";
import { Table, Spinner } from "react-bootstrap";
import TableRow from "../TableRow";

class EmployeeTable extends Component {
  state = {
    isLoaded: false,
    users: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log("response", response.data);
        this.setState({ isLoaded: true, users: response.data });
      })
      .catch((err) => console.error(err));
  }

  render() {
    if (this.state.isLoaded) {
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
              {this.state.users.map((user) => {
                return (
                  <TableRow id={user.id} name={user.name} email={user.email} phone={user.phone}/>
                );
              })}
            </tbody>
          </Table>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Employee Directory</h1>
          <div className="mt-5 text-center">
            <Spinner animation="border" />
          </div>
        </div>
      );
    }
  }
}

export default EmployeeTable;
