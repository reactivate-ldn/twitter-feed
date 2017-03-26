import styled, { keyframes } from 'styled-components'
import { size } from './utils'

const moveSkyline = keyframes`
  0% {
    background-position: -60% 0;
  }

  99.999% {
    background-position: 160% 0;
  }

  100% {
    background-position: -60% 0;
  }
`

const Skyline = styled.div`
  position: absolute;
  bottom: ${size(35)};
  left: 0;
  right: 0;
  width: 100%;
  height: ${size(300)};
  background: url('/static/skyline.svg');
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: contain;

  animation: ${moveSkyline} 30s linear infinite;
  animation-delay: ${({ delay = 0 }) => delay * -30}s;
  will-change: background-position;
`

export default () => (
  <div>
    <Skyline />
    <Skyline delay={0.4} />
  </div>
)
