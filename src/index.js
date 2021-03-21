import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import avatar from './assets/avatar.jpg';
import Home from './pages/Home';
// import Footer from './components/Footer';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Strengths from './pages/Strengths';

var createReactClass = require('create-react-class');

var MenuExample = createReactClass({
  getInitialState: function() {
      return { focused: 0 };
  },

  clicked: function(index) {
      // The click handler will update the state with
      // the index of the focused menu entry
      this.setState({
        focused: index,
      });
  },

  render: function() {
      // Here we will read the items property, which was passed
      // as an attribute when the component was created
      var self = this;
      // The map method will loop over the array of menu entries,
      // and will return a new array with <li> elements.
      return (
          <div>
              <div className="header">
                <img className="avatar g-card-info" src={avatar} alt={avatar} />
              </div>
              <br></br>
              <ul>
                { this.props.items.map(function(m, index){        
                    var style = '';        
                    if(self.state.focused === index){
                        style = 'focused';
                    }        
                    // Notice the use of the bind() method. It makes the
                    // index available to the clicked function:        
                    return <li key={index} className={style} onClick={self.clicked.bind(self, index)}>{m}</li>;        
                  }) 
                }                        
              </ul>
              <br/>

              <div>
                {
                
                  this.props.items.map(function(m, index){        
                    
                    if(self.state.focused === 0 && index===self.state.focused)
                    {
                        return <Home/>;
                    }        
                    else if (self.state.focused === 1 && index===self.state.focused)
                    {
                      return <Strengths/>
                    }
                    else if (self.state.focused === 2 && index===self.state.focused)
                    {
                      return <Projects/>
                    }
                    else if (self.state.focused === 3 && index===self.state.focused)
                    {
                      return <Contact/>
                    }
                  }) 
                }
              </div>

              {/* <div>
                <Footer/>
              </div> */}

              {/* <p>Selected: {this.props.items[this.state.focused]}</p> */}
          </div>
      );
  }
});


// function Body()
// {
//   console.log(currPage)
//   if (this.props.currPage === "Home")
//   {
//     return (
//       <Home/>
//     );
//   }
//   else if (this.props.currPage === "About")
//   {
//     return (
//       <About/>
//     );
//   }
//   // else if (this.state.items[this.state.focused] === "Projects")
//   // {
//   //   return (
//   //     <Example/>
//   //   );
//   // }
//   // else if (this.state.items[this.state.focused] === "Contact me")
//   // {
//   //   return (
//   //     <Contact/>
//   //   );
//   // }
//   else
//   {
//     return <Home/>;
//   }
// }

ReactDOM.render(
  <MenuExample items={ ['Home', 'Strengths', 'Projects', 'Contact me'] } />,
  // <Footer/>,
  document.getElementById('root')
);