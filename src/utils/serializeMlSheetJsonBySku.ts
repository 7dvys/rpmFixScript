import { ML_COLUMNS } from "../constants";
import { SerializedMlProducts, SheetJson } from "../types";

export const serializeMlSheetJsonBySku = ({mlSheetJson}:{mlSheetJson:SheetJson})=>mlSheetJson.reduce((acc,row)=>{
    const titulo = row[ML_COLUMNS.titulo] || ''
    const sku = row[ML_COLUMNS.sku] || ''
    const mla = row[ML_COLUMNS.mla] || ''

    const skuName = sku === ''?'mla:'+mla:sku;
    acc[skuName] = {mla,titulo};
    return acc;
},{} as SerializedMlProducts)