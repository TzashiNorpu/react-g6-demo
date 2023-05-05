import styled from "@emotion/styled";
import SvgIcon from "../../../svg";

export const Stencil = () => {
  return (
  <Container>
    <SvgIcon svgName='wulitu_shujuku' />
    <SvgIcon svgName='wulitu_yingyongfuwuqi' />
  </Container>);
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;