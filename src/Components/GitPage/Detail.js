import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Panel,FormGroup, FormControl,InputGroup, Button, Image } from 'react-bootstrap';

class Detail extends React.Component {

  constructor( props ) {
    super( props )
    this.state = {
      gitInfo: {},
      noInfoFound: false,
    }
  }

  
  componentWillMount() {
    this.setState({gitInfo:this.props.content})
    console.log('tinga',this.props.content)
  }

  formatDate(date)
  {
    var packageDate = date;
    var str = packageDate.split(" ");
    var convert = (new Date(str[0])).toGMTString();
    var str2 = convert.split(" ");
    var date = str2[1].toString()+' '+str2[2].toString()+' '+str2[3].toString();
    return date;
  }
  

  render(){
    let gitInfo = this.props.content
    return(
      <div>
        <div className="row">
          <div className="col-md-1">
          </div>
          <div className="col-md-7">
            <Image src={gitInfo.avatar_url} style={{width: 200, height: 200}} className="img-responsive" circle/>
          </div>
          <div className="col-sm-3">
            <div className="media">
              <div className="media-body">
                <div>
                  <h4>Profile info</h4>
                </div>
                <div className="media row_lable">
                  <div className="media-left">
                    Join On
                  </div>
                  <div className="media-right">
                  {this.formatDate(gitInfo.created_at)}
                  </div>
                </div>
                <div className="media row_lable">
                  <div className="media-left">
                    Followers
                  </div>
                  <div className="media-right">
                    {gitInfo.followers}
                  </div>
                </div>
                <div className="media row_lable">
                  <div className="media-left">
                    Following
                  </div>
                  <div className="media-right">
                    {gitInfo.following}
                  </div>
                </div>
                <div className="media row_lable">
                  <div className="media-left">
                    Public repository
                  </div>
                  <div className="media-right">
                    {gitInfo.public_repos}
                  </div>
                </div>
                <div className="media row_lable">
                  <div className="media-left">
                  <a href={gitInfo.html_url}>{gitInfo.html_url}</a>
                  </div>
                  <div className="media-right">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Detail;