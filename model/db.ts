
const item: string = 'item';
const supplier: string = 'supplier';
const item_owned: string = 'item_owned';
const item_in_record: string = 'item_in_record';
const item_out_record: string = 'item_out_record';



export const dbReq = async (data: object, table: string, opt: string) => {
    const path: string = '/db/' + table + opt;

    fetch(path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            console.log(response.json())
            return response.json()

        })
        .catch(err => {
            console.log(err)
            return err

        })

}


