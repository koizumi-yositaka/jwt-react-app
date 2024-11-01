import React from 'react';
import styled from 'styled-components';

// LabelValueDisplayのプロパティ型定義
interface LabelValueDisplayProps {
    label: string;
    value: string | number;
}

// スタイル定義
const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Label = styled.span`
    font-size: 0.9rem;
    color: #888;
`;

const Value = styled.span`
    font-size: 1.2rem;
    color: #333;
    font-weight: bold;
`;

// LabelValueDisplayコンポーネント
const LabelValueDisplay: React.FC<LabelValueDisplayProps> = ({ label, value }) => {
    return (
        <Container>
            <Label>{label}</Label>
            <Value>{value}</Value>
        </Container>
    );
};

export default LabelValueDisplay;