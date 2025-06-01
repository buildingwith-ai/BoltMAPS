import { fetchVerses } from '../utils/sheets';

export interface Verse {
  reference: string;
  text: string;
  dateLabel?: string;
}

let cachedVerses: Record<string, { dateLabel: string; citation: string; text: string; }> | null = null;

export const getTodayVerse = async (): Promise<Verse> => {
  if (!cachedVerses) {
    try {
      cachedVerses = await fetchVerses();
    } catch (error) {
      console.error('Failed to fetch verses:', error);
      // Return default verse if fetch fails
      return {
        reference: "Ephesians 6:18",
        text: "Pray at all times in the Spirit with every prayer and request.",
        dateLabel: "Today"
      };
    }
  }

  const today = new Date();
  const dateKey = today.toISOString().split('T')[0];
  const verseData = cachedVerses[dateKey];
  
  if (!verseData) {
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