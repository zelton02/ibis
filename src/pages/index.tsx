

import Frame from 'components/frame'
import { naviPage } from 'model/navi'
import frame from '@/styles/Frame.module.css';


export default function Home() {
  return (
    <div>

      <Frame current={naviPage[0]} ></Frame>
      <div className={frame.frame}></div>
    </div>
  )
}
