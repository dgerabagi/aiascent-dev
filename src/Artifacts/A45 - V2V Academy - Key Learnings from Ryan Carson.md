# Artifact A45: V2V Academy - Key Learnings from Ryan Carson
# Date Created: C55
# Author: AI Model & Curator

- **Key/Value for A0:**
- **Description:** A summary of the key concepts from Ryan Carson's "3-file system to vibe code production apps" video, which serves as an inspiration for structuring the AI development process.
- **Tags:** source material, research, workflow, development process, vibe coding

## 1. Overview

This document summarizes the key principles from the provided transcript of a YouTube video featuring Ryan Carson, in which he details a structured, three-file system for developing applications with AI assistants. This methodology serves as a strong inspirational model for the "Vibecoding to Virtuosity" curriculum, as it provides a clear framework for moving from a high-level idea to an implemented feature in a guided, non-chaotic way.

## 2. The Core Philosophy: Guided, Not Vibe Coding

Carson makes a clear distinction between his structured approach and "YOLOing and vibe coding." He argues that for building real, production-level applications, a guided process is essential. His central analogy is powerful: you wouldn't tell a new human engineer with no context to "make a fun game" and expect success. You must provide structure, clarification, and a plan. The three-file system is designed to provide exactly that structure for an AI engineer.

## 3. The Three-File System

The system consists of three prompt files that are used sequentially to guide an AI agent through the development of a new feature.

### File 1: `create_prd.md` (Product Requirements Document)

*   **Purpose:** To force clarification and create a formal plan before any code is written. This aligns perfectly with the DCE's "documentation-first" principle.
*   **Workflow:**
    1.  The user provides a high-level, natural language idea for a feature.
    2.  The AI, guided by the `create_prd.md` prompt, asks a series of clarifying questions (e.g., target user, goals, success metrics).
    3.  The AI then generates a detailed Product Requirements Document (PRD) in Markdown format.
*   **Key Insight:** This initial step formalizes the "vibe" into a concrete plan that both the human and AI can agree on, preventing misunderstandings and wasted effort.

### File 2: `generate_tasks.md` (Atomic Task Generation)

*   **Purpose:** To break down the high-level PRD into a detailed, step-by-step list of atomic engineering tasks.
*   **Workflow:**
    1.  The user provides the generated PRD as context.
    2.  The AI, guided by the `generate_tasks.md` prompt, first generates a short list of high-level "parent tasks" for user approval.
    3.  After the user approves or modifies the parent tasks, the AI generates a detailed list of atomic "subtasks" for each parent.
    4.  Crucially, the prompt is refined to include **test-driven development**, adding a "write tests" subtask at the end of each relevant step.
*   **Key Insight:** The two-step (parent/subtask) generation process provides a crucial checkpoint for human oversight, preventing the AI from generating a long list of irrelevant or incorrect tasks. It maintains human control over the high-level strategy.

### File 3: `process_task_list.md` (Controlled Execution)

*   **Purpose:** To control the pace and execution of the AI agent, forcing it to work through the generated task list one step at a time.
*   **Workflow:**
    1.  The user provides the generated task list.
    2.  The AI, guided by the `process_task_list.md` prompt, executes only the first subtask.
    3.  It then **stops and waits for user confirmation** ("yes" or "y") before proceeding to the next subtask.
    4.  As it completes each task, it marks it as complete in the markdown file.
*   **Key Insight:** This creates a tight, human-in-the-loop execution flow. It prevents the AI from running away with the project and allows the human to intervene, correct, or provide feedback at every single step, ensuring the final output is exactly what is desired.

## 4. Relevance to V2V Academy

Carson's system is a perfect case study for the "Virtuosity" end of the V2V spectrum. It demonstrates how a developer can act as an architect, using a structured process and a set of purpose-built tools (the three prompt files) to direct an AI agent with precision. This is a clear, teachable methodology that can be a cornerstone of our curriculum.


```transcript

Why his 3-file AI coding workflow works so well
0:00
Imagine that you had a very smart engineer show up on your doorstep. They
0:05
have no context, no background. You wouldn't just tell, you know, a random new employee, "Make me a game that's
0:12
super fun to play and then expect them to succeed." This isn't rocket science,
0:18
but I think the reason why this GitHub repo has like 4,000 stars is because folks do want a process to follow to
0:25
give them better results. I wouldn't want the AI to run off and create 30 tasks. I would want it to create a high
0:33
level, you know, give me five tasks and then I want to approve those. Let's talk about your three-part system and also
0:39
how is it different from like typical VIP coding. So, I'm going to walk you through a little bit how it works.
0:46
Okay, welcome everyone. My guest today is Ryan. Ryan is a serial founder who's building his next startup solo by
0:53
talking to AI for a few hours every night. And Ryan has an awesome three-part system for coding with AI
1:00
that I'm really excited again to demo. And we'll also talk about uh you know what's like uh building an AI startup as
1:06
a solo founder. So welcome Ryan. Awesome. It's so fun to be here. I like
1:12
the description of uh coding for hours at night. That feels like it's everybody. So that's me. looking forward
1:18
to to chatting and sharing some stuff I've learned. Yeah. I don't know if you're a parent, but like, you know, Yeah. I I only have time to code at night. Just go back to
1:25
bed. Yeah. So, the best time is either late at night or in the morning. Uh but as you know, the problem is if you if you're
1:32
going to like one and then it gets to be two, then you're like, "Oh, man. I'm going to pay for this tomorrow. So, you
1:37
have to cut it off at a certain point." Yeah. Let's get right into it. Let's talk about your uh three-part system. uh
1:43
and maybe can share what it's like and also how is it different from like typical Vibe coding. Yeah, sure. So, let me give people some
1:50
context so they understand a little bit more about how I got here uh and kind of my skill set. So, graduated uh from uh
1:59
Colorado State, computer science degree in hand and got my first job as a web developer. So, I learned mostly reading
2:06
O'Reilly books. So, there's probably some fans out there that love O'Reilly. Um, and uh, you know, read PHP cookbooks
2:14
and and started building. So then fast forward, I thought, okay, what's a problem that I care about? And I
2:20
realized you need to send large files that you couldn't email. So I basically built Dropbox. It was called Drop Send.
2:28
Um, built it myself. We racked our own servers and, uh, that was acquired I
2:34
think after two years. So that was kind of my first startup when it was really
2:39
solo founded. um it was a B TOC product uh but it was exciting and then I
2:44
realized you know what I really want to scale this and and empower more people so we built an online school teaching
2:51
code right so that's where Treehouse was born we ended up raising VC you know scaling this team to over 100 people and we
2:57
ended up teaching about a million people how to code so then I was just coding coding coding for hours and hours and
3:03
hours at night um and my wife is like you know please like come to bed at some point so if I share my screen I and show
3:10
you what is this that we're talking about. Okay, so let me show you the
3:15
actual GitHub repo. It's open source, so please use it. Um, and I'll walk you through the three files as we go. Here
Explaining each file: PRD, atomic tasks, test-driven development
3:22
it is. So, we've basically have three files. So, a create PRD file. Uh, we have a generate tasks uh file and then
3:29
we have a process task list file. And these are just prompts, right? So, I'm
3:35
going to show you the first one um that you would use. Now, let me explain how you would use this really quick. So,
3:42
what is probably going to happen is you'll be using your agent and you'll have an idea for a feature that you want
3:48
to use. Um, and then you'll talk about that feature and then you're you'll tag this file. So, I'm actually going to
3:54
show it to you and then I'll I'll probably go over to an agent and show you how it might work. So, if we read
4:00
through a little bit, um, the goal is to guide an AI assistant in creating a detailed PRD in Markdown. Um, and the
4:08
process is pretty simple, right? So, it's a four-step process. You, the AI will receive the initial prompt. Um, the
4:15
agent will then ask clarifying questions, uh, and then it will generate the PRD
4:21
and then it will save the PRD as a markdown file. Um, we gave it some example uh, clarifying questions. It
4:28
might ask, you know, about the problem of the goal, the target user, etc. And then we talked a little bit about the
4:33
PRD structure, the target audience, and the output. So yeah, the clarifying questions is like
4:39
pretty important because I I become so lazy like prompting AI. I just hey go build this like you know movie app for
4:44
me or go build that. This is forcing me to actually provide some more details. Yeah, it's it's well cuz one thing I
4:51
like to say uh to everybody is that you know imagine that you had a very smart
4:57
engineer show up on your doorstep, right? They have no context. you know,
5:03
they have no background and you wouldn't just tell, you know, a random new employee, you know, uh, make me a a game
5:12
that's super fun to play and then expect them to succeed or say, okay, I need to
5:18
know more. So, um, so let's actually show you this in action. Um, let me switch over uh to Ghosty.
5:25
Okay, so I'm going to take you over to my terminal to actually show you this in action. So, uh, I'm a big fan of Ghosty.
5:33
So, if you're on a Mac and you have to use a terminal, I would totally recommend Ghosty. It's amazing. Uh, and
5:38
then I use T-Mox, uh, as my pain management. Um, again, you might be using an IDE, which is absolutely fine.
5:45
Um, but I've kind of fallen in love with this kind of bare metal approach. Um, so on the right, I have uh one pane, which
5:52
I'm going to run AMP in. So, we're going to go ahead
5:58
one second. And again, my HHKB uh keyboard is giving me right now. So, we're going to do AMP and we're going to
6:03
run it with a special feature called TUI cuz um it's a beta feature, which is
6:09
kind of cool. And then on the left, we we're going to run uh uh Neoim. So, let's start that up and we're going to
6:16
um let's go ahead and show you. Okay, so on our left, we've got our project and
6:22
I'm actually going to be using uh the actual repo from my startup. It's called Untangle. It's uh an Nex.js app. It's
6:30
about 100,000 lines of TypeScript. So, it's a pretty decent repo. Um, and then on the right, we've
6:36
obviously got AMP, which is my agent of choice uh running on the command line. So, let's go ahead and think about a
6:43
feature that we want to ship. So, now Untangle is basically an app to help
6:48
people through divorce. And the reason why is Yeah.
6:53
Uh, it's a real world problem that people have. Um, thankfully, I'm happily married. I've been married to my amazing wife for 21 years. Um but I have uh
7:02
three sisters and we're best friends. And um about 2 3 years ago um
7:08
unfortunately my older sister went through a divorce and it was pretty rough and it was expensive and hard and
7:13
then unfortunately a little bit later my younger sister went through a divorce and I just watched how hard it was and I thought you know what I feel like um
7:21
helping people through that process you know getting them through filling out all the forms layering on a really smart
7:27
large language model on top you know will save them a lot of lawyer fees a lot of pain. It's not a lawyer. Um, but
7:33
it it does a lot of things that should save you money. So, that's the context. So, I think what we're going to do is
7:39
add a little feature um when the user is onboarded um to try to get a feel for,
7:47
you know, what's their relationship like with their partner. So, what I'm going to do is go in here and I'm also a big
7:54
fan of whisper flow. So, I talk most of my prompts. Me, too. So, I'm going to do that. So,
8:00
okay. Okay. So, I want to build a feature that's going to help us understand the way that the user is
Live demo: Building a new feature from scratch
8:08
relating to their current partner. We want to try to figure out are they on good terms, are they not on good terms,
8:14
are they speaking? Um, you know, what's that relationship like? And we'd like to score it um from 1 to 10. Uh, one being
8:21
it's terrible and 10 uh being that they're on good terms.
8:26
Okay. So that is the feature my sort of blleh. Um now what we're going to do is
8:32
tag uh the um the prd. So let's see if I
8:37
can remember what it's called. Create prd. All right. So we're going to tag that and we're going to let it run and
8:44
rock and roll. And that's basically like a slash command, right, that you created like somewhere. Um no, that is literally just uh tagging
8:50
the file to put it in context. Okay. So it's very simple, right? Um, this is kind of why I built these uh as markdown
8:57
prompts that you're really kind of uh tagging in a prompt. Um, so what we're seeing is uh some of the reasoning
9:04
tokens. Um, and then now we're getting back an answer. Uh, I'm going to keep this kind of light. You know, normally I
9:10
would go through and respond to all these. Um, but I'm actually just to speed this up. I'm going to say,
9:17
why don't you pick what you think is best for all these things?
9:23
Okay. So, uh, AMP is going to run off and and pick what it thinks is best of that and
9:29
then it will generate the PRD. So, what's kind of happening here is this guided process. Now, do you need to do
9:36
something like this when you're just shipping a quick fix? Of course not, right? Um, but this is a really helpful
9:42
way to get through, all right, I need a pretty chunky feature written. I want a plan. I want to get through it. Um, and
9:49
then, uh, I want to ship it. So, Mhm. right now it's going to it's going to think about that.
9:55
And are you using like a sonnet or Yeah. So, one of the interesting things um about AMP uh that actually I didn't
10:03
like at first um is there's no model selector. Um and I remember when I first
10:08
tried I'm like wait a minute like what model am I using and how's this working and also where are the uh accept or
10:14
reject uh diffs right and what I learned is that AMP is super opinionated about
10:20
choosing a certain model that's been highly optimized for the agent harness
10:26
right because everyone who's building with models knows like every model's wildly different right and you can't really hot
10:33
swap models like it just doesn't work. Um, and so, uh, the team at AMP decided
10:39
to go with Sonnet 4 as the primary driver for the main agent. And then in a minute, I'm going to show you this kind
10:45
of a cool feature, uh, where you can ask the Oracle, uh, to help. And what that
10:50
does is that's a tool call out to 03. Um, and then you get a bit more reasoning. Um, it's a little slower, but
10:57
you get more thoughtful. And I tend to think of that as like, I want to go ask my senior engineer a question. Um, and
11:03
then get their input on that. We also use um Gemini Flash for uh some summarization tasks. So, all right. So,
11:09
let's head back over here. Okay. So, it's created um the PRD. It's
11:15
called PRD partner relationships assessment MD. Um and then what I'm going to do is we're going to tag the
11:21
next file uh to generate these tasks. Um let's have a quick look though at this file. So,
11:28
we're going to see it's called uh PRD.
11:33
There it is. I'm actually going to Okay, so you can see, you know, pretty
11:39
straightforward PRD. Um, this feature will assess and score the current relationship dynamics, the goals, uh,
11:45
user stories. Um, what else we got? Uh, couple open questions, success metrics.
11:52
So, kind of what you'd expect out of a a decent PRD. Yep. Okay. So, now I'm going to switch my
11:58
screen back. All right. So, we're back on the GitHub repo and I'm going to show you our next file that we're going to
12:04
tag. Um, which is the generate tasks file. So, we've got a great PRD and now
12:12
what we want to do is build out the specific atomic task that we want the agent to knock out. And again, this is a
12:19
prompt that we're going to tag. Right? So, the goal is to guide an AI assistant creating a detailed step-by-step task
12:26
list markdown. Um, and it should guide a developer through implementation. Right?
12:32
So, we want to want a markdown file. We want it to be in the tax task folder. We want to get this file name. So, this is
12:38
pretty straightforward. Again, you've got 10 steps that I want the AI to follow. Um, receive the PRD, analyze the PRD,
12:45
assess current state. Phase one, it generates the parent task. Right? So, I wouldn't want the AI to run off and and
12:52
create, you know, 30 tasks. I would want it to create a high level, you know,
12:57
give me five tasks and then I want to approve those and then uh then I want the detailed one. So that's what we're
13:04
doing here. Generating the parent tasks, telling the user, waiting for confirmation and then generating the subtasks.
13:11
Yeah. Yeah. I think the parent and subtask is pretty important. Yeah. Because normally it will just generate like 30 different tasks.
13:16
Yeah. I think this is and this will get better as the models get better, right? But right now, I think all of us that
13:21
are building with this stuff realize you really do need to pay attention. You have to read what the agent says
13:27
it's going to do and guide it. Um, now if you're just yoloing and vibe coding and having fun, who cares?
13:34
But, you know, I'm not a vibe coder. Um, I think a lot of people watching this
13:39
are not vibe coders. We're just engineers that need to build real stuff. Um, and so this steps is super
13:45
important. Um, this is what the file will look like. Uh so you've got relevant tasks and this is just to to
13:53
keep in context uh for the agent. Hey, what files are we working on so it can refer back to them. Um some notes that
14:00
it might need and then these are the tasks. And the reason why I'm using dot notation on these tasks is so they can
14:06
be atomic and understandable. So you've got you know one 1.1 1.2 etc. So pretty
14:12
straightforward. So let's show it in action. I'm going to switch back. Okay. Okay, so we're back in Ghosty and uh uh
14:20
we're going to use this generate task file. So let's hop back over here. Um couple things that are kind of fun to
14:26
note. Um uh Sonnet now has a lot more context, right? So you've got at least
14:32
400K. Um sometimes it's up to a million uh depending if you want to use that. It is more expensive though.
14:38
Um this is how many lines we've changed. Uh we've obviously added about 70 lines which you can see over here. So, let's
14:45
go ahead and tag this. And I can actually um I'm going to tag both the PRD
14:52
uh and the generate tasks uh generate
14:59
task. There we go. So, I'm just going to tag both of them so that the agent has both those things
15:06
in the context. And I don't even really need to tell it what to do uh because the generate task um instructions all
15:13
there. So, we're going to let it kind of crank away on that and we'll open back up our uh file so you can see what's
15:20
going on. Yeah. Normally, you'll probably review the PRD first, make sure, you know, make some edits and then ask you to generate
15:25
a task, right? You would. Yeah. I would generally read this PRD a little closer. Yeah.
15:31
So, um but just so you don't all get super bored watching this, uh we're not we're not going to read that too
15:36
carefully. Um what's interesting is a lot of agents like AMP um have to-dos
15:41
now, right? So you can see on the bottom right it is uh building its own list of
15:47
of tasks. Um I have to say that you know whether it's cloud code or cursor CLI or
15:53
AMP or really any agent it's pretty standard now. I think they're all shipping with tasks now.
15:59
You have to actually manage a little bit between the two right so you can see these highle tasks kind of make sense.
16:06
Um but in a minute I'm going to be asking it to uh you know execute these very detailed atomic tasks um and uh and
16:14
not use its own task system. So let's let's have a see what it's doing. So it says I have generated the highle task based on your requirements ready to
16:20
generate. So I'm actually going to open this file. Um let's switch over here.
16:27
Uh what's it called? It's called uh tasks. There we go. All right. Hide this.
16:35
All right. So, we've got relevant files here. Um, it's going to be looking at the schema because we're probably going
16:41
to record these things. Um, it's got the main relationship assessment questionnaire page. Uh, it's got a ZOD
16:48
validation schema, etc. And then a couple notes. And then the task. These are the most important things, right?
16:54
So, number one, database schema and data layer. Uh, number two, assessment questionnaire, UI. Uh, number three,
17:01
score, calculation, logic. Number four, results, display, interpretation. And uh number five, AI recommendation system
17:07
integration. I mean, that seems pretty good to me. If I wasn't recording a podcast, you know, I probably would dive
17:13
into this a little bit more. Yeah. Um I'm going to give it a little feedback though and say, um I think so
17:20
I'm going to say we need to create a branch first before we do all this. So go ahead and add that
17:27
as the first step. So there's six total steps. I also want to make sure that
17:34
uh actually never mind we won't do that. So let me delete this last little bit.
17:40
You'll see when we generate the subtask we're actually going to make sure that we're writing tests.
17:45
Okay. And the reason to create a branch is just so you know if something screws up you can just re revert. Right. Exactly. Yeah. So typically you know
17:53
I'll create a branch for any feature I'm building. Um I'm actually part of the core AMP um dev team as well. So, we
17:59
always commit uh we always create uh uh PRs for everything we do so that they can be merged back in. Um so, all right,
18:06
it's saying great. You know, we're going to add a first uh step in over here. So, let's go over here and refresh the file.
18:12
And you can see um we've got create feature branch. Okay. So, now um I'm
18:19
going to show you uh we're actually going to continue the process and say go. So you can see over here it said
18:24
perfect. Update the task list to include branch creation as step one with six total ready to generate subtasks. I'm
18:31
going say you bet. Let's go. So now AMP's going to go and crank out
18:36
uh subtasks for each of those six parent tasks. Um actually you know I'm going to
18:42
stop it. I'm going to show you something really quick that I want to do. Uh, I'm going to say, uh,
18:49
uh, why don't you, so call on the oracle to make sure we're not missing
18:57
any larger parent tasks. I probably should have spoke that, but
19:03
um, so this is an example of I want to use a little bit more compute um, to
19:10
really make sure I'm not missing anything obvious. Um, so in AMP, like I said, this is a tool call to 03, so
19:16
it'll use a little bit more reasoning. It's a little more expensive. Um, and if
19:21
you're on any other agent, you could obviously switch the model selector, you know, and then uh do this, but I kind of
19:28
like the the DX of just being able to sort of talk to uh a more senior
19:33
engineer. Um, so we can see right now it's consulting the Oracle. Um, and it's
19:39
going to check out a couple things. This is obviously running 03, so it'll be a little bit slower. Yeah. To to come back. Um
19:46
Oh, it's like Yeah, it's probably going to check up. Is it going to look out all your files or or just this? Well, not necessarily. So, what it's
19:54
doing is just using more intelligence, right? So, you're what we're doing is using a slightly more heavy reasoning
19:59
model. Um uh and and then saying look at what we're doing, everything that's in
20:05
context. Um it doesn't do a lot of tool calling, right? So, I think this is what's kind of valuable is you're not
20:11
going to get a lot of agentic behavior here. What you're doing is saying, I just want someone to to double check
20:17
what I'm doing, right? Um, and it's saying, okay, actually, we need to add a few more steps uh to that.
20:25
So, um, now the other interesting thing about AMP that threw me off at first that people are probably noticing is
20:31
there's no accepting diffs or rejecting diffs here. um which I didn't like at first, but now I've actually learned uh
20:37
to love it because it speeds me up. So, let's go back over here and reload the
20:43
file. Um just to be realistic, I'm going to say, you know what? Um I don't think we need automated uh I don't think we
20:51
need analytics. So, I'm going to I'm going to go back over here and say I don't think we need analytics
20:58
um and documentation. Uh so why don't you remove those and then we'll proceed.
21:08
I'm just giving you a little a little more realistic back and forth here uh so that you can see uh what this might look
21:14
like. So all right now that switch back to sonnet 4, right? So now we're using the main agent. Um so we're going to go
21:21
over here. There we go. Okay. So now what we've got is highle tasks. Um now we need to go
21:27
ahead and generate all the the subtasks. So let's go ahead and do that. Um, it says perfect, remove analytics. Now we
21:34
have 11 focus parents ready to generate. Uh, go.
21:40
So, here we go. And, and again, this isn't rocket science. Um, but I think
21:45
the reason why this GitHub repo has like 4,000 stars is because folks do want a
21:52
process to follow to give them better results, right? And the problem is that
21:57
we have these amazing magic agents now that can do so much and they're so eager to help that you can say something. You
22:04
know, I this could have been a a one-s sentence prompt, right? And the agent would have got to work on it, right? But
22:11
would it have been what we actually wanted? Would it have been guided? Probably not. So, this process kind of helps it
22:18
through. All right, so we've got our subtasks. Um
22:24
they look pretty good for the for the testing piece. Uh ideally you have testing on each step,
22:30
right? Instead of like you know at the end. Yes, absolutely. So let's let's have a look at this. So create a feature
How to practice test-driven development to avoid bugs
22:36
branch. That's fine. We would expect that. Um database schema and data layer. Um I think what we'd want to do is
22:45
implement former state management and react hook form add form validation. I think we really like you said want to
22:50
add uh testing at the end of each step. Um and as you know so the reason why you
22:59
have to really care about test driven development now is because it's the loop that the agent needs to actually know if
23:05
it's doing things right. Right. Yeah. Um and so the faster you can speed up that loop, the faster you can build.
23:11
Right. So I'm going to go in here and ask it to do that. So at the end of each
23:17
step I need you to add test so that we understand if everything is working correctly. Let's use justest please.
23:27
All right. So we're going to it's going to go ahead and modify those. So um so Peter, you're obviously doing
23:34
this a lot. You talked to a lot of people. How are you seeing people using test test driven development to really
23:40
speed up their agentic workflows? Uh, I mean just including that line or including in the plan is is key because
23:46
otherwise uh if you're not doing this then you're basically doing vibe coding. You're like, "Hey, this is not working.
23:52
Go fix this. I can just go back and forth for like two hours. It's not working. It's still not
23:57
working." No, it's still not working. So, yeah. All right. So, you can see uh let's go
24:02
over here. Yeah. So, now we basically have uh just tests um and we're using types.
24:09
And And what is just? Um, just is just a nice uh testing framework for uh for
24:15
TypeScript and uh Nex.js. So, it's a really handy way to quickly run your CI
24:20
checks um to uh to make sure everything is working correctly. Now, you could use all sorts of different frameworks, but
24:27
um I like just so and it's probably because an agent suggested it to me at some point. Um okay, so we've gone
24:34
through to kind of walk everyone through uh what we've done, right? So, we had an idea for a feature. Um what we did is we
24:41
went into AMP and we spoke you know all the text of the feature and then we
24:46
tagged the PRD generation prompt had it generate the PRD then we uh took the PRD
24:53
and we generated highle tasks we edited those tasks and then we asked and then we used uh the generate tasks uh uh
25:00
prompt to then generate all the the p the subtasks. So that's where we're at. So, we have a pretty detailed um list of
25:10
uh tasks here. Um you know, under each one of these, we've got, you know, six or seven um pretty detailed tasks that
25:17
are atomic. And then what we'll do now is uh we'll use the third one. Okay. So,
25:24
we are back at GitHub and what we're going to do is go to our third file,
25:29
which is the process task list file. Um, now what this is doing is it's it's
25:36
basically controlling how fast the agent can move. Um, I've chosen to say do one
25:42
subtask at a at a time and do not start it until I say yes or Y. Um, and then
25:48
when you finish a subtask, immediately mark it complete with an X. And then if all subtasks underneath the parent are
25:55
finished, um, then go ahead and, um, first run the test suite. It's actually
26:01
saying hey remember to do this um if all pass tests then you can uh add it and
26:07
then you can commit it. So idea is we're trying to create this uh behavior of um
26:13
code test then commit right in an iterative sort of uh it's basically software engineering best
26:19
practices. Yeah. Yeah. Exactly. This is how you should work if you are a software engineer. Um, yeah,
26:25
again, this isn't rocket science or new. Like you said, this is basic uh software engineering uh behavior. So, what we're
26:31
going to do is head back over to Ghosty and see how it works. All right, so
26:37
we're back in Ghosty uh with AMP and on the left we have our task that we want
26:42
to accomplish and we're actually going to say to the agent, well, let's get going. So, I'm going to tag um the
26:48
process uh task list here.
26:54
going to tag that and then I can actually just execute it uh because it
26:59
has all the instructions in it and then we'll start looking at it. It's saying okay I should only do one
27:05
task at a time. Um and it's uh it knows it should do 1.1.
27:10
Okay. So it's starting it's so basically we've been talking for like 20 minutes, right? And like now it's finally starting to code.
27:16
Yeah. Yeah. Isn't that wild? I mean, it's it's so different than the, you know, yoloing
27:22
kind of one prompt and then just seeing what happens. Now, it's probably super boring to watch and I'm sorry, but this
27:28
is actually the way real software development happens with agents. Um, so now it's saying, should I proceed? And
27:34
we'll say, you bet. So, yes, if I can type correctly today. Um, all right. So, it's I've had now
27:42
everyone who's coding with an agent has different opinions on this. you know, do you go yellow mode and let it run any
27:48
tool it wants or do you have to ask permission? I generally say don't do any git commands without me approving.
27:54
Um, I do have my agent run or or or at least type all my git commands cuz it's
28:00
just easier for me to to remember them. So, um, all right. Of course, we are already on main, but it's checking out just in
28:07
case. Uh, and now it's going to create a a feature branch partner relationship assessment.
28:14
Um, and then we're going to see it spin that up. And then you can see it marked it as complete, right? Um,
28:21
yeah. Now, and again, this is where it's kind of nice for me not to accept all these
28:26
diffs. Like, it's just nice like I can see, okay, yep, it changed uh 1.1 to checked. I didn't have to approve it.
28:33
Um, so we're just kind of rocking. So, uh, should I proceed? We'll say, uh, yes.
28:39
Okay. Okay. So, so I guess this third step of your system actually requires you to sit here and watch it code cuz
28:45
like you know normally I would go get a coffee or something like here. Yeah. And I think I may revise or this is open
28:52
source so someone should you know create a PR to revise this. I think you know when I shipped this uh we were on sonnet
29:01
37 um and I think with sonnet 4 you really don't need to handhold it you know quite
29:08
as tightly. Um uh which is kind of interesting. So we'll see it kind of uh
29:13
crank through a couple tasks. Yeah. Hey, so while while we wait um
29:19
quick question like when I was using cursor I could scroll back in a chat and revert any previous checkpoint, right?
29:25
Yep. And like uh I I with clock I I didn't Is there an easy way to do that or like with with AMP? Is there an easy way to
29:31
go back? If you use the VS Code um extension, you can revert. Um Okay. In our current CLI,
29:37
you can't. We're actually building that out now. Um, uh, but what's interesting is there's a lot of times,
29:43
uh, where if I'm pretty concerned what I'm doing is not going to work, I'll just commit and then I'll revert the
29:50
commit. Um, so, okay. Yeah. Yeah. Just use get to do it. Yeah.
29:56
Yep. All right. So, we'll say uh yes, let's go ahead and do this. We're now uh
30:01
messing with the database schema, which is always fun. I have to do a migration here which I don't like.
30:08
Yeah, the database is where things can get screwed up. Yeah, hopefully. But what's interesting, I mean, but again, this is where if if you're, you
30:14
know, working from a PRD, you have a pretty detailed task list, you know, if you're going to have to change the
30:20
database schema and do a migration, uh, it's most likely going to be fine. Um,
30:25
again, this is probably not the most exciting thing uh for you all to visually see, but I think seeing, you
30:32
know, real software development happening with an agent and the way that actually looks and works. Um, hopefully
30:39
it kind of gives you a a behind-the-scenes view um in that. I mean, this is still like infinitely
30:44
easier than like writing code yourself, right? I mean I mean like you know like the parent after 9:00 p.m. like I I I
30:50
can't write code myself but I can print these commands and you can click yes you can you can read
30:56
you know you can speak into whisper flow a little bit. Um so all right we're going to say uh yes let's keep cranking.
31:04
So it's interesting to kind of see all this happening right and see well how
31:09
much of your code do you truly read now? Uh how much are you relying on your tests? Um, and obviously
31:16
you want to be doing all of that. Um, but it's interesting to see how this is playing out. You know, I think we just
31:22
saw Mitchell Hashimoto, the creator of Ghosty, you know, one of the founders of Hashi Corp, um, recently say he's
31:29
requiring all, uh, PRs that were AI assisted to clearly say so.
31:35
Oh, okay. You know, which makes sense. And a lot of them do. Now, it says, you know, co-authored with AMP or co-authored with
31:41
uh, Cloud Code. Um, so I mean that's like that's gonna be like every PR management. I don't know.
31:47
Yeah. Yeah. So that's what I said. I think it's going to be like 99% um uh and we'll and
31:53
we'll quickly get there. Let me ask you this while we're waiting for this thing to generate like you you taught like a million people how to
31:58
code, right? So like but but like I'm sure when you taught it it was about like learning loops and learning like you know functions and stuff
32:04
and now like do you think this this is the better way to learn how to code? Like you just get to build stuff and then you ask questions about the code or
32:11
Yes. Yes. How would you learn how to code now? Yeah. Well, what's interesting is you're basically coding with a tutor now,
32:18
right? That's right. And and it's really down to the student about about the depth of their
32:24
knowledge, right? You know, as you know, I'm just going to keep this going. Um, as you know, you actually don't need to
32:33
understand the code to actually ship. Now, now you should, right? Because that's a little scary if you're shipping
32:39
and you have no idea what's actually happening. But you could technically do that. But but the problem with that is
32:45
that's sort of like it's sort of like building a house and you have a robot that knows how to use a saw, right? And
32:53
it's like, okay, well, you could do it, but what if things start to break and you have no understanding of how, you
33:00
know, the plumbing was put in or or or why that wall is there? So I think
33:05
there's this very valuable um very very very valuable skill in understanding
33:11
code still and I think that's going to last for years but how do you learn it is the question so I think you know if
33:17
tree if AI had existed at least large language models had existed when I was running treehouse it would have been
33:23
completely different and and what we would have said is okay the the learning experience is that you're going to sit
33:29
down and you're going to chat with AI about something you care out, right? Um,
33:36
let's go ahead and keep this this going. So, should I proceed with adding the TypeScript types? Let's do it.
33:42
Okay. Um, and so you would you would say, you know, what's something you care about? You know, is it Warhammer or is
33:49
it basketball or is it sewing, right? So, you pick a topic you care about and then say, okay, well, what's something
33:55
we should build for that topic that you care about, right? So, if it's sewing, you know, maybe you want to build a
34:02
program that helps you design a pattern, right? Or say it's about basketball,
34:07
maybe you want to track, you know, your uh favorite NBA all-star and keep track
34:12
of their stats and have them loaded on your screen in the top right. Right? So, the key is to build something you care
How to get AI to be your tutor to become more technical
34:18
about, right? And and so, I think everyone's like, "Well, I don't know how to code or I don't know how to build
34:23
with agents." just say, "Pick something you care about and talk to an agent about that, ask them to build it with
34:29
you and explain as it goes, right?" Um, and I think that's the way people are going to learn uh in the in the
34:36
future. Yeah. You should you should make a new uh three-step system for learning with AI. There we go.
34:41
So that explains like, you know, the architecture and everything. That's that's my next idea. Thank you. I'm going to steal that.
34:49
So now we're running some tests, right? and and seeing, well, is what we built actually going to work? Um, I'm not
34:55
really paying attention to the code. Like, obviously, if I was coding, I wouldn't be chatting to Peter and sort of, you know, not really paying
35:00
attention. Um, but, uh, that's what's happening now. So, this is
35:08
sort of realistic. Um, when can we get to like if we do step three? you know,
35:14
step we got to get all the way down to step uh five to see some UI or Well, we've got so we've got the
35:19
assessment question uh questionire UI in step three. Um and so we're on step 2.6.
35:25
So I think uh pretty quickly we're going to get to 3.1. And probably what we can say to um the AI is I actually want you
35:34
to create a static version of this so I can see a mockup of it. Um, and I may go
35:40
back and actually revise this workflow a little bit because what I am learning is it's sometimes better to have the AI
35:47
mock up a completely static version of the UI first, you know, no
35:52
functionality. Um, uh, just use Tailwind and then show it to me, right?
35:58
Y, and then that will actually flush out a lot of confusion like, oh, wow, I didn't mean that or or this is terrible,
36:04
you know, let's not do that. So, um, yeah, I think that's best practice because like it might change the database for something that you actually
36:10
want in I don't even care about that. Um, so so
36:15
what are we doing? So, uh, let's go ahead and I'm going to actually interrupt this because it's just it's it's basically doing what we want, which
36:22
is iterating through these tests. Um, but actually going to stop it and I'm going to say, um, I actually want to
36:28
skip to step three and just view the UI. uh do a static version of the
36:36
questionnaire UI just so I can see it and kind of make sure we're on the same page.
36:41
All right. So, AMP's going to say, "What? We were doing this whole process like what what
36:47
are you doing?" Um but what we'll do is we'll get hopefully um is uh Untangled your app like live and
36:55
people are using it to manage their divorce. It's brand new. So, we're basically uh
37:00
we I essentially launched our first ads today. Exciting.
37:05
Yeah. So, if you go to untangle-us.com, you can see it. Um you know, hopefully none of you listening are going through
37:11
divorce. Um but if you are, you know, you can check it out. So, actually, while this is building, um I'll quickly
37:18
uh show you what it looks like. So, Untangle is a app uh to help people get
37:23
through divorce, but it's just for Connecticut. So, I think this is a good example of um the myriad of of startups
37:32
that we're going to see where people solve a very specific vertical problem,
37:37
right? And the idea is, you know, divorce in Connecticut is not a sexy startup
37:43
problem to solve, right? Um but the point of all of this is that this is a
37:49
specific market that I think that I can help a lot of people uh with. And so I
37:54
tackled it and I think we're going to see thousands of startups like these. Um so it's going to be fun to see how it
37:59
goes. And is only connected because like connect has different rules from other states. Yeah. So so if you haven't been through
38:06
divorce, you you know this, but forunately if you have you're very aware that the divorce statutes are are very
38:12
different in each state. Um got it. And the kind of painful thing, the reason why I showed this like pile of PDFs is
38:19
because in Connecticut there's 14 divorce forms with 277
38:24
unique fields that you have to fill out correctly. It's a nightmare, right? Um, so there's
38:33
a lot of fun features to build here. So that's anyway that's what I'm building. Um, that's what Entangle is. But let's take you back uh to the code and see how
38:40
it's doing. All right. So, we are back uh with AMP and Neovim inside of Ghosty.
38:47
Um so, it said it's create a static version of the of the relationship assessment questionnaire UI. Here's what
38:52
I built. Uh all right, so we're actually going to um let's create let's get the
39:01
let me see one second. All right, we're going to start up the dev server.
39:12
All right, so we're running over on 3000 and then I think it said the URL is case new relationship, right? So, let me hop
39:20
back over. All right, everybody. We're back in a browser and we're going to go
39:25
to localhost and we're going to fire this up. So, we just started the web uh webdev server
39:33
and I believe it was case let me just check.
39:38
It was at case relationship
39:43
case new relationship. All right everybody. So we've got the
39:50
web developer sorry the web development server up and running and you can see the very basic UI. Um obviously this is
39:57
not rocket science. Um you can see okay we're doing a relationship assessment. Um we're asking how how would you
40:05
describe your communication with your spouse? So, Peter, how would you describe your communication with your spouse? Uh, let's see. Generally can
40:13
communicate. Not close to divorce yet. Yes. Okay. Good. Uh, how willing is your spouse to cooperate on divorce related
40:19
decisions? Hopefully. Hopefully completely uncorrotive. Hopefully, you know, it doesn't happen.
40:25
Hopefully because you're not getting divorced at all. How would you describe the level of conflict? There is um I think uh low conflict with
40:33
spouse, high conflict with the kid kids, right? Low conflict spouse. That sounds like every uh every
40:39
parenting marriage relationship in the world. How would you describe your spouse's emotional state regarding divorce?
40:44
Yeah, she'll be disappointed. Like, you know, she's married to the best person in the world, so she'll be so she's probably extremely upset.
40:49
She'll be very upset if it happens. Yeah. Okay. So, there we go. Okay. All right. So, unfortunately, you are high conflict
40:56
because she's very upset. Oh, okay. Okay. Because Okay. Yeah. Okay. Well, I I don't think I'm the
41:01
target audience. So, yeah. Hopefully you and and no one watching is my target audience. So
41:06
yeah, but you can see, you know, the basic process, right? So I I think actually what I would do is encourage people and
41:12
I'm actually probably going to go do a poll request on on my own repo here is is actually add the UI generation at the
41:20
beginning, right? As soon as you do the PRD, um because then you can flush out a lot of these uh a lot of these issues early.
41:27
So yeah, this is this is awesome, man. So, I want to talk a little about the right problems to solve as an AI solo founder.
41:35
Like, I actually really love the fact that you're doing this uh, you know, Connecticut divorce problem because
41:40
like, you know, like all all the 21 year olds are like, you know, I don't know what they're doing. They're like building fancy AI coding agents or like
41:47
Yeah. in in in San Francisco, right? But like as a solo founder, I think solving like
41:52
a super high painoint for a niche audience that's willing to pay a lot is seems like a really good fit, you know,
41:58
like how do you think about this? Yeah. So this what's interesting is I I didn't have an idea after Treehouse was
Pain pills vs vitamins: Why divorce is a great AI business
42:05
acquired, right? I because as everybody knows when you start a company, you have
42:10
to be passionate about a problem you want to solve. Um and you can't magic that out of nowhere, right? And so there
42:17
was a a period of time I was like I don't know what to build, right? Um and then that's why I joined Intel. I
42:22
thought I'll just go learn about silicon, right? I don't have the idea. Um and I also want to learn how
42:28
enterprise companies work because I've never worked in a massive you know 100,000 person company. So went and just
42:34
learned and then you know when I saw my sisters go through their divorce I was like why is this suck so bad? Like why
42:41
is it so expensive? Like this doesn't seem like this should be happening. Um it and it seems inongruous and I think
42:49
as a founder whenever you feel that feeling like why is this like this? It it shouldn't be like this that's always
42:56
the seed for the idea and and you can't unfortunately you can't manufacture that moment.
43:01
Yeah. And and I I think you're right like this is not a sexy startup idea right but
43:07
this could be a very real important company right because it's solving something that really really exists. you
43:14
know, you either pay $15,000 up to $40,000 for your divorce or you pay $300
43:19
for Untangle and then probably a couple thousand of attorney fees, right? Yeah. So, I would encourage people to think
43:26
about real problems in their life. Um, the last thing I'll say is, um, even though Trios was my most successful
43:33
company financially, um, it was a hard startup. And the
43:38
reason why is because what we were doing is selling a vitamin, not a pain pill.
43:43
And I'm sure people have heard this analogy before, but you really want to tackle a problem uh or build a company
43:50
that is a pain pill, not a vitamin. And what I mean by that, so learning how to
43:56
code is very some is something that you do because you want to get better, right? You do it because you want to be
44:01
smarter. You do it because you want a better job, right? So that's why it's a vitamin. Um whereas divorce is a pain
44:08
pill. like it's a it's it's an acute painful moment in your life that you
44:14
want the pain to go away, right? Um and so if you can find a pain pill, it's
44:19
always uh it's always a better business than a vitamin. So uh be be aware of that.
44:26
You were leading like 100 employees or something, right? Like so how would you say and and I feel like a lot of people
44:31
are kind of chasing that like they want to be in charge of a large team and so on so forth. So, how do you compare your
44:37
life back then to now where just like coding at night? So, I love, you know, not having 100
44:44
employees. Um, yeah, it's wonderful to grow a team and to take care of them and do the best you
44:49
can and and be successful and hire a lot of people. Um, but it it draws you away from doing um and so like I said like
44:58
you know in the beginning I was a solo founder when I launched drops. It was me. I coded it, you know, I did customer
45:05
se success and and marketing and I did all of that. Um, you know, and then you
45:11
fast forward to Treehouse where, you know, started it with a friend and then it grew and we hired and hired and I got
45:17
abstracted away from all the code. And I think we're now in a phase where you
How to start a one-person company with AI's help
45:23
absolutely can be a oneperson company. Um, and you know, the size of that
45:30
company may not be as large as as a company with 10, 20, 100, a thousand
45:35
employees, but that maybe isn't what you want. Um, and so with Untangle, you
45:42
know, I specifically decided to build it myself. Um, and I decided I'm going to
45:48
bootstrap it and and I'm going to do everything myself. And it's just joyful
45:54
like to be able to ship and build and know and understand and go as fast as I
46:00
want. Um it's so amazing. Like what an amazing time to be a founder. Um now why
46:07
did I join AMP? Because I want there's another part of me that wants to empower
46:13
as many people as possible to do what I do. Right? If if I can empower a
46:19
thousand, a million, you know, 10 million, a 100 million people to do what
46:24
I'm doing with Untangle or to ship better software inside of uh their team and get a raise, you know, to build
46:31
things that truly change the world. Like, what an amazing opportunity, right? And I wasn't going to go build another,
46:37
you know, coding agent company. Um, so it just it just made sense to build Untangle inside of AMP, you know?
46:43
Yeah. I I I I think Antgo has much higher chance of success than another coding agent company. So
46:49
yeah, I think the the battlefield is pretty set on the on the coding agent battlefield. And you know, I I I believe
46:56
AMP has a good chance to to win that, but it's going to be a battle, right? Um so I think this is really important, man. I
47:02
I think um a lot of people haven't realized this. Like um now is a better time to be a solo AI founder than any
47:09
other time. And you don't have to like go raise VC funding and do all this great crazy stuff, right? Because like you know if you're like a CEO of a 100
47:15
person company, yeah, you're probably just in backtoback 30 minute meetings again like all all day for like nine hours a day.
47:21
Yeah. I think I don't know if you can talk about this, but like it depends on what kind of lifestyle you want, right? And you know how much money you want to
47:27
make. Yep. I think this is huge. And I want to give, you know, credit to Jason Freed and DHH because they've been saying this
47:33
stuff for like 20 years, right? Yeah. where the idea is, you know, you can
47:40
build a wonderful business that unlocks you financially and is much smaller,
47:45
right? So, you kind of imagine, okay, well, say that I had a really well-paying job, you know, as an
47:50
engineer, um, and I had, you know, benefits and and a 401k and,
47:57
you know, how much money would I need to make per year? Um, it's like a reasonable amount, but it's not millions, right? And then you think,
48:04
well, wait a minute. Like, if I build my own company and it's basically me or me and a contractor or maybe me and one
48:11
employee, you you don't have to build a very big business to have at least as an
48:17
amazing life as that. And then it could be much better because you just cash flow and become you end up becoming
48:23
wealthy. But the thing is you control your time, right? So people are understanding the value of your time,
48:29
right? And it may be sexy and exciting to be a a Silicon Valley founder who's
48:35
venturefunded, right? But the truth is it is insane. Like you don't control
48:41
your time at all. You know, you've got a board, you've got, you know, hundreds of
48:46
employees to take care of and feed and protect and you've got competitors that are trying to kill you and you have no
48:53
time, right? So, I think you have to kind of balance these things. And and it's interesting because I think in the
48:59
past I did want to build a company that was, you know, sexy and huge and and
49:05
people would say, "Wow, Ryan built this huge company." Um, and I don't care about that now. It's like I want to work
49:12
on a problem that I care about. I want to work with people that I respect and I
49:18
want to be able to control my time and take care of my family. Um, and that actually is the ultimate wealth, right?
49:25
Um, so yeah, more power to everybody listening that wants to build a company by themselves. You absolutely can for
49:32
real now. Like you don't need anybody else if if you are a Gentic yourself.
49:39
Wow. Yeah. That that's my plan for my kids to get on this track to avoid the whole rat race, you know.
49:45
Amen. Yeah. Yeah. We're all trying to like make our kids as agentic as possible. Yeah.
49:51
Exactly. And say, you know, if you have any question, ask an AI first, right?
49:57
Because it's very likely you'll get way further. And just one little sort of anecdote,
50:03
it's kind of interesting joining AMP. Um I think I'm on day 22 maybe now. Um you
50:09
know, and AMP is a big codebase, right? And and it's so wild to to all I have to
50:15
do is open up the repo in AMP and ask AMP a question and say, you know, like
50:22
where is in the codebase does this happen, you know, and it figures it out and then I'll say, well, which developer
50:28
worked on it, right? Um, and I'll I'll figure that out. And then I can go into
50:33
Slack, for instance, and ask much smarter questions, right? I can go to the engineer who worked on it. I know
50:40
exactly where, you know, the code is and what it does and I can ask a very intelligent, fast question that doesn't
50:46
slow them down. Uh, and this is this is just an example of one thing in life you can do like
50:52
apply that to anything, right? Um, we are so much more powerful now because of agents. It's just bonkers.
50:59
Yeah, I totally agree. All right, man. So, where can people find Untangled and also AMP?
51:04
So, if you want to use AMP, just go to ampcode.com. Um, the cool thing is, uh, you can sign up for free. We give you 10
51:10
bucks to to use it for free. So just have at it and hit me up an X. So I'm just Ryan Carson, right? So hit me up on
51:16
X, tell me you're using it. I'll cheer you on if you have any trouble. Um I'll make sure that we get it to the right
51:22
person. So try it out. Have fun. Um then if you want to find me, like I said, I'm just Ryan Carson everywhere, but I'm I
51:29
live and breathe on X all day every day. I love it. Um, and then if you wanna hopefully you're not getting divorced in
51:34
Connecticut, but but if you are, just go to untangle-us.com
51:40
and uh let me know what you think. Awesome, Ryan. Yeah, it was great to connect with you on X. I I think I have
51:45
kind of like a lovehate ratio of X, but you know, it's good to see you on there and uh yeah, thanks for walking through
51:50
everything. It's super p practical. Thanks, Peter. Appreciate it.
```