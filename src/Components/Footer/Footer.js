import React from 'react';

class Footer extends React.Component {
    render( ) {
        return(
            <div>
              <div className="container text-center">
                <h3>Subscribe for more free stuff</h3>
                <p>Enter your name and email</p>
                <hr/>
                <div className="ul">
                  <div className="li">Twiter</div>
                  <div className="li">Youtube</div>
                  <div className="li">Facebook</div>
                </div>
                <p>&copy; Copyright,All right reserved by LogicUnion IT Solution,2016</p>
              </div>
            </div>
        )
    }
}

export default Footer;