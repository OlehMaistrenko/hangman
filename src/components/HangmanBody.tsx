const BODY_PARTS = [
  <circle
    key="HEAD"
    cx="170"
    cy="79"
    r="21.5"
    stroke="currentColor"
    strokeWidth="4"
  />,
  <path
    key="BODY"
    d="M167.5 176C167.5 177.381 168.619 178.5 170 178.5C171.381 178.5 172.5 177.381 172.5 176H167.5ZM167.5 100V176H172.5V100H167.5Z"
    fill="currentColor"
  />,
  <path
    key="ARM_LEFT"
    d="M170 129L209 112"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
  />,
  <path
    key="ARM_RIGHT"
    d="M170 129L131 112"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
  />,
  <path
    key="LEG_LEFT"
    d="M207.643 213.47C208.455 214.219 209.72 214.168 210.47 213.357C211.219 212.545 211.168 211.28 210.357 210.53L207.643 213.47ZM168.643 177.47L207.643 213.47L210.357 210.53L171.357 174.53L168.643 177.47Z"
    fill="currentColor"
  />,
  <path
    key="LEG_RIGHT"
    d="M132.357 213.47C131.545 214.219 130.28 214.168 129.53 213.357C128.781 212.545 128.832 211.28 129.643 210.53L132.357 213.47ZM171.357 177.47L132.357 213.47L129.643 210.53L168.643 174.53L171.357 177.47Z"
    fill="currentColor"
  />,
];
type HangmanBodyProps = {
  score: number;
};
const HangmanBody = ({ score }: HangmanBodyProps) => {
  const body = BODY_PARTS.slice(0, score);
  console.log(score);

  return (
    <svg
      className="max-v-full block h-max  max-h-full min-h-[20rem] text-teal-700"
      width="337"
      height="276"
      viewBox="0 0 337 276"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {body}
      <line
        x1="7.5"
        y1="268.5"
        x2="329.5"
        y2="268.5"
        stroke="currentColor"
        strokeWidth="15"
        strokeLinecap="round"
      />
      <line
        x1="87.5282"
        y1="13.4716"
        x2="88.4905"
        y2="268.472"
        stroke="currentColor"
        strokeWidth="15"
        strokeLinecap="round"
      />
      <line
        x1="87.5"
        y1="7.5"
        x2="206.5"
        y2="7.5"
        stroke="currentColor"
        strokeWidth="15"
        strokeLinecap="round"
      />
      <path
        d="M172 7C172 5.89543 171.105 5 170 5C168.895 5 168 5.89543 168 7L172 7ZM168 7L168 58L172 58L172 7L168 7Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HangmanBody;
