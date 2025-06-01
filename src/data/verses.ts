import React from 'react';

export interface Verse {
  reference: string;
  text: string;
  dateLabel?: string;
}

const verses: { [key: string]: Verse } = {
  '2025-05-01': {
    reference: 'Ephesians 5:1',
    text: 'Therefore, be imitators of God, as dearly loved children,',
    dateLabel: 'May 1'
  },
  // Default verse if no match is found
  'default': {
    reference: 'Ephesians 6:18',
    text: 'Pray at all times in the Spirit with every prayer and request.',
    dateLabel: 'Today'
  }
};

export const getTodayVerse = (): Verse => {
  const today = new Date();
  const dateKey = today.toISOString().split('T')[0];
  return verses[dateKey] || verses['default'];
};