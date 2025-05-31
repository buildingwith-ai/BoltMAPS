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

const verses: VerseMap = {
  // May verses
  '2025-05-01': { dateLabel: 'May 1', citation: 'Ephesians 5:1', text: '"Therefore, be imitators of God, as dearly loved children,"' },
  '2025-05-02': { dateLabel: 'May 2', citation: 'Ephesians 5:2', text: '"walk in love, as Christ also loved us and gave himself for us,"' },
  '2025-05-03': { dateLabel: 'May 3', citation: 'Ephesians 5:3', text: '"But sexual immorality and any impurity or greed should not even be heard of among you, as is proper for saints."' },
  '2025-05-04': { dateLabel: 'May 4', citation: 'Ephesians 5:4', text: '"Obscene and foolish talking or crude joking are not suitable,"' },
  '2025-05-05': { dateLabel: 'May 5', citation: 'Ephesians 5:4', text: '"rather giving thanks."' },
  '2025-05-06': { dateLabel: 'May 6', citation: 'Ephesians 5:8', text: '"For you were once darkness, but now you are light in the Lord. Walk as children of light—"' },
  '2025-05-07': { dateLabel: 'May 7', citation: 'Ephesians 5:10', text: '"discerning what is pleasing to the Lord."' },
  '2025-05-08': { dateLabel: 'May 8', citation: 'Ephesians 5:11', text: '"Don\'t participate in the fruitless works of darkness,"' },
  '2025-05-09': { dateLabel: 'May 9', citation: 'Ephesians 5:11', text: '"expose them (fruitless works of darkness)."' },
  '2025-05-10': { dateLabel: 'May 10', citation: 'Ephesians 5:15a', text: '"Pay careful attention, then, to how you walk—not as unwise people but as wise—"' },
  '2025-05-11': { dateLabel: 'May 11', citation: 'Ephesians 5:16', text: '"making the most of the time, because the days are evil."' },
  '2025-05-12': { dateLabel: 'May 12', citation: 'Ephesians 5:17', text: '"So don\'t be foolish, but understand what the Lord\'s will is."' },
  '2025-05-13': { dateLabel: 'May 13', citation: 'Ephesians 5:18a', text: '"don\'t get drunk with wine, which leads to reckless living,"' },
  '2025-05-14': { dateLabel: 'May 14', citation: 'Ephesians 5:18b', text: '"be filled by the Spirit:"' },
  '2025-05-15': { dateLabel: 'May 15', citation: 'Ephesians 5:19a', text: '"speaking to one another in psalms, hymns, and spiritual songs,"' },
  '2025-05-16': { dateLabel: 'May 16', citation: 'Ephesians 5:19b', text: '"singing and making music with your heart to the Lord,"' },
  '2025-05-17': { dateLabel: 'May 17', citation: 'Ephesians 5:20', text: '"giving thanks always for everything to God the Father in the name of our Lord Jesus Christ,"' },
  '2025-05-18': { dateLabel: 'May 18', citation: 'Ephesians 5:21', text: '"submitting to one another in the fear of Christ."' },
  '2025-05-19': { dateLabel: 'May 19', citation: 'Ephesians 5:22-23', text: '"Wives, submit to your husbands as to the Lord, because the husband is the head of the wife as Christ is the head of the church. He is the Savior of the body."' },
  '2025-05-20': { dateLabel: 'May 20', citation: 'Ephesians 5:25', text: '"Husbands, love your wives, just as Christ loved the church and gave himself for her to make her holy, cleansing her with the washing of water by the word."' },
  '2025-05-21': { dateLabel: 'May 21', citation: 'Ephesians 6:1', text: '"Children, obey your parents in the Lord, because this is right."' },
  '2025-05-22': { dateLabel: 'May 22', citation: 'Ephesians 6:4', text: '"Fathers, don\'t stir up anger in your children,"' },
  '2025-05-23': { dateLabel: 'May 23', citation: 'Ephesians 6:4', text: '"bring them up in the training and instruction of the Lord."' },
  '2025-05-24': { dateLabel: 'May 24', citation: 'Ephesians 6:5', text: '"Slaves, obey your human masters with fear and trembling, in the sincerity of your heart, as you would Christ."' },
  '2025-05-25': { dateLabel: 'May 25', citation: 'Ephesians 6:7-8', text: '"Serve with a good attitude, as to the Lord and not to people, knowing that whatever good each one does, slave or free, he will receive this back from the Lord."' },
  '2025-05-26': { dateLabel: 'May 26', citation: 'Ephesians 6:9', text: '"masters, treat your slaves the same way, without threatening them, because you know that both their Master and yours is in heaven, and there is no favoritism with him."' },
  '2025-05-27': { dateLabel: 'May 27', citation: 'Ephesians 6:10', text: '"be strengthened by the Lord and by his vast strength."' },
  '2025-05-28': { dateLabel: 'May 28', citation: 'Ephesians 6:11', text: '"Put on the full armor of God so that you can stand against the schemes of the devil."' },
  '2025-05-29': { dateLabel: 'May 29', citation: 'Ephesians 6:13', text: '"take up the full armor of God, so that you may be able to resist in the evil day, and having prepared everything, to take your stand."' },
  '2025-05-30': { dateLabel: 'May 30', citation: 'Ephesians 6:14-17', text: '"Stand, therefore, with truth like a belt around your waist, righteousness like armor on your chest, and your feet sandaled with readiness for the gospel of peace. In every situation take up the shield of faith with which you can extinguish all the flaming arrows of the evil one. Take the helmet of salvation and the sword of the Spirit—which is the word of God."' },
  '2025-05-31': { dateLabel: 'May 31', citation: 'Ephesians 6:18', text: '"Pray at all times in the Spirit with every prayer and request,"' },
  
  // June verses
  '2025-06-01': { dateLabel: 'June 1', citation: 'John 1:12', text: '"But to all who did receive him, who believed in his name, he gave the right to become children of God."' },
  // ... (rest of June verses)
  
  // July verses
  '2025-07-01': { dateLabel: 'July 1', citation: 'Philippians 4:19', text: '"And my God will supply every need of yours according to his riches in glory in Christ Jesus."' }
  // ... (rest of July verses)
};

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