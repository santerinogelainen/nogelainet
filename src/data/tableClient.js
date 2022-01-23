import { TableClient, AzureSASCredential } from "@azure/data-tables";

const account = process.env.GATSBY_AZURE_TABLES_ACCOUNT;
const sas = process.env.GATSBY_AZURE_TABLES_SAS;

export const getTableClient = (table) => {
    return new TableClient(
        `https://${account}.table.core.windows.net`,
        table,
        new AzureSASCredential(sas)
      );
}