import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Panel,FormGroup, FormControl,InputGroup, Button, Image, Badge } from 'react-bootstrap';

class Detail extends React.Component {

  constructor( props ) {
    super( props )
    this.state = {
      gitInfo: {},
      noInfoFound: false,
      loadState: true,
      repos:{}
    }
    this.loadingChange           = this.loadingChange.bind( this )
    // this.repoLanguages           = this.repoLanguages.bind( this )
  }

  componentWillReceiveProps(newProps){
    let repoUrl = 'https://api.github.com/users/'+newProps.userName+'/repos';
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
                        gitInfo:newProps.content
                      },() => {
                        this.loadingChange()
                      })
                      // console.log('tinga',this.state.repos)
                    })
                    .catch(error=>{
                      console.log(error);
                    })
    // this.setState({gitInfo:newProps.content},() => {
    //   this.loadingChange()
    // })
    // console.log('ok google',newProps.content)
  }
  loadingChange(){
    
    this.setState({loadState:false})
    console.log('tinga',this.state.gitInfo)
    // console.log('zinga',this.state.repos)
  }
  
  componentWillMount() {
    // let repoUrl = 'https://api.github.com/users/'+this.props.userName+'/repos';
    // let options = { method: 'GET',
    // mode: 'cors',
    //                 cache: 'default' };
    //                 fetch(repoUrl)
    //                 .then(response=>{
    //                   console.log(response);
    //                   return response.json();
    //                 })
    //                 .then(data=>{
    //                   // console.log('piku',data);
    //                   this.setState({
    //                     repos:data,
    //                   })
    //                   // console.log('tinga',this.state.repos)
    //                 })
    //                 .catch(error=>{
    //                   console.log(error);
    //                 })
                  }
                    
  formatDate(date)
  {
                      // console.log('piku',this.state.repos);
    var packageDate = date;
    var str = packageDate.split(" ");
    var convert = (new Date(str[0])).toGMTString();
    var str2 = convert.split(" ");
    var date = str2[1].toString()+' '+str2[2].toString()+' '+str2[3].toString();
    return date;
  }
  // repoLanguages(value)
  // {
  //     // console.log('language',value);
  //     let repoUrl = value;
  //     let lng
  //     let options = { method: 'GET',
  //                     mode: 'cors',
  //                     cache: 'default' };
  //                     fetch(repoUrl)
  //                     .then(response=>{
  //                       console.log(response);
  //                       return response.json();
  //                     })
  //                     .then(data=>{
  //                       console.log('piku',data);
  //                       lng =data
  //                       // this.setState({
  //                         //   repos:data,
  //                         // })
  //                         // console.log('tinga',this.state.repos)
  //                       })
  //                       .catch(error=>{
  //                         console.log(error);
  //                       })
  //                       return lng
  // }
  
  detailComponent()
  {
    let gitInfo = this.props.content
    let repoInfo = this.state.repos
    console.log('zinga',repoInfo)
    
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
                  <h3>Profile info</h3>
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
        <br/>
        <div className="row">
          <div className="col-sm-12">
            <h1 className="text-center">Repositories</h1>
            <table className="table">
              <thead className="text-right">
                <tr className="text-right">
                  <th>Name <i className="fa fa-briefcase" aria-hidden="true"></i></th>
                  <th>Languages <i className="fa fa-language" aria-hidden="true"></i></th>
                  <th>Forks <i className="fa fa-code-fork" aria-hidden="true"></i></th>
                  <th>Starts <i className="fa fa-star" aria-hidden="true"></i></th>
                </tr>
              </thead>
              <tbody>
              {
                repoInfo.map((repo,index) =>
                <tr key={index}>
                <td><a href={repo.html_url} target="_blank">{repo.name}</a></td>
                <td>{repo.language == null ? <Badge className="lang">n/a</Badge> : <Badge className="lang">{repo.language}</Badge>}</td>
                <td>{repo.forks}</td>
                <td>{repo.stargazers_count}</td>
                </tr>
                )
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ) 
  }
  render(){
    
    if(this.state.loadState == true) {
      return (<div>loading...</div>)
    } else {
        return (this.detailComponent())
    }
    
  }
}
export default Detail;