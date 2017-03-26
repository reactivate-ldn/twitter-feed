import styled, { keyframes } from 'styled-components'
import { size } from './utils'

const moveLandsacpe = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 157% 0;
  }
`

const Landscape = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  bottom: ${size(90)};
  height: ${size(150)};

  background: url('/static/landscape.svg');
  background-repeat: repeat-x;
  background-position: 0 0;
  background-size: auto 100%;

  animation: ${moveLandsacpe} 40s linear infinite;
  will-change: background-position;
`

export default Landscape
