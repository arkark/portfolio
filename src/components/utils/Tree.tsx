import TreeType, { type NodeType } from "@/types/TreeType";

export type NodeProps = NodeType;
export type TreeProps = TreeType;

const Node: React.FC<NodeProps> = ({ content, items }) => {
  return (
    <>
      {content}
      {items && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <Node {...item}></Node>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const Tree: React.FC<TreeProps> = ({ items }) => {
  return <Node items={items}></Node>;
};

export default Tree;
