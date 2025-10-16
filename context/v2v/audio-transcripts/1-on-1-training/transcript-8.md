Transcribed with Cockatoo


plugged it into Prisma Cloud to protect it. I think I've edited it in small amounts, and that's probably where we've ended. 

Perfect. So it's literally Notepad++ on steroids. This is the thing that would be, these are the two things that would be different about it than Notepad++, which would be, this is, I'll show you the original one, the vanilla Explorer, is this is a very, this is VS Code. 

Oh, okay. 

Yep. 

And it's not, yeah, it's not sitting in a browser by the looks, it's local installed. Yeah, and then, um, so over here are just a bunch of files I have in my, uh, game repo. 

So this is my game, all my game files. 

AISN. Yeah, AISN. And then this is just a regular old VS Code Explorer tab, and all the things are really nicely, you'll learn them over time. Um, this is just, you know, Notepad++ over here, Notepad++ territory. And then what Notepad++ doesn't have is this. This is glory. 

I love this. This is so nice. I wish Notepad++ had a good one. It has one, it sucks. I don't use it. 

So anyway, anyway. 

Oh, a plug -in. 

Dude, that's a good idea. Anyway, I haven't even thought about a Notepad++ plug -in, but it's okay. I'm in VS Code territory now, so that's okay. That's a good idea. Okay, so anyway, now my version is like this. So it's very similar, except of the Explorer. 

I've created a VS Code extension that is going to become a data, it's your data curation environment. See, data curation. Because it's not about making code anymore. That's why my product is going to be way better because I'm already three steps ahead. I'm making this for curation, not coding, because coding is gone. I'm already planning for coding being gone. 

Okay, because I've proven it three years ago. So you're just going to curate data, and then you're going to ask for code solutions, and you'll get them. The better your data is curated, the better your code solutions. Trust me. All right. So So what you do, how do you query data? 

I've made it so simple, it's a checkbox. So let me give you an example of something that would have taken me one to two days to do. So let's just say I downloaded a brand new repo, a brand new GitHub project, and I'm trying to understand it. Well, good luck, right? So with my system, immediately once downloading it, I can see there's 3 ,300 files. And it's a total of 36 million tokens. 

Now that sounds like, first of all, that's cool to know. I don't call it need to know, I call it neat to know. That's neat to know, all right? 

I coined that, I coined that. Huh? 

And tell me, I'll just throw questions at you as you go on. Why is there a token account? Beautiful question. 

So let me demo a token really quick. 

There is a beautiful website, so OpenAI . com. token counter so tokens are basically their customer of indolence by the way australia is a customer of uki i learned that today australia uh military my uki ultimate knowledge institute the company i create them so yeah i learned that today australian defense is our one of our customers. So okay, so what we're looking at here is my name is David. Well, yep. 

So you're seeing a representation. This is one token, this is one token. And then so let me actually put another comma. This is just to get some more commas. Alright, so you see this comma, this comma, this comma, they're all one token. Let's go over here. 

That is the comma 11. There it is again, 11. So comma is the token number 11. 

It's a key value pair. 

That is all it is. Excellent. And I'm recording this as well. 

So I will be able to turn all this into a real training so other people won't have to hear me ramble. 

They'll listen to Scarlett Johansson. All right. So what you're seeing, so tokens are arbitrary. There's a whole field of research called tokenization, tokenomics. They create tokens. They're just symbols. 

It's just a symbolic representation. It's another way of encoding. You know, it's all arbitrary. So let's look at something as well. So comma, comma, comma, comma, comma, space, comma, comma, comma. Okay, so There. 

So token IDs. That last one is a big one. So that last one is 18 ,000. Two commas. So they didn't get the idea to like put two commas as a token until a while. They make tokens over time. 

They just, the next number in the sequence. So token number 11 was a comma, right? And then let's look at a simple token. I that's gonna be hard to find there we go. I can delete that and then we're 575 that's pretty low because they make tokens they invent more tokens as they think about them because an example would be you know counting remember how bad AI was accounting like Brackets and shit. Well once they started putting them into tokens and stuff it got better but so so Characters are represented as tokens to AIs. 

But as you can see, they're literally just one dimensional vectors. That's what it is. That's what a vector is. You're looking at a 1D tensor. This is it. This is you're getting into machine learning all of a sudden. 

It's so stupidly basic. It's stupid. But this is it. It's all key value pairs. Everything is just text. This is just a 1D representation of the information. 

And then that's actually what I learned when I created the embedding for my Slackbot. When that embedding file came back to me, it looked like this. It was just a shit ton of these strings. I was like, that's all it is? It's just a bunch of numbers? I don't know what's going on, but I think I understand. 

It seems simple enough, and it has been the whole time. 

Okay, so that's a good question. 

That's the basics, all right? 

So, huh? 

What do they do with them? Good question. When you train on this, magical relationships appear in the three -dimensional vector space. It's actually 700 dimensions. One dimension could be alpha. like A, B, C, D, but in that dimension, K and Q are very far apart, right? 

King and Queen. But in another vector space, in another dimension, King and Queen have a relationship, male and female, or also even closer, maybe in a deck of cards, right? So from different dimensions, different set, the same vectors will group differently. and you can find patterns in that. And what the pattern ends up being, and this is where it gets cool, is when you see something like aunt, uncle, or king, queen, husband, wife, male, female, when you look at those two pair relationships within the vector space, the vector from one point to the other is always the same. So it's always the same vector from uncle to aunt, to king to queen, wherever they appear in the vector space. 

So there's these relationships that come out of the training. on the tokens and the data, blah, blah, blah. That's why they do it. And they've tried to not do it this way. I've read the research and it always fails and doesn't do as good. So this is the way it works. 

So this is the way it works. So that's a great question. Great question. But that's all they are. And so if you look, it's just a general rule. So they're always adding more, always adding more. 

But general rule of thumb is you can divide the number of characters by four. And that's all I do. See, 75 divided by four is almost 20. It's 19, right? Something. Yeah. 

So, so that's what I do to get the token count. 

And that matters because that's what everything is based off of when you're for the cost is based off tokens. And the and the amount of you know, Gemini 2 .5 pro can only take 1 million. So a more diverse data set, if it had like a new word every time, you're going to have a new token for everyone. No, the tokens are already set. The tokens are already set. That's why the comma was 11. 

And OpenAI has written the, created their own tokens sets. 

So you can't know what they are. 

You can predict. You can use their TikTok. 

They don't make that public? 

Uh, no, no. No, I don't think so. Is it the same across like if you're talking Google, Google Gemini as opposed to OpenAI, GPT -5? No, it's totally, no totally, totally up to the discretion of the machine learning engineer. Yeah, it's part of the baking the, baking the, you can't do it without, you can't do it one without the other. Yep, you have to. 

It would be one of the classes, it would be one of the classes as a AI, as a machine learning school. But you just got the crash course. That's all you need to know about it because it hasn't stopped me to know anything more. Once I figured it out, after I figured it out, that's how I explain it. That's all it is. There's nothing more to it than that. 

You've seen it. I wrote them out. These are the tokens. So great question. And I always know when the student is paying attention when they ask that specific question. All right. 

So what we're doing now is we can easily just see the source folder, which is basically all my code. So I can just select that. And by selecting that, it auto -populates and sorts by token count all the files I just selected. And I can immediately see, I know this is a text file, I know these are basically my prompt files. This is a WAV file. This is just a JSON file. 

This is a LOG file. This is another WAV file, another WAV file. 

Well, I can just press Delete or click Remove Selected. 

And now, bada bing, bada boom, I am under $1 ,000 ,000. I am at $717 ,000. So what are you doing at the moment and why are you looking at these? if you if you the internet is your hard drive all code that is on github can become your starting point and so it will become your best thing is if you can find the source code of the project very similar to what you're looking for then that but that then involves you to dissect such reverse engineer a so a random code base good fuck good fucking luck unless you just do what i just did which is exactly that Just look at the source and then from there. 

I literally there was only four files So anyone who has no idea what they don't source is source The source is where you put your your source code so that everyone would start there and then there was only four files There were there were text massive text files and some weight files, which honestly i'll make it so the way files don't even get selected Automatically that whittling down because it's all otherwise. 

You don't know where all the files are You know, they're all in all kinds of folders. I mean look there's first of all it's 3300 which is a lot and then it's still 268 is still a lot so i whittled it down he said me if I'm wrong, but it feels like you are performing some level of file management to get it to an organizational level so you can then do something else with this, like spawn out a module or use it as a component in something else. You need image files, video file. You have to curate your data. VS Code is one phenomenal tool to do it with text. 

And so you're seeing it with code, which is the pinnacle use case. In my opinion, if it can do code, it can do everything below. English would count as below code. Because in the sense that English was invented however long ago, it's very messy. There's no logical rules to it. native languages in general, versus a programming language which has specific rule logic built into it, all kinds of things. 

So it's got a higher barrier of acceptance. TypeScript, case in point, you get fucking TypeScript errors. You get what I'm saying? But you could put three paragraphs together and you'd be hard -pressed to say which one's truly better. That's subjective. That's why I put code as a higher standard, because if it can nail code, then it can do text. 

Anyway, now that's largely a loose analogy, but it's going to hold true. 

All right. 

Code is the peak. All right. So for this, just for the simple thing is nevermind it's actually creating code. This is the rules. Both have rules. 

One is more harder to get right. 

So let's say it that way. Right? If you can play chess, you can play checkers. I don't know. Anyway. So, but yeah, you're right. 

So now what I, so all I've done though, is I'm able to now click flatten context, which create, which creates this file. 

It creates this one flattened repo file, which it places it. Let me just minimize everything. It just places it right, right in. It does, it does. It's in Markdown, yep. I first was doing text, but I found Markdown is better because you get the pretty colors. 

I like colors. But yeah, do you see? So it has flattened and numbered and got metadata and collected all those files in such a way that you can control A, copy everything. The whole code base. And I can go straight to an AI and ask questions on this code base. Hey, tell me, what is this code? 

How do they structure this? How do they do this part? Break down this and create a version of this that doesn't like, see what I'm saying? Bada bing, bada boom. Seriously, it's super powerful. The whole internet is your oyster. 

What are you going to do with all that data? And how are you going to curate it for your new use cases? The more you've spent on the internet, the more you know is out there and you can leverage it. So that's what we're going to do. And now let me go to my documentation section because that's what you will be creating initially. You'll be creating a bunch of documents and they will be like this one. 

Don't worry too much about the blah blah blah. It's just basically a startup game. Actually, let's go to my other because it's not a game. This is a much cleaner, newer document. way more organized i'm sure it's even noticeable so so you would be creating no matter what you're doing you would need a project vision and goals document you uh you would need um some documents that that articulate like the file structure because once you once you make this artifact yes yes every single yes every yes so the way it works is i already have this structure built out because i've been doing this for a while and so i always take my late last project prompt and it's sort of like a bootload to like just say you know like as a training it's all training data so it's just bootload and say do we're doing a new project and then it just knows to make new artifacts because i've spelled out And in my interaction schema, line number one, artifacts are complete individual enclosed texts in these tags separated by three back ticks. And then our artifacts are sources of truth throughout multiple cycles. 

So as such, over time, as issues occur, or code repeatedly regresses in the same way, seek to align our source of truth such that the root cause of such occurrences is codified blah, blah, blah, blah. 

See, I've already said the words so that the output looks like. 

Let me just scroll to the top of multiple responses so you can see the pattern. 

So you can see at the top it gives me its thoughts, it gives me its course of action, it tells me what files it's going to update, and then it gives me the actual files. Each time, every time, course of action, files updated, course of action, course of action, files updated, course of action, hello, here are my thoughts, course of action, here are the five files. 

See? 

Is course of action, I'm trying to relate this to like... This is the AI's response to me. This is what it's about to do for me. So they're like a subroutine, would that be fair to say? Every cycle could be considered a subroutine if you want. I consider cycles as a current state in time. 

So you take a snapshot of the current state in time with the flattened repo, the current state of your project, and then your intention what you want how you want its future state to be and then you don't know how good the ai is the ai in the future will do a better job with the same prompt it'll get you further to this future state but yeah then you take you take the state it can get you to and then you test it and then you give it new new feedback closer to the current state then your mind that only exists in your mind until you see it in reality and then the documentation artifacts are the middle that you both agree on that's how you seek alignment is the source of truth documentation and and now minimize this let's go back to those documentations yes i asked the ai for a file structure and this is what i get this is a planning document and then it can update it see updated on cycle two right because first i had a plan and then i went out and i found a repo that adds checkboxes. It's a GitHub extension that adds checkboxes just like I wanted. So I downloaded that repo. I dropped it in. It's right here. And we can see, see? 

Creator AI. 

And so I've got that in my, let me go to my flattened repo. 

the creator AI. Let me just, so we can get a glimpse of how many of those files are in here. See, this whole sec. Just out of interest, like, because I know VSS is stored locally, where is all this stuff sitting in a repo? Good question. For this particular project, it's on my laptop, and I've got a GitHub repo. 

Now, my game, that's a better situation because that's more of telling you what the future holds. My game is running on my game PC that I've got set up in my closet. All it's got connected is the power and the internet. It's running my game server. It's running the LLMs. So when you go to AISynth . 

game, you hit my server. I was running my Lineage server on there, I was running my Lineage Discord bot on there, I was running my Lineage website on there. A game server, website, all that on one box. When I was learning still, back in November. And then I went to the game, the AISN game up on that server. 

So all you need is literally just a PC running in your fucking garage, as long as it's got internet and power, we can get your hosting You get host your own shit. 

I would stay away from cloud as much as you can As long as you can because it literally there's no marginal cost whatsoever. 

It's just your electricity It's $20 a month for your computer to stay on all day No, yeah, which is not which is not which is not which is not doesn't cost you more to use your internet unless 

you have, unless you don't have unlimited data or something for your house, which I don't know how that works in America, most civilized parts of America anyway, I don't know. Anyway. Okay. 

Yeah, yeah, plans. Run what? What were your LLMs? Like I'm trying to, I'm seeing if there's any parallels. Like I'm literally have my left shoulder. So first of all, first of all, you're free. 

You're first of all, you're free to use my LLMs. So you don't even need to run your own LLM. You can just make your own API calls. If you ever, first of all, 99 % of what you do that won't be using an LLM, you'll just be making basic traditional scripts. You'll be using an LLM to create them. That's where the real trick is. 

And then eventually, over time, you'll start to get good ideas of how you can actually use LLMs, not like anyone's thinking about, in your project, in it, in it. So don't put the cart before your horse, thinking you've got to make something LLM integrated. No, no, no. 

But rest assured, I've already got a box running, and you can just hit it, and I won't charge you, you know what I'm saying? 

There's no difference between you hitting mine or you hitting your own. It's an API call. And so I got you covered there. 

Yeah. 

I'm just trying to see if there's any similarities to like the CryptoMiner I made. 

Yes, it's extremely similar. It's basically VM virtual RAM, GPU RAM. So I actually can pull it up and click around a little bit. 

But it's... 

I don't want to... Yeah. Yeah, yeah, yeah. Me too. I was just about to say the same thing. It's not... 

I'm very used to being an infrastructure guy of olden days. Well, you will get... Then that's where I was coming to the CICD as well. That's why I said you're going to get to do everything in one project. and because you're going to set I would recommend you set up your own PC so that you can do your own CI CD and then you can make it as secure as your heart's content and you'll know you see you'll know it intimately because it's everything all yours through through and then it's all translatable. The moment you try to do it in the cloud it'll be so easy because you've done every piece of it locally. 

Just like I have. Look, this is my database running on the same box. Whatever, I forgot to mention I have a database running. That's where the database is running. Yes, it is SQL. I use SQL. 

I have my AI write the SQL statements, design the database. I use Prisma Schema. It's so freaking easy. I love it. 

I've made the most stupendous pivot table. 

Dude, it's insane. Okay, anyway, it's so much fun to mine data in a database when you've got an AI to help you make the SQL queries, bro. It's so much fun, dude. Okay, that's where I got the term neat to know while I was doing all the SQL shit, dude. I was like, this is neat. 

This is neat to know. 

All right. 

But just so we have it up, I can just load a model like Quinn. 

This is a Chinese model. 

It's the Chinese models are killing it right now, unfortunately. 

It's 13 gigabytes, and it'll be loaded into my GPU. 

So you can see my... 

Being an AI dummy, tell me what is another example of a model that I might have encountered. Is Gemini a model? 

Yes, sir. 

Is Chapman MBT a model? They're both, yes, they are. They are? They are. 

Yep. 

Okay, so let's say it like this. So the model is the AI, and then ChatGBT is a website that is sending an API call to the model. And that's... The LLM is the model. Yeah, a large language model, yeah. 

And that's what I'm loading, and that's what I have loaded. 

And so now I've loaded... Yes, sir. I've got one loaded. 

Quinn is a large... 

No, it's okay, it's okay. It's putting all these... It's putting all these silly, yeah, write me a Star Trek meets Star Wars fan. What's this interface? This is a great interface to run models on because it automatically gets you an API. So like, I've got this up ready as an API. 

Let me find the right button. Curl. No. 

Yeah, see reachable at 192 .168 .1 .185. 

So every device in my home network could now hit this API, so it could talk to this LLM. 

I could code my whole house to be a smart house, and it could use the LLM. And I could even make this global if I want. 

I could call my own LLM from my house. I could make whatever I want. Yeah, because it's reachable at... Yeah, I'm preaching to the choir. It's clunky as hell to have IOI port on the liquid network. Well, here we go. 

Amazon's Alexa AI is just a massive steaming turd. Anyone that enables it wants to get rid of it immediately. Yeah, you could make your own that's killer and then who knows, maybe it takes off. But again, any project, it doesn't matter. 

If that's what you want to do, that could be. 

It doesn't matter. It's just a tech project that you're passionate about. so that you'll keep getting to the virtuous cycle But if you and we'll be done with this after this, but as you can see I asked start writing Star Trek meet Star Wars fanfiction it thought so it's a thinking model for 7 .7 seconds. Okay, the user wants this. Let me think of a plot blah blah blah. Here's some characters blah blah Okay, and then it wrote me if Star Trek meet Star Wars fanfiction and it's an impressive 90 tokens per second I got 2000 tokens output. 

That's pretty, that's, those are decent. This is all decent. 

Yeah. Is it readable as a human though? Like it, does it make sense? And I asked this, it's a loaded question because a mate of mine went through this. He was writing fan fiction based on a role -playing game he made and he was, he found it was excellent at things like write it in the theme of, like writing as the theme of Asimov or his favorite sci -fi. When I went and read it, It was almost like a third -person view of a story. 

There was no immersion, not the author. You couldn't see yourself in that protagonist's mind. And I didn't like it at all. And I'll tell you, what you're doing right there, the critique, this critique is what would be the next cycle. 

So you would have that as your rough draft. 

That would become an artifact. So that version That of that output that the AI gave is like your chapter one artifact And then you critique that you explain because that's how you make that's how you make it yours That's how you make your version way better than anything else is because it becomes a part of you when you give it your metacognition You're thinking about thinking this is why I don't like it. 

Here's and then that's going to follow Throughout it's going to continue to write that way for you Especially if you use my cycles solution where you don't lose this context and you don't have to repeat yourself because you've only said it once and you don't start a new conversation. But that's actually what people miss. And Lakshmi, that's what actually got Lakshmi to understand that's the training data and that's the human taste. There should be a whole class on human taste because that's what the jobs are in the future is what is your taste? Because the products are direct correlation to the taste of the individual creating them. You're gonna critique it different than I critique it. 

Of course. And did you massage this at all after the fact like you're talking about? Or is this exactly how it came out? I just gave it this, and this is how it came out. And again, now, I haven't read it, but what I will say is Quinn is significantly better. And what I have, dude, my game is, so here, let's just really quick. 

AI is sent actually. So this is Quinn when it responds here. This is Quinn. This is it as well. 

So it's responsive and I can ask like, how do components work? I have a FAQ document that it will check and then I can turn off thinking. So the user can turn it. I want the users to be able to see things. But yeah, actually I can tell it's broken. It's not getting the, immediately I can tell it's not getting the embedding. 

So I have to go dig into that. But essentially what it, it would say is it would give actual names of components, it would explain exactly that they're used to make modules, but I can immediately see these hallucinations are because it doesn't know, because it doesn't have the docu... Let me look. My wife and I just started playing GTA 5 again after a million years and we got into online. 

And the first thing I got in there, I thought, why isn't AI dynamically modifying the game as we play? 

Why isn't that a thing yet? Like, if I go in there, I've played it a thousand times. It's going to be the same every time. Why, if it doesn't know my play style, can it not generate? Because the game devs don't think this way. Simply. 

That's it. They don't think as a curator. That's it. They don't use the AI to make because you could just ask the AI to do exactly that and it'll create the structure to do that Dude, because you know, it needs to all to do that, right? It needs a it just needs the right contextual data the historical record and then you just have to consider things like Token limits of the AI you're using but it's all possible right now But you can see right here. See it skipped the FICE search and Um, because, um, they tried to use the game knowledge base Facebook AI semantic search. 

That's how you do, uh, that's how you do rag retrieval, augmented generation, which is, um, like way advanced. That is nothing you need at any of the first year. Like seriously, like what I mean is rag is when you have like millions and millions and millions and millions of tokens. Don't worry about rag. Yeah. Yeah. 

Yeah. Rag is just how I created the Slack bot. you all you do is you take the big document and you chunk it out into sizes of 1200 characters and then you number them basically and then you turn those into vectors and then once you have those in vectors you can when a new query comes in you can turn that query into a vector and then you can do the FICE the Facebook AI semantic search to see which of the vectors you've created is the most similar to the user's vector. And lo and behold, that's the one that has the most similar content. And you give it like the 10 most similar, and then bada bing, bada boom, you've got a bot that just checked the knowledge base and referenced it like Google. 

Then it's just a matter of how good was your knowledge base, how organized was your knowledge base. That's exactly how I did the Slackbot. 

And then I did XOR, and then I added XDR, and then I added XIM, and it had no problem surfacing the right thing for the right thing. 

It was fine, it was perfect. 

So, but that's, see, you can see, that's just the problem. I fudged my FICE knowledge base, but that's all that's going on. And I'm very happy with the performance of Quinn. And it sucks, I'm scared, because I think America's about to get her asses kicked by China. So, all right, anyway. Yeah, so. 

That's just me using it there. Yep. Yep. That's the training. It's how you make the components. 

Yep. 

Or, uh, do the research over here. Let me get the research tree. You want to see some shit? 

You want to see some shit? Let me research, unlock all research. You ready? All right. All right. So this is just one tree and this is shit like, um, emergent intelligence principles, study of how complex intelligent behaviors can emerge from simpler systems. 

Um, The management tab, so I'll just click product scaling one, unlocks the fifth feature slot, training methodology, architectures, this monster, mixture of experts, sparse mixture of layer experts for efficient scaling, advanced motion estimation for a video model, sophisticated algorithms for tracking motion, it unlocks a component that you need. So what else? are all elements of the game, right? This isn't modifying the game. This is like unlocking a level or getting... That's what you're, yeah, you're researching. 

Yep, you have your researchers, you assign researchers, and you create, you get research points. It costs, in your days, you have time. It costs 600 research. So your character, yeah, and then you have employees, so I can hire some researchers, and then I can assign them and increase my RP as they love, they get, they have levels. So as they do research, they'll get more levels. See core research, skills, mood, productivity, traits, bonuses. 

You can fire them. The founders, you can send the founders on PTO. So such is real. Some more people, some random, this person showed up. Okay, random people. But yeah, you create datasets. 

Let me just get some datasets going. You create datasets. The arrows show up in between to show you where things actually go and stuff. Ah, compute, cost compute. To get everyone into your, to make money, right? But the goal, you win when you have 7 billion people using your world model, because that's essentially everyone's in your simulation. 

So the first AI you make is a game AI to play Dota. And so that's what I have. I have a Dota bot that will play Dota. you know, against a simulated human player, right? Simulated five human players. And then after you win your first match, then that's when the attention is all you need research paper comes out. 

That's when you can make your first large language model API, and then you can make your chat bot, and then you can level those up, and then you can make an image model, and then you can make a coding model, and then you can make a video model, and an audio model, and a robotics model. and a multi -modal model, and then finally a world model. There's also multiplayer. You can challenge another player to this exact match. They're a game AI agent versus yours. Yeah, dude. 

No shit. So this is the potential, bro. The vibe coding potential. You can make literally the world as your oyster or whatever you can think. This alone will blow people's minds. And this is just one of the first features I made. 

It is. It's scary. That's when China comes in. Because also, I built a whole report system into this as well that I showed you. That's in the game. Like, anyone can click and start to actually realize, like, holy shit. 

Like, the future's unwritten. It's time to build. Thank you for exploring the Ascent Report. The future's unwritten. You've reached the end of the report. Analysis presented here is a diagnosis of a critical challenge and a proposal for a hopeful path forward. 

Choice between being a ghost in the machine or an architect of the future is now yours. So. giving people a choice after they read and they realized, oh shit, I should make a weather app, I should create a to -do list, I should design an interactive resume, I should build a portfolio site, I should fucking vibe code a personal expense tracker, dude. Fucking whatever, I got something to do. of these images You know just to fucking until someone gets a fucking idea Go to fucking do something because this shit's like like if we don't we China will rest your ha ha the Optimism of a nation on a topic is a lead on a technology is a lead indicator of that nation's adoption of that technology The optimism of American AI is at 39 % going down. Optimism in China on AI is like 79 % going up. 

If that is to be any indicator. The problem is most AI projects are failing because people don't understand data. I'm telling you. See, that's everyone in the background. That's everyone in the background at work. They're all trying to do the task normally, and here's a data curator fucking nailing it, dude, just with their tools. 

That's what you're going to turn into with this shit. 

I got some guys. 

Future is not labeled by many hands, but architected by a few skilled minds. 

Future of data is cultivation, not just collection. You collect the data and then you cultivate it. The data sets, where data becomes knowledge. Weeding out the biases. 

Where others see rows of data, the curator sees a garden to cultivate. growing data, citizen architect, first you're the vibe coder, your annotator, so that's what you're doing, you're tagging things, key value pairs, you're just tagging things. And then you just go through the stages to become the 100x curator. This section is sort of really getting into the details of it, and maybe spend some time reading just this section, part five, the vibe coding virtualization, And all the graphics here, you probably already told me, is that all JPT? Generated? 

It is? There's over, uh, manually by sending the prompt and getting the response and critiquing it, editing, if there's any, any, uh, uh, like slightly incorrect words, I can mostly edit it out and fix it. Unless it's too, too horrendous. I can't fix it. Um, yeah. Much less scale. 

I've found that if I used, um, Gemini to generate the prompt and then I had a paid mid journey account. 

The stuff that came out of that I can make like D -Demon. I started making icons, just icons, for training at work and then got to the point where I was starting to introduce them and get just crazy good feedback from like the likes of Unit 42. I had this soccer ball shape of 13 different groups of cloud attributes that could be ingested and monitored and managed and acted on by managed XCIN. which is the next sort of AI iteration of XCI that UNIT -42 provided a service for. And it got to the stage where it was on its third review, and then was told, oh no, we can't have AI images in any training material. And I had to go back to like 1991 print shop. 

Like, and why, they didn't even have shit for like SAS or SCA or any of the features in there. I was like, oh God, I'm in the wrong job. 

I'm telling them, I'm dragging them into the future. 

But yes. I love that this has so much flexibility. bespoke iterations of an image prompt for each paragraph for each section, basically. And I got all the image prompts back and then I sent them manually all four. So you can see here where I got the whole prompt. So right down to see the, oh, it's going to load on me. 

Rats. But, but rinse and repeat, dude, rinse and repeat. Just a PLA shopping list. 

People's Liberation Army. 

All right. 

Yeah, I cover everything in this report, dude. 

I promise you. 

People just don't have the fucking bandwidth to sit down and look at it, even though Scarlett Johansson's reading it to them. I need tits. 

I just need tits in their face, and then they'll pay it. 

I swear to God, dude. 

I don't know what to do. Anyway, but, yeah. 

Yeah, yeah, my game. 

Yeah, dude. 

Yeah, my game. Go to my game. 

Click the button. 

Yeah, everyone in the world can go, and they just don't, you know? 

Yeah. 

That's shit. Yeah. You're not worried about like your IP getting out or anything like that? No, dude, because I will create it all over again. Check this out. Oh, look, I'm in. 

Choose your founder. Yeah. And then if you log in, you'll be actually in multiplayer in the top, right? Log in with Google. Oh, go ahead. Go ahead. 

Yeah. Total cost is $0. And the report is not coming soon. It's built. So that's what the game you're doing. That's what you saw the competition system. 

I haven't updated the objective to update with that. I have to circle back. 

I stopped making the game, I started making the report, and now I started making the extension. 

And then if I want, I can circle back and make the game once I have my own extension as a tool. But the game was a proving ground for myself. Now I'm making, literally, this extension is going to be so valuable. No, you've got to log in at the top right, and then you'll appear in the multiplayer. Yes, yes, yes, because I predict your IP I predict your your location based off your IP oh Yeah, I it's buggy sometime. I've it's gone back and forth I've struggled to keep the flag to visually appear to you, and I don't see it. 

It's it's wonky. It's wonky Just the flag Yeah, you can change your name. Click in the bottom right, the hamburger icon. In the settings, you can set your display name. And you can set your flag as well. Large language mutator. 

Nice. You could take this template, this game. If you go through the report, I actually have a hyperlink to the YouTube tutorial that I started this project with. It basically was what you see. The person in seven hours created this world and if you see these little areas of grass, they made a simple little Pokemon game where if you walk in this you might get a Pokemon battle and then you have to do a simple little Pokemon battle. 

So he made that game. Yeah, he made that game in seven hours. So I took that. 

Just some YouTuber made a YouTube tutorial. 

There are thousands of full project YouTube tutorials, but you probably won't need that anymore. That's old school technology. That's old school learning. Seriously, you can make your own tutorial with AI with the documentation files. So I followed that because I didn't know anything about making it my own game. I made my own lineage server, like I ran my own lineage server, but I didn't make my own game from scratch. 

And so that's what I wanted to do with Gemini in March to start this project. And so I found, and I wanted to do the Pokemon style, that was my aesthetic I was going for. So I found a project online that met my criteria. It was a Pixy .js world. So this is a Pixy .js engine. 

It's called Pixy . 

js. That's the library. And then I built all the interaction, all the windows you see, all the menus. So basically the entire game, that's all React. A library called React, a JavaScript library. And so basically this whole game is those two libraries combined. 

If you took away the Pixie . 

js, you would have just all the windows and the game would be literally the same. 

So it's the whole game. 

I could take it and put into like a real three dimensional world in the future. 

Like, uh, I can make a real world, not just this Pixie .js world and all the game code, the mechanics of the game, the hiring, the components, the tech tree. That's all the systems are all written because they're kind of trying to duplicate my game. as nuts as the Unreal Engine or something? You would do it in Unreal and that's kind of what I'm waiting for is for the Unreal people to start integrating AI into their tooling so that I don't have to necessarily create individual pixel perfect sprites which is the current blocker for me turning this island into an office because this is supposed to be a company not a friggin island. Resort or whatever. Yeah, but I'm not bothering with that because it would be a waste of my time when the tooling isn't ready I'm spending my time creating the the coat. 

You see I'm saying I'm choosing not to focus on the Sprite and the animation and the creating images and stuff. 

I'm choosing to focus on creating code Yeah, yeah, that's it. Yeah. Yeah. So by all means glance through that whenever you have time, but Where do you get what? Oh, top right. Top right. 

You see the question mark? Yeah. Now, the one thing I was going to show you was you can see the quality of the images as I learned as I made 2000 of them. That's the that's the virtuous cycle. That's the iterative learning. That's the I had the idea. 

Watch this. Can you see my screen? All right. So this is one of the literally this was the starting image of my whole paper before I made like the title page and shit. it's a pretty image but there's no you don't really you don't know what the author is really truly intending. 

Yeah, growing a brain. Okay, growing a brain. Cool. What do the gloves mean? What don't the gloves mean? Those are latex. 

What is that? You don't know. You don't really. So versus something like this, where you've got words, which when you see AI generated words, it's like, whoa, holy shit, that's different. I haven't seen that before. But not only the allegories. 

So the war for the mind has begun. The battle for the mind is the final frontier. The great game is no longer for territory, but for thought itself. I didn't write these. I had the idea to ask Gemini to tell the diffusion model to write an allegory. You know what I'm saying? 

So it was a surprise every time it came back to me. It was new and different one every time. The new front line is the human mind, where the weapon is information and the battlefield is the mind. The human mind is the new battle space. The human mind is the battlefield. Cognitive security imperative. 

You get the picture. So look at the difference. You get it. You totally know what they're trying to say. Strategic boomerang. The skills we have sent away have come back to haunt us. 

The skills we have sent abroad have returned as a weapon in the hands of our competitors. 

The skills we export today return as a weapon of tomorrow. 

Exporting jobs. Importing competition. Manufacturing ecosystem. Apple investment in China. look at this one bro yes look at this one fucking calling them out there's huawei there's apple right dude apple investment in china um them handing it over into apple It looks like Tom Cruise or something. 

That's the skill you gain working with AI. This is the hidden curriculum. The hidden curriculum. Domain expertise, critical thinking, nuanced judgment, bias detection, knowledge architecture, data curation, systemic analysis, pattern recognition, logical consistency, strategic curation. It's a whole hidden curriculum that is being, that the de -professional workforce is causing a lack of professionalization to happen. You see where I'm going? 

You see why that's, this is, I'm screaming like Chicken Little. If you follow this domino effect of that, it's China is ready in 2049 and we're not. World War 3. World War 3, of course. When these tools are... Okay, when we realize this level of productivity that I'm proving is possible with my game, imagine when all the generals have this ability, when all the 

nation has this ability because they have a strategic doctrine of inland sourcing. So they don't export the data jobs, the data labeling jobs for AI, because that's the step one learning stone to learn these cognitive skills that I have proven from training AI, you gain. They know this. They started planning this in 2017. I have a, that's this section up here. They're a decade, a plan decades in the making is now years from completion. 

Part of one of their pillars is inland sourcing where they're basic. Have you seen that picture on Reddit? I don't know if you've seen that picture of that mountain being cut in half basically to build the highway. All right, this, it was very popular recently, a few weeks ago. Very, very cool, very popular. Huh, sorry? 

No, no, no, this is real. China did this. This is China built a highway and they cut mountains to do it. The reason why it's in here is, oh, it's a cool, interesting feat of engineering. It looks cool, right? Cool image. 

It's interesting as fuck, right? Let me give you, let me give you my strategic analysis of this image. This province is the poorest province in China. It is the most mountainous region in China. That's why it's poor. It's also the primary, it is, it was the most 

number one primary target for the inland sourcing operation to build data labeling hubs, massive factories where they put data annotators, where they're safe from foreign intelligence services influence. That's this province. 

Why do you think they built this highway in the poorest province? 

I don't need to be much more intelligent to put more, that's why. AI is why. This is just one of the images I've seen on Reddit. Another image I've seen is a massive power plant that they built. Solar power plant in the desert, why? I'll show you why. 

I have a section on this right here. Because they used the front ALX solutions, this is a cool one, which is a front, that's how DeepSeek and PLA got the 1500 NVIDIA H100s, 1500 ,000. that they're now deploying in the desert in Xinjiang. Well, however you say that for DeepSeek. So like it's a whole weaponized ecosystem. The PLA is working with universities, research institutions, data center operators, foreign intelligence to steal because it's a it's a cognitive war. 

It's a cold war. And it's it they have the they're training the people. They're they're data hungry. Right. 

They're they're CPU hungry. 

But it's it's Then they're building the best DeepSeek, the best open source models that will then be prolific throughout the world. And the problem with that, I have a section on that. Where's the Yeah, yeah, maybe yeah, you're right that would be nice But it'll be hard to do that the longer they wait the harder it'll be because it'll be more and more in entwined with the with people's infrastructures and And to all of a sudden rip out the model that's making that works and when the others are so far behind See that's what they're planning on. That's the they want to capture get that market share I'm looking for something in particular, but this is the next one intelligentized warfare. That's their own. That's their own term. 

Um, uh, you know the generals imagine Imagine when all the generals can do what I can do not just generals that are just like idiots, right? But like i've been trained to be like, yeah Yes Yes, so they're taught so I have a whole I actually have a good work up on it. 

I have citations throughout the document I see and link to What is military civil fusion state gov? 

Let's go to see and then you see I work some out. So Here you can get a breakdown. 

So the partners deep seeks I've got a whole dossier on DeepSeek and their founder, but only this much made it into this document. But these are the partners of DeepSeek, so this is how DeepSeek services their operation. And if you look, they're all PLA, they're all known, entities of the Chinese military as designated by the U .S. S. Department of Defense. 

They're all sanctioned. I mean, like that. But this one is the cloud provider. These are the ones who offer the cheap solutions to deep seek. These offered GPUs and these give them infrastructure for data transmission. Not that it's a surprise, but it's a fact. 

So let's not be let's not like let's not scapegoat the relationship. Right. Because now it's almost like a race against China for AI, and that's included in your game. The game is trying to build up AI competency? Is that fair to say? That's a good question. 

So yeah, good question. So I do have a section up here. The proof is the product, the game is the proof, and the report is the theory. The theory is the 100x curator, the vibe coding to virtuosity pathway. And so the game came first. I didn't, I didn't know. 

I didn't think about China until kind of three months into it, four months into it. And I was like, whoa, whoa, whoa, wait. And then I started to put two and two together because guess what? I'm, I'm in both worlds. I create cybersecurity training for the department of defense. And I also train AI. 

What a coincidence. I'm actually able to put these two together and it took me this long to put them together. And I'm a smart guy. Humans are categorical thinkers by nature. I put the two together and I realized, holy shit, this is not good. Because then I started to use, to see what is China's plan, the pacing thread. 

And their plan is since 2017, what they've done is essentially they've professionalized the workforce. So AI trainer is a profession. There's a whole pathway. So data annotation is poverty alleviation. So that poorest province is now fast growing, one of the richest. They're so grateful for these data jobs. 

They're insulating their supply chain. They've got the professionalization of the AI trainer, so they even have credentials and certificates. I would love to get a certificate to be an AI trainer. It doesn't exist. I'm literally at my title, and I've been fighting for a year for the privilege to change my title on LinkedIn from content writer, which is the lowest of the low, when in reality, look at the skills that I've developed from this content writer job. You show me another content writer that can do this, all right? 

So they've got a 5 .5 year head start. It's actually more like 8 .09. I've done the math recently. Since they've started this national vocation, and when the state sanctions something in China, it's kind of the big deal. And so they've been training these people, people that can eventually be basically enabled. There's a word I'm looking for. 

Triggered like a, like a freaking suicide bomber. What's that? 

What's that called? 

When they get the call? 

yeah yeah what does that call when they get activated bro literally so what that what china is doing get this because people are categorical thinkers they won't realize all the data labeling is a skill applying elsewhere the data curation this thing they won't put this together only the smart ones will 

But once they get told, they get told. They're gonna know. That's how categorical thinking works. The moment you learn something you've got experience in is actually related somehow to this, then all that experience immediately applies. It's like a light switch. And so they're training these cognitive warriors, bro. 

I shit you not. Fucking mark my words. They're creating cognitive warriors at the same time we're outsourcing the potential to create cognitive warriors because all the data -labing jobs are going to Kenya, China, Philippines, and those are just the jobs that we know about because it's all fissured. There's no data set. These are just best estimates of where these workers are because they're not going to tell you. That's a liability. 

They don't want you to know. All right. It's fissured for a reason. All right. So while we hunt for unicorns, right, Zuckerberg with his million billion dollar offers, they build a unicorn farm. And there are there are so there's a recruiter from tech, contact me and see if I want to be a general IT dog spotty in Irvine. 

So they have national competitions, where the winners can get picked from major companies like imagine that, right? I would love to compete in something like that, right? uh so yeah different stages to that and then this is the you know they have this these are the tiers and this is where i would have used that this is so i do have a sample of the rag working perfectly i keep this specimen up for this reason so you can see this uh when it worked when the rag worked so i i have on my ai i've done a lot of lot of research, and I put all that research into an embedding. And now the AI can, whenever you ask a question, the AI will check that embedding and answer you. And so you can see it in action here. 

On this page, you can see there's no actual list of this hierarchy that in words, the only place this appears is in the image, and my AI can't see the images. So So you can see tier 1 through tier 5, junior workers, tier 5. So I asked, ask me anything about whatever. What are the job titles for the Chinese AI trainer profession? So it says, okay, let me try to figure this out. This answer user asked this. 

First, I'll start by scanning through the context given. The user mentioned the answer should be, oh, looking at the additional relevant context. There's a part that says in February 2020, Chinese ministry, blah, blah, blah, officially recognized AI trainer, okay. 

Further down, there's a table, okay. 

Level one, AI trainer, blah, blah, blah, another part, another part, blah, blah, blah. 

That's the thinking. Now, the job AI trainer is a profession. The role was officially recognized as a national occupation by China's Ministry of Human Resources and Social Security in 2020. The profession is a part of the state -led effort to professionalize data work with the structured career ladder spanning the tiers from junior worker to senior. And here's the tiers. I could have sworn it actually listed them out. 

Maybe I asked again. But as you can see, it actually got the name of the tier, senior technician, junior worker. And those words don't appear in this page because it's getting this page's information, but then it's also asking the embedding file, the RAG database. So it's an interactive resource I've created. Um, and then also it will, I can, uh, uh, I, the last thing I did before I stopped working on this was I added this button where it'll read this response to you or scarlet will. Right. 

Um, so, yep. So that's kind of, you know, this is, ah, this is what I was looking for. All of American AI strategy has been to build a wall of Silicon, imagine a line of Silicon, which is like a term from world war II or whatever, building those bunkers. What's the wall of silicon? What is that? That is in reference to the CHIPS Act, where we spent all the money to harden our AI infrastructure. 

And if you go and read in between it, they don't mention the data annotators, the human workers who actually train the AI, the reinforcement learning with human feedback, the RLHF workers. That's the work I'm doing. 

It's called RLHF, reinforcement learning with human feedback. 

It's in the post -training. It's not pre -training, which is actually 80 % of the work. To make it good AI, it's all the post -training. That's the fine -tuning after the model comes out. And so that's what the ivory tower sciency people don't want you to know, is they want you to think that they do all the work and they don't even want you to know about this ghost workforce that's, oh, by the way, a billion, on the way to be a billion people. It's already over a hundred million, hundreds of millions. 

Best estimates are about 200 million. Think about that number for a second. Worldwide, 200 million. There we go. There's the range. It's a hidden workforce. 

154 million to 435 million individuals right now. Annotating data for AI. 

I am one of those people. Come to find out. So they're global figures? Yes, sir. Best guess is because, again, this isn't log, bro. That's the problem. 

There's no data. 

AI pipeline. 

That's what security 101 is, knowing your data sources, bro. Some dude in Kenya is a much easier target for a Chinese foreign intelligence service than me in America. Why do they even need to come and try to get me when there's a Kenyan in there who probably hates America anyway? And he gets paid $50 a month. It's easy to pay him $60. All he needed. 

They're installing all the data layer protection to stop me from taking screenshots. There's only about 20 pages I need to get off this laptop, and I could just take pictures with my phone. There's nothing stopping me from doing that. I would say but I'm still trying to, sorry to cut you off, I'm still trying to connect. I know your game is proof of concept, and then it goes into this AI Cold War kind of. scenario, which seems like a call to arms for the US to lift its game in regards to AI development. 

If you were going to have people outside of US government entities for this to resonate with, I would think that you should make it this anonymous entity. Make it a fictitious entity. that is doing all of this, and the whole object of the game then is to build up your AI ecosystem and capacity to be able to either equal or outgun the other entity. The fact that when China pops it out, and I know it's factual, you've done your work. Interesting, yeah. It's very, it's very confronting. 

It seems very, and working, like I was in Australian DoD for 10 years as a civilian, and I get the whole us versus them approach, But I think if you were trying to tell the massive deficit of AI development that the US is currently in and the flawed ways that it's trying to throw effort and people and silicon against, that once it goes, look what China's doing, I don't know, I think it either loses something or it's like a, wait, where did that U -turn come? Because I had the U -turn moment. I was like, okay, it looks kind of like FarmVille. You're building up AI like FarmVille. And then, bam, China is eating U . S.'s lunch in AI, which is a very powerful message. 

Yeah. But I don't know if the fart bill game and the here comes China with the deliciously crafted art. Yeah. I don't see how they match together. That's the only thing that doesn't really resonate with my pea brain. Yeah. 

You could take that 

feedback any way you like. 

No, it's beautiful feedback. I love it and I will take it and it will guide me. But here is the idea and I can turn it better. I can make it into that better. And I love the idea of adding China as an element of competition. And that immediately instantly connects the two together in a way that I couldn't have done initially because I didn't think about China until four months after development. 

But look at this one. This is the 100x Data Curator thesis. We haven't even gone over the thesis page, right? But the game itself is a million tokens. It's 600 ,000 tokens of code and 300 ,000 tokens of documentation that were all AI generated. And so that is an artifact that can be a lot of different things. 

This game is just proof of one of the things that a million tokens can create. And the process to create it is a universal process. I took the same process to make the code, to make the reports, to make the images, to make anything AI. That's kind of where the aha moment came from. And this was an image I had since the beginning. When I was making the Slack bot, This is the image I had in my mind. 

I felt like I'm a kid again, all over, but it's a matrix, and I'm piecing together pieces of, they're Legos, but they're not Legos, they're pieces of technology. I read the fucking site, Lego. Yeah, and the AI is helping find the right piece for whatever, as in my vision, right? And I built my game in this way. It's a new creative partnership. That's what I'm trying to unlock in people is to see this. 

How? How can a single person do this? Well, that's what 100x looks like. Because that's everything from literally the idea, 120 days from the, no, 110 from the idea of AI Ascent. The first 10 days was me playing with the new AI. I didn't even have an idea to make an AI game about AI to build an AI. 

And so we're looking at a wave of 100X productivity. And so that can unlock the future and it's going to hit this whole city in front of it, right? And then so it's curation to creation. You curate the data to create something new. The human is a strategist. The AI is the producer. 

Human vision, AI execution. output of an organization now in the hands of an individual, the pathway, systems thinking, refinement, architectural mindset. Once you, at some point, so you get in this vibe coding state, it's very natural. This is what I'm saying, this is natural. You will vibe code for years, whatever, have fun, make your fun little thing, and then something in real life, you'll encounter real life, And something will piss you off so much, but you'll realize, wait a minute, I have the skills to solve this problem. I can make a tool, I can make some solution that would help these people in my community, help solve this problem I'm currently facing. 

That categorical, that barrier, that categorical thinking, it's broken. And then you go and you vibe code this shit out, because you're fired up, because you're pissed off. Something pisses you off enough that you realize that's the virtuosity comes out. It's natural. something There's a whole, I have a whole structure in mind anytime I'm starting a whole brand new project. I know exactly what I need, the pieces I need. 

I just fucking build it. So much so, now the AI builds the initial code. I was making files manually. Shit, I'm making tools to make tools to make in a tool. Like, that's actually, you know, you start in making, you know, as you say something like, make it cool. You know, you don't know what to ask for. 

And then you start getting some design vocabulary. Instead of making a login system, you say, Give it more, you know, create a UI form, write some validation logic, blah, blah, blah. And then you get the whole, you know, we're going to need the API part, the database. How are we going to handle that? You know, you start thinking user management. The third time I did it, it was icing, it was cake, cakewalk. 

I knew I had choices. The third time through, I knew I had choices. So, and you become a citizen architect. That's the end state. It's the natural state. The barrier between coder and non -coder disappears. 

That's when you see this. Okay, so that's the potential of the skill set. But where do we get the skill set? What's the skill? 

Because if you go for school for machine learning, you will not learn a single thing that I'm teaching you. 

You will not. You'll learn the end first. You'll learn like ragging and building the models. But guess what? That's all done. You don't need to do that. 

What are you going to decide you would need millions of dollars to build a model anyway? Like, what do you even why is, you know, so it's not, that's it. There's no curriculum because of the fissure workplace. There are a bunch of ghost workers, all 400 million. The choices are exploitive work or unemployment. Those are your choices. 

This is what's going on. Google is being, you know, they had the labor liability, Globalogic's making money off of that because now Google doesn't have to worry about it. 

But the way that global logic makes money is labor arbitrage. So by the split in what they can pay the workers and what Google can pay them. 

And so that leads to a financial lower paying deprofessionalization. 

We can't have them learning things or else they would demand more money. So we can't have abundance mindset, which is what is actually necessary in order to train the AI. 

Oops. Because we're putting in complex reasoning and logic that is being cognitively taxed by the low pay and the cognitive dissonance of being a ghost worker to build the world's most celebrated technology. And I can't even say I work for Google. I'm not allowed to. So I'm a true ghost in the workforce. And I'm probably one of the best with AI. 

I'll be honest with you. Um, okay. Um, and so since making it a nonsensical system, I cry. I cry sometimes going through this, sharing this with people. I don't feel like I'm going to this time. Um, but it, it, it, it affected me. 

Um, and I found a way out of it. I actually found another job. Think of all the people who haven't figured all this out. Um, I still, I believe to some extent my role was replaced because the company's vision was to move to AI at all costs. it's the savior. Watch. 

I think there's billboards in San Francisco. Let us replace your workforce. This is what's happening though, because unless those companies have someone sort of that can guide the data curation, that this mental model of the key value pair, everything is a prompt, like these are big lessons that I learned over three years. 

This is what's gonna happen is they start, oh, oh, hold on, hold on, hold on, hold on. 

I actually, this is important, this is perfect. This is perfect, hold on. I built this for the CTO of UKI, and I have a section in here about the human in the loophole, because that's my theory on what's causing the failure in AI deployments, is they're deploying it to people who don't know how to use AI, or how to critique AI outputs, and how to fix the hallucinations, and so they just blindly trust the AI. And so a human in the loophole, I think it's section four. I put this together in one evening. 

Right here, human in the loophole. 

So in defense circles, human in the loophole or human in the loop is often presented as the ultimate safeguard, the moral and operational firewall ensuring that critical decisions are made by accountable humans, not autonomous algorithms. 

It is supposed to be the saving grace of AI deployment. However, when HITL is poorly implemented, under -resourced, or relies on inadequately trained personnel, it creates a critical vulnerability to the human -in -the -loop hole, or HITL hole. The HITL hole is a dangerous gap between the perception of human control and the reality of an overwhelmed operator rubber -stamping AI outputs. 

The drivers are cognitive overload, automation bias, skill -fade adversarial manipulation, The solution is the 100x Data Curator. 

The DCIA, Data Curator Intelligence Analyst, is the antithesis of the Hiddlehole. 

They are trained not just to use AI, but to interrogate it, validate its outputs, and curate the data that feeds it. By cultivating this elite cadre, we will close the loophole, transforming the human layer from a vulnerability into a true strategic advantage. So, that's what I'm doing by training this guy right now. is I'm creating the framework, the groundwork to close the human in the loophole. So that when our company starts deploying AI, we've got a workforce who really knows how to leverage it. I'm even building the extension. 

See what I'm saying? So that's, what's the missing piece that people don't know. I know because I am the human in the loophole. It's a lived experience for me. And actually, yeah, I could go into the legal argument. I actually have like legal argument and I actually have like emails, but kind of And I'm about to start talking to lawyers and stuff, because I could actually take on all of Google with the evidence that I have gathered. 

They've got tea pockets, mate. I know, when I first... And they'll just sandbag you. I went through that with reverence, because a lot of people lawyer up, get an immigration lawyer. And the people I've spoken to that have gone that route. They can, you know, eventually though the national security aspect is going to show up and I've got this evidence and also I'm also fighting at the top. 

I'm about to create the training that goes to the NSA, dude. You know what I'm saying? So let me, let me slow down a bit because let me get to the part where that connects the dots. The American counter strategy is here. So after the vibe coding to virtuosity, um, right here, after this section, which we were about going through, so, you know, stages one, two, three, four, and then, um, the accelerators, the deliberate practice. That's that circle practice that I, you know, that's me making 2000 images to come up with the idea to ask for an allegory. 

And then the apex skill is the on the fly tooling. That's me making a tool or making a script to help me. So this is all virtue. 

So it doesn't find the right tool, they fucking forge it. 

And then so here's where I come up with like, sort of like solution. So I have the bottom up and the top down solution, the top down, I've already sort of explained, that's this. Let me go to the NSAC, National Security Annotation Core. It is the new caller equivalent of the NSA. Basically, you don't need a college degree, although it helps for specific domain expertise. If you want to, if you have architect background, you can annotate architectural data better. 

But by and large, data annotation skills are new caller. They're not, require a college degree. And so, this would be a whole, new department that would be a aspiring goal for people who like using AI to join this group, INSEC, to be the foundation securing AI data sets for national tasks, national data sets of any kind, whether they're national security or just like, you know, labor data that needs to be, you know, securely annotated and trust by trusted workforce. We could recruit military spouses. That would be a great source of talent. 

Many of them have advanced degrees and they could be trusted to train. So then the who is the perfect archetype? That's someone who's a The data curation is all the skills I've acquired, so that's that secondary skill set that I believe everyone will have. And then the peak archetype would be the intelligence analyst, someone who's very good at putting together all kinds of different data points. So that's sort of where the peak of the NSAC would be. Imagine the report that I've created. 

Imagine that level of report goes to our senators and congressmen because the people who deliver the reports to them have taken my course and have become a DCIA and can produce this report to those people. That would be great. That would be fantastic. That's who the DCIA would be. And so that's, you know, end of prompt engineering. It's rise of context engineering. 

That's what we're doing. We're engineering the context so that we just need to write one prompt and then get a massive response. 

So anyway, then the pillars, blah, blah, blah. 

That's the ground, the human firewall for ground truth. Um, and we have our choices. We can ghost workers creating garbage, or we can have quality individuals creating virtuous products. Um, and then now that's by coding virtuosity, and then the AI credits. So here, this is a big idea I had, and Sam Altman keeps saying this. So I'm not the only idiot fucking saying this. 

I said it before he did. Universal basic accent. Sam Altman, the CEO of OpenAI, bro. He's saying this. He's saying we need and people are laughing at him because he doesn't have the full picture like I do. 

Here's the full picture. 

It's Bitcoin without the stress. All right. I have a I have a I have a I have a chart here. So let's look at this. So we have UBI. Are you familiar with universal basic income? 

The idea that Robots are going to take all of our jobs and then we're going to have no jobs and the only way we'll survive is if we all get $1 ,000 a month, right? Are you there? Have you heard of UBI? Oh, oh, so it's been popularized about the past decade, specifically because of robotics and AI, the scare and the fear of losing jobs. And so that's been the big argument. And I was, I was, I really liked the idea because I believe truly what's going to happen when all the truck drivers are not getting payroll income tax it's all robots driving and there's no taxes so where's the government going to get any money if there's no income tax and people so it you know so anyway um it made sense in a minute ubi but then i had this idea of uba which is you don't give people a thousand dollars in dollars you give people a thousand dollars in ai credits why is this different uh ubi is an unconditional cash payment UBA is an unconditional access to productive tools. 

The AI credit, you can only do one thing with an AI credit and that is 

get an AI response, whether it's generate an image, generate a video, generate a recipe, whatever, right? 

You have to pay for AI and it will pay for AI for you. 

It's a consumptive, UBI is consumptive, whereas UBA is productive because every output is produce something. The inflationary aspect, there's a high risk of inflation. for this one, but there's a low risk. This is actually deflationary. 

Hold on, hold on. 

Let's get more better data here. This one is better because, okay, why does it, let me just tell you, why does it inflate? Because if you give someone $1 ,000 of AI credits and they don't use it, let's just say you give them 1 ,000 credits every year, and there's some woman in Kansas, she's like, what am I gonna use AI for? She doesn't use her credits, they just accumulate. 

She doesn't give a shit. 

The government doesn't care if they accumulate. The government doesn't cost anything to give them, change the numbers in the database. They're AI credits, they're meaningless. Versus giving $1 ,000 and she puts it in her bank account, that's the worst possible thing she could possibly, that's taking the money out of the money supply. That's the worst outcome of universal basic income, is everyone saves the money. So then what happens if she saves it for one year, two years? 

Now she's got 2 ,000 credits, she still doesn't give a shit. But she loves baking. She loves embroidery. She loves something. She's got a hobby. She's the queen of it in her town. 

Then all of a sudden she sees on Reddit or, you know, whatever, Instagram, she looks at Facebook. She sees someone made a bakery website for their bakery or whatever using their AI credits. Holy shit. I didn't know you could do that with that. Maybe I could do that. Well, if they did that. 

with, you know, X 500 ibar, I've got 2000. Hold on. 

This is a strategic app. 

This is appreciating because a year ago, two years ago, what were that a thousand credits have done? Maybe it would have organized your email or something, right? Fast forward a couple of years. Now those same thousand AI credits with the more powerful AI than the price of AI goes down very fast. It's called LL inflation. You can get maybe a whole project built with that same credit amount. 

So the amount of work, so it becomes valuable to save them and use them strategically. And it spurs innovation, it's grassroots innovation. Bitcoin without the stress. And an AI competitor, it's like free money for the AI companies because they'll put their AI available on the marketplace and they'll lower their price if they want to get the AI credits, which they can cash in for dollars, right? And you can see a prediction of this over time. If you want to look at the value of $100 versus 100 credits, Every year, the value, the dollar goes down over 10 years. 

It's worth $73. So, you know, versus the productive power, the increasing, the same AI credits, 100, would be equivalent to 6 ,000 credits in the future worth the same amount of work because the AI has gotten better. There's GPT -7 or maybe GPT -17 in 10 years in the future, right? So that's the bottom, that's basically modeling the Rural Electrification Act. AI is a new source of productivity, just like electricity was. You would have just, you know, whatever, blah, blah, blah. 

And here's mine, so I just, check this out. Look at this, woo! Look how ahead I am, look how ahead I am, brother. Look, this came out, I saw this video today. Dave Shapiro, this guy's a forward -thinking guy on AI. Three years ago, I was watching every single one of his videos. 

Now I'm leagues ahead of him. Look at the cover picture of his latest video. Look at this, look at this. Except he's missing my third choice. He actually is I watch this. He's missing my third choice. 

He's the UBI guy He's UBI still he doesn't understand UBA Actually, he doesn't get the productive power of AI because he hasn't seen what I can do with it No one has that I have seen few people know and if they know they're keeping it a secret, bro I'm not okay. What were you gonna say? I was trying to think where I'd heard his name before I might have mentioned it in at Palo Alto in a in a meeting like in an AI talk I did There is a Dave Shapiro who is not the same. Yeah. He's a, he's a, like a right wing talking. He's a right wing talking head. 

So, um, but yeah, see what I'm saying? This is when this come out 12 hours ago, bro. All right. I'm the one with the full story. I'm the one with the big picture. Cause I'm the one who worked at Google and put these, this shit together, dude. 

I've also got evidence against them that they've been stealing my wages and that they don't care about the national security implications. Cause I sent them 120 page report and they did. Yeah, dude. So don't worry. So anyway, that's all different. that and you see the difference you see ah see i have the third option i have see the sacred 

versus this choice. But then the third choice is the universal basic access where we all learn these skills. And then the new collar compact is sort of both of those together. The DCIA, the high level aspirational goal. We need a secure AI supply chain that involves the data that goes into training the models. We can't keep ignoring that. 

They would love us to keep ignoring it so they can keep the deprofessionalized. So that's the deal. That's what we need to do. We need to make this agreement, basically, with the American people, and we will do that by starting giving them AI credits. They'll figure out what to do with them eventually. When they do, they'll produce something, and then you can, you know, life is good. 

But this is truly, by Google's own research, this is where we're heading. And it aligns with my story with everyone learning this as a secondary skill. Even the hairstylists will need to learn how to curate data because very shortly everyone is going to be a lot hold on This is brilliant. 

Everyone is going to be live streaming their entire lives very soon with the with the cameras in their glasses very soon Everyone we're not there yet. 

Once we have gobs and gobs and hours and hours of people live streaming cutting their own hair No, no, no cutting other people's hair they will start to realize, oh, I need to, I can annotate this and I can point out this is the wrong trimmer, this is the wrong whatever. 

And then it's a very short step from that to a guided AI to help you learn or cut hair in the moment, in situ learning, in situ learning, with the glasses presenting how to do that. 

with the AI guiding you. 

But you can't get that. Don't worry, that's just because it was the right technology for the right time. Ray Kurzweil, who actually works at Google, is one of the leaders at Google right now. He's got over 100 patents. The Pano Kurzweil is his namesake. 

He invented the text -to -speech, the first portable handheld text -to -speech synthesizer for the blind. The way he developed that was he planned ahead. He knew when the miniaturization of hardware would be such that there would be enough computation in a cell phone -sized device that the required computation for the text -to -speech synthesization from an image would be possible that they would match that he started the project five years to start the code that it would be ready for that moment to create the first text -to -speech synthesizer the moment it was it was hardware possible okay he's got a whole team that predicts these trends so he can be the right technology at the right time So think that in the back of your mind. Well, trust me, once people start live streaming their lives, it'll be it'll kick off like crazy. People already do it with their phones. So trust me, once it's going to go. 

Just wait, just wait. 

Just just well, they right now they're already doing it with the camera. 

Trust me once it's literally. 

You wake up and there's a camera on your face, maybe even in your contacts, who knows? Trust me, the moment will come where we have years of data of hairstyling, but you see what the point is, is you can't have the AI hairstylist assistant until after you've annotated the data you can't annotate the data until you've got the hours of video we don't have hours of video of boring hair cutting unless you're L 'Oreal okay you so so everyone is going to generate their own data sets they're going to start curating their own data sets this is a natural occurrence I don't think we need to fucking wait for I still see it as this is happening now. Yes. What I think you're talking about. We don't have to wait. 

That's right. It is happening now. We don't have to. That's what I'm saying. We don't have to wait. Yes, that's right. 

They incentivize because they're going to get something for it. 

At the moment it's just, oh, I want to be an influencer. 

I want YouTube ad clicks and I want revenue. There has to be something else to incentivize that for people to be on board. Like, oh, it's my job as an AI curator to go and look at creatures or architecture or something for the day. And then provide something that doesn't already exist to give it value in that regard. So that's how I'm trying to get my head around. Yeah, you're sort of... 

You just give me the firehose of concepts for my next month. Yeah, probably. But well, here's where that sort of comes in. So this is where the sort of impetus comes is that the thing for people to do is to rise to meet your moment. And your moment is your 100x moment. 

That's when your skill level and the skill at which any human would need to produce technology solutions to modern problems with AI, you have to know X piece of technology, you have to know 

piece of technology. You have to be able to fix the errors. GPT -6 maybe won't have the errors. GPT -7 maybe will just create full programs. GPT -8 maybe will be able to do the cloud part for you. That's the capability threshold. 

That's the requirement going down. That's what you see the blue line over time. Yeah, yep. And I worked on that for a minute. I worked on this for a minute. AI capability threshold. 

That is the threshold to achieve 100X productivity with AI. And so this one is representing no active learning. A novice would have to wait more time than an expert would, like someone like me. I could do it with GPT -3 .5. Few people could. More people can code now with Gemini and thinking they're so much smarter now. See what I'm saying? 

The threshold, the barrier to entry has lowered over time. That's the barrier to entry. 

You see? Now what you can do, you can start learning actively. You can become an active learner. 

You can start a project. What I'm helping you do. 

I'm helping you enter this state. 

You don't have to wait. 

It's in your best interest to ride this wave. 

When you start making 300 IQ decisions, every decision will make you money and you don't even know how, when, or why. 

Are you going to be a ghost or are you going to be an architect? 

That's the game is the truth. Like, just learning what tokens are in the first five seconds. that's right next to the money. 

It's your token count as you, um, cause that's the final score is your token count, which is beautiful because games are token. That's a score for games anyway in the old days, right? Tokens. 

So I thought that was cute that my scores are called token as well, but they're actual real tokens. Anyway, um, I'm just, you know, digressing. Um, I was over here. Yeah. Okay. So yeah, that's, that's sort of where it kind of comes together, but you're helping me put it together. 

More but the 100x moment is when you turn into a citizen architect and you can solve those problems around you that no one else can Yes, sir The reward is available. Yeah the report. Yep. It is here There's just multiple, multiple concepts on many, many levels. And I know that there's even more that you haven't even shared yet. So I need to prepare myself for that. 

Very cool, mate. Very cool. I like this one. This is what's going on. The tale of two systems. So, okay, yeah, absolutely. 

We'll just set up, so you know what to do next is start planning with AI, start trying to build documents, just try, play, fail. Then when you come back with - Do you have anything, like I've got the game, do you have anything that could be considered a template that I could model it off? You say create documents, like is it a PRD? 

Like what is.. 

. 

Yeah, so depending on how much time you have now, I can show you, but I can also sort of give you templates. But I give people... I know, I know. Maybe tomorrow or something. It won't take much. It's just 30 minutes of you seeing it. 

And then once you see it, you can't unsee it. 

Cool. Oh, anytime after four is convenient for me. So I have two houses. I bought a second home. Finally, the second house. And Jackie lives in one house, I live in the other. 

We see each other every weekend. And it's actually quite nice. 

I'm able to do a lot of freaking work. 

I'm able to code like a bejesus. 

And she's starting to see some holy shit moments. And she's like, David, you keep going, dude. 

So I've got her full support and everything. So yeah, I'm always available, man. I'm just here in this fucking bachelor pad. 

So yeah. 

I was going to comment and say the background looked a little bit different from the last time I saw you in a bedroom somewhere. 

Yeah, yeah. 

It's a nice place. 

They're building a whole lagoon right in my backyard, essentially. right over there. They'll be done in the winter. 

But yeah, we can talk about that kind of stuff later. 

Yeah, that's right. 

Then they finally built the house and I had to, you know, Because I signed the contract three years ago, right? 

And, you know, delays, delays, delays, delays. 

No skin off our back. 

Actually, it worked out really well. We got it. 

We got it. 

We worked out well for us. 

So, yeah. 

Yeah. 

Let's try it maybe same time tomorrow. 

Yeah. I'll throw the same invite. Five. 

But yeah, like three or four. My time in the arvo is perfect. OK. Thank you. Yes, sir, man. Thanks for listening. 

And there's a lot of you. There's a ton of you in this. So I appreciate sharing. And I want to know more. You got it. It's inspiration. 

Thank you, sir. All right. I'm glad to hear it. It just gives me more juice. So let's go. Let's speed run this shit. 

Peace. Tomorrow, my friend, sleep well. You too. Don't forget to sleep. I wake up so early, I go to sleep. Soon, soon I'll get rest. 

OK. All right. See you, man.


Transcribed with Cockatoo
