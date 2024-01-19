import * as XLSX from 'xlsx';
import { CB_FILE_DIR, ML_FILE_DIR } from "../constants";

export const getWorkBooks = ()=>[...Object.values(ML_FILE_DIR),...Object.values(CB_FILE_DIR)].map(fileDir=>XLSX.readFile(fileDir));