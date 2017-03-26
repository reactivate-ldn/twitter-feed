import styled, { keyframes } from 'styled-components'

// The unit we're converting to is `vw`
const size = px => (px / 1680 * 100).toFixed(2) + 'vw'

const translateX = keyframes`
  from {
    background-position: 0vw 0px;
  }

  to {
    background-position: 100vw 0px;
  }
`

const Layer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

const Wrapper = styled(Layer)`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
`

const Cloud = styled.div`
  position: absolute;
  background: url('/static/cloud.svg');
  background-repeat: no-repeat;
  background-size: contain;
  height: ${size(100)};
  width: ${size(150)};
  top: ${props => props.top};
  left: ${props => props.left};
  transform: scale(${props => props.scale});
`

const Skyline = styled.div`
  position: absolute;
  bottom: ${size(35)};
  left: 0;
  right: 0;
  width: 100%;
  height: ${size(300)};
  background: url('/static/skyline.svg'), url('/static/skyline.min.svg');
  background-repeat: no-repeat, no-repeat;
  background-position: 20% 0, 105% 0;
  background-size: auto 100%, auto 100%;
  /* animation: 30s linear 0s ${translateX} both; */
`

const Landscape = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  bottom: ${size(80)};
  height: ${size(150)};

  background: url('/static/landscape.svg');
  background-repeat: repeat-x;
  background-position: bottom center;
  background-size: auto 100%;
  /* animation: ${translateX} 100s infinite linear both; */
`

const Bridge = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: ${size(-5)};
  width: 100%;
  height: ${size(115)};

  background: url('/static/bridge.svg');
  background-repeat: repeat-x;
  background-size: contain;
  /* animation: ${translateX} 7s infinite linear both; */
`

const Train = styled.div`
  position: absolute;
  left: 35%;
  right: 0;
  bottom: ${size(110)};
  width: 100%;
  height: ${size(45)};

  background: url('/static/train.svg');
  background-repeat: no-repeat;
  background-position: 0% center;
  background-size: auto 100%;
`

const MovingTrain = () => (
  <Wrapper>
    <Cloud top="10%" left="10%" scale="1.8"/>
    <Cloud top="25%" left="5%" scale="1"/>
    <Cloud top="13%" left="80%" scale="2"/>

    <Landscape />
    <Skyline />
    <Bridge />
    <Train />
  </Wrapper>
)

export default MovingTrain
