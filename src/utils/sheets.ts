import { GoogleSpreadsheet } from 'google-spreadsheet';

interface VerseData {
  dateLabel: string;
  citation: string;
  text: string;
}

export async function fetchVerses(): Promise<Record<string, VerseData>> {
  // Replace these with your actual values from Google Cloud Console
  const SPREADSHEET_ID = import.meta.env.VITE_GOOGLE_SHEETS_ID;
  const CLIENT_EMAIL = import.meta.env.VITE_GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const PRIVATE_KEY = import.meta.env.VITE_GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!SPREADSHEET_ID || !CLIENT_EMAIL || !PRIVATE_KEY) {
    throw new Error('Missing required environment variables for Google Sheets');
  }

  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
  
  await doc.useServiceAccountAuth({
    client_email: CLIENT_EMAIL,
    private_key: PRIVATE_KEY,
  });

  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();

  const verses: Record<string, VerseData> = {};
  
  rows.forEach(row => {
    const date = row.get('date'); // e.g., "2025-05-01"
    if (date) {
      verses[date] = {
        dateLabel: row.get('dateLabel'), // e.g., "May 1"
        citation: row.get('citation'),   // e.g., "Ephesians 5:1"
        text: row.get('text'),          // The verse text
      };
    }
  });

  return verses;
}