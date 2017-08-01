import React from 'react';
import ReactDOM from 'react-dom';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.updateTotal = this.updateTotal.bind(this);

        this.state = {
            total: 0
        };
    }

    updateTotal(amount) {
        this.setState({
            total: this.state.total + amount
        });
    }

    render() {
        let menuItems = this.props.items.map((item, index) => 
            <MenuItem key={index} {...item} updateTotal={this.updateTotal} />
        );

        return (
            <div>
                <div className="menu">
                    {menuItems}
                </div>
                <div>Total: ${this.state.total}</div>
            </div>
        );
    }
}

class MenuItem extends React.Component {
    constructor(props) {
        super(props);

        this.clickHandler = this.clickHandler.bind(this);

        this.state = {
            active: 0
        };
    }

    clickHandler() {
        let active = !this.state.active;

        this.props.updateTotal(active ? this.props.price : -this.props.price);

        this.setState({
            active
        });
    }

    render() {
        let className = 'menu-item';

        if (this.state.active) {
            className += ' active';
        }

        return (
            <div className={className} onClick={this.clickHandler}>
                {this.props.name} (${this.props.price})
            </div>
        );
    }
}

let menuItems = [{
    name: 'Sandwich',
    price: 4
}, {
    name: 'Chips',
    price: 1
}, {
    name: 'Drink',
    price: 2
}];

ReactDOM.render(
    <Menu items={menuItems} />,
    document.getElementById('app')
);