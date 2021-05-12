//import player name, replace ${name} w/ name variable
//same thing with LI's name, make it a variable and import it

export { gameDialogue };

const gameDialogue = [
  {
    eventIndex: 0,
    dialogue: "*Leaves flutter around, school scene*",
    choices: [{ 1: "Next", answerIndex: 1 }, { 2: "" }],
  },
  {
    eventIndex: 1,
    dialogue: "*Bell rings*",
    choices: [{ 1: "Next", answerIndex: 2 }, { 2: "" }],
  },
  {
    eventIndex: 2,
    dialogue:
      "${name}: Wow, it’s finally the first day of senior year. I can’t believe time has passed by so quickly.",
    choices: [{ 1: "Next", answerIndex: 3 }, { 2: "" }],
  },
  {
    eventIndex: 3,
    dialogue: "Teacher: Welcome everyone, to our first day of school.",
    choices: [{ 1: "Next", answerIndex: 4 }, { 2: "" }],
  },
  {
    eventIndex: 4,
    dialogue:
      "Teacher: So over the summer, I’m sure many of you forgot the basics to JavaScript and CSS.",
    choices: [{ 1: "Next", answerIndex: 5 }, { 2: "" }],
  },
  {
    eventIndex: 5,
    dialogue:
      "Teacher: Let’s have a quick review, and then I’ll assign you all a small project.",
    choices: [{ 1: "Next", answerIndex: 6 }, { 2: "" }],
  },
  {
    eventIndex: 6,
    dialogue: "*BANG*",
    choices: [{ 1: "Next", answerIndex: 7 }, { 2: "" }],
  },
  {
    eventIndex: 7,
    dialogue: "*The door opens*",
    choices: [{ 1: "Next", answerIndex: 8 }, { 2: "" }],
  },
  {
    eventIndex: 8,
    dialogue: "???: Sorry Teacher! Got caught up in the main office.",
    choices: [{ 1: "Next", answerIndex: 9 }, { 2: "" }],
  },
  {
    eventIndex: 9,
    dialogue: "Teacher: No problem. Take a seat wherever you want.",
    choices: [{ 1: "Next", answerIndex: 10 }, { 2: "" }],
  },
  {
    eventIndex: 10,
    dialogue: "???: Thank you.",
    choices: [{ 1: "Next", answerIndex: 11 }, { 2: "" }],
  },
  {
    eventIndex: 11,
    dialogue: "Teacher: Anyways, everyone, please log into your accounts.",
    choices: [{ 1: "Next", answerIndex: 12 }, { 2: "" }],
  },
  {
    eventIndex: 12,
    dialogue: "???: Hey. Did I miss anything?",
    choices: [{ 1: "Next", answerIndex: 13 }, { 2: "" }],
  },
  {
    eventIndex: 13,
    dialogue: "Player: Nope, we just started.",
    choices: [{ 1: "Next", answerIndex: 14 }, { 2: "" }],
  },
  {
    eventIndex: 14,
    dialogue: "???: Ah good. I’m {{LI1}} by the way.",
    choices: [{ 1: "Next", answerIndex: 15 }, { 2: "" }],
  },
  {
    eventIndex: 15,
    dialogue: "${name}: I’m ${name}.",
    choices: [{ 1: "Next", answerIndex: 16 }, { 2: "" }],
  },
  {
    eventIndex: 16,
    dialogue: "${name}: I’ve never seen you around. Are you new?",
    choices: [{ 1: "Next", answerIndex: 17 }, { 2: "" }],
  },
  {
    eventIndex: 17,
    dialogue: "{{LI1}}: Oh yeah. I transferred here for my last year.",
    choices: [{ 1: "Next", answerIndex: 18 }, { 2: "" }],
  },
  {
    eventIndex: 18,
    dialogue: "{{LI1}}: I didn’t really like my old school. Didn’t suit me.",
    choices: [{ 1: "Next", answerIndex: 19 }, { 2: "" }],
  },
  {
    eventIndex: 19,
    dialogue: "${name}: I see. Well, welcome to our school.",
    choices: [{ 1: "Next", answerIndex: 20 }, { 2: "" }],
  },
  {
    eventIndex: 20,
    dialogue: "{{LI1}}: Thank you!",
    choices: [{ 1: "Next", answerIndex: 21 }, { 2: "" }],
  },
  {
    eventIndex: 21,
    dialogue: "Teacher: Okay, so now for a quick partner project….",
    choices: [{ 1: "Next", answerIndex: 22 }, { 2: "" }],
  },
  {
    eventIndex: 22,
    dialogue: "Teacher: Here are the pairings.",
    choices: [{ 1: "Next", answerIndex: 23 }, { 2: "" }],
  },
  {
    eventIndex: 23,
    dialogue: "{{LI1}}: Oh wow. Looks like we’re together.",
    choices: [{ 1: "Next", answerIndex: 24 }, { 2: "" }],
  },
  {
    eventIndex: 24,
    dialogue: "${name}: Yeah. Want to start today?",
    choices: [{ 1: "Next", answerIndex: 25 }, { 2: "" }],
  },
  {
    eventIndex: 25,
    dialogue: "{{LI1}}: Sure. After school at Starbucks?",
    choices: [{ 1: "Next", answerIndex: 26 }, { 2: "" }],
  },
  {
    eventIndex: 26,
    dialogue: "${name}: Okay. See you then.",
    choices: [{ 1: "Next", answerIndex: 27 }, { 2: "" }],
  },
  {
    eventIndex: 27,
    dialogue: "*3pm*",
    choices: [{ 1: "Next", answerIndex: 28 }, { 2: "" }],
  },
  {
    eventIndex: 28,
    dialogue: "{{LI1}}: Hey ${name}, do you want to sit here or the back?",
    choices: [
      { 1: "Here is fine.", answerIndex: 29 },
      { 2: "Let's move to the back", answerIndex: 31 },
    ],
  },
  {
    eventIndex: 29,
    dialogue: "${name}: I'm fine with sitting here.",
    choices: [{ 1: "Next", answerIndex: 30 }, { 2: "" }],
  },
  {
    eventIndex: 30,
    dialogue: "*You sit down.*",
    choices: [{ 1: "Next", answerIndex: 33 }, { 2: "" }],
  },
  {
    eventIndex: 31,
    dialogue: "${name}: I'd prefer to sit in the back.",
    choices: [{ 1: "Next", answerIndex: 32 }, { 2: "" }],
  },
  {
    eventIndex: 32,
    dialogue: "*You move to the back and sit down.*",
    choices: [{ 1: "Next", answerIndex: 33 }, { 2: "" }],
  },
  {
    eventIndex: 33,
    dialogue: "${name}: So I was thinking our project could be a video game.",
    choices: [{ 1: "Next", answerIndex: 34 }, { 2: "" }],
  },
  {
    eventIndex: 34,
    dialogue: "{{LI1}}: I’m down for anything!",
    choices: [{ 1: "Next", answerIndex: 35 }, { 2: "" }],
  },
  {
    eventIndex: 35,
    dialogue: "${name}: Let’s get started then!",
    choices: [{ 1: "Next", answerIndex: 36 }, { 2: "" }],
  },
  {
    eventIndex: 36,
    dialogue: "*Two hours pass*",
    choices: [{ 1: "Next", answerIndex: 37 }, { 2: "" }],
  },
  {
    eventIndex: 37,
    dialogue: "{{LI1}}: Think it’s time to call it a day?",
    choices: [{ 1: "Next", answerIndex: 38 }, { 2: "" }],
  },
  {
    eventIndex: 38,
    dialogue: "${name}: Yeah. I should get going.",
    choices: [{ 1: "Next", answerIndex: 39 }, { 2: "" }],
  },
  {
    eventIndex: 39,
    dialogue: "{{LI1}}: Should we meet again tomorrow or through text?",
    choices: [
      { 1: "We can meet tomorrow.", answerIndex: 40 },
      { 2: "I prefer through text." },
    ],
  },
  //branch 1, choice 1
  {
    eventIndex: 40,
    dialogue: "${name}: We can meet again tomorrow.",
    choices: [{ 1: "Next", answerIndex: 41 }, { 2: "" }],
  },
  {
    eventIndex: 41,
    dialogue: "{{LI1}}: Sounds good! see you then.",
    choices: [{ 1: "Next", answerIndex: 42 }, { 2: "" }],
  },
  {
    eventIndex: 42,
    dialogue: "*Next day, at the cafe*",
    choices: [{ 1: "Next", answerIndex: 43 }, { 2: "" }],
  },
  {
    eventIndex: 43,
    dialogue: "{{LI1}}: Hey! Same place as yesterday?",
    choices: [{ 1: "Next", answerIndex: 44 }, { 2: "" }],
  },
  {
    eventIndex: 44,
    dialogue: "${name}: Yup.",
    choices: [{ 1: "Next", answerIndex: 45 }, { 2: "" }],
  },
  {
    eventIndex: 45,
    dialogue: "{{LI1}}: So how was your day?",
    choices: [
      { 1: "It was good!", answerIndex: 46 },
      { 2: "Boring. School is such a drag.", answerIndex: 47 },
    ],
  },
  {
    eventIndex: 46,
    dialogue:
      "${name}: It was good! I got all my work done and cleared up my schedule so we could work on this project. How was your day?",
    choices: [{ 1: "Next", answerIndex: 48 }, { 2: "" }],
  },
  {
    eventIndex: 47,
    dialogue: "${name}: Boring. School was a total drag. How was your day?",
    choices: [{ 1: "Next", answerIndex: 48 }, { 2: "" }],
  },
  {
    eventIndex: 48,
    dialogue:
      "{{LI1}}: Ah, it was alright I guess. One of my classes gave me a bit of trouble, but it's okay.",
    choices: [{ 1: "Next", answerIndex: 49 }, { 2: "" }],
  },
  {
    eventIndex: 49,
    dialogue: "${name}: Oh, what happened?",
    choices: [{ 1: "Next", answerIndex: 50 }, { 2: "" }],
  },
  {
    eventIndex: 50,
    dialogue:
      "{{LI1}}: Group projects stress me out! This kid I was working with was so frustrating.",
    choices: [
      { 1: "Aw, I hope I’m not stressing you out even more.", answerIndex: 51 },
      { 2: "Who are they? I’ll teach them a lesson.", answerIndex: 52 },
    ],
  },
  {
    eventIndex: 51,
    dialogue:
      "Nah, don't worry. If anything, working with you is calming. Anyway, let's get back to work.",
    choices: [{ 1: "Next", answerIndex: 53 }, { 2: "" }],
  },
  {
    eventIndex: 52,
    dialogue:
      "Haha thanks for the offer but it's alright, it's not that serious. Let's get back to work.",
    choices: [{ 1: "Next", answerIndex: 53 }, { 2: "" }],
  },
  {
    eventIndex: 53,
    dialogue: "*You work for a while*",
    choices: [{ 1: "Next", answerIndex: 54 }, { 2: "" }],
  },
  {
    eventIndex: 54,
    dialogue:
      "{{LI1}}: Y’know, we’ve been at this for a while. Want me to get you something to eat?",
    choices: [
      {
        1: "How chivalrous of you. I'll have a coffee, please.",
        answerIndex: 55,
      },
      { 2: "I'm alright, but thanks for the offer!", answerIndex: 58 },
    ],
  },
  {
    eventIndex: 55,
    dialogue: "*{{LI1}}leaves and returns*",
    choices: [{ 1: "Next", answerIndex: 56 }, { 2: "" }],
  },
  {
    eventIndex: 56,
    dialogue: "{{LI1}}: Here you go. One piping hot coffee.",
    choices: [{ 1: "Next", answerIndex: 57 }, { 2: "" }],
  },
  {
    eventIndex: 57,
    dialogue: "${name}: Thank you so much! So, how did you get into coding?",
    choices: [{ 1: "Next", answerIndex: 61 }, { 2: "" }],
  },
  {
    eventIndex: 58,
    dialogue: "*{{LI1}}leaves and returns*",
    choices: [{ 1: "Next", answerIndex: 59 }, { 2: "" }],
  },
  {
    eventIndex: 59,
    dialogue: "{{LI1}}: I'm back and I got myself a sandwich.",
    choices: [{ 1: "Next", answerIndex: 60 }, { 2: "" }],
  },
  {
    eventIndex: 60,
    dialogue: "Nice. So, how did you get into coding?",
    choices: [{ 1: "Next", answerIndex: 61 }, { 2: "" }],
  },
  {
    eventIndex: 61,
    dialogue:
      "{{LI1}}: Ah, well. My mom is a computer engineer, so I kinda got into that as a kid. She always signed me up for bootcamps and whatnot haha. What about you?",
    choices: [{ 1: "Next", answerIndex: 62 }, { 2: "" }],
  },
  {
    eventIndex: 62,
    dialogue:
      "${name}: Oh I just thought it’d be cool to learn about this kind of stuff. I’ve never really liked any type of technology but I really wanted to try something out.",
    choices: [{ 1: "Next", answerIndex: 63 }, { 2: "" }],
  },
  {
    eventIndex: 63,
    dialogue: "{{LI1}}: That’s really cool. Do you like it so far?",
    choices: [
      { 1: "Oh, I love it!", answerIndex: 64 },
      { 2: "Eh, it's alright.", answerIndex: 65 },
    ],
  },
  {
    eventIndex: 64,
    dialogue:
      "${name}: I don't just like it, I love it! Plus, getting to spend more time with you is always a plus.",
    choices: [{ 1: "Next", answerIndex: 66 }, { 2: "" }],
  },
  {
    eventIndex: 65,
    dialogue:
      "${name}: I was on the fence about it at first, but  you’ve definitely made it more enjoyable.",
    choices: [{ 1: "Next", answerIndex: 66 }, { 2: "" }],
  },
  {
    eventIndex: 66,
    dialogue:
      "{{LI1}}: Haha thanks, I like working with you too! We should meet up the day after tomorrow to continue.",
    choices: [{ 1: "Next", answerIndex: 67 }, { 2: "" }],
  },
  {
    eventIndex: 68,
    dialogue: "*next day at school*",
    choices: [{ 1: "Next", answerIndex: 69 }, { 2: "" }],
  },
  {
    eventIndex: 69,
    dialogue:
      "${name}: Hm.. so English is over, I have Calculus, and then Comp Sci… and then I’m free to go!",
    choices: [{ 1: "Next", answerIndex: 70 }, { 2: "" }],
  },
  {
    eventIndex: 70,
    dialogue: "???: Hey, you’re [name] right?",
    choices: [{ 1: "Next", answerIndex: 71 }, { 2: "" }],
  },
  {
    eventIndex: 71,
    dialogue: "${name}: Hey, yep.",
    choices: [{ 1: "Next", answerIndex: 72 }, { 2: "" }],
  },
  {
    eventIndex: 72,
    dialogue:
      "???: I’m LI2, I saw you in English and I was wondering if I could meet up with you some time? I really need help with the homework.",
    choices: [{ 1: "Next", answerIndex: 73 }, { 2: "" }],
  },
  {
    eventIndex: 73,
    dialogue: "${name}: Yeah of course! I’m free right now if you need help?",
    choices: [{ 1: "Next", answerIndex: 74 }, { 2: "" }],
  },
  {
    eventIndex: 74,
    dialogue: "LI2: OH that’s perfect. Thank you so much!",
    choices: [{ 1: "Next", answerIndex: 75 }, { 2: "" }],
  },
  {
    eventIndex: 75,
    dialogue: "${name}: Of course—",
    choices: [{ 1: "Next", answerIndex: 76 }, { 2: "" }],
  },
  {
    eventIndex: 76,
    dialogue: "{{LI1}}: Hey. Who is this?",
    choices: [{ 1: "Next", answerIndex: 77 }, { 2: "" }],
  },
  {
    eventIndex: 77,
    dialogue:
      "${name}: This is just LI2, they just need help with English homework.",
    choices: [{ 1: "Next", answerIndex: 78 }, { 2: "" }],
  },
  {
    eventIndex: 78,
    dialogue:
      "{{LI1}}: Ah, sorry LI2. ${name} and I need to work with our project.",
    choices: [{ 1: "Next", answerIndex: 79 }, { 2: "" }],
  },
  {
    eventIndex: 79,
    dialogue: "${name}: But I thought we weren’t meeting up until later—",
    choices: [{ 1: "Next", answerIndex: 80 }, { 2: "" }],
  },
  {
    eventIndex: 80,
    dialogue: "{{LI1}}: No, we should meet up now.",
    choices: [{ 1: "Next", answerIndex: 81 }, { 2: "" }],
  },
  {
    eventIndex: 81,
    dialogue: "${name}: I’m sorry I can’t, I promised LI2 I’d help them.",
    choices: [{ 1: "Next", answerIndex: 82 }, { 2: "" }],
  },
  {
    eventIndex: 82,
    dialogue: "LI2: Yeah I’m really sorry. I really need help with this.",
    choices: [{ 1: "Next", answerIndex: 83 }, { 2: "" }],
  },
  {
    eventIndex: 83,
    dialogue:
      "{{LI1}}: Are you sure? What is this, Honors English? Shouldn’t be that hard. I’m sure there’s a brain in there somewhere.",
    choices: [{ 1: "Next", answerIndex: 84 }, { 2: "" }],
  },
  {
    eventIndex: 84,
    dialogue: "LI2: Dude, what the heck? Can you back off?",
    choices: [{ 1: "Next", answerIndex: 85 }, { 2: "" }],
  },
  {
    eventIndex: 85,
    dialogue:
      "{{LI1}}: Why don’t you do so first? ${name} and I have an important project that we work on. They can’t focus on your homework.",
    choices: [
      {
        1: "Hey wait a minute. I did tell LI2 I can help, and we weren’t even supposed to meet until tomorrow. There’s time before our due date. We’ll continue tomorrow.",
        answerIndex: 86,
      },
      {
        2: "Hey wait a minute. I did tell LI2 I can help, and we weren’t even supposed to meet until tomorrow. There’s time before our due date. We’ll continue tomorrow.",
        answerIndex: 111,
      },
    ],
  },
  //branch 2, choice 1
  {
    eventIndex: 86,
    dialogue: "{{LI1}}: Fine. See you.",
    choices: [{ 1: "Next", answerIndex: 87 }, { 2: "" }],
  },
  {
    eventIndex: 87,
    dialogue: "*leaves*",
    choices: [{ 1: "Next", answerIndex: 88 }, { 2: "" }],
  },
  {
    eventIndex: 88,
    dialogue: "LI2: Jesus. What’s their deal?",
    choices: [{ 1: "Next", answerIndex: 89 }, { 2: "" }],
  },
  {
    eventIndex: 89,
    dialogue: "${name}: I have no idea. Let’s get going?",
    choices: [{ 1: "Next", answerIndex: 90 }, { 2: "" }],
  },
  {
    eventIndex: 90,
    dialogue: "LI2: Sure!",
    choices: [{ 1: "Next", answerIndex: 91 }, { 2: "" }],
  },
  {
    eventIndex: 91,
    dialogue: "*goes to cafe*",
    choices: [{ 1: "Next", answerIndex: 92 }, { 2: "" }],
  },
  {
    eventIndex: 92,
    dialogue: "LI2: So I’m not too sure about this paper I’ve written so far.",
    choices: [{ 1: "Next", answerIndex: 93 }, { 2: "" }],
  },
  {
    eventIndex: 93,
    dialogue:
      "${name}: Hm… the introduction is alright, but the rest of it is wordy and contains a lot of purple prose. You should get more to the point.",
    choices: [{ 1: "Next", answerIndex: 94 }, { 2: "" }],
  },
  {
    eventIndex: 94,
    dialogue: "LI2: Like this? Should I take this out?",
    choices: [{ 1: "Next", answerIndex: 95 }, { 2: "" }],
  },
  {
    eventIndex: 95,
    dialogue: "${name}: Yeah, that’s fine.",
    choices: [{ 1: "Next", answerIndex: 96 }, { 2: "" }],
  },
  {
    eventIndex: 96,
    dialogue: "LI2: Alright, I’m getting the hang of this now.",
    choices: [{ 1: "Next", answerIndex: 97 }, { 2: "" }],
  },
  {
    eventIndex: 97,
    dialogue:
      "${name}: You actually aren’t a bad writer, do you write in your free time?",
    choices: [{ 1: "Next", answerIndex: 98 }, { 2: "" }],
  },
  {
    eventIndex: 98,
    dialogue:
      "LI2: No, that’s really nice of you though. I do write comics when I’m free though, so maybe that’s why?",
    choices: [{ 1: "Next", answerIndex: 99 }, { 2: "" }],
  },
  {
    eventIndex: 99,
    dialogue:
      "${name}: Wait really? You can draw? Are you producing these whole comics by yourself?",
    choices: [{ 1: "Next", answerIndex: 100 }, { 2: "" }],
  },
  {
    eventIndex: 100,
    dialogue: "LI2: Yeah, haha. I could show you some right now if you want.",
    choices: [{ 1: "Next", answerIndex: 101 }, { 2: "" }],
  },
  {
    eventIndex: 101,
    dialogue: "${name}: Sure!",
    choices: [{ 1: "Next", answerIndex: 102 }, { 2: "" }],
  },
  {
    eventIndex: 102,
    dialogue: "*shows work*",
    choices: [{ 1: "Next", answerIndex: 103 }, { 2: "" }],
  },
  {
    eventIndex: 103,
    dialogue: "${name}: Wow… this is really beautiful. You’re really talented.",
    choices: [{ 1: "Next", answerIndex: 104 }, { 2: "" }],
  },
  {
    eventIndex: 104,
    dialogue: "LI2: Haha thank you!",
    choices: [{ 1: "Next", answerIndex: 105 }, { 2: "" }],
  },
  {
    eventIndex: 105,
    dialogue: "*flips page*",
    choices: [{ 1: "Next", answerIndex: 106 }, { 2: "" }],
  },
  {
    eventIndex: 106,
    dialogue:
      "${name}: This character looks really familiar. I feel like I’ve seen them before.",
    choices: [{ 1: "Next", answerIndex: 107 }, { 2: "" }],
  },
  {
    eventIndex: 107,
    dialogue: "LI2: Do they? Ah maybe, I just thought of them in my head.",
    choices: [{ 1: "Next", answerIndex: 108 }, { 2: "" }],
  },
  {
    eventIndex: 108,
    dialogue:
      "${name}: (they look like {{LI1}}.... was I too harsh on them before?)",
    choices: [{ 1: "Next", answerIndex: 109 }, { 2: "" }],
  },
  {
    eventIndex: 109,
    dialogue: "LI2: Hey, what’s wrong? You look a little sad.",
    choices: [{ 1: "Next", answerIndex: 110 }, { 2: "" }],
  },
  {
    eventIndex: 110,
    dialogue: "${name}: (Crap!) Oh it’s nothing! Should we get back to work?",
    choices: [{ 1: "Next", answerIndex: 111 }, { 2: "" }],
  },
  //branch 2, choice 2
  {
    eventIndex: 111,
    dialogue:
      "Hey {{LI1}}, relax. It’s fine, we can work on it today. LI2, how about I give you my number so you can text me?",
    choices: [{ 1: "Next", answerIndex: 112 }, { 2: "" }],
  },
  {
    eventIndex: 112,
    dialogue: "LI2: Alright… see you later ${name}.",
    choices: [{ 1: "Next", answerIndex: 113 }, { 2: "" }],
  },
  {
    eventIndex: 113,
    dialogue: "*leaves*",
    choices: [{ 1: "Next", answerIndex: 114 }, { 2: "" }],
  },
  {
    eventIndex: 114,
    dialogue: "{{LI1}}: Should we get going then?",
    choices: [{ 1: "Next", answerIndex: 115 }, { 2: "" }],
  },
  {
    eventIndex: 115,
    dialogue: "${name}: Okay….",
    choices: [{ 1: "Next", answerIndex: 116 }, { 2: "" }],
  },
  {
    eventIndex: 116,
    dialogue: "${name}: (What the heck just happened?)",
    choices: [{ 1: "Next", answerIndex: 117 }, { 2: "" }],
  },
];
