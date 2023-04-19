/* eslint-disable @next/next/no-img-element */
import LayOut from "@/components/LayOut";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { blog } from "../../../data/test";
import moment from "moment";

export default function BlogPage() {
    
    return (
        <LayOut>
            <div className="blog-page">
                <Container>
                    <h2 className="text-center mb-5">Blogs</h2>
                    <Row xs="auto">
                        {blog.map((item) => (
                            <Col key={item.id} sm={12} md={6} lg={4} className="text-center">
                                <div className="a-box">
                                    <div className="img-container">
                                        <div className="img-inner">
                                            <div className="inner-skew">
                                                <img src={item.img} alt={item.title} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-container">
                                        <h3>{item.title}</h3>
                                        <div className="mt-3">
                                            <Row>
                                                <Col className="cut-text">
                                                    <p>&nbsp; {item.srcipOne}</p>
                                                </Col>
                                            </Row>
                                            <hr />
                                            <Link className="link-fx-1 color-contrast-higher f-c-gold mb-3" href={"blog/" + item.id }>
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