import cx from "classnames";

type SubTitle = {
  subTitle: string;
  classname?: string;
};

export const SubTitle = ({ subTitle, classname }: SubTitle) => {
  return (
    <div className="flex text-white w-full items-center gap-2 border-b border-neutral-300 mb-12 sm:mb-14 pb-4">
      <span className="h-3 w-3 bg-primary-300 block rounded-full" />
      <span className={cx(classname)}>{subTitle}</span>
    </div>
  );
};
