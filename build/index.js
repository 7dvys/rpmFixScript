"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getWorkBooks_1 = require("./utils/getWorkBooks");
const writePublicacionesDiscriminadas_1 = require("./utils/writePublicacionesDiscriminadas");
const [mlWorkbook925, mlWorkbook764, cbWorkbook925, cbWorkbook764] = (0, getWorkBooks_1.getWorkBooks)();
(0, writePublicacionesDiscriminadas_1.writePublicacionesDiscriminadas)({ mlWorkBook: mlWorkbook764, cbWorkBook: cbWorkbook764, outputName: 'publicacionesDiscriminadas764.xlsx' });
(0, writePublicacionesDiscriminadas_1.writePublicacionesDiscriminadas)({ mlWorkBook: mlWorkbook925, cbWorkBook: cbWorkbook925, outputName: 'publicacionesDiscriminadas925.xlsx' });
