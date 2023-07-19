import csvToJson from 'csvtojson';
import { appendFile, readFile } from 'node:fs/promises';
import { join } from "node:path";
import { spawnSync } from "node:child_process";


export const csvToJsonFromFile = async (csvFilePath) => {
  return await csvToJson({
    delimiter: ";"
  }).fromFile(csvFilePath); 
}

export const csvToJsonFromString = async (csvString) => {
  return await csvToJson({
    delimiter: ";"
  }).fromString(csvString); 
}

export const saveFileJson= async (fileName, data) => {
  await appendFile(
    join(`./storage/${fileName}.json`),
    JSON.stringify(data),
    {
      encoding: 'utf-8',
      flag: 'w',
    },
  );
}

export const readFileJson = async (fileName) => {
  const buffer = await readFile(`./storage/${fileName}.json`);
  const resultParsed = JSON.parse(buffer?.toString());
  return resultParsed
}

export const startPythonScript = async (args) => {
  await saveFileJson('args', args)
  const pythonProcess = await spawnSync('python', [
    './module_gm/UnDirectedGraph.py',
    './storage/args.json',
  ]);
  const result = pythonProcess.stdout?.toString()?.trim();
  const error = pythonProcess.stderr?.toString()?.trim();
  const resultJson = await readFileJson(args.name_result)
  return resultJson
}