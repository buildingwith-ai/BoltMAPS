export interface Verse {
  reference: string;
  text: string;
  dateLabel?: string;
}

const verses: { [key: string]: Verse } = {
  '2025-05-01': {
    reference: "Ephesians 5:1",
    text: "Therefore, be imitators of God, as dearly loved children,",
    dateLabel: "May 1"
  },
  // Add more verses here as needed
};

export const getTodayVerse = (): Verse => {
  const today = new Date();
  const dateKey = today.toISOString().split('T')[0];
  
  // Return default verse if no verse is found for today
  if (!verses[dateKey]) {
    return {
      reference: "Ephesians 6:18",
      text: "Pray at all times in the Spirit with every prayer and request.",
      dateLabel: "Today"
    };
  }
  
  return verses[dateKey];
};