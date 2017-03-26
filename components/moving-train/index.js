import styled, { keyframes } from 'styled-components'

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

const Sky = styled(Layer)`
  background: url('/static/sky.svg');
  background-repeat: repeat-x;
  background-position: top center;
  bottom: 95px;
  left: 0;
`

const Skyline = styled(Layer)`
  bottom: 18px;
  left: 0;
  right: 0;
  height: 315px;
  background: url('/static/skyline.svg');
  background-repeat: repeat-x;
  background-position: top center;
  background-size: cover;
  animation: 30s linear 0s ${translateX} both;
`

const Landscape = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 100px;
  height: 315px;

  background: url('/static/landscape.svg');
  background-repeat: repeat-x;
  background-position: top center;
  background-size: contain;
  animation: ${translateX} 100s infinite linear both;
`

const Bridge = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 315px;
  background: url('/static/bridge.svg');
  background-repeat: repeat-x;
  background-position: top center;
  background-size: contain;
  animation: ${translateX} 7s infinite linear both;
`

const Train = styled.div`
  position: absolute;
  bottom: -88px;
  height: 315px;
  width: 1500px;
  left: 555px;
  background: url('/static/train.svg');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
`

const MovingTrain = () => (
  <Wrapper>
    <Sky />
    <Landscape />
    <Skyline />
    <Bridge />
    <Train />
  </Wrapper>
)

export default MovingTrain
