import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ProductSkeleton() {
  return (
    <div>
      <SkeletonTheme height={"16rem"}>
        <Skeleton />
      </SkeletonTheme>
      <SkeletonTheme width={"50%"}>
        <Skeleton />
      </SkeletonTheme>
      <Skeleton />
    </div>
  );
}
