Transcribed with Cockatoo


Don't worry about that, I'll give you a new one right now. 

Yeah. 

I'll give you a fixed one right now, yeah. It would... Remember the data loss? I would go in between cycles, I would lose the data in the cycles, but I think I fixed it. 

Okay, sure. 

Yeah, but that's great that you were digging into it. It'll help make the... This part. 

Yeah. 

Good. I want it to be like a game. Cat on the keyboard. No, I just... No, I just had a cat on the keyboard. 

Yeah. 

Yeah. Dude, it's so much fun. It's addictive. It's the best kind of... It's great that you have it. Do you remember in my LM studio there was the conversation window? 

Are you able to send a message to your own AI? it respond back? Great, great. So then basically that LM Studio, I think there's just like one little switch that you need to flip. Literally, it's a toggle and then it's live and listening and you can send API calls to it from any device on your internal network, not just itself, which you'll be doing everything local anyway. I'm just letting you know that that's what you've just done. 

You now have You now have a local LLM that is accessible by any device on your local network. All you have to do is have a script that actually calls that API and your AI will respond for free, right? No API costs whatsoever. So already, you could make a smart home. If you had all the right equipment or the devices, you could write the API scripts to talk to those and then send them to your LL, blah, blah, blah, blah. Yeah, so that's literally, in a nutshell, you're like, now running your own LLM, and then everything that comes from that. 

Yeah, so good, good. I just dropped a link to the newer version. It's straightforward to upgrade to it. I'll just show you how to do it. In the extension, you just find it, and then there's a cog you can uninstall. Access for what? 

Oh, yeah, I guess I didn't change the right setting. 

Give me two seconds. 

Sure. it should work now interesting I'll have to show me that and it's probably just a little thing we can fix but yeah uninstall this one the version 10 that I sent you there's a extension button over on the left right here and then it actually has the same icon and then you just uninstall it I'll do it as well you can refresh just to confirm it's done and then right next to refresh is the three dots that has the that install from VSX that you probably already used Yep, there I see it, it's version 11 now. Okay, so the way we're going to start this project is you're just going to make a new folder anywhere. I have a C drive with a projects folder and then in there I make a new folder for every project I want to start. So I just made one for us for now. I'm going to make it jqrbot, just to name it something because it's so arbitrary. 

All the different names of Sasquatch. 

It doesn't matter. Bigfoot, Yeti, whatever. It's all the same shit. So jqrbot and then I have in here already that just the extension just so I can share with you but then also my slack bot okay so then i'll send this app demo python script i think i can just drop this into yeah into discord right there so i would just download the file or maybe we'll copy it soon we don't i don't know yet it depends on how we decide to build uh build our initial prompt and stuff um because there's a million ways to scan a cat okay so but now that you have those two files uh let me know when you've made a directory and you put the, you don't even need to put the app demo in there yet. 

Let's just do that part after we've got our workspace open. 

Okay, cool. So in here, you can right click in the directory and just, well, just, okay, this is how I do it. However you want to open this as a workspace. I like this way a lot. I get the present working directory, just right click to get to terminal, and then I do code dot, and then that opens up my VS Code in that directory. I'm gonna go ahead and just delete that. 

I don't need this in here. And just ignore that I have the app demo, because you'll be getting it in a different way. as we discover we need to. So tell me when you're just basically got your JQR bot thing and then just click on this tab, this button that armed data curation. Yes, let's don't, yeah, no problem. You can leave it as is. 

It's just fine. This'll be good because we'll all three have sort of the same environment and yeah, don't worry, you were just playing. 

It's getting ready for this prompt and project the way we're gonna frame it. 

Delete what? Actually, you can delete everything in there except the default folder itself. So basically, get your screen to be my screen. except I have an app demo. You won't. Don't worry about it. 

Cool. And then the welcome to the data curation environment. OK, cool. So here's where we're going to describe the bot. I'm sure you've already sort of done it, like you said. So the way I'm just going to sort of just go ahead and do it, I have a pre -existing Slack bot that I made. 

And then you, yeah, you say that, okay, and then, oh, okay, I was thinking about this, I was thinking about this. No, that's fine, okay, okay, that I would like to recreate from two years ago, there we go, so see, that I would like to recreate for, yeah, it's got, okay, yeah, it makes sense, okay, for learning purposes. The Slack bot was made by an expert by Coder, whatever, just something, okay. And now I am following, this is important, in his footsteps. You're actually, so, see? You see how I'm printing this? 

Do you see that? Like, it's metacognition. I'm giving the AI the whole context. dude. It's from the big picture so that it can help, it will really help us out in our situation. Not like guessing, like what does even the user want? 

Who would my user, what's going on, you see? And it's got the whole picture. And what is this, two sentences, dude? Like that's pretty fucking, that's a start, okay? So, all right. And then we'll have this, and then this will always be in the, Projects plan for your this this window. 

Yeah. 

Yeah. 

Okay. So but we're just getting started. Okay, so we're just sort of setting the ground Okay, so I have pre -existing slack bar for two years ago that I like to recreate slack bar was made by an expert vibe coder and I'm following his footsteps the plan for my bot is to help my team in the DOD to Query against the JQ ours. Basically. Is that a fine way to say it for now? To in the okay enable my colleagues to make inquiries regarding large lists of JQRs. 

What does JQR stand for? Oops, this way. And these are, which, these are a certain kind of JQRs, right? Are they like, do they have a preprint? Right, right, right. And all of them, but all, no, no, I know, but all of those are these kinds of, because you can have like JQRs about like, 

Economic position like jobs in like a finance because job qualification requirements is generic. So what's the thing that makes these? Military a DOD cybersecurity is it missed or was it is NSF? Yeah Yeah, if you don't know then we can we can you know, I can try to find out But I think actually I think it'll be fine. I think this solves them. I think this actually solves our problem and Because in the same sentence, I say for the DoD, so it's going to know what kind of JQRs. 

But for cybersecurity, I want to see it. 

That's what I want to get for. 

Yeah, there we go. 

This might work. That might solve the problem. OK, perfect. That actually will solve the problem. Cool. OK. 

All right. 

There we go. So now we're getting closer. 

So start kind of super high level, like, OK, so high level that we're outside of the fucking box. 

You get what I'm saying? 

And then get inside and inside and inside and inside. So plays. OK. Okay, first, aha! First, I will include the pre -existing Slack bot as appdemo . py. 

Please analyze and reverse engineer slash describe this script such that I can get my head wrapped around what it does and how it works. does it such that you do not leave any functionality undescribed. See, I think we're good there. Then I'll review it, then review it, and then we will, oh, hold on, hold on, hold on. Also produce, no, that's it, we'll end it here. Any additional template facts for this project, any additional template artifacts for this project that this project will need instead, okay, that this project is going to need. 

additional artifacts from the templates that this project will need. There we go. Okay, so that is, I'm comfortable with that. 

And yeah, it is hard. 

And it comes with time, because I've started a project many times, so I can imagine what it can do. And so I'm trying to get it to do those things right now, as opposed to like, maybe cycle 10, I think about the idea, see? So go ahead and get basically this written out. 

if you have it. 

And then, yeah, that's even a better idea. I didn't know. Yeah, that's a better idea. Actually, let me try this way, because I see there's two tilde's or whatever. That might work. All right. 

I'm doing some forethought, so I'm going to write something really quick. Watch this. You're going to do what I'm going to write. Once you click the button, you're going to do what I write. But you're going to see it, and I'll paste it again. I will place the app demo py into the artifacts. 

This is it. No, this is better. Please also create a an artifact that will contain the app demo script. See what I'm saying? That way it gets artifacted. It'll be its own A1, A2, A3, or whatever. 

And yeah, I'm just trying to think that way. All I'm doing, I'm making sure it's all standardized. So even the file that we're bringing in, named appdemo . py is going to get artifacted, and then that way it's going to be listed in our list and treated as an artifact, yada, yada, yada, which is nice. You could not standardize it and still treat it as an artifact by simply saying appdemo . py is an artifact, you see? 

But if it's standardized, then you don't even need to say it, so we're getting it into it, right? So yeah, yeah, okay, yeah. I think that was it. I'm just trying to think of how, please also create an artifact. will contain the Aptimus PY script. I'll edit this in a second. 

So let me just, before you, I'm gonna click this before you just so I can see what it looks like in case there's any additions. Yep, and then we'll go forward. So let me just, I'll paste in the extra line. Sure, I'm just gonna drop it in. All right, so I'm gonna click the button. Yep, so that's what I was waiting for. 

I knew I was gonna create the artifacts in the DCE, read me. So, um, and also the app demo itself is 16 ,000 tokens. Okay. And then the prompt doesn't have it in there yet. So all I'm going to do, so here, this is all I'm going to want. I'm going to check this out. 

If I just do this, it's in there because I don't, I don't have the ability to get it in with my, without doing it manually. So I'm going to do it manually. I'm at this stage at this stage, because this is the project initialization. I haven't, I actually don't have a process to. Because as you saw, you did not have, you didn't, unless, okay, I'm just, okay. Unless it's, you click it for, but that's fine. 

Okay, so it doesn't matter. So I'll do it manually, so you'll see what I'm struggling with. Okay, so I'm gonna grab this in my clipboard, the appdemo . py, and I'm gonna manually get into my prompt just so I know exactly how I'll do it. All right, we'll go down to cycle zero, and I can just do a control F for, cycle zero. 

There it is. Actually, this is not the right one. Hold on. So the issue is simply I've asked the AI in my initial prompt to give me a description of the appdemo . py. 

And so now I need to get my appdemo . 

py in my prompt. And I just need to do that cleanly. Because it's my extension and I, in the moment, realize that right here. It's not doing this. Let's get to the organized artifacts list, M5, and you'll see it's empty. See? 

Oh, this is the right section. I was in the right section. It's just this weird color or whatever. Okay. So yeah, I'm at M5. It's the only M5. 

Yep. That's it. And there's no artifact exist yet, which is what I expected to see because this wasn't selected in the moment that the prompt was created. So that's okay. I can manually just add it in the cycle zero by myself because you see here's this Here's the part that I wrote in front of you guys. So all I've got to do is, you know, stick this in somewhere. 

It could literally go anywhere, honestly. It can go anywhere. It's just better if it's done more organized so the AI is not spending its time squaring the circle and finding where the fuck is this, you know. It's in the, it's in the, you know, so, so, okay. So I'm just, you'll, I'll, I'll walk you, I'll see your screen and walk you through this. So don't worry. 

So just watch me do it and then, yeah. so, because part of me had to see it first before, because we're doing the one thing different outside of my process, which is good. Now I'll codify it in, which is a user initialization may want to have their own files brought in right from initialization, not after initialization, because you can bring in shit after initialization, no problem. I'm just trying to do this at initialization. So, okay. So yeah, we can do it. 

I think this will be, yes, that's right. 

We'll do it right here, because this is where the ephemeral context would go anyway, actually, which you'll see that in, which I'm sure you've already seen. 

This is where it would go anyway, and this is what this is, so this is perfect. This is a perfect spot for it, actually. I just have to, yeah, this is perfect. It won't even be here for me to remember to delete it moving forward, okay? So you'll do the same thing after I finish mine and clean up and send mine, and then I'll watch you guys and walk you through it, okay? 

So I've created this little manual place, ephemeral context in my cycle zero tag under this cycle zero context. 

Now I'm going to drop, just drop it in simply. Oh, almost simply. I'm going to tag it as well. So I'm going to tag it as app demo . py. Because what is this ephemeral context, right? 

It's app demo . py, thank you. And then paste. So then there we go. 

There we go. 

So that's all I needed to do. And now I can copy this whole thing. and then I can send it to... 

I'm going to do something special as well. 

Watch what I do and then while mine are cooking, we'll go through yours. 

So get your screen shares up or whatever. so oh I need to send it here as well I'm sending it in I'm gonna send seven But I'm gonna do something that you can't do because I paid the big bucks But then I can I can share with you what I get I have the Google Ultra subscription which gets me access to deep think which is in my opinion the smartest AI available right now and so you'll see the difference you'll get to see some very unique vantage point to see that so but now I'm going to I've got my kicked off, I'm going to check your screen. All right, so I see, yep, I see a mouse moving. Who am I looking at? I see Google AI Studio. And then, okay, okay, okay. 

I should watch, who should I watch? And then we can both watch the same person who wants to drive. Perfect. Okay. So you okay. Perfect. 

Perfect. So let's try something first before you so copy copy. Okay. We know we have it saved so you won't lose it or you can recreate it easily. Let's go to over on the left. Click at the top up a bit. 

No, you know, actually I remember doing this experiment and I already know what the result will be. It will, even if you put in the app demo and click it now and then click initial, it actually still says no artifact. It won't do it. So you're going to have to do it manually just like I did. So don't worry about that. Go ahead and click generate down there. 

All right. So first it creates this, uh, readme, which I've in this update, I've renamed it slightly to just make sure that people won't get their readme if they have one or whatever, but it's in its own. Now you just need to, uh, Let's see. Open up the prompt file instead of the README. Yep. And then in there, do a Control -F, and then type open bracket cycle space zero close bracket. 

Open, no, I'm sorry, greater than, less than, but not brackets. Yeah. Yep. So right under cycle context, the closing bracket of cycle context, and above whatever that static is, you see that? It's down a bit. down a few lines nope nope that's the top we need the closings what up for you it's up a smidge no no for you it just 

a big cut. Maybe you all have a slightly different amount of sentences in your, the only difference would be, yes, that's the right spot, would be the project scope. So, enter, enter right there. That's where you're going to write the ephemeral, just like I did. So, make an open tag and close tag for ephemeral context, and then within that, a tag for appdemo . py. 

So, your screen is actually, I cannot read anything that's on your screen. um yep so let me try to pop this out and yeah do total uh total uh total pixel pixel quality is that for you as well both of us we see the same pixels because i genuinely can't cannot read i cannot read a single character on your screen but i can see where your cursor is oh oh but just copy and paste copy and paste it into chat just yeah that's a good idea no you you do it you you copy yours what you're trying to show me into chat and then i can see what you're trying to show me no yeah that's fine that's yeah that's good Yeah, I saw what you added. Yep, okay, so I would, no, just put the slash just to keep everything standardized, because I always put the slash, and that's the way I built it, at the front. So you see how you put a femoral slash? I would just move it to the front just so it's the same. I mean, it would understand, it honestly would, but let's not add square circles. 

Press Enter? Nope, yeah, right, yep, perfect. Right there, I saw your cursor move. So right in that new space, see, I do appdemo . py, and the same process. Tags within tags, because it understands the hierarchies. 

All right, and within there, you actually paste the script that I've given you. The app demo script, yeah, the whole thing, all 16 ,000 tokens. 

Right -click, open with Notepad. Yeah, right, Notepad++, Notepad, doesn't matter. No, no, let's do this. You could just actually click and drag it into your product. Yeah, that's fine too. Perfect, yeah, because it's just a copy -paste job. 

And then you can close it and drop it in there. Yeah, now copy the whole thing. And now let's look at your AI Studio. Let's make sure I'm doing that one right as well. So in AI Studio, you want how many windows? You want to do how many responses? 

Four? Let's do four. Four's it. Cool. All right. So over on the right, what model do you have selected? 

It should say up at the top, it's Nano Banana, I think. Change that, over on the right, change that to Gemini 2 .5 Pro. A bit further down, just a smidge, right there, Gemini 2 .5 Pro. Now, I've seen on Reddit that someone did statistical analysis on the temperature and the quality in code outputs and has found that the peak is right around 0 .7, all right? Yeah, set your temp to 0 .7. And then the only other thing you want to make sure is Right below that in the thinking section you want to you want to make sure your thinking budget is maxed out right below down That's you can't turn it off that that one you can turn off. 

Yeah. Yeah, the thinking is on it is all is is Permanently on the 2 .5. Pro, but the thinking budget is not maxed out by default. So you want to max that out? 

And and that's the only oh, oh the next yeah, it looks like the grounding on google search is on I've been getting good results with that. 

You can leave that on Okay, that those are those are the only two things you check on the settings or up three if you want to count the model itself And then yeah, go ahead and paste in all four, uh in here one, two, three, four And then now you are just as caught up to where i'm at So i'm now let's switch back over and uh, let's look at what responses I got because I did I did seven I did uh four just like you did but then I did three into uh it's and they're still going into deep think and we'll get to compare sort of the results so while that's going I'll just go ahead and start oh and we can 

an internal error, it looks like. 

But it does seem like it did finish, though. 

So I'm curious about that, because this only appears at the end. So I will just disregard that. That's again, that's also a good example of why we run parallel. Let's say this ran for like, you know, 500 seconds and then it fucking errored out. Well, great. There it just goes nine minutes of my life unless I ran in parallel. 

And see, this one has no errors. So it doesn't look like it really errored out, but that's a good illustration. Okay. So copy. Now I'm just going to my JQR project. I'm going to just be dropping in because we got the nice blue highlight. 

We know response one through four. I'm actually going to increase to seven. You won't do that. One, two, three, four. Scroll down. Control. 

Yeah. So in the initial, it's 125 a month for the first three months, and then it's 250 a month. It's kind of expensive. Yeah, it's kind of expensive. 

The marginal difference in between 2 .5 and DeepThink is not worth the 250. 

I have it because I am actually on the leading edge, and I actually want access to whatever's the actual, yeah. 

But seriously, I've done everything I have done with 2 .5 Pro. 

Deep think is just sort of new and I'm experimenting with it. You only get five messages a day, right? I have, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah. So, and I did three, but I have a, so guess what? So, if you get your AI subscription through Google One, you can create a Google family and add up to five other accounts, and each account that you add to your Google family plan gets Ultra. So I actually might be able to just like add both of you, actually, and you just have Ultra. 

I mean, I also, I also, I also, I also, well, I also don't need six fucking accounts. I could spare two. Don't worry about that. No, don't, it's, it's, it's, it's, it's not skin off my back. I, I have yet to ever, so I did it to, to get, to break those thresholds, but I've, I've yet to ever get near it. I have plenty of overhead. 

It's no, it's, it's, it's, it's just a matter of me opening up the window and changing it around. 

So if you want to give me your email, I can do it. Otherwise I can't. 

No big deal, man. Okay. So we got a deep think response finally. All right. So I'm going to copy this thing as response 5, 6, and 7. So parse all. 

Now that I've pasted all the seven full responses, now the parse all lights up. 

Hit parse all. And it looks like we've got good parsing. I see. files in all of them. Yep, looking good. Okay, so now the next step is to sort. 

So that's our first sort of validation. So now we can see that response three was the longest. So that's actually kind of surprising. Honestly, I'm surprised that I see why. Okay. 

Okay. 

Okay. Okay. Because it's potentially regurgitating the entire 60 16 ,000 tokens over here. And over here, the smarter guys We're doing it differently. So we'll see. 

We'll have to analyze. 

See, 5, 6, and 7 are the smarter guys, the smarter AI, and they're less tokens. So we'll see. We'll check it out. We'll look at those next. Okay, so the first one I got back is 22 .5 thousand tokens, which is quite a lot. Let's see if we can find which one is where it's all at. 

I guess we won't until we add it and then we get the token counts. Okay, but I can, it's this one. Oh, I found it already. So it's this one. Oh, see, which is fine. It just made it for me. 

It actually dropped the source code in and made A1. That's great. And this is what I was looking for. See what it did for me? Honestly, this is what it did for me. All I wanted it to do is to make it an artifact and give it the description and everything. 

And then it just dropped it in for me. Perfect. Great. 

Now, I could diff it, but I'm honestly not too bothered. 

I'm sure it's just fine. I'm sure it's just fine. Okay. So now we can read the analysis of what the script is. Let's just peruse that, because yours is going to be basically the same, so you won't have to read it if you read mine. This document provides confidence analysis, yes. 

Sophisticated multi -tenant Slack bot, okay? Multi -tenant means my Slack bot was made so it could be installed on multiple Slack environments. You won't necessarily need multi -tenancy. You just will want to install the Slack bot into one environment, right? So that's what multi -tenant Slack bot is. So a wide range of features, AI -powered chat, knowledge -based integration, user permissions, And see, that's the thing we can say up here. 

Like, you see what I mean? So, the goal of this analysis is to understand functionality, blah, blah, blah. Application is SlackBot built with Python using a Flask web framework. When I built it, I didn't even know what Flask was. I asked the AI, how do we make this SlackBot? And it said, oh, you would use a Flask, you'd make a Flask app. 

I'm like, okay, I guess we're doing Flask. SlackBolt, it's a Bolt app as well. I didn't know Bolt, I didn't know Flask, I didn't know Bolt. That's okay. It's designed to be installed in multiple Slack workspaces. That won't be your, Requirement you won't that'll that'll simplify things completely because you'll be focused on just one environment. 

No big deal I was making a product for you know, multiple companies I that I could potentially sell but I couldn't even get anyone to pay attention to what I was trying to say Let alone buy anything from me. So anyway, this provides anti -powered systems within slack channels. Okay, let's see What are the features event handling the bot listens for an app mention event? So then that would be another thing we add. 

So, okay, let's just start writing. 

The first thing was Okay, so our Requirement will our needs will not require multi. 

Let me see Tendency, let me see it this way. 

Okay, so I have reviewed the A2 artifact, you know, the one that says it's the analysis. And here are my thoughts. Our needs will not require multi -tenancy as I'll be installing on just our Teams workspace. 

But also we will want to handle not just app mentions. 

So when someone mentions the app in a channel, and channels, but also want users to be able to DM the bot. See? There we go. Okay. 

And that's why we read it, we think about it, and we jot it down. 

We capture the genie in the bottle, right? We capture the genie. That processes the user's query, maintains the thread history, and generates a response using an open AI API. 

Next. 

Next part of, next point of contention. 

would be the generating a response using the open AI API. I have a model name. 

I don't know what your model is. I have model X installed. It's fine. 

It doesn't matter. I have model name installed because mine's going to be different when I get there. Well, actually, which one do you have? 

The 12th? 

OK. 

OK. Cool. This is what I'll do. I'll get, I'll see if I get 12 on my laptop here. I think I have it. Okay, so I have this. 

Okay, good. 

So then you'll just, all you gotta do, yeah, we'll use the same model thereabouts. 

So that's cool. Okay, Jim threw 12 billion. And so I wanna get this model card basically. I'm looking for that. My models. I think it's just this, but I'd like to copy it correctly. 

I guess that's, I don't like it. Let me see. Yeah, that's not. It's got extra stuff in there. It's just this, I think. Let me look. 

Let me look. 

Where I know it's supposed to be. 

So these settings are... 

Max that shit. 

Max that shit. 

Okay, nevermind. 

Yeah, okay, I haven't used LMStudio on my laptop in a minute. But, uh, yeah, so that's what I... Ah, I'm just gonna be lazy. I know that's the right answer. Okay. I have that model installed in LMStudio locally. 

I will provide you with screenshots of my setup. that you can capture the important, relevant constants, values into an artifact or LLM integration. You bet your ass you can. Yes, it is. It's fucking wild, dude. It's wild, dude. 

It's wild. 

It is. 

It's so much fun, dude. 

This is so much fun. Gotta do all this in harmony. They're working on that harmony structure that I was telling you about. Try to get perfect alignment with AI. Okay. I guess I only have eight. 

It doesn't matter. I just wanted things to be... 

Oh, wait. 

You know what? It doesn't matter at all. It'll still... No. I just wanted it to be aligned. I should still be fine. 

I think it'll automatically offload some of it to my CPU RAM or my regular RAM. 

So let me just set that back down to something not ridiculous here. 

Okay, so more context, I don't know if you know, one does not simply load a 12 billion model on a 16 gig part and expect to get a million tokens of context. 

Yeah, more context requires more VRAM apparently. And there are tricks apparently also. as well, but I don't know any of them. I haven't looked into it, but yeah, I think that's a good number. Okay, now I can try to run this thing, because I can also just run it on the other one, but that's fine. Because I don't want to divert my environment too much from yours, because that'll just make our program along, whatever we want to call this, more difficult. 

So I'm deliberating now so that we don't struggle later, because I'm foreseeing. Okay, well it loads, and then as long as it's performant, we can just use it. Oh, I clicked the wrong fucking button. 

Okay. 

I think I'm gonna load a small model, but it's it doesn't matter your process will be the same You'll just it's just it's literally just the name of the difference You're just calling a different model, but everything else is the same. I'm gonna load three in e4b I think that's the most performant small model. That's remember see I said when you asked when there's a good time to use it Well, here it is. 

Don't want that it doesn't go in my room I don't have to understand anything. 

I want to keep sure sure sure sure sure Okay, cool, it's working. 

And it's, yeah, it's fine. 

It's fast enough. Okay, cool. So I have that model. 

Then I will just, yeah. 

So this is a screenshot I'm gonna take. No, do not do that. Do not do that, cat. Do not attack my other cat. You'll get your ass kicked. 

Do not do that. 

Okay, okay. So, oh, almost. Let me, I don't, so this is not necessary. But this, maybe there's something here. No, that's correct. This is, so see, so what you see on the screen, is you see that it's reachable at HTTP blah blah blah, that's important for the AI to know. 

The name of the model, that's important for the AI to know. What supported endpoints, that's important for the AI to know. We've got the context. 

Actually, I'm going to see if I can crank that up and reload and see if we're Gucci. We should be. 

It's a small model. But it's going to now know and capture a context line and nothing else really is that important. So I'm just going to go ahead and screenshot this print screen and then I'm going to go and delete these four and just drop in my screenshot now because there's no other way to get it out of my clipboard. You know what I mean? It's on the clipboard now. Just get it done. 

Legit. Yeah, it knows what LMStudio looks like. It knows all about LMStudio. Yep. Yep. Yep. 

That's pretty crazy. Okay. It's going to make you an artifact that captures that information for you, so that when you actually do make your Slack bot talk to an AI, talk to your AI, AI Studio actually knows what correct API call to write for you. You see? Otherwise, it would just hallucinate an API call, and your script would not work. You would then have to go find, well, what is my model name? 

You would have to make sure that it's got the right port and local and things like that. Yeah. Yep, yep. It's just, yeah, it's documentation. Otherwise, this is what would be an actual documentation and an actual corporation would be these kinds of details like, you know, what's the name of the model in use? And what are the parameters? 

And then where even is that stored? Well, we just store it in our artifacts. Yeah, all everything is an artifact. So, okay. 

But also, I think maybe let's go load. 

Ah, maybe hold on that we might send multiple screen as well. I did that. I remember I sent two screenshots when I did this last time, and I believe it was that as well. But it's honestly, it's almost the same. It's all the same stuff. 

It's all the same information I've already had, so it's fine. This is the only thing that's technically, technically new, but I don't think it needs that at all. It just needs this. Yep, we're fine. We're fine. We're fine with the screenshot we got. 

Okay, and make sure yours is running or whatever you have to do over here. You probably don't need it on the local network. You definitely need it running or else you won't be able to Talk to it outside of LM Studio, see? So it's available within LM Studio. Switching the switch, making this running. 

Up there for you, yep. 

So all your settings should be fine. Open it one time. Yeah, yeah, yeah, yeah. 

Perfect, yeah, they're fine already. Just turn it on over on the left, top left. Yep, see, now it's available, see? Now take that and make sure you got, load the model or whatever so that on your right you've got the load tab for the model that you're using. And it's got the parameters, the context and shit. Because at that point, it's just the context. 

That's the only thing that's important from here, actually. And then the tab on the right, make sure that's on load, just because it has a context link, which is a parameter. That's one of the most important parameters for your AI to know, of how to program your local AI. Okay, so yeah, yeah, and then reload down at the bottom, make sure it works. Yeah, make sure it fits. if I fits I said it's right didn't fit so cut it in half and then see if it loads and then split it in half up and down so quickest way to just guess your way through it yeah there you go your own yeah yeah you see just like I said the context didn't fit if it works fine no and what I can't even read what is it set at 131 that's fine 28 is dude 28 is just fine you're short for who cares you know it's fine it's fine Yep, 28 is quite a lot. 

But you see, so you'll figure this out. 

Once you start chunking, and you got like a chunk, and each chunk is like 500 tokens, and then you start sending 10 chunks or 20 chunks and seeing the results, you're going to fine tune this yourself. It's gonna be very natural. You'll just see, oh, this is too slow. 

Maybe I don't need so many chunks. I'm getting good responses anyway, lower the chunk, whatever, you'll figure it out, yeah. 

So there you go, got your screenshot. Take that and drop it in your Windows, Four fresh windows. I just delete. You saw me delete. I just find that the fastest way to do it. 

Yeah, I would just delete your hope No, no, no, no, no because you that's correct. 

Thank you. 

Yes. That's what I was. That was this skip step. I skipped you Yeah, so now you have them captured. 

Yeah. 

Yeah. Yeah. Yeah. Yeah, those are the thoughts like those as well Yep, it will if you uh, yeah if you go back and I'll show you how so hold on I'll show you a quick way to do it get your Elm studio back up if you hold hold alt and press print screen. 

Oh, nevermind. 

Yeah, hold Alt and press Print Screen. 

It should just, yeah. 

It shouldn't do anything. Oh, then that's different. Nevermind. Yeah, that's different. It should put it on your clipboard, yeah. It should put it on your clipboard. 

And then just try pasting it. It should take it. Okay, cool. It took it that time. Oh, it did take it. It's just wonky. 

Okay, cool. Great. Yeah, once you've pasted all four responses in, then you hit Parse Alt. 

And then over on the right you hit sort and then just you know, because all things are all all things being equal Might as well just start with the one that gave you the most content content back, which is the largest one that one Yeah, and so yeah, go ahead and just you know read through uh, sort of that out loud kind of like I was and then uh, and then where you see Divergence with what you because I can't I I I did it with what I have my mind of your project But you have you know your project in your mind So just like I read through the analysis one, the analysis artifact, you go ahead and read through it and then once you see something that's misaligned with your mental model, 

with what you want, like we're not making open AI calls, then we'll write through it, okay? So I can't read them? Go ahead and just read off the titles. Yep, no problem. No, hey, no problem. Just slow yourself down, speed up. 

That's exactly what I mean, man. For real, no, it's data assets. It's a really important lesson, and it'll be valuable. I learned it the hard way, so. So you, reverse engineering might be the one you want. It's just called reverse engineering? 

Yeah, because analysis, I think that's what you want. 

Does it in English explain what the app does? 

Yeah. There you go. So different names of Sasquatch, but yeah. Go ahead. Sure. So yeah, so okay. 

So then over on my screen, I'm going to go ahead and leave it up. But I do have the notes that I wrote. So I did hear you already. mentioned two misalignments. So if you want to write them in your own words or use the words I wrote on those two, then we can keep going after that. Yes. 

Don't worry about those. Those were, I was trying to sell a product. 

So I had like premium and free version. 

Some people get 25 messages for every three hours. Yeah. And that'll be something that you can say, you can. Okay. So here's the deal. You can say, we don't want these, or you can literally just ignore it. 

It'll probably never come up in your development. You see what I'm saying? But just if you want to say, hey, now that you know, because you wouldn't know what subscriptions were for until I sat here and told you. But now you can say, we won't need subscriptions. We're making this for an internal team. You know, you're just giving, because all that is actual context where you're, that's that, it really mattered. 

Those things, that explanation helps paint the picture to the AI of what world it's working in for you. Yeah, take your time. This is a 15 minute exercise. And then once you have at least all the points listed that I have, I'll continue reading on from where I left off. So then you have a mention of your screenshot? No, no, no, no, no, no, no, no, no. 

So go back to your. So what your task is now is to start writing your cycle one cycle context. And so then and then once once we're done and and you're going to be filling what you're filling it with, you're filling it with your feedback on the analysis. All right. You're critiquing you're critiquing the analysis so that when you do start this project for real, you're starting it on the right foot. Right. 

Because, so let's take a step back. So you've sent an initial paragraph of your vision. The AI has come back with how it thinks, how it, no, it came back with what it thinks your vision is and how it can create that. You're doing further, this is alignment, this is AI alignment. You're aligning this context for your specific use case and the more you do now, The much better off you will be, I promise. And it's only, we're just spending a few cycles. 

But it's this thinking. You're actually building such a beautiful mental model of your own project, seriously, at this point, before you even get started on it. This is all the background legwork that has to happen anyway. You're just doing it right in the moment, so it's like the fastest, best way to do it. Because you're just validating what you're reading. You're reading its thoughts, basically. 

Yeah, hey, there you go, okay. Yeah, 10, 15 minutes, whatever, even less than that. Once you get the few two points, I think I just have two paragraphs, we'll move forward. Yeah, multi -tenancy. I'll just, would you like a little spiel on that or do you don't care? So I first made the bot where I could connect to one workspace. 

And then I thought, how am I going to sell this as a product? Like, am I going to go literally sit down in a meeting, try to get a meeting with business owners and try to tell them, Hey, here's how you can get AI into your Slack. And let me pitch them with my slide deck. Like what, how am I going to get this idea out? Like for real? And then, and then once I got someone like interested and they wanted it, am I going to install my bot in their Server, where's it going to run? 

How's it going to work? Is it going to be like, so am I going to have like 10 different versions of the bot? What if I need to make an update? Like, how's all that going to work? 

All these questions. 

That kind of stopped my project for about a month until I saw one idea from some other project. 

It was a add to Slack button. 

It was a one -click install. And I was like, what is a one -click install? What is that? It was like this nice little add to Slack button. And so I just posed that question. I just said, I just went to my prompt and I said, hey, what is the, What is add to Slack? 

And I asked GPT, right? And it's like, oh yeah, that's how we handle multi -tenancy. And in order to do it for yours, you would just wrap your Flask app in a Slack app or something or whatever. And then basically, ultimately, you would be able to run each bot, each instance of the app in a dictionary, in a Python dictionary. And each app is, it's not a dictionary of strings. It's a dictionary, I think, 

So each app is running in the dictionary, in the Python dictionary. I was like, is that even a thing? Can you even do that? But again, so again, I haven't told you guys this. I sat out trying to see what the limit of the technology, right? I started that when it came out and I have yet to find the limit. 

So I wouldn't be finding the limit if I didn't try what it suggested. So I just went balls in, you know, just to let this go. And actually, I actually almost thought I broke my project, but then after eight or nine hours, I had my Slack bot running in three different Slack environments, even though I only had my one script running. It was running and connected in three different Slack environments, and I could message my AI in different Slacks in different channels in there, and it was all working and all segregated. I was like, holy shit, what did I just do? Multi -tenancy, holy shit. 

Solve the problem, because now if I just update my code, all of them get updated, right? Because it's just one thing running. Anyone can just click a button and add it to Slack, which is what you'll have click add to Slack, but you won't be doing multi -tenancy. So that's what multi -tenancy is and why you won't need it. So I had my whole bot made before I even thought multi -tenancy. That is the model name. 

And then local LLM, yes. So then immediately it knows 127 .0 .0 .1. And then LLM Studio, the default is 1234. but you're giving it in the screenshot. So it's confirmed in the same way. Yep Yeah, so we won't need the subscription functionality basically is what you're yeah That's what it turns into. 

Yeah. Yep. Pretty wild. Sure. Okay, it does look like you got the same stuff I have so I'll just keep reading The slash command. Okay, so knowledge base integration, right? 

The premium features the ability to create specific knowledge base It's all good, but use link chain blah blah who cares Visector, all good. Slash commands, Vox, those are the numbers. slash commands for administration, user interaction, just sitting there, just managing permissions and uploading documents. So I have some, all the slash commands I have are basically just fine and useful. They're things like, so whoever is the Slack workspace owner is the, well, shit, you can program it any way you want to, actually, so don't worry about that. Basically, the way it works is in Slack, you have a user ID, And you'll basically, you can give like admin, you can go into your own Slack and find, you know, your own Slack ID, right click on your name or whatever. 

And then in your program, you can make yourself the admin. So, and then you can delegate permission, so someone else could set this system channel message if you want. 

But that's what my slash commands do. 

They sort of, I made a, I guess a user permissions, user account administration, because a user can make another user a channel moderator. with my slash commands. Let me see if it has them listed. No, it doesn't. I was hoping for a more better breakdown, to be honest. I can glance through the other ones as well. 

That's why we have multiple slash commands. 

Yeah, here we go. There we go. See? There are all the slash commands in front of us now. So, setsystemmessage, sets custom persona instruction, addchannelmoderator, removechannelmoderator, and channel moderator. 

So you as the admin can add a user as a moderator in that channel and that user can set the system message and manage their own channel. And then that user, that moderator, can also do the upload PDF. See, so that way you're not managing the whole fucking thing yourself. You can start delegating permissions out. My app, and then also add bot admin. So your own permission level, you can, also give out your own permission level to another user so that that user can give out create moderators themselves you see yeah no but you're the administrator of your app you're the administrator of your bot so in your channel where you have your bot added you uh whoever is one of these administrators the administrator that i'm talking about not the one that you're bringing up we'll talk about that next The administrator here is all within your control because you could completely control the bot. 

You see that's separate from the Slack workspace. That's right. There is a distinction there. Now the Slack workspace, you're going to have to talk to the Slack workspace owner. If your goal is to actually get your Slack bot in your actual Slack, you're going to need to get your Slack workspace owner to click the button to install it. Now, if you can't do that, the beauty of Slack, the beauty of Slack is it's, you can very easily make your own Slack for free. 

And then you can just invite whoever the fuck you want and say fuck you to whatever rules. That's what I did at Palo Alto Networks. 

That's how it worked. 

That's how I got... Because that's what InfoSec, they said, no, you can't connect your bot. to internal tooling. And I said, okay, I'll make my own Slack. And then they couldn't say shit, okay? And then, yeah, there you go. 

So that solves that. But, and then you can still, that's a perfect, that's a very perfect pilot project because then you can invite whoever the fuck you want to your Slack and say, try this. Go ahead and use it, it cost me nothing. You can use it up until we get this thing implemented in our real Slack. I don't give a, you see, I don't give a fuck. So yeah, sure. 

Yeah, that's correct. 

So the message will go from the user's computer, their keyboard, into Slack proper, and then Slack will take that, and then the bot will be listening, and the bot will see that it's mentioned, and then the bot will request the message and everything that it needs to. 

because it has the authentication, and then the bot will process, because the bot is also running on your local, it'll process, it'll send the request to the local LLM, and then back and forth, because it'll also use the embeddings. So things will happen, and then your scripts will then, when it's got the response, it'll send it back to Slack, and Slack will present it to the user. Is your shit HTTPS? Is your shit HTTPS? Okay. So, I mean, Slack has everything Slack already has. 

So, like, you're already putting stuff in Slack anyway? Like, anything that you... Yeah, so, like, it's the same as, like, you know, oh, I don't want to give Google my data. Well, I mean, do you have gmail . com? Okay, they already have literally all your data. 

Yeah, so, like, what do you... Yeah, so, yeah, as long as that's your... The answer to your question, and I'm not being facetious now, is as long as you have HTTPS up, then you're good to go. Your shit is secure through and through. You see, you're getting it from Slack to your bot, HTTPS, and then you process it internally, and then you send it back out. It's all encrypted. 

It's encrypted in transit, see? Encrypted in transit. Then that's a different thing. Yeah, that's different. Yeah, that's manage your own shit. Yeah, manage your own network. 

Yeah, that's separate. Yeah, yeah. Only if you want to run... So first of all, that's correct. Anytime you want it working, that's right. If you wish, to host this in the cloud, that is your prerogative. 

That would just be another cycle that you describe to the AI, I wanna host this in AWS, make me an artifact to help me get it there, because you'll test it locally, but then when, you know, that's your deploy, that's your CICD pipeline. You see, I'm presenting you a purely local solution to keep everything as super simple as possible, okay? And then, second of all, LM Studio is pretty fucking good. After an hour of no use, it basically offloads the LLM. So yeah, your computer's on, but at least it's not got the LLM loaded, ready to go 24 -7, right? So it's not the end of the world, and all you're ultimately using is electricity. 

Yeah, no, that's good. Any other questions? It's all good stuff. You could. No, but you can get a cloud resource that has a GPU. Yeah, yeah. 

See, you know, there are cloud resources that offer GPUs. Yeah, and you're good to go there. You can just install the same shit. Install your LM Studio if you want on there. Who cares, right? And then set it all up however you want. 

Or you just ask, you know, make an artifact. Maybe AI knows a better way to do it than I'm presenting. But that is it. You would go get some GPU in a cloud and then install the LLM there in the same way you're doing here for learning. Yep. Yep. 

And then it's just a different API called different URL. But your code doesn't change. The only thing that changes is the URL, you see? for the API call. Your whole script you made is the same. Yeah. 

Okay. So that's what I wanted to show with these is I wanted to articulate the way particularly these work. So you had it at got it. a grasp of the idea of like the authentication, the hierarchy that exists a bit of the responsibilities, because there's a bit, you know, just setting a system message, because someone breaks it, they can break your bot if they accept this, break this, if they remove the system message, right? So, okay. Knowledge base, that's going to be just fine. 

Upload PDF, there's no reason to change any of this. It works beautifully. 

Provisions and security, fine. 

Yeah, whether or not they are administrators or stuff, all good stuff. Yeah, commercial features. 

See, that would be, I think you've already said, we don't need any of the commercial features. 

We're doing, I didn't though, so I will. Finally, as for the commercial features, since this is an internal project, we won't be needing any of that paid limitation for premium features, et cetera. 

Okay. Ah, just because I said finally, I'm gonna say next. It says Firestore, but I think Prisma is easier. Firestore is a cloud. And when I built my Slack bot, I didn't know. I didn't know as much as I do now. 

There is literally no, no, no, no, no need to overcomplicate shit and try to use Firestore. You can just use Prisma schema and you're a local SQL. And it's totally so fucking much easier for database. So you would have the local database, local, All in this full stack, you'll be loving it. frontend, LLM, database, all four hats, we're in all four hats right there. 

Okay, so we'll just get that mentioned next. 

And then finally, I see that the, what did it say? Firestore. I see that the architecture, the tech stack uses Firestore, but, If we can just use like a Prisma schema, that might be much easier. I think I'm taking a look at the technical scaffolding plan because that means that, okay, because if we're gonna use Prisma, then it would have a prisma . schema file somewhere in here and it does not. So then that's to put a pin on it to the AI. 

I'll say, so after updating, so after, so, okay. So take in this feedback and then update the relevant artifacts plus documentation such as adding charisma that schema to the technical scaffolding plan etc see i'm giving it an example so that's one shot right there that's that's what the uh graybeards in the ivory tower would call the difference between zero shot and one shot, is I just gave this little bitty example. There you go, one shot. Definitional one shot. Or EG, I think it's EG, whatever. 

I don't care to think about it. Okay. One means that is to say, and then the other one is, EG is an actual example. So IE is that I mean to say. Something like that. I had a fucking COO correct me on that, so I'm like, okay, I'm gonna get the difference. 

Yeah, yeah, Ingrok. Ah, here's another difference. Ingrok is a reverse proxy. There's actually no reason for it. You can make your own reverse proxy, right? See, that's another thing. 

Ingrok, you pay $10 a month, and you have the privilege of them being your reverse proxy. You can have AI make your own, so that's gonna be the next thing. I'm just going to stop saying finally. Next. Also, in the dev and testing guide, if you guys got that. Okay. 

So, yeah, mine says, yeah, that's to start the development server and the dev and testing guide. Do you have any sort of dev and testing guide? Okay. That's okay. That's okay. What does yours say in terms of like how does your local server get exposed to the internet? 

Okay. Then just mention, yeah, go ahead. 

See, we can, we can, you can use, you can make a local. 

So, okay, so here, let's see, let's see, let's see. 

What, where are you, where are you living? Where do you actually have time out? Because I'm forgetting about Robert. 

and shit. 

So, where are you? Are you in a dorm or something? Okay, so you have your own AT &T router or whatever? Okay, cool. So then, that'll be part of the equation eventually. But then we'll just, when we get there, we'll document that in sort of the same way how we got into your route, we got into the LM Studio, and then we opened up some configuration stuff and we took some screenshots. 

You'll probably, we'll do your own reverse proxy. You'll forward your own fuckin' router, so you'll do all the networking shit. Forward the traffic for your Slack bot, straight from Slack to your bot, through the port, running locally. And then, yeah, from there, it'll be all inside your computer where it needs to go. And all that is is a reverse proxy. And that's, again, that's all the, it's amazing to learn this shit, dude. 

Just be like, wait a minute, you don't need, like, nginx, you don't need fuckin' ngrok, you don't need fuckin' this, you don't need fuckin' that. I can just make my own fuckin' thing, like, what the actual fuck? It's crazy. All the overhead is gone. 

It's just fucking running on your own. 

Your own LLM, your own database, all of it. Anyway, I'm going to stop geeking out. Okay, so also in the dev and testing guide, I see the use of ngrok. I think we can actually just make our own reverse, our own reverse proxy, proxy solution. We don't need ngrok. I'll, when we get there, I'll just show you my router. 

When we get there, we will just document router and the necessary port forwarding in an artifact. if you want to get that started You can I have AT &T router and open that up 192 168 1 2 5 4 and then you go to yours. I think mine's 2 by 4 Yeah, yours might be one. Yeah, so see see see details see what is this? Uh that we have a box Do we have serial number something systems? Starting with just letting the AI know what router model from Verizon would just be a great first start. 

And you can just kind of leave it there. And then it'll start making an artifact where it'll start giving you instructions like, yeah, you're going to open up this tab to get to the port forwarding. You're going to want to write this in there. And then from there, when it's like step three doesn't work, you just say, hey, step three is wrong. What do I do here? And then your own guide, your own artifact will be updated. 

And then the next time you need to go through it, you just have the artifact already written out. It's fucking amazing. So just whatever, yeah, somewhere, something that just shows the model of the router. And if you can't even get that, then just the homepage, whatever, screenshot. It's enough context for the AI to just get an initial artifact made for you. Because it knows what forwarding is, it knows Verizon. 

And just add it as a second screenshot in your list, in your, just to get it done. Yep. It's so slow, dude. Holy shit. I'll just take this screenshot and be done with it. 

I have an AT &T router. 

I'll provide a screenshot of my logging into it. 

That's it. That's all it is. Yeah, just however you want to say it of the homepage, of the login page, of the main page. Yeah. Oh, in this moment, also find, oh, get your local IP. So, ipconfig and tell it what your local IP is for your laptop. 

It shouldn't be. Your local, internal? No, your, so, okay, so your external, it's not, if your external ever changes, you just need to update your script once, it's not favorable. Maybe you'll have to change something in Slack admin when we get there in their URL, in their admin portal on the website. But the trick is, don't let your router disconnect from power. Like, you know, your house might lose power and come back. 

When that happens, that's when your IP address gets reset, dude. I haven't gotten a new IP for two years. Because I have my router battery backup. And so if my house ever loses power, my router doesn't. And I don't ever let go of that IP. 

I have yet to ever, ever, ever. 

Code dynamic. I have yet to ever have to change my IP. And I've been hosting my website. for a long time with just that little thing, okay? And I've had AT &T, I've had Verizon. So if you ever have to change it, it's A, not the end of the world, and B, the solution is just put a fucking battery on it. 

Put it on a fucking battery, yeah, yeah. 

A battery that won't be drained by your computer, right? 

You see what I'm saying? 

Like its own separate battery. 

Yeah, yeah, yeah, okay, all right. 

And then you'll just never have that issue. But your local, you just wanna tell the AI now, go ahead and get in your context what your local, Because that's an unknown, it would need to know this for writing anything in between here and there for that instruction. So your, Mike, mine is 221. 

You're just, you're telling the AI what your laptop's internal network IP is, and what you're doing is, in the future, it would tell you in brackets your internal IP, which is frustrating. 

Now that you give it now, in the future, it'll just tell you what it is, and it won't give you the brackets, because you gave it to it in the first place. All right, I think that honestly that's pretty much a lot to I mean it's not a lot what I mean is it's enough a lot in terms of like I've given an AI a fuckload of shit to solve and so comparatively these are minor tweaks but it's enough that I think it's that we're good to go so and I already did say taking all the feedback up to date relevant artifacts. 

So I'll just take that line and put it at the bottom. 

So please, and I'll say the word please, so that it knows this is the directive. It's not that I'm being nice to the AI. I'm not asking nicely. I'm saying this is everything I said above, and this is what I'm asking, I'm expecting out of from you. Please do the thing. Please take in the feedback and then update the relevant artifacts and documentation. 

And then I need to actually select the response. So I'm going to just go with the biggest file. I could care less. Select this response. 

Select all. 

Aha. OK. So now, do you see how my baseline is lit up? I see yours is as well. I'm going to go ahead and click Baseline. And it's going to say, this is not a Git repository. 

Please initialize. I'm going to go ahead and click Initialize Repository. Does it work for you? Great. It worked. Success. 

Now do it again. Now click baseline again. And then this time it should actually create the baseline commit. Does that, say that at the bottom right? 

Nope. 

Hold on. So what did you say at the bottom right when you clicked it? I did, okay. 

Open a new, okay, is this terminal down here? 

Is this terminal in your present working directory? Can you, do you know, can you write git init in there? Will that initialize? What does that say? 

Click baseline. 

Up there, no. Why? Okay, okay. So, okay. 

Hold on. 

In your terminal section, click on output, and then over on the right where it says tasks, the drop down, click that, scroll all the way to the top, that one, the data curation environment. Now, clear this, just right click, and then clear output, and then now click it again. Can you copy whatever the hell that says over to me? Okay. Oh, let me see it. It's probably something I didn't encounter, so I didn't code for it. 

But I think if you just do whatever it's asking you to do manually, it's just some Git shit. Let me read. My monitor is so laggy. GitHub issues right now. I'm helping him get through it. Yeah, so, okay, so just do that exactly. 

That's all you have to do. And I believe this is articulated out in the documentation. GitHub artifact, but just do exactly what that says. Set your email and your password or your email and your name. But I'll take that error log and I'll use it. I'll take that error you gave me and use it to handle this edge case. 

Yeah, I can just go to the baseline now actually. So all that does is it sets, it runs a commit so that you can easily test multiple responses. 

But no, it didn't add anything in there yet. 

That's gonna be a push command, yeah. 

So everything you're doing... 

Oh, sure, sure. Yeah. won't see it appear in here until you do a git push. What do you mean by, am I committing? 

Because technically in my system you just do a baseline. 

So what do you? 

Clicked on the GitHub thing, you mean in the bot? 

Okay, so you mean, let me look at your screen, hold up. 

Yes, I don't use that, yeah. My baseline would do that, yep. It does, it does. Thank you. I hate, I fucking hate git. So, yeah, yeah, yeah. 

So, yep. And then what does it say at the bottom? Tell me what it says at the bottom right when you click baseline. There should be a little pop -up. Yeah, so watch my screen. Can you see my screen? 

I'm gonna click baseline. And I actually didn't get any pop -up, but there should be a pop -up right down here. Let me look at your screen. That's good, that's what you wanted to see. That's what you, yeah. So it just did a commit for you, that's all. 

And then, Cameron, did you get yours? Cool. So then, yeah, I see we're both at accept selected. So we've got response, the biggest, selected the files. 

I'm just going to click accept selected, but I'm going to also have my data curation window open when I do it. 

Accept selected, and it created all my files, the ones we were just looking at. And so that means I do have that source code file here. 

I don't need to have my app demo selected. 

That would just be Redundant 16 ,000 tokens, so I'll just select that and also it would include me in down here because I would see basically two 16 ,000 Yeah, okay, so then there's that Wait what so we got that so now now now we've got that that and we've got that written We're basically ready to do generate prompt Yep, so we're going to hit yeah. Yeah, we're ready. Yep I'm just gonna generate prompt and I actually have to close this because I think I was already open I'm gonna click it again You're just going to paste this in as well with it. So click in there and just paste it. And do you have that other screenshot? I see only one screenshot. 

Did you capture one of your router? Google AI studio synopsis of the screenshot? No, no, no, no, no, no, no. you don't, you don't send the screenshot by itself. You send this just like Cameron is doing right now. You send the screenshot. 

Yes. Yes. That's correct. Yep. That's correct. Yep. 

Yep. 

And all three go together. 

The yes, sir. The two screens, the two screenshots and the, uh, and the prompt. And then you just fucking send it, dude. Full send. Let's go. Of course. 

$3. Yeah. See, um, Here's the deal about thinking. Check this out. This is facts. There are some domains that the only thing the AI needs is just more thinking time, and the problem is solvable. 

At that point, the only question is, how powerful is your computer? That's been mathematically proven. There was a Google researcher who made a tweet about that, and he posted his research paper or whatever. But just keep that as the mental model of what these things are capable of. That's, again, another thing to think of when you do the parallel prompting, because the thing times out at 600 seconds, because that's about how long it takes to give you 65 ,000 tokens. And so when you run in parallel eight responses, and you get 600 seconds in each response, that's 10 minutes. 

of processing time times eight, so that's 80 minutes of processing time in just 10 minutes that you waited for. That's actually insane to think about. And then the final thing on that parallelism is if response A gives you garbage and response B gives you the solution, but you actually only just sent once and got response A, you never got response B, that other potential future doesn't exist for you. It just doesn't exist, right? You now have to go deal with your response A, And just solve the problems that response a brought you or or try your try your call again, right? Versus just sending it twice. 

Yeah, so okay. So go ahead and you want to send yours off? We're getting started here and Yeah, and Networking information that's going to be necessary to kind of get so the block and talk to the network to dislike and get the message. Yeah Beginning planning we're about to once we feel good with the artifacts we'll just start making the Python script. Dude, yours just doesn't want to stop. 

No, don't stop it. 

Let it cook. Alright, so I'm going to just copy mine in. So where are we at now? Ah, yeah. See, so here's an example. See, it says your public IP because I forgot to tell it what my public IP was. 

So I'll just make sure I'll add it in on my cycle. It's no big deal. Yeah, right here, your public IP. See, that's what I mean. Like, that's what I was trying to preempt, and I just forgot to give it one detail, but it's not. It hallucinated technically, because it's not the actual correct thing. 

It's technically, I would classify that as a hallucination and say it was just missing the data, then the actual data point, because it couldn't possibly know what my fucking public IP was. No big deal. Yeah, same thing with any hallucination. It's all the same. Okay, so jqrbot, ready to... So check this out This is on the next edition to the next another change that I added between the version that you had in this one Which is if you mouse over right here on the plus It'll give you it'll actually tell you what that what's missing to stopping you from going to the next cycle Versus you just having a fucking guess which it says it's a cycle title is required So you just need to update this so more documentation there we go fine now I can click the button now I can make a new cycle. 

I'm gonna go ahead and just save cycle history at this point, just in case I don't. to lose my shit. I'm gonna save it as cycle to start because I You can yeah, so you can parse on parse. It's no big deal any time So what are you what are you trying to do though? All right, you want to make it? Okay. 

All right So you need to make it because you this cycle is complete. You now need to make a new cycle So hover over the plus button because it's a interesting Interesting that it doesn't say what it's supposed to say. Yeah edit that right in there Yep, right in there, and then now you're good. I don't know why yours doesn't get the tooltip. That's frustrating to me. Okay, that's what you needed to do. 

Now down there, yes, this is the site. See, that's this process. Yep, but after you post those in, save your process, progress, because I just tried to fix the data loss in the cycles where it may not have been successful. I think I was. My test was successful, but shit, didn't hit the fan. So just save your progress. 

Just like an old video game. 

Sorry, it's not autosave. It is autosave, but it might break. You don't want to lose. It's not the end of the world. You can literally start from anywhere because your project is the context. So you can actually restart a brand new cycle at any time. 

Don't feel like you're locked in. 

But you shouldn't lose data, so I'm working on it. yeah once you got your space today it's really it's rinse and repeat read through this one and this see this one is probably now now we're gonna ship so the first time we were more focused on reviewing the project plan now this time the plan has been aligned now we're more work I'm gonna review for any action items that we may need to take such as preliminary setup Like this thing has been pre -trained, has been fine -tuned to tell you what you need to do to get the development environment set up, like install Python. It should, if everything is working correctly, there should be an artifact that you have that has instructions based off of your project's architecture, which is Python, to install Python. 

So that's going to be sort of the process now, is go ahead and just go with the largest one. 

kind of review it. Go ahead and review the ones that we have changed. So start there. 

Start with like that project analysis file, the reverse engineering file. 

Read that one, because that should be now further aligned with your mental project, right? Click it again. So when it's highlighted, it's on. 

It's persistent. 

Yep, yep. No, not yet. I did talk about that first, but let's But then after talking about it, I decided it's still best, let's review the work that we've just done. which is to alter the, see what I'm saying, the analysis? Do you get what I'm saying? Let me say it one more time. 

Let me say it in a different way. We just described all the differences that we have with our project in our mind with what the AI told us it has in its mind. Now we want to read those, we want to see the results of that. We want to make sure that it's not talking about multi -tenant, It's not talking about like, you know, subscription shit. And maybe it has more, you know, see what I'm saying? So yes, yeah, the alignment happened, basically. 

So I'm gonna do the same thing. I got my four parts in. Okay, that, yeah, that can happen, and it's, I'm getting it as well, so we'll fix it together. It's, that was another thing I was working on, was trying to make that more robust. So the way we'll fix that is, We're just going to unparse. So I can see I got a parsing error in three out of four. 

That's fine. I'll show you how to fix all four. 

So just take one of them, unparse, and then take that, cut it out so you can see that it's removed, and then put it into a notepad. 

And we're going to look at it to find the parsing error, which it should be just right here, basically, at the bottom of the, because I've already fixed this once. It's going to be the closing tag of the file path. So we're going to go down. This is the best way to do it. I'm just going to Control -F File Path. And then if I go to the next one, Let me get my find over so you can see what I'm doing. 

I'm just gonna do a control F for that string file path. and then just find next if I see this right here. That's what I just changed because I'm making this parsing more robust. My parser and the regular it's both based off slash file but that's too universal. So I have changed it. You can see it says it's what it's expecting when you click parse all. 

It says it's expecting file artifact not just file. See that? So what we're going to do is now that we've seen that, we're just going to use replace to solve it. We're going to replace the open bracket slash file close with file underscore artifact. See? So just adding an underscore artifact. 

And you're going to fix the parsing. 

So I'm going to hit replace all, and it's going to tell me replace all eight occurrences were replaced in entire file. All right? I'm going to copy my file, cut it out, and put it back in my response. Boom. And voila, we have our A files now detected as opposed to zero. Minor inconvenience, apologies. 

I'm working on it. Yep. No, but it's okay. It's learning for you. It's important to see the back end as well. So that when it does break, you know how to fix it and move forward. 

Yes. I'll do it again. Do you want me to do it one more time? Because I have two more. Okay. Okay. 

So in the app analysis, that might be okay. Is there another artifact that describes your project? Do you see the difference? Like a project vision and goal artifact? Read that one and see if that mentions any bullshit about multi -tenancy. Because that's what, yeah, I'm going to fix my other parses. 

So that's a fair question. And basically a lot of things boil down. A lot of those considerations boil down to one thing. And that is the LLM that you're using. What is its context window compared to the size of the document that you need to work with or document slash knowledge base. If your knowledge base is terabytes, then you have to do some sort of, there is no context window who can fit all that. 

You have to do some sort of retrieval augmented generation of some kind. And then this one that we're going to do is like the most cookie cutter, best one, easiest for all like use cases. And then so if it's a small document, then it's, you would just have to do append it, just like you would append, you know, like I quote, appended manually the app demo. You remember when we did that in the initialization? 

Because it's 16 ,000 tokens and we've got a million to go with. 

So I just dropped the whole fucking thing in, subscription functions and all, see? Yeah, that's okay. So you can follow that train of thought because you're confirming alignment. Let's follow that. So then the thought is it must say something at this point about using the local LLM because you've said it. So is there another artifact that speaks to LLM integration at all? 

Yes, I have one. I do have a LLM integration guide. 

Did you end up with one? 

What's your next response have? Response three or the second? Yeah, that one. Does that one have one? What about the next one? That's kind of what we want specifically LLM integration guide because I do have that. 

Mine decided to make an LLM integration guide for me because I said I had a local LLM. Okay, then that'll be something you scold the model for because you gave it the fucking screenshot of the fucking LLM studio and the fucker threw it away. So you're going to be grumpy. You're going to be grumpy with your AI for a minute. You're going to critique the model. Yeah, yeah. 

What about your roommate? Did he get an LLM integration guide? That's it, there you go. So, yeah, no, same, literally same thing. Different names of Sasquatch, playing guide, roadmap, who cares, as long as it has spoken to that for you, that's C. And I also got a reverse proxy guide, look at that. I have a reverse proxy guide, so I won't need Instructions for configuring a home router, AT &T, for port forwarding to expose a local development server to the internet. 

Replacing the need for NGROK. Bada bing, I just saved 10 bucks a month. 

You will just be, so, okay, so there's a couple, so can you click the back button and go back to your cycle one and read out loud the section that you have spoken about your LLM, your local LLM? 

I'll be using a local LLM and then put that in quotes. The name of the model that you just read out. 

So put what I just said in front of that model name. 

So I will be using a local model, and then put the model name in quotes. And then say, running on the same server as the Slack bot. And then click Generate Prompt. Actually, first, don't do that. Close your current prompt file. I see it's been edited. 

You see that third file you have open? Yeah, close that and then say no or whatever. Yeah, who cares? It gets auto -generated. Now go, now, now, wait a minute. Yeah, click generate prompt. 

That new sentence you just wrote is in there, right? Good, okay, I'm just fucking paranoid, data loss. Okay, click generate prompt. All right, now, can you just control F, cycle one, just make sure that new string you just added is in there. There we go, cool. Now, copy and paste and send it again. 

See, you see? What we just did, I use this analogy of a Japanese letter. 

Imagine a single page, and on that page is just a single large Japanese letter. 

The way the Japanese characters work is a single long letter. difference on that Japanese character can completely change the meaning of that character. All right? And so too is what we just did. You see, you just sent a prompt, and you've got a response, and you analyze that prompt, and you saw something was missing. You just edited one of those lines. 

You just added a little dash or something to the Japanese character. 

And you're going to completely change the meaning. 

It's my theory. 

Don't delete the pictures. The pictures are helpful. 

That's okay. 

As long as they're in one of them, you can easily copy them back. Was that the fourth one? 

Okay. 

Yeah, they're easy screenshots, but I've done that before. But you can just click on it. If it still exists in one of your windows, you can just click on it and easily copy it. Google Studio is pretty good at that. Yeah. Those are easy ones. 

If this works, though, dude, that's like exact, see how little, I tried to be very minimal in the change to illustrate, to be as illustrative as possible in this little example. Because I've done this a couple times. It should work just fine. And I should have been able to narrow it, I should have been detect, I should have, hopefully, this is testing my spidey senses, my LO and spidey senses, if I'm able to detect specifically the tiny missing piece, and what size is this? 

Yeah, essentially, yeah. 

I mean, it's all hit or miss. If you were to run eight, you might have gotten it as well. You see what I'm saying? No, that's fine. That's just an automatic thing that appears because it detected you have a URL, but it does not know your intent. And your intent at this moment is not to get the LLM to go get a web crawl on any URL that you're passing it, so you don't care. 

I'm going to go run to the restroom. Be right back. Send those off and see if the results fit. See if you can get them all in there. I know that's right. Dude, the other cats weren't even nearby when he bit me. 

He's just nervous with them around. Okay, I'm back. Parse her. Yeah, unparse and then just rip out whatever you had in there. No, no, go back. because basically you're unhappy with the results here. 

Here, right? Hold on. No, no, no, no. No, no, I'm wrong. I'm wrong. You should be doing this in Cycle 2 because you sent Cycle 1, and then you didn't, and then you put it in Cycle 2, and you did not like what you got, and so you resend Cycle 1, and now you're updating the Cycle 2 responses again. 

It's hard to sometimes do that. do, for real. I've sat here for five minutes once trying to figure out what step, what part of the process, and it's my own tool. So don't feel bad. I do the same. If you have two monitors also, it does help. 

Sparse, and then we'll see if it has any parsing errors. 

Fingers crossed, LLM integration guide. 

Cool, see? 

See, do you see? 

So you just weren't specific that the model you're using is local. Do you see? The moment it got that, it knew to give you a local LLM integration guide. You see? So, that's a good lesson right there. Okay, cool. 

Tiny little tweak. Tiny, tiny, tiny little tweak. Okay, just, so I'm gonna just, we're basically in the same spot. I'm going to, I'm looking at something. two. I've got my responses in my longest one is 8100 tokens. 

What are y 'all at? Just curious. Okay, then just send it off or So I'm going to select this response the longest one it highlights a baseline I'm gonna click baseline. I see it just doesn't commit everything just changes color and then select all so yep Nice dude, and the time is worth it now to not have to do this later. Okay, set selected, and then now I got the new files and then the updated files. I am a little curious about one thing though, let me see. 

Okay, I think it's fine. I see that the A0 is coming up here, whereas over here the A14, but I won't argue with whatever gaming convention it's going with. I'll just let the bot do the bot. I'll let the AI do the AI, to be honest. Until I see there's an issue, but I don't see an issue currently with this, even though they're different. I would prefer it to be the same, but it doesn't, it doesn't you know, bother me, technically. 

So, okay. Now, let's, that's, now it's the second part of what I suggested, which is now we're going to actually look for the action items that we, we actually might need to take at this point to get our development environment ready, because all we want to do now is actually ask the AI to make our program now. So, we got to figure out what we need to do to get our environment ready so that we can make our program. So, source code, the analysis, the integration guide, that'll probably be one we read, but I want to see if there's a more broad starting point, the reverse proxy guide. The development and testing guide, probably that one. 

Yeah, see, prerequisites, LM Studio. See, that's the more, that's kind of the content that I'm looking for. And then the implementation roadmap. Yeah, and I don't see any duplicates. So it's not like I see two project visions or two scaffolding plans. So everything's fine. 

What is the roadmap? So step one, foundational setup, core bot logic. So set up initial file and directory structure. See, we're not there yet. So that's what, so we're not at this file yet. So this is, it's probably the development guide we're after. 

It's not the roadmap, because the roadmap is one step ahead. GitHub repository setup guide. We're pretty much good there, because that's basically just getting Git in it. So we're already good there, and we don't need to push right now. So A14, we're good. Then this is that one that you just brought up and said it's nicely aligned, Project Vision. 

And then now, ah, so here, technology stack. 

This is a good one to review, because that's what we have to make sure we have. 

Python, Flasks, Slackbolt. 

We'll just install all those things, libraries or whatever. OpenAI, client libraries, interact with global own, yeah that's fine, no problems there, yeah yeah yeah. Yep, so I think then it is the development and testing guide that is where we need to start after reviewing everything So then we have the prerequisites LM studio for forwarding. Ah, check that beautiful beautiful This is exactly perfect for me This is what mine says mine says prerequisites go see artifact 4 and go see artifact 5. Do you see that? Perfect, bro. 

Perfect. Exactly. So it's step -by -step, bro We just made our own tutorial to make our own fucking thing, dude. So uh set four uh so artifact four is my first step um yes i and actually i already did message it it's already talking squawking um so we can just review this because it's largely done um this guy provides necessary information to connect om studio basic screenshot om studio is running with these configurations you see aha this exposes several blah we'll be making the environment variable yes and it'll be filled with that stuff yes so that's good that's good uh it's got all this stuff We will use the official OpenAI Python library to interact with the L1Studio server. Sounds great. He's just planning. 

Then, no actions. By following this guide, the bot will be directed. So, great. Perfect. Nothing we need to do. Now, this one we probably will need to do some forwarding. 

So, the next artifact on the list for us to do, allow Slack server to send events like mentions to your local development machine. your machine must be accessible from the public internet. Instead of using a third -party service like ngrok, you can configure your home router to forward incoming traffic on a specific port to your development machine. This process is called port forwarding. This guide provides several general steps provided on the screenshot based on your AT &T router. So, this is where we diverge. 

You will do your own port forwarding. I will do my own. If your instructions deviate from what you see on your screen, that becomes your cycle. That becomes your criticism. Hey, your instruction in Artifact X does not match what I see on my screenshot Y. Update Artifact X based on this feedback. 

This is what I see, blah, blah, blah. What do I do? What's the right step? I got to step three. 

Yeah, okay. 

Only one of you need, So, good question. So at this point, you could both do it. All you would need to do is each have a separate port. So one of you change yours to 5001, and then you can just basically both get in the router, make your own four forwarding rules, and life is good. Then just change your, then in your site, okay, so 3000, and which is trying to use 3000? So all you need, all you need to do Toot, the only reason I'm pausing is because I'm just trying to decide which answer I want to tell you. 

I'll just tell you both. All you've got to do is update all of the, you just need to use a different port for this project. And in order to do that, there's the two ways I mentioned. Either you can just manually do a control F, find replace in your repo, and then no one knows the wiser. So for example, how is it written? It's written in tilde 3000 tilde, right? 

Okay, but you see where I'm going though? Because this is a thing you'll run into. It doesn't matter, right? You'll run into it. And then once you just realize, oh, if I just change all the mentions from the 3000 to 3001 or 3007, something, then the AI will just, wouldn't even know it was ever a problem. Or you can just tell it in a cycle. 

Hey, I got, that port is already in use. Update our documentation to just use this port instead. Either way solves the problem. You make the change, it makes the change. You see? Yes. 

So yes, so yes. depending on how, if the problem is something, how long does it take? There's a million ways to skin a cat, I wanna go with the least time consuming, easiest for me, consume my cognitive bandwidth, I don't have to, you know, yeah, yeah, yeah, yeah, yeah. So just making a choice and going with it depending on the problem I'm facing, yep. And the goal though is to do as few of the changes manually yourself as possible, because you want to have, you want to wield this tool like a, fucking fountain pen and you want to make beautiful calligraphy all right with it not you right so every time you you make a manual change it you could have learned probably learned a lesson if you try to find a way to articulate it to get the AI to make the change see what I'm saying yeah yeah I'm gonna do the same thing and I highlight as I read so I don't lose my spot remember like my finger trick with you Oh yeah, we will need to know our public, so whatismyip . 

com will need to be visited. No, because messing with 443 can be tricky because 443 is HTTP as traffic and there's really no, every router's rules are different the way it's programmed and like for example, I've been able to get one house to forward it correctly and not another house when I did it, every single device on the network no longer had internet access. because I sent all 443 to my computer. So what we might do, this might be even more fun, is you can do your own encryption, by the way. So we'll get there later, though. We'll solve that problem when we get there. 

Don't worry about that. So for now, leave it at 3 ,000 or whatever. So here's the plan, and then we'll get this finished. We're going to get this running. 

The plan is we're done once we get this running. version of Python running your scripts because then you can Well, technically there's also getting it set up in the slack workspace, but we probably won't do that We'll just get a slack slot running and then the goal is to be but the goal is to be 

iterate. 

That's why I'm hesitating, so that you can iterate. 

Once you've set up, and then once you have set up, then you're in iteration mode. You're actually working on your scripts. Hey, it doesn't do it this way. 

It needs to do it this way. 

Or here's the error I get, blah, blah, blah. So we're trying to get to that state. The goal is if we can get to that state today, otherwise we'll get almost there. 

And then the other half of it is actually getting your bot, your app set up with Slack proper. 

Slack has to know about your bot a little bit, so you have to go set some things up in Slack, and then you have the two connected, and then you can start iterating on your bot. So hopefully, we'll get all of it done, but we'll see. My wife is getting a little hungry. Oh, check this out. 

In my instructions at the bottom, it actually has the Slack instructions that I was just talking about. Does yours as well have, like go to api . 

slack . com? Cool. See how far, see how well that works and see if you're able. You may need to, This may be right where the instructions write down because what I'm reading is some very basic steps and you might need more detail than that. which will be where you ask for it maybe okay so but good it's already it's already got that notion in the instructions already i was thinking that'd be a problem or a missing piece yeah no problem go ahead and just create a new workspace that'll be your own personal workspace and yeah and then whenever yeah yes you should name it your jqr bot or whatever let's use 5000 okay 

create an app. So that I think you can just do from scratch. But that case, just just case in point, if I wasn't here, this would be exactly what you could do a cycle on, right? 

Like, what do I do here? 

And why? 

Yeah, no problem. 

Yeah, you can have both of your apps in the same slack in each program. It doesn't matter. But yeah, just as long as you can both administer, get the administration access. And, and, and For example, if this were just me doing this my own project, all by myself, in my own time, as if I were just playing a video game, I would sit here, right where it says, I click new app, and it says name app and choose workspace, app name. Since the AI didn't give me an app name, I'm gonna come back to the AI and say, hey, give me an app name, because it gets codified, it gets in the artifact, it becomes part of my project, and it's not me just adding an app name, and then now the AI doesn't know what app name I added, see? So that's my game, I made it a game, We have perfect documentation. 

Every time I see a piece that's going to be missing, I just make sure it's in my process. right? All right, so right here, so right there. So leave your screen right there because the first thing that should trigger in your mind is should be like IDs and values and shit that we need to capture. You see what I'm saying? App ID, client ID, client secret, signing secret, all this shit, verification token. 

We're gonna need to make sure we have them done correctly. So yeah, when your buddy is also got his sort of ID, created in the Slack API, and he's looking at his basic information. We'll move forward. Yeah. Oh, so, okay, you want to do that? Do you want to do that with me? 

Do you want to do that? Well, so you can, I just named a JQR bot and we'll capture that. Since it's just one, we'll go ahead and capture it when we get there. How did you call yours? Cameron, how did you call yours? And then JQ, let's not overcomplicate it. 

The only thing I want to be considerate of is being able to tell, so are you adding both of your bots to the same Slack workspace? Then just, let's just make sure that both of your bot names are distinguishable. That's the only thing, just, you know, name one of your bots. Yeah, there you go. Something, maybe like, yeah. anything that works. 

Okay. So, okay, good. Okay. So I'm getting ideas. Okay, cool. I'm getting ideas. 

I feel like I'm getting data loss here. Hold on. Test. Yeah, see, I am. I got my, my, I got a bug. My shit's bugged. 

All I do is, um, when I create the new cycle and then I write, you know, anything in my cycle two, I'm putting information here. 

And then when I switch to another tab and then go back, I'm at cycle one again. So I'm going to, I'm going to pop this out. Yeah. That's the. That's the bug that I've been trying to fix. I'm going to right -click and move to a new window. 

And I'm going to put it on my other screen. Is that really the solution right now? Test. Yeah. Now I can tab around and not lose data. That's what I suggest you do. 

Just pop it out. But that's a problem I'm working on. I thought I'd narrow it down. I don't know why it's happening. But I'll have to fix it. That's on me. 

That's where my project currently is at. Second mistake. You have the updated files? Yeah, okay. Yeah, yeah. Well, hold on. 

Did you add them yet? They're in your project? First of all, if you hadn't, they should be also in your AI studio still? And so, yeah, I'm working on it. So you have the files, so it's okay. What we can do, so you can do this, all right? 

You can do, watch my screen. Okay, so the prompt file, cycle, this is what I've been doing. As I've been trying to fix the problem, since it is a problem, I've just been adding my cycles manually, but I've been letting the tool do the flatten repo, and you'll get to see the difference here. So what that means is I've been manually writing my own cycles in my prompt, like this, so cycle two, and then cycle two. The part that I'm letting the AI do for me is the flatten context, so I just click flatten context. 

Actually, let me do one more thing as well. take the prompt file out of the prompt md and put it in a file in the same directory to keep it safe from the script because my extension will modify prompt md but if i make a new file and then call it a manual prompt md and i copy my prompt file in there i can safely do the manual and not lose my data until i can get this shit fixed for you guys what is this what is this including um get not get stuff i'm picking up stuff my that could be a problem as well it's getting okay let me see if i can fix that with just a click of a button uncheck everything so i have nothing and then i just fix it my source, and flatten. Yep, that worked. Okay, so, okay. What's going on, let me show you. 

There's a hidden . git file in here, in your jqrbot folder that you can't see. And if you open up this flattened repo file, it should be in the same directory as your prompt file. That is the file that's getting appended to the prompt file. See, it's a two -stage process. My script flattens your repo, and it manages your cycles. 

So it does two things. And so the flattened repo works fine, but the managing of the cycles is a little wonky. So you're going to do your own cycle management manually, and you just literally saw me make a cycle two. You just write whatever you want to write in there instead of the little cycle box, okay? And then all you do, instead of clicking generate prompts, you click flatten context, you see? And then what you do, at that point you have this. 

So do you have the git problem though? Have you opened your flattened context? Let me walk you through it as well. I'm trying to get my Discord to see your screen. 

There we go. 

Can't find the right button to find your screen. 

There we go. 

Okay, okay. So do you see, okay. Yeah, I can see . git. So do you see the top 10 list there? Do 

Do you see the git files? 

Do you see that? 

What is that, git shit up there? All that nastiness? 

Okay, see, so it's a little bug. 

I'll fix that. That'll just be a cycle. I need to tell the AI that, hey, you're picking up the . git files and you shouldn't be. 

So all you need to do to fix that is check, find the root directory in your, over on the left, see all the check boxes? 

Uncheck them all. So basically uncheck the parent. There you go. Now just check the source folder. There you go. That should have solved it. 

You see what I mean? Because your get is in there and now it's not selected. Now click down at the bottom, flatten. Oh, great. You have that. Click it. 

Turn that on. That's good. Good catch. Now, I know it looks the same because you can't see it. Go ahead and click flatten. Oh, they're still there. 

Okay. What you don't want, I guess, is that check on the top one. You see that? Okay. So let's do it. Yeah. 

So do it this way. Uncheck it again. I know how to do it. Do the sort. No, don't do that. Don't do that. 

Don't do that. Do the sort. Source, and then just do the Prisma schema file itself, not the folder. Damn it, okay. Add a new, right, so stupid what we're gonna do. Add a new folder and just make it empty and just fucking don't check it, you see what I'm saying? 

In that folder. That's fine, you'll get one eventually. Yeah, and you'll get it. It'll have to make it when it's time. Yeah, that's easy too, do that. Just name a test. 

Just make a new folder called test in the same directory as source. And then don't select this one. 

Refresh. 

Make sure it's there. Yeah. Try again. Your selection. Select Prisma and folder and select the source folder. Damn it. 

What is it? All right. I don't know why it's doing that. What folder? What's your top folder name up there? And then isn't your... 

It is. All right. Just click generate and see what happens. Yeah. Thank you. Yes. 

Dude, me either. So I will take these as action items to clean that shit up. That's so frustrating. And then let me write it down first. The flattened context is picking up the get. Can you copy your top 10 list and just send it to this so I can get it? 

Yeah, it's the git directory, is what I should refer to it as. . git directory, and it shouldn't. Okay, so I'm gonna fix this one here, and because I believe this one I can fix quickly, but the other one I cannot fix quickly. If I can fix this one quickly, then I can just give you an updated extension and life is good. And then you can just do the manual process, which is what you're about to witness me do. 

So I can do two birds with one stone. So I've already created the manual prompt markdown file which is just a file that I copied the prompt file in so that My script won't change it on me if I'm clicking buttons and shit because it's a disconnected file in here I saw that it had that stupid shit just wasted stuff down here So I just flattened and it got out for me because of my chip because my thing is a dash I don't know maybe it's it's weird mine is a dash. That's the root problem because it does it all for you and then it's it picks up all into the jqr bot so i need to copy this i need to remake that prompt file the way i'll do that is i'll flatten i see that i don't have my git directory in here so this is where you need to pay attention because this is the different part so i'm going to copy that's not what's different in my manual prompt i need to find where the flatten repo starts. So like at the bottom of my cycles, this is the manual thing, I have to manually input the flattened repo. So going to the bottom of the cycles, it's M6, so I'm just gonna do a control slash and M6, there it is right there. 

Bracket slash M6 takes me right to the bottom. And right here I have M7 flattened repo. I'm gonna double check over here, see it starts with the green, Bracket bang dash dash copy all that green bracket dash dash. So it's right under the app In the tag the way I'm gonna make this easy for myself from here on out is I'm gonna add ASDF right here so that all I got to do is control F ASDF and I'll go right here ASDF and I'm ready to Select everything also since it's the the last file on the list I can just select everything below it and I'll show you how to do that and control F type ASDF It gets me right here. I select everything below M7 and I hold ctrl shift and press the end button to do it. And that selects everything to the very bottom and I press delete because there is no bottom tag. 

The bottom tag is missing. So before I paste I'm actually just I'm gonna have to use my I'm gonna have to use my clipboard. So I'm gonna copy this because I need my closing tag. It's missing. Put that there and then that's that. So my flattened repo is in here. 

Go back to my flattened repo. Actually copy it. 

Actually, no, I'm missing another closing tag. 

Look at this, I'm missing another closing tag. I just remembered. I'm gonna go to the very top. I have the prompt MD itself. So I'm gonna get that, close that. This is all done manually, but the git fucked up all my shit, or else this would be clean. 

Okay, and then copy this in manually. 

So that's the manual. So I got myself ready. This is what the bottom of yours should look like. Very simple before I post in the entire repo. See, so it's the end of cycle zero. It's the end of the cycles. 

main artifact m6 is just main artifact 6 and then I put my little asdf tag so I can just jump to this location quickly and then the start of the m7 flattened repo the end of the m7 flattened repo the end of the prompt now I just rinse and repeat every time I update flatten instead of clicking generate prompt I click flatten context there we go I just pasted it there so that I'm sorry that's good you're gonna you you're gonna the flattened context works great that part is a hell of a nightmare for my extension to do for you. I'm working on the cycle stuff. Once that works, it'll be even nicer. So now that I've done that, I've pasted in my current project. So it's good. All I have to do is write my cycle. 

You see? 

All I have to do is write my cycle. 

So I'm just gonna go cycle two. 

Oh, also my cycle overview, which is just what the title is. So whatever you write in your title is what gets put here. So you just put your, you know, it doesn't really matter. matter what the title is. It could just be new cycle literally. What matters mostly is that it says current cycle 2. 

Not that it's the end of the world, 80 % of the time the AI will detect cycle 2 is the current cycle, but sometimes if you don't update this, it'll still try to solve your cycle 1, even though you do have a cycle 2 down here. And then again, the only, not again, I've never said this, the only reason why this is even here is because over time, as I discovered, as my problems got larger and larger, The AI would lose what cycle it was supposed to be on. And I found that the solution was to just have this sort of what's the current cycle at the top. And then it never got confused anymore. Solved the problem. But that's what I have to do. 

So I've made a current cycle 2. And what was the problem? What was I going to do? Continue in project setup, which is setup development. Dev environment setup. Something broad. 

That's what we're doing. That's what we're focused on. And now I can go to cycle 2. Cycle 2. See? So a lot of, I tried to go slow and show you everything and talk everything, but that's, it's really straightforward. 

You just update the cycle at the top. There's three things, a cycle overview at the top, the cycle itself, and then updating the flattened repo. 

No, we're doing this now because the parallel copilot will lose your cycles. 

You, you, you don't seem affected. That's why I see this as the fucking problem. So click the back arrow right there, yep. Now click the forward arrow. Now click, type something in down there. Click, type something right there. 

Now click out of there just to make sure, like, just click out of that. Yep. Now don't, don't, nope. Now go change your tab to, like, your flattened recon. Yeah. And now change back. 

See, you're not affected. If I do that, I lose my cycle. 

You see what this is the problem. 

This is, I can't, I'm trying to figure it out. Okay. I'm trying to, it works sometimes. It works when I'm looking, you know, so I'm working on it. It's just, this is part of the, part for the course. Um, yep, this is the development process and this is more on that. 

So, but yeah, so you're not affected, but if you do get affected, you have a, you have a, you're not, you're not up Schitt's Creek. I just showed you a, uh, band -aid. I understand. Always. I understand completely. And, um, you're not affected by it. 

Um, but, um, if you're at this point, you know, I think I'm going to call it and let, let, you know, take care of my, my wife. but You're not affected your friend is The only thing you really need to do is everything I've sort of already articulated But if you don't want to go forward without me, you don't have to we can just do another tomorrow afternoon After work, you know, whatever time works for you. We can just sort of pick off I will be trying to fix the problems that I have encountered so that you know Maybe we don't even have an issue by the time we get started next time right because I've you know I have all this evening to try to fix these two problems. Maybe I'll fix one. We'll see. Your next step will be to, you got, no, you got the reverse proxy. 

You got the reverse proxy for forwarding. You got the Slack bot set up, just the initial, but there's still going to be more that you need to do in the Slack API. You're going to need to, and then the AI, so like, you're just going to need to ask, what more do I need to do? Ah, let me say it this way. Let me take back everything I said, because this is the rinse and repeat answer. You explain to the AI what you've done since. 

the cycle started, so you've set up, okay, I've gone through artifact four or whatever, I've set up the reverse proxy stuff, I didn't have any issues, I got it all done. Next thing I did, oh, and mention your public IP, give me your public IP in that section. So say, put a number one and then put a dot, and then say, I got the port forwarding in my Verizon router done, and then number two, or no, wasn't that on the same instruction? I believe so, let's leave it at number one. I believe that was in the same artifact, so let's not break that up. And then say I also created the Slack app at api . 

slack . com. So it's like a personal journal, except it actually means something. Essentially, yeah. But the only way that what is the next step really works well is if you truly capture your current state. Because it genuinely, it will. 

It will give you more steps. Yeah. But it genuinely doesn't know what you have or haven't done. So that's where you need to be specific. And so that's why it helps to take a screenshot of that where I said that's where we're gonna stop because that's a perfect spot. You don't necessarily have to show the secrets. 

This is part of the fun time. Exercise, how are you going to handle your environment variables? Are you going to send them in AI Studio? It's not the end of the world, but you don't necessarily wanna do that, do you? come up with a solution where you can communicate with the AI, the environment file, without giving it your environment variables, the way I did that. 

In fact, I have a artifact. 

If you want to do a little homework, let me find the actual artifact and point you at it. I have a template artifact, T11, let me just read through these, oh, find it, env . local, env . local, yes. So, yes. So, review, T16, it exists in your prompt file. 

It's part of the, yeah, go to your main prompt. Do a control F for T16 dot. Actually, no, even better. I'll get you even closer. Do a search for dot env dot local. So, 

local. So, I actually concocted my own solution. See how it says step list part two with DAX secret values? So, what the AI needs to know are the keys, not the values of your environment variables. Does that make sense? So, if you manually create an environment local file, and then it's presuming you've already got your environments variable set up with your actual environment variables, and then you copy your environment into your local, and then you just actually replace every value with the word redacted. 

And then you uncheck your environment, and you check your environment local. Then you're sending the local to the AI in your AI Studio, because that's what the flattened context is going to pick up. It will not pick up your environment. And it's just on you to keep those two in sync. And then bada bing, bada boom, AI Studio will know every single key in your environment and will not know any of the passwords. And so when you're actually programming and it needs the value, it won't just put in a placeholder, it'll make you an actual script that you don't have to edit. 

Yeah, so just, there's your, yeah, yeah, that'll be part of, so yeah, you just go through, what do I do next? And you see, even that, this is in there, so I'm just preempting this in case the AI doesn't surface this to you, but because it's in here, it's mentioned, it's fine -tuned, It may very well suggest this for you, it may very well create the environment local for you, and then just expect you and say in the summary or whatever, the curator needs to do something. It may very well do that. 

Any other questions? 

Take a screenshot also. Go back to where you were writing your cycle. Read it out just because I can't read it. I'll take a screenshot of its initial configurations so that we can make an artifact and capture it. So that we can create an artifact and capture it. I'm just reviewing to see if there's any other important pages that we should take a screenshot. 

Because it knows what a basic setup is, but there are some unique variables, like your IDs and shit. It's been a minute since I've been in this admin panel, and they change shit all the time. See, like, this is new. 

Like, one -click access to your app's agent or assistant. 

I get it. I get it. I get it. Okay, okay, okay. So, okay, I know what this is and how you put this in. like, okay, so it's basically, if you turn this on, I imagine what it's gonna do is it's going to add like a little Gemini button, right? 

Like in VS Code, a little button, an AI copilot button. And then what you can do is you can program that button to route to your AI agent. You don't have to do this at all. You don't have to turn this on because we can program, we are gonna use slash commands. We're gonna do, We're going to do our trigger as a mention. But you can, you can. 

If you want, however multiple ways this is going to count, we're going to get it done soon. We're getting there. Not yet, but we're getting there. Did you see what I mean? That's all that is. They're just trying to make it easier for people, but we don't need their easy mode. 

We can literally code our own shit. 

But that is what they would do, and if you want to, you can. 

You would just take a screenshot of it and say, hey, how do I do this? 

Just like I did. This is probably going to be where you're going to spend some time. This incoming webhooks, because that's how it works, a simple way to post messages from external sources into Slack. That's what you're going to be doing. So, I'm just going to turn that on, yeah. So, go ahead and take a screenshot of that. 

So, before we do that, so in your thing, right, give me a brief. 

Yeah, so watch how we're going to do this. Go ahead and turn that on. We're going to take a screenshot and put in whatever you want to do first. We've just got to do two things. We've got to write in your cycles, and we've got to take a screenshot of this. I mean, we don't need to, but it's what we're going to do. 

It's nice to show the AI, I just think, because I just feel like it's a good thing. No, you can delete those. Yeah, no, they're gone. They're done. I had to figure all this shit out by myself, dude. I had never done any of this lack of administration. 

Like, that's a whole fucking job title, like being a Slack administrator, right? Get those four in there, and now let's go to the cycles, and we're just gonna mention this. We're just gonna like say, we're gonna say, this is what I mean, like we're gonna say it's certain, because there could be another way to do the thing. I don't wanna pigeonhole the AI, but I do wanna suggest. So, we're gonna say, are we going to post messages via webhooks? I've activated and configured 

webhooks, open parenthesis, cc, screenshot, close parenthesis. And then slash commands, but this will be mindless. There's no confusion there. But the webhooks is a bit of a, you can trip up there. So by mentioning it and asking a question on it, the AI will be primed to give you some instructions. Also this probably. 

Oh, no, no, no. Maybe, yeah, maybe this will be, because you see right here? You will need to configure redirect URLs in order to automatically generate the add Slack button or to distribute your app. You may or may not need to do this depending on how basic the setup is and the AI will help you out. So just, we can just know what that does. You may not need to, but this is where you will probably scopes. 

You'll have to do some scoping. So just add, go back to your Recycle and just ask are there any scopes I need to add, question mark. or scopes I need to add, and then or event subscriptions. These are like a mention. A mention is an event. That's what they call a mention, a direct message. 

Those are all events, so. I think that's it. Those are the only pieces of the puzzle. And then I believe in your script. That's what I was just about to say. So since I was looking at it, since the only value that's unique is the app name, if you just want to pass in your prompt, I have named the app tilde jqrbot tilde just so it knows, or you can take a screenshot. 

Either way, that is the key value that needs to be extracted. And then now let's go back to your Documentation and read more on that because so there's three things that we've done too. Number one was the reverse proxy. Number two is the slack app at slack at api . slack . com. 

Number three is your Python environment. So we also want to make progress on that as well. So get that document up and see what all you can get done through there to get to the point to where you would almost be ready to run your Python script had you had one, right? So let's read what it says. Like you might say, it's going to be like you set up your development environment, development environment setup guide. 

Yep. 

No, no, we just got through the two artifacts. Remember, that's what actually what we were reading, wasn't it? Remember that told us that would, yeah. Remember the prerequisites? Yep. That's what was at the top of the development and testing guide. 

So we've basically gotten through the two prerequisites. You've asked some questions on one of them, right? 

And then we're going to continue to see what we can do in step three or whatever your step, if it says step three for you. 

It says create a virtual environment. 

It's highly recommended to use Python virtual blah, blah, blah. 

So let's just try, I'm going to try that. I'm going to write exactly what it says. So for me, it says Python dash M V E N D V E N D. Actually, hold up. No, wait a minute. This is a bash script. Hold on. 

So yeah, yeah, go ahead. 

I will open bash. 

It looks like it's working. I'm getting files created. Yep. 

Go ahead and remove whatever the fuck it adds. 

Yeah. Stupid thing. Oh, hold on. That might be an easier way to do it. Just de -select everything. Oh, maybe your shit will work now. 

De -select everything at the top. 

Don't worry about that. Use your thing at the top. 

Just that one. 

No, de -select the parent. Oh, that might be easy. 

I didn't fix it. 

This is annoying. I've never done a Python with my tool. So it hasn't been cleaned manually, automatically. So, no, no, I think it's bugged a little bit. All you've got to do is check on my screen. You can click in here and do Control -A and select everything. 

I think it's just bugged. 

Yeah, hit Control -A, and then now click it to remove selected at the top of that window. 

Yep. Now, yeah. Now, when you, They were stuck. Even though you had to deselect them, it didn't really deselect them. 

Now just select sort. 

That might have been the problem as well, but that might have been your other problem as well. Yep, now you're clean. Just select sort for now. Your source folder. No, no, no, no, no, it didn't. A dash is not the same as a check. 

Now do your Prisma. That might trigger it. 

Good, great, good, good, good, good. 

Click flatten. 

I think you're good, right? I think your problem's fixed now. So you're in Gucci now, all your problems. See, that was it, see? It's fixed. It would have been fixed the first time if I would have been smart enough to remember to tell you to remove them from your selected before at the bottom. 

That was the trick. That's why your Git was still showing up, in my opinion. Okay, so minimize that. There's a button, it's collapse folders in view? Yes, get that shit out of there. Okay, so now we got, oh, there's more steps to do. 

So going back to our dev guide environment, we're gonna run the next one. 

Activate the virtual environment on Windows. 

Okay, so I am getting an error. on the second part of step one on activate the virtual environment. I'm on a Windows and I ran the vmd scripts activate and it says bash vmd scripts activate command not found so that's going to be my next cycle. One thing only and just that. Do you get an error? I think you're on what kind of computer are you on? 

You're not on Windows are you? Oh, okay. Yeah, I have Bash 2, but it's giving me grief. So I'll just say that. All right, so I gotta catch up to you. You've been writing more than I have. 

So, I got the reverse proxy set up. What file? Oh, you're actually looking in there, looking around like an actual developer? See, I can't, I... Yeah. Okay, okay. 

Oh, I see. So like that, basically, just change my... This is the first time I've used my extension for a Python project. and the bloat is real, got a flattened context bloat. Oh, that makes sense, actually, maybe. OK, it worked this time for me. 

Yeah, you were right, actually. I just didn't pay attention. It worked. It worked. So it's creating a, you don't necessarily want to just install your Python libraries on your laptop itself, because there can be many different projects that you're using or many different programs that require different libraries. 

And so to keep things simple, you're creating a virtual environment that then that gets those Python libraries. 

Yeah. So the requirement should be something that is just in your source root folder. It should appear. And the next thing is, well, Python is a choice. We could maybe also do JavaScript, you know what I mean? 

We don't need to stop just because it's adding a lot of files. 

Okay, just hang on until I get it working myself. Oh, it's backwards again. Well, hold on. Oh, okay. Looks like, yeah, something's wrong. Yep, okay, I'm getting the same error you're getting. 

So you're getting a cannot open requirements, no such file directory? Yep. So you and I both are going to just use this as a cycle. So just copy that. Make sure you're copying the command you're sending and then the response you're getting. And then that can go in your next cycle's ephemeral context. 

The ephemeral context is for troubleshooting logs, exactly this stuff. Stuff that's only relevant for the current cycle. That way you still record the logs that you've got, they still get saved, but moving forward, you won't always keep these logs in your context when you're actually on cycle 50. Yep. Well, you could even go, no, you could even go straight to, I'm trying to run this command, and then put the actual command in tildes, and then it knows, it'll know what step you're on, see? But I would still say, I'm on, I'm in, just to be clear, just so it's not having to go track things down, I would still say, in ArtifactX, on step two, I am trying to run this command, paste, and I am getting this error, paste. 

Pretty much, pretty much. Yep, fix, fix. What do? Ah, I'm gonna have to search. Yeah, no, don't say it. Because it does say no such file directory, and it knows where Python would be looking for it. 

Yeah, so my cycle three overview, I just said no requirements . txt. In my cycle three, if I can find it, I just wrote, in A7, I'm trying to run this command, pip install -r requirements . txt, but I'm getting the following, and then open bracket error, the error, close bracket error. That's my cycle three. And then close cycle three. 

What for? Yeah, that's correct. Well, hold on. You've already got some stuff written. So then that's what you're going to do. So then at the bottom, because you already talked about one and two, now you're going to talk about three. 

So go up to the bottom of your cycle and say, and then for getting my development environment set up, blah, blah, blah. Yeah. Oh, and did you put, hold on, did you put the error right there? Is that why I see it right there? Is that the error at the bottom? You want to put that error message in your ephemeral context section, right below it. 

You see in the text below? No, it's already formatted. 

It's already sort of, it'll be wrapped in ephemeral context tags. 

Correct. Nope, you don't have to do anything other than just put the error. It's just a place to put your errors. And the reason why, again, is because You only need this, that text for this cycle. Once you solve this problem, you never need that text again. But for auditing purposes, having the log there for future reference when you go back, my app needs to do that. 

So it needs to be this way. The error is in an open parenthesis C ephemeral context. You see how now you can make the association? To put a bow on it, you can just put in parenthesis C error in ephemeral context. Now that seems like a solid prompt. Let's highlight it, yeah? 

So, slow down. The parsing and unparsing is only for the responses. It doesn't matter what goes in the cycles above them. Yep, pretty much. And now to double check, if you would like, you can check in your prompt. You should see your cycle three. 

Knowing the prompt . ind. And then control F, cycle three. Close it, close that thing out. And you're on cycle three in your co -pilot panel, right? I can't, it looks like a three. 

Oh, nevermind, I'm just saying it looks like a three. And yeah, yeah, your cycle two is correct, right? Oh, let's add one more thing. 

I'm thinking along the lines of priming the AI to update our artifacts based off this. 

Nah, fuck it, you should be just fine. Go ahead and send that off. Yeah. But do you see how you can throw like so many things at it like that? Yeah, it used to be you could you literally could only solve one tiny ass little fucking problem at a time and you had to really break down your problems and like really hyper -focus on just that one problem. 

And if you tried to get a second problem, it would like lose its shit. Now you just fucking throw and fucking see what sticks, like the whole kitchen sink, you know? Great. That's exactly what I was expecting, honestly. 

Cause it creates a package JSON for you and that's how it works. 

So I guess it's just not primed to create it for you. You had to ask because I've never done a Python to prime it to, yeah, no big deal. But you're seeing the tediousness that happens. That's the tediousness that is real when you're building something scratch fresh new. You have to go to it. That's what I've learned. 

Literally, the AI won't do it unless you fucking write it. And so it can be tedious to find the thing that you need to write. And then that's kind of part of the part of the, you know, how the sausage is made. Once you figure out in your mind what it is that you need, you get it to make an artifact, ask for that like competitive. And it's knowing a thing is a thing like competitive analysis. 

knowing competitive analysis is a thing, and then thinking about asking the AI to do competitive analysis on other AI Slack bots. 

See how it can bring the thing to right to you if you know what to ask for? Yeah. So not yet. What you've done is you have generated the prompt and you've copied it and have you sent it to the AI? 

Sent it to AI Studio? 

Now you've got the responses back? 

Yes, you're ready to click new cycle. Yep, ready for new. responses yeah see what mine said I think I said my mouth yet actually yes yes that's right that that's right yep cool yeah just it's just aligning your documentation so that that shit is in there see what I'm saying yeah dude it is so much fun dude I'm glad you like it dude it's so much fun this should be what everyone is doing there should be nothing else in anyone's life but this my god dude Yeah, you're a bit ahead of me, so I have to catch up to you. You're good, you're good. And again, I need to cut, but we need to cut it, so we're gonna cut it in 12 minutes. 

Let's just end at the hour, okay? Yep, that's fine, dude. So look, look, what's gonna happen? Yes, it's fine, it's fine, because guess what? 

This is going to grow over time, and this is the equivalent of a package . 

json file. Do you know what that is? 

So a package . json file, Do you know what libraries are? So, like adding, yeah, importing a Python library, right? So, a library is someone else's code that they've written for you, essentially, that you can then just use their library so you don't have to write all, everything to talk to Slack, all right? So, this is the list of the libraries in use by your project. In other words, the requirements. 

And so, once you have the requirements text file and it's selected in your context, then the AI will know what, Packages are installed in your project and then when you say hey I need to do the PDF and then the project Requirement doesn't have pipe high PDF which is one of the required libraries. Then it'll add it to the requirements. It'll tell you to run your pip install, whatever, and then you'll add that new library to your environment, and you'll continue. That's the development cycle. Yes, yours will look a little different than his. 

That's okay. There's gonna be a little variance there, because your project is different. It's a different project, right? Yeah. Like two twins. Think of it like this. 

Two twins. When they're born, they're identical, but they have different life experiences, and so they actually are different. You know what I'm saying? Yeah. And the only reason it didn't create a 40 audit in the first time is because I didn't have a Python -specific mention. That's all. 

I've just been doing JavaScript, which is packaged. There's a package . json file that manages that. God, that's so annoying, dude. That's so annoying. Eventually, I'll fix that. 

Yep, yep, yep. Oh, here's another thing. So there's a couple ways. You can first even turn off the auto add at the top. Do you see the two double, the blue two check boxes? That's turned on by default. 

Yeah, whenever you're doing this PIP shit, you can turn that off and then this won't happen. And then whenever you're not doing this PIP install shit, you're just doing normal development and you're creating new files on the fly, you may want to turn it back on. Until I have my extension more intelligent and filters this shit out for you, okay? You're never selecting your library. You're never selecting the library. You're selecting your source. 

Select the source folder. Yeah, and you don't select your library. See, it knows what libraries you have from the requirements. It doesn't need to see the library. Make sure your requirements is checked. Yeah, that's important. 

And then, no, no, bad. Yeah, you don't. I blocked that. Bad, bad job. Don't, don't, don't, don't flatten the prompt. Stop it. 

Then your shit will grow so fast. Okay, we're at the hour, we're done. Okay, yeah, you're starting to get the swing. You're starting to see the problems that you have to overcome. But they're largely sort of the same, sort of the same problems. So it's kind of rinse and repeat. 

Seriously, it's fun. It's like playing with Legos. You just got to find the right piece. You got to find the right prompt. You got to remember the right buttons. No, we're done. 

No, I'm going to fix all the problems. Yeah. Is there anything else? Any other questions? I think we can pretty much. Yeah. 

Cool. Cool. So, uh, I think we're doing what do you guys think you're doing? Right? I we don't we didn't see anything run yet, but we're getting progress. Yeah. 

Okay. See you guys. I'll see y 'all tomorrow. Just a message. I'll be done at work at 4 p . m. 

Central. So 5 p . m. Your time anytime after that. I'm good. Just whatever whatever works for your schedules. 

Okay. All right. See you guys.


Transcribed with Cockatoo
