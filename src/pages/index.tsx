

import Frame from 'components/frame'
import { naviPage } from 'model/navi'
import frame from '@/styles/Frame.module.css';
import { connectDb } from 'model/connect';


export default function Home() {

 
  return (
    <div>

      <Frame current={naviPage[0]} ></Frame>
      <div className={frame.frame}>
        <h2>Home</h2>
        <div onClick={()=>connectDb()}>connect</div>
      </div>
    </div>
  )
}
