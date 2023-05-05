import styled from "@emotion/styled";
import {Stencil} from "./stencil";
import {Canvas} from "./canvas";
import {SideBar} from "./sidebar";

export const Workspace = () => {
 
  return (
    <>
    <WorkspaceWrapper>
      <StencilWrapper>
        <Stencil/>
      </StencilWrapper>
      <CanvasWrapper>
        <Canvas/>
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



