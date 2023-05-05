import styled from "@emotion/styled";
import {Stencil} from "./stencil";
import {Canvas} from "./canvas";
import {SideBar} from "./sidebar";
import React, { useEffect } from "react";
import G6,{ Graph, Item } from "@antv/g6";


export const Workspace = () => {

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
    }
  }
    
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

    

    graph.on('drop', evt => {

      const {clientX,clientY,originalEvent: {dataTransfer} } = evt;
      if (dataTransfer) {
        const data = dataTransfer.getData('svgName');
        if(data){
          const {svgName} = JSON.parse(data);

          dataTransfer.clearData();

          const node = graph.addItem('node',{
            x:clientX,
            y:clientY,
            style:{
              strokeOpacity:0,
            }
          });


          node.addShape('dom', {
            attrs: {
              // DOM's html
              html: `<svg class="svg-class" aria-hidden="true">
                      <use xlink:href="#icon-${svgName}"></use>
                     </svg>`,
            },
            // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
            name: 'dom-shape',
            draggable: true,
          });

        }
      }
    })

  }, [])
 
  return (
    <>
    <WorkspaceWrapper>
      <StencilWrapper>
        <Stencil/>
      </StencilWrapper>
      <CanvasWrapper>
        <Canvas ref={ref}/>
      </CanvasWrapper>
      <SidebarWrapper>
        <SideBar/>
      </SidebarWrapper>
    </WorkspaceWrapper>
    </>
  );
};

const WorkspaceWrapper = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr 20rem;
  grid-template-areas: "stencil canvas sidebar";
  height:100%;
`;

const StencilWrapper = styled.div`
  grid-area: stencil;
`;

const CanvasWrapper = styled.div`
  grid-area: canvas;
`;


const SidebarWrapper = styled.div`
  grid-area: sidebar;
`;



