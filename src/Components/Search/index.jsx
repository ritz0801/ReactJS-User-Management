import React, { Component } from 'react'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

export default class Search extends Component {
    render() {
        return (
            <InputGroup className="my-3">
                <Input placeholder="username" />
                <InputGroupAddon addonType="append">
                    <InputGroupText>Search</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
        )
    }
}
