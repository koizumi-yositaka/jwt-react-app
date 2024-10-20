import { Button } from "./Button";
import { render, screen,fireEvent} from "@testing-library/react";

const buttonLbl="AAA"

describe('Button Component', () => {

  describe("First Button",()=>{
    it('ボタンが描画される', () => {
      const clickEvent = ()=>{}
      render(<Button data-level="first" onClick={clickEvent}>{buttonLbl}</Button>);
      const btn = screen.getByRole('button', { name: buttonLbl});
      expect(btn).toBeInTheDocument();
      expect(btn).toHaveStyle({ backgroundColor: '#3780d3' });

    });
    it('ボタンクリック時にイベントが実行される', () => {
      const clickEvent = vi.fn()
      render(<Button data-level="first" onClick={clickEvent}>{buttonLbl}</Button>);
      const btn = screen.getByRole('button', { name: buttonLbl});
      fireEvent.click(btn);
      expect(clickEvent).toHaveBeenCalled()

    });
  })
  describe("Second Button",()=>{
    it('ボタンが描画される', () => {
      const clickEvent = ()=>{}
      render(<Button data-level="second" onClick={clickEvent}>{buttonLbl}</Button>);
      const btn = screen.getByRole('button', { name: buttonLbl});
      expect(btn).toBeInTheDocument();
      expect(btn).toHaveStyle({ backgroundColor: '#f24e3c' });

    });
    it('ボタンクリック時にイベントが実行される', () => {
      const clickEvent = vi.fn()
      render(<Button data-level="second" onClick={clickEvent}>{buttonLbl}</Button>);
      const btn = screen.getByRole('button', { name: buttonLbl});
      fireEvent.click(btn);
      expect(clickEvent).toHaveBeenCalled()

    });
  })

});
