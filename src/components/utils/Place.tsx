import Twemoji from "@/components/utils/Twemoji";

export interface PlaceProps {
  value: string;
}

const Place: React.FC<PlaceProps> = ({ value }) => {
  const emojis: Record<string, string | undefined> = {
    "1st": "🥇",
    "2nd": "🥈",
    "3rd": "🥉",
  };
  const emoji = emojis[value];
  return (
    <>
      <span className="ordinal">{value}</span>
      {emoji && <Twemoji emoji={emoji}></Twemoji>}
    </>
  );
};

export default Place;
