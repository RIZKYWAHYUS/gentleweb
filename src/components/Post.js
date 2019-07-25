import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Badge,  Button, Card, CardImg, CardBody,
    CardTitle, CardSubtitle, CardText } from 'reactstrap';

const imageLove = {
  unlike : "https://salestock-public-prod.freetls.fastly.net/balok-assets/assets/img/icons/icon-heart-grey-0a895ac5bdf1f98aa48d5f85efc7679d.png",
  like : "https://salestock-public-prod.freetls.fastly.net/balok-assets/assets/img/icons/icon-heart-berry-2ef24dd865381c62a8ff8df784d9615c.png"
}
    
class Post extends Component {

  state = { post: null,  theposition: window.pageYOffset }
s
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
                <div className="buttonLove" style={{ display: 'inline-block', verticalAlign: 'top', marginRight: '4px', marginLeft: '15px', marginTop : '10px' }} >
                  <img data-condition='0' onClick={this.loveClick} src={ imageLove.unlike } data-qa-id="qa_common_icon" style={{ width: '24px', height: '24px', backgroundSize: '100%', backgroundPosition: '0px 0px', display: 'block', margin: '0px auto', maxWidth: 'none' }} />
                </div>
              </CardBody>
            </Card>
        )
    })
}

 loveClick(e){
   e.preventDefault();
   let condition = e.currentTarget.dataset.condition;
   if(condition == 0){
     e.currentTarget.dataset.condition = 1;
     e.currentTarget.src = imageLove.like;
   }else{
    e.currentTarget.dataset.condition = 0;
    e.currentTarget.src = imageLove.unlike;
   }
   console.log(e);
   

}

  render() {
    console.log(this.state.post);
    return (
      <Fragment>
        { this.state.post && <div className="position-relative">
        
          <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
            Pilihan Baju Terkini
            <Badge pill color="success" className="text-uppercase px-2 py-1 ml-3 mb-1 align-middle" style={{ fontSize: '0.75rem' }}>New</Badge>
          </span>
          
          {/* <span className="d-block pb-4 h2 text-dark border-bottom border-gray"> Kategori Baju </span> */}
          
          <div>
              {this._renderObject()}
          </div>

        </div> }
      </Fragment>
    );
  }
  
}

export default Post;