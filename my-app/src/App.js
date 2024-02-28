import React, { useId, useState } from "react";
import styled from "styled-components";
const Text1 = styled.p`
  color: orangered;
  font-weight: bold;
`;
const Text2 = styled.p`
  font-style: italic;
  color: brown;
`;

const Text3 = styled.p`
  background-color: orange;
  font-weight: bold;
  color: white;
`;
// const Container = styled.div`
//   width: 200px;
//   border: 2px solid brown;
//   padding: 10px;
//   text-align: center;
// `;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

const Input = styled.input`
  margin: 5px;
  font-size: 18px;
`;
function App() {
  return (
    <Container>
      <Text1>text</Text1>
      <Text2>text</Text2>
      <Text3>text</Text3>
    </Container>
  );
}
export default App;
