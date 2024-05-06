export interface LinkProps {
  href: string;
  children?: React.ReactNode;
  isExternal?: boolean;
}

const Link: React.FC<LinkProps> = ({ href, children, isExternal = true }) => {
  const externalProps = isExternal
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <a className="link" href={href} {...externalProps}>
      {children}
    </a>
  );
};

export default Link;
