import React, { Component } from 'react'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyWord: ""
        }
    }

    // onSearch = () => {
    //     this.props.onSearchUser(this.state.keyWord);
    // }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            this.props.onSearchUser(this.state.keyWord);
        })
    }

    render() {
        return (
            <InputGroup className="my-3">
                <Input type="text" name="keyWord" value={this.state.keyWord} id="keyWord" placeholder="username" onChange={this.onChange}/>
                <InputGroupAddon addonType="append">
                    <InputGroupText>Search</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
        )
    }
}
