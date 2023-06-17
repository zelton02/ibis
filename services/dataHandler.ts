import {Connection, ExecutedQuery} from "@planetscale/database"

enum Operation {
    SELECT = "SELECT",
    INSERT = "INSERT",
    UPDATE = "UPDATE",
    DELETE = "DELETE"
}

enum Table {
    ITEM = "item",
    SUPPLIER = "supplier",
    ITEM_OWNED = "item_owned",
    ITEM_IN_RECORD = "item_in_record",
    ITEM_OUT_RECORD = "item_out_record",
}

let sme_id = 'sme_id';

class QueryBuilder {
    static Add = (table: Table, data: object) => {
        switch (table) {
            case Table.ITEM:
                return `INSERT INTO item (item_id, item_name) VALUES (?, ?)`
                break;
            case Table.SUPPLIER:
                return `INSERT INTO supplier (supplier_id, supplier_name, supplier_contact, supplier_email, supplier_location) VALUES (?, ?, ?, ?, ?)`
                break;
            case Table.ITEM_IN_RECORD:
                return `INSERT INTO item_in_record (item_id, sme_id, order_timestamp, supplier_id, quantity_in, total_price, unit_price, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
                break;
            case Table.ITEM_OUT_RECORD:
                return `INSERT INTO item_out_record (item_id, sme_id, out_timestamp, quantity_out, description) VALUES (?, ?, ?, ?, ?)`
                break;
            case Table.ITEM_OWNED:
                return `INSERT INTO item_owned (item_id, sme_id, batch_id, preferred_supplier, item_quantity, item_max_threshold, item_min_threshold, expiry_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
                break;
        }
    }

    static GetAll = (table: Table) => {
        switch (table) {
            case Table.ITEM:
                return `SELECT * FROM item`
                break;
            case Table.SUPPLIER:
                return `SELECT * FROM supplier`
                break;
            case Table.ITEM_IN_RECORD:
                return `SELECT * FROM item_in_record`
                break;
            case Table.ITEM_OUT_RECORD:
                return `SELECT * FROM item_out_record`
                break;
            case Table.ITEM_OWNED:
                return `SELECT * FROM item_owned`
                break;
        }
    }

    static GetID = (table: Table, idField: string, id: string) => {
        switch (table) {
            case Table.ITEM:
                return `SELECT * FROM item WHERE ${idField} = ${id}`
                break;
            case Table.SUPPLIER:
                return `SELECT * FROM supplier WHERE ${idField} = ${id}`
                break;
            case Table.ITEM_IN_RECORD:
                return `SELECT * FROM item_in_record WHERE ${idField} = ${id}`
                break;
            case Table.ITEM_OUT_RECORD:
                return `SELECT * FROM item_out_record WHERE ${idField} = ${id}`
                break;
            case Table.ITEM_OWNED:
                return `SELECT * FROM item_owned WHERE ${idField} = ${id}`
                break;
        }
    }
}

async function sqlHelper<Type>(conn: Connection, query: string, params: Type[] | undefined = undefined): Promise<Type[] | boolean> {
    let results: ExecutedQuery
    if (params === undefined) {
        results = await conn.execute(query)
    } else {
        // Validate length of params equal to number of ? in query
        if (query.split('?').length - 1 !== params.length) {
            throw new Error('Number of params does not match number of ? in query')
        }
        results = await conn.execute(query, params)
    }
    // Check is insert or read
    console.log(results)
    if (results.insertId == "0") {
        // Read
        let datas = results.rows
        if (datas.length == 0) {
            return false
        }
        // Convert Row[] to Type[]
        let data: Type[] = []
        for (let i = 0; i < datas.length; i++) {
            data.push(datas[i] as Type)
        }
        return data
    } else {
        // Insert
        return true
    }
}

export {QueryBuilder, sqlHelper, Operation, Table, sme_id}
