import { getWorkBooks } from "./utils/getWorkBooks";
import { writePublicacionesDiscriminadas } from "./utils/writePublicacionesDiscriminadas";

const [mlWorkbook925,mlWorkbook764,cbWorkbook925,cbWorkbook764] = getWorkBooks();

writePublicacionesDiscriminadas({mlWorkBook:mlWorkbook764,cbWorkBook:cbWorkbook764,outputName:'publicacionesDiscriminadas764.xlsx'});
writePublicacionesDiscriminadas({mlWorkBook:mlWorkbook925,cbWorkBook:cbWorkbook925,outputName:'publicacionesDiscriminadas925.xlsx'});