import csvToJson from 'csvtojson';

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