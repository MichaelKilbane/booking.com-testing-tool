import { convertArrayToCSV } from "convert-array-to-csv";
import { appendFile } from "fs";

export const saveToCSV = (resultsTitles, results) => {
  const resultsMatrix = [
      Object.values(resultsTitles),
      ...results.map(
          (result) => Object.keys(resultsTitles)
              .map(
                  (key) => result[key]
              )
      ),
  ];


  const csvFromArrayOfArrays = convertArrayToCSV(resultsMatrix, {
    separator: ",",
  });

  appendFile("output.csv", csvFromArrayOfArrays, (err) => {
    if (err) throw err;
    console.log("The data was appended to file!");
  });
};
