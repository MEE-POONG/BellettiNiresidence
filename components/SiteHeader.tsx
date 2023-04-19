import { GiCurledLeaf } from "react-icons/gi";
import { Container, Row, Col } from "react-bootstrap";

const SiteHeader = () => {
    return (
        <header className="site-header d-lg-block d-none">
            <Container>
                <Row>
                    <Col lg={12} xs={12} className="d-flex flex-wrap gold-active">
                        <p className="d-flex mb-0 gold-active">
                            <GiCurledLeaf className="me-2 h5" />
                            <strong className="f-s-philosopher m-auto">Welcome to T-Active-Stevia</strong>
                        </p>
                        <span className="d-flex ms-auto mb-0 gold-active">
                            <p className="f-s-philosopher m-auto ms-5"></p>
                            <p className="f-s-philosopher m-auto ms-5">Tel : 0977654321</p>
                        </span>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default SiteHeader;
