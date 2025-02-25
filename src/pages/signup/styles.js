import styled from 'styled-components';

export const Container = styled.main`
  max-width: 80%;
  margin: 0 auto;
  margin-top: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 300px;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const Title = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  max-width: 70%;
  margin-bottom: 100px;
  line-height: 44px;
  color: #ffffff;
`;

export const TitleLogin = styled.p`
  min-width: 350px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  margin-bottom: 8px;
`;

export const SubtitleLogin = styled.p`
  min-width: 350px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 35px;
`;

export const InfoText = styled.p`
  max-width: 350px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
`;

export const LoginText = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
`;

export const TextBtn = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #23dd7a;
  margin-left: 5px;
`;
