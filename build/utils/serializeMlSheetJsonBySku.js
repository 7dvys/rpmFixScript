"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeMlSheetJsonBySku = void 0;
const constants_1 = require("../constants");
const serializeMlSheetJsonBySku = ({ mlSheetJson }) => mlSheetJson.reduce((acc, row) => {
    const titulo = row[constants_1.ML_COLUMNS.titulo] || '';
    const sku = row[constants_1.ML_COLUMNS.sku] || '';
    const mla = row[constants_1.ML_COLUMNS.mla] || '';
    const skuName = sku === '' ? 'mla:' + mla : sku;
    acc[skuName] = { mla, titulo };
    return acc;
}, {});
exports.serializeMlSheetJsonBySku = serializeMlSheetJsonBySku;
