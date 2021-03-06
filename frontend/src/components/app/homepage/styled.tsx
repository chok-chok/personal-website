import styled from 'styled-components';
import { device } from '../../../utils';

export const HomepageAreaBackground = styled.div`
  height: auto;

  @media ${device.laptop} {
    min-height: calc(100vh - 140px);
  } ;
`;

export const HomepageIntroSectionWrapper = styled.div`
  display: block;
  width: 100%;
  height: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 0.5px solid grey;

  @media ${device.laptop} {
    display: inline-block;
    vertical-align: top;
    width: 30%;
    min-height: calc(83vh - 80px);
    margin-top: 20px;
    margin-right: 1%;
    padding-top: 3%;
    padding-bottom: 0px;
    border-right: 0.5px solid grey;
    border-bottom: none;
  } ;
`;

export const HomepageUpdateSectionWrapper = styled.div`
  display: block;
  width: 100%;
  height: auto;
  padding-top: 20px;
  padding-bottom: 20px;

  @media ${device.laptop} {
    display: inline-block;
    width: 68%;
    height: 100%;
    padding-top: 0px;
    padding-bottom: 0px;
  } ;
`;
