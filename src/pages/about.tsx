/* eslint-disable @next/next/no-img-element */
import LayOut from "@/components/LayOut";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function AboutPage() {
    return (
        <LayOut>
            <div className="about-page">
                <Container>
                    <h2 className="mb-4">What is a Stevia?</h2>
                    <Row>
                        <Col sm={4}>
                            <img className="img-1" src="/images/about/stevialeave.png" alt="" />
                        </Col>
                        <Col sm={8}>
                            <p>Stevia is a natural, zero-calorie sweetener derived from the leaves of the Stevia rebaudiana plant, a member of the Asteraceae family native to South America. Stevia has been used for centuries by the Guarani people of Paraguay and Brazil to sweeten foods and beverages.</p>
                            <p>The sweetness in stevia comes from compounds called steviol glycosides, primarily stevioside and rebaudioside A. These compounds are up to 200-300 times sweeter than sugar, and they do not impact blood sugar levels, making stevia a popular choice for people with diabetes or those looking to reduce their sugar intake.</p>
                            <p>Stevia is available in various forms, including liquid drops, powders, and granulated blends. It is widely used as a sugar substitute in food and beverage products, including sodas, baked goods, and dairy products. While generally recognized as safe, some people may experience an aftertaste or sensitivity to stevia, and it is always advisable to consume it in moderation.</p>
                        </Col>
                    </Row>

                    <section className="section-1" id="about_tainna">
                        <h2 className="text-center mt-5"> Overview </h2>
                        <img className="img-2" src="/images/about/IMG_9069.jpg" alt="" />
                        <div className="top-right text1">
                            <p>The history of selling T-Active brand stevia products started with research and development to create the best product possible. The research team selected high-quality ingredients to create a formula for the product, resulting in a high-quality product that could compete with other brands.
                                Once T-Active stevia products were developed, the marketing team planned a marketing strategy and created the T-Active brand to have a clear identity and be well-known in the market. The marketing strategy focused on consumers who want to maintain good health and take care of their bodies holistically.
                                The marketing approach for T-Active stevia products was supported by a group of customers who have a desire to maintain their bodies effectively. This caused marketing to focus on people with lifestyles that value health and wellness.
                            </p>
                        </div>

                        <div className="tainna">
                            <Row>
                                <Col sm={4}>
                                    <img className="img-2" src="/images/about/tainna.jpg" alt="" />
                                </Col>
                                <Col sm={8} className="text1">
                                    <i>I am Tainna</i>
                                    <h3>When I was 10, everyday after school, I’d go straight to YouTube and watch Victoria Secret models working out.</h3>
                                    <p>
                                        I idolized their physical appearances, failing to acknowledge the negative impacts or safety of these restrictive diets and workouts. From there it escalated to an extremely unhealthy relationship with food and exercise. The summer going into 8th grade, I told myself I needed to lose weight. It was a success; however, I did this in the most unhealthy way possible. That was the advent of my eating disorder. All of 8th grade, I set an alarm for 4:35am. From there, I’d go downstairs and start my workout. Doing rigorous cardio for 45 minutes straight, then proceeding to run on the treadmill for another 30 minutes. I never let myself stop until I felt “dead” on the inside. I completed this 3 times a day, before and after school, as well as an hour after dinner. Everyone around me gave up on helping me. I ended up losing a majority of my friends, even my old teachers lost hope. During school I would leave lunch early to go run up and down the stairs in the hallways, I ran to every class in hopes of “burning extra calories”. It was absolutely miserable.
                                    </p>
                                </Col>
                            </Row>

                            <Row className="row reverse">
                                <Col sm={8} className="text1">
                                    <h3> I even lied to my teachers saying I had a “knee injury” and I wasn’t able to sit down during class.</h3>
                                    <p>
                                        For 2 years straight I would stand in the back of the class, as I thought sitting would have negative effects. To say the least I was brainwashed, all of my fears were just absolute BS; but I thought that was what I needed to do in order to “stay thin”. I felt alone and helpless, not only did my actions effect myself negatively, I was hurting the people around me. I honestly think that was my breaking point. I thought about my family, about how my little cousins (who had once looked up to me) now feared the person I became. I thought about all the friends I had lost, and all the trust I lost among people who used to surround themselves around me. I didn’t know how to fix all the damage I had caused; but I knew I needed to get myself out of that situation. I needed to fix my mindset and I did so by establishing my purpose. I wanted change more than I wanted comfort, so I got to work. Through years of trial and error I finally understood what I needed to do to truly find happiness.
                                    </p>
                                </Col>
                                <Col sm={4}>
                                    <img className="img-2" src="/images/about/tainna1.jpg" alt="" />
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={4}>
                                    <img className="img-2" src="/images/about/tainna2.jpg" alt="" />
                                </Col>
                                <Col sm={8} className="text1">
                                    <h3 >My solution:</h3>
                                    <p>
                                        I was responsible for my life. I needed to change my mentality and approach everything in a whole new way. Through months and months of educating myself, learning from professional trainers, and working with my doctor, I felt somewhat confident in my recovery. I finally felt ready to tackle my relationship with working out. To say the least, I was still very much traumatized from all those years of torturous exercise. However, I knew my goals had altered and I wanted to grow, both physically and mentally. I began idolizing strong athletes and Olympic weightlifters. I found the beauty in self- discipline and pushing yourself to do better. I learned that when your getting your life together, it will get lonely. It was a long process of listening to the wrong people, doing “hourglass ab” workouts from uncertified fitness influencers, and taking in advice from people who didn’t actually understand the human body or anatomy.
                                    </p>
                                    <p>
                                        But looking back now, would I have changed a thing? The answer is absolutely not! I’m glad I was able to learn and differentiate between propaganda and the actual science. With all the knowledge I’ve obtained, I was confident and motivated to proceed in my next step to recovery. Flashing forward to today, I’ve been lifting weights for 3 years now. Focusing on progressive overload and training using both bodybuilding and powerlifting mechanisms. Now my goal is to inspire people to face their fears and approach on health/fitness. The truth of the matter is, working out shouldn’t be something you dread. Yes, you will have days where you’re unmotivated, and yes, some days are way harder than others. But that’s okay, the most successful people are the ones who get up and get to work, even on the days they’re not motivated. Everyone’s journey is different, and I’m still at the start of mine.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </section>

                </Container>
            </div>
        </LayOut>
    )
}