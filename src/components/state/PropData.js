import React,{Component} from 'react'
import PropTypes from 'prop-types';
export default function PropData({name,age,msg="GM"}) {
  return (
    <div>
      Hi {name}. How are u?Your age is {age}. Your message is {msg}. 
    </div>
  )
}


// export default class PropData extends Component {
    
//     render(props) {
//     //let {name,age,msg}=this.props;
//     return (
//       <div>
//         {this.props.children}
//          Hi {this.props.name}. How are u?Your age is {this.props.age}. Your message is {this.props.msg}. 
//       </div>
//     )
//   }
// }
PropData.propTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number,
    msg:PropTypes.string,
    children:PropTypes.element
}