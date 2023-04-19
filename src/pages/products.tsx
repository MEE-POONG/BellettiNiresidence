import LayOut from "@/components/LayOut";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function ProductsPage() {
    return (
        <LayOut>
            <div className="products-page">
                <Container>
                    <div className="title">
                        <h2 className="title">Our Products</h2>
                    </div>

                    {/* ProductCard */}
                    <div className="card-left">
                        <Row>
                            <Col sm={4}>
                                <img className="p-image" src="/images/product/IMG_8915.png" alt="" />
                            </Col>
                            <Col sm={8}>
                                <div className="p-detail">
                                    <h2>Original flavour</h2>
                                    <p>
                                        <strong>Description:</strong>
                                        An extract from the stevia plant that does not add color but flavor, can be used as a sugar substitute in cooking or in beverages.
                                    </p>
                                    <p>
                                        <strong>Volume:</strong>
                                        <i>250</i> ml.
                                    </p>
                                    <div className="price">
                                        <p>
                                            <strong>Price:</strong>
                                            <i>690</i> Baht.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="card-right">
                        <Row className="reverse">
                                <Col sm={9}>
                                    <div className="p-detail">
                                        <h2>Vanila flavour</h2>
                                        <p>
                                            <strong>Description:</strong>
                                            An extracts from stevia plant, which do not add color but add vanilla flavor, can enhance the aroma and be used as a sugar substitute in cooking or added to beverages.
                                        </p>
                                        <p>
                                            <strong>Volume:</strong>
                                            <i>250</i> ml.
                                        </p>
                                        <div className="price">
                                            <p>
                                                <strong>Price:</strong>
                                                <i>690</i> Baht.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={3}>
                                    <img className="p-image" src="/images/product/newbot.png" alt="" />
                                </Col>
                        </Row>
                    </div>

                    <div className="card-left">
                        <Row>
                            <Col sm={4}>
                                <img className="p-image" src="/images/product/small.png" alt="" />
                            </Col>
                            <Col sm={8}>
                                <div className="p-detail">
                                    <h2>Original flavour Mini</h2>
                                    <p>
                                        <strong>Description:</strong>
                                        An extract from the stevia plant that does not add color but does not flavor, is used as a sugar substitute in cooking or in beverages. Trial size is suitable for those who want to try it for the first time or for portability.
                                    </p>
                                    {/* <p>
                                        <strong>Volume:</strong>
                                        <i>50</i> ml.
                                    </p>
                                    <div className="price">
                                        <p>
                                            <strong>Price:</strong>
                                            <i>600</i> Baht.
                                        </p>
                                    </div> */}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </LayOut>
    )
}