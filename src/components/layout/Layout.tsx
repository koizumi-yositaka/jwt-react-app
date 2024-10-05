import React from 'react'
import styled from 'styled-components'


// 固定ヘッダーのスタイル
const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

// コンテンツのスタイル（ヘッダー分のスペースを確保）
const Content = styled.div`
  padding-top: 60px; /* ヘッダーの高さと同じにする */
  min-height: 100vh;
`;


export const Layout = ({header,body}:{header:React.ReactNode,body:React.ReactNode}) => {
  return (
    <>
      <Header>
        {header}
      </Header>
      <Content>
        {body}
      </Content>
    </>
  );
}
