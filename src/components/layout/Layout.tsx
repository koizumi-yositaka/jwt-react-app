import React from 'react'
import styled from 'styled-components'


// 固定ヘッダーのスタイル
const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

// コンテンツのスタイル（ヘッダー分のスペースを確保）
const Content = styled.div`

  padding-top: 40px; /* ヘッダーの高さと同じにする */
  min-height: 100vh;
  display: flex;
  
`;


const LeftPane= styled.div`
  width:30%;

`;

const RightPane=styled.div`
  padding: 10px;
  width:70%;
`


export const Layout = ({header,body,navigation}:{header:React.ReactNode,body:React.ReactNode,navigation:React.ReactNode}) => {
  return (
    <>
      <Header>
        {header}
      </Header>
      <Content>
        <LeftPane>{navigation}</LeftPane>
        <RightPane>{body}</RightPane>
        
      </Content>
    </>
  );
}
