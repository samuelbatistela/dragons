import { ConentSkeleton, ContainerSkeleton } from './SkeletonLoading.styles';

interface SkeletonLoadingProps {
  lines?: number;
  height?: number;
  spacings?: number;
}
export const SkeletonLoading: React.FC<SkeletonLoadingProps> = ({
  lines = 5,
  height = 20,
  spacings = 6,
}) => {
  return (
    <ContainerSkeleton spacings={spacings}>
      {[...Array(lines)].map((_, index) => (
        <ConentSkeleton key={index} height={height}></ConentSkeleton>
      ))}
    </ContainerSkeleton>
  );
};
