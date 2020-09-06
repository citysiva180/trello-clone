import React from "react";
import styled from "styled-components";

const Thumbnail = styled.div`
  height: 280px;
  width: 280px;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  padding: 10px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 2px 4px grey;
`;

const Title = styled.h4`
  color: white;
  font-family: "Fredoka One", cursive;
  font-size: 30px;
  text-decoration: none;
`;

const BoardThumbnail = ({ title }) => {
  console.log(title);
  return (
    <Thumbnail>
      <Title>{title}</Title>
    </Thumbnail>
  );
};

export default BoardThumbnail;
