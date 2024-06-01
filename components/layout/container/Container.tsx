import cx from "classnames";

type ContainerTypes = {
  children: React.ReactNode;
  classname?: string;
};

export const Container = ({ children, classname }: ContainerTypes) => {
  return <div className={cx("container", classname)}>{children}</div>;
};
