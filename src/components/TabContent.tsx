export interface TabContentProps {
  name: string;
  label: string;
  children: React.ReactNode;
  defaultChecked?: boolean;
}

const TabContent: React.FC<TabContentProps> = ({
  name,
  label,
  defaultChecked,
  children,
}) => {
  return (
    <>
      <input
        type="radio"
        className="tab"
        aria-label={label}
        name={name}
        defaultChecked={defaultChecked}
      />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        <div className="prose prose-img:my-0 max-w-full">{children}</div>
      </div>
    </>
  );
};

export default TabContent;
