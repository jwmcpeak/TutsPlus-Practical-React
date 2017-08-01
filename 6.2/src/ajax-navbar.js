import React from 'react';
import Navbar from './navbar';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetch(this.props.url)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    data: json
                });
            });
    }

    render() {
        return (
            <Navbar items={this.state.data} />
        );
    }
}