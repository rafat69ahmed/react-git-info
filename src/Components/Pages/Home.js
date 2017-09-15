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
      <div>

        <br/>

        <div className="row">
          <Jumbotron>
            <h1>Have fun With ghurbo desh!!</h1>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <p><Button bsStyle="primary">Read more</Button></p>
          </Jumbotron>
        </div>

        <br/>

        <div>
          <div>
            <h1 className="text-center">____Our Target____</h1>
          </div>
          <div className="row">
            <div className="col-md-1">
              Cost
            </div>
            <div className="col-md-11">
              <ProgressBar striped bsStyle="success" active now={45} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-1">
              Risk
            </div>
            <div className="col-md-11">
              <ProgressBar striped bsStyle="info" active now={20} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-1">
              Tour
            </div>
            <div className="col-md-11">
              <ProgressBar striped bsStyle="warning" active now={60} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-1">
              Fun
            </div>
            <div className="col-md-11">
              <ProgressBar striped bsStyle="danger" active now={80} />
            </div>
          </div>
        </div>

        <br/>

        <div>
          <div>
            <h1 className="text-center">____Recent Tour Photos____</h1>
          </div>
          <div className="row">
            <div className="col-md-4 col-xs-6 text-center">
              <Image width={200} height={140} src={require ("../../Assets/Slider/1.png")} alt="Image" rounded/>
            </div>
            <div className="col-md-4 col-xs-6 text-center">
              <Image width={200} height={140} src={require ("../../Assets/Slider/2.png")} alt="Image" rounded/>
            </div>
            <div className="col-md-4 col-xs-6 text-center">
              <Image width={200} height={140} src={require ("../../Assets/Slider/3.png")} alt="Image" rounded/>
            </div>
          </div>
        </div>

        <br/>

        <div className="row">
          <Tabs  id="controlled-tab-example">
            <Tab eventKey={1} title="Upcoming Tour">
              <table className="table">
                <thead>
                  <tr>
                    <th>travel spot</th>
                    <th>type</th>
                    <th>cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>dhaka</td>
                    <td>
                      <span className="label label-pill label-danger" style={{borderRadius:10}}>
                        survival
                      </span>
                    </td>
                    <td>1000</td>
                  </tr>
                  <tr>
                    <td>commilla</td>
                    <td>
                      <span className="label label-pill label-warning" style={{borderRadius:10}}>
                        historical
                      </span>
                    </td>
                    <td>3200</td>
                  </tr>
                  <tr>
                    <td>manikgong</td>
                    <td>
                      <span className="label label-pill label-success" style={{borderRadius:10}}>
                        natural
                      </span>
                    </td>
                    <td>3200</td>
                  </tr>
                </tbody>
              </table>
            </Tab>
            <Tab eventKey={2} title="New Events">Tab 2 content</Tab>
            <Tab eventKey={3} title="Informaion">Tab 3 content</Tab>
          </Tabs>
        </div>

      </div>
    )
  }
    render( ) {
        return(
            <Layout content={this.Content()}/>
        )
    }
}

export default Home;