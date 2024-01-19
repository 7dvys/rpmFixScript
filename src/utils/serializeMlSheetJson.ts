import { ML_COLUMNS } from "../constants";
import { SerializedMlProducts, SheetJson } from "../types";

export const serializeMlSheetJson = ({mlSheetJson}:{mlSheetJson:SheetJson})=>mlSheetJson.reduce((acc,row)=>{
    const titulo = row[ML_COLUMNS.titulo] || ''
    const sku = row[ML_COLUMNS.sku] || ''
    const mla = row[ML_COLUMNS.mla] || ''

    const skuName = sku === ''?'withoutSku':sku;
    acc[mla] = {...acc[mla],[skuName]:titulo};
    return acc;
},{} as SerializedMlProducts)