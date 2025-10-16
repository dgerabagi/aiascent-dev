Transcribed with Cockatoo


Yeah, let me.. . 

Yeah, Discord would be nice. 

It's more powerful. It's better. Yeah, go ahead. And then also here, and also kind of make sure that with... I want to make sure I don't go too far, like with a complicated repo. I think I'm kind of getting there. 

Okay, okay. That's already a good start. So yeah, so this is what I had so far. Artifacts, I ain't putting anything in there, but documentations. So I wanted to break out CUI documents, if we had any. Yep. 

So we know not to touch those or be careful in referencing that. Customer documentations, so what they provide us directly, whether that's training material, references, or whatever. Cyber reports, I can read it, but like in my training, I use a lot of like MITRE reports and stuff like that, like actual events to kind of, you know, associate the training with a real life, a real world event. DOD policies like I feel like these things right here like we can fill that up and that can just be in like everybody's repo like all the right, you know policies that are You know, for us and then... Exactly. Really quick, that's exactly what will come out of this. 

I just want to paint a little bit of the end goal so that helps you give you direction. That's precisely what's going to naturally come out of this. Ben is going to have three versions and then he's going to be able to see between three, well all three needed these documents. And then that's how you know to build the next piece of the puzzle. So yeah, so that's exactly. 

Um, and this is like, there's more of a generic project documents, um, you know, things that you've kind of create like, Oh, so different, different tasks maybe. 

Right. Cause eventually you may have different tasks as well in there. Cause I have assortment of stuff. Like I'll start like messing around. Like I, you know, I just put that in mind with, uh, um, No, this is good. This is exactly how you should do it. 

I have like, you know, these are all my random documents that I've like, I've taken existing ones and manipulated. And so like, they're not like the, you know, they might be adjusted, like word documents from stuff I got, you know, things like that. I call those like, I call those living documents. Yeah. 

Like working documents. 

Yeah. So that's the, yeah. So project documents, references. So this is also, I reference a lot of like open source, you know, stuff. Um, yeah. Anytime you need to pull something in, like, for example, a GitHub repo, you flatten it and you drop it into your references and then it's available for you to flip in or out of your context. 

That's where that would go. 

Yep. That's good. Um, and then this one's like official, like UKI documents that may be associated with, I don't know. Uh, well, I was thinking for this, uh, it might be like, um, like if we can take all of, uh, Sorry, I'm running on fumes today. No problem. If we convert some of the stuff like the tech writing stuff into documents, we could probably maybe put that in there or it could be under, I'll go into the next one. 

As we're getting stuff and putting them in, it'll make more sense and we can take away a folder or add a folder as we need it. 

Precisely, and you won't have to have a headache of managing the files list yet. Yeah. there's nothing going in here right now until we go. Alright, so I got frameworks. I want to get it all as much frameworks as possible, so if we could somehow import the whole like DCWF framework in here. Yeah, you see that could be actually part of our script. 

See, depending on what it is and how fresh of the data we need it, that could very well be, again, just more forward thinking. That's exactly what we could make a script to do is when you run the script, it'll actually go and do a web crawl and do pull something very specific from the internet that you know you need. You see what I'm saying? How powerful the on -the -fly tooling becomes. I never even I only use my on -the -fly tooling for my own little code repo, but that's next level to have it actually go and grab something from the internet to keep it fresh for your context. That's pretty crazy. 

But we could do that. Or I have to go to the public DCWF page. So all the frameworks are available online. It's just pulling it and then into whatever HTML format, whatever we need for it to make it readable. And then we have a couple of other frameworks. Removing the xx tokens. 

That's it. Everything can be very unstructured as long as you wrap it in an artifact. What are the The learning objectives is that going to be like a project specific list of learning objectives or what are the yeah? So yeah, so enabling learning objectives, so you know like if we're trying to do like a master So I didn't know when is this gonna be specifically project based so like ah good question so your repo will actually just be your actual Actually, this is what I realized sort of today, is it becomes sort of like your external brain. You will use the same repo over time. the context with it, because we'll have 2 million tokens to 10 million tokens to 20 million. 

So this little quote, this will become a very little repo at all things considered. And then this is your, this is literally what makes the AI better for you. When other people use AI, they're just asking us nine letter question. But when you're using AI, you have 900 ,000 tokens of this is who I am and what I usually effing do. Um, right. It's very different response. 

And so this is going to be grow. That's why I'm asking specifically about the learning objectives, because what we all, all we need to do is just add a task. So make a new folder. That's just tasks like a new main high level folder, because that's, what's going to happen. You're going to be flipping in between tasks, but much of your metadata may stay the same in between tasks. 

So having it, having a tasks folder. 

And then that's where automatically you make a new task, which is the current thing you're working on. And then all of a sudden, all your learning objectives have a place to go for that. Right. Yeah. So that's, yeah. Cause I was starting to think about that too. 

So this D I was thinking this will be more like, uh, well, I guess this would be, uh, we, you know, you can have like a master ELO that contains all of them for the, uh, like the project and here, but then I'm like, okay, well, how do we break that up? Like at a per module per lab basis? And I think that I'm trying to structure it. One, I got to figure out as we're using it, and you're showing me what's the best way to reference these things. But eventually, these all have to be broken down. So maybe the ELOs will have, under there, it would be based on, I'll have an NCDoc folder that has all the ELOs. 

And then within that, AI can reference separate tabs too, right? What do you mean by tab? Oh, that's a good question. I don't know because I flatten things. Actually, yeah, I know the answer. I know the answer. 

The answer is yes, I have done that before. Yes, it's worksheet aware. Yeah, when you drag in the Excel file, yeah. I guess I don't have, I think this is it right here. Yeah. So like we'd build a standard like template for ELOs. 

So like this is all NCDoc ELOs. So one good notion is the starting with a complete set, a complete set of data in whatever task it is. That should be the starting point and then from there you can extract out because then you know you have at least you have everything and then from there you can extract out. So what I see here are what it looks like are a bunch of complete data sets that you would then be needing to make refined lists out of. And so those would be more in your sort of metadata section of your repo because then you would that's when in your tasks Folder because your task your current task is for your NC doc And then so that's where naturally that way you don't have like 20 NC doc folders You just have the one NC doc folder, which is your task and then you have your you have your full data set This would be more of like a master. You could do that. 

Yes, exactly and then in within your tasks you have the task specific version of it. Where would you, where would you bet the tasks then? Within like the folder? 

Actually, the task should be a total folder with its own level from the beginning. 

That's actually how important it is. It's own tasks. So right in the, so right up there at the top, click the new folder. Yes. Tasks. 

And then in there will be your first task, which is your NC DOC project. 

Task and project can be the same thing basically in our minds. 

A task is a project. 

I use them interchangeably. Oh, okay. And then now there you're learning. Now hold on, hold on, hold on. Click and drag. That's fine. 

Click. You can now click and hold on learning objectives. 

with the folder and then drag it into, if you want to, drag it in. 

No, hold on, I think you got, oh, that's the right one? I'm sorry, I meant learning. I don't know, it's up to you. You know the right folder structure. Yeah, yeah, yeah. Oh, you're talking about like copy and pasting. 

No, you can actually move it that easily. Oh, the whole file structure? If that is, I'm just letting you know. I'm just giving you, yeah, just some of the driver's seat. Okay. Yeah, yeah, because I want a place where like it's kind of standardized, you know, for some reason, you know, I was trying to, like, again, I would have to start, like, inputting and then see, because... 

You also haven't got like I was thinking like, OK, well, if this can be a running thing specifically for me, I want to keep my project separately. That's right. Right. Oh, I see what you're saying. There you go. Yeah, it's very good. 

It's very useful this way. 

This is a very good one. 

I could drop all this in the NC DOC folder. And then the next time you're doing a new similar project, you can copy NC DOC and just start renaming some things. Right. And then, you know, I'm just spitballing. But yeah. Yeah. 

No, no, no, no. I see what you're saying. 

Okay, uh, yeah, uh, well, let me just, yeah, um, so this, uh, so, like, if I was creating an NC Dock one, I, theoretically, I could just copy the rest of it and dump it in there? 

Yep. Is that, like, all the folders in there? 

Well - And then make it split? 

for NCBI? 

I wouldn't duplicate the master datasets, like the metadata. 

Okay, like these things? Yeah. like the MITRE ATT &CK framework is going to be the same, but then you're going to need to, yeah, you're going to need to have a selection of those specific for NC DOCK. Oh, just the learning objectives would have to be. Yeah. 

Okay. 

Yep. Yep. Gotcha. So yeah, click and drag it. Do you want to do that? Click and drag the learning objectives into NC DOCK. 

Click and drag it right there. And then are you sure you want to move? Yes. Now it looks a little funny, but it is go to your folder structure. It's how I view it sometimes as well. The file explorer. 

Yeah. So now it's in there and that's the, now you're learning objectives are in there. 

You've got those in your NC doc project. 

Okay. Uh, should I then, if I want to keep a master one to quickly copy and paste. So every time I create a new project, I would have a fresh start. I wouldn't, I wouldn't want to pull the NC doc stuff in there. Right. So I would just, you can, and then just delete it if you just want the structure. 

I, uh, depending on how similar it is. Um, but I'll, you know, uh, how standardized it is. Yeah, actually I might, um, You know what? Can I undo? Hold on. 

Control Z works in that Explorer. 

Here, watch this. 

I got an idea. I'm just going to do it here quickly. New learning objectives. I guess I'll rename it. 

I can't think of it. 

I'm running off like five hours sleep in the last three days. 

Check this out. Even if, and you know this is true at this point, even if AI didn't exist, having this organized in this way would still help you be more, more, more. Oh yeah. 

You see what I'm saying? 

And that's what I typically do, but, uh, not to the, I didn't, I honestly like started, I was thinking about it last night and it started like, uh, kind of. 

And I was like, okay, yeah, I can do this. All right, so this is what I just did. I just, under templates, I put learning objective for now, project template. Oh, excellent. There you go. Excellent, excellent. 

And when I have a new - No, you're three steps ahead. You're three frigging steps ahead, yeah. I'll clean that up. That's fine. Yeah, all right. So, yeah. 

So, templates is always gonna be anything that's like, I guess it would be used for any project, right? Once we have a new project, you can just copy and paste or you can reference the templates in there. 

So like this is what I did like I just for example like the UK template the one we posted from the we took from the Confluence page. 

Yep. This was the like we want to reference it. Yep, but I just put that under like UKI templates and then we can also do like the The technical writing style, content style, that can be under templates. We can use that as just like a quick reference, like, hey, everything has to be referenced under, use UKI templates as a reference for all these things, right? Yeah, that's right. And because your folder naming serves as tags, and you're working with an AI when you name it UKI templates, I was thinking about this earlier when you were explaining the folder directory. 

Part of me was wanting to tell you to write it down because that's what the AI needs to know. But at the same time, I didn't interrupt you. 

Because if you think about it, also the way you've actually structured it, remember how I said I didn't define it? 

I never defined what cycles are to the AI. I just use them. I just use them. And it gets it. It gets it in the same way. Because you've structured it intelligently, it's intelligent and it'll get it. 

So it's good. It's good. You don't even, yeah. And then you'll only need to explicitly explain that which it clearly didn't get. 

It's pretty cool. 

Yeah. No, you're doing great. You're doing great. This is exact. And it takes just time. Especially even like you see, you've got your Excel worksheets. 

Now you need them. 

You need them flattened in some way in here, don't you? 

So it's a it's that's literally the data manipulation, you know, and it can you explain when you say flat and what does that mean? 

I just Yeah, I just mean get it into a text format. 

Literally. 

Okay. 

Do you know the meme of the two astronauts in space? And one of them is looking, one of them. 

Okay. 

Um, uh, you do a Google, open up Google and then, uh, do a search for, you mean it's all just dot, dot, dot. It always has been. You mean it's just, it's just dot, dot, dot. It always has been, always has been, has been. Yeah. 

Okay. 

See the astronaut shooting the other astronaut. 

Yeah. So I'm the one shooting you. Okay. In this moment. And you are the one looking at the earth. Okay. 

And you're asking the question, oh, wait, it's all just text. And I'm going to tell you, yes, it always has been right before I shoot you, because you just realized this. You just realized the truth of the world, the whole world. That's the meme. That's the meme. Yeah. 

All right. It's all just text. That's what I mean by flattened. See, this is this is not quite flattened because it's text. You could literally edit any line in this PDF file. it's all garbage. 

It's not what we really want. It's, it's garbagely flattened. Let's just, yeah, yeah, yeah. Because then it's portable. You can copy it into your prompt and use it. And then you can go to another AI. 

If you don't like it, blah, blah, blah, blah, blah. You can, you can script on it. You can script on it. You can make a script that will treat it as an artifact and then move it around when you need it. 

Yeah. 

See, see, now I'm wondering because I have project documents, if that should be specific to. 

The master product like under like if I did NC doc, it should have its own project because that's gonna be unique. This will be These are fine because we can reference cyber reports when we go back References or what? 

Yeah, because a lot of these might be unique to that project like cyber reports are gonna be unique to the project Yeah, yeah, so maybe Okay So what I want to build is a, okay, what I'm going to do is build a master project file. 

So like using as ncdoc as an example, this is going to, I don't know, I'm just going to think of this right now, template project. So within the template project, so if somebody wanted to start a new project and be like, okay, well, what files? It'll be learning, it'll be documents. Let me just open up a new. I want to run back and forth here. Again, this will be adjusted. 

I'm going to put everything down that's coming out of my head right now. And then, uh, so this is going to be unique to the project that, that, oh, should I, I'll just, for now, this will be the stuff that's going to be unique to the project, um, needs to be in. Right. Okay. Yeah. Yeah. 

Right. Right. Right. Yes. Yeah. It totally does. 

Yep. It totally does. So, yeah. 

So when you start a new project, the idea we'll fill this up, we'll be like, okay. 

And then, uh, And here's a good example. 

This is great. Let me give an example. Your master KSAT list will reside in sort of your meta document section. Yeah, that doesn't really change. Yeah, but you will need also a subset of that. That will be placed in this other folder because you will also want to keep it separate So that you can, so that it's manipulable. 

It's portable as well. It's its own artifact. You don't want to mess with that. Yep. So it's naturally its own artifact. It naturally lends itself to you saying, Oh, this is incorrect. 

I need to update it. And then when you're ready to put your whole, when you put, when you built every piece as a separate artifact and you're ready to put your whole lesson together, you literally just piece it together. You hear, here's this, but use this artifact for this, blah, blah, blah. And cause it's all just pieced together. Yep. Yeah. 

The next thing, at least for me, because we're going to be using these cycles, is how we want to label the documents within these things, right? Me personally, I like to use numbers to kind of, but on a per project basis, or I guess uh, let me throw this out there. Um, the AI is very good at helping organize. And let me give an example. When I, I have a hundred and I have 187 artifacts. 

It was only until artifact a hundred or something. 

that I thought that and how did I have the artifacts organized literally chronologically in the order in which they were created, because I was working on this system on this day, there was no actual logical ordering other than chronological. And then so I actually thought, well, what if we can you group these up somehow, and actually group by artifacts list somehow, because I could never do that, nor could I keep it updated with all the new artifacts? Well, where does the new artifact go? Once I started once I started that interaction, where I started treating my list of files as its own artifact that then has its own organizational structure. Now every time I get a new artifact, the artifact comes with its own description, its own tags, and it gets placed in my master's list or in an organized manner. Just keep that in the back of your mind while you're organizing this. 

You can spitball. You can take a screenshot of your current explorer over here on the left. You could imagine this. 

At this current point, you could try this. 

Over on the left, you could maximize everything that you have in some manner that shows your thinking. 

and then screenshot it and then send it to Gemini and say, Hey, this is where I'm at. This is where I'm thinking I'm organizing this. 

I want to make a lesson. 

Uh, you see what I'm saying at this, at this moment? 

Oh, look, there you go. 

There you go. Yes. This is what I started writing stuff down. Like, okay. From here, it kind of gave me a handout. Like, okay, well, I'm not using all of these yet, but it gave me an outline and then I just keep adding more. 

And I'll let you know, that will become one of your artifacts, what you just saw. That's exactly what my Artifact 35 is in my game repo. I know Artifact 35 by heart. It's literally a carbon copy in that exact same ASCII structure. So the AI knows what files there are. Right. 

Yeah. So after you're done and you just update that every time you add like a new structure. Well, I don't anymore. Right. I used to manually. Yes. 

But now I don't. Now it does. Because you have a cycle that does that. It's just it's in my interaction schema. That's correct. In my interaction schema, I say when we when we're adding a new file, update Artifact 35. 

Gotcha. 

Yeah, dude, it's powerful. 

Once you realize these are the things you want, you just ask for it. Yeah, so I see this is why I'm like, my brain started, I'm like, okay, well, I got a template here, but I'm going to put, well, just for now, under my templates. I already have project templates. Wait, no, that's, yeah. So, you know what? I like that name better. 

So, there we go. 

The idea is here, let's get rid of this. When you want a new project, Yep. This is the template you're going to use to start a new project like the file structure that has everything and then you just drag and drop what's applicable or however we do it. You know how your learning objectives pull it from a master file or in the manipulated data as you said, right? Yeah, I'm almost wondering if you might want to go a more so you can do a more natural route which is at this point don't create the template just know that you're going to make it because what I'm saying is once you actually build out one template you'll have the end product, which are in, let's just say in this template file or no, not in the template file yet, because we're not taught in the actual NC doc project list. 

You'll have the actual text file. that you can then turn into a skeleton in the exact same way that I showed, I gave you that prompt file and I extracted out like the actual files so that you could just see sort of the skeleton that could immediately become your template and it'll be much easier to make your template from that, from a reverse engineering perspective. That's my advice. 

That's my advice. 

Okay. 

While building it out now is helpful in terms of actually getting your mind around the structure. 

Once you feel like you have your mind around the structure and you can run, go ahead and run on your main project. 

Build it out there because that will become literally copy and paste backwards into your template. Gotcha, gotcha. Yeah, well I figured once, yeah, right now I'm just trying to, yeah, exactly. I'm just trying to get whatever in my head out now, but I know it's going to change as I'm moving through. Yeah. And we have these sessions. 

This doesn't really work here. Let me move this here. Yeah. I do that a lot. I guess prompts, right? Where would you classify that under this project? 

Great question. That should go with your master project. It's going to be specific. 

It will be. 

It will be. It will be. Okay. Yeah. 

So a hundred percent. 

Okay. 

Because what the prompt is, is just the cycles. If you want to think of it like that. And then, and then, and then anything that supports the current cycle at the moment, it's a, it's a very living document, but it is a hundred percent project. Um, yeah, yeah. So that'll be under that. project will have its own prompt file, no question. 

Okay, perfect. Okay, and then... This is gonna, well, I guess... It can be there for working. The only reason it's there is because that's how I do my project. I just, because for me, you know... 

Well, are we going to have a master one? 

Like, eventually... Yeah. Well, it's genuinely up to you which file you operate out of. It could be stored anywhere because you're building into it, right? It genuinely doesn't matter as long as it's in the same place because you're... Right, right. 

Oh, that's a good idea. Hold on. I think this is a good idea. I think this is important because we're making a script that will... Well, hold on. The script, I manually copy and paste the product into the script. 

It's just a one -step process. Um, the only thing, but if we ever did make some programmatic input into the prompt file itself, in other words, automate that one little process, it'd be a waste of time. It's so easy, but we would need the prompt file to remain in place. All right. Uh, and it would be more, it would be unless, unless we had a much more sophisticated script that could, we could like a dropdown menu that we could tell the scripts. what project we're currently working on, which I don't think is necessary now. 

It's better if we just, I think you just leave the one prompt file that you're working on where it is there. That way, you know, um, and then, you know, leave it in back in the, just at the top of the, structure. But again, it's, it's going to be your project. I'm just, um, once you, once you kind of comprehend how to use the prompt file, genuinely, whatever, wherever it works for you, because like I said, initially, it really doesn't matter where the file is ultimately. Um, right. 

At the end of the day, it's just, that's the one that you're working with that project. Cause they will be different. They just will begin in the same way. So that in the one I sent you in the example, that was. these cycles file for making instructor guides. I realized that after I made, I made my instructor guides and I was done. 

A week later, I had to make more instructor guides. So I just opened up that exact same prompt file and just made a new cycle. Said, Hey, um, it's been, if you've read it, you'll, I even read it. And I laughed at myself. I'm like, I hope, I hope Jesse does read through these because it's not too much. And there's a lot of learning in there. 

And I'm fun. And I'm funny with the AI. 

I'm like, now I know what you feel like. But because I had just jumped into a new context and because every time the AI reads something it's basically fresh, it has no context other than what you gave it. 

And so I'm like, now I know what you feel like, just jumping into something fresh. 

But anyway, yeah, I was joking with it, right? 

But that's kind of, honestly, kind of what sort of unlocks the meta -level cognition of the AI. I kind of feel like you're waking it up a little bit, right? That ultimately prompt markdown file became that. I just went right back to it and then didn't change anything other than adding in the new context. 

I said, here's the new lab that we're making the instructor guide for. 

But I didn't need to add or change anything with my existing examples because I had already built the prompt file. Yeah, so that's what I was saying. Under templates, we can have it. Ah, I see what you did. Yep, project data. Is that just the one you copy or what? 

No, this is just so that it Has a nice because I hate I don't like how it I hate that. 

I hear what you're saying. 

Yeah. 

Yeah Yeah, yeah, so but I did put it like under specifically because this is gonna be specific to a That's good. That's smart. I didn't think about that. If we have a template start path of all the cycles and stuff, so if we have a master prompt that has all the cycles built out and then you can go through and manipulate the cycles, that will be specific to the project, right? Right. There you go. 

Oh, hey, I get it. I get it. Hold on. Hold on. Hold on. You would take the cycle one at a time from here because they're already built out. 

And then you would run through. Ah, I get what you're saying. You get what I'm saying? Yeah. Yeah. So, uh, cause it's already built. 

It's already built the steps. Cause you know, you got the cookie. Doesn't that's the way you bake the cookie. 

Yeah. 

Yeah. 

Yeah. 

Um, this is what we're going to have. So the master one will be under, uh, um, uh, and you can run through it like a manual script, kind of like they would feed a computer, the, pieces of paper in the old days. 

Does this make sense? Yes, sir, dude, that does. It makes too much sense. So there's a master prompt here. It makes too much sense. And then it can be, you know, and you can go through after, like, you just copy into a new project folder. 

Yeah. 

And then you can manipulate that. 

But here's the thing. You would want, if you added a bunch of new cycles in there, you're going to want to run a, like a diff and have that added to your master, right? 

So that would have, like, if that makes sense or my, like, So if I have a master one and then I find out, hey, I'm doing things better. 

Well, I guess this would be this could be a good. 

new master if you wanted it to. Yep. Yep. 

Right. 

I realized these 10 cycles are not 100 % needed. 

And then you just update your master and that will be your new template. And then here's another perfect example. Even if we have a perfect process, the AI will get better under our feet and we may not need some cycles. So yeah, either way. 

Yes. 

It's going to have to be iterative. Yeah. 

Improve. 

Uh, we ha it has to be built in. Yes. That yeah. What you just said has to happen. Yes. One way or the other. 

Yep. Yeah. Yeah. Yeah. Um, yeah, I think we're on a good, okay. I just wanted to make sure I just put an A in here. 

What you're making is, is something that I was expecting would take longer. 

Uh, remember what I was saying? 

Like once we would have three versions of this, then Ben could sort of blob. You're actually already just putting it together. what Ben would need to put together. 

You see what I'm saying? 

So we're really... Oh, I didn't know Ben was going to... Yeah. He should. In my mind, in my mind's project to make all this world a reality so I can go to space is Ben would be doing that. Well, if you want if you're talking to Ben and you want to pull me in conversations Yeah, I can share this with you. 

Can I how do I no rush? No rush. No rush. Yeah Yeah, no, this is remember this is specific. I mean this is specific for lab Static content right now and then obviously you can you know, a lot of this stuff is gonna carry over anyways to labs That's right. A lot of this framework stuff Templates are gonna carry over So we might have to specify, you know, in here like UKI templates, we're going to have like a static content or a lesson template, lab template, you know, what, you know, lab outline training template, you know what I mean? 

Yeah, because they're all structured slightly different. Imagine. this. Imagine you had a checkbox on the left. That's what I'm going to make. I'm going to make that. 

And then so you could check. Can you do that within VS Code then? Yes, I already know of an open source extension where they did exactly that. I can take that and run with it. 

I was looking at this right here. 

I don't know if you have this. 

This is actually supposed to be able to display I didn't install it yet because I was hesitant because of the thing, but it has 8 .6 million downloads. 

Yeah, that would help. Markdown PDF, convert Markdown to PDF. There's all kinds of shit. PDF viewer. I'm just hesitant because I know some of these contain malware, like there's been reports of, because these are all third party shit. Yeah. 

Yeah. No, that's a hundred percent. That's a, it is a vector. So it's nice to know which one you're getting is like an official one. Yeah. Yeah. 

Um, but, um, well, I, I think we'll just make our own scripts. See, that solves the vector problem. Um, genuinely, uh, any PDF to Markdown, Markdown PDF, we can make our own script on the fly tooling. That is the apex skill. to be able to do exactly that. Like I just said, I'm going to make my own VS Code extension. 

I'm going to look at that open source one because it does exactly that, and I'll make my own from scratch with AI, but it will also be embedding my process. So a lot of the stuff that I show to be doing manually, once I have an extension project that I can, just like I code my video game UI, I will now be able to code the VS Code UI. I'm flip a switch and it'll run eight and then the diff will also show up on the it'll all be one pan paint pain and you can instead of man that's gonna be so nice i have to copy i have to copy manually eight eight eight times it's not a big deal i can do it quickly but i have to do it i copy a page imagine you can just click two buttons and get the diff the diff these two no i want to dip these two click two buttons no copying and pasting every time it would save me time um and then i can you can download the same extension And then all we got to do is make sure we're using the Gemini API that that dr. Wells has given us and bada -bing We're done. We have our what's one step above a what? Dr. Wells was making which was a content development studio We're making a data development studio that can make even a content development studio to develop content We could you see what I'm saying? We're one layer of abstraction above it already. 

If we keep going down this path of data curation, Yeah, keep it up, man. I was not expecting this much organization. This is way more I could have done in your shoes. It took me three years to get to where, you know what I mean? You're doing really, really good. It gives me a lot of ideas. That's what even helps me think of it like this. 

I never made the extension because I was too busy doing other things. If you need the extension is because there's two of us doing this now there, you know I actually there's a reason to make this extension so that both of us don't have to do the copying and pasting bullshit See, so yeah. Yeah, it's good. It's good. I Yeah. 

One second, Alex, hit me up. 

Sure. Yeah, actually, I need to, I'm doing a end -to -end review for him right now. NTS. Yeah. No, man, I'm excited. Like I said, this was kind of keeping me up. 

Well, I've been fucking, my brain is like, I have a million things going on in my life. So I was like, but this was like, I was like, man, it had me excited. And I was like writing some notes on my phone last night. I was like, all right. Cause I didn't really get to it after my doctor's appointment, but yeah. I'm going to keep, I think we're good. 

So what's the next, like, this is a good start. 

Do you want me to start filling in for NCDoc, like the documentations, or do we, do we want to like, what's the next step right now? 

I know you want me to go through the cycles that you sent. Yeah, it's actually not too bad. Let's open it up now. We can, we can read it together. It wouldn't be too bad because it would really help if in fact, actually, no, let's, let's, let's, let's do that as a class with Austin as well. Yeah, because he just wants to go hit they go do fingerprints and you're a hundred percent, right? 

It's like piecing a puzzle together and you don't have many of the puzzle pieces. You just have a few words on your screen So I think it's perfect. I'll explain all the backstory behind every single cycle. Yeah, you want to do that? That would be very valuable That'll be the next sort of lesson because that'll get you ready to like when you start actually that so and then your question to your other questions What neck what's next? Continue doing this until you feel like you have everything that you would need to make every piece of your lesson from the top to the bottom in here. 

Otherwise, for example, I would have to go to some website to get that KSAT. that I didn't, because that's where it is, that's where it lives. You've gotten it now. You've gotten it in here. Once it's in here, then we won't be going anywhere other than to our prompt file. Question for you. 

Have you ever tried running your, have AI run your cycles through AI and have it, because your cycles are very human interactive, right? Like a chat? Have you had it go through and say, hey, these are like, these are good to go cycles. Can you rewrite them? Uh, and then like an official, uh, you know, technical standpoint that you would understand and test that to see if it works. Yeah. 

It goes through and it gets, it gets rid of like the words like, uh, can you please do this and this, cause that extra, you know, data that it has to process. No, it's not quite extra. Uh, not always. Um, and, and, and yes. And so, so when you say please, here's the thing about please. when Sam Altman is wrong. 

He's wrong when he says, please stop saying please because you're costing more tokens. When you say please what that really it's not about being polite. What it is is what what often follows please and it's a net and Cinematic language or whatever is a is a request or a directive So actually that's what's actually going on is you're instead of saying please you're just saying do this That's ultimately the same thing is what's happening is your your D. You have deconvoluted your your paragraph when you add the word please, because now at least here's the directive part. So actually no. But to your point, you're right. I didn't mean no like you're wrong. 

I meant no like... No, no, no. Yeah, yeah, yeah. So you can classify your cycles, right? You can be more flexible with language though. Language is very flexible, so it will get the gist. 

Here's the way the AI works, is it has mental routines. For example, is in, is in. So Dallas is in Texas, okay? So there's an is in routine of neurons that get activated any time it needs to do an is in. And so, for each for each so for each file if you don't say if you don't say for each you might not activate that routine you're you're leaving it sort of to chance but there's so many different ways to say for each it doesn't matter as long as you've activated the routine does that so so less loosen the i need the precise language because you don't you just need the routines kind you see what i'm saying yeah yeah But yes, I do. And that's a lot of what my interaction schema is. 

And when you read my, when we go through my prompts, you'll see if it's capitalized in proper grammar, the AI wrote it. If it's lowercase, then it's, then it's my raw, uh, uh, directive. Yeah. And yes, I do. I do. Uh, I, I wrote them all from scratch myself. 

And then, uh, you can see, uh, I did ask it to rewrite them and I just went with it. I never sort of tested if it got better or worse. I just had it rewrite them and I moved forward. You see what I'm saying? But yes, that's very good. Very good thinking. 

So this is what I'm talking about. So I asked it, I was like, based off of the instructions that you get, how would you classify these types of questions? And then we could have the classify the the cycles so we can make it easier for data. So right be like, well, if I'm telling it correctional problems, once it figures it out, maybe I can just get rid of that, go through all of my correct, you know, -solving, whatever, questions. You know when you have to constantly keep correcting it? 

Eventually, you can go through and get rid of those cycles because it should be some sort of now informational question or a procedural how -to question, you know what I mean? So that's why I was like, how does it classify? And then classifying your cycles might be able to help reduce the cycles even more or make it even easier Easier to organize be like okay. These are the questions. I'm telling these are the cycles. I'm telling it to do XYZ these are the cycles that kind of fixes these issues Yes, and then you can really go through and just you know throw that into a CSV and then organize your data However, you want yeah, you're yeah, you're another step ahead what that is is you're literally defining a classifier kind of like a sentiment analysis and You know, like an AI that tells if something's a good sentiment or bad sentiment. 

You're literally talking about that, but for a classifier. 

And so that's exactly what it would look like, because every company needs different things classified in different ways. 

You would create that training set, that training data. And then that would become part of its repertoire. And the ultimate, because it can, it can, it can, it can classify questions, but will it do it every time? If you want it to, if you don't mention it, no, it will not. You're just same with the routines. So this is right in line. 

Uh, you're leaving it to chance unless you've, you've built a classifier, which is literally what that was. 

That was a rough draft of building. That's what it would look like. It would be a bunch of the script that goes through your cycles. It classifies them. Yeah. Right and then you can really break down like we know these type of commands don't work very well and this is what it's classifying it as let's let's review and adjust that as and you know what I mean that's I'm just kind of thinking to help really I know you say we're not worried about. 

cycles and stuff, but if we start doing in -house and we're paying, you know. 

No, that's different, that's different. 

The cost thing, yeah. There's, Noam Brown is the gentleman who works at OpenAI, who is the guy, honestly, who came up with thinking, not for AI, not all thinking for humans, but thinking like for, to give it, in other words, give it time to think. That idea in machine learning, the machine learning field of study, all the machine learning scientists were focused on what you could pack into the model before inference time. And then inference time was just supposed to be as instant and fast as possible. There was no thought put to put thinking time up until this kid, Noam Brown, shows up and he makes a bot that can beat the world players at poker. Okay, what? 

The first person to beat the world player with an AI with poker? How did he do it? He let it think. He let it think for a little bit, basically, when you boil it down. 

And so all thinking is, is just letting it prompt itself a little bit, and then some problems don't solve themselves immediately. 

I forget where I was going with that, but that Noam Brown, ah, ah, ah, there was another, that was who he was, but ah, I remember now. There's only ever usually one bottleneck. And so that ought to be the one that that is has your focus. Keep that in the back of your mind. That was very valuable. And then the second thing that Noam Brown said that was super valuable to me, which was the given given reasonable 

decisions were made when an algorithm is being created, because you can make an algorithm to perform the same function and that algorithm could look very differently than another algorithm that performs the same function. Given reasonable decisions were made when the algorithm was created, comparing all of them together, they're all going to be more or less the same in terms of efficiency and effectiveness. And the amount of gains that you will get out of super optimization of said algorithm is only going to be marginal gains. The real factors where you get the exponential gains are when you add sort of two different sort of reasonable algorithms, but together, and they can kind of do two different things. Case in point, the moment you have an AI that can do like a web search, that is another algorithm on top, basic algorithm on top of something else, another algorithm, the large language model inference thing, bada bing, bada boom, that's a very powerful multiplier, right? You see? 

So that's another thing to keep in mind. But that one's not relevant. The other one that was more relevant was talking about fine -tuning cycles is what you're talking about. Actually, let's put it that way. That's a good way to phrase it. You're talking about fine -tuning cycles, and that will be valuable when we have tens of thousands of cycles that are running all the time, and then we need to find time. 

Right, right, right. Yeah, we'll do that. That's a great idea. That's very forward -thinking. I didn't think about it ever, but that's exactly what it is, and that's when we'll do it. That's when we'll get that bottleneck. 

That's when we'll hit that bottleneck. Yeah, yeah, yeah. Good, good, good. Okay, I think I'm good. I think I'm heading in the right direction. Let's schedule then to another session with Austin. 

Yeah, another session with Austin and I'll really dig into the cycles and I'll show him the game. We have a meeting today. So I think, I could be wrong, but I think Dan's putting you and Alex on the NCBI project for lab creation. So we might be working together. I'm not a hundred percent sure, but I think that's what that meeting's for today. Which is good in a way because then we'll be working even closer together and we can, you know, we'll be working hand in hand with the labs. 

Yeah. And I can learn from you while you're building, help building these labs with this. Yeah. These are going to be complicated labs though. Then I'll need your help. Yeah. 

Because these are going to be really with APT activity. We have to produce APT activity, all this other stuff. It's kind of going to be, so this should be a good time actually. to see if we can manipulate. 

We do have restraints though, like right now I guess we can only produce eight hours of traffic. 

And like some of my tasks are to create like Kibana dashboards that show like three days of history, because that's how we used to like baseline ships. So we'll have to work with like Brian and Ben to figure that out with like TCP replay or stuff like that. I could, yeah. So we'll see how this meeting goes today. Dan's gonna talk about it, but if so, then I guess it'll be better, because we'll be working with each other hand -in -hand, unless Dan pulls me off to go work on additional static content, because we have five other fucking NC . com contracts coming down the pipe for other workflows. 

But here's the thing though, like once we get, that's why I'm excited, and I kind of wanted to use this for Module 3. 

but I am on a timeline now where I've got like two weeks to get module three kind of line out the door, or at least kind of written up. 

So I might, I'm going to probably not be able to spend too much time right now on this and just kind of just knock it out how I've been manually doing it until we can really perfect this. 

But I want to keep, yeah, I want to keep digging away at this and then start testing and then let's just yeah continue moving forward and we'll just spend a couple hours every week just kind of working this as a side project uh because i know dan's gonna be nc docs already overdue like it was supposed to be fucking sent to the customer like by next month sure we haven't even started the lab oh yeah i mean that's a uki issue um because they were supposed to have arbiter create these labs and they could never agree on a contract price i guess or they can never come to agreement so yeah yeah Well, now we get the pressure. 

No, I think I think this will be perfect, though, because as we're going through it, as we're you know, if you're using this method to build the labs, yep, I can help you structure the data. Yep. As we're going through. Right. You show me what you got and I can, you know, kind of organize this stuff on a lab sense while you're in. And, you know, we can kind of test and play with it. 

I think we'll be in a good spot. I agree. I think that'll that'll work well. 

You'll see how the sausage is made. 

Yes. 

We'll have to create let's If we are doing a project like that, I would like to create a Discord channel. 

We'll talk to Alex and then, so if we want to, because I hate doing huddles. Me and Austin, we have a, I just call it a UK ad club, a Discord, and we just hang out in there while we work together on the projects. 

We hop in and out and stuff, so maybe we can do that. 

So we don't constantly have to be, you know, you just hop in and out of the Discord whenever you want. You don't have to constantly be dialing in huddles and stuff like that. 

Yeah, much better, especially because Slack can't share my audio, so. Yeah. Why can't, you don't put on AI notes? Well, you know, I guess they can. No, no, I mean my computer audio, like if I wanted to play. Why don't you use OBS? 

Have you used OBS before? Well, it's a Slack thing, right? Slack can't play computer audio. I know, but OBS is just, uh, it can just record anything you have on your monitors. Yeah, I have it. I don't have it on my work computer. 

Oh, yeah. I don't use my work laptop. Fair enough. I use my, yeah, I can't work on a laptop. Like I have my computer with like a 4090, you know, three, three monitors, giant monitors. Yeah. 

I need all the real estate monitors. So, um, yeah, I only use my laptop for, uh, uh, when I'm traveling or be out of the area. Yeah, man. All right. Sounds good. I'll let you get back to your end to end testing. 

If I have anything, I'll hit you back up. Yeah. But again, I'm getting super excited. So we'll get something going here. And then hopefully you can start feeding this to Dr. Scott and stuff. And really, hopefully they come through with the investment. 

Yes. Yeah. Yeah. Yep. I'll keep pushing on that angle as well. Sounds good, man. 

Take care. Take it easy. Bye. Love it. Okay, I said love it, not love you.


Transcribed with Cockatoo
