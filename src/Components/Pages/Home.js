import React from 'react';
import Layout from '../Layout/Layout';
import Rapid from '../../Assets/Slider/1.png';
import Logo from '../../Assets/Slider/2.png';
import Screen from '../../Assets/Slider/3.png';
import { Jumbotron,Button,Carousel,ProgressBar,Row,Col,Image,Tabs,Tab } from 'react-bootstrap';


class Home extends React.Component {
  Content()
  {
    return(
      <div>world</div>
    )
  }
    render( ) {
        return(
            <Layout content={this.Content()}/>
        )
    }
}

export default Home;