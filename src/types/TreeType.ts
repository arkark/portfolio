export interface NodeType {
  content?: React.ReactNode;
  items?: NodeType[];
}

export default interface TreeType {
  items?: NodeType[];
}
