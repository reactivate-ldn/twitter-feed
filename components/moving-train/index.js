import styled, { keyframes } from 'styled-components'
import Cloud from './cloud'
import Skyline from './skyline'
import Landscape from './landscape'
import Bridge from './bridge'
import Train from './train'

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;

  @media screen and (orientation:portrait) {
    transform: scale(1.5);
    transform-origin: bottom center;
  }
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
