import styled from 'styled-components';

export const Cover = styled.img`
  width: 50px;
`;

export const TableRow = styled.tr<{isEven: boolean}>`
  background-color: ${({ isEven }) => isEven && '#CBE1DD'};
`;
