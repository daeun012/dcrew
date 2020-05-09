import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CrewList from './CrewList.js';
import CrewNav from '../component/CrewNav.js';
import SelectCollage from '../component/SelectCollage.js';
import './Crew.css';
import { Route } from 'react-router-dom';

class Crew extends Component {
    state = {
        selected_nav_id: 1,
        collage: { name: '대전대학교', logo: 'logo/대전대_logo.jpg' },
        crews: [
            {
                id: 1,
                crew_nav: '체육분과',
                crew_list: [
                    { id: 1, poster: 'image/1.jpg', title: '체육1', kind: '농구' },
                    { id: 2, poster: 'image/1.jpg', title: '체육2', kind: '족구' },
                    { id: 3, poster: 'image/1.jpg', title: '체육3', kind: '볼링' },
                    { id: 4, poster: 'image/1.jpg', title: '체육4', kind: '농구' },
                    { id: 5, poster: 'image/1.jpg', title: '체육5', kind: '족구' },
                    { id: 6, poster: 'image/1.jpg', title: '체육6', kind: '볼링' },
                    { id: 7, poster: 'image/1.jpg', title: '체육7', kind: '농구' },
                    { id: 8, poster: 'image/1.jpg', title: '체육8', kind: '족구' },
                    { id: 9, poster: 'image/1.jpg', title: '체육9', kind: '볼링' },
                ],
            },
            {
                id: 2,
                crew_nav: '봉사분과',
                crew_list: [
                    { id: 1, poster: 'image/2.jpg', title: '슈퍼스타', kind: '봉사' },
                    { id: 2, poster: 'image/2.jpg', title: '슈팅스타', kind: '봉사' },
                    { id: 3, poster: 'image/2.jpg', title: '슈퍼스타', kind: '봉사' },
                    { id: 4, poster: 'image/2.jpg', title: '슈퍼스타', kind: '봉사' },
                    { id: 5, poster: 'image/2.jpg', title: '슈팅스타', kind: '봉사' },
                    { id: 6, poster: 'image/2.jpg', title: '슈퍼스타', kind: '봉사' },
                    { id: 7, poster: 'image/2.jpg', title: '슈퍼스타', kind: '봉사' },
                    { id: 8, poster: 'image/2.jpg', title: '슈팅스타', kind: '봉사' },
                    { id: 9, poster: 'image/2.jpg', title: '슈퍼스타', kind: '봉사' },
                ],
            },
            {
                id: 3,
                crew_nav: '학술분과',
                crew_list: [
                    { id: 1, poster: 'image/3.jpg', title: '슈퍼스타', kind: '학술' },
                    { id: 2, poster: 'image/3.jpg', title: '슈팅스타', kind: '학술' },
                    { id: 3, poster: 'image/3.jpg', title: '슈퍼스타', kind: '학술' },
                    { id: 4, poster: 'image/3.jpg', title: '슈퍼스타', kind: '학술' },
                    { id: 5, poster: 'image/3.jpg', title: '슈팅스타', kind: '학술' },
                    { id: 6, poster: 'image/3.jpg', title: '슈퍼스타', kind: '학술' },
                    { id: 7, poster: 'image/3.jpg', title: '슈퍼스타', kind: '학술' },
                    { id: 8, poster: 'image/3.jpg', title: '슈팅스타', kind: '학술' },
                    { id: 9, poster: 'image/3.jpg', title: '슈퍼스타', kind: '학술' },
                ],
            },
            {
                id: 4,
                crew_nav: '교양분과',
                crew_list: [
                    { id: 1, poster: 'image/4.jpg', title: '슈퍼스타', kind: '교양' },
                    { id: 2, poster: 'image/4.jpg', title: '슈팅스타', kind: '교양' },
                    { id: 3, poster: 'image/4.jpg', title: '슈퍼스타', kind: '교양' },
                    { id: 4, poster: 'image/4.jpg', title: '슈퍼스타', kind: '교양' },
                    { id: 5, poster: 'image/4.jpg', title: '슈팅스타', kind: '교양' },
                    { id: 6, poster: 'image/4.jpg', title: '슈퍼스타', kind: '교양' },
                    { id: 7, poster: 'image/4.jpg', title: '슈퍼스타', kind: '교양' },
                    { id: 8, poster: 'image/4.jpg', title: '슈팅스타', kind: '교양' },
                    { id: 9, poster: 'image/4.jpg', title: '슈퍼스타', kind: '교양' },
                ],
            },
            {
                id: 5,
                crew_nav: '문화분과',
                crew_list: [
                    { id: 1, poster: 'image/2.jpg', title: '슈퍼스타', kind: '문화' },
                    { id: 2, poster: 'image/2.jpg', title: '슈팅스타', kind: '문화' },
                    { id: 3, poster: 'image/2.jpg', title: '슈퍼스타', kind: '문화' },
                    { id: 4, poster: 'image/2.jpg', title: '슈퍼스타', kind: '문화' },
                    { id: 5, poster: 'image/2.jpg', title: '슈팅스타', kind: '문화' },
                    { id: 6, poster: 'image/2.jpg', title: '슈퍼스타', kind: '문화' },
                    { id: 7, poster: 'image/2.jpg', title: '슈퍼스타', kind: '문화' },
                    { id: 8, poster: 'image/2.jpg', title: '슈팅스타', kind: '문화' },
                    { id: 9, poster: 'image/2.jpg', title: '슈퍼스타', kind: '문화' },
                ],
            },
            {
                id: 6,
                crew_nav: '종교분과',
                crew_list: [
                    { id: 1, poster: 'image/2.jpg', title: '슈퍼스타', kind: '문화' },
                    { id: 2, poster: 'image/2.jpg', title: '슈팅스타', kind: '문화' },
                    { id: 3, poster: 'image/2.jpg', title: '슈퍼스타', kind: '문화' },
                    { id: 4, poster: 'image/2.jpg', title: '슈퍼스타', kind: '문화' },
                    { id: 5, poster: 'image/2.jpg', title: '슈팅스타', kind: '문화' },
                    { id: 6, poster: 'image/2.jpg', title: '슈퍼스타', kind: '문화' },
                    { id: 7, poster: 'image/2.jpg', title: '슈퍼스타', kind: '문화' },
                    { id: 8, poster: 'image/2.jpg', title: '슈팅스타', kind: '문화' },
                    { id: 9, poster: 'image/2.jpg', title: '슈퍼스타', kind: '문화' },
                ],
            },
            {
                id: 7,
                crew_nav: '문예분과',
                crew_list: [
                    { id: 1, poster: 'image/2.jpg', title: '슈퍼스타', kind: '문화' },
                    { id: 2, poster: 'image/2.jpg', title: '슈팅스타', kind: '문화' },
                    { id: 3, poster: 'image/2.jpg', title: '슈퍼스타', kind: '문화' },
                    { id: 4, poster: 'image/2.jpg', title: '슈퍼스타', kind: '문화' },
                    { id: 5, poster: 'image/2.jpg', title: '슈팅스타', kind: '문화' },
                    { id: 6, poster: 'image/2.jpg', title: '슈퍼스타', kind: '문화' },
                    { id: 7, poster: 'image/2.jpg', title: '슈퍼스타', kind: '문화' },
                    { id: 8, poster: 'image/2.jpg', title: '슈팅스타', kind: '문화' },
                    { id: 9, poster: 'image/2.jpg', title: '슈퍼스타', kind: '문화' },
                ],
            },
        ],
    };
    render() {
        const { collage, crews } = this.state;

        return (
            <Container bsPrefix="crew_container">
                <Row bsPrefix="crew_row">
                    <Col bsPrefix="crew_col_1">
                        <SelectCollage collage={collage.name} logo={collage.logo}></SelectCollage>
                        <CrewNav data={crews}></CrewNav>
                    </Col>
                    <Col bsPrefix="crew_col_2">
                        <Route path="/crew/:crew_nav" render={(props) => <CrewList data={crews} {...props} />} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Crew;
