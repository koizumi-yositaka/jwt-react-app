
import styled from 'styled-components';



const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 20px auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
`;

// 記事の画像
const ArticleImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

// タイトル部分
const ArticleTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 16px;
`;

// 記事の本文
const ArticleContent = styled.p`
  font-size: 16px;
  margin: 16px;
  line-height: 1.5;
  color: #333;
`;

// 記事の公開日
const ArticleDate = styled.span`
  font-size: 14px;
  color: #999;
  margin: 16px;
`;


type ArticleType = {
    imageUrl:string,
    title:string,
    date:string,
    content:string
}
export const Article = ({imageUrl,title,date,content}:ArticleType) => {
  return (
    <ArticleContainer>
      <ArticleImage src={imageUrl} alt="News" />
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleDate>{date}</ArticleDate>
      <ArticleContent>{content}</ArticleContent>
    </ArticleContainer>
  );
}
