import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { Image } from 'react-bootstrap';
import './CrewList.css';

function Crew({ id, poster, title, kind }) {
    return (
        <div className="crew">
             <Link to={
                    {
                        pathname:`/crew/${id}`,
                        state:{
                           poster,
                           title,
                           kind
                        }

                    }
                }> 
            <Image src={poster} alt={title} title={title} rounded />
            <div className="crew_body">
                <h5 className="crew_title">{title}</h5>
                <h6 className="crew_kind text-muted ">{kind}</h6>
            </div>
            </Link>
        </div>
    );
}

class CrewList extends Component {
    state = {
        crews: [
            { id: 1, poster: 'image/1.jpg', title: '슈퍼스타', kind: '농구' },
            { id: 2, poster: 'image/2.jpg', title: '슈팅스타', kind: '족구' },
            { id: 3, poster: 'image/3.jpg', title: '슈퍼스타', kind: '볼링' },
            { id: 4, poster: 'image/1.jpg', title: '슈퍼스타', kind: '농구' },
            { id: 5, poster: 'image/2.jpg', title: '슈팅스타', kind: '족구' },
            { id: 6, poster: 'image/3.jpg', title: '슈퍼스타', kind: '볼링' },
            { id: 7, poster: 'image/1.jpg', title: '슈퍼스타', kind: '농구' },
            { id: 8, poster: 'image/2.jpg', title: '슈팅스타', kind: '족구' },
            { id: 9, poster: 'image/3.jpg', title: '슈퍼스타', kind: '볼링' },
            { id: 10, poster: 'image/1.jpg', title: '슈퍼스타', kind: '농구' },
            { id: 11, poster: 'image/3.jpg', title: '슈퍼스타', kind: '볼링' },
            { id: 12, poster: 'image/1.jpg', title: '슈퍼스타', kind: '농구' },
        ],
    };
    render() {
        const { crews } = this.state;
        return (
            <div className="crews">
                {crews.map((crew) => (
                    <Crew key={crew.id} id={crew.id} title={crew.title} kind={crew.kind} poster={crew.poster} genres={crew.genres}></Crew>
                ))}
            </div>
        );
    }
}

export default CrewList;
