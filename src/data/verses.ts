import { parse } from 'csv-parse/sync';

export interface Verse {
  reference: string;
  text: string;
  dateLabel?: string;
}

const defaultVerse: Verse = {
  reference: "Ephesians 6:18",
  text: "Pray at all times in the Spirit with every prayer and request.",
  dateLabel: "Today"
};

let verses: { [key: string]: Verse } = {
  'default': defaultVerse
};

export const loadVerses = async (csvContent: string) => {
  try {
    const records = parse(csvContent, {
      columns: true,
      skip_empty_lines: true
    });

    verses = records.reduce((acc: { [key: string]: Verse }, record: any) => {
      if (record.Date && record['Date Label'] && record.Citation && record.Text) {
        acc[record.Date] = {
          reference: record.Citation,
          text: record.Text,
          dateLabel: record['Date Label']
        };
      }
      return acc;
    }, { 'default': defaultVerse });

  } catch (error) {
    console.error('Error parsing verses CSV:', error);
    // Keep using default verse if parsing fails
    verses = { 'default': defaultVerse };
  }
};

export const getTodayVerse = (): Verse => {
  const today = new Date();
  const dateKey = today.toISOString().split('T')[0];
  return verses[dateKey] || verses['default'];
};