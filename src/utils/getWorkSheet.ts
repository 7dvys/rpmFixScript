import * as XLSX from 'xlsx';

export const getWorkSheet = ({workBook,sheetIndex}:{workBook:XLSX.WorkBook,sheetIndex:number})=>{
    const sheetName = workBook.SheetNames[sheetIndex];
    const workSheet = workBook.Sheets[sheetName];
    return workSheet;
}