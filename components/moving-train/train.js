import styled from 'styled-components'
import { size } from './utils'

const Train = styled.div`
  position: absolute;
  left: 35%;
  right: 0;
  bottom: ${size(107)};
  width: 100%;
  height: ${size(45)};

  background: url('/static/train.svg');
  background-repeat: no-repeat;
  background-position: 0% center;
  background-size: auto 100%;
`

export default Train;
