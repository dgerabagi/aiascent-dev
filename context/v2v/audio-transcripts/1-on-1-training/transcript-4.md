Transcribed with Cockatoo


Okay, so Ben, I took your advice to automate my process. And so what I've done is basically I think we could all start using this because it's just VS Code. The way it works is it's basically two panels, this left file view, which is basically my clone of the Explorer view, but it's made for AI. So you can see it's just the same thing, except I get a breakdown. of the files and the token count of the whole project. So at a glance, you can see this project is a million tokens. 

That's very valuable information. And I can see my source directory is 157 ,000. That tells me what AIs I can and cannot work with, because some AIs have limiting factors, such as context window. Additionally, what you do is you select any files you want. So it's a data curation tool. You can just drop in PDFs, Excel documents. 

You just select it. And then they show up down here with an estimated token count of that file. So that what you can do is you can create these packages of data, curate your data, and then it just essentially, so this is the file. part of the equation is it being able to flatten this context that you select and then once it does that it just creates a file that looks just like this which is just like the file I was manually creating and managing when I would work on my projects this is like a script that I ended up making so remember you asked if I saw I automate I was like some things are automated some things are still manual and This is one of the things that was sort of automated. I would just run a script and it would create this file, but I would have to manually add to some sort of files list somehow. Now it's just a click of a button. 

It automatically adds any new files. If you just drag and drop a file in here, it just automatically selects it. If you move files around, it automatically updates it the next time you click flatten context. So that's what that creates. That's this one half. Then the second half of the extension is the managing all the cycles. 

So actually, and the artifacts. So this extension will be creating artifacts for you as you go. So as you're planning out a project, it'll create an artifact because I fine -tuned it to do so. In the message, fine -tuning is just in the prompt. So it'll respond back with a setup guide, what have you. And then as you're actually setting it up, and if you're having errors in setting it up, it actually comes in and then updates with the specific issue that you are having, with the specific knowledge gap that you had. 

in here so that then you can, you know, actually now I just come back in here and reread my documentation and it's very transferable. Every problem I encounter just gets a document artifact and then we're good to go. I have my own range on getting ahead of myself. So that's kind of the analysis cycles. So you basically, how does it work? 

I can start a new project from scratch just to show the flow. I'm trying to just do a new folder. PowerDefense99, just to get a VS Code in here so it's nice, fresh, new. 

Oops. 

So I've got that directory opened. I go to my extension. Since it's the first time I'm opening it up in here, it opens up this panel. 

Get out of my way. 

Welcome to Data Curation Environment. Get started. Describe the goals and scope of your new project. 

Blah, blah, blah, blah. 

As much as you give it, as much time as you spend planning, the more you're going to get back. I'm just going to say, I want to make an intelligence game. Then I'm going to copy that string just so I can find it in a second. Then I'm going to click Generate the Initial Artifacts. And so what did that do? That created the README and the prompt. 

And the README is Welcome to the Environment. This artifacts is the heart of your planning and documentation. It's managed by the DCE, a VS Code extension designed to streamline This readme was automatically generated to provide context for you, the developer, and for the AI assistants you'll be working with. Context of this workflow and artifact is a formal written document that serves as a source of truth for a specific part of your project. Think of these files as the official blueprints, plans, and records. The core principle of the DC workflow is documentation first. 

Before writing code, you and your AI, and it doesn't have to just be code, you can make a book with this. This is a content delivery solution. You should first create or update an artifact that describes the plan. Iterative cycle workflow development in the DCE is organized into cycles. You have just completed the initial setup. Your next steps, initialize your Git repository. 

I've got a button. 

I'll click that shortly. Submit your first prompt. The prompt marked down files will automatically open for you. This file is your project plan and instructions for the AI. Copy its entire contents and paste it into your preferred AI chat interface like Google AI Studio, Chat GPT, et cetera. 

This is version one, the copy and paste process. I'm in the process now of creating an API version. So you just click generate responses and the responses come streaming in. review and accept responses, paste AI responses back in. We'll do that shortly. Repeat. 

This completes a cycle. Then you start the next cycle, building upon the newly accepted code and documentation. The structured iterative process helps maintain project quality and ensures that both human and AI developers are always aligned with the project goals. And I can't believe I just read that whole thing without going into this view. 

Okay. 

All right. This is the prompt file that it creates when you just click of a button. And if you recall, I only typed 1, 2, 3, 4, 5, 6, 7, 8 words. So everything else you see was generated by it. It's part of the extension. It's sort of bootloading the AI. 

You can think of it that way. And I can share this extension. You're free to dissect this prompt. But correct, correct. After our conversation, that's another thing that I want to point out is this is the time that I can do this because it's just my process, guys. You guys are all smarter than I am. 

This is just my process. I've just been obsessed with A . I. That's it. 

Now I can transfer my knowledge. 

All right. But not if you all don't accept it. Right. So and I made an extension. Right. And I can continue to make this more palatable. 

And it's got a so it's got a it's got a step by step. So let's I have the prompt. Let me just send it off really quick to a I made a I made a white paper on the extension, which we can review next, I guess. I also have a this is the first project I made with the extension, because I needed to test my own product and see where the holes were, find the errors, where do I lose my cycle data, and I made this basically a clone of, it's a multiplayer PCTE, but I'm getting ahead of myself. 

And I made that just to test my extension in just one month, and it was just a side project just to test the extension. 

Like, okay. So you throw in, and then here's one of the two things that are, okay, and then I'll show you, like, so you can ask the honest question, David, what's so different about what, like, you can do or what Google's doing? So let's say I want to do the exact same thing in their most powerful coding, and I can very easily point out the two distinct differences of my process and the real world Google big boy process. So, AI Studio. So the parallel is number one. The parallel, sending a message parallel is actually crucial because it flips the script completely. 

You're not reading an entire prompt. You are now comparing between the prompts that you've received. It's a completely different ballpark, ballgame. The iteration cycle is immensely expedited by that. It's honestly like, and I can illustrate it extremely clearly with my extension in fact. Let's see if I have it, 99. 

Probably didn't I think I might have closed it last night. 

That's fine. We're about to see it anyway So I just sent it off one two three four and then we got this fancy schmancy Google Version doing it So there's two, so this is sort of revealing the second issue, which it's going to go down a single trajectory and build out the thing that I asked for, but there's a, that's called a long horizon task in the research, and the jury is still out if AI can reliably do a long horizon task So far, open AI is crushing it by an order of magnitude on long -horizon tasks. But what happens is an error gets made early on in the task, in like cycle one, cycle two, you can imagine. And that error compounds over time because the AI doesn't know or can't correct it. And so my solution to that problem is my iterative cycle process where the human is in the loop at every step of the way. 

So we'll just have that run. And then I think I got these back. So I'll start copying these in to sort of go through my process. Response 1, paste it in, it tabs to the next response for you, but it's just pasting it in. 1, 2, 3, and 4. Now, once you've pasted in as many responses as you want, you just parse it, and then the next thing you want to do is sort the responses, and I sort them by token count. 

Sorting by token count, you can immediately see I got an extra file in this response. Then over here, I got an extra 1 ,000 1 .2k tokens, right? And now my game, if y 'all remember my game, that was a million tokens. So let's just pretend this AI gives me perfect code. Let's just pretend. It's still going to take me a million tokens to make my game. 

It's still going to need a million tokens. Let's just say every token is perfect. So how am I going to get there sooner if it's giving me 3 ,000 or 4 ,000? That's the 33 % increase. I'm going to get to my goal 33 % faster. That's what this process unlocks. 

You would never have, if I would have just said response one versus response four gave me the 4 ,000, okay? So that opens up, and then what this does in development, when you're making code with AI, Say response one doesn't solve your problem, but response two does. If you only sent response one, you waited five minutes for the response, it didn't solve your problem, and now you're writing a new cycle, you're writing more prompts. Versus, you're not writing more prompts, you're just sending the same prompt because there was nothing wrong with your prompt, there was nothing wrong with your context, there was an error in your bug and the AI went down the wrong trajectory trying to solve it in response one, but in response two it went down the right trajectory and solved your problem. It's like opening up a parallel universe possibility. It wasn't open to me until I sent the second response. 

So yeah. So I get the responses back. Say I'm going to select this one. And let's just look really quick. What is the extra file? Ah, this one gave me an implementation roadmap. 

So that's what this one gave me, extra, right? So I'm going to select this one, do my commit. Oh, it's not a repository yet. Initialize. Cool. Now I can baseline. 

And now I can select the files. and I can accept the files. You can mix and match. 

Sometimes when I send 10 problems to the AI, maybe this one solves one of the problems and this one solves another one. 

And then I look and realize they're completely different file sets and I just accept both in one cycle. Why not? Because they both solve my problem. So what did that do? That just added the files right into Java. just like their solution is doing it, right? 

So, oh, that's cool, that gives me little places. Just like their solution does it. Mine is a bit slower, it's not agentic. There's nothing stopping me from coding in agentic solutions into my tool. What they don't have, and what's the beauty of this new paradigm we're entering, is that any new idea I can just quickly integrate into my plan because I have it from baseline ground truth, my own code, to begin with. How did I deliver my Slack bot in the beginning? 

I didn't think about a one -click installation. Three years ago, I had no idea one -click installation for Slack existed. I saw that idea in another project, and then eight hours later, I had it in mind. So, that's the beauty of building it yourself, is you don't, SaaS is going away. Oh, my VS Code. Okay, so, accepted the files. 

gave me a master artifacts list to keep all my artifacts in line, a description of the artifacts. They're automatically selected to my context. So then I'm ready for cycle two. Oh, let's look again. How I would run it, how I would install it, the file scaffolding. And then when I made my AI game, I spent eight days planning, making artifacts upon artifacts, planning it, gaming it out in my mind before I even pulled the trigger. 

But let's just pull the trigger now. Look, we've got some files, okay. Okay, great. Let's make the game. Let's make the code files, whatever. And then it would do it. 

I actually don't want to bother demonstrating more that because I'd actually rather tab over and show kind of this project, which is, again, after I got my extension to functional thing in VS Code, I needed to test it, beta test it, so I decided to make this, which I call Virtual Cyber Proving Ground, which is like a multiplayer PCTE. And so you make a team, anyone who's logged in would be in the chat. These scenarios, I've just created the one, but it's, Essentially, this could be like a hack -the -box connected into PCTE. We could make our own scenarios. This scenario is you escort some MQ -9 Reapers. 

They get jammed and they get hacked, and you're supposed to remote in, rotate their generated key, rotate their key if they're hacked or if they're jammed. You change their frequency. And so, it's multiplayer. So, there'd be a team. There's AI integrated. So, you can create an Intel chip with Jane. 

I call the AI Jane. This is running all locally. And what it does is it takes the data and then it turns it into some sort of usable data that the whole team can use. You just click to copy the command. And it got that from this. AI converted it, right? 

So, you can. 

And so, watch the scenario. 

Yeah. 

Do we? I don't. 

Alex, I don't think so. 

He said he... 

Okay. 

Oh, sure. Absolutely. Okay. All right. Well, then let me just get this thing running. I think I just have to delete some stuff and restart the server. 

There's my, yeah, they're not running right now. So I think if I just do this, it will refresh the memory of the environment. And then, yeah, I can quickly just start the scenario so you guys can kind of see what it's supposed to look like. Because we could create many of these scenarios. So the way it works is your team, their team, you have your drones, they have theirs. You get a terminal, you actually get two terminals. 

And what you're supposed to do is you're supposed to remote in to first to, and I don't have the actual right command in front of me. Oh, probably, yeah. So I actually, I'm not working on the, I've been working on the whole interface and everything, getting this, you know, in the Jane and you can talk and sell that. So I'm actually at the point now, I would be at the point now where I could start working on coding out the Python script that runs this thing. So they get jammed, they move erratically when they're jammed, compromised. And then if they're ever actually compromised, it actually turns into a red one and starts going towards your base. 

and you're supposed to, you know, get them back. There's supposed to be, yeah, so I haven't gotten around to it, though, but there's supposed to be a drone manifest in here. You get the drone manifest, and then you can remote into the drones, depending on which one it is, and then you, you know, you just run the right commands to, in the situation. Now, what we can do, though, with a team, and then, so, one person, we can start to actually, like, do some really interesting cognitive analysis on these users. That is not possible. previously. 

For example, there's offensive and defensive operations. The offensive operation is you do a brute force attack, and so it's a timed thing. So you just run one command on the enemy drone, and you kind of just wait. And so we can determine what is that user doing. Are they just running two offensive commands, which is fairly chill, fairly easy? Run and wait, run and wait. 

Or are they using, they only get two terminals. Are they using one of their other terminals to do some defensive operations, which takes more time and effort and finesse? You have to run more things and remember more commands. And so we can detect, what are they doing more of? Who's being more helpful? Who's making the Intel chips that other people are using? 

So who's good at synthesizing information? And all this is possible because I have the entire context of the entire project, where I can then say, okay, now let's start working on the analysis portion and I'm just about done now basically but just looking at some of these artifacts to kind of explain so like Jane's telemetry and heuristics for I have an artifact for onboarding the content creator for this so y 'all could make scenarios and you just make an art stage so the drone hacking scenario if there's just a few artifacts that come consist of one scenario, that then, you know, I could just ramble, ramble, ramble. But yeah, I mean, this is, yeah, after action report, instructor view, overwatch kind of stuff. So yeah, all kinds of stuff. The spectrum for the UAV, so when you see the jamming occurring, you know what frequency to switch to. 

Whatever, the sky's the limit, right? So anyway, okay, I'll finish here. Thanks for coming to my TED Talk.


Transcribed with Cockatoo
