import * as XLSX from 'xlsx';

export const sheetToJson = ({workSheet}:{workSheet:XLSX.WorkSheet})=>{
    const json:(string|null)[][] = XLSX.utils.sheet_to_json(workSheet,{defval:null,header:1});
    return json;
}