import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import './OneCrew.css';

class OneCrew extends Component {
    render() {
        const { id, title, kind, poster } = this.props;
        return (
            <div className="crew">
                <Link
                    className="my_link"
                    to={{
                        pathname: `/crew/view/${id}`,
                        state: {
                            poster,
                            title,
                            kind,
                        },
                    }}
                >
                    <Image src={poster} alt={title} title={title} />
                    <div className="crew_info">
                        <h5 className="crew_title">{title}</h5>
                        <h6 className="crew_kind text-muted ">{kind}</h6>
                    </div>
                </Link>
            </div>
        );
    }
}

export default OneCrew;
