"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkSheet = void 0;
const getWorkSheet = ({ workBook, sheetIndex }) => {
    const sheetName = workBook.SheetNames[sheetIndex];
    const workSheet = workBook.Sheets[sheetName];
    return workSheet;
};
exports.getWorkSheet = getWorkSheet;
