import { parse } from 'csv-parse/sync';
import versesCsv from './MAPS Verses for Website.csv?raw';

export interface Verse {
  reference: string;
  text: string;
  dateLabel?: string;
}

interface VerseData {
  dateLabel: string;
  citation: string;
  text: string;
}

interface VerseMap {
  [key: string]: VerseData;
}

// Parse CSV data
const records = parse(versesCsv, {
  columns: true,
  skip_empty_lines: true
});

// Convert CSV records to verse map
const verses: VerseMap = records.reduce((acc: VerseMap, record: any) => {
  if (record.Date && record['Date Label'] && record.Citation && record.Text) {
    acc[record.Date] = {
      dateLabel: record['Date Label'],
      citation: record.Citation,
      text: record.Text
    };
  }
  return acc;
}, {});

export const getTodayVerse = (): Verse => {
  const today = new Date();
  const dateKey = today.toISOString().split('T')[0];
  const verseData = verses[dateKey];
  
  if (!verseData) {
    // Default verse if no verse is found for today
    return {
      reference: "Ephesians 6:18",
      text: "Pray at all times in the Spirit with every prayer and request.",
      dateLabel: "Today"
    };
  }
  
  return {
    reference: verseData.citation,
    text: verseData.text,
    dateLabel: verseData.dateLabel
  };
};