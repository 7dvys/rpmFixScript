import * as XLSX from 'xlsx';
import { SHEET_INDEX } from "../constants"
import { genPublicacionesDiscriminadasWorkBook } from "./genPublicacionesDiscriminadasXlsx"
import { getPublicacionesDiscriminadas } from "./getPublicacionesDiscriminadas"
import { getWorkSheet } from "./getWorkSheet"
import { serializeCbSheetJson } from "./serializeCbSheetJson"
import { serializeMlSheetJson } from "./serializeMlSheetJson"
import { sheetToJson } from "./sheetToJson"
import { writeXslxFile } from "./writeXlsxFile"

export const writePublicacionesDiscriminadas = ({cbWorkBook,mlWorkBook,outputName}:{outputName:string,cbWorkBook:XLSX.WorkBook,mlWorkBook:XLSX.WorkBook})=>{
    const mlWorkSheet = getWorkSheet({workBook:mlWorkBook,sheetIndex:SHEET_INDEX.ml})
    const cbWorkSheet = getWorkSheet({workBook:cbWorkBook,sheetIndex:SHEET_INDEX.cb})
    
    const cbSheetJson = sheetToJson({workSheet:cbWorkSheet})
    const mlSheetJson = sheetToJson({workSheet:mlWorkSheet})
    
    const serializedCbProducts = serializeCbSheetJson({cbSheetJson})
    const serializedMlProducts = serializeMlSheetJson({mlSheetJson})
    
    const publicacionesDiscriminadas = getPublicacionesDiscriminadas({serializedCbProducts,serializedMlProducts})
    
    const outputWorkbook = genPublicacionesDiscriminadasWorkBook({publicacionesDiscriminadas,serializedMlProducts})
    
    writeXslxFile({outputWorkbook,outputName});
}