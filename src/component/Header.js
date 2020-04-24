import React, { Component } from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown:[{ref:"https://fr.wikipedia.org/wiki/Entrepreneur",title:"For entrepreneurs"},{ref: "https://en.wikipedia.org/wiki/Student",title:"For students"},{ref:"https://dictionary.cambridge.org/fr/dictionnaire/anglais/hobbyist",title:"For hobbyists"}],
            menu:[{styl:"title3-menu",titre:"Home"},{styl:"title3-menu",titre:"Services"},{styl:"title3-menu",titre:"Contact"}],
            IsClick:false,
        }
    }
    handleClick=()=>{
        this.setState({
        IsClick:!this.state.IsClick})
    }
    render() {
        return ( <div className = "header-menu" >
          
             <nav className = "nav-bar-menu" >
            <ul className = "nav-bar-menu-content" >
                
            {this.state.menu.map(el=>(el.titre!=="Services")?
            
            < li  > <a href = "" className = {el.styl} > {el.titre} <hr className="hrStyle"></hr></a> </li>:
             <li onClick={this.handleClick}className = {el.styl}  > {el.titre}  
                  <hr className="hrStyle"/>
             <div className = {(this.state.IsClick)?"show":"Hidd"} >
         
            <ul className={(this.state.IsClick)?"list":"NoList"}>
            {this.state.dropdown.map(el=>  <li> <a className = "link1-dropdown-menu" href = {el.ref} > {el.title} </a></li>)}
         
            </ul>
             </div>

            </li>)}
            </ul> 
            </nav>
             </div>);
    
    }
}
    export default Header;
    