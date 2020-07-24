export function fetchPhrases() {
  return phrases;
}

export function fetchRandomPhrase() {
  return phrases[Math.floor(Math.random() * phrases.length)];
}

const phrases = [
  { body: 'on the whole', meaning: 'generally', examples: ["We have our bad times but on the whole we're fairly happy."] },
  {
    body: 'on second thoughts',
    meaning: 'used when you want to change something that you have just said, often to say the opposite',
    examples: ['We don’t need an umbrella. On second thoughts, maybe we do.'],
  },
  {
    body: 'at the end of the day',
    meaning: 'something that you say before you give the most important fact of a situation',
    examples: ["Of course I'll listen to what she has to say but at the end of the day, it's my decision."],
  },
  {
    body: 'off the top of my head',
    meaning: 'from memory, without a lot of thought or consideration',
    examples: ["Off the top of my head, I think she's been engageed 5 times."],
  },
  {
    body: 'out of touch',
    meaning: 'not communicating with each other',
    examples: ["I don't know if he still lives there. We've been out of touch for some time."],
  },
  {
    body: 'get my head around it',
    meaning: 'To understand something that is challenging or confusing.',
    examples: ["It took a while, but I've finally gotten my head around this chapter in my calculus textbook."],
  },
  {
    body: 'by and large',
    meaning: 'when everything about a situation is considered together:',
    examples: ["There are a few small things that I don't like about my job, but by and large it's very enjoyable."],
  },
  { body: 'cost an arm and a leg', meaning: 'very expensive', examples: ['The repair work cost an arm and a leg'] },
  { body: 'cost a fortune', meaning: 'to be very expensive', examples: ['That cost looks like it cost you an arm and a leg!'] },
  { body: 'dirt cheap', meaning: 'very cheap', examples: ["They're always selling off stuff like that dirt cheap"] },
  {
    body: 'rip someone off',
    meaning: 'cheat someone, especially financially',
    examples: ['She thought he was ripping her off over her royalties'],
  },
  {
    body: 'issue a refund',
    meaning: 'to return the money you have received',
    examples: ['Sometimes, for any number of reasons, you may have to issue a refund.'],
  },
  { body: 'make ends meet', meaning: 'to earn just enough money to live on', examples: ['They were finding it hard to make ends meet.'] },
  { body: 'cheapskate', meaning: 'a miserly person.', examples: ['He is such a cheapskate.'] },
  {
    body: 'go Dutch',
    meaning: 'To divide a check or bill so that each person contributes to it.',
    examples: ["You don't have to treat me to dinner—let's go Dutch."],
  },
  {
    body: "live beyond one's means",
    meaning: 'to spend more money than he/she can afford',
    examples: ['The more gifts she received, the more she craved, until he was living beyond his means.'],
  },
  {
    body: 'have money to burn',
    meaning: 'to spend a lot of money on things that are not necessary',
    examples: ["I don't know what her job is but she certainly seems to have money to burn."],
  },
  { body: 'when hell freezes over', meaning: 'it will never happen', examples: ['I guess, she will forgive you when hell freezes over'] },
  { body: 'when pigs fly', meaning: 'it will never happen', examples: ['The train station will be renovated when pigs fly'] },
  {
    body: "odds are in someone's favor",
    meaning: '(someone) is likely to win or succeed',
    examples: ["We don't know what the decision will be, but we think the odds are in our favor."],
  },
  {
    body: 'tit for tat',
    meaning: 'actions done intentionally to punish other people because they have done something unpleasant to you',
    examples: ["I noticed she didn't send me a card - I think it was tit for tat because I forgot her birthday last year."],
  },
  { body: 'right off the bat', meaning: 'immediately or right from the start', examples: ['I found what I wanted right off the bat.'] },
  {
    body: 'an old wives’ tale',
    meaning: 'A now-debunked story or idea that was once believed, often superstitiously.',
    examples: ["Oh, that's just an old wives' tale! A broken mirror does not guarantee seven years' bad luck."],
  },
  { body: 'there is no doubt that', meaning: '100 %', examples: ['There is no doubt that she is angry.'] },
  {
    body: 'if you ask me',
    meaning: "used to emphasize that a statement is one's personal opinion",
    examples: ['If you ask me, people should go on a training course before they become parents.'],
  },
  {
    body: 'a blessing in disguise',
    meaning: 'a good thing that seemed bad at first',
    examples: ['Loosing that job was a blessing in disguise.'],
  },
  {
    body: 'a picture is worth 1000 words',
    meaning: 'a picture tells a story just as well as, if not better than, written words',
    examples: ['Please could you sketch out a floorplan? A picture is worth a thousand words.'],
  },
  {
    body: 'actions speak louder than words',
    meaning: 'what someone actually does means more than what they say they will do',
    examples: ["I'm going to wait for him to show me he loves me because actions speak louder than words."],
  },
  {
    body: 'add insult to injury',
    meaning: 'to act in a way that makes a bad situation worse',
    examples: ['I was late and, to add insult to injury, I forgot my keys.'],
  },
  { body: 'as cheap as chips', meaning: 'really cheap', examples: ["Don't worry about paying me back, they were as cheap as chips."] },
  {
    body: 'bark up the wrong tree',
    meaning: 'to be wrong about the way to achieve something or the reason for something',
    examples: [
      "I think you're barking up the wrong tree. Rather than reading the textbook cover to cover, you should try the SQRRR method.",
    ],
  },
  {
    body: 'beat around the bush',
    meaning: 'avoid saying that you mean, usually because it is uncomfortable',
    examples: ["I'm not going to beat around the bush, I hate your boyfriend."],
  },
  {
    body: 'bite off more than you can chew',
    meaning: 'to try to do something that is too difficult or too much for you',
    examples: ['I have bitten off more than I can chew with this 100 idioms video.'],
  },
  {
    body: 'bite the bullet',
    meaning: 'to force yourself to do something unpleasant or difficult, or to be brave in a difficult situation',
    examples: [
      "I'm going to bite the bullet and quit my job.",
      "I don't actually enjoy cleaning, but I bite the bullet and do it so that everything in my house isn't covered in a thick layer of dust.",
      "I know she's disappointed to have not gotten her dream job, but the sooner she bites the bullet and accepts it, the sooner she can move on.",
    ],
  },
  {
    body: 'cut corners',
    meaning: 'to do something in the fastest, easiest or cheapest way',
    examples: ['This report is of poor quality - I think the author may have cut some corners.'],
  },
  {
    body: 'cut somebody some slack',
    meaning: 'to give someone additional freedom',
    examples: ['Because it was the last day of class, the teachers cut the students some slack.'],
  },
  {
    body: "don't give up your day job",
    meaning: "used for telling somebody that you don't think they're very good at something",
    examples: ["Your drum solo was very entertaining, but don't give up the day job!"],
  },
  {
    body: 'put all your eggs in one basket',
    meaning: 'to depend for success on a single person or plan',
    examples: ["I'm applying for several jobs because I don't want to put all of my eggs in one basket."],
  },
  {
    body: 'easy does it',
    meaning: 'used to tell someone to do something carefully and slowly',
    examples: ["Easy does it! Don't spill that paint!"],
  },
  {
    body: 'every cloud has a silver lining',
    meaning: 'every negative has a positive',
    examples: ['Every cloud has a silver lining - after being made redundant I found my dream job!'],
  },
  {
    body: 'get a taste of your own medicine',
    meaning: "get treated the way you've been treating other people",
    examples: ['The nasty prison warden got a taste of his own medicine after being thrown in jail.'],
  },
  {
    body: 'to get something out of your system',
    meaning: 'to get rid of a wish or emotion, especially a negative one, by allowing yourself to express it',
    examples: ['I went and bought that dress I was thinking about all day - I  had to get it out of my system!'],
  },
  {
    body: 'to get your act together',
    meaning: 'to start to organize yourself so that you do things in an effective way',
    examples: [
      'My desk is a complete mess. I need to get my act together!',
      'You need to get your act together if you’re going to find the right house to buy.',
      'I really need to get my act together before I go into the board meeting.',
    ],
  },
  {
    body: 'to give someone the benefit of the doubt',
    meaning: "to decide that you will believe someone, even if you are not sure that what they're saying is true",
    examples: ['She said she was late because her train was cancelled, and we gave her the benefit of the doubt.'],
  },
  { body: 'to give someone the cold shoulder', meaning: 'to ignore someone', examples: ['I think Sally is giving me the cold shoulder.'] },
  {
    body: 'to go back to the drawing board',
    meaning: 'to start planning something again because the first plan failed',
    examples: ["Well that didn't work, let's go back to the drawing board."],
  },
  { body: 'good things come to those who wait', meaning: 'be patient', examples: ['Stop rushing me! Good things come to those who wait!'] },
  {
    body: 'to hit the nail on the head',
    meaning: 'to get something exactly right',
    examples: ["You've hit the nail on the head - that is the route we should have taken!"],
  },
  {
    body: 'ignorance is bliss',
    meaning: "you're better off not knowing",
    examples: ["I could ask my boss if she's planning to fire me, but ignorance is bliss."],
  },
  {
    body: 'it takes one to know one',
    meaning: "you're just as bad as I am",
    examples: ["You're such a gossip! It takes one to know one."],
  },
  {
    body: 'to jump on the band wagon',
    meaning: 'to join an activity, trend or opinion that has become popular',
    examples: ["I've jumped on the bandwagon and downloaded fortnight."],
  },
  {
    body: "to keep one's chin up",
    meaning: "to keep one's spirits high",
    examples: ["I'm trying to keep my chin up after receiving that rejection letter."],
  },
  {
    body: 'to let sleeping dogs lie',
    meaning: 'to leave a situation as it is, in order to not make it worse',
    examples: ['I think we should let sleeping dogs lie and avoid confronting her about her issues.'],
  },
  {
    body: 'to let someone off the hook',
    meaning: 'to allow (someone who has been caught doing something wrong or illegal) to go unpunished',
    examples: ["This is the third time you've been caught speeding and I don't think they're going to let you off the hook."],
  },
  {
    body: 'to let the cat out of the bag',
    meaning: 'to reveal a secret',
    examples: ["Don't let the cat out of the bag because the party is a surprise."],
  },
  {
    body: 'to miss the boat',
    meaning: 'to be too slow to take advantage of an opportunity',
    examples: [
      'I waited too long for the house prices to drop and I missed the boat.',
      "People who've been holding off buying anything in case prices drop further could find they've missed the boat.",
      'He missed the boat when he did not apply for the job in time. Source: theidioms.com',
    ],
  },
  {
    body: 'neck of the woods',
    meaning: 'the area where someone comes from, or the area where you are',
    examples: ["I'm surprised to see you in this neck of the woods."],
  },
  {
    body: 'on the ball',
    meaning: 'alert to new ideas, methods, and trends',
    examples: ['I like hanging out with younger people - it keeps me on the ball.'],
  },
  {
    body: 'on thin ice',
    meaning: 'On probation. If you make another mistake, there will be trouble.',
    examples: ["I'm on thin ice after my behaviour at the office party.", "He's skating on thin ice by lying to the police."],
  },
  {
    body: 'once in a blue moon',
    meaning: 'rarely, very infrequently',
    examples: ['I only go to the cinema once in a blue moon, but when I do go I really enjoy it'],
  },
  {
    body: "to play devil's advocate",
    meaning: 'to argue the opposite, just for the sake of argument',
    examples: ["I don't want to play devil's advocate but are you really going out dressed like that?"],
  },
  {
    body: "to rain on someone's parade",
    meaning: 'to spoil something',
    examples: ["I don't want to rain on your parade but I think you've made a huge mistake in your thesis."],
  },
  {
    body: 'to rock the boat',
    meaning: 'to do or say something that could cause a problem or disturbance',
    examples: ["The team is getting on really well at the moment so let's not rock the boat."],
  },
  {
    body: 'to see eye to eye',
    meaning: 'to agree',
    examples: [
      "I really don't see eye to eye with my grandma.",
      'The boss and I do not always see eye to eye.',
      'I don’t see eye to eye with my father on many things.',
    ],
  },
  {
    body: 'to shed light on something',
    meaning: 'to reveal information about or to clarify something',
    examples: [
      'Please could you shed some light on your absense yesterday?',
      'The governor is trying to shed light on the building scandal so that citizens will trust the government once more.',
      'Recent research has shed light on the causes of the disease.',
    ],
  },
  {
    body: 'to sit on the fence',
    meaning: 'to avoid making a decision or choice',
    examples: ["I am sitting on the fence, I really can't choose between these 2 adorable puppies."],
  },
  {
    body: 'to sit tight',
    meaning: "refrain from taking action or changing one's mind",
    examples: ['The estate agent advised us to sit tight and neither buy nor sell.'],
  },
  {
    body: 'to smell a rat',
    meaning: 'to begin to suspect trickery or deception',
    examples: ['When she passed away, investigators were called in and soon smelt a rat.'],
  },
  {
    body: "someone wouldn't be caught dead",
    meaning: 'someone dislikes something very much',
    examples: ["I wouldn't be caught dead in a dress like that!"],
  },
  {
    body: "someone's heart is in the right place",
    meaning: 'someone only has good intentions',
    examples: ['He is very strict with his students, but his heart is in the right place.'],
  },
  {
    body: "someone's pride and joy",
    meaning: 'a person or thing that gives someone a lot of satisfaction and happiness',
    examples: ['Her vegetable garden is her pride and joy!'],
  },
  {
    body: "someone's true colours",
    meaning: 'the kind of person someone really is rather than what they appear be',
    examples: ['I thought he was really nice, but then he was rude to the waiter and showed his true colours.'],
  },
  { body: 'to spill the beans', meaning: 'give away a secret', examples: ['Go on, spill the beans! I need to know how your date went!'] },
  {
    body: "to steal someone's thunder",
    meaning: "to take attention or praise away from someone else's accomplishments by outdoing them with your own",
    examples: ['She stole my thunder when she announced her pregnancy at my wedding!'],
  },
  {
    body: "to stick to one's guns",
    meaning: 'to refuse to change your opnions or beliefs about something',
    examples: ['You need to stick to your guns and stop listening to what he says!'],
  },
  { body: 'to take the mickey', meaning: 'to make fun of', examples: ['Are your taking the mickey of my mum?'] },
  {
    body: 'the ball is in your court',
    meaning: "it's your decision",
    examples: ['The ball is in your court regarding the location of the next event.'],
  },
  {
    body: 'the best thing since sliced bread',
    meaning: 'a really great invention',
    examples: ['This spork is the best thing since  sliced bread!'],
  },
  {
    body: 'the devil is in the details',
    meaning: 'it looks good from afar, but when you look more closely, there are problems',
    examples: ['The illustrations looked fine at first glance, but the devil is in the details.'],
  },
  {
    body: 'the early bird gets the worm',
    meaning: 'the people who arrive first will get the best stuff',
    examples: ["Let's head to the sales at 6 am - the early bird gets the worm!"],
  },
  {
    body: 'the last straw',
    meaning: "the last in a series of unpleasant events that makes you feel like you can't continue",
    examples: ["She's always been rude to me, but it was the last straw when she started insulting my mother."],
  },
  {
    body: "there's a method to someone's madness",
    meaning: 'someone appears crazy but actually they have a plan',
    examples: ['My bedroom seems messy but there is method to my madness!'],
  },
  {
    body: "there's no such thing as a free lunch",
    meaning: 'nothing is entirely free',
    examples: ["I wonder what he wants from me? There's no such thing as a free lunch!"],
  },
  {
    body: 'through thick and thin',
    meaning: 'under all circumstances, no matter how difficult.',
    examples: [
      'He stuck with her through thick and thin.',
      "She's always been there for me through thick and thin, so I can't turn my back on her now.",
      "Our company has survived through thick and thin, and we'll be able to get through this ordeal as well.",
    ],
  },
  {
    body: 'to throw caution to the wind',
    meaning: 'take a risk',
    examples: ['I think you should throw caution to the wind and go on that date!'],
  },
  {
    body: 'to make matters worse',
    meaning: 'with the result that a bad situation is made worse',
    examples: ['She accidently sent a romantic message to her family whatsapp group, and to make matters worse it included a picture.'],
  },
  {
    body: "to twist someone's arm",
    meaning: 'to convice someone to do what you want',
    examples: ["I didn't want to go out tonight, but Felicity twisted my arm!"],
  },
  {
    body: 'up in the air',
    meaning: '(of a plan or issue) still to be settled: unresolved',
    examples: [
      'The fate of our house purchase is still up in the air!',
      'The whole future of the project is still up in the air.',
      'Because the whole town protested plans to build a new shopping center, that proposal is now up in the air.',
    ],
  },
  {
    body: "we'll cross that bridge when we come to it",
    meaning: 'you will not worry about a possible future problem but will deal with it if it happens',
    examples: ["Don't worry about the car breaking down - we'll cross that bridge when we come to it."],
  },
  {
    body: 'to wrap your head around something',
    meaning: 'to find a way to understand or accept (somthing)',
    examples: ["I still can't wrap my head around why she would do that!"],
  },
  {
    body: 'you can say that again',
    meaning: 'used to express emphatic agreement',
    examples: ['"The weather has been terrible." "You can say that again."'],
  },
  {
    body: 'tell me about it',
    meaning: 'used to say that you feel the same way or have had the same experience',
    examples: ['"He\'s driving me crazy with his stupid jokes." "Tell me about it!"'],
  },
  {
    body: "you can't have your cake and eat it too",
    meaning: "you can't have everything",
    examples: ["You need to choose between the two options - you can't have your cake and eat it too!"],
  },
  {
    body: 'you live and you learn',
    meaning: 'you learn from your mistakes',
    examples: ['I know I failed the interview but you live and you learn.'],
  },
  {
    body: 'year after year',
    meaning: 'it’s done every year',
    examples: ['He celebrates Christmas with his family in Rome year after year.'],
  },
  {
    body: 'passed down in one’s family',
    meaning: 'something is given from generation to generation in a family',
    examples: ['The painting has been passed down in her family.'],
  },
  {
    body: 'to have a crush on someone',
    meaning: 'to like a person in a romantic way.',
    examples: ['Do you think the man has a crush on the woman?'],
  },
  {
    body: 'to pop the question',
    meaning: 'to ask for someone’s hand in marriage',
    examples: ['Yesterday, Jason popped the question to Janice.'],
  },
  { body: 'to tie the knot', meaning: 'to get married', examples: ['Janice said yes! They’re going to tie the knot later this year!'] },
  {
    body: 'tell like it is',
    meaning: "to tell the whole truth even if it's not very pleasant",
    examples: ['She always tells like it is.'],
  },
  {
    body: "get one's foot in the door",
    meaning: 'to do something that may give you a chance at better opportunities in the future.',
    examples: ['Giving your contact details to someone in the company is a way to get your foot in the door.'],
  },
  {
    body: 'out of courtesy',
    meaning: 'to do something in order to be polite, not because they want to do it',
    examples: ['She was really busy, but she invited the visitor to lunch out of courtesy'],
  },
  {
    body: 'It’s customary to',
    meaning: 'it used to talk about things that are commonly done',
    examples: ['At my company, it’s customary to wear slippers inside the office.'],
  },
  {
    body: 'to manage to do something',
    meaning: 'to succeed in doing something difficult',
    examples: ['I managed to graduate while working a full-time job.'],
  },
  {
    body: 'to take pride in something',
    meaning: 'someone is proud of a specific achievement',
    examples: ['I take pride in graduating from a well-known university.'],
  },
  {
    body: 'to rob the cradle',
    meaning: 'to marry or date someone who is much younger than you',
    examples: ["Robert is 45 and his girlfriend is only 25. This isn't the first time he's robbed the cradle."],
  },
  {
    body: 'a May-December romance',
    meaning: 'a relationship between two people who have a fuge age gap',
    examples: ["I'm 28 and my hasband is 52, so it's quite a Mey-December romance."],
  },
  {
    body: 'somethig is at the top of the list',
    meaning: 'something is more important than anything else. It’s a person’s highest priority.',
    examples: ['I don’t have time to go on dates! Right now, my career is at the top of the list.'],
  },
  {
    body: "to wear the pants in one's family",
    meaning: 'to be the one who makes the decisions',
    examples: ['After my father passed away, my mother wore the pants in our family.'],
  },
  { body: 'frown on something', meaning: 'not to approve', examples: ['My mother frowns on using martphones at the dinner table.'] },
  {
    body: 'a play on words',
    meaning: 'an amusing use of a word that sounds like another word or has more than one meaning',
    examples: ['The shop is named "Tea-rrific" and it’s a play on words. It’s a mix of ‘tea’ and ‘terrific.’'],
  },
  {
    body: 'to put a lot of thought into something',
    meaning: 'to think carefully about it.',
    examples: ["Give her something unique. She'll appriciate that you put a lot of thought into your gift."],
  },
  {
    body: 'to seize the day',
    meaning: 'to enjoy the present moment without worrying about the future.',
    examples: ['Don’t worry about your household chores! It’s a nice day out. Let’s seize the day and go hiking!'],
  },
  {
    body: 'live life to the fullest',
    meaning: 'to live the best life possible without holding back',
    examples: ['Live life to the fullest! You only get one life, you know?'],
  },
  {
    body: "it's worth a shot",
    meaning: 'an expression used to encourage someone try something even though success or good results are not guaranteed',
    examples: ['Try to give her flowers as an apology. It may not work, but it’s worth a shot.'],
  },
  {
    body: 'in due course',
    meaning: 'something will happen at the appropriate time',
    examples: ['Don’t worry too much. You’re still young. You’ll find a good partner in due course.'],
  },
  {
    body: 'save for a rainy day',
    meaning: 'to keep something, especially money, for a future time of need',
    examples: ["I've been saving for a rainy day. I already have a couple thousand dollars in my account."],
  },
  {
    body: 'something is on my mind',
    meaning: 'a person has been thinking about something a lot',
    examples: ['Going to the beach has been on my mind for a while now, so  I just bought a ticket to Bali!'],
  },
  {
    body: 'pressure someone into doing something',
    meaning: 'to strongly push a person to do it',
    examples: ["I didn't really want attend the party, but my friend pressured me into going."],
  },
  {
    body: 'talk someone into doing something',
    meaning: 'talk to someone about the advantages of doing it untill he/she agrees with you.',
    examples: [
      'I talked my mom into buying ice cream! She said no at first, but I kept her how nice some cold desserts would be in this heat, and she finally agreed.',
    ],
  },
  {
    body: 'like talking to a brick wall',
    meaning: 'If talking to someone is like talking to a brick wall, the person you are speaking to does not listen',
    examples: [
      'I keep telling my sister that she should cut down on the amount of sweets she eats, but she keeps buying candy. It’s like talking to a brick wall!',
    ],
  },
  {
    body: 'all the more reason',
    meaning: 'used for emphasizing that what someone has said or done is another reason why they should do a particular thing',
    examples: ['‘But some of those kids can hardly read or write!’ ‘All the more reason why they should get the best education on offer.’'],
  },
  {
    body: "keep someone's nose clean",
    meaning: 'to avoid getting into trouble',
    examples: ["I'd only been out of prison three months, so I was trying to keep my nose clean."],
  },
  {
    body: 'hail a cab',
    meaning: 'to call the attention of a taxi, such as by waving your hand or yelling.',
    examples: ['I found it weird that some locals hail a cab by whistling at an oncoming taxi, but somehow, it works!'],
  },
  {
    body: 'blend in',
    meaning: 'to act or look like others and not stand out.',
    examples: [
      'When I went to Mexico, the locals were surprised to know that I was actually American. I guess I blended in well even though my Spanish wasn’t that good.',
    ],
  },
  {
    body: 'pull the plug',
    meaning: 'to do something that prevents an activity from continuing, especially by no longer giving money to support it:',
    examples: ['If the viewing figures drop much more, the TV network will probably pull the plug on the whole series.'],
  },
  {
    body: 'hit a snag',
    meaning: 'to encounter an issue, drawback, or challenge.',
    examples: ['Our plans for a relaxing night at home hit a snag when a pipe burst in the basement.'],
  },
  {
    body: 'the more the merrier',
    meaning: 'used to say an occasion will be more enjoyable if a lot of people are there',
    examples: ['Do you mind if I bring a couple of friends to your party?" "Not at all - the more the merrier!"'],
  },
  { body: "the sky's the limit", meaning: 'there is no limit', examples: ["The sky's the limit to what you can win in our competition."] },
  {
    body: 'quid pro quo',
    meaning: 'a favour or advantage granted in return for something.',
    examples: ['The pardon was a quid pro quo for their help in releasing hostages'],
  },
  {
    body: 'split hairs',
    meaning: 'to argue that there is a difference between two things, when the difference is really too small to be important',
    examples: ["Don't split hairs. You know what I'm getting at."],
  },
  {
    body: 'keep something under wraps',
    meaning: 'to keep something secret',
    examples: [
      'Keep this under wraps for now, but Greg is definitely the one getting the promotion.',
      'She decided to keep her plans under wraps for a while.',
      'The project has been kept under wraps for years.',
    ],
  },
  {
    body: 'out of line',
    meaning: 'beyond what is considered acceptable behavior',
    examples: ['You can disagree with her, but calling her dishonest was out of line'],
  },
  {
    body: 'go above and beyond',
    meaning: 'to do more or better than would usually be expected of someone',
    examples: ["He's always been a good friend, but while I was ill he really went above and beyond"],
  },
  {
    body: 'put something to bed',
    meaning: 'to finish dealing with something',
    examples: [
      'I hope we can finally put this issue to bed.',
      'We should be able to put this project to bed next week.',
      "OK, I think we have to agree to disagree. Let's just put the issue to bed and stop arguing.",
    ],
  },
  {
    body: 'tie up loose ends',
    meaning: 'to complete the parts of something that have not been completed',
    examples: ['We still have to tie up some loose ends of the project.'],
  },
  {
    body: 'been there, done that',
    meaning: 'used to say that you have done something and are no longer interested in it',
    examples: [
      'A: "I got back to my car a mere three minutes after the meter expired, and I still got a parking ticket!" B: "Ugh, been there, done that."',
    ],
  },
  {
    body: 'a loose cannon',
    meaning: 'an unpredictable, uncontrollable person who can be dangerous',
    examples: ['I try to stay away from him as much as possible. He’s such a loose cannon!'],
  },
  {
    body: 'a red flag',
    meaning: 'a sign that something is wrong',
    examples: ['Losing your enthusiasm for what you’re studying is a red flag. Maybe you should consider changing your major?'],
  },
  {
    body: 'trust your gut ',
    meaning: 'an expression used to say that you should trust how you feel, especially if something seems wrong',
    examples: ['Don’t go on the trip if you have a bad feeling about it. Trust your gut.'],
  },
  {
    body: 'I hate to break it to you',
    meaning: 'an expression used to say some bad news',
    examples: ['I hate to break it to you, but he is not here.'],
  },
  { body: 'to die for', meaning: 'excellent or to be strongly wished for', examples: ['That chocolate cake is to die for.'] },
  {
    body: 'not by a long shot',
    meaning: 'used for saying that something is not true at all',
    examples: [
      'They’ve achieved a lot, but they haven’t finished yet – not by a long shot.',
      "It wasn't as good as his first book - not by a long shot.",
      'She had not told Rory everything, not by a long shot.',
    ],
  },
  {
    body: 'since the beginning of time',
    meaning: 'As long as anyone can remember',
    examples: ['Since the beginning of time, man has always sought ways of improving things and of going about it.'],
  },
  {
    body: "give the shirt off one's back",
    meaning: 'give anything and everything one possesses',
    examples: ["Tom is truly generous—he'll give you the shirt off his back. "],
  },
  {
    body: 'When in Rome, Do as the Romans Do',
    meaning:
      'importance of adapting yourself to the customs of the people who are in a certain place or situation and behave like they do.',
    examples: [
      '"Are you sure we should eat this with our hands?”  “Why not? All of these people are eating it that way. When in Rome, do as the Romans do!”',
    ],
  },
  {
    body: 'take the fall for someone',
    meaning: 'to accept the blame for something another person did',
    examples: [
      "I'm not going to take the fall for you.",
      "We've made it look like he withdrew the money, so when the police start investigating, he'll be the one to take the fall.",
      "I'm always taking the fall for your mistakes—I'm sick of covering for you!",
    ],
  },
  {
    body: 'a den of iniquity',
    meaning: 'a place where activities that you think are immoral or evil happen – often used humorously',
    examples: ["Well we've got them here now and they're after building a den of iniquity on top of your Imperial Roman artefacts."],
  },
  {
    body: 'on the line',
    meaning: 'if something important is on the line, there is a risk that you might lose it or something bad could happen to it',
    examples: ['She knew that her whole future was on the line.'],
  },
  {
    body: 'under the radar',
    meaning: 'not getting attention : unnoticed',
    examples: ['He tried to stay under the radar as he went about his business.'],
  },
  {
    body: "if it's any consolation",
    meaning: 'if it helps make things seem better (to someone)',
    examples: ["If it's any consolation (to you), no one else got much of a raise this year, either."],
  },
  {
    body: "let someone's guard down",
    meaning: 'to become less guarded or vigilant; to stop being cautious about potential trouble or danger.',
    examples: ['There will always be people in this business looking to exploit you, so you can never let your guard down.'],
  },
  {
    body: 'scratch that',
    meaning: 'set phrase An interjection telling someone to ignore, forget, or disregard what was just said or instructed.',
    examples: ["I wonder how much it would be to have our wedding inside the aquarium? Actually, scratch that, that's a ridiculous idea."],
  },
  {
    body: 'a skeleton in the closet',
    meaning: 'a secret that would cause embarrassment if it were known:',
    examples: ['Almost everybody has a skeleton in the closet.'],
  },
  {
    body: 'blow off steam',
    meaning: 'to do or say something that helps you to get rid of strong feelings or energy:',
    examples: ['Call me any time you need to blow off some steam.'],
  },
  {
    body: 'talk shop',
    meaning: 'to talk about your job with those you work with when not at work',
    examples: ['Even at a party they have to talk shop!'],
  },
  {
    body: 'snackable',
    meaning: 'suitable for eating as a snack (= a small amount of food that is eaten between meals)',
    examples: ['I like to watch snackable videos on YouTube.'],
  },
  {
    body: 'memory like a sieve',
    meaning: 'to be exceptionally forgetful or absentminded.',
    examples: ["I need to start getting more sleep at night, because lately I've had a memory like a sieve."],
  },
  {
    body: 'sweep under the rug',
    meaning:
      "to ignore, deny, or conceal from public view or knowledge something that is embarrassing, unappealing, or damaging to one's reputation.",
    examples: ['The senator has been accused of trying to sweep his former drug use under the rug.'],
  },
  {
    body: 'be still my heart',
    meaning:
      "an exclamation that something is too exciting or overwhelming for one to bear; literally, that it is causing one's heart to beat too fast. In modern usage, it is almost always used sarcastically to imply that something is actually mundane, uninteresting, or unappealing.",
    examples: ['You want me to go shopping with you? Oh, be still my heart! No, thank you.'],
  },
  {
    body: 'wild goose chase',
    meaning: 'a foolish and hopeless search for or pursuit of something unattainable.',
    examples: ['After two hours spent wandering in the snow, I realized we were on a wild goose chase.'],
  },
  {
    body: 'knock yourself out',
    meaning: 'to go ahead; to do as one pleases',
    examples: ['"These cookies are my favorite! Can I have some?" "Sure, knock yourself out"'],
  },
  {
    body: 'under your own steam',
    meaning: 'If you do something under your own steam, you do it without help:',
    examples: ['Do you want a lift or will you get there under your own steam?'],
  },
  {
    body: "the end doesn't justify the means",
    meaning: 'used to say that a desired result is so good or important that any method, even a morally bad one, may be used to achieve it',
    examples: ['They believe that the end justifies the means and will do anything to get their candidate elected.'],
  },
  {
    body: 'far be it from me to (do something)',
    meaning:
      'used when saying that you do not want to criticize someone or say what they should do, especially when this is what you are really about to do',
    examples: ['Far be it from me to teach you your job, but don’t you think you should have been more careful?'],
  },
  {
    body: "under someone's nose",
    meaning: 'in a place easy to see or find.',
    examples: ["I've been looking all over for that invitation, and it was right under my nose the whole time!"],
  },
  { body: 'rain cats and dogs', meaning: 'rain very hard.', examples: ["It's raining cats and dogs."] },
  {
    body: 'off the beaten track',
    meaning: 'in a place where few people go, far from any main roads and towns',
    examples: ['The farmhouse we stayed in was completely off the beaten track.'],
  },
  {
    body: 'before your eyes',
    meaning: 'Right in front of one or while one is watching.',
    examples: ['Someone smashed into my parked car right before my eyes.'],
  },
  {
    body: 'in the flesh',
    meaning: 'in real life, and not on TV, in a film, in a picture, etc.:',
    examples: ["I've seen her perform on television, but never in the flesh."],
  },
  {
    body: 'you could have fooled me',
    meaning: 'used to show that you do not believe what someone has told you',
    examples: ['Look, we’re doing our best to fix it.’ ‘Well, you could have fooled me.'],
  },
  {
    body: 'without rhyme or reason',
    meaning: 'to be without any obvious reasonable explanation:',
    examples: ['Government money was given out to some people and not to others, apparently without rhyme or reason.'],
  },
  {
    body: 'not on my watch',
    meaning: 'That will not happen while I am in charge or on the lookout.',
    examples: ['"He uses a lot of chilli when he\'s cooking." "Not on my watch!"'],
  },
  {
    body: 'set foot in somewhere',
    meaning: 'to go to a place, especially when there is something special or unusual about you doing this',
    examples: ['He refuses to set foot in an art gallery.'],
  },
  {
    body: 'a point of pride',
    meaning: 'A particular matter, topic, or action that one considers of great importance to their pride, honor, or reputation.',
    examples: [
      'It became a point of pride for the country to build its military to a size that could rival its peers on the global stage.',
    ],
  },
  {
    body: 'one way or another',
    meaning: 'in some way that is not stated',
    examples: ['Everyone at the party was related (in) one way or another.'],
  },
  {
    body: 'lay it on thick',
    meaning: 'to try to persuade someone that something is better, bigger, more important etc than it really is',
    examples: ['I think he laid it on a bit thick with all the compliments.'],
  },
  {
    body: 'play silly buggers',
    meaning: 'to behave in a silly, stupid, or annoying way:',
    examples: ["There'll be a serious accident sooner or later if people don't stop playing silly buggers."],
  },
  {
    body: 'over the edg',
    meaning: 'into a mental or emotional state that makes someone completely lose control',
    examples: ['His friends worried that the news might send/drive/push him over the edge.'],
  },
  {
    body: 'bread and butter',
    meaning: 'a job or activity that provides you with the money you need to live:',
    examples: ['Gardening is my bread and butter right now.'],
  },
  {
    body: 'get down to brass tacks',
    meaning: 'start to consider the basic facts or practical details.',
    examples: ['"we\'ve had a meeting as to the general terms, and now we\'re going to get down to brass tacks"'],
  },
  {
    body: "get (one's) knickers in a twist",
    meaning: 'To become overly upset or emotional over something, especially that which is trivial or unimportant.',
    examples: ["Ah, don't get your knickers in a twist, I'll have the car back by tomorrow morning!"],
  },
  {
    body: 'get reimbursed for something ',
    meaning: 'to be repaid for something that you spent or lost money on',
    examples: ['You should get reimbursed for your canceled flight.'],
  },
  {
    body: 'file a claim',
    meaning: 'make a written statement about a problem such as lost or damaged luggage.',
    examples: ['I filed a claim after seeing that one of my luggage was heavily damaged by the airport staff.'],
  },
  {
    body: 'stands up for',
    meaning: 'to defend someone or something that is being criticized or attacked',
    examples: [
      'Before, Camille would always say ‘yes’ to her boss, even when she already had a lot to do. But now, she stands up for herself and knows when to say no.',
    ],
  },
  { body: '24/7', meaning: 'all the time', examples: ["You don't have to work 24/7."] },
  {
    body: 'heart-to-heart',
    meaning: 'a serious conversation between two people, usually close friends, in which they talk honestly about their feelings:',
    examples: ['We had a heart-to-heart over a bottle of wine.'],
  },
  {
    body: 'take sides',
    meaning: 'to support one person or opinion over another:',
    examples: ['My mother never took sides when my brother and I argued.'],
  },
  {
    body: 'be a long shot',
    meaning: ' used to say that a plan is worth trying, even though you think it is unlikely to succeed',
    examples: ['It’s a long shot, but someone might recognise her from the photo and be able to tell us where she lives.'],
  },
  {
    body: 'once and for all',
    meaning: 'completely and finally',
    examples: ['We have to decide, once and for all, whether we want to ask Dad for money.'],
  },
  {
    body: 'cut to the chase',
    meaning: 'to talk about or deal with the important parts of a subject and not waste time with things that are not important:',
    examples: ["I didn't have long to talk so I cut to the chase and asked whether he was still married."],
  },
  {
    body: 'at/in one fell swoop',
    meaning: 'If you do something at/in one fell swoop, you do it all at the same time:',
    examples: [
      'I got all my Christmas shopping done in one fell swoop.',
      'The court has dismissed all of the charges against him in one fell swoop.',
    ],
  },
  {
    body: 'get to the bottom of something',
    meaning: 'to discover the real but sometimes hidden reason that something exists or happens:',
    examples: ['Investigators are trying to get to the bottom of what went wrong.'],
  },
  {
    body: 'leave it to somebody (to do something)',
    meaning:
      'American English spoken informal used to say that no one should be surprised that someone does something, because it is typical or expected of them',
    examples: ['Leave it to you to have the whole day planned out!'],
  },
  {
    body: 'get under someone’s skin',
    meaning: 'to make someone very annoyed or upset',
    examples: ['Ignore Justin: don’t let him get under your skin'],
  },
  {
    body: 'win some, lose some',
    meaning:
      'In life, you will always succeed in some situations and fail in others. Used especially as consolation following some loss or failure.',
    examples: [
      'A: "I\'m so sorry to hear about the game last night." B: "Eh, win some, lose some. We\'ll just do our best and hopefully win next week."',
    ],
  },
  {
    body: 'the icing on the cake',
    meaning: 'something that makes a good situation even better:',
    examples: ['The city tour was fantastic, and the icing on the cake was a beautiful sunset.'],
  },
  {
    body: 'eat your heart out',
    meaning:
      'If you say "eat your heart out" followed by the name of a famous person, you are joking that you are even better than that person:',
    examples: ["I'm singing in the village production of Tosca next month - eat your heart out Pavarotti!"],
  },
  {
    body: 'sink into oblivion',
    meaning: 'To become lost to obscurity; to not be known or remembered by anyone.',
    examples: ['He held a rather cynical view of parenthood, believing that people only had children to avoid sinking into oblivion.'],
  },
  {
    body: 'rumor has it that',
    meaning: 'It is being rumored that.',
    examples: ['Rumor has it that the boss is using the company profits to pay off his own gambling debts.'],
  },
  {
    body: 'think the (whole) world revolves around you',
    meaning: 'to think you are extremely important:',
    examples: ['The trouble with John is he thinks the whole world revolves around him.'],
  },
  {
    body: 'word gets around',
    meaning: 'News about something or someone inevitably reaches other people. The "news" is often a rumor of some sort.',
    examples: [
      'I know that Julia wanted to keep her break-up a secret, but considering how word gets around at this school, people were going to find out about it in no time.',
    ],
  },
  {
    body: 'look over your shoulder',
    meaning: 'to behave in a way that shows you feel nervous about something that might happen',
    examples: ['He was constantly looking over his shoulder, afraid his past crimes would catch up with him.'],
  },
  {
    body: 'speak for yourself',
    meaning: 'something you say to someone to say that the opinion that they have just expressed is not the same as your opinion:',
    examples: ['"We had a really boring trip." "Speak for yourself! I had a wonderful time!"'],
  },
  {
    body: 'for the nth time',
    meaning: 'Describing something that has happened many times before. "Nth" is used in place of a specific number.',
    examples: ['After he ignored my text for the nth time, I decided to give up.'],
  },
  {
    body: 'willy-nilly',
    meaning: 'If something happens willy-nilly, it happens even if the people who are involved do not want it to happen:',
    examples: ['Both sides were drawn, willy-nilly, into the conflict.'],
  },
  {
    body: 'in the cards',
    meaning: 'Very likely or certain to happen, occur, or take place.',
    examples: ['If you keep performing at this level, I think a promotion is in the cards.'],
  },
  {
    body: 'a flash in the pan',
    meaning: 'something that happened only once or for a short time and was not repeated:',
    examples: ['Sadly, their success was just a flash in the pan.'],
  },
  {
    body: 'by the sound of it/things',
    meaning: 'judging from what you have heard or read about something',
    examples: ['By the sound of it, things are worse than we thought.'],
  },
  {
    body: 'take someone/something at face value ',
    meaning: 'to accept someone or something without considering whether they really are what they claim to be',
    examples: ['These threats should not be taken at face value.'],
  },
  {
    body: 'from where I stand',
    meaning: 'according to what I know or feel',
    examples: ['I knew from where I stood that the stocks were practically worthless.'],
  },
  {
    body: 'be all in',
    meaning:
      "to be fully committed to a task or endeavor; to give or be prepared to give all of one's energy or resources toward something.",
    examples: ["Just so you know, I'm all in if you're serious about taking that cross-country trip next week."],
  },
  {
    body: 'give (one) a fair shake',
    meaning: 'To give one just treatment or a fair chance (to do something).',
    examples: ["I'm not asking for special treatment, just give me a fair shake at the tryouts."],
  },
  {
    body: 'split second',
    meaning: 'a very short moment of time:',
    examples: ['They brought out guns and for a split second nobody moved.'],
  },
  {
    body: "hide (one's) light under a bushel",
    meaning: "To avoid utilizing or emphasizing one's talents.",
    examples: ["Don't give up drawing! You're a talented artist and shouldn't hide your light under a bushel."],
  },
  {
    body: 'on the rack',
    meaning: 'in a difficult situation that you cannot deal with',
    examples: ['The government is on the rack over the torture allegations.'],
  },
  {
    body: 'watch paint dry',
    meaning: 'used to refer to an activity that you consider extremely boring:',
    examples: ['"Don\'t you want to watch the football?" "To be honest, I would rather watch paint dry."'],
  },
  {
    body: 'be/get bogged down',
    meaning: 'to be/become so involved in something difficult or complicated that you cannot do anything else:',
    examples: ["Let's not get bogged down with individual complaints"],
  },
  {
    body: 'the final nail in the coffin',
    meaning: 'an event that causes the failure of something that had already started to fail:',
    examples: ["This latest evidence could be the final nail in the coffin for Jackson's case."],
  },
  {
    body: 'keep an ear to the ground',
    meaning: 'To listen for any indication of what is happening or will happen.',
    examples: [
      'A: "I\'m not sure what\'s going to happen with this merger, so I\'m keeping an ear to the ground." B: "Please let me know if you hear anything."',
    ],
  },
  {
    body: "above (one's) pay grade",
    meaning:
      "The responsibility of those who are of a higher authority than oneself, denoted by the level of pay that one receives in comparison to one's superiors.",
    examples: ["All these questions you're asking are above your pay grade."],
  },
  {
    body: 'take it out on someone',
    meaning: 'treat him/her badly because you’re angry or stressed even though he/she has nothing to do with your problems.',
    examples: ['I know you’re stressed, but don’t take it out on me. I’m just trying to help.'],
  },
  {
    body: 'have a lot on one’s plate',
    meaning: 'be very busy',
    examples: ['Sorry, I can’t really help you right now. I have a lot on my plate today.'],
  },
  {
    body: 'put on weight',
    meaning: 'gain weight',
    examples: ['I noticed that I’m putting on weight lately, so I decided to cut back on bread and sugar.'],
  },
  {
    body: 'feel good about oneself',
    meaning: 'have self-confidence and high self-esteem.',
    examples: [
      'I didn’t use to feel good about myself, but now, I’m confident about my appearance and love taking photos with my friends.',
    ],
  },
  {
    body: 'measure up',
    meaning: 'to be good enough, or to be as good as someone/something else',
    examples: ['I feel like I don’t measure up to my friends. They’re all successful businessmen.'],
  },
  {
    body: "out of (one's) hands",
    meaning: "Not within one's control.",
    examples: ["I submitted my application, so it's really out of my hands now."],
  },
  {
    body: 'I’ve had it up to here with someone/something',
    meaning: 'you can’t handle that person or thing any longer.',
    examples: ['I’ve had it up to here with all of his excuses! I already gave him enough chances to change.'],
  },
  {
    body: 'blow up at someone',
    meaning: 'to suddenly burst into anger and yell at a person.',
    examples: ['Yesterday, I blew up at Chris for criticizing my work.'],
  },
  {
    body: 'get your act together',
    meaning: 'to organize your life or work in a better way, especially by having clear goals and a plan for achieving them',
    examples: ['If you want to be finished by Monday, you’ll have to get your act together.'],
  },
  { body: 'over the moon', meaning: 'to be very pleased:', examples: ['She was over the moon about/with her new bike.'] },
  {
    body: 'birds of a feather',
    meaning: 'people who are similar in character',
    examples: ["He'll like Tony - they're birds of a feather."],
  },
  {
    body: 'case in point',
    meaning: 'an example of the situation or behaviour that you are talking about',
    examples: ['Shoppers tend to think that high prices mean high quality. Electrical goods are a case in point.'],
  },
  {
    body: 'take the high road',
    meaning: 'to behave in a moral way when other people are not behaving morally:',
    examples: ['He decided to take the high road and say he was sorry.'],
  },
  {
    body: 'on the one hand ... on the other hand',
    meaning: 'used when you are comparing two different facts or two opposite ways of thinking about a situation:',
    examples: ["On the one hand I'd like a job that pays more, but on the other hand I enjoy the work I'm doing at the moment"],
  },
  {
    body: 'in the deep end',
    meaning:
      'used in phrases such as throw in (at) the deep end and jump in (at) the deep end to describe starting a new and difficult activity when one is not fully prepared or ready to do it',
    examples: ['Teachers are thrown in the deep end when they first start teaching.'],
  },
  {
    body: 'take a hit',
    meaning: 'to be badly affected in some way',
    examples: ["The region's economy will take a hit if the airbase is closed."],
  },
  {
    body: 'smooth saling',
    meaning: 'Used to describe an activity that is not encountering any problems.',
    examples: ["It's all been smooth sailing; everything has gone exactly according to plan."],
  },
  {
    body: 'hit and miss',
    meaning: 'If something is hit-and-miss, you cannot depend on it to be of good quality, on time, accurate, etc.:',
    examples: ['The trains are often late, so getting to work on time is a fairly hit-and-miss affair.'],
  },
  {
    body: 'brownie point',
    meaning: 'If someone does something to score brownie points, they do it because they think they will be praised for it.',
    examples: ["They're just trying to score brownie points with politicians."],
  },
  {
    body: 'a five-alarm fire',
    meaning: 'Someone or something that is very intense or stressful.',
    examples: [
      "Boy, this project has really become a five-alarm fire with all the other problems it's created.",
      'A five-alarm fire is the reason we heard all of those sirens last night.',
    ],
  },
  {
    body: 'someone gets your vote',
    meaning: 'if someone gets your vote, you support what they say or do',
    examples: ['Anyone prepared to stand up to the bosses gets my vote.'],
  },
  {
    body: 'six of one and half a dozen of the other',
    meaning: 'said when you think that neither of two choices is better than the other:',
    examples: ['"Shall we give her chocolates or flowers?" "I don\'t know, it\'s six of one and half a dozen of the other."'],
  },
  {
    body: 'everything but the kitchen sink',
    meaning: 'almost all that you can imagine of something:',
    examples: [
      "We're only going on vacation for a week, but John will insist on taking everything but the kitchen sink.",
      'When he moved out of the house, he took along everything but the kitchen sink. Source: theidioms.com',
      "Our nearby store is a one-stop shop. You'll find everything but the kitchen sink in there. Source: theidioms.com",
    ],
  },
  {
    body: 'in a vacuum',
    meaning: 'existing completely separately from other people or things and having no connection with them',
    examples: ['The process of learning a language does not take place in a vacuum.'],
  },
  {
    body: 'say in a roundabout way',
    meaning: 'To imply or convey something in an indirect, vague, or evasive manner.',
    examples: ["Well, he didn't promise it to me outright—he said it in a roundabout sort of way."],
  },
  {
    body: 'to and fro',
    meaning: 'in one direction and then in the opposite direction, a number of times:',
    examples: ['She was gazing out the window, rocking rhythmically to and fro'],
  },
  { body: 'run-of-the-mill', meaning: 'not outstanding in quality or rarity', examples: ['He gave a fairly run-of-the-mill speech.'] },
  {
    body: 'once and for all',
    meaning: 'completely and finally:',
    examples: ['We have to decide, once and for all, whether we want to ask Dad for money.'],
  },
  {
    body: 'under the guise of',
    meaning: 'by saying or acting as if something is other than what it really is',
    examples: ['She swindles people under the guise of friendship.'],
  },
  {
    body: 'for good',
    meaning: 'permanently, without the possibility of change in the future',
    examples: [
      'It looks like Jamie has left for good this time.',
      'She says she’s leaving him for good.',
      'After she found out about his latest relapse with drugs, she decided it was best to leave him for good.',
    ],
  },
  {
    body: 'the ins and outs',
    meaning: 'the detailed or complicated facts of something:',
    examples: ["I know how to use computers, but I don't really understand the ins and outs of how they work."],
  },
  {
    body: 'stamp out',
    meaning: 'to get rid of something bad or harmful by taking strong action against it.',
    examples: ['Our country is leading a global campaign to stamp out child labor.'],
  },
  {
    body: 'be exasperated by something',
    meaning: 'be very annoyed or angry at something.',
    examples: ['Carol was exasperated by her mother’s never-ending questions.  '],
  },
  {
    body: 'crack down on',
    meaning: 'to start dealing with bad or illegal behaviour in a more severe way:',
    examples: ['The school made new rules in order to crack down on bullying.'],
  },
  {
    body: 'judge a book by its cover',
    meaning: "said to show that you cannot know what something or someone is like by looking only at that person or thing's appearance",
    examples: ["said to show that you cannot know what something or someone is like by looking only at that person or thing's appearance"],
  },
  {
    body: "have (one's) eyes glued to (something)",
    meaning: "To have all of one's attention focused solely on the thing one is looking at.",
    examples: ['I came back two hours later to find the kids still had their eyes glued to the television.'],
  },
  {
    body: 'be in the wrong',
    meaning: 'to make a mistake or deserve the blame for something',
    examples: ['Which driver was in the wrong?'],
  },
  {
    body: 'take the blame',
    meaning: 'to assume or be assigned the responsibillity or guilt for something.',
    examples: ['As manager for this project, I tkae the blame for its failure.'],
  },
  {
    body: 'less is more',
    meaning: 'you’re saying that something simple is better than something elaborate or complicated.',
    examples: ['I always go for a clean, fresh look. When it comes to make-up, I think less is more.'],
  },
  {
    body: 'too much of a good thing',
    meaning: 'something good can be bad if it’s done in excess.',
    examples: ['You can have too much of a good thing.'],
  },
  {
    body: 'a white lie',
    meaning: 'a lie that is told to be polite or to avoid upsetting someone with the truth.',
    examples: ['Don’t tell him that! You’ll break his heart. Just tell him a white lie, like you have work or something.'],
  },
  {
    body: 'off to a good start',
    meaning: 'Starting (something) in a very favorable or positive way.',
    examples: ['After dropping out of college once before, I really want to get this second chance off to a good start.'],
  },
  {
    body: 'go south',
    meaning:
      'American English informal if a situation, organization, or set of standards goes south, it becomes very bad although it was once very good',
    examples: ['It seems like all our moral standards have just gone south.'],
  },
  {
    body: 'thumb your nose at someone/something',
    meaning: 'to show a lack of respect toward someone or something:',
    examples: ['Most pedestrians thumb their noses at jaywalking laws.'],
  },
  {
    body: 'across the board',
    meaning: 'affecting everyone or everything in a situation or organization',
    examples: ['In July everything we sell is reduced right across the board.'],
  },
  {
    body: "up to (one's) neck in (something)",
    meaning: 'Having too much of something; overwhelmed by an excessive amount of something.',
    examples: ["I'm still unpacking my new house, so I'm just up to my neck in boxes."],
  },
  {
    body: 'ten to one',
    meaning: 'If you say ten to one something will or will not happen, you mean it is very likely that it will or will not happen:',
    examples: ["Ten to one he won't be there tonight.", "Ten to one you'll never find out who did this.", "Ten to one they'll lose."],
  },
  {
    body: "chink in (one's) armor ",
    meaning: 'A minor but very detrimental flaw or weakness.',
    examples: [
      "Yeah, he's brilliant, but his violent temper has destroyed many business relationships—it's really the chink in his armor.",
    ],
  },
  {
    body: 'hit (one) close to home',
    meaning: 'To affect one deeply and emotionally because one can relate very closely.',
    examples: ["My patient's lung cancer diagnosis hits me close to home because my uncle recently died of the same thing."],
  },
  {
    body: 'I was born ready',
    meaning: 'Meaning they are very ready and enthusiastic with whatever they are going to do.',
    examples: ['"You ready?" "I was born ready"'],
  },
  {
    body: 'jump the gun',
    meaning: 'to do something too soon, especially without thinking carefully about it:',
    examples: ["They've only just met - isn't it jumping the gun to be talking about marriage already?"],
  },
  {
    body: 'can of worms',
    meaning: 'A situation that, once started, is likely to become problematic or have a negative outcome.',
    examples: [
      'Corruption is a serious problem, but nobody has yet been willing to open up that can of worms.',
      'Getting involved in the minor border conflict has become a can of worms for the country, with no end to the military engagement in sight.',
    ],
  },
  { body: 'many moons ago', meaning: 'a long time ago', examples: ['It all happened many moons ago.'] },
  { body: 'fair and square', meaning: 'in an honest and fair manner', examples: ['He won the election fair and square.'] },
  {
    body: 'on the hook for',
    meaning: 'owing money for (something) : responsible for (something)',
    examples: ["He's still on the hook for the cost of the repairs."],
  },
  {
    body: 'take something out on someone',
    meaning: 'to make someone else suffer or be responsible for your own mistakes, anger, sadness, etc.:',
    examples: ['Don’t take it out on me – I’m not your boss!'],
  },
  {
    body: 'go to town (on something) ',
    meaning: 'to do something very well, or to make something look very good by spending a lot of time or money on it',
    examples: ['They really went to town on the Christmas decorations.'],
  },
  {
    body: 'in retrospect',
    meaning: 'when looking back on a past event or situation; with hindsight.',
    examples: ["Perhaps, in retrospect, I shouldn't have gone."],
  },
  {
    body: 'lost cause',
    meaning: 'a person or thing that can no longer hope to succeed or be changed for the better.',
    examples: ['Their opposition to planning for full employment was a lost cause.'],
  },
  {
    body: 'go with the flow',
    meaning: 'to do what other people are doing or to agree with other people because it is the easiest thing to do:',
    examples: ['Just relax and go with the flow!'],
  },
  { body: 'be over the moon', meaning: 'to be very pleased:', examples: ['She was over the moon about/with her new bike.'] },
  {
    body: "that's one way of putting it",
    meaning:
      'When someone states an opinion that is similar to yours, but differs in intensity, then you can say that their opinion is "one way of putting it". ',
    examples: [
      '"Soraya is just okay at swimming."  "Well, that\'s one way of putting it; she almost drowned in your above-ground pool*." ',
    ],
  },
  { body: 'from the get-go', meaning: 'from the very beginning', examples: ['They were involved in the project from the get-go.'] },
  {
    body: 'better safe than sorry',
    meaning: 'said when you think it is best not to take risks even when it seems boring or difficult to be careful',
    examples: ["Make sure you take an umbrella – I know it's sunny now, but better safe than sorry."],
  },
  {
    body: "earn (one's) stripes",
    meaning: 'To prove that one is deserving of a particular position or designation.',
    examples: ['I told the recruiter that I earned my stripes as a teacher before moving into administration.'],
  },
  {
    body: 'it goes without saying',
    meaning: 'used to mean that something is obvious:',
    examples: ["Of course, it goes without saying that you'll be paid for the extra hours you work."],
  },
  {
    body: 'in light of something',
    meaning: 'because of a particular fact',
    examples: [
      'In light of your good driving record, we’ve decided to overlook this offense.',
      'Yeah. In light of the situation, we’ve decided to ask employees to lock all personal items in their desks when they go home each day.',
    ],
  },
  { body: 'far-fetched', meaning: 'very unlikely to be true, and difficult to believe:', examples: ["That's a far-fetched story."] },
  {
    body: 'nitty-gritty',
    meaning: 'the most important aspects or practical details of a subject or situation.',
    examples: [
      "Let's get down to the nitty-gritty - how much will it cost?",
      "Let's get down to the nitty-gritty of finding a job.",
      "Let's skip the chitchat and get down to the nitty-gritty.",
    ],
  },
  {
    body: 'the jury is (still) out',
    meaning: 'If the jury is (still) out on a subject, people do not yet know the answer or have not yet decided if it is good or bad:',
    examples: ["The jury's still out on the safety of irradiated food."],
  },
  {
    body: 'not trust (someone) as far as (one) can throw (them)',
    meaning: 'To be very suspicious of someone; to not trust or believe someone.',
    examples: ["You want me to tell our plans to Jill? I don't trust Jill as far as I can throw her."],
  },
  {
    body: 'Get a grip',
    meaning: 'have a newfound understanding of a topic or concept.',
    examples: [
      'The teacher spent extra time going over the material in class because she wanted her students to get a grip on the subject matter before they took the exam.',
    ],
  },
  {
    body: "come to (one's) senses",
    meaning: 'To start thinking reasonably.',
    examples: ["Don't worry, Paul will come to his senses and agree to the terms of the contract."],
  },
  {
    body: "What's got(ten) into (someone)?",
    meaning: 'Why is someone acting in such an unusual or unpleasant way? What is upsetting or bothering someone?',
    examples: [
      "Jeff just screamed at me and stormed out of the room. What's gotten into him?",
      "What's got into Sarah? She's been avoiding me for days now.",
      "I don't know what has gotten into him lately. He just isn't acting like himself.",
    ],
  },
  {
    body: 'the nuts and bolts',
    meaning: 'the practical facts about a particular thing, rather than theories or ideas about it:',
    examples: ['When it came to the nuts and bolts of running a business, he was clearly unable to cope.'],
  },
  {
    body: 'fall into place',
    meaning: 'When events or details that you did not understand before fall into place, they become easy to understand:',
    examples: ['Once I discovered that the woman was his sister, everything fell into place.'],
  },
  {
    body: "for what it's worth",
    meaning: 'said when you are giving someone a piece of information and you are not certain if that information is useful or important:',
    examples: ["For what it's worth, I think he may be right."],
  },
  {
    body: 'in a manner of speaking',
    meaning: 'used for saying that something is partly true:',
    examples: ["She's his partner, in a manner of speaking."],
  },
  {
    body: 'come clean',
    meaning: 'to tell the truth about something that you have been keeping secret:',
    examples: [
      "I thought it was time to come clean (with everybody) about what I'd been doing.",
      'If you come clean about something that you have been keeping secret, you admit it or tell people about it.',
      'It would be better if you come clean about it and let her know what kind of man she is seeing.',
    ],
  },
  {
    body: 'jack-of-all-trades',
    meaning: 'someone who can do many different jobs:',
    examples: ['An artist with the right technology can become a jack-of-all-trades.'],
  },
  {
    body: 'bells and whistles',
    meaning: 'special features that are added to a product or system to attract more buyers:',
    examples: [
      'Manufacturers still build luxury cars with all the bells and whistles.',
      'Karoll advised others to make their software systems user-friendly for employees, rather than add so many bells and whistles that it becomes an aggravation.',
    ],
  },
  {
    body: 'on the surface',
    meaning: 'Superficially; considering only the obvious details or outward appearance (of someone or something).',
    examples: [
      'On the surface, he seems like a really successful businessman, with his life all put together. But if you pull back the curtain a bit, you realize that his life is a mess.',
      'Everything looked fine on the surface, but after we began we realized that the plan was fundamentally flawed.',
      "On the surface they seem to have a fairytale marriage, but those close to them know it isn't so simple.",
    ],
  },
  {
    body: 'breathe down someone’s neck',
    meaning: 'to stay close to someone, watching everything that they do:',
    examples: [
      "It's awful having a boss who breathes down your neck all the time",
      'Jennifer’s boss is always breathing down her neck. He never leaves her alone.',
    ],
  },
  {
    body: 'the way I see it',
    meaning: 'As I view or interpret a certain situation.',
    examples: [
      "I don't know what she's so mad about—the way I see it, I did nothing wrong!",
      'The way I see it, it was a fair trade.',
      'Best thing that could happen, the way I see it.',
    ],
  },
  {
    body: 'a matter of time',
    meaning: 'If you say that something is just a matter of time, you mean that it is certain to happen at some time in the future.',
    examples: [
      'It would be only a matter of time before he went through with it.',
      'It can only be a matter of time before someone is seriously injured.',
      'Yeah. Well, I’m sure it’s only a matter of time before she says yes. I mean, she seems to like him too.',
    ],
  },
  {
    body: "up to (one's) eyeballs (in something)",
    meaning:
      'Extremely busy (with something); deeply or overly involved (in something); possessing, filled up with, or overwhelmed by an excessive amount (of something).',
    examples: [
      "There's no way I can take a vacation right now, I'm up to my eyeballs in work at the moment!",
      "I only intended to be peripherally involved in David's business venture, but, before I knew it, I was in up to my eyeballs!",
      'Ted’s working two jobs because he’s in debt up to his eyeballs.',
    ],
  },
  {
    body: 'to go on a shopping spree',
    meaning: 'to shop excessively; to buy a lot of things in an extravagant way',
    examples: [
      'Erin went on a shopping spree last weekend. She bought three pairs of shoes and two luxury bags.',
      "Let's go on a shopping spree!",
    ],
  },
  {
    body: 'read between the lines',
    meaning: 'look for or discover a meaning that is implied rather than explicitly stated.',
    examples: [
      '"Well, Yuki says it’s difficult." "Yeah, but if you read between the lines, she’s really trying to tell you no."',
      "Reading between the lines, I'd say he isn't happy with the situation.",
      "She said she could afford it, but reading between the lines I don't think she has enough money.",
    ],
  },
  {
    body: 'that is to say ...',
    meaning: "You use that is to say or that's to say to indicate that you are about to express the same idea more clearly or precisely.",
    examples: [
      "Our friends, that is to say our son's friends, will meet us at the airport.",
      'All the B Vitamins work synergistically. That is to say, they are more potent when taken together than when used separately. ',
    ],
  },
  {
    body: 'as​ far as I’m concerned',
    meaning: 'used when you are giving your opinion about something, especially when this may be different from other people’s opinions',
    examples: ['As far as I’m concerned, the issue is over and done with.', 'That’s fine, as far as we’re concerned.'],
  },
  {
    body: 'have nothing against somebody/something',
    meaning: 'if you have nothing against someone or something, they do not annoy or offend you',
    examples: ['I have nothing against him personally.', 'I don’t know what he’s got against me, but he’s always criticizing my work.'],
  },
  {
    body: 'necessary evil',
    meaning: 'something unpleasant that must be accepted in order to achieve a particular result:',
    examples: ['I think he regards work as a necessary evil.', 'Most Americans accept taxes as a necessary evil.'],
  },
  {
    body: 'in retrospect',
    meaning: 'when looking back on a past event or situation; with hindsight.',
    examples: [
      "Perhaps, in retrospect, I shouldn't have gone.",
      'In retrospect, I wish that I had thought about alternative courses of action.',
      'It was a very strange feeling in retrospect–I was frightened, but excited at the same time.',
    ],
  },
  {
    body: 'slippery slope',
    meaning: 'a course of action likely to lead to something bad or disastrous.',
    examples: [
      'He is on the slippery slope towards a life of crime.',
      "You're on a slippery slope once you start lying about your age!",
      'His behavior will lead him down a slippery slope to ruin.',
    ],
  },
  {
    body: 'nickel-and-dime',
    meaning: 'harass (someone) by charging for many trivial items or services.',
    examples: [
      "We don't nickel-and-dime our customers like some vendors that charge extra for every little utility.",
      'Some hotels nickel and dime guests by charging extra fees for toiletries used during their stay.',
    ],
  },
  {
    body: 'be of the opinion (that)',
    meaning: 'to think that something is true',
    examples: [
      'I was firmly of the opinion that we should not give Jackson any more money.',
      "I'd be of the opinion that he's improved quite a bit from it.",
      'I am of the opinion that he will recover.',
    ],
  },
  {
    body: 'it’s only fair',
    meaning: 'used for saying that a particular action is correct or reasonable',
    examples: ['It is only fair to let him go.', 'It’s only fair that I should pay half of the cost.'],
  },
  {
    body: 'warm up to someone/something',
    meaning: 'to begin to like or enjoy someone or something:',
    examples: ["I'm not aloof, it just takes me awhile to warm up to new people.", 'She was not a person who was easy to warm up to.'],
  },
  {
    body: 'test the water(s)',
    meaning:
      'To informally or casually attempt to gauge the reaction of a potential audience or recipient of something, or to try to get an idea of what something will be like before actually doing it. Likened to feeling the temperature of water before getting in.',
    examples: [
      'I want to test the water before I make the proposal at the general meeting. Do you think you can float the idea to the boss and gauge his reaction?',
      'You better test the waters before you fully commit to that plan.',
    ],
  },
  {
    body: 'everybody and their brother',
    meaning: 'Used hyperbolically to express a large number or a majority of people.',
    examples: [
      "I'm so jealous, everybody and their brother is going on a vacation this summer except for me.",
      'I’m so embarrassed. I tripped and fell down the stairs in front of everybody and their brother! ',
    ],
  },
  {
    body: 'there is no question about​/​that',
    meaning: 'used for saying that something is definitely true',
    examples: ['He will win. There is no question about it.', 'There is no question that she has a great voice.'],
  },
  {
    body: 'couldn’t care less',
    meaning: 'to not care at all:',
    examples: [
      "I couldn't care less if he doesn't want to talk to me.",
      "I couldn't care less about the bloody woman.",
      "I used to be proud working for them; now I could care less. I'm just out here for the money.",
    ],
  },
];
