import { MlProductsWithSkusWithMatch, PublicacionesDiscriminadas, SerializedMlProducts, SheetJson } from "../types";
import * as XLSX from 'xlsx';

export const genPublicacionesDiscriminadasWorkBook = ({publicacionesDiscriminadas,serializedMlProducts}:{serializedMlProducts:SerializedMlProducts,publicacionesDiscriminadas:PublicacionesDiscriminadas})=>{
    const outputWorkbook = XLSX.utils.book_new();

    const genSheetJson = (mlProductsWithSkusWithMatch:MlProductsWithSkusWithMatch)=>
        Object.entries(mlProductsWithSkusWithMatch).reduce((acc,[mla,skus],index)=>{
            if(index === 0)
            acc.push(['MLA','sku','titulo','cb titulo','match'])

            Object.entries(skus).forEach(([sku,{titulo,match,cbTitulo}])=>{
                acc.push([mla,sku,titulo,cbTitulo,match?'si':'no'])
            })
            
            return acc;
        },[] as SheetJson)

    const withMatchsSheet = XLSX.utils.aoa_to_sheet(genSheetJson(publicacionesDiscriminadas.withMatchs));
    const withoutMatchsSheet = XLSX.utils.aoa_to_sheet(genSheetJson(publicacionesDiscriminadas.withoutMatchs));
    const informationSheet = XLSX.utils.aoa_to_sheet([
        ['publicaciones','publicaciones con matchs','publicaciones sin matchs'],
        [Object.keys(serializedMlProducts).length,Object.keys(publicacionesDiscriminadas.withMatchs).length,Object.keys(publicacionesDiscriminadas.withoutMatchs).length]
    ]);

    [withMatchsSheet,withoutMatchsSheet,informationSheet].forEach((worksheet,index)=>XLSX.utils.book_append_sheet(outputWorkbook,worksheet,index===0?'sin matchs':index===1?'con matchs':'informacion'));
    return outputWorkbook;
}