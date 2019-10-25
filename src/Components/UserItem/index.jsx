import React, { Component } from 'react'

export default class UserItem extends Component {
    render() {
        const { user } = this.props;
        return (
            <tr>
                <td>{user.maND}</td>
                <td>{user.hoTen}</td>
                <td>{user.email}</td>
                <td>{user.soDT}</td>
                <td>
                    <button className="btn btn-danger mr-2" onClick={this.props.onDeleteUser}>Xoá</button>
                    <button className="btn btn-warning">Sửa</button>
                </td>
            </tr>
        )
    }
}
