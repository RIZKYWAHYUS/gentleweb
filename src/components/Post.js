import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Badge,  Button, Card, CardImg, CardBody,
    CardTitle, CardSubtitle, CardText } from 'reactstrap';

class Post extends Component {

  state = { post: null,  theposition: window.pageYOffset }
  
  componentDidMount() {
    axios.get('https://reqres.in/api/users')
      .then(response => this.setState({ post: response.data }));
  }

   
  
  _renderObject(){
    var datas =  this.state.post 
    datas = datas.data;
    return Object.entries(datas).map(([key, value], i) => {
        return (
            <Card key={key}>
              <CardImg top width="100%" src={value.avatar} alt="banner" />
              <CardBody>
                <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">{ value.first_name }</CardTitle>
                <CardSubtitle className="text-secondary mb-3 font-weight-light text-uppercase" style={{ fontSize: '0.8rem' }}> { value.email } </CardSubtitle>
                <CardText className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>Full-stack web developer learning new hacks one day at a time. Web technology enthusiast. Hacking stuffs @theflutterwave.</CardText>
                <Button color="success" className="font-weight-bold">Detail</Button>
              </CardBody>
            </Card>
        )
    })
}


  render() {
    console.log(this.state.post);
    return (
      <Fragment>
        { this.state.post && <div className="position-relative">
        
          <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
            Editor's Pick
            <Badge pill color="success" className="text-uppercase px-2 py-1 ml-3 mb-1 align-middle" style={{ fontSize: '0.75rem' }}>New</Badge>
          </span>
          
          <span className="d-block pb-4 h2 text-dark border-bottom border-gray">Getting Started with React</span>
          
          <div>
              {this._renderObject()}
          </div>

        </div> }
      </Fragment>
    );
  }
  
}

export default Post;