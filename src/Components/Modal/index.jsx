import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class ModalUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            maND: "",
            hoTen: "",
            email: "",
            soDT: ""
        }
        // this.toggle = this.toggle.bind(this);
    }

    // toggle() {
    //     this.setState({
    //         isOpen : true
    //     });
    // }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onCreateUser = () => {
        const user = {
            maND: this.state.maND,
            hoTen: this.state.hoTen,
            email: this.state.email,
            soDT: this.state.soDT
        }
        this.props.getUser1(user);
    }

    render() {
        
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>Thêm người dùng</Button>
                <Modal
                    isOpen={this.state.isOpen}
                    toggle={this.toggle}
                >
                    <ModalHeader
                        toggle={this.toggle}
                    >Thêm người dùng</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="maND">Mã người dùng: </Label>
                            <Input type="text" name="maND" value={this.state.maND} id="maND" placeholder="Nhập mã người dùng" onChange={this.onChange} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="hoTen">Họ tên: </Label>
                            <Input type="text" name="hoTen" value={this.state.hoTen} id="hoTen" placeholder="Nhập tên người dùng" onChange={this.onChange} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="email">Email người dùng: </Label>
                            <Input type="email" name="email" value={this.state.email} id="email" placeholder="Nhập email người dùng" onChange={this.onChange} />
                        </FormGroup>
                        
                        <FormGroup>
                            <Label for="soDT">Số điện thoại người dùng: </Label>
                            <Input type="number" name="soDT" value={this.state.soDT} id="soDT" placeholder="Nhập số điện thoại người dùng" onChange={this.onChange} />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => {
                            this.onCreateUser();
                            this.toggle();
                        }}>Thêm người dùng</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Đóng</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
