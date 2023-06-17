export type Item = {
    item_id: string;
    item_name: string;
}

export type Supplier = {
    supplier_id: string;
    supplier_name: string;
    supplier_contact: string;
    supplier_email: string;
    supplier_location: string;
}

export type Transaction = {
    transaction_id: string;
    transaction_timestamp: Date;
}

export type ItemOutRecord = {
    item_id: string;
    sme_id: string;
    out_timestamp: string;
    quantity_out: number;
    description: string;
}

export type ItemInRecord = {
    item_id: string;
    sme_id: string;
    order_timestamp: Date;
    supplier_id: string;
    quantity_in: number;
    total_price: number;
    unit_price: number;
    status: string;
}

export type SME = {
    sme_id: string;
    sme_name: string;
    sme_contact: string;
    sme_email: string;
    sme_industry: string;
}

export type ItemOwned = {
    item_id: string;
    sme_id: string;
    batch_id: number;
    preferred_supplier: string;
    item_quantity: number;
    item_max_threshold: number;
    item_min_threshold: number;
    expiry_date: Date;
}
