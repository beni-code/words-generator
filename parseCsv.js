const fs = require('fs')
const { parse } = require('csv-parse')

module.exports = parseCsv = () => {
    return new Promise((resolve, reject) => {
        const records = [];
        // Initialize the parser
        const parser = parse({
            delimiter: ',',
            columns: true,
            relax_column_count: true
        });
        // Use the readable stream api to consume records
        parser.on('readable', function () {
            let record;
            while ((record = parser.read()) !== null) {
                records.push(record);
            }
        });
        // Catch any error
        parser.on('error', function (err) {
            console.error(err.message);
        });
        // Test that the parsed records matched the expected records
        parser.on('end', function () {
            resolve(records)
        });
        // Write data to the stream
        let data = fs.readFileSync("./words.csv", 'utf-8')
        parser.write(data)
        // Close the readable stream
        parser.end();
    })
}