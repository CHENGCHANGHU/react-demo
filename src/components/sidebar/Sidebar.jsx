import { useState } from "react";
import { Component } from "react";

export function Sidebar(props) {
  const { catalogs } = props;
  // const [length, setLength] = useState(catalogs.length);
  const length = catalogs.length;
  console.log('render', length);
  return (
    <div
      style={{
        width: '240px',
        minWidth: '240px',
        height: 'calc(100vh - 48px)',
        boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.3)',
      }}
    >
      Sidebar [{catalogs?.toString()}| {length}]
    </div>
  );
};

// export class Sidebar extends Component {
//   get length() {
//     return this.props.catalogs.length;
//   }

//   render() {
//     console.log('render', this.length);
//     const { catalogs } = this.props;
//     return (
//       <div
//         style={{
//           width: '240px',
//           minWidth: '240px',
//           height: 'calc(100vh - 48px)',
//           boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.3)',
//         }}
//       >
//         Sidebar [{catalogs?.toString()}| {this.length}]
//       </div>
//     );
//   }
// };

