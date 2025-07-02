import styled, { css, keyframes } from 'styled-components';

interface ContainerSkeletonProps {
  spacings: number;
}
export const ContainerSkeleton = styled.div<ContainerSkeletonProps>`
  ${({ spacings }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${spacings}px;
  `}
`;
const animation = keyframes`
    from {
        background-position: 0% 0%;
    }
    to {
        background-position: 135% 0%;
    }
`;

interface ConentSkeletonProps {
  height: number;
}
export const ConentSkeleton = styled.div<ConentSkeletonProps>`
  ${({ height }) => css`
    width: 100%;
    height: ${height}px;
    opacity: 0.6;
    border-radius: 8px;
    cursor: progress;
    background: linear-gradient(-90deg, #91aab4 0%, #e6e6e6 50%, #91aab4 100%);
    background-size: 400% 400%;
  `}

  animation: ${animation} 1.2s ease-in-out infinite;
`;
