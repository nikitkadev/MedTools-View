export interface InvoicesShortlyQueryResult {
    invoicesShortlies: InvoiceShortly[];
    totalRecords: number;
}

export interface InvoiceShortly {
    invoiceNumber: string;
    invoiceDate: Date;
    invoiceAmount: number,
    cases: number,
    status: number
}