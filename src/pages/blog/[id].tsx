/* eslint-disable @next/next/no-img-element */
import LayOut from "@/components/LayOut";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { blog } from '../../../data/test';
import moment from "moment";
import { useRouter } from "next/router";

export default function BlogID() {
    const router = useRouter();
    const { id } = router.query;
    const blogItem = blog.find(item => item.id === id);


    return (
        <LayOut>
            <div className="blogdetail">
                <Container>
                    <h2 className="text-center mb-5 title">{blogItem?.title}</h2>
                    <div className="text-center">
                        <img src={"../" + blogItem?.img} alt={"img : " + blogItem?.title} className="show" />
                    </div>
                    <Row>
                        <Col sm={12}>
                            <p>{blogItem?.srcipOne}</p>
                        </Col>
                        <Col sm={12}>
                            <p>
                                {blogItem?.subDetail}
                            </p>
                        </Col>
                        <Col sm={12}>
                            <p>
                                {blogItem?.detailOne}
                            </p>
                        </Col>
                        <Col sm={12}>
                            <p>
                                {blogItem?.detailTwo}
                            </p>
                        </Col>
                        <Col sm={12}>
                            <p>
                                {blogItem?.listOne}
                            </p>
                        </Col>
                        {/* <Col sm={12}>
                            <p className="source">
                              <i> Source: {blogItem?.source}</i>  
                            </p>
                        </Col> */}

                    </Row>
                </Container>
            </div>
        </LayOut>
    )
}