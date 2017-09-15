import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Panel,FormGroup, FormControl,InputGroup, Button, Image } from 'react-bootstrap';

class Detail extends React.Component {

  constructor( props ) {
    super( props )
    this.state = {
      gitInfo: {},
      noInfoFound: false,
      repos:{}
    }
  }

  
  componentWillMount() {
    this.setState({gitInfo:this.props.content})
    // console.log('tinga',this.props.content)
    let repoUrl = 'https://api.github.com/users/'+this.props.userName+'/repos';
    let options = { method: 'GET',
                    mode: 'cors',
                    cache: 'default' };
                    fetch(repoUrl)
                    .then(response=>{
                      console.log(response);
                      return response.json();
                      })
                      .then(data=>{
                        // console.log('piku',data);
                        this.setState({
                          repos:data,
                        })
                      })
                      .catch(error=>{
                        console.log(error);
                      })
                    }
                    
  formatDate(date)
  {
                      console.log('piku',this.state.repos);
    var packageDate = date;
    var str = packageDate.split(" ");
    var convert = (new Date(str[0])).toGMTString();
    var str2 = convert.split(" ");
    var date = str2[1].toString()+' '+str2[2].toString()+' '+str2[3].toString();
    return date;
  }
  

  render(){
    let gitInfo = this.props.content
    let repoInfo = this.state.repos
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
        <div className="row">
          <div className="col-sm-6">
            <h4>Repositories</h4>
            <table className="table">
              <thead className="text-right">
                <tr className="text-right">
                  <th>Item Name</th>
                  <th>invoiced</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>asd</td>
                  <td>sd</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
export default Detail;