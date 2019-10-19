import React, { Component } from 'react'

export default class UserItem extends Component {
    render() {
        return (
            <tbody>
                {
                    this.props.userList.map((user) => {
                        return (
                            <tr key={user.maND}>
                                <td>{user.maND}</td>
                                <td>{user.hoTen}</td>
                                <td>{user.email}</td>
                                <td>{user.soDT}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        )
    }
}
