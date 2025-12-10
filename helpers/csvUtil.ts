import * as fs from 'fs';
import csv from 'csv-parser';
import path from 'path';

export class Csv{
 public async readDataFromCSV(filePath: string): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const data: any[] = [];
    /* 
        `fs.createReadStream(filePath)`: This line uses Node.js's fs module to create a 
        readable stream from the CSV file specified by the filePath.
    
        .`pipe(csv())`: This line pipes the readable stream through a CSV parser, 
        which parses the CSV data into JavaScript objects. */

    fs.createReadStream(filePath)
      .pipe(csv())
      /* .on('data', (row) => { ... }): This event handler is called whenever a new row of data 
      is parsed from the CSV. It pushes each row into the data array. */
      .on('data', (row) => {
        data.push(row);
      })

      /* .on('end', () => { ... }): This event handler is called when the end of 
      the CSV file is reached. It resolves the Promise with the data array,
      indicating that the operation is complete.
     */
      .on('end', () => {
        resolve(data);
      })

      /* .on('error', (error) => { ... }): This event handler is called 
      if an error occurs during reading or
      parsing the CSV file. It rejects the Promise with the error. */
      .on('error', (error) => {
        reject(error);
      });
  });
}

public static async create_csv_file(value:string)
{
   const dataFolder = path.join(__dirname, '../data');
      const csvFilePath = path.join(dataFolder, `${value}.csv`);
  
      // Create data folder if it doesn't exist
      if (!fs.existsSync(dataFolder)) {
          fs.mkdirSync(dataFolder, { recursive: true });
          console.log('Created data folder');
      }
  
      // Create CSV file with headers if it doesn't exist
      if (!fs.existsSync(csvFilePath)) {
          const header = 'FirstName,LastName,Salutation\n';
          fs.writeFileSync(csvFilePath, header);
          console.log(`Created ${value}.csv file with headers`);
      }
      return csvFilePath;
}
}