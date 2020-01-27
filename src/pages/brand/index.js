import React, { Component } from 'react';
// import '../../stylesheets/brand.css';

import LBa from '../../img/logo/LogoBase A.png';
import LBa1 from '../../img/logo/LogoBase A - 1.png';
import LBa2 from '../../img/logo/LogoBase A - 2.png';
import LBb from '../../img/logo/LogoBase B.png';
import LBb1 from '../../img/logo/LogoBase B - 1.png';
import LBb2 from '../../img/logo/LogoBase B - 2.png';
import LBc from '../../img/logo/LogoBase C.png';
import LBc1 from '../../img/logo/LogoBase C - 1.png';
import LBc2 from '../../img/logo/LogoBase C - 2.png';

class Brand extends Component {
  render() {
    return (
      <div id='brand-page'>
        <h1>Brand Tests</h1>
        <div id='brand-name'>
          <div id='a'>
            <h2>
              <span className="name-1">Thought</span><span className="name-2">Front</span>
            </h2>
            <h2>
              <span className="name-1">thought</span><span className="name-2">front</span>
            </h2>
          </div>
          <div id='b'>
            <h2>
              <span className="name-1">Thought</span><span className="name-2">Front</span>
            </h2>
            <h2>
              <span className="name-1">thought</span><span className="name-2">front</span>
            </h2>
          </div>
          <div id='c'>
            <h2>
              <span className="name-1">Thought</span><span className="name-2">Front</span>
            </h2>
            <h2>
              <span className="name-1">thought</span><span className="name-2">front</span>
            </h2>
          </div>
          <div id='d'>
            <h2>
              <span className="name-1">Thought</span><span className="name-2">Front</span>
            </h2>
            <h2>
              <span className="name-1">thought</span><span className="name-2">front</span>
            </h2>
          </div>
          <div id='e'>
            <h2>
              <span className="name-1">Thought</span><span className="name-2">Front</span>
            </h2>
            <h2>
              <span className="name-1">thought</span><span className="name-2">front</span>
            </h2>
          </div>
        </div>
        <div id='brand-logos'>
          <div className='group'>
            <div className='img'>
              <img alt='logo' src={LBb}></img>
            </div>
            <div className='img'>
              <img alt='logo' src={LBb1}></img>
            </div>
            <div className='img'>
              <img alt='logo' src={LBb2}></img>
            </div>
          </div>
          <div className='group'>
            <div className='img'>
              <img alt='logo' src={LBa}></img>
            </div>
            <div className='img'>
              <img alt='logo' src={LBa1}></img>
            </div>
            <div className='img'>
              <img alt='logo' src={LBa2}></img>
            </div>
          </div>
          <div className='group'>
            <div className='img'>
              <img alt='logo' src={LBc}></img>
            </div>
            <div className='img'>
              <img alt='logo' src={LBc1}></img>
            </div>
            <div className='img'>
              <img alt='logo' src={LBc2}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Brand;
