/* eslint-disable @next/next/no-img-element */
import LayOut from "@/components/LayOut";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { event } from '../../../data/test';
import moment from "moment";
import { useRouter } from "next/router";
import HtmlContent from "@/components/HtmlContent";

export default function EventID() {
    const router = useRouter();
    const { id } = router.query;
    const eventItem = event.find(item => item.id === id);


    return (
        <LayOut>
            <div className="event-page">
                <Container className="event-detail">
                    <h2 className="text-center mb-5 title">{eventItem?.title}</h2>
                    <div className="text-center">
                        <img src={"../" + eventItem?.img} alt={"img : " + eventItem?.title} className="show" />
                    </div>
                    <Row>
                        <Col sm={12}>
                            <p>
                                Activity start and end :  {moment(eventItem?.start).format('DD MMM YY') === moment(eventItem?.end).format('DD MMM YY')
                                    ? `${moment(eventItem?.start).format('HH:mm')} - ${moment(eventItem?.end).format('HH:mm')}`
                                    : `${moment(eventItem?.start).format('HH:mm DD MMMM YYYY')} - ${moment(eventItem?.end).format('HH:mm DD MMMM YYYY')}`}
                            </p>
                        </Col>
                        <Col sm={12}>
                            <HtmlContent content={eventItem?.detailOne} />
                        </Col>
                        <Col sm={12}>
                            <p>
                                {eventItem?.detailTwo}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </LayOut>
    )
}