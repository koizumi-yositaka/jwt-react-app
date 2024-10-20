import { DemoToast } from "../DemoToast";
import { render, screen} from "@testing-library/react";
import { RecoilRoot, useRecoilValue } from "recoil";
import {vi} from "vitest"

// モックデータの定義
const mockToastState = {
  isShow: true,
  message: 'This is a toast message!',
};

// Recoil の useRecoilValue をモック
vi.mock('recoil', async () => {
  const actual = await vi.importActual('recoil'); // 実際の recoil モジュールを取得
  return {
    ...actual,
    useRecoilValue: vi.fn(),
  };
});


describe('Toast Component', () => {

  it('should render the toast message when isShow is true', () => {
    // モック関数にデータを返すよう設定
    (vi.mocked(useRecoilValue)).mockReturnValue(mockToastState);

    // コンポーネントをレンダリング
    render(
      <RecoilRoot>
        <DemoToast />
      </RecoilRoot>
    );

    // トーストメッセージが表示されていることを確認
    const toastMessage = screen.getByText('This is a toast message!');
    expect(toastMessage).toBeInTheDocument();
  });
  it('should not render the toast when isShow is false', () => {
    // モック関数に isShow が false の状態を返すよう設定
    (vi.mocked(useRecoilValue)).mockReturnValue({
      ...mockToastState,
      isShow: false,
    });

    // コンポーネントをレンダリング
    render(
      <RecoilRoot>
        <DemoToast />
      </RecoilRoot>
    );

    // トーストが表示されていないことを確認
    const toastMessage = screen.queryByText('This is a toast message!');
    expect(toastMessage).not.toBeInTheDocument();
  });

});
