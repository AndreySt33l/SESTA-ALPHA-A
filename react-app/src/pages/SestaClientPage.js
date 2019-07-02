import React from "react";
import { MDBBtn, MDBCol, MDBRow, MDBContainer, MDBCard, MDBCardBody, MDBCardGroup, MDBCardImage, MDBCardTitle, MDBCardText } from "mdbreact";
import DocsLink from "../components/docsLink";

const SestaClientPage = () => {
    return (
        <MDBContainer>
            <h2 className="mt-5">Наши Клиенты</h2>
            <hr className="mt-5" />
            <MDBContainer>
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle>КНБ РК</MDBCardTitle>
                            <MDBCardText>
                                <MDBContainer>
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <p>Заказчик</p>
                                        </MDBCol>
                                        <MDBCol md="10">
                                            <p>КНБ РК</p>
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow>
                                        <MDBCol md="2">
                                            <p>Заказ</p>
                                        </MDBCol>
                                        <MDBCol md="10">
                                            <p className="text-lg-left">Цемент M400</p>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <p>Объем</p>
                                        </MDBCol>
                                        <MDBCol md="10">
                                            <p className="text-lg-left">10.000 тонн</p>
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow>
                                        <MDBCol md="2">
                                            <p>Период</p>
                                        </MDBCol>
                                        <MDBCol md="10">
                                            <p>2014</p>
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow>
                                        <MDBCol md="2">
                                            <p>Сумма</p>
                                        </MDBCol>
                                        <MDBCol md="10">
                                            <p>25.000.000 тенге</p>
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow>
                                        <MDBCol md="2">
                                            <p>Описание</p>
                                        </MDBCol>
                                        <MDBCol md="10">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac
                                                turpis egestas sed. Volutpat consequat mauris nunc congue nisi vitae
                                                suscipit tellus. Elit eget gravida cum sociis natoque. Suspendisse
                                                ultrices gravida dictum fusce. At lectus urna duis convallis convallis
                                                tellus id interdum velit. Turpis egestas pretium aenean pharetra magna
                                                ac placerat vestibulum lectus. Sit amet volutpat consequat mauris nunc
                                                congue nisi. Sapien faucibus et molestie ac feugiat sed lectus
                                                vestibulum. Mauris vitae ultricies leo integer malesuada nunc. Id
                                                consectetur purus ut  faucibus pulvinar elementum integer enim neque.
                                                Ac turpis egestas sed tempus urna et pharetra pharetra massa.
                                                Ultricies lacus sed turpis tincidunt id. Et egestas quis ipsum
                                                suspendisse ultrices gravida. Eu sem integer vitae justo eget magna
                                                fermentum iaculis eu.
                                            </p>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBContainer>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                <hr className="mt-5" />
                <h2 className="mt-5">MDBCard decks</h2>

                <MDBCardGroup deck className="mt-3">
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn color="light-blue" size="md">
                                read more
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard>
                        <MDBCardImage
                            src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg"
                            alt="MDBCard image cap"
                            top
                            hover
                            overlay="white-slight"
                        />
                        <MDBCardBody>
                            <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn color="light-blue" size="md">
                                read more
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard>
                        <MDBCardImage
                            src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg"
                            alt="MDBCard image cap"
                            top
                            hover
                            overlay="white-slight"
                        />
                        <MDBCardBody>
                            <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn color="light-blue" size="md">
                                read more
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCardGroup>
            </MDBContainer>
        </MDBContainer>
    );
}

export default SestaClientPage;
