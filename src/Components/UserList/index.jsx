import React, { Component } from 'react'
import UserItem from "../UserItem"
import { Table } from 'reactstrap';

export default class UserList extends Component {
    render() {
        let userItem = this.props.userList.map((user) => {
            return <UserItem user={user} key={user.maND} onDeleteUser={this.props.onDeleteUser}/>
        })
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Mã Người Dùng</th>
                        <th>Họ Tên</th>
                        <th>Email</th>
                        <th>Số Điện Thoại</th>
                        <th>Thao Tác</th>
                    </tr>
                </thead>
                <tbody>
                    {userItem}
                </tbody>
            </Table>
        )
    }
}
