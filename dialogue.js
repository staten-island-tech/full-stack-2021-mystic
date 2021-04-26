//import player name, replace {{name}} w/ name variable
//same thing with LI's name, make it a variable and import it

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
      "{{name}}: Wow, it’s finally the first day of senior year. I can’t believe time has passed by so quickly.",
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
    dialogue: "{{name}}: I’m {{name}}.",
    choices: [{ 1: "Next", answerIndex: 16 }, { 2: "" }],
  },
  {
    eventIndex: 16,
    dialogue: "{{name}}: I’ve never seen you around. Are you new?",
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
    dialogue: "{{name}}: I see. Well, welcome to our school.",
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
    dialogue: "{{name}}: Yeah. Want to start today?",
    choices: [{ 1: "Next", answerIndex: 25 }, { 2: "" }],
  },
  {
    eventIndex: 25,
    dialogue: "{{LI1}}: Sure. After school at Starbucks?",
    choices: [{ 1: "Next", answerIndex: 26 }, { 2: "" }],
  },
  {
    eventIndex: 26,
    dialogue: "{{name}}: Okay. See you then.",
    choices: [{ 1: "Next", answerIndex: 27 }, { 2: "" }],
  },
  {
    eventIndex: 27,
    dialogue: "*3pm*",
    choices: [{ 1: "Next", answerIndex: 28 }, { 2: "" }],
  },
  {
    eventIndex: 28,
    dialogue: "{{LI1}}: Hey {{name}}, do you want to sit here or the back?",
    choices: [
      { 1: "Here is fine.", answerIndex: 29 },
      { 2: "Let's move to the back", answerIndex: 31 },
    ],
  },
  {
    eventIndex: 29,
    dialogue: "{{name}}: I'm fine with sitting here.",
    choices: [{ 1: "Next", answerIndex: 30 }, { 2: "" }],
  },
  {
    eventIndex: 30,
    dialogue: "*You sit down.*",
    choices: [{ 1: "Next", answerIndex: 33 }, { 2: "" }],
  },
  {
    eventIndex: 31,
    dialogue: "{{name}}: I'd prefer to sit in the back.",
    choices: [{ 1: "Next", answerIndex: 32 }, { 2: "" }],
  },
  {
    eventIndex: 32,
    dialogue: "*You move to the back and sit down.*",
    choices: [{ 1: "Next", answerIndex: 33 }, { 2: "" }],
  },
  {
    eventIndex: 33,
    dialogue: "{{name}}: So I was thinking our project could be a video game.",
    choices: [{ 1: "Next", answerIndex: 34 }, { 2: "" }],
  },
  {
    eventIndex: 34,
    dialogue: "{{LI1}}: I’m down for anything!",
    choices: [{ 1: "Next", answerIndex: 35 }, { 2: "" }],
  },
  {
    eventIndex: 35,
    dialogue: "{{name}}: Let’s get started then!",
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
    dialogue: "{{name}}: Yeah. I should get going.",
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
  {
    eventIndex: 40,
    dialogue: "{{name}}: We can meet again tomorrow.",
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
    dialogue: "{{name}}: Yup.",
    choices: [{ 1: "Next", answerIndex: 45 }, { 2: "" }],
  },
  {
    eventIndex: 45,
    dialogue: "{{LI1}}: So how was your day?",
    choices: [{ 1: "It was good!", answerIndex: 46 }, { 2: "Boring. School is such a drag.", answerIndex: 47 }],
  },
  {
    eventIndex: 46,
    dialogue: "{{name}}: It was good! I got all my work done and cleared up my schedule so we could work on this project. How was your day?",
    choices: [{ 1: "Next", answerIndex: 48 }, { 2: "" }],
  },
  {
    eventIndex: 47,
    dialogue: "{{name}}: Boring. School was a total drag. How was your day?",
    choices: [{ 1: "Next", answerIndex: 48 }, { 2: "" }],
  },
  {
    eventIndex: 48,
    dialogue: "{{LI1}}: Ah, it was alright I guess. One of my classes gave me a bit of trouble, but it's okay.",
    choices: [{ 1: "Next", answerIndex: 49 }, { 2: "" }],
  },
  {
    eventIndex: 49,
    dialogue: "{{name}}: Oh, what happened?",
    choices: [{ 1: "Next", answerIndex: 50 }, { 2: "" }],
  },
  {
    eventIndex: 50,
    dialogue: "{{LI1}}: Group projects stress me out! This kid I was working with was so frustrating.",
    choices: [{ 1: "Aw, I hope I’m not stressing you out even more.", answerIndex: 51 }, { 2: "Who are they? I’ll teach them a lesson.", answerIndex: 52, }], 
  },
  {
    eventIndex: 51,
    dialogue: "Nah, don't worry. If anything, working with you is calming. Anyway, let's get back to work.",
    choices: [{ 1: "Next", answerIndex: 53 }, { 2: "" }],
  },
  {
    eventIndex: 52,
    dialogue: "Haha thanks for the offer but it's alright, it's not that serious. Let's get back to work.",
    choices: [{ 1: "Next", answerIndex: 53 }, { 2: "" }],
  },
  {
    eventIndex: 53,
    dialogue: "*You work for a while*",
    choices: [{ 1: "Next", answerIndex: 54 }, { 2: "" }],
  },
  {
    eventIndex: 54,
    dialogue: "{{LI1}}: Y’know, we’ve been at this for a while. Want me to get you something to eat?",
    choices: [{ 1: "How chivalrous of you. I'll have a coffee, please.", answerIndex: 55 }, { 2: "I'm alright, but thanks for the offer!", answerIndex: 58 }],
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
    dialogue: "{{name}}: Thank you so much! So, how did you get into coding?",
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
    dialogue: "{{LI1}}: Ah, well. My mom is a computer engineer, so I kinda got into that as a kid. She always signed me up for bootcamps and whatnot haha. What about you?",
    choices: [{ 1: "Next", answerIndex: 62 }, { 2: "" }],
  },
  {
    eventIndex: 62,
    dialogue: "{{name}}: Oh I just thought it’d be cool to learn about this kind of stuff. I’ve never really liked any type of technology but I really wanted to try something out.",
    choices: [{ 1: "Next", answerIndex: 63 }, { 2: "" }],
  },
  {
    eventIndex: 63,
    dialogue: "{{LI1}}: That’s really cool. Do you like it so far?",
    choices: [{ 1: "Oh, I love it!", answerIndex: 64 }, { 2: "Eh, it's alright.", answerIndex: 65 }],
  },
  {
    eventIndex: 64,
    dialogue: "{{name}}: I'm ",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: 65,
    dialogue: "{{name}}: I was on the fence about it at first, but  you’ve definitely made it more enjoyable.",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },
  {
    eventIndex: ,
    dialogue: "",
    choices: [{ 1: "Next", answerIndex:  }, { 2: "" }],
  },

];
