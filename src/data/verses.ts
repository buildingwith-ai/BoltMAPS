export interface Verse {
  reference: string;
  text: string;
  dateLabel?: string;
}

const verses: { [key: string]: Verse } = {
  '2025-05-31': {
    reference: "Ephesians 6:18",
    text: "Pray at all times in the Spirit with every prayer and request,",
    dateLabel: "May 31"
  },
  '2025-06-01': {
    reference: "John 1:12",
    text: "But to all who did receive him, who believed in his name, he gave the right to become children of God.",
    dateLabel: "June 1"
  },
  '2025-06-02': {
    reference: "Psalm 103:13",
    text: "As a father shows compassion to his children, so the Lord shows compassion to those who fear him.",
    dateLabel: "June 2"
  },
  '2025-06-03': {
    reference: "Romans 8:15",
    text: "For you did not receive the spirit of slavery to fall back into fear, but you have received the Spirit of adoption as sons, by whom we cry, 'Abba! Father!'",
    dateLabel: "June 3"
  },
  '2025-06-04': {
    reference: "Deuteronomy 32:6",
    text: "Do you thus repay the Lord, you foolish and senseless people? Is not he your father, who created you, who made you and established you?",
    dateLabel: "June 4"
  },
  '2025-06-05': {
    reference: "Isaiah 64:8",
    text: "But now, O Lord, you are our Father; we are the clay, and you are our potter; we are all the work of your hand.",
    dateLabel: "June 5"
  },
  '2025-06-06': {
    reference: "Galatians 4:6",
    text: "And because you are sons, God has sent the Spirit of his Son into our hearts, crying, 'Abba! Father!'",
    dateLabel: "June 6"
  },
  '2025-06-07': {
    reference: "Psalm 68:5",
    text: "Father of the fatherless and protector of widows is God in his holy habitation.",
    dateLabel: "June 7"
  },
  '2025-06-08': {
    reference: "Psalm 29:2",
    text: "Ascribe to the Lord the glory due his name; worship the Lord in the splendor of holiness.",
    dateLabel: "June 8"
  },
  '2025-06-09': {
    reference: "John 12:28",
    text: "'Father, glorify your name.' Then a voice came from heaven: 'I have glorified it, and I will glorify it again.'",
    dateLabel: "June 9"
  },
  '2025-06-10': {
    reference: "Ezekiel 36:23",
    text: "And I will vindicate the holiness of my great name… and the nations will know that I am the Lord.",
    dateLabel: "June 10"
  },
  '2025-06-11': {
    reference: "Exodus 20:7",
    text: "You shall not take the name of the Lord your God in vain, for the Lord will not hold him guiltless who takes his name in vain.",
    dateLabel: "June 11"
  },
  '2025-06-12': {
    reference: "Revelation 4:11",
    text: "Worthy are you, our Lord and God, to receive glory and honor and power, for you created all things.",
    dateLabel: "June 12"
  },
  '2025-06-13': {
    reference: "Psalm 99:3",
    text: "Let them praise your great and awesome name! Holy is he!",
    dateLabel: "June 13"
  },
  '2025-06-14': {
    reference: "Isaiah 6:3",
    text: "Holy, holy, holy is the Lord of hosts; the whole earth is full of his glory!",
    dateLabel: "June 14"
  },
  '2025-06-15': {
    reference: "Mark 1:15",
    text: "The time is fulfilled, and the kingdom of God is at hand; repent and believe in the gospel.",
    dateLabel: "June 15"
  },
  '2025-06-16': {
    reference: "Revelation 11:15",
    text: "The kingdom of the world has become the kingdom of our Lord and of his Christ, and he shall reign forever and ever.",
    dateLabel: "June 16"
  },
  '2025-06-17': {
    reference: "Daniel 2:44",
    text: "And in the days of those kings the God of heaven will set up a kingdom that shall never be destroyed.",
    dateLabel: "June 17"
  },
  '2025-06-18': {
    reference: "Luke 22:29-30",
    text: "And I assign to you, as my Father assigned to me, a kingdom, that you may eat and drink at my table in my kingdom.",
    dateLabel: "June 18"
  },
  '2025-06-19': {
    reference: "Acts 1:6-7",
    text: "So when they had come together, they asked him, 'Lord, will you at this time restore the kingdom to Israel?' He said to them, 'It is not for you to know times or seasons.'",
    dateLabel: "June 19"
  },
  '2025-06-20': {
    reference: "Luke 11:2",
    text: "And he said to them, 'When you pray, say: Father, hallowed be your name. Your kingdom come.'",
    dateLabel: "June 20"
  },
  '2025-06-21': {
    reference: "Psalm 145:13",
    text: "Your kingdom is an everlasting kingdom, and your dominion endures throughout all generations.",
    dateLabel: "June 21"
  },
  '2025-06-22': {
    reference: "Matthew 26:39",
    text: "My Father, if it be possible, let this cup pass from me; nevertheless, not as I will, but as you will.",
    dateLabel: "June 22"
  },
  '2025-06-23': {
    reference: "Psalm 40:8",
    text: "I delight to do your will, O my God; your law is within my heart.",
    dateLabel: "June 23"
  },
  '2025-06-24': {
    reference: "Romans 12:2",
    text: "Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God.",
    dateLabel: "June 24"
  },
  '2025-06-25': {
    reference: "Hebrews 10:7",
    text: "Then I said, 'Behold, I have come to do your will, O God, as it is written of me in the scroll of the book.'",
    dateLabel: "June 25"
  },
  '2025-06-26': {
    reference: "1 John 5:14",
    text: "And this is the confidence that we have toward him, that if we ask anything according to his will he hears us.",
    dateLabel: "June 26"
  },
  '2025-06-27': {
    reference: "1 Peter 4:2",
    text: "So as to live for the rest of the time in the flesh no longer for human passions but for the will of God.",
    dateLabel: "June 27"
  },
  '2025-06-28': {
    reference: "Psalm 143:10",
    text: "Teach me to do your will, for you are my God! Let your good Spirit lead me on level ground!",
    dateLabel: "June 28"
  },
  '2025-06-29': {
    reference: "Exodus 16:4",
    text: "Then the Lord said to Moses, 'Behold, I am about to rain bread from heaven for you.'",
    dateLabel: "June 29"
  },
  '2025-06-30': {
    reference: "John 6:35",
    text: "Jesus said to them, 'I am the bread of life; whoever comes to me shall not hunger.'",
    dateLabel: "June 30"
  },
  '2025-07-01': {
    reference: "Philippians 4:19",
    text: "And my God will supply every need of yours according to his riches in glory in Christ Jesus.",
    dateLabel: "July 1"
  },
  '2025-07-02': {
    reference: "Proverbs 30:8",
    text: "Give me neither poverty nor riches; feed me with the food that is needful for me.",
    dateLabel: "July 2"
  },
  '2025-07-03': {
    reference: "Matthew 6:31-33",
    text: "Therefore do not be anxious, saying, 'What shall we eat?'… But seek first the kingdom of God and his righteousness, and all these things will be added to you.",
    dateLabel: "July 3"
  },
  '2025-07-04': {
    reference: "Psalm 37:25",
    text: "I have been young, and now am old, yet I have not seen the righteous forsaken or his children begging for bread.",
    dateLabel: "July 4"
  },
  '2025-07-05': {
    reference: "Lamentations 3:22-23",
    text: "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.",
    dateLabel: "July 5"
  },
  '2025-07-06': {
    reference: "Ephesians 4:32",
    text: "Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you.",
    dateLabel: "July 6"
  },
  '2025-07-07': {
    reference: "1 John 1:9",
    text: "If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.",
    dateLabel: "July 7"
  },
  '2025-07-08': {
    reference: "Psalm 51:1-2",
    text: "Have mercy on me, O God, according to your steadfast love; according to your abundant mercy blot out my transgressions.",
    dateLabel: "July 8"
  },
  '2025-07-09': {
    reference: "Luke 7:47",
    text: "Therefore I tell you, her sins, which are many, are forgiven—for she loved much.",
    dateLabel: "July 9"
  },
  '2025-07-10': {
    reference: "Matthew 18:21-35",
    text: "The Parable of the Unforgiving Servant.",
    dateLabel: "July 10"
  },
  '2025-07-11': {
    reference: "Colossians 3:13",
    text: "Bearing with one another and, if one has a complaint against another, forgiving each other; as the Lord has forgiven you, so you also must forgive.",
    dateLabel: "July 11"
  },
  '2025-07-12': {
    reference: "Micah 7:18",
    text: "Who is a God like you, pardoning iniquity and passing over transgression for the exploits of his inheritance?",
    dateLabel: "July 12"
  },
  '2025-07-13': {
    reference: "1 Corinthians 10:13",
    text: "No temptation has overtaken you that is not common to man. God is faithful, and he will not let you be tempted beyond your ability.",
    dateLabel: "July 13"
  },
  '2025-07-14': {
    reference: "Hebrews 2:18",
    text: "For because he himself has suffered when tempted, he is able to help those who are being tempted.",
    dateLabel: "July 14"
  },
  '2025-07-15': {
    reference: "Psalm 141:4",
    text: "Do not let my heart incline to any evil, to busy myself with wicked deeds.",
    dateLabel: "July 15"
  },
  '2025-07-16': {
    reference: "James 1:13-14",
    text: "Let no one say when he is tempted, 'I am being tempted by God,' for God cannot be tempted with evil, and he himself tempts no one.",
    dateLabel: "July 16"
  },
  '2025-07-17': {
    reference: "Matthew 4:1-11",
    text: "The Temptation of Jesus.",
    dateLabel: "July 17"
  },
  '2025-07-18': {
    reference: "Luke 22:40",
    text: "And when he came to the place, he said to them, 'Pray that you may not enter into temptation.'",
    dateLabel: "July 18"
  },
  '2025-07-19': {
    reference: "2 Peter 2:9",
    text: "The Lord knows how to rescue the godly from trials…",
    dateLabel: "July 19"
  },
  '2025-07-20': {
    reference: "2 Thessalonians 3:3",
    text: "But the Lord is faithful. He will establish you and guard you against the evil one.",
    dateLabel: "July 20"
  },
  '2025-07-21': {
    reference: "John 17:15",
    text: "I do not ask that you take them out of the world, but that you keep them from the evil one.",
    dateLabel: "July 21"
  },
  '2025-07-22': {
    reference: "Ephesians 6:11-12",
    text: "Put on the whole armor of God, that you may be able to stand against the schemes of the devil.",
    dateLabel: "July 22"
  },
  '2025-07-23': {
    reference: "1 Peter 5:8-9",
    text: "Be sober-minded; be watchful. Your adversary the devil prowls around like a roaring lion… Resist him, firm in your faith.",
    dateLabel: "July 23"
  },
  '2025-07-24': {
    reference: "Psalm 23:4",
    text: "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me.",
    dateLabel: "July 24"
  },
  '2025-07-25': {
    reference: "Psalm 34:7",
    text: "The angel of the Lord encamps around those who fear him, and delivers them.",
    dateLabel: "July 25"
  },
  '2025-07-26': {
    reference: "2 Timothy 4:18",
    text: "The Lord will rescue me from every evil deed and bring me safely into his heavenly kingdom.",
    dateLabel: "July 26"
  },
  '2025-07-27': {
    reference: "Matthew 22:37-39",
    text: "And he said to him, 'You shall love the Lord your God with all your heart and with all your soul and with all your mind. This is the great and first commandment. And a second is like it: You shall love your neighbor as yourself.'",
    dateLabel: "July 27"
  },
  '2025-07-28': {
    reference: "Deuteronomy 6:5",
    text: "You shall love the Lord your God with all your heart and with all your soul and with all your might.",
    dateLabel: "July 28"
  },
  '2025-07-29': {
    reference: "Leviticus 19:18",
    text: "You shall not take vengeance or bear a grudge against the sons of your own people, but you shall love your neighbor as yourself: I am the Lord.",
    dateLabel: "July 29"
  },
  '2025-07-30': {
    reference: "Matthew 28:19-20",
    text: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you.",
    dateLabel: "July 30"
  },
  '2025-07-31': {
    reference: "Acts 1:8",
    text: "But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth.",
    dateLabel: "July 31"
  },
  '2025-08-01': {
    reference: "John 13:34",
    text: "I give you a new command: Love one another. Just as I have loved you, you are also to love one another.",
    dateLabel: "August 1"
  },
  '2025-08-02': {
    reference: "Romans 12:10",
    text: "Love one another deeply as brothers and sisters. Take the lead in honoring one another.",
    dateLabel: "August 2"
  },
  '2025-08-03': {
    reference: "Galatians 5:13",
    text: "Serve one another through love.",
    dateLabel: "August 3"
  },
  '2025-08-04': {
    reference: "Ephesians 4:32",
    text: "Be kind and compassionate to one another, forgiving one another, just as God also forgave you in Christ.",
    dateLabel: "August 4"
  },
  '2025-08-05': {
    reference: "1 Thessalonians 5:11",
    text: "Encourage one another and build each other up as you are already doing.",
    dateLabel: "August 5"
  },
  '2025-08-06': {
    reference: "Hebrews 10:24",
    text: "Let us watch out for one another to provoke love and good works.",
    dateLabel: "August 6"
  },
  '2025-08-07': {
    reference: "1 Peter 4:9",
    text: "Be hospitable to one another without complaining.",
    dateLabel: "August 7"
  },
  '2025-08-08': {
    reference: "James 5:16",
    text: "Confess your sins to one another and pray for one another, so that you may be healed.",
    dateLabel: "August 8"
  },
  '2025-08-09': {
    reference: "Romans 15:7",
    text: "Accept one another, just as Christ also accepted you, to the glory of God.",
    dateLabel: "August 9"
  },
  '2025-08-10': {
    reference: "Colossians 3:13",
    text: "Bearing with one another and forgiving one another if anyone has a grievance against another.",
    dateLabel: "August 10"
  },
  '2025-08-11': {
    reference: "Galatians 6:2",
    text: "Carry one another’s burdens; in this way you will fulfill the law of Christ.",
    dateLabel: "August 11"
  },
  '2025-08-12': {
    reference: "Ephesians 5:21",
    text: "Submitting to one another in the fear of Christ.",
    dateLabel: "August 12"
  },
  '2025-08-13': {
    reference: "1 Peter 3:8",
    text: "Be like-minded and sympathetic, love one another, and be compassionate and humble.",
    dateLabel: "August 13"
  },
  '2025-08-14': {
    reference: "Romans 14:19",
    text: "Pursue what promotes peace and what builds up one another.",
    dateLabel: "August 14"
  },
  '2025-08-15': {
    reference: "1 John 4:11",
    text: "Dear friends, if God loved us in this way, we also must love one another.",
    dateLabel: "August 15"
  },
  '2025-08-16': {
    reference: "Philippians 2:3",
    text: "Do nothing out of selfish ambition or conceit, but in humility consider others as more important than yourselves.",
    dateLabel: "August 16"
  },
  '2025-08-17': {
    reference: "1 Thessalonians 5:15",
    text: "See to it that no one repays evil for evil to anyone, but always pursue what is good for one another.",
    dateLabel: "August 17"
  },
  '2025-08-18': {
    reference: "Hebrews 3:13",
    text: "Encourage each other daily, while it is still called today, so that none of you is hardened by sin’s deception.",
    dateLabel: "August 18"
  },
  '2025-08-19': {
    reference: "Romans 12:16",
    text: "Live in harmony with one another. Do not be proud; instead, associate with the humble.",
    dateLabel: "August 19"
  },
  '2025-08-20': {
    reference: "1 Peter 4:10",
    text: "Each one, as he has received a gift, use it to serve others, as good stewards of the varied grace of God.",
    dateLabel: "August 20"
  },
  '2025-08-21': {
    reference: "Ephesians 4:2",
    text: "With all humility and gentleness, with patience, bearing with one another in love.",
    dateLabel: "August 21"
  },
  '2025-08-22': {
    reference: "Colossians 3:16",
    text: "Let the word of Christ dwell richly among you, teaching and admonishing one another in all wisdom.",
    dateLabel: "August 22"
  },
  '2025-08-23': {
    reference: "1 Thessalonians 4:18",
    text: "Comfort one another with these words.",
    dateLabel: "August 23"
  },
  '2025-08-24': {
    reference: "Romans 15:5",
    text: "May the God of endurance and encouragement grant you to live in harmony with one another.",
    dateLabel: "August 24"
  },
  '2025-08-25': {
    reference: "Galatians 5:26",
    text: "Let us not become conceited, provoking one another, envying one another.",
    dateLabel: "August 25"
  },
  '2025-08-26': {
    reference: "James 4:11",
    text: "Don’t criticize one another, brothers and sisters.",
    dateLabel: "August 26"
  },
  '2025-08-27': {
    reference: "1 John 3:11",
    text: "This is the message you have heard from the beginning: We should love one another.",
    dateLabel: "August 27"
  },
  '2025-08-28': {
    reference: "Romans 12:5",
    text: "In Christ we who are many are one body, and individually members of one another.",
    dateLabel: "August 28"
  },
  '2025-08-29': {
    reference: "Ephesians 5:19",
    text: "Speaking to one another in psalms, hymns, and spiritual songs, singing and making music with your heart to the Lord.",
    dateLabel: "August 29"
  },
  '2025-08-30': {
    reference: "1 Corinthians 12:25",
    text: "So that there would be no division in the body, but that the members would have the same concern for each other.",
    dateLabel: "August 30"
  },
  '2025-08-31': {
    reference: "John 15:12",
    text: "This is my command: Love one another as I have loved you.",
    dateLabel: "August 31"
  }
};

export const getTodayVerse = (): Verse => {
  // Create date object for current time
  const now = new Date();
  
  // Convert to CST (UTC-5 during daylight saving, UTC-6 during standard time)
  const cst = new Date(now.toLocaleString('en-US', { timeZone: 'America/Chicago' }));
  const dateKey = cst.getFullYear() + '-' + 
                 String(cst.getMonth() + 1).padStart(2, '0') + '-' + 
                 String(cst.getDate()).padStart(2, '0');
  
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
