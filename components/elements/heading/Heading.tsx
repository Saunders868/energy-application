import cx from "classnames";
import React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading = ({ as = "h2", children, className }: HeadingProps) => {
  const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(as, props, children);

  return <Heading className={cx(className)}>{children}</Heading>;
};
