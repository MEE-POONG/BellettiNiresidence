/* eslint-disable @next/next/no-img-element */
import LayOut from "@/components/LayOut";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { WorkOut } from "../../data/test";
import moment from "moment";

export default function WorkOutPage() {
    return (
        <LayOut>
            <div className="WorkOut-page">
                <Container>
                    <h2 className="text-center mb-5">WorkOuts</h2>
                    <Row xs="auto">
                        {WorkOut.map((item) => (
                            <Col key={item.id}>
                                <div className="a-box">
                                    <div className="img-container">
                                        <div className="img-inner">
                                            <div className="inner-skew">
                                                <img src={item.img} alt={item.exercise} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-container">
                                        <h3>{item.exercise}</h3>
                                        <div className="mt-3">
                                            <Row>
                                                <Col className="p-0 m-0" xs={5}>
                                                    <p><strong className="m-0">subTitle :</strong></p>
                                                </Col>
                                                <Col className="p-0 m-0" xs={5}>
                                                    <p><strong className="m-0">start :</strong></p>
                                                </Col>
                                            </Row>
                                            <hr />
                                            <Link className="link-fx-1 color-contrast-higher f-c-gold mb-3" href="about">
                                                <h3 className='f-c-gold m-0'>
                                                    <span>Read Stevia</span>
                                                    <svg className="icon" viewBox="0 0 32 32" aria-hidden="true">
                                                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                                            <circle cx="16" cy="16" r="15.5"></circle>
                                                            <line x1="10" y1="18" x2="16" y2="12"></line>
                                                            <line x1="16" y1="12" x2="22" y2="18"></line>
                                                        </g>
                                                    </svg>
                                                </h3>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>

                </Container>
            </div>
        </LayOut>
    )
}