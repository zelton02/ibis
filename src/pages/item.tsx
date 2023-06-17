import Frame from "components/frame";
import { naviPage } from "model/navi";
import frame from '@/styles/Frame.module.css';
import table from '@/styles/home/suggestion.module.css';
import style from '@/styles/item/items.module.css';
import { Item } from "model/data";
import DropdownAddButton from "./dropdownAddButton";


export default function Item() {

  //   item_id: string;
  //   sme_id: string;
  //   batch_id: number;
  //   preferred_supplier: string;
  //   item_quantity: number;
  //   item_max_threshold: number;
  //   item_min_threshold: number;
  //   expiry_date: Date;

  const items: Item[] = [
    {
      item_id: 'ID',
      item_name: 'Name',
      
    },
    {
      item_id: '1',
      item_name: 'Coconut Oil',
    },
    {
      item_id: '2',
      item_name: 'Jasmine Tea',
    },
    {
      item_id: '3',
      item_name: 'Banana',
    },
  ]


  return (
    <>

      <Frame current={naviPage[1]} ></Frame>
      <div className={frame.frame}>
        <div className={style.title_row}>
          <h2>Items Owned</h2>
          <DropdownAddButton />
        </div>
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
