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
    transaction_id: string;
    quantity_used: number;
    description: string;
}

export type ItemInRecord = {
    item_id: string;
    supplier_id: string;
    order_timestamp: Date;
    quantity: number;
    total_price: number;
    unit_price: number;
    sme_id: string;
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
    item_quantity: number;
    item_max_threshold: number;
    item_min_threshold: number;
    preferred_supplier: string;
    sme_id: string;
    expiry_date: Date;
}