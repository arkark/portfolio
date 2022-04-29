import Link from "@/components/utils/Link";
import type WorkType from "@/components/about/work/data/WorkType";

const workData: WorkType[] = [
  {
    title: "git-hist",
    url: "https://github.com/arkark/git-hist",
    imgSrc: "/image/screenshots/tool/git_hist.png",
    genre: "Tool",
    description: "Gitの編集履歴をターミナル上でいい感じに閲覧するツール",
    date: "2021/3/29",
  },
  {
    title: "Distortion Camera",
    url: "https://github.com/arkark/DistortionCamera",
    imgSrc: "/image/screenshots/tool/distortion_camera.png",
    genre: "Tool",
    description:
      "センサに反応して空間を歪ませながら撮影できるカメラのAndroidアプリ",
    date: "2019/7/1",
  },
  {
    title: "SimBlock Visualizer",
    url: "https://github.com/dsg-titech/simblock-visualizer",
    imgSrc: "/image/screenshots/tool/simblock_visualizer.png",
    genre: "Tool",
    description: "ブロックチェーンネットワークシミュレータのビジュアライザ",
    date: "2019/6/27",
  },
  {
    title: "latexmk-docker",
    url: "https://github.com/arkark/latexmk-docker",
    imgSrc: "/image/screenshots/tool/latexmk_docker.png",
    genre: "Tool",
    description: "Docker上で動く快適なLatex環境",
    date: "2019/1",
  },
  {
    title: "D-Prolog",
    url: "https://github.com/arkark/d-prolog",
    imgSrc: "/image/screenshots/tool/d-prolog.png",
    genre: "Tool",
    description: "D言語でつくったProlog処理系",
    date: "2018/11",
  },
  {
    title: "Brainfuck Online Simulator",
    url: "https://arkark.github.io/brainfuck-online-simulator/",
    imgSrc: "/image/screenshots/tool/brainfuck_online_simulator.png",
    genre: "Tool",
    description: "Vue.jsの勉強にBrainfuckのオンライン実行環境",
    date: "2018/6/10",
  },
  {
    title: "Interactive Voronoi Diagram",
    url: "https://www.shadertoy.com/view/ldVyDw",
    imgSrc: "/image/screenshots/design/voronoi.png",
    genre: "Design",
    description: "Shaderでボロノイ図をかいた",
    date: "2018/3/29",
  },
  {
    title: "Oscillating Circle",
    url: "https://arkark.github.io/traP3jam/2017/0828",
    imgSrc: "/image/screenshots/game/oscillating_circle.png",
    genre: "Game",
    description: "traP部内3時間ゲームジャムで作ったゲーム。テーマは「振動」",
    date: "2017/8/28",
  },
  {
    title: "Growth Ball",
    url: "https://arkark.github.io/traP3jam/2017/0611",
    imgSrc: "/image/screenshots/game/growth_ball.png",
    genre: "Game",
    description:
      "traP部内3時間ゲームジャムで作ったゲーム。転がる処理をやってみた。テーマは「成長」",
    date: "2017/6/11",
  },
  {
    title: "the Fall",
    url: "https://arkark.github.io/traP3jam/2017/0504",
    imgSrc: "/image/screenshots/game/the_fall.png",
    genre: "Game",
    description: "traP部内3時間ゲームジャムで作ったゲーム。テーマは「速度」",
    date: "2017/5/4",
  },
  {
    title: "Burning D-man and Gopher",
    url: "https://arkark.github.io/traP3jam/2017/0321",
    imgSrc: "/image/screenshots/game/burning_dman_and_gopher.png",
    genre: "Game",
    description: "traP部内3時間ゲームジャムで作ったゲーム。",
    date: "2017/3/21",
  },
  {
    title: "Rotation Cross",
    url: "https://arkark.github.io/traP3jam/2017/0220",
    imgSrc: "/image/screenshots/game/rotation_cross.png",
    genre: "Game",
    description:
      "traP部内3時間ゲームジャムで作ったパズルゲーム。テーマは「＋」",
    date: "2017/2/20",
  },
  {
    title: "Spread Circle",
    url: "https://arkark.github.io/traP3jam/2017/0213",
    imgSrc: "/image/screenshots/game/spread_circle.png",
    genre: "Game",
    description:
      "traP部内3時間ゲームジャムで作ったミニゲーム。テーマは「うつる」",
    date: "2017/2/13",
  },
  {
    title: "テックちゃん",
    url: "https://twitter.com/arkark_/status/827123984932098049",
    imgSrc: "/image/screenshots/dot/tech_chan.png",
    genre: "PixelArt",
    description: "東京工業大学工大祭のマスコットキャラクター",
    date: "2017/2/2",
  },
  {
    title: "Just Shot",
    url: "https://arkark.github.io/traP3jam/2017/0113",
    imgSrc: "/image/screenshots/game/just_shot.png",
    genre: "Game",
    description:
      "traP部内3時間ゲームジャムで作ったシューティングゲーム。テーマは「限界」",
    date: "2017/1/13",
  },
  {
    title: "D言語くんライフゲーム",
    url: "https://arkark.github.io/DLangManGameOfLife/",
    imgSrc: "/image/screenshots/game/dlangman_game_of_life.png",
    genre: "Game",
    description: (
      <>
        <Link
          color="blue.500"
          href="https://qiita.com/advent-calendar/2016/d-man"
          isExternal
        >
          D言語くん Advent Calendar 2016
        </Link>
        で作ったライフゲーム
      </>
    ),
    date: "2016/12/20",
  },
  {
    title: "Sphere to Plane Transition",
    url: "https://www.shadertoy.com/view/MtdXz7",
    imgSrc: "/image/screenshots/design/sphere_to_plane_transition.png",
    genre: "Design",
    description: "同相写像を利用した遷移のデモ",
    date: "2016/11/12",
  },
  {
    title: "Magic Circle",
    url: "https://www.shadertoy.com/view/MlGGDt",
    imgSrc: "/image/screenshots/design/magic_circle.png",
    genre: "Design",
    description: "魔法陣を作りたくなったのでShaderで作ってみました",
    date: "2016/10/26",
  },
  {
    title: "Teleport Puzzle",
    url: "https://github.com/arkark/TeleportPuzzle",
    imgSrc: "/image/screenshots/game/teleport_puzzle.png",
    genre: "Game",
    description:
      "2016年工大祭向けに制作したパズルアクションゲーム。操作性とレベルデザインを重視してつくった。",
    date: "2016/10",
  },
  {
    title: "One Day One Gif",
    url: "https://github.com/arkark/OneDayOneGif",
    imgSrc: "/image/screenshots/design/one_day_one_gif.png",
    genre: "Design",
    description: "「毎日一枚gifを作る」という謎企画",
    date: "2016/8",
  },
  {
    title: "Polar Coordinates Motion",
    url: "https://www.shadertoy.com/view/ll3GWM",
    imgSrc: "/image/screenshots/design/polar_coordinates_motion.png",
    genre: "Design",
    description: (
      <>
        <Link
          color="blue.500"
          href="http://foxcodex.html.xdomain.jp/PolarCoordinates.html"
          isExternal
        >
          これ
        </Link>
        を実装したかったので作ってみた
      </>
    ),
    date: "2016/7/27",
  },
  {
    title: "フシギダネ",
    url: "https://twitter.com/arkark_/status/742752077667930112",
    imgSrc: "/image/screenshots/dot/pokemon_001.png",
    genre: "PixelArt",
    description: "No.001 フシギダネ",
    date: "2016/6/14",
  },
  {
    title: "IceBreakers | traP",
    url: "https://trap.jp/post/68/",
    imgSrc: "/image/screenshots/game/ice_breakers.png",
    genre: "Game",
    description:
      "ハッカソンHack Uで制作した二人協力ゲーム。プログラムを担当しました。",
    date: "2016/6",
  },
  {
    title: "ジャック・オ・ランタン",
    url: "https://twitter.com/arkark_/status/655434808873455616",
    imgSrc: "/image/screenshots/dot/Jaxk-o-Lantern2.png",
    genre: "PixelArt",
    description: "ハロウィンなので",
    date: "2015/10/17",
  },
  {
    title: "Spin! Spin!",
    url: "https://github.com/arkark/Spin_Spin_",
    imgSrc: "/image/screenshots/game/spin_spin_.png",
    genre: "Game",
    description: "2015年工大祭向けに作った3D障害物避けゲーム",
    date: "2015/10",
  },
  {
    title: "Brainfuck製15パズル",
    url: "https://github.com/arkark/15puzzle_brainfuck",
    imgSrc: "/image/screenshots/game/15puzzle.png",
    genre: "Game",
    description: "brainfuckで制作したコンソールゲーム",
    date: "2015/9",
  },
];

export default workData;
