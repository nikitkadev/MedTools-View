export interface InvoicesShortlyQueryResult {
    invoicesShortlies: InvoiceShortly[];
    totalRecords: number;
    currentPage: number;
}

export interface InvoiceShortly {
    invoiceUid: number;
    invoiceNumber: string;
    invoiceDate: Date;
    invoiceAmount: number,
    cases: number,
    status: number
}