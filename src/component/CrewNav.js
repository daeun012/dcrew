import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './CrewNav.css';

class CrewNav extends Component {
    render() {
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length) {
            lists.push(
                <NavItem className="nav-item" key={data[i].id}>
                    <NavLink
                        className="nav-link"
                        to={{
                            pathname: `/crew/${data[i].crew_nav}`,
                            state: {
                                crew_list: data[i].crew_list.map((crew) => crew),
                            },
                        }}
                    >
                        {data[i].crew_nav}
                    </NavLink>
                </NavItem>
            );
            i = i + 1;
        }
        return (
            <div className="crew_nav">
                <Nav fill variant="tabs">
                    {lists}
                </Nav>
            </div>
        );
    }
}

export default CrewNav;
