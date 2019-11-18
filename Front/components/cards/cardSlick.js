// import React from 'react';
// import {Carousel, Card, CardDeck} from 'react-bootstrap';
// import {Icon} from 'antd';
//
// const CardSlick = () => {
//     return (
//         <>
//         <Carousel
//         nextIcon={<Icon type="right" style={{color:'black'}} />}
//         prevIcon={<Icon type="left" style={{color:'black'}} />}
//         style={{paddingLeft:'150px',paddingRight:'150px', marginLeft:'10px', height:'200px'}}
//         >
//             <Carousel.Item style={{height:'500px'}}>
//                 <CardDeck>
//                     <Card>
//                         <Card.Img variant="top" src="/static/images/image4.jpg" style={{width: '100%', height:'40%'}} />
//                         <Card.Body>
//                             <Card.Title>아이디어 공유사이트</Card.Title>
//                             <hr/>
//                             <Card.Text>
//                                 아이디어를 사고 파는 사이트 라는 생각을 해보았다.
//                             </Card.Text>
//                         </Card.Body>
//                         <Card.Footer>
//                             <small className="text-muted">Last updated 3 mins ago</small>
//                         </Card.Footer>
//                     </Card>
//                     <Card>
//                         <Card.Img variant="top" src="/static/images/image5.jpg" style={{width: '100%', height:'40%'}} />
//                         <Card.Body>
//                             <Card.Title>TFT</Card.Title>
//                             <hr/>
//                             <Card.Text>
//                                 팀 매칭 시스템
//                             </Card.Text>
//                         </Card.Body>
//                         <Card.Footer>
//                             <small className="text-muted">Last updated 3 mins ago</small>
//                         </Card.Footer>
//                     </Card>
//                     <Card>
//                         <Card.Img variant="top" src="/static/images/image6.jpg" style={{width: '100%', height:'40%'}}/>
//                         <Card.Body>
//                             <Card.Title>학사정보시스템</Card.Title>
//                             <hr/>
//                             <Card.Text>
//                                 새롭게 발전한 학사정보시스템
//                             </Card.Text>
//                         </Card.Body>
//                         <Card.Footer>
//                             <small className="text-muted">Last updated 3 mins ago</small>
//                         </Card.Footer>
//                     </Card>
//                     <Card>
//                         <Card.Img variant="top" src="/static/images/image7.jpg" style={{width: '100%', height:'40%'}}/>
//                         <Card.Body>
//                             <Card.Title>마리오 승익</Card.Title>
//                             <hr/>
//                             <Card.Text>
//                                 승익이가 마리오네트가 된다.
//                             </Card.Text>
//                         </Card.Body>
//                         <Card.Footer>
//                             <small className="text-muted">Last updated 3 mins ago</small>
//                         </Card.Footer>
//                     </Card>
//                 </CardDeck>
//             </Carousel.Item>
//         </Carousel>
//         </>
//     );
// };
//
// export default CardSlick;\

import React from 'react';
import { styled } from '@material-ui/styles';
import { Carousel, Container, Row, Col, Image, Card, CardDeck } from 'react-bootstrap';
import { Icon } from 'antd';

const icon = styled(Icon)({}
);

const CardSlick = () => {
  return (
    <>
      <div
        style={{
          marginLeft: '15%',
          marginRight: '15%',
        }}
      >
        <h4 style={{
          paddingTop: '50px',
          fontWeight: 'bold',
          marginLeft: '20%'
        }}>금주의 핫띵크</h4>
        <Carousel
          nextIcon={<Icon type="arrow-right" style={{
            fontSize: '50px',
            color: 'black'
          }}/>}
          prevIcon={<Icon type="arrow-left" style={{
            fontSize: '50px',
            color: 'black'
          }}/>}
          style={{
            marginTop: '10px',
            height: '500px'
          }}
        >
          <Carousel.Item
            style={{
              paddingTop: '10px',
              paddingBottom: '20px',
              paddingLeft: '15%',
              paddingRight: '15%',
            }}
          >
            <Container
              style={{
                border: 'solid 2px',
                borderColor: '#ced4da',
                backgroundColor: '#f1f3f5',
                height: '500px',
              }}
            >
              <Row>
                <Image src='/static/images/image4.jpg' roundedCircle={true}/>
                <Col style={{
                  marginTop: '5%',
                  textAlign: 'center',
                  fontSize: '30px',
                }}>
                  아이디어 공유사이트
                </Col>
              </Row>
              <Row
                style={{
                  height: '200px',
                  padding: '20px',
                  textDecoration: 'underline',
                }}>
                아이디어를 사고 파는 사이트 만들고 싶었으나 애당초 계획을 너무 싸질러서 구현하기가 너무어렵다. 그리고 디비는 왜자꾸 바뀌는것인가
                되는것도 안되기 시작하고 프론트는 바빠죽겠는데 아놔
              </Row>
              <Row>
                <Col
                  style={{
                    paddingLeft: '30px',
                    paddingRight: '30px',
                    textAlign: 'right',
                  }}
                >2019-11-13</Col>

              </Row>

            </Container>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default CardSlick;
