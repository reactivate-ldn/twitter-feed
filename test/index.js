import React from 'react';
import styled, { keyframes } from 'styled-components/no-parser';

var translateX = keyframes([['@-webkit-keyframes '], [' {from {background-position: 0vw 0px;}to {background-position: 100vw 0px;}}@keyframes '], [' {from {background-position: 0vw 0px;}to {background-position: 100vw 0px;}}']]);

var Layer = styled.div.withConfig({
  componentId: 's9u6px1-0'
})([[' {position: absolute;width: 100%;height: 100%;}']]);

var Wrapper = styled(Layer).withConfig({
  componentId: 's9u6px1-1'
})([[' {top: 0;left: 0;bottom: 0;right: 0;overflow: hidden;}']]);

var Sky = styled(Layer).withConfig({
  componentId: 's9u6px1-2'
})([[' {background: url(\'/static/sky.svg\');background-repeat: repeat-x;background-position: top center;bottom: 95px;left: 0;}']]);

var Skyline = styled(Layer).withConfig({
  componentId: 's9u6px1-3'
})([[' {bottom: 18px;left: 0;right: 0;height: 315px;background: url(\'/static/skyline.svg\');background-repeat: repeat-x;background-position: top center;background-size: cover;-webkit-animation:', translateX, ' 30s infinite linear both;animation:', translateX, ' 30s infinite linear both;}']]);

var Landscape = styled.div.withConfig({
  componentId: 's9u6px1-4'
})([[' {position: absolute;left: 0;right: 0;bottom: 100px;height: 315px;background: url(\'/static/landscape.svg\');background-repeat: repeat-x;background-position: top center;background-size: contain;-webkit-animation:', translateX, ' 100s infinite linear both;animation:', translateX, ' 100s infinite linear both;}']]);

var Bridge = styled.div.withConfig({
  componentId: 's9u6px1-5'
})([[' {position: absolute;left: 0;right: 0;bottom: 0;height: 315px;background: url(\'/static/bridge.svg\');background-repeat: repeat-x;background-position: top center;background-size: contain;-webkit-animation:', translateX, ' 7s infinite linear both;animation:', translateX, ' 7s infinite linear both;}']]);

var Train = styled.div.withConfig({
  componentId: 's9u6px1-6'
})([[' {position: absolute;bottom: -88px;height: 315px;width: 1500px;left: 555px;background: url(\'/static/train.svg\');background-repeat: no-repeat;background-position: top center;background-size: cover;}']]);

var MovingTrain = function MovingTrain() {
  return React.createElement(
    Wrapper,
    null,
    React.createElement(Sky, null),
    React.createElement(Landscape, null),
    React.createElement(Skyline, null),
    React.createElement(Bridge, null),
    React.createElement(Train, null)
  );
};

export default MovingTrain;