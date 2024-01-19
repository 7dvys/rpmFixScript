"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genPublicacionesDiscriminadasWorkBook = void 0;
const XLSX = __importStar(require("xlsx"));
const genPublicacionesDiscriminadasWorkBook = ({ publicacionesDiscriminadas, serializedMlProducts }) => {
    const outputWorkbook = XLSX.utils.book_new();
    const genSheetJson = (mlProductsWithSkusWithMatch) => Object.entries(mlProductsWithSkusWithMatch).reduce((acc, [mla, skus], index) => {
        if (index === 0)
            acc.push(['MLA', 'sku', 'titulo', 'cb titulo', 'match']);
        Object.entries(skus).forEach(([sku, { titulo, match, cbTitulo }]) => {
            acc.push([mla, sku, titulo, cbTitulo, match ? 'si' : 'no']);
        });
        return acc;
    }, []);
    const withMatchsSheet = XLSX.utils.aoa_to_sheet(genSheetJson(publicacionesDiscriminadas.withMatchs));
    const withoutMatchsSheet = XLSX.utils.aoa_to_sheet(genSheetJson(publicacionesDiscriminadas.withoutMatchs));
    const informationSheet = XLSX.utils.aoa_to_sheet([
        ['publicaciones', 'publicaciones con matchs', 'publicaciones sin matchs'],
        [Object.keys(serializedMlProducts).length, Object.keys(publicacionesDiscriminadas.withMatchs).length, Object.keys(publicacionesDiscriminadas.withoutMatchs).length]
    ]);
    [withMatchsSheet, withoutMatchsSheet, informationSheet].forEach((worksheet, index) => XLSX.utils.book_append_sheet(outputWorkbook, worksheet, index === 0 ? 'sin matchs' : index === 1 ? 'con matchs' : 'informacion'));
    return outputWorkbook;
};
exports.genPublicacionesDiscriminadasWorkBook = genPublicacionesDiscriminadasWorkBook;
