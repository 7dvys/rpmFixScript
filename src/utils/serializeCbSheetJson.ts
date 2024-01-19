import { CB_COLUMNS } from "../constants";
import { SerializedCbProducts, SheetJson } from "../types";

export const serializeCbSheetJson = ({cbSheetJson}:{cbSheetJson:SheetJson})=>
    cbSheetJson.reduce((acc,row)=>{
        const titulo = row[CB_COLUMNS.titulo] || '';
        const sku = row[CB_COLUMNS.sku] || '';
        const estado = row[CB_COLUMNS.estado] || '';
    
        if(sku in acc || sku === null || sku === undefined || sku === '')
        return acc;
    
        acc[sku] = {titulo,estado};
        return acc;
    },{} as SerializedCbProducts);
