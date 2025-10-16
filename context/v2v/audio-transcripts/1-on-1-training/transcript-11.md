Transcribed with Cockatoo


Yeah So yeah, give me a bit about your background tell me a bit about where you're from that way I know who I'm talking to and I can talk to you rather than at you so So basically, let's see this. Basically, so actually just I have it downloaded and then if I open it that way. 

Okay, cool. 

Okay, so three years ago, I was working at Palo Alto Networks. I was initially hired to be a customer success engineer and because I had just gotten my bachelor's in cloud computing and I was hired in a I'm with 18 other academy members, and we were put in the Prisma Cloud Academy, which is like a six -week training course at Palo Alto, their internal enablement team put together. And so I was the top student in that academy. And then the team that was putting the training together actually offered me a position on that team. So I got a full, yeah, I got a full, I got, I've worked hard. I got a full -time, I earned a full -time position at Palo Alto Networks, kind of my first, first stint in cybersecurity. 

And that was about four years ago. And I supported Prism Cloud and XOR. And near the end of me working there, Chad GPT came out. And, you know, technical enablement. At the time, I knew exactly how it could be helpful for learning and education. I was in education at the time. 

And I was in technology. So technical enablement. this is the, what's the most technically enabling tool, the freaking AI, right? That can answer all those questions. Yeah, and that's another thing, that's another thing, the fear was there as well, there was fear, but for me it was fear of missing out, because I felt like it was gonna be a big wave, it was big, I didn't feel like it, I knew it was gonna be a big wave. Actually, hold on, let me click, let me see here. 

There should be a button here I can click, yeah. 

Okay, hi, yeah. 

So I basically heard two stories. I heard people were starting companies with AI, which I understood that to mean they were basically getting all the questions answered that they needed, like all the hurdles, all the legal issues, everything, just all the paperwork. And then people were also writing code with AI. 

Wow. 

If it can, because I asked the question, what's the most valuable thing that AI can write, if it can write? And the answer to me was code, because code is, objectionable, it's not subjective, like an essay is. You can write me the perfect essay, I can find you some editor who will find something to criticize about it. Versus code, it's functional, you can write a perfect function versus a not so efficient function, but all things being equal, it either does the job or doesn't do the job. And so you can verify, it's objective, verifiably objective. And so that's what I set out to do back then. 

With GPT 3 .5, I created a Slackbot. I created a Slackbot. I basically created a multiplayer GPT. something that still doesn't quite exist yet. Because in Slack, you know, anyone can start a thread and then anyone can see the thread. And then so anyone can also read what the AI says to you and then can also reply and ask. 

So it's like multiplayer, right? And you can customize for each channel it's in. Like I made a sales enablement channel. And so I gave it a persona with the channel's system message, adopt the persona of sales enablement specialist inside our security field, focusing on managed security services providers and palliative networks products, your audience is a team of sales professionals, blah, blah, blah. Prospective client is asking, why did you go with our solution over Zscaler? Sure, David, here are some common questions we encounter. 

And then some talking points for the sales enablement specialist, for answering the customer's question. 

Yeah. 

Absolutely, absolutely. Yeah, and I'll tell you exactly how it's going to work. It's just missing a few more pieces, so glasses. Imagine when, let's go with hair stylists. I use this analogy all the time. Very soon, everyone's going to have those glasses that have a camera in them, and people are going to be basically live streaming like to Twitch their entire lives, basically. 

And there'll be a viewership of two. It'll be everyone watching their own stream and then their AI. it as well. Then what's going to happen is that's when you're going to get hours and hours and hours of cutting hair, a hairstylist cutting hair. Then he's going to start annotating that data. Or not even just annotating, he's going to have that data as raw data. 

He's a good hairstylist, so it's recorded how to cut a good haircut, right? Bada bing, bada boom, that's training data that we didn't have before we had the recording platform. So you can't skip the step. You can't have an AI that can help you learn to cut hair with your glasses, you know, augmented reality superimposed like the right angle or the right clipper or detecting that you've picked up the wrong clipper or the wrong size and saying, uh -uh, they've asked for this haircut and this is the right one you're supposed to be using. That's in situ learning. That's not possible without the training data set and you can't get the training data set until you have the need for it. 

Okay, so and here's an example of I also created a RAG system before I even knew the term RAG. Because you see here I'm adding a knowledge base file. I'm adding the administrator guide for XIM and it turns it into an embedding. And I actually store the embedding in the Slack channel. So Slack instantly became my vector database. Um, um, but, uh, so I asked, this is the reset of the GIF. 

So what is Cortex XIM? And XIM was a software that came out in January of 2022. And the cutoff date for training was December, 2021. And so when you ask about XIM, it's like, oh, XOR it's, uh, and I'm like, no, not XOR, XIM. It's a new product. It's not in the training data. 

I apologize. However, I'm not familiar with XIM. It might be some confusion or a typo. No brother. I didn't make a typo. So I drop in the advert. 

guide, I upload it to the Slack channel, and then I just use the slash command to upload a PDF. I choose which PDF to make into a knowledge base for this channel. It's processed. Now I'm going to ask the exact same question. And this was what it said the first time, EXOR. So here's the exact same question. 

I get a response. Thinking. Cortex XIM is a comprehensive security platform with XIM, a gainful visibility in the assets, a tech emerging set. 

Yes, yes, yes. 

Follow -up questions. 

You see? 

How hard was that to set up? Yeah, and I, yeah, yeah. That's what, that's what taught me. See, that's great. You're very clever, so check this out. That's how I came up with my RAG idea was I first asked, chat GPT, do you know what XOR is? 

Yeah, I do, blah, blah, blah, generics. I said, make me training on playbooks, how to make a playbook in XOR. And it was garbage. That's when I thought, well, I went through the whole admin. The admin guide itself was too big at the time to fit, so I went through and I just did a control F, playbooks. Every single paragraph that had the word playbook in it, I made my own file, and then that was basically like my playbook. 

you know, data set, right? That's right. And then I just asked the exact same question, but I just added that in with my prompt. And it was like, magic. It was damn near almost usable. 

I only had to like format for like the use case, right? But it was literally like whole, it was like night and day difference. And I was like, wow, if I could just like automate this somehow. And so I found a YouTube video. Some dude made a 70 line script where he could rag the constitution and ask questions on it. followed his YouTube, made the 70 -page script. 

I had already made my AI bot without the rag, and so I took the two scripts, I showed them to the AI, because I can't write it. I can't code. I can't code. I'm not a coder, I'm not a developer. I can't write enough statements to save my life. I also could never learn another foreign language. 

I failed Spanish every year before I passed it, every year of high school, every year of college, because it's a required course. That's right. I know. I know. Thank you. And this is it's I'm kind of I'm chicken little over here and I'm screaming the sky is falling. 

Alright, so let's fast forward. Let's fast forward. Because if I could do this, China can do this. And if no one's paying attention, if no one's paying attention, I know they are paying attention in China, they see this as their golden ticket. If you look at just optimism levels, if you just look at optimism levels of AI, AI in China, and in in America, it's like 39 % optimism in AI in America and 70 or 81 % optimism in China and if you just look at the adoption rate of any technology throughout history, a leading indicator as to the adoption rate is the optimism rate as well. 

One of which is measurable prior. You see what I'm saying? So, like, they are, and not, and so, in March of this year, March 25, Gemini 2 .5 Pro came out. Before that, in May, November, I had reactivated a game that I had launched over a decade ago. 

No, no, no, no, no. Where's the damn history? 

Ah, yes. My videos, yes. 

That's what I'm looking at. 

A game called Lineage 2. It'll be fine. And so I made... It's a L2J server. It's a Java server from over a decade ago where I got hacked. Someone wiped my database. 

But I kept my code, because I always thought in the back of my mind I could maybe reverse engineer the custom part of the database from if you could look at the code, because the code is going to call directly the right tables and columns, and if you just put it all together, you could do that. And so I kept it for 12 years. And then finally AI comes about, right? And then O1 Preview comes out, which was the first thinking model. And that's what made it really code extraordinarily well. And that's when I sort of learned my parallel processing. 

trick. And one of the things that I did was once I got that server back up and running and everything, I made a website and everything, I wanted to start making new things. That was sort of the holy grail was making something new versus tweaking something that already exists. So I had played on a server way back in the day where they had this fantastic custom PVP event in a specific dungeon that was perfect red versus blue because the dungeon itself was colored red and blue. And so I basically recreated that from memory in this game with AI. This was kind of like the, huh? 

No, this was before Gemini. I used O1 preview. So I'm giving you the real long back story because you sound like, oh, yeah, no, it's chat TBT. Now it's like O3 or whatever. Yep, but it was the first version of the o1 o2 their strength their thinking models They had you know chat GPT 3 .5 and 4 and then I think they just got to 5 and they're not going to do that anymore They're doing thinking models. They're doing 4o and other in that but they're doing o1. 

It's so confusing But yeah, this the first one was o1 preview. That was in november of last year. So it literally hasn't even been a year since the first thinking LLM has been in existence. So like, that's right. And so this is all very fresh. What I'm able to do, I was able to do from the very first version of thinking. 

It's only going to be uphill from here. you know what I mean? So what this event is, basically, you got your scores. I even had a whole, yeah, I'll show that as well. So you destroy the flags and you push around here. Ah, so a thinking model is basically just a model that talks to itself before it talks to you. 

So it's basically accessing the latent space in its memory as it thinks, right? And then it can make a plan. It can make a plan for you in the thinking, see? So you can prompt it to think in a certain way. And then there's all kinds of like thinking strategies like plan, act, do, reason, you know, those things they make you learn in like business school. But you can just have your AI do that as long as you, right? 

And then you can make that into a, you can make that, it's called chain of thought as well, so. But they do that automatically. It's not like you have to do it. It's done automatically, sort of. That's right. It can plan. 

And then it can find a solution, right? And then it can give that one to you, right? Actually, yeah. Yes. 2 .5 Pro is a thinking model. Yeah. 

So, I trained Gemini before working at UKI. I was a RLHF trainer, basically. It's actually part of my whole story, part of this situation. This isn't loading, but maybe we could, ah, there we go, okay. So, this was my website. I still have it all. 

I just flipped it off to do this game instead. But this was kind of the first time using an AI to like make SQL statements, servicing data. on the website. This is data from the game server. So who owns what boss jewelry? Where is it? 

One of my players said this is like CIA level status. One of the things in the game that's very fun is over enchanting a weapon and then you can break the weapon. But when you do that, that story is gone. But that's part of the story of the servers who has what over enchanted equipment. And so now it's captured. It's actually stored. 

And so you can see the history. You know top clan list all that kind of stuff and then for the battlegrounds they have stats as well So yeah, yeah, so it's um, it's an open source project called L2j and yeah, I just got basically my own version of it with it that has some pretty sophisticated Customization that I actually got one of one of the world's best Developers of this game to make for me at his people at his peak when he was he was making $10 ,000 a weekend off of his off of his 

servers from donations. 

Yeah, I was I Was just barely scrapped punk dude. Oh, man. Oh, yeah. This is yeah, I still have him Actually, this is him just a full circle This is him right here. Jeremy Eskins. That was that's the guy. 

Yeah, that's the guy So anyway, um, so this was a replay. So I I record everything I made a whole season Because every single game gets recorded, and so you can have ELO, persistent ELO, persistent kill death. And then each kill, depending on what kind of class you kill. So it's all dynamic ELO scoring. And then I put it all on the website. It was wild. 

But then, so, Autofarm. I made my own bot in the game. 

My own botting system. 

Let's find it. 

I should have a video of that, actually. Maybe not. Oh, I love that game, yeah. Okay, but, okay. I have a little bit, but not too much. It'll be nice when it's ready for VR. 

Okay, so that was... I was making... Now, 01 has a context window limit of 128 ,000, which when it came out was an extraordinary leap. It went from 20 ,000 to 120 ,000. And then when 2 .5 Pro came out, that one had a million. So that's a huge jump, that's right. 

Huge jump. And even still now, the latest quad code just came out, 4 .5 or whatever, it's got 200 ,000 still. So a million is a lot. And this game, Yeah, now I hear there's some, yeah, on the super expensive plans, I think you can get more, but it's extremely expensive. Like we're talking like, you can get a million with Quad, but it's like $15 prompt, a $15. Good question. 

Divide character count by four. And I'll show you what, I'll, I'll, no, no, no. So just rule of thumb, and we can get deeper into it, but rule of thumb, the token count is just the character count divided by four. Yep. I'm showing, no it's a great question and that's how I know when the student is tracking, is that question always comes up. So this is what a token is, is, is, is, is, is. 

So this is what a token is, is, is, is, is, is. So we got an is and an is. See there all the different colors are signifying which one is a token. So this is one token, this is one token, this is one token, this is one token. It's just the colors are showing that. Now you can see, there's 12 tokens and 39 characters. 

It's a bit off of that. It's repetitive, so that's cheating. Anyway, so what's happening is these are what the actual token numbers are. So these are the actual tokens. It's 382. That's IS. 

Because I can tell, because look at all the 382s. See? So this is, they're just numbers. Brother, they're just numbers. You're looking at a number. this is what an embedding looks like. 

This is what an embedding file, that file I showed you that comes back, I press in the PDF. When you actually look at that file, because I can see it in the raw text as it streams back in, even though it's binary, when it's in the code and processing, I can see it. And it's just this shit. It's just strings, it's just chunks. Because that's what a rag does, right? It chunks out your document into smaller pieces. 

Each chunk then gets turned into this vector. That's what they look like. Huh? Ah, bro, bro, why? Oh, so there's a whole field of study called tokenomics. It's actually a whole, yeah, dude, it's a whole thing. 

It's basically just symbology. It's basically just about compression. It's basically just how you use, it's basically just another language. It's like another base. Base 27, base 10, base 2. It's just, it's just, that's all it is, dude. 

It's just numbers. It's just, that's it. Divide by four. There's nothing else you need to worry about at all whatsoever. And that's it. Limits and costs. 

That's right. That's right. Now, that's right. That's right. That's right. Yeah. 

That's where it matters for us. 

Yeah. 

Where's my AI studio? I don't know why. Oh, what is going on here? Why is all my history? Oh, I'm in Chrome right now. That's why. 

Okay. 

I understand. So AI studio. is free. No one offers an analog. OpenAI does not offer an AI studio equivalent where they just give you damn near unfettered access to their smartest models. Claude, same thing. 

Yes. Yeah, so that's unfortunately our company is not ready for that yet, not for lack of trying on my part. I had a very nice long talk with the CTO, but apparently no, he never wanted to follow up. But basically, it's like a repeat. It's like a repeat. I gem these guys up about AI, but then they don't pull the trigger and do the one thing that they need to do, which is to get us a CUI safe API or get us our own endpoint that we can call. 

I've got an LLM running in my damn closet. What is their excuse? right like let's you know it's really not that and it's not rocket science and i can help them shut it all up you know but it's just they they go off and don't whatever anyway so um so that's what that's yeah yeah well we'll look uh talk to who i don't know who he is all right so let me just do a quick demo of where i'm at with my DCE. I'm in the process of working on this, so I'll just have to close that. Yeah, yeah. 

Dude, it's wild. I've never done it either, bro. That's the fucking point, bro. Dude, I didn't even know how to get the goddamn logs. How do you develop when you don't know where the air logs come from, right? It took me like four hours to figure that out and then even then like, you know There's a certain thing you have to do or else like you won't really refresh your environment even with your new code is saved or whatever And so I'm sitting here testing the same damn environment eight times not knowing I have to refresh it into a certain way It's all learning but the AI is helping me learn every step of the way my process, dude Oh my god. 

No, I'm like chicken little over here, dude. It's it's wild. Okay, so 34. I'm just gonna make a new older I know you saw this, but there's one piece of the puzzle that... Yeah, there was one piece of the puzzle that you didn't see. Because this is the development version. 

Alright, so, watch this. Oh no, that's right, it broke. That's right, okay. I have this... It's okay, I have a GIF of it. I'm in the middle of fixing it, and I've made some really good progress. 

But let me just show you a GIF of it. Yeah, yeah, yeah, it would, but you would have to coax it a bit. All you would have to do, though, is you would have to make your, it's the same process, though. That's what it is, it's this, you create the artifacts, you just create the artifacts that describe the thing that you're after, and you don't know what they look like, the AI does, right? It'll come up with, like, user stories. I didn't ask for user stories, but I get user stories, right? 

You just have to work with it, And then you start getting artifacts and you start vibing with it. And you're like, yeah, I like this. No, I don't like that. And with multiple responses, you know, you like this. And when you get a choice, you're like, oh, I want it. I want this direction. 

I like this direction. And you can go that direction. It's do it. So I got a demo mode that I'm building out right now, because once I'm done with demo mode, then API mode is just built automatically built. 

Demo mode is using a local LLM, my local LLM. 

So it doesn't matter how many responses that you generate. And then they come streaming in. This is, so this is from my local LLM, streaming them in parallel. I'm getting about 500. tokens per second from just my shitty -ass little 3890. I'm just running OpenAIs at GPT -OSS. 

Yes, yes. The same, it's running my server, it's running RISC -AIM as well. It's hosting the, no, it's all free. No, no, yeah, that's right, it's free, that's right. It's free. That's right. 

I'm just paying for electricity. I'm just that's right. And that's what I'm saying. That's what this is over here That's what this is. That's what so look at this. 

Look at this. 

That's what this one is. All right, that's this choice Like we can do this like we can that's on premise. We make our own LLM. That's pillar three. It's more expensive No, no, this is all my personal stuff. Yeah. 

No, I'll share this as well. Not sure. We'll try open that one Okay, and then that one the prep this one So, yeah, well, this is how you get AI, and this is how you get AI in your company. It's so, I understand completely how blinding it is to not even know where to start, but this is where you start. You either get commercial API, which is you go to ChatGBT and start using it, which is not good for us for a myriad of reasons, or you get your own AWS Bedrock solution with SageMaker, like I said in the meeting, which is in here as well. 

That's pillar two. And then pillar three is running your own local model. And then so certain tasks will be good for local, and certain tasks you're going to want the foundational models because they're smarter. Yes, that's Bedrock. 

No, so you're talking two different things. 

So there's one is API access to foundational models through Bedrock, which is CUI safe. 

So it's API calls, so no local. 

Or you can still in the cloud set up your own, now what you're talking about, get your own GPU in the cloud and then put your local model on that GPU. That's different, that's different. Or you can get the third, which is your own damn GPU. I'm advocating for the API, and then what'll happen is we'll start to discover functions that we would love to make API calls for. Like, do you remember that in the demo I gave, the Intel chip, where I highlighted a paragraph and I got the key Intel out of it? Okay. 

Basically, I could get it up again, but that is an example of like a refined, defined function. Right? I send it a paragraph, and then it reviews that paragraph, but then it also reviews the context of the scenario, and then decide, because then it knows what the users are going to need to do, because the users are going to need to ultimately type five different commands. Right? It boils down to like five different commands. And so ultimately, the user needs to know which of the five commands should they, you know, and so just find some relevancy there. 

So whatever the user's copying. And so right in the beginning, the key intel is telling them how to log in to get the drone manifest. And so the AI knows those two things. And so the AI understands and knows just by those two things, oh, the user's in the beginning, they're looking for the drone manifest, here are the two things they're gonna need to copy and paste in order to get access to it. And it just creates that nice little chip for the user. 

Now, you don't need to, once you've got that refined and you've fine -tuned that process, you don't need, you know, you can use a local call, that's a free, that's free AI, because it's so clean and refined use case, yeah. 

those are the big boy models. No, that's what they are. They're the foundational. 

That's your biggest, strongest models available that need massive server farms to run. 

2 .5 Pro? Yes. Yes. Yes. That's right. That's right. 

Yeah. That's okay. Yeah, that's right. Yes, sir. Now you're catching it. See? 

There's nothing stopping us from just getting this started. But they're going about it the wrong way. They're trying to like define the, huh? So that's what I'm trying, that's what I'm building out right now. That's what you just saw with the GIF where it was streaming in, right? See, so it's a GIF. 

It's the exact same. Yeah. And then you get a choice. Just look at the spread. Look at this. Did you just see that spread? 

So yeah, I'm doing eight. I'm doing eight at once, but now it's just restarting. Yes. Okay. Yeah, because think about it. Think about how different they are. 

Think about the question I ask. I ask, I want to create a tower defense game. Maybe one of them goes a cybernetic route. Maybe one of them goes like a plant -based route. You see what I'm saying? Like they could be so completely different and now I get to choose. 

That's what I mean by I flip the script when you do this. But then also one could have an error and one could not have an error. One could have a good idea that the others did not have. Yes, that's what a lot of people don't do as well. Is they think they want to use is not wrong, it's just not what I'm doing. 

What they do is they do one to Grock and one to Claude and one to Gemini, which is fine. It's still sort of the same thing, but it's apples to oranges sort of. This is very standard and you still get the gains that I've been just espousing over and over again from my process. Yes, yeah. And look, yeah, it is, and look at the difference. It's about to finish, when the last one finishes, there. 

So the spread, see, one to eight, and then over on the right, I'm gonna click sort, and now the biggest one is 3 .1, and the shortest one is 1 .3. So it's almost double the size. And I got, you see, so I got more planning, I got more planning out of it, okay? So that's just, now this is just local, this is all just local. 

The smarter AIs, the better AI you use, the better planning it can give you. 

And again, that's the beauty of my extension, is all when a new AI comes, I just point to the new AI. So, okay, so now let's kind of back up a little bit, because now we're basically at the very tip of today, which is my extension and connecting it with the local LLM. Because it's the moment that, the moment that UKI has a KUI safe API, all they need is my extension that's API friendly, which I'm coding it out right now. 

And then it's, you can just use it with our repos. 

And then the code created a whole new Ansible role instantly. 

I've done it. This is phenomenal. But this is actually where I want to go. I want to pivot to this. go over the game a little bit because once March 23 25 came around This I have a good idea. 

Yeah, this is uh, this is the game I made and then I made a report about the game So this is sort of I skipped into section 2 the origin story. 

Let's see. 

Check this out. Actually It's it's it's right here 120 days This is the prompt for my game. 

I did it manually. I did it manually. That's right. Before I had the extension. See? So, this is the way I would do it. 

I'm just going to scroll down to, and start with one of the cycles. Let me just search open bracket cycle. There we go. Cycle 1. I want to fill this out before I use it. Something is bothering me. 

Oh, that's why I did it differently. That's why I did it differently. Okay, so you see I just wrote cycle 1, 3, 3, 7. And I said, we're done with reports one and two. Please continue. I was building out a report. 

I was building out my reports, this report, basically. And the image, yeah, working on the image generation and stuff. And then, see, here was the previous cycle summary of action. So this was just part of the AI's response that I clicked out to keep the context. See, it was all manual. And I would put my own tags like this. 

And then, great work. Let's fix the script. And I just built this over time. 

This is the prompt file. 

And this is where I would put all the responses, in these eight different tabs. 

It's all manual, in Notepad++. I'm not a developer, bro. But I am, uh, I know. It's impressive that I just never stopped, even though everyone tells me that this is stupid, you know what I mean? Dude, this is like, just, you know, no one listens, man. Like, everyone should... 

When I show this to someone, they should do what you did. Fucking stop, and turn, and start asking some fucking questions. Just like the thing just said, it's something that demands an explanation. Legit, you know, like yeah, and then I would look that's right. I need to talk to the right billionaire dude. 

Yeah. Yeah, I haven't met that person Yeah, I could make some waves trust me and I'm just getting more and more refined Oh, and also let me tell you as well. Let me just mention this is to you as well when I did talk to dr Wells I didn't have my DCE extension He doesn't know about he doesn't know about that. And and in fact why I started making it it's a direct replacement and competition between Not in a bad way, in honestly a good way. As to what is he making right now? You know he's making a content development studio, right? 

That's what him and Ben, and they're all jazzed up about it. They're going about it the wrong way. This is the content, we already develop content in a studio. It's called Visual Studio. Stop inventing, reinventing the wheel. I did it so well on accident with an extension, yes. 

Let's keep going, man. I already love where your head's at. Let's just keep going, because I need to fill your head with all these ideas. Alright? I love it. Seriously. Let's skip a bit. 

Let's skip a bit. 

And we can go quicker. Because what needs to happen, let me tell you why. I need to create a training. Imagine every senator, every decision maker in our country receiving reports of this magnitude. It took me days to put this together. Days. 

the brother brother no no no no no no let me look at this look to pick it's a picture book okay it's a picture book it's an adult picture book it's the printing press 2 .0 it's read to you by Scarlett Johansson okay dude I mean I could do however I could mix match the voices I can give her I can give her an accent if you'd like all right it's crazy all right but this this delivery of knowledge like knowledge transfer is unprecedented and available today. It cost me zero to put this together. It's zero dollars. If I can do this, China is using these tools to do the same thing to stab us in the back. That's their M . O. 

, dude. That's their M . O. They have a whole, yes. Okay, so here's where sort of it starts to get more like, so the way that they train AIs is this fissured workforce. Basically, Google, OpenAI, Mena. 

They break out the, they subcontract out the work to these contractors like Globalogic, Majoral, ScaleAI, and then they even subcontract it out further to even more subcontractors like Synet, Ravens, and Digitiv. And basically it's a whole army of ghost workers that are doing this essential work, by the way, so they should not be coming in. They should be full -fledged employees, just off that fact alone. But so, it's a critical, you can't get an AI. An AI, once it's pre -trained and it's trained, it's useless until you do the reinforcement learning with human feedback where you evaluate the helpfulness and the harmfulness and you write, you get two responses back and you say, well, this one's better than the other one. And you create that reinforcement learning. 

That's what makes a model actually usable. And so, that's what this army actually creates. And so, without this army, yeah, and so, that becomes a problem though. It used to be the way it works is it's labor arbitrage. So Globalogic, which is a Hitachi Group company, they're a Japanese conglomerate. It's not even American. 

They make money via labor arbitrage, so the split in between, obviously, from what Google pays them and what they can pay the workers. So the more they can pay, keep the wages down. And so the job title is a content writer. In America, content writer. No one listens to a content writer. Ask me how I know. 

That was my title and no one will listen to me talk about AI. Now if my title were pacing threat, what is China doing? I'll just jump down to that. They have an entire training. They've done professionalization. It's state -sanctioned. 

They started it over five and a half years ago. They have a whole job career ladder. Whereas in America, I hit it. I hit the glass ceiling. I'm a go -getter. If you can't tell already, hence the story about Palo Alto. 

And then so it the same thing happened, huh? Yes. Yeah. Um, yep I have all the research that I used Gemini to do research OSET I don't know Mandarin. Okay, but I use Gemini I said to Gemini deep research I said your English is pretty good, but how's your Mandarin and I sent it and I asked it How is China's AI playing? What are they doing? 

How it and that's how I got all my Intel. Yes wild Dude, oh my God, they're doing it on us. They use DeepSea for OSINTs, of course. That's in here as well. But so here, so what we have, so here's what I'm saying, is what I am doing is I have this skill set that the Chinese are cultivating. That's, thank you, thank you, and then no one will listen to me because I'm deprofessionalized, all right? 

There was no career path for me to go up, okay? And that's what's missing in all of America AI right now is, The AI deployments fail. I'm sure, I don't know if you've seen those statistics right now, but Gartner and everything, they're putting out these, there's only like 1 % of AI deployments are making like million dollar returns. And the vast majority of them are failing and not doing good. And everyone's gonna ask why, maybe go into an AI winter, probably not. Because too many people like me are just saying this is way too ridiculous to get AI winter. 

Even if AI stopped today, we've got a decade of work ahead of us. and AI is not gonna stop today. So, the glass ceiling, I hit it, dude, I hit it. In fact, just check this out. I'm in the union for Alphabet Workers Union. I just met with the organizing committee. 

I gave them a short spiel, but I blew their minds. Also, at Global Logic, I'm still in communication with the training manager. She's right here. And she's been there. She knows it's a revolving door. She knows exactly. 

She might even be ex -military. Because she said, when I showed her my virtual side of the proving ground, she said, imagine military using a crane. It reminded me of the Arnold Whitehall simulations I did in grad school. So I'd love to hear more about what she's talking about here. She was the one who promoted it. So let me actually share this as well. 

It's probably quicker if I go over here. So, basically, this, they could care less, dude, they could care less. I basically, because it's, you know, it's basically my responsibility, honestly, to let them know when I discovered this, the fact that the job is a de facto national security asset. Because we're training the I mean you use gymnastics and people in the NSA use Gemini. And when your workers training Gemini are up here in this section, the cognitive consequences of scarcity are all underpaid. 

They're ghost workers. I wasn't even allowed to say I worked and trained Gemini. I'm creating the most celebrated technology, yet I can't even say that I am doing it. It's either, I get a little emotional sometimes because of that. And so, it's institutionalized garbage in, garbage out. Because Hitachi Globalogic does not care about the quality of the product, only so much as Google doesn't complain, all right? 

And people say, oh, well, they have, Reviewers, they have to make sure that the data is good. You're talking to the senior reviewer. Okay, I got promoted. I was promoted to reviewer. First, I was moved from the non -technical to technical. That's when I tried to get a pay raise. 

I never got it. And then I was promoted again to reviewer and then promoted again to senior reviewer. When I was promoted to senior reviewer, I got English grammar training. That was the training. We were all put in English grammar. We were given grammar worksheets. 

English grammar, so no training whatsoever for, you know, chain of thought, yeah, nothing, because they don't know how to, and the size of the tasks, because in the beginning, the AI could only have a thousand tokens, it just, LLMs didn't have context windows. And so you could only have to review 1 ,000 tokens max, right? They're small tasks, right? But over time, it grows exponentially. Now we're dealing with a million token context windows. The size of the tasks we were reviewing went from 1 ,000 to 40 ,000 on track to 120. 

And the pay didn't change. Nothing changed. It's just more work. And then they give you three hours to do it. That's nearly a book, actually. Okay? 

So garbage in, garbage out. That's all you're going to get. And so institutionalized garbage in, garbage out. It's the cause of Ouroboros effect, which is the model collapse. That's my theory. It's why AI sort of hit a plateau. 

Because the people training them. We're not given any training. Imagine if I had my DCE system doing grading validation. That never allowed to be innovative whatsoever. So that is a problem in and of itself as well in such a fast -moving field. Anyway, so this is basically what's going on is the higher the tech rises, the harder the fall will be in this current deprofessionalized situation where all the learning that's down here actually on the unseen battlefield. 

Let's skip down here. Oh, what is this? I forgot about this. Okay. 

Anyway, I forgot what I was looking for. 

Well, obviously I'll find it. Yeah, let's go there. I like this picture a lot, actually. This is fun. So I made over 2 ,000 images for this. And you can see the difference. 

Look at this image. Versus, this was the first one I created. It is, however, it's the image for cognitive capital. And cognitive capital is the collective intellectual capacity, skill, and problem -solving potential of a workforce or population. Now, would you get that from this? Absolutely not, right? 

Yeah, right? Versus like this, when I got better, and I learned, oh, it can do words, right? You can tell what this is all about. No, no, this is Gemini. This is foundational. Yeah, see? 

So this is like, you can tell exactly what I'm trying to communicate in this section. And I learned how to do it over time. That's the vibe coding to virtuosity. You can literally see the, now I can take this with me for the rest of my life. This quality, you know, because I put in the two weeks it took to learn how to, and what do I ask for? I ask for, it's about knowing how the system you're interacting with, because you're talking to Gemini 2 .5 Pro, and Gemini 2 .5 Pro can send a message to the diffusion model, the image model. 

So when you understand you're working with it like that, you can tell, because you don't send the message to the diffusion model, Gemini does. Gemini creates the tool call. So you've got to coax Gemini to do something good for you. You get what I'm saying? You've got to gin up Gemini. You've got to gin up Gemini. 

gin up, it's actually for real. And so, you, no, this is, no, no, absolutely not, no. And I told you, I trained Gemini. And I learned this stuff myself, everything I learned was, yes, from three years ago, the first project I made was the Slackbot. No one could be vibe coding longer than me, I was the original, I was an OG vibe coder. Because, are you in your car, Pat? 

No, that's fine, that's fine. It's got a history from March or something. Vibe Code, yeah, February, not March. Andrew Karpathy, one of the guys, one of the OpenAI, original OpenAI guys. In 2025, he wrote a blog post. 

Oh, no, no, no, no, no, no. 

He wrote a tweet or whatever. Tweet, tweet. There's a new kind of coding I call vibe coding, where you fully give in to the vibe, express exponentials, and forget that code even exists. It's possible because, yeah, dude, I can't write code. What is he talking about? It means, honestly, seriously, it's crazy. 

It should mean nothing coming from a real developer, and it should mean everything coming from someone like me. Do you see what I'm saying? The fact that I can't code makes it completely... Dude. And so, he comes up with this idea this year. This year. 

I've been doing it since 3 .5 came out. It was the first thing I thought, like I told you. I asked the fucking question. What's the most valuable thing you can write if you can write code? The answer is code. I told you why. 

It's an object. I just put the two dog brain cells together. That was it. I did it three years ago and I never stopped. I never stopped because I got the results, dude. If I didn't get the results, I wouldn't have thrown it all. 

I would have gone, you know, played my video games, whatever. But I got the results. and it just changes everything. I felt like the wave is coming. You know, we gotta learn this before it's, I can capture as much as I can, and I didn't know I'd be riding it. I also didn't know that no one would even recognize, like, that I'm riding the wave. 

I'm gonna appear up right in the wave, and no one even recognizes. It's pretty, okay, so, all right. Anyway, yes, thank you, thank you. So, I'd love to make it huge. Yeah, so negative feedback loop, that's Ouroboros effect, the snake eating its own tail. In China, what they're doing, I mean, they're only five years away from the completion of their plan to dominate in AI, okay? 

And they started this plan in 2017. So how they're doing it, how they're doing it, they're doing inland sourcing, so whereas we're outsourcing our cognitive capital, they're insourcing, so they're using it as a form of poverty alleviation. If they have done in Yizhou, the poorest region in all of China, because it is the most mountainous, they have turned it into their premier prime data labeling base that they're going to use as a case study to expedite delivery throughout the rest of their nation. So while people on Reddit are all like, ooh, ah, look at this cool, interesting this bug, interesting this bug, ooh, I'm sitting here realizing the only reason that they could possibly have. 

be cutting mountains to build a highway as fast as they fucking can in this fucking place that's ass because of the mountains is for AI is for AI they built this they built this for AI so yes and people are like oh cool is it less work than building a tunnel guys you're asking why did they build this in the poorest region because that's where their AI base is right and yeah and yeah and so So they're gonna have people like me. 

Armies of people like me. And it's just data, it's data curation. That's the skill set. Data labeling is the skill set. And it's like this, they're gonna be, dude, they're gonna be like, they're gonna be like sleeper agents, dude. And they won't even know it. 

Because they're gonna be gaining these insane skills of the future and they won't even know it until China activates them, I'm telling you. 

And how does that, what do I mean by that? 

That's what I mean down here. Like the call to action, like so, when you do this vibe coding virtuosity, Basically, you just find some cool project and you code it out, you know, I love baking so I'm going to make a website for my bakery, or I love fishing so I'm going to make an app that helps me find the best fishing spots, whatever. And then, after you code it out, you make your website, you do whatever. And then you live your life, and then you're walking through your community, and all of a sudden, you know, your neighbor, X, Y, Z, someone in your community is having a problem that you realize, wait a minute, I have the skill set. I can make them a website, an intake system, a blah, blah, blah, accounts, and I can solve that problem for them. I've got this skill set. 

You get what? You get activated. and you didn't even know it you're so you're you're I think you can we can create sleeper agents in our country of these people who just become these experts and they don't even know it because this because the AI will get better under their feet that it's all about and why is it why is it data curation I use the analogy of the human eye The human eye has a focal point of 2 degrees, and everything else is, for lack of a better word, hallucinated. Your brain is basically concocting that which it thinks is around, but you only get focus here. Why? Because there's so much information that your brain would be overloaded if everything was in perfect focus. 

Same thing here, it's context window. Always, I argue, the context window will never be as big as the universe. Therefore, we will always have to filter or funnel somehow into our context the data which we need to use for the task at hand, and the tasks will always change and evolve over time as we explore and spread throughout the solar system. Everywhere AI has not been, it will hallucinate. We will have to go first and create the data sets, annotate, label, transform the data into something that the AI can then come with and use, and we're the explorers. We're going to be the eyes for the brain. 

That's it. So, and just look at how much data we produce as humanity. It grows exponentially the moment we got more data to store, right? So, we'll never have a need, a lack of data. We'll always be exponential. Ah, and then you can rise to meet the moment. 

which is basically here. As AI gets better, the capability threshold to use it to reach your 100x moment will go down over time. The expert will be able to reach their 100x moment sooner than a novice would. But what you can do is you can become an active learner and you can accelerate that intersection. You can accelerate that. But you know all about technology, so this is where I want to, you started talking sort of got me thinking about this because this is what my skill set plus your skill set, right, is the peak archetype because it's one thing to, a lot of people don't know how to get data together, right? 

And I think these skills help these skills. 

Like I know this data is important, not that data. I know I need this data. I think I say it like this, the internet is your hard drive. So the more you know that's out there on the internet, the more you can think, oh, I need this data set. I can pull this data set into my project and use it. So it's more or less, yeah, live coding virtuosity. 

The AI sort of helps you learn. You start out basically trying to dissect everything, untangling knots to building blocks. After a little while, you start to be able to bring pieces together and put them together. Then what happens is at a certain point, you kind of get stuck somewhere. it's because you don't know something. Like maybe you don't have like cloud skills and so like a serverless function is like very abstract to you, right? 

You know, you're talking to an AI that can make you an artifact that can explain exactly how it works and like you can give it, you know, errors and build out this AI as a meta tool and explain all those learning gaps. It becomes this learning accelerator. That's this recursive learner stage. Yes, exactly. That's it. Exactly. 

That's right. That's this stage, right, precisely. And then at a certain point, you become sort of an adaptive toolmaker in this recursive learning stage. And the Apex skill is on -the -fly tooling. That's literally me making the DCE. And it's here. 

It says, a competent user asks the AI, how do I solve problem X? While the expert asks or says, build me a tool that solves problem X. It's the same AI. You just have to think how, what you're doing is you're building, you have to build a mental model of the model so that every prompt is a lesson. Because you send a message, you get a response, you now know what it can create. And maybe if you ask it differently next time, you'll get closer to what you're after. It's building that mental model of the model. 

Or you can even game that out with the AI as well. Yeah. Because even that might be so abstract, you don't even know what it is, what it should look like. So, yes. And you know when it's solved. That's crucial as well. 

That's key as well. Because I don't look at the code, right? I look at this and I say, this button doesn't do what it's supposed to do. Fix it, right? This is what it does, and this is what I want it to do. So I'm at step A, and there's step Z. Get me B to Y, right? 

And then, also, another thing, you don't know how many in -between steps, because again, you're not a coder, and you can't instantly come up with a solution to every problem in your brain to know that, oh, this is going to take one cycle, or this is a big problem, this is going to take five cycles. You know what I'm saying? Just throw it at the AI. You'll get there at the end sometime. Because that's what I do at DCE. I give 10 problems. 

I don't know which one is going to be the hard one. 

It'll solve seven in one go. 

Those were probably easy. Two made some progress, and one it didn't even touch. That doesn't matter. I'm asking about three problems this time, not seven or ten, right? So I have a solution as well. I came up with something called universal basic access. 

It's not universal basic income. It's better than that because you're giving people AI credits. You're not giving people dollars. You're giving people AI credits. So how much does it cost to give a person a dollar? 

It's not a trick question. 

That's right. 

How much does it cost to give someone an AI credit? Fucking nothing until they spend it, yeah, right? 

And then when they spend it, what are they doing? They're prompting they're producing. That's right They produced something out input output response. That was a something was produced an image a digital asset, right? Yeah, that's right. That's right That's you got it. 

I don't have to I don't have to walk you. I don't have to hold your hand through it Yeah, that's absolutely right. And that's what we do with the Rural Electrification Act We needed electricity in the country, but no no But no one would, no electrical company would build it. Likewise, we need AI talent in the workforce, but no AI company, they keep it deprofessionalized. Yeah, Trump doesn't like AI spending. Trump doesn't like spending money on AI. 

The money's not moving and the factories aren't getting built. So, you know, show me the factories, you know, show me the results. So by Google's own admission, by Google's own research, they predict billion data labelers in the future right now think about that number so currently you're right let's listen to this one That's my job. What is DLA accounts in your table? I'm not sure. 

That was a thought I had. I wanted to mention it. It'll probably come back to me. It's a way to explain the significance of this situation, right? I remember, I remember. Okay, so machine learning training has always been a super data intensive task. 

And then in 2017, generative AI showed up. It was that research paper. So, but up until that, so up until that point, Machine learning was a sort of like, at most, like sentiment analysis, like is this paragraph, you know, positive sentiment, negative sentiment? By and large, it was like, you know, maybe like, you know, data, like drawing bounding boxes around like a pedestrian and saying pedestrian, you know, labeling a dog a dog, a cat a cat. You don't need to be a rocket scientist to do that, much less speak much English to do that, and this is a globalized economy. And so it makes sense that largely a lot of that work is outsourced. 

You almost can't fault the big companies for doing that. 

But then 2017 creates a new tool, the LLM, which requires a new data set, a critical thinking kind of data set. 

And that kind of leads to this hidden curriculum, which is here. That's this hidden curriculum. Because when you spend eight hours a day critical thinking and writing down your critical thinking, see, when people would do work, they wouldn't write down their thoughts, they would write down the product. It's only now that we have the tool that we actually need to write down our thoughts. Exactly, you see? 

An AI without knowing how to think won't be able to, right? You've got to put the thoughts down in words and then it can do it. So when you spend eight hours a day, five days a week critically thinking about thinking, you get what? You get smarter. It's just because you're black. What a surprise, right? 

It's a hidden curriculum. The mind is a muscle. Every click is a rep, you know? Sense making is basically critical thinking, bias detection, AI validation. You're building these insane skills. This is the same skill set, right? 

Okay, so That's right. Yeah, that's right. Yeah. Yeah, basically so because cognitive capital is more powerful than economic capital now because look what I can do with no money a 3090 I just went for the cheapest route. I just went for the cheapest route to 24 gigs 100 % Yeah, because you can't you just can't load a model and VRAM if you don't have the VRAM because then it goes into CPU RAM and then it's just dogshit slow using GPT OSS. 

They have two model. It's open AI's open source model. They have two models. They have a 20 billion model and 120 billion model and I'm using the 20 billion. Parameters. Yeah, the size of the model. 

How big is its brain? 

Yeah, and it directly correlates with that's how much VRAM you need. You can fit 20. And then now quantization comes in. So quantization basically halves the amount of VRAM you need, but then AI gets stupider. So for 20 billion at like Q4 or whatever, you cut it in half or something. I think eight, I don't know. 

I think an unquantized is FP16, and then I think the first layer of quantization is Q8, and then the second layer is this Q4, which is what basically everyone's going towards. It's this happy medium, and then there's Q2, which is just dog shit. So first my process is the copy and paste to AI Studio. And that's free. API calls cost money. So I first, I'm designing my DCE in phases. 

The first phase is complete, where the whole thing fucking works and I can, you know, create the whole project. and then I can, I have that file that I can then manually send it to the AI of my choice for whatever service I have purchased, $20 a month or whatever. Now that that's all built out, it's a much smaller lift to then build the API piece of the puzzle, you know what I'm saying? Now, well not even, not even cost, yeah, because in order, because now I'll have to build out this, the API calls and the functions and stuff. So I can just use my model as a toy to build out, yes, yes, as a test bed. No, no, no, no, so, no, so I use Gemini 2 .5 Pro to actually write my DCE code because I need the smartest dude. 

If I'm going to, I'm not going to, I would not be wasting my time, you know, trying, because that's where I'm doing real work, the real work, the cooking. I'm going to use the smartest model available to me, right? Why wouldn't I? It's also, but also, no, again, no one has anything like AI Studio. Only Google has this, which is literally damn near unfettered access to their smartest model. My prompts do $15, bro, if I were to pay API. 

Let me tell you the math per cycle. Yes, per cycle. Yes, in my game. No, per prompt. I have a shortcut here. I just go here and I click this, click this. 

Yeah, I have this button right here. Yeah, see, it counts it up for me, see? I actually do the math. See, so this is my game, AI Ascent, my project. My whole prompt would be about 747. ,000 tokens. 

And it would cost me to send it four times, but I actually, I usually do eight, $15. And did you see how many cycles I'm in? Let's go to the top, 1 ,408. So let's do the math, let's do the math. That's just to make the game. That's how much, nah, we'll get there. 

So that's $21 ,000 of API calls. And that's a, that's a, that's a, Conservative because not every cycle is just one and done all that would be beautiful now many times a cycle year Yeah, yeah, you have to reiterate and change and realize you made a mistake and fix and send it again Yeah, so yeah This is what basis this is the minimum of what it would have cost to make this game Via API and I did it for free. I took that money. I put in my pocket basically because it's yeah, I got the tokens the tokens Yeah Okay, so but now now you're asking some questions that actually get to sort of like are important in terms of making development decisions like so So I made this game. Let's sort of look at what did I make so I made a game where? you research Yeah, so I've got two researchers in my my founder on research right now, so that's researching We'll just do a little building So I just got basic in the concepts that gave me some more components and I can get some vision tech Oops, did you see that? 

Oh, what do I need? need gpu oh i need cpu so let's just add some more cpus to my cluster the research is going again i'm playing the game right now i'm showing you the game yeah it's a tycoon game yep it's a simulation game you you make your own ai company and so this is just sort of the research tree that we're going through right here right now i can actually queue dude it's so meta no research nodes yet so we'll get there later all right so well all right so now i've got some components i can make I'm gonna assign my founder to build that one. I've got some machine learning engineers. Hire some. I only got two right now. 

So they're building some components. 

Our old training gears, agent sensor unit, agent logic cores. I think they'll build those up. Yeah, yeah, I sent that in. And my report is in here, see? 

I mean, yeah, the game is the proof and the report is the theory, right? 

So I made this game. 

Three months into making the game, that's when I decided to pause and I'm like, because I'm showing you just the pieces. 

I'm showing you what I made. And then after I made it all, I'm like, Hold the phone, man. This is just wild. And then I, because everything that's in the report was in my brain. It was too much man. I had to get it out Yeah, I think I think it's just gonna change yeah, so simple pathfinding algorithm implement basic pathfinding for the game AI agent Okay, cool, and then we can train the game AI agent. We're ready to train it. 

I've got the agent modules I needed see the agent modules. They needed those core logics that I was making so to make these so now I can train the game AI agent. I need a cluster first. Let me make a cluster. Make a cluster. ClusterFuck to add some resources to it. 

I'll do it this way. Put it over here. Do it this way. I just changed that. Okay. Now I'm looking at the cluster and adding resource to that cluster. 

I think that should be enough right there. Okay. Back to the training. Yes. See? I require, I need 100 and I have 250 in the cluster, in the selected cluster, which is ClusterFuck. 

And then I have enough GPU and I can start the training. It starts a training cycle. I have a nice little simulated loss function, you can see it's sucking up all the GPU to do the training. General pool's not in use right now. Okay, so that training is done, now I can do the benchmark for the game AI agent. Oh, I need compute, I have no compute in my general pool, I forgot, I took it all out. 

Took it all out, general pool, let's put one in general pool. 

probably just that, probably just that. 

Okay. Yeah, that was it. 

That was what I needed. 

I took all my GPUs out and I didn't really need it. Okay, benchmark. Now the benchmark is running. So loading the opponent, a medium bot. So my AI is playing a bot and my AI beat the bot. So now I can finalize, name it OpenAI5. 

That's what they called their bot. Okay, so now I have a bot. I can add some features like basic heuristics. Simple rules for decision making, some lane control, oh my CPU is junk. And some predictive aiming. Oh, I'll deal with the CPU, I'm stuck in a second, let me upgrade. 

I need a certain amount of ELO, I need more, I need more components, and I need more compute. 

So let's, I can hold shift to do five at a time, cook and knees again, in order to upgrade. See, now I can upgrade again. Once I get, I think it's 1650, and I can hold shift to upgrade five at a time, so it's faster. Oh, they're getting built, they're getting built. I've got my engineers building. This guy actually, let me reassign. 

There we go. There we go. Okay. Almost there. We need 1650. There we go. 

Okay. Now I have enough ELO to enter the... i need 1640 so i can compete my game ai agent against their game ai agent oh so they're just kicking that guy's out they just kill that guy basically they're probably yeah they're probably yeah so i mean bro right dude dude okay how how crazy is what you're looking at right now all right so i followed history because open ai before they made chat gbt they were making a dota bot and i got the dota map So you make the first AI you make as a game AI, and then once you win your first match, the attention is all you need, paper gets released, and then you can do more research, because I've done all the research already for this stage of the game, and then unlock more research, and I can do more research, and I can make an LLM API, and then I can make a chatbot, and then I can make an audio model, and an image model, and a video model, a robotics model, a multimodal model, and then finally a world model, and that's how you beat the game is you get all seven billion people to play your world model. Everyone's living in your simulation at that point. So, I have an idea. You saw my virtual cyber proofing round. 

I literally made that from scratch, dude. It honestly sounded kind of corny, I'll be honest with you, when the AI came up with that scenario. Because it came up with four different scenarios. And it sounded corny, but I didn't care. I just had the AI pick which one would be easiest to make. And I just went with it, dude. 

And it came out pretty damn good. A month. Not the scenario. the whole vcpg and then you can just make scenario after scenario after scenario because i've got the whole environment you see i've got the platform made that's right with my extension it was the first project that's right i made with my extension because i just needed to test i needed to test it was it's a throw it's a throwaway project dude it's a genuine throwaway it but it's god it's glory it's a billion dollar thing dude and and and also look at the look at this consistency like that's what's really key is i had this image then I could say I need a yellow one and you know blue one but it's yeah that's the AI's at that point now and then I just had a bunch of image and I think I like whatever I use this one or whatever right and then I just map it and then you saw up here this was just I said I drew this out in paint and I sent this image to the AI And I said, this is the plan. And I put my mouse over it to get the X, Y coordinates, right? 

Because it's 10, 24, 10, 24. I just used paint, because paint, wherever you put your mouse, it'll show you the coordinate of your mouse. So I just needed one, two, three, four, five coordinates to make my game logic, basically. Yeah, which is just an image also AI generated. easy easy easy yeah great well let's go let me yeah so the so there so the four scenarios that were planned out one of them was this forward base blackout basically it's early morning like 4 a . m and then at 6 a . 

m the big off is about to go off but right before the whole base gets shut down and then you have two hours to get the base back online Ghost Fleet is the one, is the drone one. Silent Running, that one's about you're in a submarine and you're in, you know, silent ops or whatever. So, and all of a sudden the reactor starts acting erratically and you've got to figure out what the heck is going on with the outside support. So, breaking, you know, radio silence and using internet or anything like that. And then Operation Stolen Scepter, I don't remember. I didn't read that one too carefully. 

That was like the first one I suggested. But I could just make hundreds of them, each one. Also, some of those artifacts are worth just glancing at, because that's what we can do is we can just build a little bit of this. vcpg together And that'll just open your eyes. So I always do this with people. I'll show I'll I'll give them those so all the theory That's what we just talked about all theory like it's all great. 

It's all talk right? Um until the next time you're gonna see it. Um, You're gonna see it. So let me get in here and just uh, yeah, let me just cut by coding it out with the dce um, so in here artifacts, so The team intelligence and flags, the scenario, tactical map integration, UI plan, collaborative intelligence system, those little Intel chips, Jane AI integration, so like how we're going to get the AI. I called it Jane from Indra's game. The tactical map, you know, so like zooming in on it. 

I didn't, we didn't do that yet, right? 

If I ever want to, I have an artifact made for it. The offensive gameplay, so I added that to it after we had all the defensive stuff. I had, so then that means that most of the scenario three planning is going to be up here a bit. There it is, S003, ghost fleet, narrative, and event flow. So, aha, this artifact, because I had it all split up. This artifact is deprecated as of cycle 104. 

Contents of this document have been consolidated into artifact 59. That's where we want to go. Okay, so there we go. I had, so I had to ask for this. I had to ask, I had to recognize that, okay, my scenario three is sort of getting split up between these artifacts, and it's like, you know, I've got some scenario three at artifact 30, I've got some scenario three at artifact 70, and I decided to ask the AI. a cycle on that, reorganization. 

That's part of being the curator, the human in the loop. It's called context rot. It's a known thing. This allows you to spend a cycle to keep your context. from Roddy, that's right, it's real. So, but yeah, that's it. 

See, I'm glad that's what you're seeing by just getting into, now we're transitioning a bit to the, from theory to practice. Now you're seeing still theory, but because you didn't see it create this, maybe I wrote this. Oh, good God, Jesus Christ, look at this. 

I did not write this. 

So, but yeah, all these, yeah, all AI studio, yep, every copy paste. 

And then so it starts with the master artifact list. 

Which has every single artifact organized by the way look at this organized, dude, dude That's insane because yeah the first yeah, it keeps it up to date. Yeah. Yeah, so I So I write I want to make a tower defense game click create the prompts that gives me the whole prompt markdown file Which is just in the root directory down here at the bottom prompt markdown and see I was at cycle 125 on this project And see all my cycles are recorded because DCE every single cycle is in here So I have my own company, that's another thing. I have my own AI company. This is, DC is mine, dude. Okay, so let's just keep that in the back, keep, I, dude, I am the. 

most generous motherfucker you'll ever meet. But let's just keep, let's just, yeah. No, no, I'm happy to share, but this motherfucker is mine. And because here's the deal, here's the deal. I am happy to share because I am going exponential. I am going parabolic. 

And so if you wanna try to cut me dry, that's short -sighted thinking, bro. You wanna take my DCE and cut me dry? You're not gonna get the next version, bro. That's only two months old. Imagine what it looks like in four months, bro. Wait until I'm, wait until I'm making it, wait until I'm making it with Gemini 3. 

Gemini 3's on the horizon. 

It's on the horizon. There's, there's, there's, there's rumors. I'm just gonna code faster when I got 3. It's because it's my process, dude, right? Yeah, yeah, yeah. No, no, I wanted to, I wanted to get that, oh no, no, no, it's a fair, it's important, and it's very important that you know where I'm coming from, right? 

Yeah, yeah, yeah. Yeah, the way I would want it the way I'm thinking about monetizing it is um so over in the Version of building in the settings I have I have these choices, so I think there'll be a split right here, so if you want to get API Access you need to pay like you know five dollars a month. I don't care. It doesn't matter money is nothing But you get the free mode which is the manual copy and paste version, and then there's this demo mode, which can just be my local LLM, I don't, I could care less. It'll stream in, right, whatever, the users can, and then that'll, because then that will show them how the API works. work, right? 

So that the moment, just use the, no, yeah, pick us. Because then the moment they just, they love it, they want it, they're done copying and pasting, they want API, just show off the five bucks a month, right? I don't care. And then they can get the API, and then it's all straight. So that's how I think about it, I'll just make a website, right, you know? Then just that's that, you know. 

I've never been able to monetize anything, I'm not very good at it. 

Maybe this will be the thing I can monetize, right? 

I don't know. Maybe, maybe I can get some people to help me. Maybe I can get some people to help me. I don't know. Who knows, right? Okay, because I'm, yeah, yeah. 

No, you're right. 

Okay, so check, no, I know you said you gotta go. Maybe five minutes and then we'll, okay. So, finish this. Now I can start a company because I beat my first one. Let's just call it OpenAI for, just to get it over with. And then intention is all you need, paper's been published, this revolutionary transformer architect, you can change everything. 

But also, training. I could retrain now because I have a win replay data, so I could retrain my game AI agent. But also, I got new research available, see? 

A whole bunch of new research now. 

But now let's just fast forward, just unlock all research, so you can get a kind of glimpse, right? Researcher, data science, training optimization. I made a whole, and this isn't Angry Birds, right? This is not Angry Birds. This is not Angry Birds. So these are all the different AIs you can make. 

These are all the different components you can make. 

And they filter, so you can just see what the advanced image API needs. 

It just needs these. Yep, yep, yep. All the different compute, different data types. Text, coding, image, audio, video, robotics. You do data enrichment, actually. Raw web text, synthetic web text. 

And that's how you keep your data quality high. 

Oh, it's multiplayer. So I made the whole game before I even plugged an LLM into it. And then about three months into it, I was like, oh, let's just try to make a multiplayer. So I made a multiplayer. And then once I made a multiplayer, yeah, just some people, mostly people I know. A few people are from the internet, genuine. 

Yeah, he's my friend. He's a good friend. So yeah, he's a really smart guy too. Okay, so I'm just gonna go. 

Oh yeah, yeah, yeah. 

So once I had the chat window, That was when I had the idea to make my chatbot, because I was like, well, I already made a Slackbot. So I had my whole game, I got my Slackbot script, and I just added it as an artifact. I said, now let's make Ascentia. I call my AI Ascentia. 

Ascent AI, you put AI at the end, Ascentia. 

So that's my AI. It's turned off. Yeah, it's good. I turned it off right now because I'm actually pivoting to use VLLM, which is much more potent than LM Studio. And so I had not switched over the game to use the LLM. The game still uses LLM Studio, so I would have to turn off the AI over there, turn it on over here. 

I don't want to bother with it. the AI questions about the game and it will tell you how to play the game. You can also ask an AI in here about the page, or you can ask anything about the report, because I have over 100 ,000 tokens of report, or 300 ,000 that are also an embedding, so when you ask a question about that, you get all my data in the response from the AI. Dude, basic. 

That's actually yes. And that's so funny you said that. 

No, you're right. I said that to someone that thought I was being cheeky. They thought I was being snarky. I'm like, no, legit. Because she said, well, what do you think about it? I'm like, you can ask the AI what I think about it. 

And she's like, no, I want to know what you think. And I'm like, all the research was I painstakingly put it together. I read it. And if I didn't like it, I changed it. Because I would critique the model I would say this paragraph is wrong and here's why right so you're getting my answers You're getting my thought. Yeah, so like she and then she and then she's like, oh I get what you're saying She actually I see what you did there. 

She got it. She got it. Yeah, she's part of the union Yeah, okay. So, um, yeah, so next time absolutely. 

I'm glad we got this to make this connection Yeah, it'll be forever man because this is just gonna you know Parabolic man, and you will grow with it Once you get entwined with it the next model comes out you get more capable all your tricks will work Okay, so yeah, I'll just kind of leave it at that 

Yes, absolutely. I love that idea. So I gave you the extension already, so let me just show you how you would install it. I'm glad you asked that before we disconnect. 

All you would have to do with that file that you download, it's a v6 file, you just go into the extension section, and then a VS Code, it doesn't matter if it's Windows or Linux or Mac, you just click this button right here, as long as you've got like real VS Studio and you don't have like Community Edition, you'll have this option right here. 

Then you just you just shoot you point you point to the v6 file and then you'll get this little button right here And you're in yeah, the AI just made a spiral. 

Yeah That's right. That's right. That's right. We never that's right. 

That's talking about my DCE. 

That's right So so what's important? Yeah, so by all means by all means and maybe probably everyone has this you'll get stuck You'll like you won't even know where to click. It's confusing sometimes and I'm telling you like there's parts where I'm on my DC. Let me pull it over I'm over here in my DC and I'm like, shit, wait, do I right here? Do I need to start a new cycle? Wait, shit, wait, I forgot. 

Like, where am I at? You start to get into a flow and I'll help you. Once you get into the flow, you're in the flow. But there's, yeah, so, yeah, see? The solution in the accuracy environment. Because the problem, right? 

Revising something, dude? Oh my God, dude. Oh my God. 

What a nightmare. 

Also, you know, getting a little work done. 

Oh, you did read this. Great. Okay, good. Yes. I put this together in one evening. After I showed Eric, Nell, my DCE, he got to sit next to me and see it, right? 

But again, it's sort of falling on deaf ears. No shade. So, no, no, no. He, no, no, no. Yeah, he knows. Not in any meaningful way, right? 

Everyone can see and agree it's cool. Everyone can see and get that. But we need action, brother. We need to make movement. We need to start walking the walk. Yeah, and it's fresh, it's brand new. 

Dude, I literally just made it. I literally just made this thing. And I only made it because I showed the whole team before you showed up, the last demo day, two demo days ago. I showed, that was the first time the whole team saw my AI gig. And so they were astounded, but then they were like, what does this mean for us? And then, that's what I'm trying to say. 

It's content, bro. I created content. What do we do? So, but yeah, yeah, yeah, it helps. 

So yeah, I'm not a coder. 

I just know a lot about tech, because I grew up, I'm a gamer, right? So I have that edge, right? I think gamers all have an edge at this. Yeah, I could literally talk all day to you about that. But yeah, so you saw this. I made this for Eric in an evening because he suggested it. 

He suggested you should make a white paper. And so I literally that evening put this entire thing together. for him So this was a one evening thing because because how because I have my entire Context already brother and I just pivoted I said, okay, we're making a white paper on this extension. It's already got all the context It knows it knows all my artifacts. It's got all of the code and it's got all of the cycles of me inventing inventing this thing so this so So the way I do that as well is I take the, once I get the white paper written, it's basically, you know, it's basically this paragraphical form. And then I just basically for each page, for each section, I create an image prompt. 

And let's actually do it. Let's do it. Let's go to my DCE. 

Let's go to my artifacts. Let's go to my search image. 

Image. I got it. White paper generation plan. Yeah, where are the images? 

Processes asset. 

Okay, so here is the actual. 

white paper before it has images. Okay, there's one for the AISN game. Actually, no, let's look at this one. Here, yes. Image generation system prompt. I have a file like this somewhere for each project. 

It's a master system prompt for an image generation to create a consistent and thematically appropriate set of visual assets for whatever the project is. And so whatever sort of the theme of the images I want, like high tech, military, cyber security, you know, environment, technology, lighting, color palette, dominant, dark, amber, gold, cyan, it's going to have all the same sort of theme to it. And so all I do when it's image creation time, whatever I'm asking for, I just copy and paste this in with it. It's that simple. And then there was one in here, image generation system prompt, and then the CVPG banner image prompt. So this was, at some point, Original home page I felt a little bland, but I was like you know what we should have a banner image So I just said one of the cycles make an artifact to make an image banner to ask for an image banner So I can get an image banner, and it just broke this up And I just I literally just literally just copied that and dropped it into the to the running conversation I had and it came out with the banner. 

I just picked the one out of the ten I liked hyper -realistic cinematic ultra -wide aspect image of futuristic cemented earth or whatever And it tells me where I should put it, where I should name it when I get it and save it, right? You see, you build out all the structure, all that content, and then the book will write itself. Okay, let's write chapter one. And then you can read eight different chapter ones. Yeah, which one tickled your fancy? 

Which one got your goosebumps, bro? It's exactly what it is. I love that analogy. Choose your own adventure. What does OCO stand for? Offensive Cyber Company. No, I get you. 

Yeah, the bad guys. Yep. Yep. Here's the scenario one. A critical segment of the Combatant Command Headquarters network has been compromised. The SOC received high -fidelity alerts indicating unusual outbound traffic and potential data staging from the server in the J2 Directorate. 

Preliminary analysis suggests the activity aligns with DTPs of a known nation -state, cozy bearer, CPT, activated, conduct immediate alerting objectives. See? And if we had KSATs, see that's what Ben was asking in the meeting, right? He's like, how could we map this? I'm like, and that's what I said, this is all my own shit. Like what I meant was this is all from my own head. 

I haven't bought, why would I care to map to KSATs? I could care less about that. But if that's what you're interested in, yeah, drop the Excel in here, bro. Check the box. And then when you ask for learning objectives, you ask for learning objectives mapped to the KSATs. Guess what you're gonna get? 

Guess what you're gonna get? That's right, that's right. Look at this, dude. This is what it's going to make for this scenario. I need a DC, I need a seam, I need a file share, I need two workstations, a firewall, and the AI will help me build this whole network. 

Yes, dude, bare bones. 

Yeah, yes, actually, actually, yes, actually, yes. 

But also another thing is a lot of that is a lot of heavy lifting that we might not need to do, but also a lot of it, the AI knows Ansible, actually, and can just start helping make those as well. 

So my, yeah, yes, the Ansible rules, that's right, yep, I know. Scenario index, so as these scenarios grow, Bunny rabbit on the pancake bunny rabbit with a pancake on its head man. I don't know what what do you people need to see? So here's a bunny rabbit with a pancake on its head. Um, I think I think I think over time I think it's more people. I just hope you know sooner rather than later Oh, I already sent it to you. You already have it. 

You already have it. That's right. Yeah, basically, yeah, so That's right, that's right. This is the skill of the future. That's another thing I didn't say to you. Everyone, so that billion person workforce, this is what I'm trying to say. 

This is what I was trying to put in perspective. I got it now, I remember. This is the secondary skill set that everyone is gonna have, data curation. Because if you're a radiologist, if you're a hairstylist, if you're XYZ, it's about data labeling, data annotation. 

A reporter, a news reporter, or a stock analyst, or an accountant, it doesn't matter. 

All of them will have their own AI that Just like you said, it's my brain out, right? 

Everyone's gonna do the same thing. 

It's too valuable not to. You give everyone a chance. and then what when one person doesn't give a rat's ass about them they're just gonna what they're gonna accumulate government doesn't care about it they're gonna see someone oh look someone made a baking app for their bakery I have a bakery I have credits I never spent my credits oh I wonder what GPT -7 can do now with my credits ah strategically saving and you know this is They're appreciating assets. Like, there's a reason to save them and then there's a reason to use them strategically. Anyway, so yeah. That's the billion person workforce. 

Huh? Let's see. I think I just clicked here, right? 

Share, copy. 

Yeah, there it is. Yeah, so version 1 .10 is the final version of the one before I started integrating local. 

This is probably the one you were saying you couldn't download before. 

Yeah, because I can't just click and drag it. It's too big for Discord. I can email it to you. Oh, someone messaged me on my, literally my catalyst AI, probably a spammer. What the hell, dude? What are the odds? 

No one messaged me over there. Okay, one hour ago. Literally, what are the odds, dude? Talking about it one hour ago. Anyway, who cares? 

Seriously, what the fuck? 

I haven't touched that website for three fucking years, dude. Okay. Yeah, me too, man. Yeah, I agree, and it's just gonna get better, you know? Oh, that's another thing I wanna do, is I bet you, I bet you that's gonna be a real takeoff. is the moments people start using AI to make VR, because it's extremely difficult to make VR. 

AI, AI, AI's gonna make it easy. And we're gonna have it once, yeah, so. um, I just sent, yeah. So see if that link works. Yeah. Cause it still did turn it into a, um, Google drive link anyway, but, um, maybe it'll still work this way. 

Yes, it is exactly that. Yeah. Just drop me a message on discord. Yeah. When you're dicking and dicking around with it and then I'll just, you know, I can look over your shoulder. 

So that's sort of the, uh, cognitive apprenticeship model. 

Uh, let's actually, yeah, yeah. Basically it's, uh, I remember what it is. I remember this. Yes, yes, yes, yes. Modeling. coaching scaffolding and fading. So basically I do it, I'll show it to you and then you do it and I look over your shoulder while you do it. 

That's basically kind of this little, I forget the name of it. It starts with a D or something. Oh no, it was a car, it was a race car. It was some race car. I don't know if I'll find it. Anyway, I'll let you go, man. 

Yeah, yeah. No, it's fine. This is the only thing that's really important. You're not taking away my weekend. The more people that I empower turn into citizen architects, it's one more out of the 330 million. Yeah, no, for real, for real. 

Absolutely. That's where my headspace is at, so. Yeah, so you pick a project. You pick a project, something you're just passionate about, and ideally something you have intimate knowledge with. My friend said, you know, he's got a 60 -year -old aunt, she's an accountant, accountant all her life, he lives in Romania, he's saying, what is she going to do with the rest of her life? I said, make an accounting game, because it's something that she knows internally, she can go, what that allows you to do is you can go deep in, like many cycles deep, and you can, without hallucinations. 

Because you can gut check those hallucinations the moment it shows up because you know it counting like the back of your hand. So you're gaining, that's the skill set. You're gaining the gut check ability so that the moment the AI is going off, you're gonna see, you're gonna be like, why? Then you're gonna learn the true lessons. So that puts you in a position to gut check, by coding everything, having that intimate knowledge, picking a project that you have intimate knowledge in. And then you just go deep, go deep, go deep, and you learn all the side skills, the secondary skill set. 

Yep. that's right. That's feedback, that's right. So that's another part of the equation is in order to, because you don't know if it's a hallucination without the accurate feedback. And if you're an expert, you can give accurate feedback, like that's the wrong cybersecurity solution. That's expert feedback. 

But if you aren't an expert, you cannot give expert feedback. 

So then you can't go deep with the AI. 

But then if you get a code error, that's expert feedback that you don't have to create. It's created by the system. The code error, that's right. 

And you take that and you give that, that's expert feedback of the code that the AI just wrote. 

There's your feedback loop. There's your feedback loop, yeah. And because that's your feedback loop and you're witnessing it, you learn coding because you're in that feedback loop. 

And so, yes, yes, yes. 

It's already here. This is Star Trek level status. It's just not evenly distributed. 

And that's again, that's why I'm actually so gung -ho, dude. Why, David? What is your motivation? What's your selfishness? I want to be Star Trek, bro. I want to be Captain Kirk. 

I want to travel through space. And we're not going to fucking do it if we're fucking shooting each other for fucking Nikes, bro. It's so stupid. Look at the skills. Look at the tools we have, dude. We could solve every problem. 

We could explore this universe. Like, get your shit together. I want to do it in my lifetime. So there's my selfishness. I'm selfish as fuck, dude. I want to see it myself. 

Alright? So there we go. Yeah. Yeah. Yeah, yeah. Yeah, fold space, man. 

Yeah, fold that shit. Yeah, let's go. Yeah, man. All right. Now, all right. Anytime. 

I'm glad we got to connect like this. Yeah. Cool, man. All right. Have a good night. Bye.


Transcribed with Cockatoo
