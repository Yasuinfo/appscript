function sheetToJson() {
  var spreadsheetId = '1sOAEn6WelvOM6FTG-NSC-FikLSGEg4HPzNPipav8qo4'; // Replace with your spreadsheet ID
  var sheetName = 'Sheet1'; // Replace with your sheet name
  
 
  var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  var sheet = spreadsheet.getSheetByName(sheetName);
  
  // Get all data from the sheet
  var range = sheet.getDataRange();
  var values = range.getValues();
  
  // Convert data to JSON
  var headers = values[0];
  var jsonArray = [];
  
  // Iterate through each row (start from the second row, assuming headers are in the first row)
  for (var i = 1; i < values.length; i++) {
    var row = values[i];
    var jsonRow = {};
    
    // Iterate through each column
    for (var j = 0; j < headers.length; j++) {
      jsonRow[headers[j]] = row[j]; // Create key-value pairs for each column
    }
    
    jsonArray.push(jsonRow); // Add the JSON object to the array
  }
  
  // Convert the array of JSON objects to JSON string
  var jsonString = JSON.stringify(jsonArray);
  
  Logger.log(jsonString); // Log the JSON string (optional, for verification)
  
  return jsonString; // Return the JSON string
}