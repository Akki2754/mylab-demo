import React from "react";
class Employee extends React.Component {
  constructor(props) {
  super(props);

  }
  render() {
    return (
      <div>
          <p>Inside Employee Component</p>
          <p>Array Output:{this.props.employee}</p>
          <p>Object O/p:{this.props.obj.Name}</p>

          {/* <ul>
            <p>
              {this.props.numbers.map((item) => (
                
                <li>{item}</li>
              ))}
            </p>
          </ul> */}
        </div>
    );
  }
}
export default Employee;