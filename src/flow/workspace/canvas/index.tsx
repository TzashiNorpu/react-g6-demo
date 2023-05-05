import React, {useEffect} from "react";
import G6, {Graph} from "@antv/g6";
import styled from "@emotion/styled";

const graphData = {
  // 点集
  nodes: [
    {
      id: 'node1',
      x: 300,
      y: 200,
    },
    {
      id: 'node2',
      x: 600,
      y: 200,
    },
  ],
  // 边集
  edges: [
    // 表示一条从 node1 节点连接到 node2 节点的边
    {
      source: 'node1',
      target: 'node2',
    },
  ],
}

export const Canvas = () => {
  const ref = React.useRef(null)
  let graph :Graph ;


  useEffect(() => {
    if(!graph) {
      // 实例化 Minimap
      // const minimap = new G6.Minimap()
      // 实例化 Graph
      if(ref.current!=null){
        graph = new G6.Graph({
          container: ref.current,
          width: ref.current.clientWidth,
          height: ref.current.clientHeight,
          // plugins: [minimap],
          modes: {
            default: [
              'drag-canvas',
              'zoom-canvas',
              'drag-node'
            ]
          },
        });
        console.log(ref.current);
    }
  }
    
    graph.data(graphData)
    graph.render()

    graph.on('node:mouseenter', evt => {
      if(evt.item!=null)
        graph.setItemState(evt.item, 'hover', true)
    })

    graph.on('node:mouseleave', evt => {
      if(evt.item!=null)
        graph.setItemState(evt.item, 'hover', false)
    })

    graph.on('edge:mouseenter', evt => {
      if(evt.item!=null)
        graph.setItemState(evt.item, 'hover', true)
    })

    graph.on('edge:mouseleave', evt => {
      if(evt.item!=null)
        graph.setItemState(evt.item, 'hover', false)
    })

  }, [])

  return <Container ref={ref}></Container>
};

const Container = styled.div`
  height:100%;
`;
