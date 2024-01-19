import * as XLSX from 'xlsx';

export const writeXslxFile = ({outputWorkbook,outputName}:{outputName:string,outputWorkbook:XLSX.WorkBook})=>{
    XLSX.writeFile(outputWorkbook,'output/'+outputName);
}