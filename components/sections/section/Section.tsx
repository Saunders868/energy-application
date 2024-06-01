import cx from "classnames";

type SectionTypes = {
  children: React.ReactNode;
  classname?: string;
};

export const Section = ({ children, classname }: SectionTypes) => {
  return (
    <section className={cx("py-24 sm:py-48 overflow-hidden", classname)}>
      {children}
    </section>
  );
};
