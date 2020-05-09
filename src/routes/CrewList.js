import React, { Component } from 'react';
import OneCrew from '../component/OneCrew';

function CrewList({ data, match }) {
    var i = 0;
    while (i < data.length) {
        if (data[i].crew_nav === match.params.crew_nav) {
            return data[i].crew_list.map((crew) => (
                <OneCrew key={crew.id} id={crew.id} title={crew.title} kind={crew.kind} poster={crew.poster}></OneCrew>
            ));
            break;
        }
        i = i + 1;
    }
}

export default CrewList;
