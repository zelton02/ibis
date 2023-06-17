import Frame from 'components/frame'
import {naviPage} from 'model/navi'
import frame from '@/styles/Frame.module.css';
import {connectDb} from 'model/connect';
import Head from 'next/head';
import {Item} from 'model/data';
import {QueryBuilder, sqlHelper, Operation, Table, sme_id} from 'services/dataHandler';


export default function Home() {
    async function testDB() {
        const query = QueryBuilder.GetAll(Table.ITEM)
        sqlHelper<Item>(await connectDb(), query).then(
            (res) => {
                console.log(res)
            }
        )
    }

    return (
        <>
            <Head>
                <title>iBIS: v1</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div>
                <Frame current={naviPage[0]}></Frame>
                <div className={frame.frame}>
                    <h2>Home</h2>
                    <button onClick={() => testDB()}>connect</button>
                </div>
            </div>
        </>
    )
}
