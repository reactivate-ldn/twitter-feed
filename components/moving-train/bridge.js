import styled, { keyframes } from 'styled-components'
import { size } from './utils'

const moveBridge = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 43.5% 0;
  }
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

  animation: ${moveBridge} 5s linear infinite;
  will-change: background-position;
`

export default Bridge
