import React, { Component } from 'react';
import './SelectCollage.css';

class SelectCollage extends Component {
    render() {
        return (
            <div className="selected_collage">
                <img src={this.props.logo} alt={this.props.collage} title={this.props.collage} />
                <h4 style={{ fontWeight: 'bold', marginTop: '0.8rem' }}>{this.props.collage}</h4>
            </div>
        );
    }
}

export default SelectCollage;
