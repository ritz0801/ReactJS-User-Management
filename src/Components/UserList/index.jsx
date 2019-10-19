import React, { Component } from 'react'
import UserItem from "../UserItem"
import { Table } from 'reactstrap';

export default class UserList extends Component {
    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Mã Người Dùng</th>
                        <th>Họ Tên</th>
                        <th>Email</th>
                        <th>Số Điện Thoại</th>
                    </tr>
                </thead>
                <UserItem userList={this.props.userList} />
            </Table>
        )
    }
}
