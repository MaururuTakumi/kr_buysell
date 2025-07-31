// Google Apps Script code for Google Sheets integration
// Deploy this as a Web App and use the URL in NEXT_PUBLIC_SHEETS_ENDPOINT

function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet (make sure to create one first)
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Add headers if this is the first row
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Email', 'Timestamp', 'Source']);
    }
    
    // Append the new data
    sheet.appendRow([
      data.email,
      data.timestamp || new Date().toISOString(),
      data.source || 'visitplus-kr-landing'
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function
function doGet() {
  return ContentService
    .createTextOutput('Google Apps Script is working!')
    .setMimeType(ContentService.MimeType.TEXT);
}