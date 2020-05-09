import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './CrewView.css';
class CrewView extends Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/crew/체육분과');
        }
    }
    render() {
        const { location } = this.props;
        console.log(location.state);
        if (location.state) {
            return (
                <Container fluid="lg" className="pt-3">
                    <Row>
                        <Col>
                            <div className="view">
                                <div className="crew_view">
                                    <div>
                                        <img src={location.state.poster} alt={location.state.title} />
                                    </div>
                                    <div className="crew_detail">
                                        <h1>{location.state.title}</h1>
                                        <h5>{location.state.kind}</h5>
                                        <p></p>
                                        <p>
                                            안녕하세요! 배드민턴동아리 TNT입니다🙇‍♂️ 저희 TNT에서는 아직 계속 신입분들을 계속 받고있으니까
                                            부담없이 지원해주시면 감사하겠습니다! 또 이번에 회장님과 임원들과 같이 기본 레슨을 진행할
                                            예정입니다! 임원이 다 선수가 아니기때문에 시합을 할 수 있을만큼 저희가 노력해서 알려드릴
                                            예정입니다:) 못치셔두 걱정하지마시고 동아리 신청 부탁드려요 ㅎ.ㅎ 코로나 조심하시고 대면수업때
                                            건강한 모습으로 만나요☺ 궁금하신점은 쪽지 부탁드릴게요!!!
                                        </p>
                                        <p>
                                            Q.1 동아리는 언제언제 활동하나요? A.1 저희 TNT는 지금 정해져있는 대로라면 매주 월,수 6시~9시까지
                                            활동중이며 참여는 자율참여입니다! Q.2 동아리 활동할때 필요한게 뭐가있나요? A.2 개인
                                            배드민턴채,셔틀콕,운동화또는 배드민턴화를 챙겨주시면 됩니다! 셔틀콕은 주기적으로 공동구매할
                                            예정입니다😁
                                        </p>
                                    </div>
                                </div>
                                <div className="crew_activity"> 동아리 활동 내용..</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            );
        } else {
            return null;
        }
    }
}

export default CrewView;
