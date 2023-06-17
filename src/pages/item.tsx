import Frame from "components/frame";
import { naviPage } from "model/navi";
import frame from '@/styles/Frame.module.css';


export default function Item() {
  return (
    <div>

      <Frame current={naviPage[1]} ></Frame>
      <div className={frame.frame}>
      <h2>Item</h2>

      </div>

    </div>
  )
}
