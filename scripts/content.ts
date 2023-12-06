// dictionaryの型定義
type Dictionary = {
  [key: string]: string;
};

// テクニカルタームとその読み方をマッピングした辞書
const dictionary: Dictionary = {
  qiita: "キータ",
  vite: "ヴィート",
  vue: "ビュー",
  angular: "アングラー",
  svelte: "スベルト",
  python: "パイソン",
  rust: "ラスト",
  kotlin: "コトリン",
  gif: "ジフ",
  exe: "エグゼ",
  ieee: "アイエトリプルイー",
  kubernetes: "クーバネティス",
  awk: "オーク",
  lambda: "ラムダ",
  nginx: "エンジンエックス",
  postgresql: "ポストグレスキューエル",
  jupyter: "ジュパイター",
  laravel: "ララベル",
  yarn: "ヤーン",
  apach: "アパッチ",
  cache: "キャッシュ",
  arch: "アーチ",
  auth: "オース",
  bios: "バイオス",
  zsh: "ジーシェル",
  cidr: "サイダー",
  column: "カラム",
  csrf: "シーサーフ",
  ddos: "ディードス",
};

// DOMツリーを再帰的に探索し、テクニカルタームをルビ注釈付きに置換する関数
export function walk(node: HTMLElement | ChildNode) {
  // ノードがHTMLElementの場合
  if (node instanceof HTMLElement) {
    // 辞書の各エントリーについて処理
    for (const term in dictionary) {
      // 正規表現を作成（大文字小文字を区別しない）
      const regex = new RegExp(`(${term})`, "gi");
      // ノードのテキスト内容が存在し、テクニカルタームを含む場合
      if (node.textContent && regex.test(node.textContent)) {
        // ルビ注釈のテキストを取得
        const rubyText = dictionary[term];
        // テクニカルタームをルビ注釈付きに置換
        node.innerHTML = node.innerHTML.replace(
          regex,
          (match) => `<ruby>${match}<rt>${rubyText}</rt></ruby>`
        );
      }
    }
  } else {
    // ノードがHTMLElementでない場合
    // 子ノードを再帰的に探索
    for (let i = 0; i < node.childNodes.length; i++) {
      walk(node.childNodes[i] as HTMLElement);
    }
  }
}

// body要素から探索を開始
walk(document.body);
