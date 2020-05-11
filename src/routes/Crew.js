import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CrewList from './CrewList.js';
import CrewNav from '../component/CrewNav.js';
import SelectCollage from '../component/SelectCollage.js';
import './Crew.css';
import { Route } from 'react-router-dom';

const collage = { name: '대전대학교', logo: 'logo/대전대_logo.jpg' };
const crews = [
    {
        id: 1,
        crew_nav: '체육분과',
        crew_list: [
            {
                id: 1,
                poster: '동아리/1.png',
                title: 'TNT',
                kind: '배드민턴',
                desc: `
            안녕하세요! 배드민턴동아리 TNT입니다🙇‍♂️ 저희 TNT에서는 아직 계속 신입분들을 계속 받고있으니까
            부담없이 지원해주시면 감사하겠습니다! 또 이번에 회장님과 임원들과 같이 기본 레슨을 진행할
            예정입니다! 임원이 다 선수가 아니기때문에 시합을 할 수 있을만큼 저희가 노력해서 알려드릴
            예정입니다:) 못치셔두 걱정하지마시고 동아리 신청 부탁드려요 ㅎ.ㅎ 코로나 조심하시고 대면수업때
            건강한 모습으로 만나요☺ 궁금하신점은 쪽지 부탁드릴게요!!!
            
            Q.1 동아리는 언제언제 활동하나요? A.1 저희 TNT는 지금 정해져있는 대로라면 매주 월,수 6시~9시까지
            활동중이며 참여는 자율참여입니다! Q.2 동아리 활동할때 필요한게 뭐가있나요? A.2 개인
            배드민턴채,셔틀콕,운동화또는 배드민턴화를 챙겨주시면 됩니다! 셔틀콕은 주기적으로 공동구매할
            예정입니다😁`,
            },
            { id: 2, poster: 'image/1.jpg', title: '체육2', kind: '족구', desc: '동아리 설명.. 소개...' },
            { id: 3, poster: 'image/1.jpg', title: '체육3', kind: '볼링', desc: '동아리 설명.. 소개...' },
            { id: 4, poster: 'image/1.jpg', title: '체육4', kind: '농구', desc: '동아리 설명.. 소개...' },
            { id: 5, poster: 'image/1.jpg', title: '체육5', kind: '족구', desc: '동아리 설명.. 소개...' },
            { id: 6, poster: 'image/1.jpg', title: '체육6', kind: '볼링', desc: '동아리 설명.. 소개...' },
            { id: 7, poster: 'image/1.jpg', title: '체육7', kind: '농구', desc: '동아리 설명.. 소개...' },
            { id: 8, poster: 'image/1.jpg', title: '체육8', kind: '족구', desc: '동아리 설명.. 소개...' },
            { id: 9, poster: 'image/1.jpg', title: '체육9', kind: '볼링', desc: '동아리 설명.. 소개...' },
        ],
    },
    {
        id: 2,
        crew_nav: '봉사분과',
        crew_list: [
            { id: 2, poster: 'image/2.jpg', title: '봉사2', kind: '봉사', desc: '동아리 설명.. 소개...' },
            { id: 1, poster: 'image/2.jpg', title: '봉사1', kind: '봉사', desc: '동아리 설명.. 소개...' },
            { id: 3, poster: 'image/2.jpg', title: '봉사3', kind: '봉사', desc: '동아리 설명.. 소개...' },
            { id: 4, poster: 'image/2.jpg', title: '봉사4', kind: '봉사', desc: '동아리 설명.. 소개...' },
            { id: 5, poster: 'image/2.jpg', title: '봉사5', kind: '봉사', desc: '동아리 설명.. 소개...' },
            { id: 6, poster: 'image/2.jpg', title: '봉사6', kind: '봉사', desc: '동아리 설명.. 소개...' },
            { id: 7, poster: 'image/2.jpg', title: '봉사7', kind: '봉사', desc: '동아리 설명.. 소개...' },
            { id: 8, poster: 'image/2.jpg', title: '봉사8', kind: '봉사', desc: '동아리 설명.. 소개...' },
            { id: 9, poster: 'image/2.jpg', title: '봉사9', kind: '봉사', desc: '동아리 설명.. 소개...' },
        ],
    },
    {
        id: 3,
        crew_nav: '학술분과',
        crew_list: [
            { id: 1, poster: 'image/3.jpg', title: '학술1', kind: '학술', desc: '동아리 설명.. 소개...' },
            { id: 2, poster: 'image/3.jpg', title: '학술2', kind: '학술', desc: '동아리 설명.. 소개...' },
            { id: 3, poster: 'image/3.jpg', title: '학술3', kind: '학술', desc: '동아리 설명.. 소개...' },
            { id: 4, poster: 'image/3.jpg', title: '학술4', kind: '학술', desc: '동아리 설명.. 소개...' },
            { id: 5, poster: 'image/3.jpg', title: '학술5', kind: '학술', desc: '동아리 설명.. 소개...' },
            { id: 6, poster: 'image/3.jpg', title: '학술6', kind: '학술', desc: '동아리 설명.. 소개...' },
            { id: 7, poster: 'image/3.jpg', title: '학술7', kind: '학술', desc: '동아리 설명.. 소개...' },
            { id: 8, poster: 'image/3.jpg', title: '학술8', kind: '학술', desc: '동아리 설명.. 소개...' },
            { id: 9, poster: 'image/3.jpg', title: '학술9', kind: '학술', desc: '동아리 설명.. 소개...' },
        ],
    },
    {
        id: 4,
        crew_nav: '교양분과',
        crew_list: [
            { id: 1, poster: 'image/4.jpg', title: '교양1', kind: '교양', desc: '동아리 설명.. 소개...' },
            { id: 2, poster: 'image/4.jpg', title: '교양2', kind: '교양', desc: '동아리 설명.. 소개...' },
            { id: 3, poster: 'image/4.jpg', title: '교양3', kind: '교양', desc: '동아리 설명.. 소개...' },
            { id: 4, poster: 'image/4.jpg', title: '교양4', kind: '교양', desc: '동아리 설명.. 소개...' },
            { id: 5, poster: 'image/4.jpg', title: '교양5', kind: '교양', desc: '동아리 설명.. 소개...' },
            { id: 6, poster: 'image/4.jpg', title: '교양6', kind: '교양', desc: '동아리 설명.. 소개...' },
            { id: 7, poster: 'image/4.jpg', title: '교양7', kind: '교양', desc: '동아리 설명.. 소개...' },
            { id: 8, poster: 'image/4.jpg', title: '교양8', kind: '교양', desc: '동아리 설명.. 소개...' },
            { id: 9, poster: 'image/4.jpg', title: '교양9', kind: '교양', desc: '동아리 설명.. 소개...' },
        ],
    },
    {
        id: 5,
        crew_nav: '문화분과',
        crew_list: [
            { id: 1, poster: 'image/2.jpg', title: '문화1', kind: '문화', desc: '동아리 설명.. 소개...' },
            { id: 2, poster: 'image/2.jpg', title: '문화2', kind: '문화', desc: '동아리 설명.. 소개...' },
            { id: 3, poster: 'image/2.jpg', title: '문화3', kind: '문화', desc: '동아리 설명.. 소개...' },
            { id: 4, poster: 'image/2.jpg', title: '문화4', kind: '문화', desc: '동아리 설명.. 소개...' },
            { id: 5, poster: 'image/2.jpg', title: '문화5', kind: '문화', desc: '동아리 설명.. 소개...' },
            { id: 6, poster: 'image/2.jpg', title: '문화6', kind: '문화', desc: '동아리 설명.. 소개...' },
            { id: 7, poster: 'image/2.jpg', title: '문화7', kind: '문화', desc: '동아리 설명.. 소개...' },
            { id: 8, poster: 'image/2.jpg', title: '문화8', kind: '문화', desc: '동아리 설명.. 소개...' },
            { id: 9, poster: 'image/2.jpg', title: '문화9', kind: '문화', desc: '동아리 설명.. 소개...' },
        ],
    },
    {
        id: 6,
        crew_nav: '종교분과',
        crew_list: [
            { id: 1, poster: 'image/2.jpg', title: '종교1', kind: '종교', desc: '동아리 설명.. 소개...' },
            { id: 2, poster: 'image/2.jpg', title: '종교2', kind: '종교', desc: '동아리 설명.. 소개...' },
            { id: 3, poster: 'image/2.jpg', title: '종교3', kind: '종교', desc: '동아리 설명.. 소개...' },
            { id: 4, poster: 'image/2.jpg', title: '종교4', kind: '종교', desc: '동아리 설명.. 소개...' },
            { id: 5, poster: 'image/2.jpg', title: '종교5', kind: '종교', desc: '동아리 설명.. 소개...' },
            { id: 6, poster: 'image/2.jpg', title: '종교6', kind: '종교', desc: '동아리 설명.. 소개...' },
            { id: 7, poster: 'image/2.jpg', title: '종교7', kind: '종교', desc: '동아리 설명.. 소개...' },
            { id: 8, poster: 'image/2.jpg', title: '종교8', kind: '종교', desc: '동아리 설명.. 소개...' },
            { id: 9, poster: 'image/2.jpg', title: '종교9', kind: '종교', desc: '동아리 설명.. 소개...' },
        ],
    },
    {
        id: 7,
        crew_nav: '문예분과',
        crew_list: [
            { id: 1, poster: 'image/2.jpg', title: '문예1', kind: '문예' },
            { id: 2, poster: 'image/2.jpg', title: '문예2', kind: '문예' },
            { id: 3, poster: 'image/2.jpg', title: '문예3', kind: '문예' },
            { id: 4, poster: 'image/2.jpg', title: '문예4', kind: '문예' },
            { id: 5, poster: 'image/2.jpg', title: '문예5', kind: '문예' },
            { id: 6, poster: 'image/2.jpg', title: '문예6', kind: '문예' },
            { id: 7, poster: 'image/2.jpg', title: '문예7', kind: '문예' },
            { id: 8, poster: 'image/2.jpg', title: '문예8', kind: '문예' },
            { id: 9, poster: 'image/2.jpg', title: '문예9', kind: '문예' },
        ],
    },
];
class Crew extends Component {
    render() {
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
