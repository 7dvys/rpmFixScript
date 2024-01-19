"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeMlSheetJson = void 0;
const constants_1 = require("../constants");
const serializeMlSheetJson = ({ mlSheetJson }) => mlSheetJson.reduce((acc, row) => {
    const titulo = row[constants_1.ML_COLUMNS.titulo] || '';
    const sku = row[constants_1.ML_COLUMNS.sku] || '';
    const mla = row[constants_1.ML_COLUMNS.mla] || '';
    const skuName = sku === '' ? 'withoutSku' : sku;
    acc[mla] = Object.assign(Object.assign({}, acc[mla]), { [skuName]: titulo });
    return acc;
}, {});
exports.serializeMlSheetJson = serializeMlSheetJson;
