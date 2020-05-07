import React, { Component } from 'react';
import OneCrew from '../component/OneCrew';

class CrewList extends Component {
    /*     componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/crew');
        }
    } */
    render() {
        const { location } = this.props;
        console.log(location.state);
        if (location.state) {
            return location.state.crew_list.map((crew) => (
                <OneCrew key={crew.id} id={crew.id} title={crew.title} kind={crew.kind} poster={crew.poster}></OneCrew>
            ));
        } else {
            return null;
        }
    }
}

export default CrewList;
