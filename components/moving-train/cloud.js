import styled from 'styled-components'
import { size } from './utils'

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

export default Cloud
