"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeCbSheetJson = void 0;
const constants_1 = require("../constants");
const serializeCbSheetJson = ({ sheetJson }) => {
    sheetJson.reduce((acc, row) => {
        const titulo = row[constants_1.CB_COLUMNS.titulo] || '';
        const sku = row[constants_1.CB_COLUMNS.sku] || '';
        const estado = row[constants_1.CB_COLUMNS.estado] || '';
        if (sku in acc || sku === null || sku === undefined || sku === '')
            return acc;
        acc[sku] = { titulo, estado };
        return acc;
    }, {});
};
exports.serializeCbSheetJson = serializeCbSheetJson;
