export interface TwemojiProps {
  emoji: string;
}

const Twemoji: React.FC<TwemojiProps> = ({ emoji }) => {
  const codePoint = (emoji.codePointAt(0) ?? 0).toString(16);

  const src = `https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/${codePoint}.svg`;
  return <img className="inline my-0 mx-1 size-4" src={src} alt={emoji} />;
};

export default Twemoji;
