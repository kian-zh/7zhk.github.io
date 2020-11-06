import G6 from '@antv/g6'
import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

class NodeChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ref: React.useRef(null),
      graph: null,
    }
  }

  componentDidMount() {
    
  }

  useEffect(() => {
    if (!graph) {
      graph = new G6.Graph({
        container: ReactDOM.findDOMNode(ref.current),
        width: 1200,
        height: 800,
        modes: {
          default: ['drag-canvas'],
        },
        layout: {
          type: 'dagre',
          direction: 'LR',
        },
        defaultNode: {
          type: 'node',
          labelCfg: {
            style: {
              fill: '#000000A6',
              fontSize: 10,
            },
          },
          style: {
            stroke: '#72CC4A',
            width: 150,
          },
        },
        defaultEdge: {
          type: 'polyline',
        },
      });
    }
    graph.data(data);
    graph.render();
  }, [])

  render() {
    return(
      <div ref={ref}></div>
    )
  }
}

export default NodeChart;