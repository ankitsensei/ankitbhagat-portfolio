import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProjectCompSkeleton = () => {
  return (
    <div className=" dark:bg-zinc-900 w-full md:w-68 lg:w-68 pb-2 text-black dark:text-white border border-zinc-800 rounded-xl">
      <div className="h-full w-full flex flex-col mx-auto font-inter">
        <Skeleton height={160} width="100%" className="rounded-2xl" />
        <div className="flex flex-col items-center gap-4 w-full h-full">
          <div className="px-4 py-2 flex flex-col gap-3 justify-between">
            <div className="flex flex-col">
              <Skeleton height={24} width={100} />
              <Skeleton height={15} width="100%" />
              <Skeleton height={15} width="100%" />
              <Skeleton height={15} width="100%" />
            </div>
            <div className="flex flex-wrap gap-1 cursor-default">
              <Skeleton height={20} width={60} />
              <Skeleton height={20} width={70} />
              <Skeleton height={20} width={50} />
              <Skeleton height={20} width={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCompSkeleton;
