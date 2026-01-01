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
  },
  '2025-09-01': {
    reference: "Leviticus 19:18",
    text: "Do not take revenge or bear a grudge against members of your community, but love your neighbor as yourself; I am the LORD.",
    dateLabel: "September 1"
  },
  '2025-09-02': {
    reference: "Micah 6:8",
    text: "Mankind, he has told each of you what is good and what it is the LORD requires of you: to act justly, to love faithfulness, and to walk humbly with your God.",
    dateLabel: "September 2"
  },
  '2025-09-03': {
    reference: "Proverbs 17:17",
    text: "A friend loves at all times, and a brother is born for a difficult time.",
    dateLabel: "September 3"
  },
  '2025-09-04': {
    reference: "Zechariah 7:9",
    text: "This is what the LORD of Armies says: Administer true justice. Show faithful love and compassion to one another.",
    dateLabel: "September 4"
  },
  '2025-09-05': {
    reference: "Exodus 22:21",
    text: "You must not exploit a resident alien or oppress him, since you were resident aliens in the land of Egypt.",
    dateLabel: "September 5"
  },
  '2025-09-06': {
    reference: "Psalm 133:1",
    text: "How good and pleasant it is when brothers live together in harmony!",
    dateLabel: "September 6"
  },
  '2025-09-07': {
    reference: "Deuteronomy 15:11",
    text: "For there will never cease to be poor people in the land; that is why I am commanding you, ‘Open your hand willingly to your poor and needy brother in your land.’",
    dateLabel: "September 7"
  },
  '2025-09-08': {
    reference: "Proverbs 3:27",
    text: "When it is in your power, don’t withhold good from the one to whom it belongs.",
    dateLabel: "September 8"
  },
  '2025-09-09': {
    reference: "Isaiah 1:17",
    text: "Learn to do what is good. Pursue justice. Correct the oppressor. Defend the rights of the fatherless. Plead the widow’s cause.",
    dateLabel: "September 9"
  },
  '2025-09-10': {
    reference: "Leviticus 19:15",
    text: "Do not act unjustly when deciding a case. Do not be partial to the poor or give preference to the rich; judge your neighbor fairly.",
    dateLabel: "September 10"
  },
  '2025-09-11': {
    reference: "Proverbs 12:18",
    text: "There is one who speaks rashly, like a piercing sword; but the tongue of the wise brings healing.",
    dateLabel: "September 11"
  },
  '2025-09-12': {
    reference: "Exodus 20:16",
    text: "Do not give false testimony against your neighbor.",
    dateLabel: "September 12"
  },
  '2025-09-13': {
    reference: "Psalm 15:3",
    text: "Who does not slander with his tongue, who does not harm his friend or discredit his neighbor.",
    dateLabel: "September 13"
  },
  '2025-09-14': {
    reference: "Proverbs 11:25",
    text: "A generous person will be enriched, and the one who gives a drink of water will receive water.",
    dateLabel: "September 14"
  },
  '2025-09-15': {
    reference: "Jeremiah 22:3",
    text: "This is what the LORD says: Administer justice and righteousness. Rescue the victim of robbery from his oppressor. Don’t exploit or brutalize the resident alien, the fatherless, or the widow.",
    dateLabel: "September 15"
  },
  '2025-09-16': {
    reference: "Proverbs 15:1",
    text: "A gentle answer turns away anger, but a harsh word stirs up wrath.",
    dateLabel: "September 16"
  },
  '2025-09-17': {
    reference: "Deuteronomy 24:17",
    text: "Do not deny justice to a resident alien or fatherless child, and do not take a widow’s garment as security.",
    dateLabel: "September 17"
  },
  '2025-09-18': {
    reference: "Proverbs 19:17",
    text: "Kindness to the poor is a loan to the LORD, and he will give a reward to the lender.",
    dateLabel: "September 18"
  },
  '2025-09-19': {
    reference: "Ecclesiastes 4:9–10",
    text: "Two are better than one because they have a good reward for their efforts. For if either falls, his companion can lift him up.",
    dateLabel: "September 19"
  },
  '2025-09-20': {
    reference: "Leviticus 25:35",
    text: "If your brother becomes destitute and cannot sustain himself among you, you must support him as a resident alien or temporary resident, so that he can continue to live among you.",
    dateLabel: "September 20"
  },
  '2025-09-21': {
    reference: "Proverbs 16:24",
    text: "Pleasant words are a honeycomb: sweet to the taste and health to the body.",
    dateLabel: "September 21"
  },
  '2025-09-22': {
    reference: "Isaiah 58:7",
    text: "Is it not to share your bread with the hungry, to bring the poor and homeless into your house, to clothe the naked when you see him, and not to ignore your own flesh and blood?",
    dateLabel: "September 22"
  },
  '2025-09-23': {
    reference: "Proverbs 22:9",
    text: "A generous person will be blessed, for he shares his food with the poor.",
    dateLabel: "September 23"
  },
  '2025-09-24': {
    reference: "Psalm 41:1",
    text: "Happy is one who is considerate of the poor; the LORD will save him in a day of adversity.",
    dateLabel: "September 24"
  },
  '2025-09-25': {
    reference: "Proverbs 25:21",
    text: "If your enemy is hungry, give him food to eat, and if he is thirsty, give him water to drink.",
    dateLabel: "September 25"
  },
  '2025-09-26': {
    reference: "Deuteronomy 5:20",
    text: "Do not give dishonest testimony against your neighbor.",
    dateLabel: "September 26"
  },
  '2025-09-27': {
    reference: "Proverbs 14:21",
    text: "The one who despises his neighbor sins, but the one who shows kindness to the poor will be happy.",
    dateLabel: "September 27"
  },
  '2025-09-28': {
    reference: "Job 31:16",
    text: "If I have refused the wishes of the poor or let the widow’s eyes go blind, if I have eaten my few crumbs alone without sharing with the fatherless—",
    dateLabel: "September 28"
  },
  '2025-09-29': {
    reference: "Proverbs 29:7",
    text: "The righteous person knows the rights of the poor, but the wicked one does not understand these concerns.",
    dateLabel: "September 29"
  },
  '2025-09-30': {
    reference: "Amos 5:24",
    text: "But let justice flow like water, and righteousness, like an unfailing stream.",
    dateLabel: "September 30"
  },
  '2025-10-01': {
  reference: "Romans 12:12",
  text: "Rejoice in hope, be patient in tribulation, be constant in prayer.",
  dateLabel: "October 1"
},
'2025-10-02': {
  reference: "Colossians 3:13",
  text: "Bear with one another and, if one has a complaint against another, forgive each other; as the Lord has forgiven you, so you also must forgive.",
  dateLabel: "October 2"
},
'2025-10-03': {
  reference: "James 1:19",
  text: "Know this, my beloved brothers: let every person be quick to hear, slow to speak, and slow to anger;",
  dateLabel: "October 3"
},
'2025-10-04': {
  reference: "Hebrews 10:35",
  text: "Therefore do not throw away your confidence, which has a great reward.",
  dateLabel: "October 4"
},
'2025-10-05': {
  reference: "Proverbs 3:5-6",
  text: "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.",
  dateLabel: "October 5"
},
'2025-10-06': {
  reference: "Philippians 4:6",
  text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.",
  dateLabel: "October 6"
},
'2025-10-07': {
  reference: "1 Peter 5:7",
  text: "Casting all your anxieties on him, because he cares for you.",
  dateLabel: "October 7"
},
'2025-10-08': {
  reference: "Galatians 6:9",
  text: "And let us not grow weary of doing good, for in due season we will reap, if we do not give up.",
  dateLabel: "October 8"
},
'2025-10-09': {
  reference: "Ephesians 4:32",
  text: "Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you.",
  dateLabel: "October 9"
},
'2025-10-10': {
  reference: "1 Corinthians 16:13",
  text: "Be watchful, stand firm in the faith, act like men, be strong.",
  dateLabel: "October 10"
},
'2025-10-11': {
  reference: "1 Timothy 6:11",
  text: "But as for you, O man of God, flee these things. Pursue righteousness, godliness, faith, love, steadfastness, gentleness.",
  dateLabel: "October 11"
},
'2025-10-12': {
  reference: "1 Thessalonians 5:15",
  text: "See that no one repays anyone evil for evil, but always seek to do good to one another and to everyone.",
  dateLabel: "October 12"
},
'2025-10-13': {
  reference: "Psalm 37:5",
  text: "Commit your way to the Lord; trust in him, and he will act.",
  dateLabel: "October 13"
},
'2025-10-14': {
  reference: "Hebrews 12:1",
  text: "...let us also, since we are surrounded by so great a cloud of witnesses, lay aside every weight, and sin which clings so closely, and let us run with endurance the race that is set before us,",
  dateLabel: "October 14"
},
'2025-10-15': {
  reference: "Luke 6:35",
  text: "But love your enemies, and do good, and lend, expecting nothing in return, and your reward will be great, and you will be sons of the Most High, for he is kind to the ungrateful and the evil.",
  dateLabel: "October 15"
},
'2025-10-16': {
  reference: "1 Peter 1:13",
  text: "Therefore, preparing your minds for action, and being sober-minded, set your hope fully on the grace that will be brought to you at the revelation of Jesus Christ.",
  dateLabel: "October 16"
},
'2025-10-17': {
  reference: "Psalm 146:5",
  text: "Blessed is he whose help is the God of Jacob, whose hope is in the Lord his God,",
  dateLabel: "October 17"
},
'2025-10-18': {
  reference: "James 4:7",
  text: "Submit yourselves therefore to God. Resist the devil, and he will flee from you.",
  dateLabel: "October 18"
},
'2025-10-19': {
  reference: "Matthew 6:33",
  text: "But seek first the kingdom of God and his righteousness, and all these things will be added to you.",
  dateLabel: "October 19"
},
'2025-10-20': {
  reference: "Ephesians 4:29",
  text: "Let no corrupting talk come out of your mouths, but only such as is good for building up, as fits the occasion, that it may give grace to those who hear.",
  dateLabel: "October 20"
},
'2025-10-21': {
  reference: "1 Corinthians 10:13",
  text: "No temptation has overtaken you that is not common to man. God is faithful, and he will not let you be tempted beyond your ability, but with the temptation he will also provide the way of escape, that you may be able to endure it.",
  dateLabel: "October 21"
},
'2025-10-22': {
  reference: "1 Thessalonians 5:17-18",
  text: "Pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you.",
  dateLabel: "October 22"
},
'2025-10-23': {
  reference: "Isaiah 41:10",
  text: "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.",
  dateLabel: "October 23"
},
'2025-10-24': {
  reference: "James 5:16",
  text: "Therefore, confess your sins to one another and pray for one another, that you may be healed. The prayer of a righteous person has great power as it is working.",
  dateLabel: "October 24"
},
'2025-10-25': {
  reference: "Colossians 3:2",
  text: "Set your minds on things that are above, not on things that are on earth.",
  dateLabel: "October 25"
},
'2025-10-26': {
  reference: "Romans 15:13",
  text: "May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope.",
  dateLabel: "October 26"
},
'2025-10-27': {
  reference: "Isaiah 40:31",
  text: "But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.",
  dateLabel: "October 27"
},
'2025-10-28': {
  reference: "Hebrews 13:5",
  text: "Keep your life free from love of money, and be content with what you have, for he has said, “I will never leave you nor forsake you.”",
  dateLabel: "October 28"
},
'2025-10-29': {
  reference: "1 Corinthians 15:58",
  text: "Therefore, my beloved brothers, be steadfast, immovable, always abounding in the work of the Lord, knowing that in the Lord your labor is not in vain.",
  dateLabel: "October 29"
},
'2025-10-30': {
  reference: "Romans 12:10",
  text: "Love one another with brotherly affection. Outdo one another in showing honor.",
  dateLabel: "October 30"
},
'2025-10-31': {
  reference: "Hebrews 11:6",
  text: "And without faith it is impossible to please him, for whoever would draw near to God must believe that he exists and that he rewards those who seek him.",
  dateLabel: "October 31"
},
'2025-11-01': {
  reference: "1 Thessalonians 5:18",
  text: "Give thanks in all circumstances; for this is the will of God in Christ Jesus for you.",
  dateLabel: "November 1"
},
'2025-11-02': {
  reference: "Psalm 100:4",
  text: "Enter his gates with thanksgiving, and his courts with praise! Give thanks to him; bless his name!",
  dateLabel: "November 2"
},
'2025-11-03': {
  reference: "Colossians 3:17",
  text: "And whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through him.",
  dateLabel: "November 3"
},
'2025-11-04': {
  reference: "Psalm 9:1",
  text: "I will give thanks to the Lord with my whole heart; I will recount all of your wonderful deeds.",
  dateLabel: "November 4"
},
'2025-11-05': {
  reference: "Philippians 4:6",
  text: "With thanksgiving let your requests be made known to God.",
  dateLabel: "November 5"
},
'2025-11-06': {
  reference: "Ephesians 5:20",
  text: "Giving thanks always and for everything to God the Father in the name of our Lord Jesus Christ.",
  dateLabel: "November 6"
},
'2025-11-07': {
  reference: "Psalm 107:1",
  text: "Oh give thanks to the Lord, for he is good, for his steadfast love endures forever!",
  dateLabel: "November 7"
},
'2025-11-08': {
  reference: "Colossians 4:2",
  text: "Continue steadfastly in prayer, being watchful in it with thanksgiving.",
  dateLabel: "November 8"
},
'2025-11-09': {
  reference: "Psalm 28:7",
  text: "The Lord is my strength and my shield; in him my heart trusts, and I am helped; my heart exults, and with my song I give thanks to him.",
  dateLabel: "November 9"
},
'2025-11-10': {
  reference: "1 Chronicles 16:34",
  text: "Oh give thanks to the Lord, for he is good; for his steadfast love endures forever!",
  dateLabel: "November 10"
},
'2025-11-11': {
  reference: "Psalm 95:2",
  text: "Let us come into his presence with thanksgiving; let us make a joyful noise to him with songs of praise!",
  dateLabel: "November 11"
},
'2025-11-12': {
  reference: "Hebrews 13:15",
  text: "Let us continually offer up a sacrifice of praise to God, that is, the fruit of lips that acknowledge his name.",
  dateLabel: "November 12"
},
'2025-11-13': {
  reference: "Psalm 118:28–29",
  text: "You are my God, and I will give thanks to you; you are my God; I will extol you. Oh give thanks to the Lord, for he is good; for his steadfast love endures forever!",
  dateLabel: "November 13"
},
'2025-11-14': {
  reference: "Jonah 2:9",
  text: "But I with the voice of thanksgiving will sacrifice to you; what I have vowed I will pay. Salvation belongs to the Lord!",
  dateLabel: "November 14"
},
'2025-11-15': {
  reference: "Colossians 2:7",
  text: "Rooted and built up in him and established in the faith, just as you were taught, abounding in thanksgiving.",
  dateLabel: "November 15"
},
'2025-11-16': {
  reference: "Psalm 136:1",
  text: "Give thanks to the Lord, for he is good, for his steadfast love endures forever.",
  dateLabel: "November 16"
},
'2025-11-17': {
  reference: "2 Corinthians 9:11",
  text: "You will be enriched in every way to be generous in every way, which through us will produce thanksgiving to God.",
  dateLabel: "November 17"
},
'2025-11-18': {
  reference: "Psalm 92:1",
  text: "It is good to give thanks to the Lord, to sing praises to your name, O Most High.",
  dateLabel: "November 18"
},
'2025-11-19': {
  reference: "1 Timothy 4:4",
  text: "For everything created by God is good, and nothing is to be rejected if it is received with thanksgiving.",
  dateLabel: "November 19"
},
'2025-11-20': {
  reference: "Psalm 30:12",
  text: "That my glory may sing your praise and not be silent. O Lord my God, I will give thanks to you forever!",
  dateLabel: "November 20"
},
'2025-11-21': {
  reference: "Ephesians 1:16",
  text: "I do not cease to give thanks for you, remembering you in my prayers.",
  dateLabel: "November 21"
},
'2025-11-22': {
  reference: "Psalm 50:14",
  text: "Offer to God a sacrifice of thanksgiving, and perform your vows to the Most High.",
  dateLabel: "November 22"
},
'2025-11-23': {
  reference: "Daniel 2:23",
  text: "To you, O God of my fathers, I give thanks and praise, for you have given me wisdom and might.",
  dateLabel: "November 23"
},
'2025-11-24': {
  reference: "Philippians 1:3",
  text: "I thank my God in all my remembrance of you.",
  dateLabel: "November 24"
},
'2025-11-25': {
  reference: "Psalm 69:30",
  text: "I will praise the name of God with a song; I will magnify him with thanksgiving.",
  dateLabel: "November 25"
},
'2025-11-26': {
  reference: "Colossians 3:15",
  text: "And let the peace of Christ rule in your hearts, to which indeed you were called in one body. And be thankful.",
  dateLabel: "November 26"
},
'2025-11-27': {
  reference: "Psalm 136:26",
  text: "Give thanks to the God of heaven, for his steadfast love endures forever.",
  dateLabel: "November 27"
},
'2025-11-28': {
  reference: "2 Corinthians 4:15",
  text: "For it is all for your sake, so that as grace extends to more and more people it may increase thanksgiving, to the glory of God.",
  dateLabel: "November 28"
},
'2025-11-29': {
  reference: "Psalm 145:10",
  text: "All your works shall give thanks to you, O Lord, and all your saints shall bless you!",
  dateLabel: "November 29"
},
'2025-11-30': {
  reference: "Revelation 11:17",
  text: "We give thanks to you, Lord God Almighty, who is and who was, for you have taken your great power and begun to reign.",
  dateLabel: "November 30"
},
'2025-12-01': {
    reference: "Isaiah 9:2",
    text: "The people who walked in darkness have seen a great light; those who dwelt in a land of deep darkness, on them has light shined.",
    dateLabel: "December 1"
  },
  '2025-12-02': {
    reference: "Isaiah 7:14",
    text: "Therefore the Lord himself will give you a sign. Behold, the virgin shall conceive and bear a son, and shall call his name Immanuel.",
    dateLabel: "December 2"
  },
  '2025-12-03': {
    reference: "Isaiah 11:1",
    text: "There shall come forth a shoot from the stump of Jesse, and a branch from his roots shall bear fruit.",
    dateLabel: "December 3"
  },
  '2025-12-04': {
    reference: "Isaiah 40:3",
    text: "A voice cries: 'In the wilderness prepare the way of the Lord; make straight in the desert a highway for our God.'",
    dateLabel: "December 4"
  },
  '2025-12-05': {
    reference: "Isaiah 52:7",
    text: "How beautiful upon the mountains are the feet of him who brings good news, who publishes peace, who brings good news of happiness, who publishes salvation, who says to Zion, 'Your God reigns.'",
    dateLabel: "December 5"
  },
  '2025-12-06': {
    reference: "Malachi 3:1",
    text: "Behold, I send my messenger, and he will prepare the way before me. And the Lord whom you seek will suddenly come to his temple; and the messenger of the covenant in whom you delight, behold, he is coming, says the Lord of hosts.",
    dateLabel: "December 6"
  },
  '2025-12-07': {
    reference: "Matthew 1:21",
    text: "She will bear a son, and you shall call his name Jesus, for he will save his people from their sins.",
    dateLabel: "December 7"
  },
  '2025-12-08': {
    reference: "Matthew 2:6",
    text: "'And you, O Bethlehem, in the land of Judah, are by no means least among the rulers of Judah; for from you shall come a ruler who will shepherd my people Israel.'",
    dateLabel: "December 8"
  },
  '2025-12-09': {
    reference: "Luke 1:32",
    text: "He will be great and will be called the Son of the Most High. And the Lord God will give to him the throne of his father David.",
    dateLabel: "December 9"
  },
  '2025-12-10': {
    reference: "Luke 1:38",
    text: "And Mary said, 'Behold, I am the servant of the Lord; let it be to me according to your word.' And the angel departed from her.",
    dateLabel: "December 10"
  },
  '2025-12-11': {
    reference: "Luke 1:46-47",
    text: "And Mary said, 'My soul magnifies the Lord, and my spirit rejoices in God my Savior.'",
    dateLabel: "December 11"
  },
  '2025-12-12': {
    reference: "Luke 1:68",
    text: "'Blessed be the Lord God of Israel, for he has visited and redeemed his people.'",
    dateLabel: "December 12"
  },
  '2025-12-13': {
    reference: "Luke 2:10",
    text: "And the angel said to them, 'Fear not, for behold, I bring you good news of great joy that will be for all the people.'",
    dateLabel: "December 13"
  },
  '2025-12-14': {
    reference: "Luke 2:11",
    text: "For unto you is born this day in the city of David a Savior, who is Christ the Lord.",
    dateLabel: "December 14"
  },
  '2025-12-15': {
    reference: "Luke 2:14",
    text: "'Glory to God in the highest, and on earth peace among those with whom he is pleased!'",
    dateLabel: "December 15"
  },
  '2025-12-16': {
    reference: "John 1:14",
    text: "And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth.",
    dateLabel: "December 16"
  },
  '2025-12-17': {
    reference: "John 1:29",
    text: "The next day he saw Jesus coming toward him, and said, 'Behold, the Lamb of God, who takes away the sin of the world!'",
    dateLabel: "December 17"
  },
  '2025-12-18': {
    reference: "Romans 15:13",
    text: "May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope.",
    dateLabel: "December 18"
  },
  '2025-12-19': {
    reference: "Titus 2:11",
    text: "For the grace of God has appeared, bringing salvation for all people.",
    dateLabel: "December 19"
  },
  '2025-12-20': {
    reference: "Philippians 2:7",
    text: "But emptied himself, by taking the form of a servant, being born in the likeness of men.",
    dateLabel: "December 20"
  },
  '2025-12-21': {
    reference: "2 Corinthians 8:9",
    text: "For you know the grace of our Lord Jesus Christ, that though he was rich, yet for your sake he became poor, so that you by his poverty might become rich.",
    dateLabel: "December 21"
  },
  '2025-12-22': {
    reference: "Galatians 4:4-5",
    text: "But when the fullness of time had come, God sent forth his Son, born of woman, born under the law, to redeem those who were under the law, so that we might receive adoption as sons.",
    dateLabel: "December 22"
  },
  '2025-12-23': {
    reference: "Hebrews 1:1-2",
    text: "Long ago, at many times and in many ways, God spoke to our fathers by the prophets, but in these last days he has spoken to us by his Son, whom he appointed the heir of all things, through whom also he created the world.",
    dateLabel: "December 23"
  },
  '2025-12-24': {
    reference: "Micah 5:2",
    text: "But you, O Bethlehem Ephrathah, who are too little to be among the clans of Judah, from you shall come forth for me one who is to be ruler in Israel, whose coming forth is from of old, from ancient days.",
    dateLabel: "December 24"
  },
  '2025-12-25': {
    reference: "John 3:16",
    text: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.",
    dateLabel: "December 25"
  },
  '2025-12-26': {
    reference: "1 Timothy 3:16",
    text: "Great indeed, we confess, is the mystery of godliness: He was manifested in the flesh, vindicated by the Spirit, seen by angels, proclaimed among the nations, believed on in the world, taken up in glory.",
    dateLabel: "December 26"
  },
  '2025-12-27': {
    reference: "Colossians 1:15",
    text: "He is the image of the invisible God, the firstborn of all creation.",
    dateLabel: "December 27"
  },
  '2025-12-28': {
    reference: "Revelation 22:20",
    text: "He who testifies to these things says, 'Surely I am coming soon.' Amen. Come, Lord Jesus!",
    dateLabel: "December 28"
  },
  '2025-12-29': {
    reference: "1 John 4:9",
    text: "In this the love of God was made manifest among us, that God sent his only Son into the world, so that we might live through him.",
    dateLabel: "December 29"
  },
  '2025-12-30': {
    reference: "James 5:8",
    text: "You also, be patient. Establish your hearts, for the coming of the Lord is at hand.",
    dateLabel: "December 30"
  },
  '2025-12-31': {
    reference: "Psalm 90:12",
    text: "So teach us to number our days that we may get a heart of wisdom.",
    dateLabel: "December 31"
  },
  '2026-01-01': {
    reference: "2 Peter 3:9",
    text: "The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish, but that all should reach repentance.",
    dateLabel: "January 1"
  },
  '2026-01-02': {
    reference: "John 3:16-17",
    text: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. For God did not send his Son into the world to condemn the world, but in order that the world might be saved through him.",
    dateLabel: "January 2"
  },
  '2026-01-03': {
    reference: "Luke 15:7",
    text: "Just so, I tell you, there will be more joy in heaven over one sinner who repents than over ninety-nine righteous persons who need no repentance.",
    dateLabel: "January 3"
  },
  '2026-01-04': {
    reference: "Matthew 9:36",
    text: "When he saw the crowds, he had compassion for them, because they were harassed and helpless, like sheep without a shepherd.",
    dateLabel: "January 4"
  },
  '2026-01-05': {
    reference: "2 Corinthians 5:19",
    text: "...that is, in Christ God was reconciling the world to himself, not counting their trespasses against them, and entrusting to us the message of reconciliation.",
    dateLabel: "January 5"
  },
  '2026-01-06': {
    reference: "Romans 8:38-39",
    text: "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.",
    dateLabel: "January 6"
  },
  '2026-01-07': {
    reference: "Revelation 21:3",
    text: "And I heard a loud voice from the throne saying, 'Behold, the dwelling place of God is with man. He will dwell with them, and they will be his people, and God himself will be with them as their God.'",
    dateLabel: "January 7"
  },
  '2026-01-08': {
    reference: "Luke 10:2",
    text: "And he said to them, 'The harvest is plentiful, but the laborers are few. Therefore pray earnestly to the Lord of the harvest to send out laborers into his harvest.'",
    dateLabel: "January 8"
  },
  '2026-01-09': {
    reference: "1 Timothy 2:1-2",
    text: "First of all, then, I urge that supplications, prayers, intercessions, and thanksgivings be made for all people, for kings and all who are in high positions, that we may lead a peaceful and quiet life, godly and dignified in every way.",
    dateLabel: "January 9"
  },
  '2026-01-10': {
    reference: "Ezekiel 22:30",
    text: "And I sought for a man among them who should build up the wall and stand in the breach before me for the land, that I should not destroy it, but I found none.",
    dateLabel: "January 10"
  },
  '2026-01-11': {
    reference: "Matthew 6:9-10",
    text: "Pray then like this: 'Our Father in heaven, hallowed be your name. Your kingdom come, your will be done, on earth as it is in heaven.'",
    dateLabel: "January 11"
  },
  '2026-01-12': {
    reference: "Luke 18:1",
    text: "And he told them a parable to the effect that they ought always to pray and not lose heart.",
    dateLabel: "January 12"
  },
  '2026-01-13': {
    reference: "Hebrews 4:16",
    text: "Let us then with confidence draw near to the throne of grace, that we may receive mercy and find grace to help in time of need.",
    dateLabel: "January 13"
  },
  '2026-01-14': {
    reference: "2 Chronicles 7:14",
    text: "if my people who are called by my name humble themselves, and pray and seek my face and turn from their wicked ways, then I will hear from heaven and will forgive their sin and heal their land.",
    dateLabel: "January 14"
  },
  '2026-01-15': {
    reference: "Mark 2:11-12",
    text: "'I say to you, rise, pick up your bed, and go home.' And he rose and immediately picked up his bed and went out before them all, so that they were all amazed and glorified God, saying, 'We never saw anything like this!'",
    dateLabel: "January 15"
  },
  '2026-01-16': {
    reference: "Acts 3:6",
    text: "But Peter said, 'I have no silver and gold, but what I do have I give to you. In the name of Jesus Christ of Nazareth, rise up and walk!'",
    dateLabel: "January 16"
  },
  '2026-01-17': {
    reference: "John 4:29",
    text: "'Come, see a man who told me all that I ever did. Can this be the Christ?'",
    dateLabel: "January 17"
  },
  '2026-01-18': {
    reference: "Luke 10:33-34",
    text: "But a Samaritan, as he journeyed, came to where he was, and when he saw him, he had compassion. He went to him and bound up his wounds, pouring on oil and wine. Then he set him on his own animal and brought him to an inn and took care of him.",
    dateLabel: "January 18"
  },
  '2026-01-19': {
    reference: "Matthew 5:16",
    text: "In the same way, let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven.",
    dateLabel: "January 19"
  },
  '2026-01-20': {
    reference: "Matthew 28:19-20",
    text: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.",
    dateLabel: "January 20"
  },
  '2026-01-21': {
    reference: "Daniel 3:28",
    text: "Nebuchadnezzar answered and said, 'Blessed be the God of Shadrach, Meshach, and Abednego, who has sent his angel and delivered his servants, who trusted in him...'",
    dateLabel: "January 21"
  },
  '2026-01-22': {
    reference: "Acts 17:17",
    text: "So he reasoned in the synagogue with the Jews and the devout persons, and in the marketplace every day with those who happened to be there.",
    dateLabel: "January 22"
  },
  '2026-01-23': {
    reference: "Luke 10:5",
    text: "Whatever house you enter, first say, 'Peace be to this house!'",
    dateLabel: "January 23"
  },
  '2026-01-24': {
    reference: "Luke 10:6",
    text: "And if a son of peace is there, your peace will rest upon him. But if not, it will return to you.",
    dateLabel: "January 24"
  },
  '2026-01-25': {
    reference: "Luke 10:7",
    text: "And remain in the same house, eating and drinking what they provide, for the laborer deserves his wages. Do not go from house to house.",
    dateLabel: "January 25"
  },
  '2026-01-26': {
    reference: "Matthew 10:11",
    text: "And whatever town or village you enter, find out who is worthy in it and stay there until you depart.",
    dateLabel: "January 26"
  },
  '2026-01-27': {
    reference: "Acts 16:14",
    text: "One who heard us was a woman named Lydia, from the city of Thyatira, a seller of purple goods, who was a worshiper of God. The Lord opened her heart to pay attention to what was said by Paul.",
    dateLabel: "January 27"
  },
  '2026-01-28': {
    reference: "Acts 16:15",
    text: "And after she was baptized, and her household as well, she urged us, saying, 'If you have judged me to be faithful to the Lord, come to my house and stay.' And she prevailed upon us.",
    dateLabel: "January 28"
  },
  '2026-01-29': {
    reference: "Acts 17:11",
    text: "Now these Jews were more noble than those in Thessalonica; they received the word with all eagerness, examining the Scriptures daily to see if these things were so.",
    dateLabel: "January 29"
  },
  '2026-01-30': {
    reference: "John 5:39",
    text: "You search the Scriptures because you think that in them you have eternal life; and it is they that bear witness about me,",
    dateLabel: "January 30"
  },
  '2026-01-31': {
    reference: "2 Timothy 3:16-17",
    text: "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work.",
    dateLabel: "January 31"
  },
  '2026-02-01': {
    reference: "Hebrews 4:12",
    text: "For the word of God is living and active, sharper than any two-edged sword, piercing to the division of soul and of spirit, of joints and of marrow, and discerning the thoughts and intentions of the heart.",
    dateLabel: "February 1"
  },
  '2026-02-02': {
    reference: "Romans 10:17",
    text: "So faith comes from hearing, and hearing through the word of Christ.",
    dateLabel: "February 2"
  },
  '2026-02-03': {
    reference: "Joshua 1:8",
    text: "This Book of the Law shall not depart from your mouth, but you shall meditate on it day and night, so that you may be careful to do according to all that is written in it. For then you will make your way prosperous, and then you will have good success.",
    dateLabel: "February 3"
  },
  '2026-02-04': {
    reference: "Psalm 1:2",
    text: "but his delight is in the law of the LORD, and on his law he meditates day and night.",
    dateLabel: "February 4"
  },
  '2026-02-05': {
    reference: "Acts 2:42",
    text: "And they devoted themselves to the apostles' teaching and the fellowship, to the breaking of bread and the prayers.",
    dateLabel: "February 5"
  },
  '2026-02-06': {
    reference: "Matthew 18:20",
    text: "For where two or three are gathered in my name, there am I among them.",
    dateLabel: "February 6"
  },
  '2026-02-07': {
    reference: "Hebrews 10:24-25",
    text: "And let us consider how to stir up one another to love and good works, not neglecting to meet together, as is the habit of some, but encouraging one another, and all the more as you see the Day drawing near.",
    dateLabel: "February 7"
  },
  '2026-02-08': {
    reference: "1 Peter 2:5",
    text: "you yourselves like living stones are being built up as a spiritual house, to be a holy priesthood, to offer spiritual sacrifices acceptable to God through Jesus Christ.",
    dateLabel: "February 8"
  },
  '2026-02-09': {
    reference: "1 Peter 2:9",
    text: "But you are a chosen race, a royal priesthood, a holy nation, a people for his own possession, that you may proclaim the excellencies of him who called you out of darkness into his marvelous light.",
    dateLabel: "February 9"
  },
  '2026-02-10': {
    reference: "James 1:22",
    text: "But be doers of the word, and not hearers only, deceiving yourselves.",
    dateLabel: "February 10"
  },
  '2026-02-11': {
    reference: "1 Corinthians 12:7",
    text: "To each is given the manifestation of the Spirit for the common good.",
    dateLabel: "February 11"
  },
  '2026-02-12': {
    reference: "John 14:12",
    text: "Truly, truly, I say to you, whoever believes in me will also do the works that I do; and greater works than these will he do, because I am going to the Father.",
    dateLabel: "February 12"
  },
  '2026-02-13': {
    reference: "Acts 18:26",
    text: "He began to speak boldly in the synagogue, but when Priscilla and Aquila heard him, they took him aside and explained to him the way of God more accurately.",
    dateLabel: "February 13"
  },
  '2026-02-14': {
    reference: "John 20:21",
    text: "Jesus said to them again, 'Peace be with you. As the Father has sent me, even so I am sending you.'",
    dateLabel: "February 14"
  },
  '2026-02-15': {
    reference: "Mark 1:17",
    text: "And Jesus said to them, 'Follow me, and I will make you become fishers of men.'",
    dateLabel: "February 15"
  },
  '2026-02-16': {
    reference: "Mark 3:14",
    text: "And he appointed twelve (whom he also named apostles) so that they might be with him and he might send them out to preach",
    dateLabel: "February 16"
  },
  '2026-02-17': {
    reference: "Luke 6:40",
    text: "A disciple is not above his teacher, but everyone when he is fully trained will be like his teacher.",
    dateLabel: "February 17"
  },
  '2026-02-18': {
    reference: "2 Timothy 2:2",
    text: "and what you have heard from me in the presence of many witnesses entrust to faithful men, who will be able to teach others also.",
    dateLabel: "February 18"
  },
  '2026-02-19': {
    reference: "Ezekiel 33:11",
    text: "Say to them, As I live, declares the Lord GOD, I have no pleasure in the death of the wicked, but that the wicked turn from his way and live; turn back, turn back from your evil ways, for why will you die, O house of Israel?",
    dateLabel: "February 19"
  },
  '2026-02-20': {
    reference: "1 Timothy 2:4",
    text: "[God our Savior], who desires all people to be saved and to come to the knowledge of the truth.",
    dateLabel: "February 20"
  },
  '2026-02-21': {
    reference: "Romans 5:8",
    text: "but God shows his love for us in that while we were still sinners, Christ died for us.",
    dateLabel: "February 21"
  },
  '2026-02-22': {
    reference: "Luke 15:20",
    text: "And he arose and came to his father. But while he was still a long way off, his father saw him and felt compassion, and ran and embraced him and kissed him.",
    dateLabel: "February 22"
  },
  '2026-02-23': {
    reference: "1 John 3:1",
    text: "See what kind of love the Father has given to us, that we should be called children of God; and so we are.",
    dateLabel: "February 23"
  },
  '2026-02-24': {
    reference: "Zephaniah 3:17",
    text: "The LORD your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing.",
    dateLabel: "February 24"
  },
  '2026-02-25': {
    reference: "Isaiah 45:22",
    text: "Turn to me and be saved, all the ends of the earth! For I am God, and there is no other.",
    dateLabel: "February 25"
  },
  '2026-02-26': {
    reference: "Luke 5:16",
    text: "but he would withdraw to desolate places and pray.",
    dateLabel: "February 26"
  },
  '2026-02-27': {
    reference: "Acts 4:29-30",
    text: "And now, Lord, look upon their threats and grant to your servants to continue to speak your word with all boldness, while you stretch out your hand to heal, and signs and wonders are performed through the name of your holy servant Jesus.",
    dateLabel: "February 27"
  },
  '2026-02-28': {
    reference: "Colossians 4:2",
    text: "Continue steadfastly in prayer, being watchful in it with thanksgiving.",
    dateLabel: "February 28"
  },
  '2026-03-01': {
    reference: "1 Chronicles 4:10",
    text: "Jabez called upon the God of Israel, saying, 'Oh that you would bless me and enlarge my border, and that your hand might be with me, and that you would keep me from harm so that it might not bring me pain!' And God granted what he asked.",
    dateLabel: "March 1"
  },
  '2026-03-02': {
    reference: "Daniel 9:18-19",
    text: "O my God, incline your ear and hear. Open your eyes and see our desolations... For we do not present our pleas before you because of our righteousness, but because of your great mercy. O Lord, hear; O Lord, forgive. O Lord, pay attention and act. Delay not, for your own sake, O my God...",
    dateLabel: "March 2"
  },
  '2026-03-03': {
    reference: "Psalm 51:10",
    text: "Create in me a clean heart, O God, and renew a right spirit within me.",
    dateLabel: "March 3"
  },
  '2026-03-04': {
    reference: "John 15:7",
    text: "If you abide in me, and my words abide in you, ask whatever you wish, and it will be done for you.",
    dateLabel: "March 4"
  },
  '2026-03-05': {
    reference: "Daniel 6:26-27",
    text: "I make a decree, that in all my royal dominion people are to tremble and fear before the God of Daniel, for he is the living God, enduring forever... He delivers and rescues; he works signs and wonders in heaven and on earth, he who has saved Daniel from the power of the lions.",
    dateLabel: "March 5"
  },
  '2026-03-06': {
    reference: "1 Kings 18:39",
    text: "And when all the people saw it, they fell on their faces and said, 'The LORD, he is God; the LORD, he is God.'",
    dateLabel: "March 6"
  },
  '2026-03-07': {
    reference: "Acts 8:35",
    text: "Then Philip opened his mouth, and beginning with this Scripture he told him the good news about Jesus.",
    dateLabel: "March 7"
  },
  '2026-03-08': {
    reference: "2 Kings 4:6-7",
    text: "When the vessels were full, she said to her son, 'Bring me another vessel.' And he said to her, 'There is not another.' Then the oil stopped flowing. She came and told the man of God, and he said, 'Go, sell the oil and pay your debts, and you and your sons can live on the rest.'",
    dateLabel: "March 8"
  },
  '2026-03-09': {
    reference: "1 Samuel 17:46-47",
    text: "This day the LORD will deliver you into my hand... that all the earth may know that there is a God in Israel, and that all this assembly may know that the LORD saves not with sword and spear. For the battle is the LORD's...",
    dateLabel: "March 9"
  },
  '2026-03-10': {
    reference: "Nehemiah 2:18",
    text: "And I told them of the hand of my God that had been upon me for good, and also of the words that the king had spoken to me. And they said, 'Let us rise up and build.' So they strengthened their hands for the good work.",
    dateLabel: "March 10"
  },
  '2026-03-11': {
    reference: "Acts 7:55-56",
    text: "But he, full of the Holy Spirit, gazed into heaven and saw the glory of God, and Jesus standing at the right hand of God. And he said, 'Behold, I see the heavens opened, and the Son of Man standing at the right hand of God.'",
    dateLabel: "March 11"
  },
  '2026-03-12': {
    reference: "John 4:39",
    text: "Many Samaritans from that town believed in him because of the woman's testimony, 'He told me all that I ever did.'",
    dateLabel: "March 12"
  },
  '2026-03-13': {
    reference: "Luke 19:5-6",
    text: "And when Jesus came to the place, he looked up and said to him, 'Zacchaeus, hurry and come down, for I must stay at your house today.' So he hurried and came down and received him joyfully.",
    dateLabel: "March 13"
  },
  '2026-03-14': {
    reference: "Matthew 9:9",
    text: "As Jesus passed on from there, he saw a man called Matthew sitting at the tax booth, and he said to him, 'Follow me.' And he rose and followed him.",
    dateLabel: "March 14"
  },
  '2026-03-15': {
    reference: "Matthew 9:10",
    text: "And as Jesus reclined at table in the house, behold, many tax collectors and sinners came and were reclining with Jesus and his disciples.",
    dateLabel: "March 15"
  },
  '2026-03-16': {
    reference: "Acts 10:1-2",
    text: "At Caesarea there was a man named Cornelius, a centurion... a devout man who feared God with all his household, gave alms generously to the people, and prayed continually to God.",
    dateLabel: "March 16"
  },
  '2026-03-17': {
    reference: "Acts 10:33",
    text: "'So I sent for you at once, and you have been kind enough to come. Now therefore we are all here in the presence of God to hear all that you have been commanded by the Lord.'",
    dateLabel: "March 17"
  },
  '2026-03-18': {
    reference: "Acts 8:29-30",
    text: "And the Spirit said to Philip, 'Go over and join this chariot.' So Philip ran to him and heard him reading Isaiah the prophet and asked, 'Do you understand what you are reading?'",
    dateLabel: "March 18"
  },
  '2026-03-19': {
    reference: "Psalm 119:11",
    text: "I have stored up your word in my heart, that I might not sin against you.",
    dateLabel: "March 19"
  },
  '2026-03-20': {
    reference: "Psalm 119:18",
    text: "Open my eyes, that I may behold wondrous things out of your law.",
    dateLabel: "March 20"
  },
  '2026-03-21': {
    reference: "Psalm 119:105",
    text: "Your word is a lamp to my feet and a light to my path.",
    dateLabel: "March 21"
  },
  '2026-03-22': {
    reference: "2 Timothy 2:15",
    text: "Do your best to present yourself to God as one approved, a worker who has no need to be ashamed, rightly handling the word of truth.",
    dateLabel: "March 22"
  },
  '2026-03-23': {
    reference: "1 Peter 2:2",
    text: "Like newborn infants, long for the pure spiritual milk, that by it you may grow up into salvation—",
    dateLabel: "March 23"
  },
  '2026-03-24': {
    reference: "Romans 15:4",
    text: "For whatever was written in former days was written for our instruction, that through endurance and through the encouragement of the Scriptures we might have hope.",
    dateLabel: "March 24"
  },
  '2026-03-25': {
    reference: "Luke 24:27",
    text: "And beginning with Moses and all the Prophets, he interpreted to them in all the Scriptures the things concerning himself.",
    dateLabel: "March 25"
  },
  '2026-03-26': {
    reference: "Acts 2:46-47",
    text: "And day by day, attending the temple together and breaking bread in their homes, they received their food with glad and generous hearts, praising God and having favor with all the people. And the Lord added to their number day by day those who were being saved.",
    dateLabel: "March 26"
  },
  '2026-03-27': {
    reference: "John 13:35",
    text: "By this all people will know that you are my disciples, if you have love for one another.",
    dateLabel: "March 27"
  },
  '2026-03-28': {
    reference: "Colossians 3:16",
    text: "Let the word of Christ dwell in you richly, teaching and admonishing one another in all wisdom, singing psalms and hymns and spiritual songs, with thankfulness in your hearts to God.",
    dateLabel: "March 28"
  },
  '2026-03-29': {
    reference: "1 Corinthians 11:26",
    text: "For as often as you eat this bread and drink the cup, you proclaim the Lord's death until he comes.",
    dateLabel: "March 29"
  },
  '2026-03-30': {
    reference: "James 5:16",
    text: "Therefore, confess your sins to one another and pray for one another, that you may be healed. The prayer of a righteous person has great power as it is working.",
    dateLabel: "March 30"
  },
  '2026-03-31': {
    reference: "Matthew 18:15",
    text: "If your brother sins against you, go and tell him his fault, between you and him alone. If he listens to you, you have gained your brother.",
    dateLabel: "March 31"
  },
  '2026-04-01': {
    reference: "Galatians 6:2",
    text: "Bear one another's burdens, and so fulfill the law of Christ.",
    dateLabel: "April 1"
  },
  '2026-04-02': {
    reference: "Philippians 4:9",
    text: "What you have learned and received and heard and seen in me—practice these things, and the God of peace will be with you.",
    dateLabel: "April 2"
  },
  '2026-04-03': {
    reference: "1 Corinthians 11:1",
    text: "Be imitators of me, as I am of Christ.",
    dateLabel: "April 3"
  },
  '2026-04-04': {
    reference: "Hebrews 13:7",
    text: "Remember your leaders, those who spoke to you the word of God. Consider the outcome of their way of life, and imitate their faith.",
    dateLabel: "April 4"
  },
  '2026-04-05': {
    reference: "1 Thessalonians 1:6",
    text: "And you became imitators of us and of the Lord, for you received the word in much affliction, with the joy of the Holy Spirit,",
    dateLabel: "April 5"
  },
  '2026-04-06': {
    reference: "1 Thessalonians 1:7",
    text: "so that you became an example to all the believers in Macedonia and in Achaia.",
    dateLabel: "April 6"
  },
  '2026-04-07': {
    reference: "John 13:15",
    text: "For I have given you an example, that you also should do just as I have done to you.",
    dateLabel: "April 7"
  },
  '2026-04-08': {
    reference: "Luke 9:1-2",
    text: "And he called the twelve together and gave them power and authority over all demons and to cure diseases, and he sent them out to proclaim the kingdom of God and to heal.",
    dateLabel: "April 8"
  },
  '2026-04-09': {
    reference: "Luke 13:34",
    text: "O Jerusalem, Jerusalem, the city that kills the prophets and stones those who are sent to it! How often would I have gathered your children together as a hen gathers her brood under her wings, and you were not willing!",
    dateLabel: "April 9"
  },
  '2026-04-10': {
    reference: "Acts 17:26-27",
    text: "And he made from one man every nation of mankind to live on all the face of the earth, having determined allotted periods and the boundaries of their dwelling place, that they should seek God, and perhaps feel their way toward him and find him. Yet he is actually not far from each one of us,",
    dateLabel: "April 10"
  },
  '2026-04-11': {
    reference: "2 Corinthians 5:20-21",
    text: "Therefore, we are ambassadors for Christ, God making his appeal through us. We implore you on behalf of Christ, be reconciled to God. For our sake he made him to be sin who knew no sin, so that in him we might become the righteousness of God.",
    dateLabel: "April 11"
  },
  '2026-04-12': {
    reference: "Romans 5:10",
    text: "For if while we were enemies we were reconciled to God by the death of his Son, much more, now that we are reconciled, shall we be saved by his life.",
    dateLabel: "April 12"
  },
  '2026-04-13': {
    reference: "Ezekiel 18:23",
    text: "Have I any pleasure in the death of the wicked, declares the Lord GOD, and not rather that he should turn from his way and live?",
    dateLabel: "April 13"
  },
  '2026-04-14': {
    reference: "Jonah 4:2",
    text: "And he prayed to the LORD and said, 'O LORD, is not this what I said when I was yet in my country? That is why I made haste to flee to Tarshish; for I knew that you are a gracious God and merciful, slow to anger and abounding in steadfast love, and relenting from disaster.'",
    dateLabel: "April 14"
  },
  '2026-04-15': {
    reference: "1 John 4:10",
    text: "In this is love, not that we have loved God but that he loved us and sent his Son to be the propitiation for our sins.",
    dateLabel: "April 15"
  },
  '2026-04-16': {
    reference: "Luke 11:9",
    text: "And I tell you, ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you.",
    dateLabel: "April 16"
  },
  '2026-04-17': {
    reference: "Philippians 4:6-7",
    text: "do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.",
    dateLabel: "April 17"
  },
  '2026-04-18': {
    reference: "Luke 11:1",
    text: "Now Jesus was praying in a certain place, and when he finished, one of his disciples said to him, 'Lord, teach us to pray, as John taught his disciples.'",
    dateLabel: "April 18"
  },
  '2026-04-19': {
    reference: "Ephesians 6:18",
    text: "praying at all times in the Spirit, with all prayer and supplication. To that end, keep alert with all perseverance, making supplication for all the saints,",
    dateLabel: "April 19"
  },
  '2026-04-20': {
    reference: "1 John 5:14-15",
    text: "And this is the confidence that we have toward him, that if we ask anything according to his will, he hears us. And if we know that he hears us in whatever we ask, we know that we have the requests that we have asked of him.",
    dateLabel: "April 20"
  },
  '2026-04-21': {
    reference: "Matthew 18:19-20",
    text: "Again I say to you, if two of you agree on earth about anything they ask, it will be done for them by my Father in heaven. For where two or three are gathered in my name, there am I among them.",
    dateLabel: "April 21"
  },
  '2026-04-22': {
    reference: "Romans 8:26",
    text: "Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words.",
    dateLabel: "April 22"
  },
  '2026-04-23': {
    reference: "Genesis 41:39",
    text: "Then Pharaoh said to Joseph, 'Since God has shown you all this, there is none so discerning and wise as you are.'",
    dateLabel: "April 23"
  },
  '2026-04-24': {
    reference: "Acts 1:8",
    text: "But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth.",
    dateLabel: "April 24"
  },
  '2026-04-25': {
    reference: "John 9:25",
    text: "He answered, 'Whether he is a sinner I do not know. One thing I do know, that though I was blind, now I see.'",
    dateLabel: "April 25"
  },
  '2026-04-26': {
    reference: "Acts 4:20",
    text: "for we cannot but speak of what we have seen and heard.",
    dateLabel: "April 26"
  },
  '2026-04-27': {
    reference: "Mark 5:19-20",
    text: "And he did not permit him but said to him, 'Go home to your friends and tell them how much the Lord has done for you, and how he has had mercy on you.' And he went away and began to proclaim in the Decapolis how much Jesus had done for him, and everyone marveled.",
    dateLabel: "April 27"
  },
  '2026-04-28': {
    reference: "Colossians 3:23",
    text: "Whatever you do, work heartily, as for the Lord and not for men,",
    dateLabel: "April 28"
  },
  '2026-04-29': {
    reference: "1 Peter 3:15",
    text: "but in your hearts honor Christ the Lord as holy, always being prepared to make a defense to anyone who asks you for a reason for the hope that is in you; yet do it with gentleness and respect,",
    dateLabel: "April 29"
  },
  '2026-04-30': {
    reference: "Acts 17:12",
    text: "Many of them therefore believed, with not a few Greek women of high standing as well as men.",
    dateLabel: "April 30"
  },
  '2026-05-01': {
    reference: "Luke 7:4",
    text: "And when they came to Jesus, they pleaded with him earnestly, saying, 'He is worthy to have you do this for him,",
    dateLabel: "May 1"
  },
  '2026-05-02': {
    reference: "Luke 7:9",
    text: "When Jesus heard these things, he marveled at him, and turning to the crowd that followed him, said, 'I tell you, not even in Israel have I found such faith.'",
    dateLabel: "May 2"
  },
  '2026-05-03': {
    reference: "Acts 18:7-8",
    text: "And he left there and went to the house of a man named Titius Justus, a worshiper of God. His house was next door to the synagogue. Crispus, the ruler of the synagogue, believed in the Lord, together with his entire household...",
    dateLabel: "May 3"
  },
  '2026-05-04': {
    reference: "Acts 17:34",
    text: "But some men joined him and believed, among whom also were Dionysius the Areopagite and a woman named Damaris and others with them.",
    dateLabel: "May 4"
  },
  '2026-05-05': {
    reference: "Acts 13:7",
    text: "He was with the proconsul, Sergius Paulus, a man of intelligence, who summoned Barnabas and Saul and sought to hear the word of God.",
    dateLabel: "May 5"
  },
  '2026-05-06': {
    reference: "Acts 16:30-31",
    text: "Then he brought them out and said, 'Sirs, what must I do to be saved?' And they said, 'Believe in the Lord Jesus, and you will be saved, you and your household.'",
    dateLabel: "May 6"
  },
  '2026-05-07': {
    reference: "Luke 24:32",
    text: "They said to each other, 'Did not our hearts burn within us while he talked to us on the road, while he opened to us the Scriptures?'",
    dateLabel: "May 7"
  },
  '2026-05-08': {
    reference: "Deuteronomy 6:6-7",
    text: "And these words that I command you today shall be on your heart. You shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way, and when you lie down, and when you rise.",
    dateLabel: "May 8"
  },
  '2026-05-09': {
    reference: "John 14:26",
    text: "But the Helper, the Holy Spirit, whom the Father will send in my name, he will teach you all things and bring to your remembrance all that I have said to you.",
    dateLabel: "May 9"
  },
  '2026-05-10': {
    reference: "John 16:13",
    text: "When the Spirit of truth comes, he will guide you into all the truth, for he will not speak on his own authority, but whatever he hears he will speak, and he will declare to you the things that are to come.",
    dateLabel: "May 10"
  },
  '2026-05-11': {
    reference: "1 Corinthians 2:10",
    text: "these things God has revealed to us through the Spirit. For the Spirit searches everything, even the depths of God.",
    dateLabel: "May 11"
  },
  '2026-05-12': {
    reference: "1 Corinthians 2:12",
    text: "Now we have received not the spirit of the world, but the Spirit who is from God, that we might understand the things freely given us by God.",
    dateLabel: "May 12"
  },
  '2026-05-13': {
    reference: "John 6:45",
    text: "It is written in the Prophets, 'And they will all be taught by God.' Everyone who has heard and learned from the Father comes to me—",
    dateLabel: "May 13"
  },
  '2026-05-14': {
    reference: "Ephesians 4:15-16",
    text: "Rather, speaking the truth in love, we are to grow up in every way into him who is the head, into Christ, from whom the whole body, joined and held together by every joint with which it is equipped, when each part is working properly, makes the body grow so that it builds itself up in love.",
    dateLabel: "May 14"
  },
  '2026-05-15': {
    reference: "Acts 6:3-4",
    text: "Therefore, brothers, pick out from among you seven men of good repute, full of the Spirit and of wisdom, whom we will appoint to this duty. But we will devote ourselves to prayer and to the ministry of the word.",
    dateLabel: "May 15"
  },
  '2026-05-16': {
    reference: "Romans 12:4-5",
    text: "For as in one body we have many members, and the members do not all have the same function, so we, though many, are one body in Christ, and individually members one of another.",
    dateLabel: "May 16"
  },
  '2026-05-17': {
    reference: "1 Peter 4:10",
    text: "As each has received a gift, use it to serve one another, as good stewards of God's varied grace:",
    dateLabel: "May 17"
  },
  '2026-05-18': {
    reference: "1 Corinthians 12:25-26",
    text: "that there may be no division in the body, but that the members may have the same care for one another. If one member suffers, all suffer together; if one member is honored, all rejoice together.",
    dateLabel: "May 18"
  },
  '2026-05-19': {
    reference: "1 Corinthians 12:27",
    text: "Now you are the body of Christ and individually members of it.",
    dateLabel: "May 19"
  },
  '2026-05-20': {
    reference: "Ephesians 2:19-20",
    text: "So then you are no longer strangers and aliens, but you are fellow citizens with the saints and members of the household of God, built on the foundation of the apostles and prophets, Christ Jesus himself being the cornerstone,",
    dateLabel: "May 20"
  },
  '2026-05-21': {
    reference: "Luke 10:1",
    text: "After this the Lord appointed seventy-two others and sent them on ahead of him, two by two, into every town and place where he himself was about to go.",
    dateLabel: "May 21"
  },
  '2026-05-22': {
    reference: "Luke 10:17",
    text: "The seventy-two returned with joy, saying, 'Lord, even the demons are subject to us in your name!'",
    dateLabel: "May 22"
  },
  '2026-05-23': {
    reference: "Acts 1:8",
    text: "But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth.",
    dateLabel: "May 23"
  },
  '2026-05-24': {
    reference: "2 Corinthians 3:2-3",
    text: "You yourselves are our letter of recommendation, written on our hearts, to be known and read by all. And you show that you are a letter from Christ delivered by us, written not with ink but with the Spirit of the living God...",
    dateLabel: "May 24"
  },
  '2026-05-25': {
    reference: "1 Corinthians 12:7",
    text: "To each is given the manifestation of the Spirit for the common good.",
    dateLabel: "May 25"
  },
  '2026-05-26': {
    reference: "Romans 12:6",
    text: "Having gifts that differ according to the grace given to us, let us use them: if prophecy, in proportion to our faith;",
    dateLabel: "May 26"
  },
  '2026-05-27': {
    reference: "Colossians 3:16",
    text: "Let the word of Christ dwell in you richly, teaching and admonishing one another in all wisdom, singing psalms and hymns and spiritual songs, with thankfulness in your hearts to God.",
    dateLabel: "May 27"
  },
  '2026-05-28': {
    reference: "Isaiah 55:7",
    text: "let the wicked forsake his way, and the unrighteous man his thoughts; let him return to the LORD, that he may have compassion on him, and to our God, for he will abundantly pardon.",
    dateLabel: "May 28"
  },
  '2026-05-29': {
    reference: "Psalm 103:13",
    text: "As a father shows compassion to his children, so the LORD shows compassion to those who fear him.",
    dateLabel: "May 29"
  },
  '2026-05-30': {
    reference: "Romans 8:32",
    text: "He who did not spare his own Son but gave him up for us all, how will he not also with him graciously give us all things?",
    dateLabel: "May 30"
  },
  '2026-05-31': {
    reference: "Jeremiah 31:3",
    text: "the LORD appeared to him from far away. I have loved you with an everlasting love; therefore I have continued my faithfulness to you.",
    dateLabel: "May 31"
  },
  '2026-06-01': {
    reference: "Luke 19:10",
    text: "For the Son of Man came to seek and to save the lost.",
    dateLabel: "June 1"
  },
  '2026-06-02': {
    reference: "Hosea 11:4",
    text: "I led them with cords of kindness, with the bands of love, and I became to them as one who eases the yoke on their jaws, and I bent down to them and fed them.",
    dateLabel: "June 2"
  },
  '2026-06-03': {
    reference: "John 1:12",
    text: "But to all who did receive him, who believed in his name, he gave the right to become children of God,",
    dateLabel: "June 3"
  },
  '2026-06-04': {
    reference: "Philippians 1:9-11",
    text: "And it is my prayer that your love may abound more and more, with knowledge and all discernment, so that you may approve what is excellent, and so be pure and blameless for the day of Christ, filled with the fruit of righteousness that comes through Jesus Christ, to the glory and praise of God.",
    dateLabel: "June 4"
  },
  '2026-06-05': {
    reference: "1 Samuel 12:23",
    text: "Moreover, as for me, far be it from me that I should sin against the LORD by ceasing to pray for you, and I will instruct you in the good and the right way.",
    dateLabel: "June 5"
  },
  '2026-06-06': {
    reference: "Romans 10:1",
    text: "Brothers, my heart's desire and prayer to God for them is that they may be saved.",
    dateLabel: "June 6"
  },
  '2026-06-07': {
    reference: "Colossians 4:3-4",
    text: "At the same time, pray also for us, that God may open to us a door for the word, to declare the mystery of Christ, on account of which I am in prison— that I may make it clear, which is how I ought to speak.",
    dateLabel: "June 7"
  },
  '2026-06-08': {
    reference: "Ephesians 3:16-17",
    text: "that according to the riches of his glory he may grant you to be strengthened with power through his Spirit in your inner being, so that Christ may dwell in your hearts through faith...",
    dateLabel: "June 8"
  },
  '2026-06-09': {
    reference: "Matthew 7:7-8",
    text: "Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you. For everyone who asks receives, and the one who seeks finds, and to the one who knocks it will be opened.",
    dateLabel: "June 9"
  },
  '2026-06-10': {
    reference: "Matthew 9:37-38",
    text: "Then he said to his disciples, 'The harvest is plentiful, but the laborers are few; therefore pray earnestly to the Lord of the harvest to send out laborers into his harvest.'",
    dateLabel: "June 10"
  },
  '2026-06-11': {
    reference: "Galatians 6:10",
    text: "So then, as we have opportunity, let us do good to everyone, and especially to those who are of the household of faith.",
    dateLabel: "June 11"
  },
  '2026-06-12': {
    reference: "Acts 9:36",
    text: "Now there was in Joppa a disciple named Tabitha, which, translated, means Dorcas. She was full of good works and acts of charity.",
    dateLabel: "June 12"
  },
  '2026-06-13': {
    reference: "Acts 10:38",
    text: "how God anointed Jesus of Nazareth with the Holy Spirit and with power. He went about doing good and healing all who were oppressed by the devil, for God was with him.",
    dateLabel: "June 13"
  },
  '2026-06-14': {
    reference: "Romans 15:18-19",
    text: "For I will not venture to speak of anything except what Christ has accomplished through me to bring the Gentiles to obedience—by word and deed, by the power of signs and wonders, by the power of the Spirit of God...",
    dateLabel: "June 14"
  },
  '2026-06-15': {
    reference: "Luke 24:48",
    text: "You are witnesses of these things.",
    dateLabel: "June 15"
  },
  '2026-06-16': {
    reference: "Acts 16:25",
    text: "About midnight Paul and Silas were praying and singing hymns to God, and the prisoners were listening to them,",
    dateLabel: "June 16"
  },
  '2026-06-17': {
    reference: "Mark 16:20",
    text: "And they went out and preached everywhere, while the Lord worked with them and confirmed the message by accompanying signs.",
    dateLabel: "June 17"
  },
  '2026-06-18': {
    reference: "Acts 16:34",
    text: "Then he brought them up into his house and set food before them. And he rejoiced along with his entire household that he had believed in God.",
    dateLabel: "June 18"
  },
  '2026-06-19': {
    reference: "Acts 2:37",
    text: "Now when they heard this they were cut to the heart, and said to Peter and the rest of the apostles, 'Brothers, what shall we do?'",
    dateLabel: "June 19"
  },
  '2026-06-20': {
    reference: "Acts 2:41",
    text: "So those who received his word were baptized, and there were added that day about three thousand souls.",
    dateLabel: "June 20"
  },
  '2026-06-21': {
    reference: "Mark 2:4-5",
    text: "And when they could not get near him because of the crowd, they removed the roof above him, and when they had made an opening, they let down the bed on which the paralytic lay. And when Jesus saw their faith, he said to the paralytic, 'Son, your sins are forgiven.'",
    dateLabel: "June 21"
  },
  '2026-06-22': {
    reference: "2 Kings 4:3",
    text: "Then he said, 'Go, borrow vessels from everywhere, from all your neighbors, empty vessels; do not gather just a few.'",
    dateLabel: "June 22"
  },
  '2026-06-23': {
    reference: "Luke 10:33",
    text: "But a Samaritan, as he journeyed, came to where he was, and when he saw him, he had compassion.",
    dateLabel: "June 23"
  },
  '2026-06-24': {
    reference: "Mark 4:20",
    text: "But those that were sown on the good soil are the ones who hear the word and accept it and bear fruit, thirtyfold and sixtyfold and a hundredfold.",
    dateLabel: "June 24"
  },
  '2026-06-25': {
    reference: "Matthew 7:7",
    text: "Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you.",
    dateLabel: "June 25"
  },
  '2026-06-26': {
    reference: "Jeremiah 29:13",
    text: "You will seek me and find me, when you seek me with all your heart.",
    dateLabel: "June 26"
  },
  '2026-06-27': {
    reference: "Proverbs 2:3-5",
    text: "yes, if you call out for insight and raise your voice for understanding, if you seek it like silver and search for it as for hidden treasures, then you will understand the fear of the LORD and find the knowledge of God.",
    dateLabel: "June 27"
  },
  '2026-06-28': {
    reference: "James 1:5",
    text: "If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him.",
    dateLabel: "June 28"
  },
  '2026-06-29': {
    reference: "Acts 8:30-31",
    text: "So Philip ran to him and heard him reading Isaiah the prophet and asked, 'Do you understand what you are reading?' And he said, 'How can I, unless someone guides me?' And he invited Philip to come up and sit with him.",
    dateLabel: "June 29"
  },
  '2026-06-30': {
    reference: "Acts 8:35",
    text: "Then Philip opened his mouth, and beginning with this Scripture he told him the good news about Jesus.",
    dateLabel: "June 30"
  },
  '2026-07-01': {
    reference: "John 8:31-32",
    text: "So Jesus said to the Jews who had believed him, 'If you abide in my word, you are truly my disciples, and you will know the truth, and the truth will set you free.'",
    dateLabel: "July 1"
  },
  '2026-07-02': {
    reference: "1 Timothy 3:15",
    text: "if I delay, you may know how one ought to behave in the household of God, which is the church of the living God, a pillar and buttress of the truth.",
    dateLabel: "July 2"
  },
  '2026-07-03': {
    reference: "Luke 14:27",
    text: "Whoever does not bear his own cross and come after me cannot be my disciple.",
    dateLabel: "July 3"
  },
  '2026-07-04': {
    reference: "Luke 14:33",
    text: "So therefore, any one of you who does not renounce all that he has cannot be my disciple.",
    dateLabel: "July 4"
  },
  '2026-07-05': {
    reference: "Titus 1:5",
    text: "This is why I left you in Crete, so that you might put what remained into order, and appoint elders in every town as I directed you—",
    dateLabel: "July 5"
  },
  '2026-07-06': {
    reference: "1 Peter 5:2",
    text: "shepherd the flock of God that is among you, exercising oversight, not under compulsion, but willingly, as God would have you; not for shameful gain, but eagerly;",
    dateLabel: "July 6"
  },
  '2026-07-07': {
    reference: "Matthew 20:26",
    text: "It shall not be so among you. But whoever would be great among you must be your servant,",
    dateLabel: "July 7"
  },
  '2026-07-08': {
    reference: "Acts 4:32",
    text: "Now the full number of those who believed were of one heart and soul, and no one said that any of the things that belonged to him was his own, but they had everything in common.",
    dateLabel: "July 8"
  },
  '2026-07-09': {
    reference: "Titus 2:3-4",
    text: "Older women likewise are to be reverent in behavior, not slanderers or slaves to much wine. They are to teach what is good, and so train the young women to love their husbands and children,",
    dateLabel: "July 9"
  },
  '2026-07-10': {
    reference: "Matthew 7:24",
    text: "Everyone then who hears these words of mine and does them will be like a wise man who built his house on the rock.",
    dateLabel: "July 10"
  },
  '2026-07-11': {
    reference: "Hebrews 5:12",
    text: "For though by this time you ought to be teachers, you need someone to teach you again the basic principles of the oracles of God. You need milk, not solid food,",
    dateLabel: "July 11"
  },
  '2026-07-12': {
    reference: "John 14:15",
    text: "If you love me, you will keep my commandments.",
    dateLabel: "July 12"
  },
  '2026-07-13': {
    reference: "John 14:21",
    text: "Whoever has my commandments and keeps them, he it is who loves me. And he who loves me will be loved by my Father, and I will love him and manifest myself to him.",
    dateLabel: "July 13"
  },
  '2026-07-14': {
    reference: "Luke 8:15",
    text: "As for that in the good soil, they are those who, hearing the word, hold it fast in an honest and good heart, and bear fruit with patience.",
    dateLabel: "July 14"
  },
  '2026-07-15': {
    reference: "John 13:17",
    text: "If you know these things, blessed are you if you do them.",
    dateLabel: "July 15"
  },
  '2026-07-16': {
    reference: "Matthew 9:37-38",
    text: "Then he said to his disciples, 'The harvest is plentiful, but the laborers are few; therefore pray earnestly to the Lord of the harvest to send out laborers into his harvest.'",
    dateLabel: "July 16"
  },
  '2026-07-17': {
    reference: "Lamentations 3:22-23",
    text: "The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.",
    dateLabel: "July 17"
  },
  '2026-07-18': {
    reference: "Ephesians 2:4-5",
    text: "But God, being rich in mercy, because of the great love with which he loved us, even when we were dead in our trespasses, made us alive together with Christ—by grace you have been saved—",
    dateLabel: "July 18"
  },
  '2026-07-19': {
    reference: "Micah 7:18",
    text: "Who is a God like you, pardoning iniquity and passing over transgression for the remnant of his inheritance? He does not retain his anger forever, because he delights in steadfast love.",
    dateLabel: "July 19"
  },
  '2026-07-20': {
    reference: "1 Timothy 4:10",
    text: "For to this end we toil and strive, because we have our hope set on the living God, who is the Savior of all people, especially of those who believe.",
    dateLabel: "July 20"
  },
  '2026-07-21': {
    reference: "Titus 3:4-5",
    text: "But when the goodness and loving kindness of God our Savior appeared, he saved us, not because of works done by us in righteousness, but according to his own mercy, by the washing of regeneration and renewal of the Holy Spirit,",
    dateLabel: "July 21"
  },
  '2026-07-22': {
    reference: "John 6:37",
    text: "All that the Father gives me will come to me, and whoever comes to me I will never cast out.",
    dateLabel: "July 22"
  },
  '2026-07-23': {
    reference: "Psalm 122:6",
    text: "Pray for the peace of Jerusalem! 'May they be secure who love you!'",
    dateLabel: "July 23"
  },
  '2026-07-24': {
    reference: "Jeremiah 29:7",
    text: "But seek the welfare of the city where I have sent you into exile, and pray to the LORD on its behalf, for in its welfare you will find your welfare.",
    dateLabel: "July 24"
  },
  '2026-07-25': {
    reference: "Isaiah 62:6-7",
    text: "On your walls, O Jerusalem, I have set watchmen; all the day and all the night they shall never be silent. You who put the LORD in remembrance, take no rest, and give him no rest until he establishes Jerusalem and makes it a praise in the earth.",
    dateLabel: "July 25"
  },
  '2026-07-26': {
    reference: "Genesis 18:23-24",
    text: "Then Abraham drew near and said, 'Will you indeed sweep away the righteous with the wicked? Suppose there are fifty righteous within the city. Will you then sweep it away and not spare the place for the fifty righteous who are in it?'",
    dateLabel: "July 26"
  },
  '2026-07-27': {
    reference: "Exodus 32:11",
    text: "But Moses implored the LORD his God and said, 'O LORD, why does your wrath burn hot against your people, whom you have brought out of the land of Egypt with great power and with a mighty hand?'",
    dateLabel: "July 27"
  },
  '2026-07-28': {
    reference: "Psalm 3:4",
    text: "I cried aloud to the LORD, and he answered me from his holy hill.",
    dateLabel: "July 28"
  },
  '2026-07-29': {
    reference: "2 Thessalonians 3:1",
    text: "Finally, brothers, pray for us, that the word of the Lord may speed ahead and be honored, as happened among you,",
    dateLabel: "July 29"
  },
  '2026-07-30': {
    reference: "John 2:11",
    text: "This, the first of his signs, Jesus did at Cana in Galilee, and manifested his glory. And his disciples believed in him.",
    dateLabel: "July 30"
  },
  '2026-07-31': {
    reference: "Acts 5:12",
    text: "Now many signs and wonders were regularly done among the people by the hands of the apostles. And they were all together in Solomon's Portico.",
    dateLabel: "July 31"
  },
  '2026-08-01': {
    reference: "Acts 14:3",
    text: "So they remained for a long time, speaking boldly for the Lord, who bore witness to the word of his grace, granting signs and wonders to be done by their hands.",
    dateLabel: "August 1"
  },
  '2026-08-02': {
    reference: "Matthew 10:7-8",
    text: "And proclaim as you go, saying, 'The kingdom of heaven is at hand.' Heal the sick, raise the dead, cleanse lepers, cast out demons. You received without paying; give without pay.",
    dateLabel: "August 2"
  },
  '2026-08-03': {
    reference: "Hebrews 2:4",
    text: "...while God also bore witness by signs and wonders and various miracles and by gifts of the Holy Spirit distributed according to his will.",
    dateLabel: "August 3"
  },
  '2026-08-04': {
    reference: "Acts 2:41",
    text: "So those who received his word were baptized, and there were added that day about three thousand souls.",
    dateLabel: "August 4"
  },
  '2026-08-05': {
    reference: "1 Corinthians 2:4-5",
    text: "and my speech and my message were not in plausible words of wisdom, but in demonstration of the Spirit and of power, so that your faith might not rest in the wisdom of men but in the power of God.",
    dateLabel: "August 5"
  },
  '2026-08-06': {
    reference: "Colossians 4:3",
    text: "At the same time, pray also for us, that God may open to us a door for the word, to declare the mystery of Christ...",
    dateLabel: "August 6"
  },
  '2026-08-07': {
    reference: "Colossians 4:5",
    text: "Walk in wisdom toward outsiders, making the best use of the time.",
    dateLabel: "August 7"
  },
  '2026-08-08': {
    reference: "John 4:35",
    text: "Do you not say, 'There are yet four months, then comes the harvest'? Look, I tell you, lift up your eyes, and see that the fields are white for harvest.",
    dateLabel: "August 8"
  },
  '2026-08-09': {
    reference: "1 Corinthians 3:6",
    text: "I planted, Apollos watered, but God gave the growth.",
    dateLabel: "August 9"
  },
  '2026-08-10': {
    reference: "Genesis 18:3",
    text: "and said, 'O Lord, if I have found favor in your sight, do not pass by your servant.'",
    dateLabel: "August 10"
  },
  '2026-08-11': {
    reference: "Genesis 41:38",
    text: "And Pharaoh said to his servants, 'Can we find a man like this, in whom is the Spirit of God?'",
    dateLabel: "August 11"
  },
  '2026-08-12': {
    reference: "Joshua 2:1",
    text: "And they went and came into the house of a prostitute whose name was Rahab, and lodged there.",
    dateLabel: "August 12"
  },
  '2026-08-13': {
    reference: "John 7:17",
    text: "If anyone's will is to do God's will, he will know whether the teaching is from God or whether I am speaking on my own authority.",
    dateLabel: "August 13"
  },
  '2026-08-14': {
    reference: "Ephesians 1:17-18",
    text: "that the God of our Lord Jesus Christ, the Father of glory, may give you the Spirit of wisdom and of revelation in the knowledge of him, having the eyes of your hearts enlightened...",
    dateLabel: "August 14"
  },
  '2026-08-15': {
    reference: "Colossians 3:16",
    text: "Let the word of Christ dwell in you richly, teaching and admonishing one another in all wisdom, singing psalms and hymns and spiritual songs, with thankfulness in your hearts to God.",
    dateLabel: "August 15"
  },
  '2026-08-16': {
    reference: "1 Timothy 4:13",
    text: "Until I come, devote yourself to the public reading of Scripture, to exhortation, to teaching.",
    dateLabel: "August 16"
  },
  '2026-08-17': {
    reference: "1 Timothy 4:15",
    text: "Practice these things, immerse yourself in them, so that all may see your progress.",
    dateLabel: "August 17"
  },
  '2026-08-18': {
    reference: "Matthew 13:9",
    text: "He who has ears, let him hear.",
    dateLabel: "August 18"
  },
  '2026-08-19': {
    reference: "James 1:25",
    text: "But the one who looks into the perfect law, the law of liberty, and perseveres, being no hearer who forgets but a doer who acts—he will be blessed in his doing.",
    dateLabel: "August 19"
  },
  '2026-08-20': {
    reference: "Ephesians 4:3",
    text: "eager to maintain the unity of the Spirit in the bond of peace.",
    dateLabel: "August 20"
  },
  '2026-08-21': {
    reference: "Ephesians 4:11-12",
    text: "And he gave the apostles, the prophets, the evangelists, the shepherds and teachers, to equip the saints for the work of ministry, for building up the body of Christ,",
    dateLabel: "August 21"
  },
  '2026-08-22': {
    reference: "Acts 2:41",
    text: "So those who received his word were baptized, and there were added that day about three thousand souls.",
    dateLabel: "August 22"
  },
  '2026-08-23': {
    reference: "1 Corinthians 14:26",
    text: "What then, brothers? When you come together, each one has a hymn, a lesson, a revelation, a tongue, or an interpretation. Let all things be done for building up.",
    dateLabel: "August 23"
  },
  '2026-08-24': {
    reference: "2 Timothy 2:2",
    text: "and what you have heard from me in the presence of many witnesses entrust to faithful men, who will be able to teach others also.",
    dateLabel: "August 24"
  },
  '2026-08-25': {
    reference: "Acts 5:42",
    text: "And every day, in the temple and from house to house, they did not cease teaching and preaching that the Christ is Jesus.",
    dateLabel: "August 25"
  },
  '2026-08-26': {
    reference: "1 John 3:16",
    text: "By this we know love, that he laid down his life for us, and we ought to lay down our lives for the brothers.",
    dateLabel: "August 26"
  },
  '2026-08-27': {
    reference: "Acts 14:21-22",
    text: "When they had preached the gospel to that city and had made many disciples, they returned to Lystra and to Iconium and to Antioch, strengthening the souls of the disciples, encouraging them to continue in the faith...",
    dateLabel: "August 27"
  },
  '2026-08-28': {
    reference: "Acts 14:23",
    text: "And when they had appointed elders for them in every church, with prayer and fasting they committed them to the Lord in whom they had believed.",
    dateLabel: "August 28"
  },
  '2026-08-29': {
    reference: "Acts 19:10",
    text: "This continued for two years, so that all the residents of Asia heard the word of the Lord, both Jews and Greeks.",
    dateLabel: "August 29"
  },
  '2026-08-30': {
    reference: "2 Timothy 3:14",
    text: "But as for you, continue in what you have learned and have firmly believed, knowing from whom you learned it",
    dateLabel: "August 30"
  },
  '2026-08-31': {
    reference: "Titus 1:9",
    text: "He must hold firm to the trustworthy word as taught, so that he may be able to give instruction in sound doctrine and also to rebuke those who contradict it.",
    dateLabel: "August 31"
  },
  '2026-09-01': {
    reference: "1 Corinthians 4:17",
    text: "That is why I sent you Timothy, my beloved and faithful child in the Lord, to remind you of my ways in Christ, as I teach them everywhere in every church.",
    dateLabel: "September 1"
  },
  '2026-09-02': {
    reference: "Titus 1:5",
    text: "This is why I left you in Crete, so that you might put what remained into order, and appoint elders in every town as I directed you—",
    dateLabel: "September 2"
  },
  '2026-09-03': {
    reference: "Psalm 145:8-9",
    text: "The LORD is gracious and merciful, slow to anger and abounding in steadfast love. The LORD is good to all, and his mercy is over all that he has made.",
    dateLabel: "September 3"
  },
  '2026-09-04': {
    reference: "Romans 5:6",
    text: "For while we were still weak, at the right time Christ died for the ungodly.",
    dateLabel: "September 4"
  },
  '2026-09-05': {
    reference: "Isaiah 53:6",
    text: "All we like sheep have gone astray; we have turned—every one—to his own way; and the LORD has laid on him the iniquity of us all.",
    dateLabel: "September 5"
  },
  '2026-09-06': {
    reference: "Galatians 4:6-7",
    text: "And because you are sons, God has sent the Spirit of his Son into our hearts, crying, 'Abba! Father!' So you are no longer a slave, but a son, and if a son, then an heir through God.",
    dateLabel: "September 6"
  },
  '2026-09-07': {
    reference: "Jonah 4:11",
    text: "And should not I pity Nineveh, that great city, in which there are more than 120,000 persons who do not know their right hand from their left, and also much cattle?",
    dateLabel: "September 7"
  },
  '2026-09-08': {
    reference: "Matthew 11:28",
    text: "Come to me, all who labor and are heavy laden, and I will give you rest.",
    dateLabel: "September 8"
  },
  '2026-09-09': {
    reference: "Hosea 11:8",
    text: "How can I give you up, O Ephraim? How can I hand you over, O Israel? ... My heart recoils within me; my compassion grows warm and tender.",
    dateLabel: "September 9"
  },
  '2026-09-10': {
    reference: "John 14:13-14",
    text: "Whatever you ask in my name, this I will do, that the Father may be glorified in the Son. If you ask me anything in my name, I will do it.",
    dateLabel: "September 10"
  },
  '2026-09-11': {
    reference: "Mark 11:24",
    text: "Therefore I tell you, whatever you ask in prayer, believe that you have received it, and it will be yours.",
    dateLabel: "September 11"
  },
  '2026-09-12': {
    reference: "Psalm 145:18",
    text: "The LORD is near to all who call on him, to all who call on him in truth.",
    dateLabel: "September 12"
  },
  '2026-09-13': {
    reference: "James 1:5-6",
    text: "If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him. But let him ask in faith, with no doubting, for the one who doubts is like a wave of the sea that is driven and tossed by the wind.",
    dateLabel: "September 13"
  },
  '2026-09-14': {
    reference: "Psalm 116:1-2",
    text: "I love the LORD, because he has heard my voice and my pleas for mercy. Because he inclined his ear to me, therefore I will call on him as long as I live.",
    dateLabel: "September 14"
  },
  '2026-09-15': {
    reference: "Mark 1:35",
    text: "And rising very early in the morning, while it was still dark, he departed and went out to a desolate place, and there he prayed.",
    dateLabel: "September 15"
  },
  '2026-09-16': {
    reference: "Jude 1:20",
    text: "But you, beloved, building yourselves up in your most holy faith and praying in the Holy Spirit,",
    dateLabel: "September 16"
  },
  '2026-09-17': {
    reference: "Psalm 71:15",
    text: "My mouth will tell of your righteous acts, of your deeds of salvation all the day, for their number is past my knowledge.",
    dateLabel: "September 17"
  },
  '2026-09-18': {
    reference: "Psalm 96:3",
    text: "Declare his glory among the nations, his marvelous works among all the peoples!",
    dateLabel: "September 18"
  },
  '2026-09-19': {
    reference: "Luke 8:39",
    text: "'Return to your home, and declare how much God has done for you.' And he went away, proclaiming throughout the whole city how much Jesus had done for him.",
    dateLabel: "September 19"
  },
  '2026-09-20': {
    reference: "James 2:17",
    text: "So also faith by itself, if it does not have works, is dead.",
    dateLabel: "September 20"
  },
  '2026-09-21': {
    reference: "Matthew 25:40",
    text: "And the King will answer them, 'Truly, I say to you, as you did it to one of the least of these my brothers, you did it to me.'",
    dateLabel: "September 21"
  },
  '2026-09-22': {
    reference: "1 Peter 4:10",
    text: "As each has received a gift, use it to serve one another, as good stewards of God's varied grace:",
    dateLabel: "September 22"
  },
  '2026-09-23': {
    reference: "Acts 4:33",
    text: "And with great power the apostles were giving their testimony to the resurrection of the Lord Jesus, and great grace was upon them all.",
    dateLabel: "September 23"
  },
  '2026-09-24': {
    reference: "Joshua 6:25",
    text: "But Rahab the prostitute and her father's household and all who belonged to her, Joshua saved alive. And she has lived in Israel to this day, because she hid the messengers whom Joshua sent to spy out Jericho.",
    dateLabel: "September 24"
  },
  '2026-09-25': {
    reference: "1 Kings 17:10-11",
    text: "And he arose and went to Zarephath. And when he came to the gate of the city, behold, a widow was there gathering sticks. And he called to her and said, 'Bring me a little water in a vessel, that I may drink.' And as she was going to bring it, he called to her and said, 'Bring me a morsel of bread in your hand.'",
    dateLabel: "September 25"
  },
  '2026-09-26': {
    reference: "Nehemiah 2:6",
    text: "And the king said to me (the queen sitting beside him), 'How long will you be gone, and when will you return?' So it pleased the king to send me, when I had given him a time.",
    dateLabel: "September 26"
  },
  '2026-09-27': {
    reference: "Acts 17:2-3",
    text: "And Paul went in, as was his custom, and on three Sabbath days he reasoned with them from the Scriptures, explaining and proving that it was necessary for the Christ to suffer and to rise from the dead...",
    dateLabel: "September 27"
  },
  '2026-09-28': {
    reference: "Daniel 6:20",
    text: "As he came near to the den to Daniel, he cried out in a tone of anguish. The king declared to Daniel, 'O Daniel, servant of the living God, has your God, whom you serve continually, been able to deliver you from the lions?'",
    dateLabel: "September 28"
  },
  '2026-09-29': {
    reference: "Deuteronomy 6:6-7",
    text: "And these words that I command you today shall be on your heart. You shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way, and when you lie down, and when you rise.",
    dateLabel: "September 29"
  },
  '2026-09-30': {
    reference: "Acts 17:11",
    text: "Now these Jews were more noble than those in Thessalonica; they received the word with all eagerness, examining the Scriptures daily to see if these things were so.",
    dateLabel: "September 30"
  },
  '2026-10-01': {
    reference: "Matthew 28:20",
    text: "teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.",
    dateLabel: "October 1"
  },
  '2026-10-02': {
    reference: "Ezra 7:10",
    text: "For Ezra had set his heart to study the Law of the LORD, and to do it and to teach his statutes and rules in Israel.",
    dateLabel: "October 2"
  },
  '2026-10-03': {
    reference: "Matthew 13:44",
    text: "The kingdom of heaven is like treasure hidden in a field, which a man found and covered up. Then in his joy he goes and sells all that he has and buys that field.",
    dateLabel: "October 3"
  },
  '2026-10-04': {
    reference: "Proverbs 25:2",
    text: "It is the glory of God to conceal things, but the glory of kings is to search things out.",
    dateLabel: "October 4"
  },
  '2026-10-05': {
    reference: "Psalm 119:130",
    text: "The unfolding of your words gives light; it imparts understanding to the simple.",
    dateLabel: "October 5"
  },
  '2026-10-06': {
    reference: "Psalm 119:34",
    text: "Give me understanding, that I may keep your law and observe it with my whole heart.",
    dateLabel: "October 6"
  },
  '2026-10-07': {
    reference: "Psalm 119:99",
    text: "I have more understanding than all my teachers, for your testimonies are my meditation.",
    dateLabel: "October 7"
  },
  '2026-10-08': {
    reference: "Romans 16:5",
    text: "Greet also the church in their house. Greet my beloved Epaenetus, who was the first convert to Christ in Asia.",
    dateLabel: "October 8"
  },
  '2026-10-09': {
    reference: "Philemon 1:2",
    text: "and Apphia our sister and Archippus our fellow soldier, and the church in your house:",
    dateLabel: "October 9"
  },
  '2026-10-10': {
    reference: "1 Thessalonians 1:8",
    text: "For not only has the word of the Lord sounded forth from you in Macedonia and Achaia, but your faith in God has gone forth everywhere, so that we need not say anything.",
    dateLabel: "October 10"
  },
  '2026-10-11': {
    reference: "John 4:23",
    text: "But the hour is coming, and is now here, when the true worshipers will worship the Father in spirit and truth, for the Father is seeking such people to worship him.",
    dateLabel: "October 11"
  },
  '2026-10-12': {
    reference: "1 John 1:7",
    text: "But if we walk in the light, as he is in the light, we have fellowship with one another, and the blood of Jesus his Son cleanses us from all sin.",
    dateLabel: "October 12"
  },
  '2026-10-13': {
    reference: "Romans 12:1",
    text: "I appeal to you therefore, brothers, by the mercies of God, to present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship.",
    dateLabel: "October 13"
  },
  '2026-10-14': {
    reference: "Acts 2:38",
    text: "And Peter said to them, 'Repent and be baptized every one of you in the name of Jesus Christ for the forgiveness of your sins, and you will receive the gift of the Holy Spirit.'",
    dateLabel: "October 14"
  },
  '2026-10-15': {
    reference: "John 15:5",
    text: "I am the vine; you are the branches. Whoever abides in me and I in him, he it is that bears much fruit, for apart from me you can do nothing.",
    dateLabel: "October 15"
  },
  '2026-10-16': {
    reference: "John 15:8",
    text: "By this my Father is glorified, that you bear much fruit and so prove to be my disciples.",
    dateLabel: "October 16"
  },
  '2026-10-17': {
    reference: "John 15:16",
    text: "You did not choose me, but I chose you and appointed you that you should go and bear fruit and that your fruit should abide, so that whatever you ask the Father in my name, he may give it to you.",
    dateLabel: "October 17"
  },
  '2026-10-18': {
    reference: "1 Peter 5:2",
    text: "shepherd the flock of God that is among you, exercising oversight, not under compulsion, but willingly, as God would have you; not for shameful gain, but eagerly;",
    dateLabel: "October 18"
  },
  '2026-10-19': {
    reference: "1 Peter 5:3",
    text: "not domineering over those in your charge, but being examples to the flock.",
    dateLabel: "October 19"
  },
  '2026-10-20': {
    reference: "Galatians 6:1",
    text: "Brothers, if anyone is caught in any transgression, you who are spiritual should restore him in a spirit of gentleness. Keep watch on yourself, lest you too be tempted.",
    dateLabel: "October 20"
  },
  '2026-10-21': {
    reference: "2 Corinthians 5:18",
    text: "All this is from God, who through Christ reconciled us to himself and gave us the ministry of reconciliation;",
    dateLabel: "October 21"
  },
  '2026-10-22': {
    reference: "Exodus 34:6",
    text: "The LORD passed before him and proclaimed, 'The LORD, the LORD, a God merciful and gracious, slow to anger, and abounding in steadfast love and faithfulness,'",
    dateLabel: "October 22"
  },
  '2026-10-23': {
    reference: "Isaiah 49:6",
    text: "he says: 'It is too light a thing that you should be my servant to raise up the tribes of Jacob and to bring back the preserved of Israel; I will make you as a light for the nations, that my salvation may reach to the end of the earth.'",
    dateLabel: "October 23"
  },
  '2026-10-24': {
    reference: "2 Corinthians 5:17",
    text: "Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.",
    dateLabel: "October 24"
  },
  '2026-10-25': {
    reference: "Revelation 7:9-10",
    text: "After this I looked, and behold, a great multitude that no one could number, from every nation, from all tribes and peoples and languages, standing before the throne and before the Lamb, clothed in white robes, with palm branches in their hands, and crying out with a loud voice, 'Salvation belongs to our God who sits on the throne, and to the Lamb!'",
    dateLabel: "October 25"
  },
  '2026-10-26': {
    reference: "Isaiah 55:1",
    text: "Come, everyone who thirsts, come to the waters; and he who has no money, come, buy and eat! Come, buy wine and milk without money and without price.",
    dateLabel: "October 26"
  },
  '2026-10-27': {
    reference: "Revelation 21:4",
    text: "He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.",
    dateLabel: "October 27"
  },
  '2026-10-28': {
    reference: "Revelation 22:3-4",
    text: "No longer will there be anything accursed, but the throne of God and of the Lamb will be in it, and his servants will worship him. They will see his face, and his name will be on their foreheads.",
    dateLabel: "October 28"
  },
  '2026-10-29': {
    reference: "Jonah 2:2",
    text: "I called out to the LORD, out of my distress, and he answered me; out of the belly of Sheol I cried, and you heard my voice.",
    dateLabel: "October 29"
  },
  '2026-10-30': {
    reference: "James 4:2",
    text: "You desire and do not have, so you murder. You covet and cannot obtain, so you fight and quarrel. You do not have, because you do not ask.",
    dateLabel: "October 30"
  },
  '2026-10-31': {
    reference: "Psalm 66:18",
    text: "If I had cherished iniquity in my heart, the Lord would not have listened.",
    dateLabel: "October 31"
  },
  '2026-11-01': {
    reference: "Romans 15:30",
    text: "I appeal to you, brothers, by our Lord Jesus Christ and by the love of the Spirit, to strive together with me in your prayers to God on my behalf,",
    dateLabel: "November 1"
  },
  '2026-11-02': {
    reference: "2 Corinthians 1:11",
    text: "You also must help us by prayer, so that many will give thanks on our behalf for the blessing granted us through the prayers of many.",
    dateLabel: "November 2"
  },
  '2026-11-03': {
    reference: "1 Peter 3:12",
    text: "For the eyes of the Lord are on the righteous, and his ears are open to their prayer. But the face of the Lord is against those who do evil.",
    dateLabel: "November 3"
  },
  '2026-11-04': {
    reference: "1 Thessalonians 5:17",
    text: "pray without ceasing,",
    dateLabel: "November 4"
  },
  '2026-11-05': {
    reference: "John 6:11",
    text: "Jesus then took the loaves, and when he had given thanks, he distributed them to those who were seated. So also the fish, as much as they wanted.",
    dateLabel: "November 5"
  },
  '2026-11-06': {
    reference: "Genesis 18:24",
    text: "Suppose there are fifty righteous within the city. Will you then sweep it away and not spare the place for the fifty righteous who are in it?",
    dateLabel: "November 6"
  },
  '2026-11-07': {
    reference: "Joshua 6:20",
    text: "So the people shouted, and the trumpets were blown. As soon as the people heard the sound of the trumpet, the people shouted a great shout, and the wall fell down flat...",
    dateLabel: "November 7"
  },
  '2026-11-08': {
    reference: "Exodus 7:17",
    text: "Thus says the LORD, 'By this you shall know that I am the LORD: behold, with the staff that is in my hand I will strike the water that is in the Nile, and it shall turn into blood.'",
    dateLabel: "November 8"
  },
  '2026-11-09': {
    reference: "Acts 2:43",
    text: "And awe came upon every soul, and many wonders and signs were being done through the apostles.",
    dateLabel: "November 9"
  },
  '2026-11-10': {
    reference: "Acts 16:31",
    text: "And they said, 'Believe in the Lord Jesus, and you will be saved, you and your household.'",
    dateLabel: "November 10"
  },
  '2026-11-11': {
    reference: "Psalm 105:1",
    text: "Oh give thanks to the LORD; call upon his name; make known his deeds among the peoples!",
    dateLabel: "November 11"
  },
  '2026-11-12': {
    reference: "Acts 17:11",
    text: "Now these Jews were more noble than those in Thessalonica; they received the word with all eagerness, examining the Scriptures daily to see if these things were so.",
    dateLabel: "November 12"
  },
  '2026-11-13': {
    reference: "Acts 17:2-3",
    text: "And Paul went in, as was his custom, and on three Sabbath days he reasoned with them from the Scriptures, explaining and proving that it was necessary for the Christ to suffer and to rise from the dead...",
    dateLabel: "November 13"
  },
  '2026-11-14': {
    reference: "Matthew 28:19",
    text: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,",
    dateLabel: "November 14"
  },
  '2026-11-15': {
    reference: "Luke 10:25",
    text: "And behold, a lawyer stood up to put him to the test, saying, 'Teacher, what shall I do to inherit eternal life?'",
    dateLabel: "November 15"
  },
  '2026-11-16': {
    reference: "Acts 3:1-2",
    text: "Now Peter and John were going up to the temple at the hour of prayer, the ninth hour. And a man lame from birth was being carried, whom they laid daily at the gate of the temple that is called Beautiful to ask alms of those entering the temple.",
    dateLabel: "November 16"
  },
  '2026-11-17': {
    reference: "Acts 18:26",
    text: "He began to speak boldly in the synagogue, but when Priscilla and Aquila heard him, they took him aside and explained to him the way of God more accurately.",
    dateLabel: "November 17"
  },
  '2026-11-18': {
    reference: "1 Peter 3:15",
    text: "but in your hearts honor Christ the Lord as holy, always being prepared to make a defense to anyone who asks you for a reason for the hope that is in you; yet do it with gentleness and respect,",
    dateLabel: "November 18"
  },
  '2026-11-19': {
    reference: "Psalm 19:7",
    text: "The law of the LORD is perfect, reviving the soul; the testimony of the LORD is sure, making wise the simple;",
    dateLabel: "November 19"
  },
  '2026-11-20': {
    reference: "Proverbs 4:20-21",
    text: "My son, be attentive to my words; incline your ear to my sayings. Let them not escape from your sight; keep them within your heart.",
    dateLabel: "November 20"
  },
  '2026-11-21': {
    reference: "Isaiah 55:11",
    text: "so shall my word be that goes out from my mouth; it shall not return to me empty, but it shall accomplish that which I purpose, and shall succeed in the thing for which I sent it.",
    dateLabel: "November 21"
  },
  '2026-11-22': {
    reference: "Jeremiah 33:3",
    text: "Call to me and I will answer you, and will tell you great and hidden things that you have not known.",
    dateLabel: "November 22"
  },
  '2026-11-23': {
    reference: "Acts 18:26",
    text: "He began to speak boldly in the synagogue, but when Priscilla and Aquila heard him, they took him aside and explained to him the way of God more accurately.",
    dateLabel: "November 23"
  },
  '2026-11-24': {
    reference: "Psalm 32:8",
    text: "I will instruct you and teach you in the way you should go; I will counsel you with my eye upon you.",
    dateLabel: "November 24"
  },
  '2026-11-25': {
    reference: "Matthew 11:25",
    text: "At that time Jesus declared, 'I thank you, Father, Lord of heaven and earth, that you have hidden these things from the wise and understanding and revealed them to little children;'",
    dateLabel: "November 25"
  },
  '2026-11-26': {
    reference: "1 Timothy 3:1",
    text: "The saying is trustworthy: If anyone aspires to the office of overseer, he desires a noble task.",
    dateLabel: "November 26"
  },
  '2026-11-27': {
    reference: "Romans 12:10",
    text: "Love one another with brotherly affection. Outdo one another in showing honor.",
    dateLabel: "November 27"
  },
  '2026-11-28': {
    reference: "Acts 2:45",
    text: "And they were selling their possessions and belongings and distributing the proceeds to all, as any had need.",
    dateLabel: "November 28"
  },
  '2026-11-29': {
    reference: "1 Corinthians 11:24",
    text: "and when he had given thanks, he broke it, and said, 'This is my body, which is for you. Do this in remembrance of me.'",
    dateLabel: "November 29"
  },
  '2026-11-30': {
    reference: "Ephesians 5:19",
    text: "addressing one another in psalms and hymns and spiritual songs, singing and making melody to the Lord with your heart,",
    dateLabel: "November 30"
  },
  '2026-12-01': {
    reference: "Romans 12:8",
    text: "the one who exhorts, in his exhortation; the one who contributes, in generosity; the one who leads, with zeal; the one who does acts of mercy, with cheerfulness.",
    dateLabel: "December 1"
  },
  '2026-12-02': {
    reference: "1 Corinthians 16:1-2",
    text: "Now concerning the collection for the saints: as I directed the churches of Galatia, so you also are to do. On the first day of every week, each of you is to put something aside and store it up, as he may prosper, so that there will be no collecting when I come.",
    dateLabel: "December 2"
  },
  '2026-12-03': {
    reference: "Acts 4:33",
    text: "And with great power the apostles were giving their testimony to the resurrection of the Lord Jesus, and great grace was upon them all.",
    dateLabel: "December 3"
  },
  '2026-12-04': {
    reference: "Acts 8:4",
    text: "Now those who were scattered went about preaching the word.",
    dateLabel: "December 4"
  },
  '2026-12-05': {
    reference: "Colossians 1:28",
    text: "Him we proclaim, warning everyone and teaching everyone with all wisdom, that we may present everyone mature in Christ.",
    dateLabel: "December 5"
  },
  '2026-12-06': {
    reference: "Acts 6:7",
    text: "And the word of God continued to increase, and the number of the disciples multiplied greatly in Jerusalem, and a great many of the priests became obedient to the faith.",
    dateLabel: "December 6"
  },
  '2026-12-07': {
    reference: "Acts 6:7",
    text: "And the word of God continued to increase, and the number of the disciples multiplied greatly in Jerusalem, and a great many of the priests became obedient to the faith.",
    dateLabel: "December 7"
  },
  '2026-12-08': {
    reference: "1 Peter 4:11",
    text: "whoever speaks, as one who speaks oracles of God; whoever serves, as one who serves by the strength that God supplies—in order that in everything God may be glorified through Jesus Christ.",
    dateLabel: "December 8"
  },
  '2026-12-09': {
    reference: "1 Peter 4:11",
    text: "whoever speaks, as one who speaks oracles of God; whoever serves, as one who serves by the strength that God supplies—in order that in everything God may be glorified through Jesus Christ.",
    dateLabel: "December 9"
  },
  '2026-12-10': {
    reference: "2 Peter 3:9",
    text: "The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish, but that all should reach repentance.",
    dateLabel: "December 10"
  },
  '2026-12-11': {
    reference: "John 3:16-17",
    text: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. For God did not send his Son into the world to condemn the world, but in order that the world might be saved through him.",
    dateLabel: "December 11"
  },
  '2026-12-12': {
    reference: "Luke 15:7",
    text: "Just so, I tell you, there will be more joy in heaven over one sinner who repents than over ninety-nine righteous persons who need no repentance.",
    dateLabel: "December 12"
  },
  '2026-12-13': {
    reference: "Matthew 9:36",
    text: "When he saw the crowds, he had compassion for them, because they were harassed and helpless, like sheep without a shepherd.",
    dateLabel: "December 13"
  },
  '2026-12-14': {
    reference: "2 Corinthians 5:19",
    text: "...that is, in Christ God was reconciling the world to himself, not counting their trespasses against them, and entrusting to us the message of reconciliation.",
    dateLabel: "December 14"
  },
  '2026-12-15': {
    reference: "Romans 8:38-39",
    text: "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.",
    dateLabel: "December 15"
  },
  '2026-12-16': {
    reference: "Revelation 21:3",
    text: "And I heard a loud voice from the throne saying, 'Behold, the dwelling place of God is with man. He will dwell with them, and they will be his people, and God himself will be with them as their God.'",
    dateLabel: "December 16"
  },
  '2026-12-17': {
    reference: "Luke 10:2",
    text: "And he said to them, 'The harvest is plentiful, but the laborers are few. Therefore pray earnestly to the Lord of the harvest to send out laborers into his harvest.'",
    dateLabel: "December 17"
  },
  '2026-12-18': {
    reference: "1 Timothy 2:1-2",
    text: "First of all, then, I urge that supplications, prayers, intercessions, and thanksgivings be made for all people, for kings and all who are in high positions, that we may lead a peaceful and quiet life, godly and dignified in every way.",
    dateLabel: "December 18"
  },
  '2026-12-19': {
    reference: "Ezekiel 22:30",
    text: "And I sought for a man among them who should build up the wall and stand in the breach before me for the land, that I should not destroy it, but I found none.",
    dateLabel: "December 19"
  },
  '2026-12-20': {
    reference: "Matthew 6:9-10",
    text: "Pray then like this: 'Our Father in heaven, hallowed be your name. Your kingdom come, your will be done, on earth as it is in heaven.'",
    dateLabel: "December 20"
  },
  '2026-12-21': {
    reference: "Luke 18:1",
    text: "And he told them a parable to the effect that they ought always to pray and not lose heart.",
    dateLabel: "December 21"
  },
  '2026-12-22': {
    reference: "Hebrews 4:16",
    text: "Let us then with confidence draw near to the throne of grace, that we may receive mercy and find grace to help in time of need.",
    dateLabel: "December 22"
  },
  '2026-12-23': {
    reference: "2 Chronicles 7:14",
    text: "if my people who are called by my name humble themselves, and pray and seek my face and turn from their wicked ways, then I will hear from heaven and will forgive their sin and heal their land.",
    dateLabel: "December 23"
  },
  '2026-12-24': {
    reference: "Mark 2:11-12",
    text: "'I say to you, rise, pick up your bed, and go home.' And he rose and immediately picked up his bed and went out before them all, so that they were all amazed and glorified God, saying, 'We never saw anything like this!'",
    dateLabel: "December 24"
  },
  '2026-12-25': {
    reference: "Acts 3:6",
    text: "But Peter said, 'I have no silver and gold, but what I do have I give to you. In the name of Jesus Christ of Nazareth, rise up and walk!'",
    dateLabel: "December 25"
  },
  '2026-12-26': {
    reference: "John 4:29",
    text: "'Come, see a man who told me all that I ever did. Can this be the Christ?'",
    dateLabel: "December 26"
  },
  '2026-12-27': {
    reference: "Luke 10:33-34",
    text: "But a Samaritan, as he journeyed, came to where he was, and when he saw him, he had compassion. He went to him and bound up his wounds, pouring on oil and wine. Then he set him on his own animal and brought him to an inn and took care of him.",
    dateLabel: "December 27"
  },
  '2026-12-28': {
    reference: "Matthew 5:16",
    text: "In the same way, let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven.",
    dateLabel: "December 28"
  },
  '2026-12-29': {
    reference: "Matthew 28:19-20",
    text: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.",
    dateLabel: "December 29"
  },
  '2026-12-30': {
    reference: "Daniel 3:28",
    text: "Nebuchadnezzar answered and said, 'Blessed be the God of Shadrach, Meshach, and Abednego, who has sent his angel and delivered his servants, who trusted in him...'",
    dateLabel: "December 30"
  },
  '2026-12-31': {
    reference: "Acts 17:17",
    text: "So he reasoned in the synagogue with the Jews and the devout persons, and in the marketplace every day with those who happened to be there.",
    dateLabel: "December 31"
  },
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
