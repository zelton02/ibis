import Frame from "components/frame";
import { naviPage } from "model/navi";
import frame from '@/styles/Frame.module.css';
import table from '@/styles/home/suggestion.module.css';
import style from '@/styles/item/items.module.css';
import { Item } from "model/data";


export default function Item() {


  const items: Item[] = [
    {
      item_id: 'ID',
      item_name: 'Name',
    },
    {
      item_id: '123',
      item_name: 'asd',
    },
    {
      item_id: '123',
      item_name: 'asd',
    },
    {
      item_id: '123',
      item_name: 'asd',
    },
  ]


  return (
    <>

      <Frame current={naviPage[1]} ></Frame>
      <div className={frame.frame}>
        <h2>Suggestion</h2>
        <div className={table.table}>
          {
            items.map((i, index) => (
              <div className={index % 2 == 0 ? table.suggestionBar : table.suggestionBarr} key={index}>
                <div className={style.row}>
                  <div className={style.id}> {i.item_id}</div>
                  <div className={style.name}> {i.item_name}</div>
                </div>

              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
