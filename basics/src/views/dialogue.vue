//import player name, replace ${this.name} w/ name variable //same thing with
LI's name, make it a variable and import it
<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      gameDialogue: [],
      name: "",
      Li1:"Natsume",
      Li2:"Aoi"
    };
  },
  mounted() {
    this.name = this.$route.params.data.name;
    this.gameDialogue = [
      {
        eventIndex: 0,
        dialogue: `*Leaves flutter around, school scene*`,
        choices: [{ statements: `Next`, answerIndex: 1 }],
      },
      {
        eventIndex: 1,
        dialogue: `*Bell rings*`,
        choices: [{ statements: `Next`, answerIndex: 2 }],
      },
      {
        eventIndex: 2,
        dialogue: `${this.name}: Wow, it’s finally the first day of senior year. I can’t believe time has passed by so quickly.`,
        choices: [{ statements: `Next`, answerIndex: 3 }],
      },
      {
        eventIndex: 3,
        dialogue: `Teacher: Welcome everyone, to our first day of school.`,
        choices: [{ statements: `Next`, answerIndex: 4 }],
      },
      {
        eventIndex: 4,
        dialogue: `Teacher: So over the summer, I’m sure many of you forgot the basics to JavaScript and CSS.`,
        choices: [{ statements: `Next`, answerIndex: 5 }],
      },
      {
        eventIndex: 5,
        dialogue: `Teacher: Let’s have a quick review, and then I’ll assign you all a small project.`,
        choices: [{ statements: `Next`, answerIndex: 6 }],
      },
      {
        eventIndex: 6,
        dialogue: `*BANG*`,
        choices: [{ statements: `Next`, answerIndex: 7 }],
      },
      {
        eventIndex: 7,
        dialogue: `*The door opens*`,
        choices: [{ statements: `Next`, answerIndex: 8 }],
      },
      {
        eventIndex: 8,
        dialogue: `???: Sorry Teacher! Got caught up in the main office.`,
        choices: [{ statements: `Next`, answerIndex: 9 }],
      },
      {
        eventIndex: 9,
        dialogue: `Teacher: No problem. Take a seat wherever you want.`,
        choices: [{ statements: `Next`, answerIndex: 10 }],
      },
      {
        eventIndex: 10,
        dialogue: `???: Thank you.`,
        choices: [{ statements: `Next`, answerIndex: 11 }],
      },
      {
        eventIndex: 11,
        dialogue: `Teacher: Anyways, everyone, please log into your accounts.`,
        choices: [{ statements: `Next`, answerIndex: 12 }],
      },
      {
        eventIndex: 12,
        dialogue: `???: Hey. Did I miss anything?`,
        choices: [{ statements: `Next`, answerIndex: 13 }],
      },
      {
        eventIndex: 13,
        dialogue: `${this.name}: Nope, we just started.`,
        choices: [{ statements: `Next`, answerIndex: 14 }],
      },
      {
        eventIndex: 14,
        dialogue: `???: Ah good. I’m ${this.Li1} by the way.`,
        choices: [{ statements: `Next`, answerIndex: 15 }],
      },
      {
        eventIndex: 15,
        dialogue: `${this.name}: I’m ${this.name}.`,
        choices: [{ statements: `Next`, answerIndex: 16 }],
      },
      {
        eventIndex: 16,
        dialogue: `${this.name}: I’ve never seen you around. Are you new?`,
        choices: [{ statements: `Next`, answerIndex: 17 }],
      },
      {
        eventIndex: 17,
        dialogue: `${this.Li1}: Oh yeah. I transferred here for my last year.`,
        choices: [{ statements: `Next`, answerIndex: 18 }],
      },
      {
        eventIndex: 18,
        dialogue: `${this.Li1}: I didn’t really like my old school. Didn’t suit me.`,
        choices: [{ statements: `Next`, answerIndex: 19 }],
      },
      {
        eventIndex: 19,
        dialogue: `${this.name}: I see. Well, welcome to our school.`,
        choices: [{ statements: `Next`, answerIndex: 20 }],
      },
      {
        eventIndex: 20,
        dialogue: `${this.Li1}: Thank you!`,
        choices: [{ statements: `Next`, answerIndex: 21 }],
      },
      {
        eventIndex: 21,
        dialogue: `Teacher: Okay, so now for a quick partner project….`,
        choices: [{ statements: `Next`, answerIndex: 22 }],
      },
      {
        eventIndex: 22,
        dialogue: `Teacher: Here are the pairings.`,
        choices: [{ statements: `Next`, answerIndex: 23 }],
      },
      {
        eventIndex: 23,
        dialogue: `${this.Li1}: Oh wow. Looks like we’re together.`,
        choices: [{ statements: `Next`, answerIndex: 24 }],
      },
      {
        eventIndex: 24,
        dialogue: `${this.name}: Yeah. Want to start today?`,
        choices: [{ statements: `Next`, answerIndex: 25 }],
      },
      {
        eventIndex: 25,
        dialogue: `${this.Li1}: Sure. After school at Starbucks?`,
        choices: [{ statements: `Next`, answerIndex: 26 }],
      },
      {
        eventIndex: 26,
        dialogue: `${this.name}: Okay. See you then.`,
        choices: [{ statements: `Next`, answerIndex: 27 }],
      },
      {
        eventIndex: 27,
        dialogue: `*3pm*`,
        choices: [{ statements: `Next`, answerIndex: 28 }],
      },
      {
        eventIndex: 28,
        dialogue: `${this.Li1}: Hey ${this.name}, do you want to sit here or the back?`,
        choices: [
          { statements: `Here is fine.`, answerIndex: 29 },
          { statements: `Let's move to the back`, answerIndex: 31 },
        ],
      },
      {
        eventIndex: 29,
        dialogue: `${this.name}: I'm fine with sitting here.`,
        choices: [{ statements: `Next`, answerIndex: 30 }],
      },
      {
        eventIndex: 30,
        dialogue: `*You sit down.*`,
        choices: [{ statements: `Next`, answerIndex: 33 }],
      },
      {
        eventIndex: 31,
        dialogue: `${this.name}: I'd prefer to sit in the back.`,
        choices: [{ statements: `Next`, answerIndex: 32 }],
      },
      {
        eventIndex: 32,
        dialogue: `*You move to the back and sit down.*`,
        choices: [{ statements: `Next`, answerIndex: 33 }],
      },
      {
        eventIndex: 33,
        dialogue: `${this.name}: So I was thinking our project could be a video game.`,
        choices: [{ statements: `Next`, answerIndex: 34 }],
      },
      {
        eventIndex: 34,
        dialogue: `${this.Li1}: I’m down for anything!`,
        choices: [{ statements: `Next`, answerIndex: 35 }],
      },
      {
        eventIndex: 35,
        dialogue: `${this.name}: Let’s get started then!`,
        choices: [{ statements: `Next`, answerIndex: 36 }],
      },
      {
        eventIndex: 36,
        dialogue: `*Two hours pass*`,
        choices: [{ statements: `Next`, answerIndex: 37 }],
      },
      {
        eventIndex: 37,
        dialogue: `${this.Li1}: Think it’s time to call it a day?`,
        choices: [{ statements: `Next`, answerIndex: 38 }],
      },
      {
        eventIndex: 38,
        dialogue: `${this.name}: Yeah. I should get going.`,
        choices: [{ statements: `Next`, answerIndex: 39 }],
      },
      {
        eventIndex: 39,
        dialogue: `${this.Li1}: Should we meet again tomorrow or through text?`,
        choices: [
          { statements: `We can meet tomorrow.`, answerIndex: 40 },
          { statements: `I prefer through text.`, answerIndex: 100 },
        ],
      },
      //branch 1, choice 1
      {
        eventIndex: 40,
        dialogue: `${this.name}: We can meet again tomorrow.`,
        choices: [{ statements: `Next`, answerIndex: 41 }],
      },
      {
        eventIndex: 41,
        dialogue: `${this.Li1}: Sounds good! see you then.`,
        choices: [{ statements: `Next`, answerIndex: 42 }],
      },
      {
        eventIndex: 42,
        dialogue: `*Next day, at the cafe*`,
        choices: [{ statements: `Next`, answerIndex: 43 }],
      },
      {
        eventIndex: 43,
        dialogue: `${this.Li1}: Hey! Same place as yesterday?`,
        choices: [{ statements: `Next`, answerIndex: 44 }],
      },
      {
        eventIndex: 44,
        dialogue: `${this.name}: Yup.`,
        choices: [{ statements: `Next`, answerIndex: 45 }],
      },
      {
        eventIndex: 45,
        dialogue: `${this.Li1}: So how was your day?`,
        choices: [
          { statements: `It was good!`, answerIndex: 46 },
          { statements: `Boring. School is such a drag.`, answerIndex: 47 },
        ],
      },
      {
        eventIndex: 46,
        dialogue: `${this.name}: It was good! I got all my work done and cleared up my schedule so we could work on this project. How was your day?`,
        choices: [{ statements: `Next`, answerIndex: 48 }],
      },
      {
        eventIndex: 47,
        dialogue: `${this.name}: Boring. School was a total drag. How was your day?`,
        choices: [{ statements: `Next`, answerIndex: 48 }],
      },
      {
        eventIndex: 48,
        dialogue: `${this.Li1}: Ah, it was alright I guess. One of my classes gave me a bit of trouble, but it's okay.`,
        choices: [{ statements: `Next`, answerIndex: 49 }],
      },
      {
        eventIndex: 49,
        dialogue: `${this.name}: Oh, what happened?`,
        choices: [{ statements: `Next`, answerIndex: 50 }],
      },
      {
        eventIndex: 50,
        dialogue: `${this.Li1}: Group projects stress me out! This kid I was working with was so frustrating.`,
        choices: [
          {
            statements: `Aw, I hope I’m not stressing you out even more.`,
            answerIndex: 51,
          },
          {
            statements: `Who are they? I’ll teach them a lesson.`,
            answerIndex: 52,
          },
        ],
      },
      {
        eventIndex: 51,
        dialogue: `Nah, don't worry. If anything, working with you is calming. Anyway, let's get back to work.`,
        choices: [{ statements: `Next`, answerIndex: 53 }],
      },
      {
        eventIndex: 52,
        dialogue: `Haha thanks for the offer but it's alright, it's not that serious. Let's get back to work.`,
        choices: [{ statements: `Next`, answerIndex: 53 }],
      },
      {
        eventIndex: 53,
        dialogue: `*You work for a while*`,
        choices: [{ statements: `Next`, answerIndex: 54 }],
      },
      {
        eventIndex: 54,
        dialogue: `${this.Li1}: Y’know, we’ve been at this for a while. Want me to get you something to eat?`,
        choices: [
          {
            statements: `How chivalrous of you. I'll have a coffee, please.`,
            answerIndex: 55,
          },
          {
            statements: `I'm alright, but thanks for the offer!`,
            answerIndex: 58,
          },
        ],
      },
      {
        eventIndex: 55,
        dialogue: `*${this.Li1}leaves and returns*`,
        choices: [{ statements: `Next`, answerIndex: 56 }],
      },
      {
        eventIndex: 56,
        dialogue: `${this.Li1}: Here you go. One piping hot coffee.`,
        choices: [{ statements: `Next`, answerIndex: 57 }],
      },
      {
        eventIndex: 57,
        dialogue: `${this.name}: Thank you so much! So, how did you get into coding?`,
        choices: [{ statements: `Next`, answerIndex: 61 }],
      },
      {
        eventIndex: 58,
        dialogue: `*${this.Li1}leaves and returns*`,
        choices: [{ statements: `Next`, answerIndex: 59 }],
      },
      {
        eventIndex: 59,
        dialogue: `${this.Li1}: I'm back and I got myself a sandwich.`,
        choices: [{ statements: `Next`, answerIndex: 60 }],
      },
      {
        eventIndex: 60,
        dialogue: `Nice. So, how did you get into coding?`,
        choices: [{ statements: `Next`, answerIndex: 61 }],
      },
      {
        eventIndex: 61,
        dialogue: `${this.Li1}: Ah, well. My mom is a computer engineer, so I kinda got into that as a kid. She always signed me up for bootcamps and whatnot haha. What about you?`,
        choices: [{ statements: `Next`, answerIndex: 62 }],
      },
      {
        eventIndex: 62,
        dialogue: `${this.name}: Oh I just thought it’d be cool to learn about this kind of stuff. I’ve never really liked any type of technology but I really wanted to try something out.`,
        choices: [{ statements: `Next`, answerIndex: 63 }],
      },
      {
        eventIndex: 63,
        dialogue: `${this.Li1}: That’s really cool. Do you like it so far?`,
        choices: [
          { statements: `Oh, I love it!`, answerIndex: 64 },
          { statements: `Eh, it's alright.`, answerIndex: 65 },
        ],
      },
      {
        eventIndex: 64,
        dialogue: `${this.name}: I don't just like it, I love it! Plus, getting to spend more time with you is always a plus.`,
        choices: [{ statements: `Next`, answerIndex: 66 }],
      },
      {
        eventIndex: 65,
        dialogue: `${this.name}: I was on the fence about it at first, but  you’ve definitely made it more enjoyable.`,
        choices: [{ statements: `Next`, answerIndex: 66 }],
      },
      {
        eventIndex: 66,
        dialogue: `${this.Li1}: Haha thanks, I like working with you too! We should meet up the day after tomorrow to continue.`,
        choices: [{ statements: `Next`, answerIndex: 67 }],
      },
      {
        eventIndex: 68,
        dialogue: `*next day at school*`,
        choices: [{ statements: `Next`, answerIndex: 69 }],
      },
      {
        eventIndex: 69,
        dialogue: `${this.name}: Hm.. so English is over, I have Calculus, and then Comp Sci… and then I’m free to go!`,
        choices: [{ statements: `Next`, answerIndex: 70 }],
      },
      {
        eventIndex: 70,
        dialogue: `???: Hey, you’re ${this.name} right?`,
        choices: [{ statements: `Next`, answerIndex: 71 }],
      },
      {
        eventIndex: 71,
        dialogue: `${this.name}: Hey, yep.`,
        choices: [{ statements: `Next`, answerIndex: 72 }],
      },
      {
        eventIndex: 72,
        dialogue: `???: I’m ${this.Li2}, I saw you in English and I was wondering if I could meet up with you some time? I really need help with the homework.`,
        choices: [{ statements: `Next`, answerIndex: 73 }],
      },
      {
        eventIndex: 73,
        dialogue: `${this.name}: Yeah of course! I’m free right now if you need help?`,
        choices: [{ statements: `Next`, answerIndex: 74 }],
      },
      {
        eventIndex: 74,
        dialogue: `${this.Li1}: OH that’s perfect. Thank you so much!`,
        choices: [{ statements: `Next`, answerIndex: 75 }],
      },
      {
        eventIndex: 75,
        dialogue: `${this.name}: Of course—`,
        choices: [{ statements: `Next`, answerIndex: 76 }],
      },
      {
        eventIndex: 76,
        dialogue: `${this.Li1}: Hey. Who is this?`,
        choices: [{ statements: `Next`, answerIndex: 77 }],
      },
      {
        eventIndex: 77,
        dialogue: `${this.name}: This is just ${this.Li2}, they just need help with English homework.`,
        choices: [{ statements: `Next`, answerIndex: 78 }],
      },
      {
        eventIndex: 78,
        dialogue: `${this.Li1}: Ah, sorry ${this.Li2}. ${this.name} and I need to work with our project.`,
        choices: [{ statements: `Next`, answerIndex: 79 }],
      },
      {
        eventIndex: 79,
        dialogue: `${this.name}: But I thought we weren’t meeting up until later—`,
        choices: [{ statements: `Next`, answerIndex: 80 }],
      },
      {
        eventIndex: 80,
        dialogue: `${this.Li1}: No, we should meet up now.`,
        choices: [{ statements: `Next`, answerIndex: 81 }],
      },
      {
        eventIndex: 81,
        dialogue: `${this.name}: I’m sorry I can’t, I promised ${this.Li2} I’d help them.`,
        choices: [{ statements: `Next`, answerIndex: 82 }],
      },
      {
        eventIndex: 82,
        dialogue: `${this.Li1}: Yeah I’m really sorry. I really need help with this.`,
        choices: [{ statements: `Next`, answerIndex: 83 }],
      },
      {
        eventIndex: 83,
        dialogue: `${this.Li1}: Are you sure? What is this, Honors English? Shouldn’t be that hard. I’m sure there’s a brain in there somewhere.`,
        choices: [{ statements: `Next`, answerIndex: 84 }],
      },
      {
        eventIndex: 84,
        dialogue: `${this.Li1}: Dude, what the heck? Can you back off?`,
        choices: [{ statements: `Next`, answerIndex: 85 }],
      },
      {
        eventIndex: 85,
        dialogue: `${this.Li1}: Why don’t you do so first? ${this.name} and I have an important project that we work on. They can’t focus on your homework.`,
        choices: [
          {
            statements: `Hey wait a minute. I did tell LI2 I can help, and we weren’t even supposed to meet until tomorrow. There’s time before our due date. We’ll continue tomorrow.`,
            answerIndex: 86,
          },

          {
            statements: `Hey wait a minute. I did tell LI2 I can help, and we weren’t even supposed to meet until tomorrow. There’s time before our due date. We’ll continue tomorrow.`,
            answerIndex: 111,
          },
        ],
      },
      //branch 2, choice 1
      {
        eventIndex: 86,
        dialogue: `${this.Li1}: Fine. See you.`,
        choices: [{ statements: `Next`, answerIndex: 87 }],
      },
      {
        eventIndex: 87,
        dialogue: `*leaves*`,
        choices: [{ statements: `Next`, answerIndex: 88 }],
      },
      {
        eventIndex: 88,
        dialogue: `${this.Li1}: Jesus. What’s their deal?`,
        choices: [{ statements: `Next`, answerIndex: 89 }],
      },
      {
        eventIndex: 89,
        dialogue: `${this.name}: I have no idea. Let’s get going?`,
        choices: [{ statements: `Next`, answerIndex: 90 }],
      },
      {
        eventIndex: 90,
        dialogue: `${this.Li1}: Sure!`,
        choices: [{ statements: `Next`, answerIndex: 91 }],
      },
      {
        eventIndex: 91,
        dialogue: `*goes to cafe*`,
        choices: [{ statements: `Next`, answerIndex: 92 }],
      },
      {
        eventIndex: 92,
        dialogue: `${this.Li1}: So I’m not too sure about this paper I’ve written so far.`,
        choices: [{ statements: `Next`, answerIndex: 93 }],
      },
      {
        eventIndex: 93,
        dialogue: `${this.name}: Hm… the introduction is alright, but the rest of it is wordy and contains a lot of purple prose. You should get more to the point.`,
        choices: [{ statements: `Next`, answerIndex: 94 }],
      },
      {
        eventIndex: 94,
        dialogue: `${this.Li1}: Like this? Should I take this out?`,
        choices: [{ statements: `Next`, answerIndex: 95 }],
      },
      {
        eventIndex: 95,
        dialogue: `${this.name}: Yeah, that’s fine.`,
        choices: [{ statements: `Next`, answerIndex: 96 }],
      },
      {
        eventIndex: 96,
        dialogue: `${this.Li1}: Alright, I’m getting the hang of this now.`,
        choices: [{ statements: `Next`, answerIndex: 97 }],
      },
      {
        eventIndex: 97,
        dialogue: `${this.name}: You actually aren’t a bad writer, do you write in your free time?`,
        choices: [{ statements: `Next`, answerIndex: 98 }],
      },
      {
        eventIndex: 98,
        dialogue: `${this.Li1}: No, that’s really nice of you though. I do write comics when I’m free though, so maybe that’s why?`,
        choices: [{ statements: `Next`, answerIndex: 99 }],
      },
      {
        eventIndex: 99,
        dialogue: `${this.name}: Wait really? You can draw? Are you producing these whole comics by yourself?`,
        choices: [{ statements: `Next`, answerIndex: 100 }],
      },
      {
        eventIndex: 100,
        dialogue: `${this.Li1}: Yeah, haha. I could show you some right now if you want.`,
        choices: [{ statements: `Next`, answerIndex: 101 }],
      },
      {
        eventIndex: 101,
        dialogue: `${this.name}: Sure!`,
        choices: [{ statements: `Next`, answerIndex: 102 }],
      },
      {
        eventIndex: 102,
        dialogue: `*shows work*`,
        choices: [{ statements: `Next`, answerIndex: 103 }],
      },
      {
        eventIndex: 103,
        dialogue: `${this.name}: Wow… this is really beautiful. You’re really talented.`,
        choices: [{ statements: `Next`, answerIndex: 104 }],
      },
      {
        eventIndex: 104,
        dialogue: `${this.Li1}: Haha thank you!`,
        choices: [{ statements: `Next`, answerIndex: 105 }],
      },
      {
        eventIndex: 105,
        dialogue: `*flips page*`,
        choices: [{ statements: `Next`, answerIndex: 106 }],
      },
      {
        eventIndex: 106,
        dialogue: `${this.name}: This character looks really familiar. I feel like I’ve seen them before.`,
        choices: [{ statements: `Next`, answerIndex: 107 }],
      },
      {
        eventIndex: 107,
        dialogue: `${this.Li1}: Do they? Ah maybe, I just thought of them in my head.`,
        choices: [{ statements: `Next`, answerIndex: 108 }],
      },
      {
        eventIndex: 108,
        dialogue: `${this.name}: (they look like ${this.Li1}.... was I too harsh on them before?)`,
        choices: [{ statements: `Next`, answerIndex: 109 }],
      },
      {
        eventIndex: 109,
        dialogue: `${this.Li1}: Hey, what’s wrong? You look a little sad.`,
        choices: [{ statements: `Next`, answerIndex: 110 }],
      },
      {
        eventIndex: 110,
        dialogue: `${this.name}: (Crap!) Oh it’s nothing! Should we get back to work?`,
        choices: [{ statements: `Next`, answerIndex: 111 }],
      },
      //branch 2, choice 2
      {
        eventIndex: 111,
        dialogue: `Hey ${this.Li1}, relax. It’s fine, we can work on it today. ${this.Li2}, how about I give you my number so you can text me?`,
        choices: [{ statements: `Next`, answerIndex: 112 }],
      },
      {
        eventIndex: 112,
        dialogue: `${this.Li1}: Alright… see you later ${this.name}.`,
        choices: [{ statements: `Next`, answerIndex: 113 }],
      },
      {
        eventIndex: 113,
        dialogue: `*leaves*`,
        choices: [{ statements: `Next`, answerIndex: 114 }],
      },
      {
        eventIndex: 114,
        dialogue: `${this.Li1}: Should we get going then?`,
        choices: [{ statements: `Next`, answerIndex: 115 }],
      },
      {
        eventIndex: 115,
        dialogue: `${this.name}: Okay….`,
        choices: [{ statements: `Next`, answerIndex: 116 }],
      },
      {
        eventIndex: 116,
        dialogue: `${this.name}: (What the heck just happened?)`,
        choices: [{ statements: `Next`, answerIndex: 117 }],
      },
      {
        eventIndex: 117,
        dialogue: `Natsume: Want to go somewhere else besides the cafe today?`,
        choices: [{ statements: `Next`, answerIndex: 118 }],
      },
      {
        eventIndex: 118,
        dialogue: `${this.name}: Where?`,
        choices: [{ statements: `Next`, answerIndex: 119 }],
      },
      {
        eventIndex: 119,
        dialogue: `Natsume: We can work at my house. I live close and I can make you dinner.`,
        choices: [{ statements: `Next`, answerIndex: 120 }],
      },
      {
        eventIndex: 120,
        dialogue: `${this.name}: Oh sure.`,
        choices: [{ statements: `Next`, answerIndex: 121 }],
      },
      {
        eventIndex: 121,
        dialogue: `Natsume: Great! Let’s walk this way.`,
        choices: [{ statements: `Next`, answerIndex: 122 }],
      },
      {
        eventIndex: 122,
        dialogue: `*You arrive at the front of Natsume's house*`,
        choices: [{ statements: `Next`, answerIndex: 123 }],
      },
      {
        eventIndex: 123,
        dialogue: `${this.name}: Wow… your house is kind of big.`,
        choices: [{ statements: `Next`, answerIndex: 124 }],
      },
      {
        eventIndex: 124,
        dialogue: `Natsume: Haha yeah, let’s go inside.`,
        choices: [{ statements: `Next`, answerIndex: 125 }],
      },
      {
        eventIndex: 125,
        dialogue: `${this.name}: Jesus, it’s even bigger inside. What do your parents do for a living?`,
        choices: [{ statements: `Next`, answerIndex: 126 }],
      },
      {
        eventIndex: 126,
        dialogue: `Natsume: My mom is a lawyer and my dad is the CEO of some big company. They’re never home though.`,
        choices: [{ statements: `Next`, answerIndex: 127 }],
      },
      {
        eventIndex: 127,
        dialogue: `${this.name}: Oh I see. Do you have any siblings?`,
        choices: [{ statements: `Next`, answerIndex: 128 }],
      },
      {
        eventIndex: 128,
        dialogue: `Natsume: Nope. Just me in this big, lonely house.`,
        choices: [{ statements: `Next`, answerIndex: 129 }],
      },
      {
        eventIndex: 129,
        dialogue: `Natsume: Let’s go to my room.`,
        choices: [{ statements: `Next`, answerIndex: 130 }],
      },
      {
        eventIndex: 130,
        dialogue: `*You arrive in Natsume's room*`,
        choices: [
          {
            statements: `Look at their pictures.`,
            answerIndex: 131,
          },
          {
            statements: `Look at their desk.`,
            answerIndex: 133,
          },
        ],
      },
      {
        eventIndex: 131,
        dialogue: `${this.name}: (There’s no photos of their family…)`,
        choices: [{ statements: `Next`, answerIndex: 132 }],
      },
      {
        eventIndex: 132,
        dialogue: `${this.name}: (It’s just photos of nature.)`,
        choices: [{ statements: `Next`, answerIndex: 135 }],
      },
      {
        eventIndex: 133,
        dialogue: `${this.name}: (There’s not much on their desk.)`,
        choices: [{ statements: `Next`, answerIndex: 134 }],
      },
      {
        eventIndex: 134,
        dialogue: `${this.name}: (Only stationary…)`,
        choices: [{ statements: `Next`, answerIndex: 135 }],
      },
      {
        eventIndex: 135,
        dialogue: `Natsume: Anything interest you?`,
        choices: [{ statements: `Next`, answerIndex: 136 }],
      },
      {
        eventIndex: 136,
        dialogue: `${this.name}: Your room is so meticulously clean. `,
        choices: [{ statements: `Next`, answerIndex: 137 }],
      },
      {
        eventIndex: 137,
        dialogue: `Natsume: Thanks haha. I just like to be organized.`,
        choices: [{ statements: `Next`, answerIndex: 138 }],
      },
      {
        eventIndex: 138,
        dialogue: `${this.name}: You’re way neater than me at least. My room is full of random things.`,
        choices: [{ statements: `Next`, answerIndex: 139 }],
      },
      {
        eventIndex: 139,
        dialogue: `Natsume: Oh? Like what?`,
        choices: [
          {
            statements: `I have a lot of sports equipment laying around.`,
            answerIndex: 140,
          },
          {
            statements: `A lot of musical instruments.`,
            answerIndex: 141,
          },
        ],
      },
      {
        eventIndex: 140,
        dialogue: `Natsume: Oh? What do you play?`,
        choices: [
          {
            statements: `Soccer! I’ve been playing for ten years.`,
            answerIndex: 142,
          },
          {
            statements: `Ballet. It’s my favorite thing to do.`,
            answerIndex: 142,
          },
        ],
      },
      {
        eventIndex: 141,
        dialogue: `Natsume: You play music??`,
        choices: [
          {
            statements: `Yeah I do a lot of musical covers.`,
            answerIndex: 142,
          },
          {
            statements: `Mhm, I play competitively.`,
            answerIndex: 142,
          },
        ],
      },
      {
        eventIndex: 142,
        dialogue: `Natsume: Wow, that’s so cool! What’s it like? I want to know more about you.`,
        choices: [{ statements: `Next`, answerIndex: 143 }],
      },
      {
        eventIndex: 143,
        dialogue: `*You talk about your hobby for a while.*`,
        choices: [{ statements: `Next`, answerIndex: 144 }],
      },
      {
        eventIndex: 144,
        dialogue: `${this.name}: Man, we’ve been talking for a while, huh? Do you think it's time to finally start the project?`,
        choices: [{ statements: `Next`, answerIndex: 145 }],
      },
      {
        eventIndex: 145,
        dialogue: `Natsume: Bwahaha yeah. Let’s get to work.`,
        choices: [{ statements: `Next`, answerIndex: 146 }],
      },
      {
        eventIndex: 146,
        dialogue: `*You work on the project for a while.*`,
        choices: [{ statements: `Next`, answerIndex: 147 }],
      },
      {
        eventIndex: 147,
        dialogue: `${this.name}: Ahhh, we’re almost done.`,
        choices: [{ statements: `Next`, answerIndex: 148 }],
      },
      {
        eventIndex: 148,
        dialogue: `Natsume: Yeah, honestly I’m tired. `,
        choices: [{ statements: `Next`, answerIndex: 149 }],
      },
      {
        eventIndex: 149,
        dialogue: `${this.name}: Me too. We can finish another day.`,
        choices: [{ statements: `Next`, answerIndex: 150 }],
      },
      {
        eventIndex: 150,
        dialogue: `Natsume: Alright. You hungry? I can make dinner.`,
        choices: [{ statements: `Next`, answerIndex: 151 }],
      },
      {
        eventIndex: 151,
        dialogue: `${this.name}: What can you make?`,
        choices: [{ statements: `Next`, answerIndex: 152 }],
      },
      {
        eventIndex: 152,
        dialogue: `Natsume: Anything you want! I’m a hella good chef.`,
        choices: [{ statements: `Next`, answerIndex: 153 }],
      },
      {
        eventIndex: 153,
        dialogue: `${this.name}: OKAY then, make me your best dish.`,
        choices: [{ statements: `Next`, answerIndex: 154 }],
      },
      {
        eventIndex: 154,
        dialogue: `Natsume: Can do!`,
        choices: [{ statements: `Next`, answerIndex: 155 }],
      },
      {
        eventIndex: 155,
        dialogue: `*Thirty minutes pass.*`,
        choices: [{ statements: `Next`, answerIndex: 156 }],
      },
      {
        eventIndex: 156,
        dialogue: `${this.name}: Wow, this smells amazing.`,
        choices: [{ statements: `Next`, answerIndex: 157 }],
      },
      {
        eventIndex: 157,
        dialogue: `Natsume: Of course it does, I made it.`,
        choices: [{ statements: `Next`, answerIndex: 158 }],
      },
      {
        eventIndex: 158,
        dialogue: `${this.name}: Haha, this is great! How can I thank you? I feel like you’ve been so nice to me.`,
        choices: [{ statements: `Next`, answerIndex: 159 }],
      },
      {
        eventIndex: 159,
        dialogue: `Natsume: Don’t worry about it. I want to treat you.`,
        choices: [{ statements: `Next`, answerIndex: 160 }],
      },
      {
        eventIndex: 160,
        dialogue: `${this.name}: Oh...thank you!`,
        choices: [{ statements: `Next`, answerIndex: 161 }],
      },
      {
        eventIndex: 161,
        dialogue: `*Next day, at the lockers.*`,
        choices: [{ statements: `Next`, answerIndex: 162 }],
      },
      {
        eventIndex: 162,
        dialogue: `Natsume: Hey ${this.name}!`,
        choices: [{ statements: `Next`, answerIndex: 163 }],
      },
      {
        eventIndex: 163,
        dialogue: `${this.name}: Oh hey! What’s up?`,
        choices: [{ statements: `Next`, answerIndex: 164 }],
      },
      {
        eventIndex: 164,
        dialogue: `Natsume: Wanna work on the project today after school? You can come over again if you’d like.`,
        choices: [{ statements: `Next`, answerIndex: 165 }],
      },
      {
        eventIndex: 165,
        dialogue: `${this.name}: Sure.`,
        choices: [{ statements: `Next`, answerIndex: 166 }],
      },
      {
        eventIndex: 166,
        dialogue: `Natsume: Great, see you then!`,
        choices: [{ statements: `Next`, answerIndex: 167 }],
      },
      {
        eventIndex: 167,
        dialogue: `*Later that afternoon.*`,
        choices: [{ statements: `Next`, answerIndex: 168 }],
      },
      {
        eventIndex: 168,
        dialogue: `${this.name}: We’re almost done with our project.`,
        choices: [{ statements: `Next`, answerIndex: 169 }],
      },
      {
        eventIndex: 169,
        dialogue: `Natsume: Thank god, this thing is taking so long.`,
        choices: [{ statements: `Next`, answerIndex: 170 }],
      },
      {
        eventIndex: 170,
        dialogue: `${this.name}: I don’t think it’s that bad!`,
        choices: [
          {
            statements: `I mean, at least I got to meet you.`,
            answerIndex: 171,
          },
          {
            statements: `I mean, at least you got to meet me.`,
            answerIndex: 171,
          },
        ],
      },
      {
        eventIndex: 171,
        dialogue: `Natsume: Haha, you’re cute.`,
        choices: [{ statements: `Next`, answerIndex: 172 }],
      },
      {
        eventIndex: 172,
        dialogue: `${this.name}: I know.`,
        choices: [{ statements: `Next`, answerIndex: 173 }],
      },
      {
        eventIndex: 173,
        dialogue: `Natsume: *laughs*`,
        choices: [{ statements: `Next`, answerIndex: 174 }],
      },
      {
        eventIndex: 174,
        dialogue: `Natsume: Well, we are done with our work.`,
        choices: [{ statements: `Next`, answerIndex: 175 }],
      },
      {
        eventIndex: 175,
        dialogue: `Natsume: It was nice working with you.`,
        choices: [{ statements: `Next`, answerIndex: 176 }],
      },
      {
        eventIndex: 176,
        dialogue: `${this.name}: Same here. Think we can get a 100?`,
        choices: [{ statements: `Next`, answerIndex: 177 }],
      },
      {
        eventIndex: 177,
        dialogue: `Natsume: Totally, and if not, you can seduce the teacher with your pretty face.`,
        choices: [{ statements: `Next`, answerIndex: 178 }],
      },
      {
        eventIndex: 178,
        dialogue: `${this.name}: You think I’m pretty?`,
        choices: [{ statements: `Next`, answerIndex: 179 }],
      },
      {
        eventIndex: 179,
        dialogue: `Natsume:...maybe.`,
        choices: [
          {
            statements: `Aw, thanks.`,
            answerIndex: 180,
          },
          {
            statements: `Well, you’re pretty cute too.`,
            answerIndex: 180,
          },
        ],
      },
      {
        eventIndex: 180,
        dialogue: `Natsume: *smiles*`,
        choices: [{ statements: `Next`, answerIndex: 181 }],
      },
      {
        eventIndex: 181,
        dialogue: `${this.name}: I should get going now. It is pretty late.`,
        choices: [{ statements: `Next`, answerIndex: 182 }],
      },
      {
        eventIndex: 182,
        dialogue: `Natsume: Wait. Stay for dinner.`,
        choices: [{ statements: `Next`, answerIndex: 183 }],
      },
      {
        eventIndex: 183,
        dialogue: `${this.name}: You sure? I don’t want to disrupt.`,
        choices: [{ statements: `Next`, answerIndex: 184 }],
      },
      {
        eventIndex: 184,
        dialogue: `Natsume: No, don’t worry. You aren’t interrupting anything.`,
        choices: [{ statements: `Next`, answerIndex: 185 }],
      },
      {
        eventIndex: 185,
        dialogue: `${this.name}: Hehe, thanks.`,
        choices: [{ statements: `Next`, answerIndex: 186 }],
      },
      {
        eventIndex: 186,
        dialogue: `Natsume: Yup. Here’s your food.`,
        choices: [{ statements: `Next`, answerIndex: 187 }],
      },
      {
        eventIndex: 187,
        dialogue: `*You eat your meals.*`,
        choices: [{ statements: `Next`, answerIndex: 188 }],
      },
      {
        eventIndex: 188,
        dialogue: `${this.name}: Wow. Thank you for the meal! I really should get going before my parents start to worry.`,
        choices: [{ statements: `Next`, answerIndex: 189 }],
      },
      {
        eventIndex: 189,
        dialogue: `Natsume: Yeah of course! Where do you live? I’ll take you home.`,
        choices: [{ statements: `Next`, answerIndex: 190 }],
      },
      {
        eventIndex: 190,
        dialogue: `${this.name}: Oh I don’t live too far. About 10 blocks from here?`,
        choices: [{ statements: `Next`, answerIndex: 191 }],
      },
      {
        eventIndex: 191,
        dialogue: `Natsume: I’ll walk you.`,
        choices: [{ statements: `Next`, answerIndex: 192 }],
      },
      {
        eventIndex: 192,
        dialogue: `${this.name}: Are you sure? It might be dangerous coming back alone.`,
        choices: [{ statements: `Next`, answerIndex: 193 }],
      },
      {
        eventIndex: 193,
        dialogue: `Natsume: Really, I insist.`,
        choices: [{ statements: `Next`, answerIndex: 194 }],
      },
      {
        eventIndex: 194,
        dialogue: `${this.name}: Okay. Thanks.`,
        choices: [{ statements: `Next`, answerIndex: 195 }],
      },
      {
        eventIndex: 195,
        dialogue: `Natsume: So tell me more about yourself.`,
        choices: [
          {
            statements: `Talk about family.`,
            answerIndex: 196,
          },
          {
            statements: `Talk about life goals.`,
            answerIndex: 201,
          },
        ],
      },
      {
        eventIndex: 196,
        dialogue: `${this.name}: Hm. Well. I am an only child. I live with my mom and my grandparents. My dad works overseas in Japan.`,
        choices: [{ statements: `Next`, answerIndex: 197 }],
      },
      {
        eventIndex: 197,
        dialogue: `Natsume: Damn. Japan?? That’s so far. What does he do?`,
        choices: [{ statements: `Next`, answerIndex: 198 }],
      },
      {
        eventIndex: 198,
        dialogue: `${this.name}: He’s a businessman! But he should be back soon. My mom is a teacher at an elementary school.`,
        choices: [{ statements: `Next`, answerIndex: 199 }],
      },
      {
        eventIndex: 199,
        dialogue: `Natsume: Aw that’s so cool.`,
        choices: [{ statements: `Next`, answerIndex: 200 }],
      },
      {
        eventIndex: 200,
        dialogue: `${this.name}: Thanks.`,
        choices: [{ statements: `Next`, answerIndex: 209 }],
      },
      {
        eventIndex: 201,
        dialogue: `${this.name}: Hm. Well I want to be an engineer when I grow up.`,
        choices: [{ statements: `Next`, answerIndex: 202 }],
      },
      {
        eventIndex: 202,
        dialogue: `Natsume: Really, what kind?`,
        choices: [{ statements: `Next`, answerIndex: 203 }],
      },
      {
        eventIndex: 203,
        dialogue: `${this.name}: Mechanical engineering probably. I just think it’s really interesting.`,
        choices: [{ statements: `Next`, answerIndex: 204 }],
      },
      {
        eventIndex: 204,
        dialogue: `Natsume: That’s so cool!`,
        choices: [{ statements: `Next`, answerIndex: 205 }],
      },
      {
        eventIndex: 205,
        dialogue: `${this.name}: What about you?`,
        choices: [{ statements: `Next`, answerIndex: 206 }],
      },
      {
        eventIndex: 206,
        dialogue: `Natsume: Ah. I’m not too sure yet. There isn’t really much I want to pursue.`,
        choices: [{ statements: `Next`, answerIndex: 207 }],
      },
      {
        eventIndex: 207,
        dialogue: `${this.name}: Oh okay, well you still have time.`,
        choices: [{ statements: `Next`, answerIndex: 208 }],
      },
      {
        eventIndex: 208,
        dialogue: `Natsume: Yeah.`,
        choices: [{ statements: `Next`, answerIndex: 209 }],
      },
      {
        eventIndex: 209,
        dialogue: `${this.name}: Oh we’re here. Thanks for walking me.`,
        choices: [{ statements: `Next`, answerIndex: 210 }],
      },
      {
        eventIndex: 210,
        dialogue: `Natsume: Of course! Oh, and also… can I ask you something?`,
        choices: [{ statements: `Next`, answerIndex: 211 }],
      },
      {
        eventIndex: 211,
        dialogue: `${this.name}: Sure.`,
        choices: [{ statements: `Next`, answerIndex: 212 }],
      },
      {
        eventIndex: 212,
        dialogue: `Natsume: I was wondering… if you’d like to go out with me sometime?`,
        choices: [
          {
            statements: `Yeah of course.`,
            answerIndex: 213,
          },
          {
            statements: `Sure...`,
            answerIndex: 213,
          },
        ],
      },
      {
        eventIndex: 213,
        dialogue: `Natsume: Really?? That makes me so happy. I’m glad. Well, I’ll talk to you later. See you tomorrow.`,
        choices: [{ statements: `Next`, answerIndex: 214 }],
      },
      {
        eventIndex: 214,
        dialogue: `Natsume: Really?? That makes me so happy. I’m glad. Well, I’ll talk to you later. See you tomorrow.`,
        choices: [{ statements: `Next`, answerIndex: 215 }],
      },
      {
        eventIndex: 215,
        dialogue: `${this.name}: See you.`,
        choices: [{ statements: `Next`, answerIndex: 216 }],
      },
      {
        eventIndex: 216,
        dialogue: ``,
        choices: [{ statements: `Next`, answerIndex: 217 }],
      },
      {
        eventIndex: 217,
        dialogue: `*The next day.*`,
        choices: [{ statements: `Next`, answerIndex: 218 }],
      },
      {
        eventIndex: 218,
        dialogue: `Natsume: Hey!`,
        choices: [{ statements: `Next`, answerIndex: 219 }],
      },
      {
        eventIndex: 219,
        dialogue: `${this.name}: Hey.`,
        choices: [{ statements: `Next`, answerIndex: 220 }],
      },
      {
        eventIndex: 219,
        dialogue: `Natsume: Wanna get food with me after school? My treat.`,
        choices: [{ statements: `Next`, answerIndex: 220 }],
      },
      {
        eventIndex: 220,
        dialogue: `${this.name}: Sure. Where do you want to eat?`,
        choices: [{ statements: `Next`, answerIndex: 221 }],
      },
      {
        eventIndex: 221,
        dialogue: `Natsume: Whatever you want.`,
        choices: [
          {
            statements: `Kinda craving Japanese food right now.`,
            answerIndex: 222,
          },
          {
            statements: `I really want to eat Chinese food!`,
            answerIndex: 222,
          },
        ],
      },
      {
        eventIndex: 222,
        dialogue: `*Bell rings*`,
        choices: [{ statements: `Next`, answerIndex: 223 }],
      },
      {
        eventIndex: 223,
        dialogue: `Natsume: That sounds great! I’ll meet with you later.`,
        choices: [{ statements: `Next`, answerIndex: 224 }],
      },
      {
        eventIndex: 224,
        dialogue: `${this.name}: Alright, I'll get to class.`,
        choices: [{ statements: `Next`, answerIndex: 225 }],
      },
      {
        eventIndex: 225,
        dialogue: `*In class*`,
        choices: [{ statements: `Next`, answerIndex: 226 }],
      },
      {
        eventIndex: 226,
        dialogue: `*You hear whispering around you*`,
        choices: [{ statements: `Next`, answerIndex: 227 }],
      },
      {
        eventIndex: 227,
        dialogue: `${this.name}: Why is everyone looking at me…?`,
        choices: [{ statements: `Next`, answerIndex: 228 }],
      },
      {
        eventIndex: 228,
        dialogue: `Student 1: ${this.name}!`,
        choices: [{ statements: `Next`, answerIndex: 229 }],
      },
      {
        eventIndex: 229,
        dialogue: `${this.name}: What’s up?`,
        choices: [{ statements: `Next`, answerIndex: 230 }],
      },
      {
        eventIndex: 230,
        dialogue: `Student 1: I heard you were going out with Natsume. Is that true?`,
        choices: [{ statements: `Next`, answerIndex: 231 }],
      },
      {
        eventIndex: 231,
        dialogue: `${this.name}: Why does that matter to you?`,
        choices: [{ statements: `Next`, answerIndex: 232 }],
      },
      {
        eventIndex: 232,
        dialogue: `Student 1: Jeez, no need to get defensive. I just wanted to know if you heard the stories about Natsume's issues.`,
        choices: [{ statements: `Next`, answerIndex: 233 }],
      },
      {
        eventIndex: 233,
        dialogue: `${this.name}: Issues..? What are you talking about?`,
        choices: [{ statements: `Next`, answerIndex: 234 }],
      },
      {
        eventIndex: 234,
        dialogue: `Student 1: Don’t worry about it! I’m happy for you guys. Hope you don’t break up soon.`,
        choices: [{ statements: `Next`, answerIndex: 235 }],
      },
      {
        eventIndex: 235,
        dialogue: `${this.name}:...`,
        choices: [{ statements: `Next`, answerIndex: 236 }],
      },
      {
        eventIndex: 236,
        dialogue: `*Later, at restaurant.*`,
        choices: [{ statements: `Next`, answerIndex: 237 }],
      },
      {
        eventIndex: 237,
        dialogue: `*Natsume is sitting at a table.*`,
        choices: [{ statements: `Next`, answerIndex: 238 }],
      },
      {
        eventIndex: 238,
        dialogue: `Natsume: ${this.name}! You’re here!`,
        choices: [{ statements: `Next`, answerIndex: 239 }],
      },
      {
        eventIndex: 240,
        dialogue: `${this.name}: Hey. How was your day?`,
        choices: [{ statements: `Next`, answerIndex: 241 }],
      },
      {
        eventIndex: 241,
        dialogue: `Natsume: It was great! My classes were pretty light and I got to see you. How was yours?`,
        choices: [{ statements: `Next`, answerIndex: 242 }],
      },
      {
        eventIndex: 242,
        dialogue: `${this.name}: Ahh it was alright.`,
        choices: [{ statements: `Next`, answerIndex: 243 }],
      },
      {
        eventIndex: 243,
        dialogue: `Natsume: Only alright?`,
        choices: [{ statements: `Next`, answerIndex: 244 }],
      },
      {
        eventIndex: 244,
        dialogue: `${this.name}: Yeah well…`,
        choices: [
          {
            statements: `Tell them what people are saying.`,
            answerIndex: 245,
          },
          {
            statements: `Lie.`,
            answerIndex: 245,
          },
        ],
      },
      {
        eventIndex: 245,
        dialogue: `Whoops! That's the end of this path for now, come back another time to find out how this story ends!`,
        choices: [{ statements: `Play Again?`, answerIndex: 0 }],
      },
      // End of storyline 1
      {
        eventIndex: 246,
        dialogue: `*Later that day*`,
        choices: [{ statements: `Next`, answerIndex: 247 }],
      },
      {
        eventIndex: 247,
        dialogue: `*Your phone beeps. "YOU HAVE ONE NEW MESSAGE" flashes on the screen.*`,
        choices: [{ statements: `Next`, answerIndex: 248 }],
      },
      {
        eventIndex: 248,
        dialogue: `${this.name}: Oh, someone texted me?`,
        choices: [{ statements: `Next`, answerIndex: 249 }],
      },
      {
        eventIndex: 249,
        dialogue: `${this.name}: Hm… I don’t recognize this number`,
        choices: [{ statements: `Next`, answerIndex: 250 }],
      },
      {
        eventIndex: 250,
        dialogue: `*You call the number.*`,
        choices: [{ statements: `Next`, answerIndex: 251 }],
      },
      {
        eventIndex: 251,
        dialogue: `${this.name}: Hello.. Who is this?`,
        choices: [{ statements: `Next`, answerIndex: 252 }],
      },
      {
        eventIndex: 252,
        dialogue: `???: Hey! It’s me, Natsume.`,
        choices: [{ statements: `Next`, answerIndex: 253 }],
      },
      {
        eventIndex: 253,
        dialogue: `${this.name}: Oh hey! What’s up?`,
        choices: [{ statements: `Next`, answerIndex: 254 }],
      },
      {
        eventIndex: 254,
        dialogue: `LI1: I was wondering if you could help me with my homework. I'm a little lost and I could use a little help.`,
        choices: [{ statements: `Next`, answerIndex: 255 }],
      },
      {
        eventIndex: 255,
        dialogue: `${this.name}: Yeah, of course! What are you working on?`,
        choices: [{ statements: `Next`, answerIndex: 256 }],
      },
      {
        eventIndex: 256,
        dialogue: `Natsume: English homework right now. My writing skills are… not good.`,
        choices: [{ statements: `Next`, answerIndex: 257 }],
      },
      {
        eventIndex: 257,
        dialogue: `${this.name}: Aw, I doubt it. Here, send it over.`,
        choices: [{ statements: `Next`, answerIndex: 258 }],
      },
      {
        eventIndex: 258,
        dialogue: `${this.name}: Hm..., I see a few grammatical mistakes, and I don't know if this sentence makes sense here. Do you mind if we facetime? I think it'll make things a lot easier.`,
        choices: [{ statements: `Next`, answerIndex: 259 }],
      },
      {
        eventIndex: 259,
        dialogue: `Natsume: Um... sure!`,
        choices: [{ statements: `Next`, answerIndex: 260 }],
      },
      {
        eventIndex: 260,
        dialogue: `*You facetime each other and look through Natsume's paper. They explain their prompt and try to walk you through their thought process.*`,
        choices: [{ statements: `Next`, answerIndex: 261 }],
      },
      {
        eventIndex: 261,
        dialogue: `${this.name}: ...look, I'd love to help you, but you kinda caught me at a bad time, and there is a LOT to go through here. Do you mind working on this a little bit on your own and coming back to me?`,
        choices: [{ statements: `Next`, answerIndex: 262 }],
      },
      {
        eventIndex: 262,
        dialogue: `Natsume: Yeah, I guess I could.`,
        choices: [{ statements: `Next`, answerIndex: 263 }],
      },
      {
        eventIndex: 263,
        dialogue: `*They abruptly hang up on you.*`,
        choices: [{ statements: `Next`, answerIndex: 264 }],
      },
      {
        eventIndex: 264,
        dialogue: `(Wow, that was kinda rude.)`,
        choices: [{ statements: `Next`, answerIndex: 265 }],
      },
      {
        eventIndex: 265,
        dialogue: `*Though you told Natsume to call you back later, you hear nothing else for the rest of the night. You get a little worried, since you were supposed to work with them on your project.*`,
        choices: [{ statements: `Next`, answerIndex: 266 }],
      },
      {
        eventIndex: 266,
        dialogue: `*Next day, at school.*`,
        choices: [{ statements: `Next`, answerIndex: 267 }],
      },
      {
        eventIndex: 267,
        dialogue: `${this.name}: Hey Natsume! I've need talk to you about our project.`,
        choices: [{ statements: `Next`, answerIndex: 268 }],
      },
      {
        eventIndex: 268,
        dialogue: `*Natsume walks past you, ignoring you completely.*`,
        choices: [{ statements: `Next`, answerIndex: 269 }],
      },
      {
        eventIndex: 269,
        dialogue: `${this.name}: Hey, are you seriously walking away from me right now?`,
        choices: [{ statements: `Next`, answerIndex: 270 }],
      },
      {
        eventIndex: 270,
        dialogue: `*You try to follow Natsume but they quickly disappear into a sea of students. Frustrated, you give up and walk to your next class.*`,
        choices: [{ statements: `Next`, answerIndex: 271 }],
      },
      {
        eventIndex: 271,
        dialogue: `*Next day at school, you show up early to your Computer Science class to try to catch Natsume on their way in.*`,
        choices: [{ statements: `Next`, answerIndex: 272 }],
      },
      {
        eventIndex: 272,
        dialogue: `*You watch the rest of your class come in, but there's no signs of Natsume.*`,
        choices: [{ statements: `Next`, answerIndex: 273 }],
      },
      {
        eventIndex: 273,
        dialogue: `${this.name}: Teacher? Did Natsume say if they were coming in today?`,
        choices: [{ statements: `Next`, answerIndex: 274 }],
      },
      {
        eventIndex: 274,
        dialogue: `Teacher: Natsume? I don't see them on my list. Either you have the wrong student, or they transferred out.`,
        choices: [{ statements: `Next`, answerIndex: 275 }],
      },
      {
        eventIndex: 275,
        dialogue: `*What? There's no way this is right. Over the next few days you scan the hallways but see no signs of Natsume anywhere. Nobody you talk to seems to remember them either. Are you going crazy?`,
        choices: [{ statements: `Next`, answerIndex: 276 }],
      },
      {
        eventIndex: 276,
        dialogue: `BAD ENDING. Maybe you should go back and check out the other paths?`,
        choices: [{ statements: `Play Again?`, answerIndex: 0 }],
      },
    ];
    let data = {
      gameDialogue: this.gameDialogue,
      name: this.name,
    };
    this.$router.push({ name: "Interface", params: { data } });
    
  },
};
</script>

<style lang="scss" scoped></style>
