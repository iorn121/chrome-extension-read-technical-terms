import { walk } from "./content";

describe("walk", () => {
  it("should replace text with ruby annotation", () => {
    // JSDOMを使用してテスト用のDOMを作成
    document.body.innerHTML = "<div>qiita</div>";

    // walk関数を実行
    walk(document.body);

    // 結果を検証
    expect(document.body.innerHTML).toBe(
      "<div><ruby>qiita<rt>キータ</rt></ruby></div>"
    );
  });

  it("should preserve case when adding ruby annotation", () => {
    // JSDOMを使用してテスト用のDOMを作成
    document.body.innerHTML = "<div>Qiita</div>";

    // walk関数を実行
    walk(document.body);

    // 結果を検証
    expect(document.body.innerHTML).toBe(
      "<div><ruby>Qiita<rt>キータ</rt></ruby></div>"
    );
  });

  it("should not replace text if not in dictionary", () => {
    // JSDOMを使用してテスト用のDOMを作成
    document.body.innerHTML = "<div>notInDictionary</div>";

    // walk関数を実行
    walk(document.body);

    // 結果を検証
    expect(document.body.innerHTML).toBe("<div>notInDictionary</div>");
  });
});
