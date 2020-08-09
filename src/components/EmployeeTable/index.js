import React, { Component } from "react";
import axios from "axios";
import { Table, Spinner } from "react-bootstrap";
import TableRow from "../TableRow";

class EmployeeTable extends Component {
  state = {
    isLoaded: false,
    users: [],
    filter: '',
    sort: '',
    allUsers: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setState({ isLoaded: true, users: response.data, allUsers: response.data });
      })
      .catch((err) => console.error(err));
  }

  handleFilterChange = (event) => {
    const { allUsers } = this.state;

    const filterString = event.target.value.toLowerCase();

    const filteredUsers = allUsers.filter((user) => {
      return user.name.toLowerCase().includes(filterString) || user.email.toLowerCase().includes(filterString);
    })

    this.setState({users: filteredUsers});
  }

  render() {
    const {
      isLoaded,
      users
    } = this.state;

    if (isLoaded) {
      return (
        <div>
          <h1>Employee Directory</h1>
          <label htmlFor="filter">Filter: </label>
          <input id="filter" name="filter" type="text" onChange={this.handleFilterChange}></input>

          <label htmlFor="sort">Sort: </label>
          <select name="sort" id="sort">
            <option value="id">ID</option>
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
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
              {users.map((user) => {
                return (
                  <TableRow
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    phone={user.phone}
                  />
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
