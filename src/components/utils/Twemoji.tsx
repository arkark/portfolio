import Image from "next/image";

export interface TwemojiProps {
  emoji: string;
  size: number;
}

const Twemoji: React.FC<TwemojiProps> = ({ emoji, size }) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const codePoint = (emoji.codePointAt(0) ?? 0).toString(16);

  // ref. https://github.com/twitter/twemoji/issues/580
  // const src = `https://twemoji.maxcdn.com/v/latest/svg/${codePoint}.svg`;
  const src = `https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/${codePoint}.svg`;

  return <Image src={src} alt={emoji} width={size} height={size}></Image>;
};

export default Twemoji;
