import Frame from "components/frame";
import { naviPage } from "model/navi";
import frame from '@/styles/Frame.module.css';
import { Supplier } from "model/data";
import table from '@/styles/home/suggestion.module.css';
import style from '@/styles/supplier/supplier.module.css';

export default function Item() {

  const suppliers: Supplier[] = [
    {
      supplier_id: 'ID',
      supplier_name: 'Name',
      supplier_contact: 'Contact',
      supplier_email: 'Email',
      supplier_location: 'Address',
    },
    {
      supplier_id: '12',
      supplier_name: 'QWERT SDN BHD',
      supplier_contact: '1234567890',
      supplier_email: 'qwert@asd.com',
      supplier_location: 'Taman Beasr Yrah jhacbjhsbdc',
    },
    {
      supplier_id: '12',
      supplier_name: 'QWERT SDN BHD',
      supplier_contact: '1234567890',
      supplier_email: 'qwert@asd.com',
      supplier_location: 'Taman Beasr Yrah jhacbjhsbdc',
    },
    {
      supplier_id: '12',
      supplier_name: 'QWERT SDN BHD',
      supplier_contact: '1234567890',
      supplier_email: 'qwert@asd.com',
      supplier_location: 'Taman Beasr Yrah jhacbjhsbdc',
    },
    {
      supplier_id: '12',
      supplier_name: 'QWERT SDN BHD',
      supplier_contact: '1234567890',
      supplier_email: 'qwert@asd.com',
      supplier_location: 'Taman Beasr Yrah jhacbjhsbdc',
    },

  ]

  // Generate random suppliers info
  const moreSuppliers: Supplier[] = [
    {
      supplier_id: '12',
      supplier_name: 'QWERT SDN BHD',
      supplier_contact: '1234567890',
      supplier_email: 'qwert@asd.com',
      supplier_location: 'Taman Beasr Yrah jhacbjhsbdc',
    },
    {
      supplier_id: '12',
      supplier_name: 'QWERT SDN BHD',
      supplier_contact: '1234567890',
      supplier_email: 'qwert@asd.com',
      supplier_location: 'Taman Beasr Yrah jhacbjhsbdc',
    },
    {
      supplier_id: '12',
      supplier_name: 'QWERT SDN BHD',
      supplier_contact: '1234567890',
      supplier_email: 'qwert@asd.com',
      supplier_location: 'Taman Beasr Yrah jhacbjhsbdc',
    },
    {
      supplier_id: '12',
      supplier_name: 'QWERT SDN BHD',
      supplier_contact: '1234567890',
      supplier_email: 'qwert@asd.com',
      supplier_location: 'Taman Beasr Yrah jhacbjhsbdc',
    },
    {
      supplier_id: '12',
      supplier_name: 'QWERT SDN BHD',
      supplier_contact: '1234567890',
      supplier_email: 'qwert@asd.com',
      supplier_location: 'Taman Beasr Yrah jhacbjhsbdc',
    },
    {
      supplier_id: '12',
      supplier_name: 'QWERT SDN BHD',
      supplier_contact: '1234567890',
      supplier_email: 'qwert@asd.com',
      supplier_location: 'Taman Beasr Yrah jhacbjhsbdc',
    },
  ]

  return (
    <div>

      <Frame current={naviPage[2]} ></Frame>
      <div className={frame.frame}>
        <div>
          <h2>Supplier</h2>
        </div>
        <h4>My Supplier</h4>
        {
          suppliers.map((s, index) => (
            <div className={index % 2 == 0 ? table.suggestionBar : table.suggestionBarr} key={index}>
              <div className={style.row}>
                <div className={style.id}> {s.supplier_id}</div>
                <div className={style.name}> {s.supplier_name}</div>
                <div className={style.contact}> {s.supplier_contact}</div>
                <div className={style.email}> {s.supplier_email}</div>
                <div className={style.location}> {s.supplier_location}</div>
              </div>

            </div>
          ))
        }
        <h4>More Supplier</h4>
        {
          suppliers.map((s, index) => (
            <div className={index % 2 == 0 ? table.suggestionBar : table.suggestionBarr} key={index}>
              <div className={style.row}>
                <div className={style.id}> {s.supplier_id}</div>
                <div className={style.name}> {s.supplier_name}</div>
                <div className={style.contact}> {s.supplier_contact}</div>
                <div className={style.email}> {s.supplier_email}</div>
                <div className={style.location}> {s.supplier_location}</div>
              </div>

            </div>
          ))
        }
      </div>

    </div>
  )
}
