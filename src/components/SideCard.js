import React, { Component, Fragment } from 'react';

import {
  Button, UncontrolledAlert, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText
} from 'reactstrap';

class SideCard extends Component {

state = { post: null,  theposition: window.pageYOffset }


  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  
  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
  
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
  
    const scrolled = winScroll / height
  
    this.setState({
      theposition: scrolled,
    })
  }


render() {
    var positionMark = 0.020842194810718844;
    // var BANNER = 'https://i.imgur.com/CaKdFMq.jpg';
    var BANNER = this.props.img;
    var valuePosition = this.state.theposition >= positionMark ? "fixed" : "";
    var valueTop = this.state.theposition >= positionMark ? "100px" : "unset";
    var valueWidth = this.state.theposition >= positionMark ? "30%" : "";
    return (
            <Fragment  >
      
                {/* <UncontrolledAlert color="danger" className="d-none d-lg-block">
                <strong>Account not activated.</strong>
                </UncontrolledAlert> */}
                <div style={{ marginTop : '35px' }} ></div>
                <Card style={{ position : valuePosition , width : valueWidth, top : valueTop }} >
                <CardImg top width="10px" src={BANNER} alt="banner" />
                <CardBody>
                    <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">Glad Chinda {this.state.theposition }</CardTitle>
                    <CardSubtitle className="text-secondary mb-3 font-weight-light text-uppercase" style={{ fontSize: '0.8rem' }}>Web Developer, Lagos</CardSubtitle>
                    <CardText className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>Full-stack web developer learning new hacks one day at a time. Web technology enthusiast. Hacking stuffs @theflutterwave.</CardText>
                    <Button color="success" className="font-weight-bold">Beli</Button>
                </CardBody>
                </Card>
                
            </Fragment>
            );
    }
}

export default SideCard; 