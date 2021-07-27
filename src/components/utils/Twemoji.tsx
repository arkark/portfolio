import Image from "next/image";

export interface TwemojiProps {
  emoji: string;
  size: number;
}

const Twemoji: React.VFC<TwemojiProps> = ({ emoji, size }) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const codePoint = (emoji.codePointAt(0) ?? 0).toString(16);
  const src = `https://twemoji.maxcdn.com/v/latest/svg/${codePoint}.svg`;
  return <Image src={src} alt={emoji} width={size} height={size}></Image>;
};

export default Twemoji;
