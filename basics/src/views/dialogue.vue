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
