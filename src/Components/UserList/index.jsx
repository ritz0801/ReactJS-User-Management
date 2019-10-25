import React, { Component } from 'react'
import UserItem from "../UserItem"
import { Table } from 'reactstrap';

export default class UserList extends Component {
    render() {
        const { userList, onDeleteUser } = this.props;
        let userItem = userList.map((user) => {
            return <UserItem user={user} key={user.maND} onDeleteUser={() => {
                onDeleteUser(user.maND);
            }}/>
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
