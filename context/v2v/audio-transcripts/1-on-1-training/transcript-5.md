Transcribed with Cockatoo


overview of the platform, how we track competencies, and a lot of that relate to how detections work and it'll relate to as we go through the lab. So you kind of picture in your head what it's going to look like. This platform that we're viewing right now, we call it Bravo. This is the platform that the service sits on GovCloud and it can hold CUI data. So this is where we build all of our content. And it sits here. 

Now, the on -prem PCT version, if you're familiar, looks exactly like this, right? Actually, when I highlight it, the lower says PCT. So, this is UKI's learning and system that sits on PCT, sits here on Bravo, and then there's another version here. We call it Alpha. And this also sits in GovCloud, Amazon AWS GovCloud. And this is delivered for Silicon. 

So, it doesn't say PCT because it wasn't funded by that. The only difference here between the two platforms is they get their IML, Hackbox, anti -stipend through this platform. AuthSec is not up right now. So they can access all the JQRContent we built for Abercrombie is also here. So they have complete access to that. They don't have to pay for it. 

It's kind of a nice thing. A lot of the PowerShell stuff we've built for the Navy is also available. And things that they pay for are available in Bravo. When we publish, we publish the whole platform. 

at the same time. 

Bravo just doesn't have access to these. That is provided through the on -prem PCTD. And then I think you guys get exactly where they do the logins, right? The larger Navy gets them through, or all the services get them through the PCTD. One of the things that the LMS provides that was a requirement, and this is just to be honest, if it's going too much, just let me know. It's kind of work role tracking and competency. 

So the JQRs are obviously the biggest thing for CyberCon that we deliver, and those map to line items on a JQR, and then those map to DCWF or NIST, whichever one's relevant to the line item. So what you're seeing here is all of Army Cyber and their work role status. So quickly, right, you can see they have 199 that are in progress on network basic, or host, sorry. Oh, and 206 completed. Army is the biggest user of this because they use it in their schoolhouse. The students that sit there can use it. 

And then we have all the services, right? You can kind of click through. So as you do content, if you were, if you, you know, so this is one of our lab developers. He's going to be a bad one. Bad example. He is. 

It looks like representative wise is, so I've had all these work roles and these are all the line items. These are all the line items that I have completed through the training. And these are awarded through two means. So I didn't get as far. I haven't completed it. They're awarded either through the labs or through static assessments, you know, question answer. 

And I'll show that real quick. So when the data is online, you will be assigned, right? You can assign a training center to be assigned. This is where they're, they kind of live at for their stuff to call training center. There they can open a test, they can open the basic training. When we go to the, after this, we're gonna go into the static content. 

This is some of what the static content looks like. It's very academic. It's kind of read, breakthrough. It is what it is, but it is important. Static content that we're gonna test on. We try to introduce a lot of concepts. 

within the static content before it goes to lab, so it's not the first time you hear that. You'll see like CTI in this case we're gonna talk about, right, Cyberthreat Intel. So we'll talk about it, you'll see it, and then when you go into the lab you're gonna actually have it, right? We're trying not to introduce topics in labs that require a lot of explanation. And then at the end of the lab, or at the end of the training, you have knowledge checks, you're gonna check on that. These don't count for, these will not work competencies or line items. 

They're just knowledge checks on topic, but you have to do an assessment to get awarded that. And then we have, this is how the lab works, right? We have stuff right on the left. You have that screen to the right. In this host analyst, you have two VMs that you will be using for the training. Scrolls down, gives you instructions. 

The host analyst one has a lot of scripting. It's a lot like deployment of agents. So we will provide scripts. The senior one does get more difficult, right? The scripts may not be accurate. It may not work, so team one's got to fix it out. 

A lot of people don't like that. There are questions, answer them, and then in this case, it's going to track how many questions you have answered to make sure you get 400 % and these are our attacks. The first detection we have, I'm just going to demonstrate it real quick. It's a simple one. It is open up web event viewer. 

Is it event viewer? 

Yeah. Type event viewer, right? So this one, because it's really good. So the first detection it wants, right, is just open up event viewer. And then it shares it and gives you credit. 

It'll work the same way in assessments. 

Detections will work the same way. 

So when we talk about detections, that's kind of what they are. I know that's a very basic detect, and there's obviously a longer list of detections we can do. The first is to validate that the consumer, or in this case, the customer, knows what they're supposed to be doing. 

And so instead of just solely relying on question and answer base, it is the user has to actually conduct whatever that specific task is, and we validate that based upon a number of different things, like there is a lot of things going on. 

I have a question. What terminology do you use to determine if they can perform it? 

And I ask that because in the U . 

S. 

, you know, normally it would have some verbiage like, performs X, Y, Z. Like, what are you calling that? 

Lab? To perform it? 

Or what is this section? 

they can be interactive to know that they know how to find a threat. 

So that would be in our assessment. Can Dewey do it like in a detection or question or? 

Yeah, because to me, we can say that the satellite is pretty interactive and they have to actually demonstrate that they can find a threat. So I know the question is slash AQRs. You have line items that say, did you perform X, Y, Z? 

What do y 'all call them? 

Is it lab? 

Is that in the assessment? 

100%. In the assessment. Yeah. So the Cybercom JQR is now, we have CS . JQR, but the Cybercom AQRs, we literally just took a line item, right? And then we draw up what the user action is to do that. 

And sometimes you can't have user action. Sometimes it's just a question. But you may need the lab to answer that, right? Like, what port is that guy? 

Yeah, right? 

So we'll ask the questions. 

You will have to do a functional lab to get that answer. Yeah. It's... Okay. Yeah, you might have to pull the... copy the hex and then paste it into the question form to show that you got that. And you walk through those steps to get the answer. 

And it might be good to highlight that there's training labs and then assessment labs. So you can think of it like there's a training course where you're having static content in a lab that guides you through the activities. So the detections show, yes, I formed the training content. But then there's a whole other assessment course where they'll have assessment questions for the static content in a lab that is similar, maybe different, maybe abbreviated, maybe it's an extension of the training lab. So the labs should be building blocks in order to get to the culminating event, which is the assessment. So like Dan was saying, once you get to the assessment, You shouldn't come across something for the very first time in that. 

You might have to take the knowledge that you learned in lesson one, lab one, and like, but that should never be the first like, oh, we never learned how to do this. 

Your topic's never, we think of that in the beginning, and now we're gonna need to do something completely different. 

That's not really the essence that you crash for. 

So it's all building blocks, leaning towards the assessment. 

is bringing people to take an assessment. That makes sense. I mean, we've got the training lab. Why, like, wasn't it to determine the fact that we said, yeah, we're going to do an assessment? So I'm going to kind of, we don't do that. What we do is we put a control mechanism in. 

So students have the ability, which I didn't demo. We call it universal course catalog. It's on all the PCT. Students can come in and just enroll in a course, right? So they can do this JQR. They can do some of the CQTT stuff. 

What they can't do is self -enroll in an assessment. So there's like a foot permission, we call it training manager, and then whoever runs the command or whatever will be training manager. Those people are usually designated in the real PCT too, I believe. So they're usually just the same person. And then those people will have access to our instructor guides, which we build. And it's kind of a little bit of a footstomp. 

What we're trying to do with this, 

is allow if you want to facilitate this as a course, right? 

It's like a facilitator guide, instructor guide. 

It's got all the answers and some talking points, some troubleshooting stuff, right? 

I've worked on that. So the training managers have to request them. They assign it. So you can go in as the training manager, distract your partner, and then when they're ready, and they've completed all their coursework, then it's time to do the assessment of that paper. 

How have you seen those metrics? 

I'm sure it's asked for. 

They've been asked for. 

I'm sure the metrics are saying, yeah, this person checked all the boxes out. 

Yeah, definitely. It's what they find. Yeah. It's something that works for them. Sure, we need it? Yeah. 

I mean, we'll probably build an NC . org directly, if that's what you guys want. probably something to talk about. 

But like for the Navy right now, right? 

So overall you can see they have 25 people involved in the host analyst. None completed, six in progress. Yeah, I mean, is that kind of what you're asking? 

And then if you want to see the individual, right, status. 

So if I went under where Tiffany Adams is, I can see she's 0 % with Basic and she's 24 % with Senior, yeah. If you clicked on that one in progress right there, sorry, will it go down a little bit further and see which? No, it won't. Okay. If you click on her, you can get a little bit more granular, right? 

She's not been awarded any line items yet. Training, she is active. You can enroll. You can enroll in the training anytime. We don't put a bar on that. You cannot self -enroll in the assessment. 

Competencies are only awarded during assessment. 

Like if you're already considered senior, do they have to go and complete this? Or if they're already basic, then they jump into the senior and start going from there? 

We have no control over any of that. 

Everybody just asks for a basic and senior level JQR for those workloads. 

And we're currently, like you see, we have host analysts, we have network analysts and a network technician. We're currently working on data engineer and ASO, and that should wrap up. DCOTQR requirements. 

Went out to the airport and also doing a lot of it in the schoolhouse, right down the schoolhouse. That's why they have a large number of Marines. The Marines are just getting online too. Shake that crap up. So I didn't just want to highlight, like, this year when we're starting, that is how it'll be presented in this fall. We didn't put a static assessment. 

We want to pull up a static assessment. Oh, yeah. So let's show you what a static assessment is, because that's... That's kind of a decision we will need from nc .exe on how you want to grade them. Obviously, don't make them now. Put you on the spot. 

We want to talk about it. Didn't I have one on? This is an assessment AL1, right? So this will hand out competencies once submitted. And it's got a submit button. And it will warn them if they cannot answer all the questions. 

It'll tell them to answer. And then training. So these are the static things. that are built off the static content to make things 40 questions. And if you look at on the left, there's multiple of these. There's some that are 50. 

This could be very long, like painful. 

It's kind of what the Army was the lead on this one, I believe. Post -analysis is kind of the way they went with it in Cybercom. Now, I mean, this is what it looks like, right? It's going to tell you what line item it's attached to, right? So you can kind of just line item a question, see if that's the right answer. It tells you you're incorrect. 

What should we do? The thing with being right now, this is E, is the way CyberCon wanted this to happen with third JQ bars is it's all or nothing. So, you'll take this exam, what it'll do is everything you get wrong based on line item, it'll read, it'll ask, it's gonna give you a second attempt, and it's just gonna ask you questions amidst the line items, right, questions about the line item. Fail that, and by fail that, I don't mean you get one wrong, fail the whole thing. 

No competencies are awarded. 

There's a lot of heartache and force about that and we kind of take a brunt of that. 

We have a little bit of a technical limitation. we have to award all the competencies based on the exam or the lab. So if we tie five competencies or five line items to like this one, if we say 80 % is the threshold, you will be awarded all five, even though let's say you got one line item you just didn't know. 

It's all about the score of the questions. 

Can you answer that? 

Yeah. So all the questions, they will retain our variance on the question. 

So it's not exact. 

But if they were to fail this retake, they're going to send me all the same exact questions. They want to ensure that every, in this case, a sailor, gets the same exact look at the lineup, right? 

Whereas we do 100 questions, one question may be harder than another question. And, you know, if somebody gets those, 

those... 

Yeah, so to your point, the things would be on competencies, on line items. If you don't want that, I'm just, that's kind of where this answer was. 

They want every soldier to see the same thing and not have a weird one question is harder than another question. 

and polygons, seeing what the embedded properties are. tests are a reflection of it. Right now they don't do it that way. They don't pull the same test each time, when it's not like a failing question. We're digressing. Let's go on to the actual thing you want to do. 

If you guys have an option to work for static assessments, would you do multiple static assessments or would we just do one and compile it all? 

That's up to you. 

Yeah, we'll come back. We're not at that point anyways. So we're going to go to the static content real quick, kind of talk about what really high level, which each thing is, you know, sure. From the last meeting, we made those adjustments, right? Remember the DOD knowledge and all that. Yeah. 

Although what we have right now is four models that are one thing or two. 

This is just a wheel call, whatever you want. Bye. One quick background, Austin and I, we're tired of that NCDP, we both deployed, so a lot of this knowledge, we've both experienced, we have a lot of people in here that probably deployed too. We all know too that NCDP really lacks black and white training, right? We all kind of agree with that. So, please take a look through the training. 

A lot of this is based off of actual doctrine and training, but I've also tried really, really hard to get as operational as possible. 

Right, so this is totally draft, it's not complete by any means, so if you see stuff you like in there, mark that, you know, whatever you don't like in there, write about it, let us know. We have the amount of pictures and everything right now. So, we get sent off topics. This is just, this is just kind of the really high -level talking points. So going into it, what we wanted to do, again, was provide mission relevance. So we try to provide scenarios. 

A lot of them are just like hypothetical scenarios or situations, really hard to find. Intelligence reports and stuff don't really exactly do the shifts. So we try to do that as much as possible. Hey, this is the content. This is why it's important to you, right? Next one is we try to, in throughout training, we bring up a lot of the tools that are okay. 

So, again, operational relevance, okay, where are you going to be famous, how are you going to be famous, and again, static content, so we're just going to bring some of those ideas. 

Static is just really kind of a reinforce what you're going to be doing in the interactive labs. So, again, we want to be able to see how stuff is going to look like the first time. And then we used doctrine, so there's not a whole lot of doctrine out there as far as CDT was used, so we're fine, we'll bring that in there. Right? Using lighter cyber attacks, crocheting, stuff like that, doing mass apparel, thinking about your animals, right? You see something, okay, now what's next? 

So using those to kind of get a start to take my hand on this, and not just a concept, right? Like, what is it? Okay, I've got a spearfishing mural. I'm done. Now let's start having more questions, and this will kind of help Daniels ask those questions. So I'm just going to go really top level, and again, look through here if you have questions, bring it up with lessons they're covering. 

We hit heavy on cyber -threatening intelligence. In there, we want to bring up above the sea ox and to utilize that threat intelligence, we're moving into a new AOR and things like that. Pulling those indicators of compromise. How are we visualizing? How are we reporting? So this just kind of hits a couple of CTIs, and then we go into APT activity, life cycles of attacks, really kind of just top -level stuff. 

practices or trying to incorporate a lot of those key items in there. So we've got to go into ITOT services, kind of explain some things you might still understand, right, how that might work. because we actually only keep it out there when we're on a ship. So it's very hard for them, and, you know, what's the environment like? We go into enterprise protocols, talk about float networks. The way the architecture and how you implement CPI on your weak point within a network, they're really important. 

How, you know, what's your biggest attack vector? It's kind of recognizing those things as an analyst. We go into gated controls. Key cyber terrain, I know we tried to keep that possible. They probably need troubleshooting or additional requirements to somehow change or somewhere in the past they would at least have a base in the office or just have seen it. And here, again, we stick top -up. 

We try to embed a lot of other documentation straight from Splunk, Elastic and whatnot, so if they need those other additional resources, it's right there in the training and they can just pull it out. They won't get another bring -out by the dashboard. It's all embedded in there in TDS. So this was a very kind of technical one. It had DOD, cyber, so event classification. I'm probably going to move this one out. 

It didn't have to do with all categories. You may have a lot of analysts who don't know what CPIRs are. You can work from that faucet. When this should bring that up, dealing with the team lead, those are important topics that should be talked about. This is really getting into, you know, The actually like analytic code works, we talk about the packet inspections, deploy log analysis. Again, we make a lot of notes in here, validating network maps a lot. 

If you can't do this on the road, they have to coordinate with the ship, they have to coordinate the IPs on board. So there's a lot of notes. And then the train says, hey, these are things that you can do, but you have to build those relationships to get that, right? It's not just allow, you know, ADP will get the ship, the banners, the blocks, some don't. It's just the way to go. So at least they know where to go and get it, when it can be used for, why it can be used for, why they should get them. 

Yeah, it talks about, and if you go through it again, you'll see it kind of connects everything with the kit. So it'll talk about the tools, where they're going to see, and they can use it within the kit. Some of the stuff they probably might know already, so it's really kind of coverage if you feel, hey, we need to dive deeper into these things, we can definitely do that. This one we have yet to write yet, so you're not actually going to see anything. It's a lot of time. Very assorted type of topics, and as we write it, it might be integrated from where I was. 

So this thing right here is like a joint marketing lifestyle, like another type of architecture that we can use with that overall. incidents on a ship or anything like that and build that up, work with incident analysts, work with ACW guys, network analysts, and kind of put that out there. So trying to, again, make permitting relevant to NCP. So throughout the training, you're going to see a lot of NCP, ACW, incident, a lot of the watch data and stuff like that, how to utilize that stuff. They're very strict on what they can do. They have a lot of resources, a lot of things they don't know about. 

So that's overall. 

Try to put as much stuff into the labs. We want the interaction, right? 

So again, this is very basic stuff. 

And as we go through and we can say, you know what, we can kind of fit this in the lab, then we talk about it and we'll go ahead and move into a lab. This way they can get a lot more hands -on. But most of the core stuff, the potatoes, we try to put everything into a lab for interaction. 

Once we have it up here, we can show you some of those things. 

Any questions on the static content? The big question is, how do you guys want the assessments, right? So that's that. 

But everything, every single topic will have a question and will be set up online. 

The question on these lessons, right, how are they structured? Oh, okay. So you're going to have, if you agree, you'll always have the conceptual idea of what we're trying to put across. And then if it's good enough, then we put operation problems in. And there's a step -by -step process. We learn how to break that down. 

Going into the third lesson, there's a lot of long stuff. So we provide a lot of that coding. Like this is a really simple what you would see, how you would write it. And then we also do that embedded PDFs. So they actually have more detail. We don't want to flood it with tons of scripts and whatnot, so we kind of put that off to the side. 

So, and we try to go in there with that mindset, and that's what we do for writing. It's like, okay, here we go. We'll say right in there, I'll reach a little bit out there, or I'll add a scenario in there, and we try to use, you know, Again, it was just difficult to find one that was specific to Navy ships. It was a short manned or, you know, not a big stuff. So, big crystal ball type of vehicles that we could, you know, it's very likely or, you know, it's possible on the ship. I think that was the last one, just a summary kind of covering some of the, basically what we kind of talked about in the beginning. 

Another thing, too, is within there, There's always that, of course, action that goes like step by step, right? You get that, and then at the end, it'll say, okay, here's like a footnote forward. Here's that action to keep in mind as you're going through this process and kind of like summarize a bit. 

You know that text can get boring. 

We're going to try to interact, put as many pictures in there as we can to kind of break things up. We just didn't want it to be that, you know, Like it's just a statement, a definition, moving on. 

Definition of something, moving on. And you really learn from that. It's really hard to learn from that content. So here's that operational relevance of really where we're trying to focus on. That's all I have. 

Cool, I'll just bring it up. And then, do we have anything from the Teams chat, anything from the feed? Awesome. This is in, right? Yeah, there it is. Yeah, so once we get this up, I'm going to start publishing. 

We'll probably, we can do virtual, right? If you have people that want to run through what it looks like, where it's at, we can do that. We'll do that pretty early. 

Yeah, it's still at the course publish yet, so we didn't really put it. 

Alex takes over, we'll talk about the labs and kind of like the phases. 

that we kind of designed. 

We kind of went with the approach with the crawl, walk, run. 

And it starts with the first phase being strictly, they get on to a team, a part of a ship. 

What do they have to do first? 

Well, physically it's a lot of grooming. 

The kids building out their dashboards on the kit, getting everything ready, what that looks like. 

So that's the first phase, we'll bring us through that. 

The second phase is once your dashboards are set up, your kit's where you want it to be, They're checking off those alerts, monitoring it, getting malicious or not, moving on, right? 

What are you doing? 

You get thousands of hits every day. 

How do you deal with it? 

standard you provide them for? 

I don't believe there's any that are pre -loaded into the kit. 

Okay. 

So, Ms. Zalewki, do we still then provide them, hey, here's what you will load onto the kit, or is it 

send them out and say, yo, how are we doing? 

And some portions of N3 Alpha confer with the team before they go out and get this info. 

Oh, I get it. 

Why aren't we showing how students can split this up and help teams figure it out? 

That would be weird. 

I want to make sure I understand. That's what it sounds like we're doing. Yeah, there's nothing preloaded behind it. 

It's true. OK. So we get an early case. That should not be an easy case. OK. So if anything you ask me, this will teach you how to quantify, right? 

We'll come to you. So, yeah, day -to -day operations covered in the phase 3. Phase 3 for things that are a little bit more serious. You know, get over the AOR. What you want to do is, you know, reach out to the MCU and say, we've got some in -cell reports of what's going on from here. What do I want to do with that? 

Right? So that's where phase 3 comes in. And then that's a very important kind of look out for. So now you've got to learn how to pull those IFCs out of there. put it in a dashboard so they're way up in there to make sure you're aware. Now, phase three, we'll go through that, right? 

So a lot of CTIs and building those phase four projects really is representing where these 380PT have to be, right? So we're talking CCR, you know, area. Go through that, go through that whole scenario, and then phase five is the reporters. Again, I'm talking about walk, crawl, run, right? Bring it through, and everyone will kind of play a building block to the other. So I'll let Alex go ahead and take over. 

Yeah, so I'm going to try and focus on what it is that we're talking about. I know this is probably really small. for those in the near future. I do apologize for that, but just kind of reiterate what Jesse was saying. As he said, we're calling phases. There really is just one scenario that we're taking the learner through, start to finish, like a crawl, walk, run, going through all those different steps. 

And just for the training, we've broken that into five different phases, right? So same environment, same kind of situation, which kind of help and guide them through those steps that he is brought up. So that's why we call it phases. We've got the box here. I've tried to find it for our information, see what's the input, what's changing, what's the output, and then what are they doing. Then before I start zooming into these things specifically, I'll just point out these little purple thing on the side. 

We've got data set one and data set two. That's just correlated to what kind of data are they looking at on the same environment. I'll actually go into what that environment looks like and how we're generating it. But that's what this is meaning, but it's all the same scenario. We're just, you know, kind of helping them piecemeal, taking them through that process. Like Jesse said, phase one, you're all up, you've got your kit, it's a blank kit, so a lot of that, you've got some generic environmental data in there, nothing malicious, just kind of day -to -day network operations, and like I said, you've got a base limit, I think it's called rooming it, so just kind of getting it ready and tuned to the environment. 

So with those changes, the yellow here, they've got their dashboards, queries, searches, filters, you know, they have an understanding of what that environment looks like. They've got a baseline. Phase two is you have the network data, now let's go look at it. So what's anomalous? EAPLs are specifically asking for any kind of anomalous activity or anything that's unexpected, anything that would spike off the baseline. So now they have those baselines in there. 

now they've got to look for it, and there's a couple of benign activity in the environment they've got to be able to pinpoint. So I just kind of bring them, okay, you've got your baseline, now we're applying it, things are working well, now we can start moving on to phase three. which is where they've been given some cyber threat intel, some IOCs for a specific attack they're seeing, and now they actually have to go tune the kit for that. So again, no malicious phenomena in the environment yet. They're just preparing for it. They're getting plugged into the kit so that when we roll into phase four and those new dashboards, filters, searches, and detections are run through the data set number two with the attack sim, Now they're going to start seeing some lights, you know, start blinking, some detections that are rolling in, and that's for phase four. 

They've really got to dig in and see, okay, what happened? What did I see here? What are all the different events that happened? Start pulling all these pieces together, and so that way in phase five, they can start condensing that into that report for them to distill all this information on, you know, what's happened here in this event. So that's kind of the methodology here. That's why we're breaking it into the different phases, and that's why we've got the different data sets. 

Again, I've got other diagrams. We'll see what that environment looks like, but I'll pause there and see if there's any questions or concerns just with the approach that we're taking. Kind of easing into the environment, the kit right up here. As I said before, we're constructing a very large environment that is representative of the canes, the moths, et cetera, that can actually collect that traffic from. We're loading that onto a security onion system, and we're just that system in Splunk in a Windows workstation. That's the only thing the learner actually has access to, right? 

It's a passive environment, passive network. They've got to go analyze it. Why I mention that is that, you know, cost -wise, we're able to expose this lab and these concepts with only a couple of hosts that they need access to. But we're generating it through this very large environment. But this is what that minimized environment would look like for the learner, right? They've got that security onion system, Splunk, they have analyst workstation, and then a sensor that they're able to pull PCAPs from. 

So if we have access to all the network data, we're just not having to pull all that large environment along with us. And then again, we've met with some of the kit creators and looked at a couple of setup guides. So we're basing this off of just a standard security 8 .4 install. 

with the Logstash, Lester's Kibana, and then a side Splunk server that they can query against. 

It's also ingesting the same Zeek and Seracata data. 

So, just kind of level set, that's what that is merging for. 

Yeah, I think it's like the 2 .4 and then I think 270 or something similar to that. 

But yeah, that's what we're currently working with and that's what will be spun up and then collecting that network data. No questions there. Host data, so like host logs. So the host could have logs, like the actions are really happening on hosts. This is a good discussion, because we right now, when it goes into the actual actions, we're not collecting them. Well, we'll collect. 

We were expecting to collect logs from a system, and then they, as a learner, would request those logs, and they'd have to use that to correlate against an action in the attack. So, they do exist. Yeah. Was there another question? Do you guys have any questions online? As you'll see, we do have, I'll actually bring it up here, the representative environment that we are currently building out. 

These are going to be like real, virtualized, real systems, but actual operating systems that will be generating logs, network traffic, etc. So whatever system or whatever component that we want to present those host logs to the learner to kind of corroborate the network data that they're analyzing, those can't be available. We'll just have to know where to pick it from and then give it to them at the appropriate time. 

So this, again, this is the representative environment that we've built. I say representative because it's not. 

We say canes, it's not a full canes environment, it's just really an environment that we've crafted that's representative of what's been told to us, but also allows us to demonstrate a full spectrum of the MITRE ATT &CK framework, which is actually what we've aligned the ATT &CK to. 

So that's why we've got standard workstations over here, we've got a couple of server subnets or security subnets. Importantly, we've got point -to -point from the canes environment to the NOC. It's also got a couple of enterprise -ish systems that we can generate some enterprise, you know, cross -point traffic with, and then through the NACA everything. actually then eventually filters out into the public Internet. 

So with that, we're able to create, you know, some SMTP traffic, so exchange -to -exchange, exchange -to -public Internet. Actual internet traffic is going to help us demonstrate some of those lateral movement, pivoting activities in the MITRE framework. So I'll highlight here that we're currently capturing traffic northbound as traffic is crossing the BGR into the NOC, and then also the two entry points into the server subnets, so like Workstation, the server you have visibility into, and egressing from the Cairns network you have visibility into. I'll actually go and bring up a modified diagram to show DATASET -1, DATASET -2, what it is that we're actually looking at, but I'll pause here and see if there's any questions or concerns about the representative environment that we're generating. We are struggling to figure out what that tap really looks like. But I think I gave us a thumbs up. 

So that was my decision. What you need to do is look at the path of the Agent 7s, monitor the standing engines, but then see if you can produce any less traffic, which is really the point with this Agent 7. As far as my eyes, it was four taps. We worked this out, two on the Agent S, two on the Batacom, two just for that. We didn't see all the traffic traversing in and out. So I'm trying to get inside the school. 

We can wait for it if you don't have the answer down. I'll move into the data sets. Data set one is meant to have, again, this is assumed to have a bunch of standard day -to -day network activity that's already being generated. I'm just highlighting what's going to be of interest to the learner. So we're going to be seeing all these workstations generating standard web traffic, both encrypted and unencrypted, from here to local web servers, here to web servers in Manila or other regions in the Navy, and then additional, some actual internet traffic. So we'll see a good variety of HTTP, HTTPS. 

And the same thing with email, right? 

We've got an Exchange server that will be on the ship, an Exchange server on the NOC that's acting as an upstream forwarder, so it'll see all the SMCB traffic go through there, and then you'll also have a web host that is serving traffic to Exchange, and then through an actual, like, Personal webmail point being you're going to see a lot of email traffic and I emphasize email events because that's the entry point for the attack, right? It's a phishing scenario. So we're going to make sure that there's a lot of traffic, you know, day -to -day, nothing should stand out except what we want to stand out. And so Dataset 1, after they've re -inducted the kit, they'll see two things that are kind of anomalous. 

One is an undocumented host. 

non -malicious, but just something that somebody's plugged into the network, it's not documented, they gotta see that, the spike, okay? That's an undocumented host. And another host here that's navigating to a website for the first time, right? So we've never seen network traffic go to this domain before. Why is that? Is that malicious? 

We need to look into it. Just something to kind of put a couple of spikes under that baseline they've established. So I'll pause there. Any questions on data set one? No? And then this here is like the meat and bones. 

So after they've got their IOCs tuned into the system, we have this attack scenario that is a miter just kind of highlight what the path would look like. So anything from the initial compromise to AD reconnaissance, file reconnaissance, privilege escalation. Pivoting within an environment, moving up a level of movement within the environment, data exfil, C2, what have you. Just kind of a standard attack progression to help kind of highlight, you know, this is what this would look like in MITRE. What would that be doing to this? How do I find the next step and start putting all those pieces together? 

So, at a high level, that's what we're trying to get after here. Kind of breaking it down, as I mentioned, the first gear is phishing email delivered to the user's inbox. They click on it, it goes to a domain that has been compromised, drive -by attack, JavaScript, falls down a C2 beacon, and now you've got C2 traffic that's going out to a post on the internet that's TLS encrypted. 

So, that's the initial vector. Once they've compromised, that C2 beacon starts doing some AD, domain -based response, so enumerating users, trying to find service accounts, finds a password in the description field for a service account or something, and then uses that to start moving laterally through the network, uses that to connect onto an SMB share, finds an SHP, that SHP gets sent into an actual Linux host, which they then deploy the second C2 beacon, which goes to a separate C2 infrastructure out in the cloud. From there, they're able to do slow XFIL, which is one of the EOLs that we need to demonstrate. 

And then once they have that slow XFIL, they move laterally within the server subnet, which is not visible to the apps. 

We said we had concurrent places, enter subnet traversal, so that little wrinkle there. 

Once they compromise this Windows IIS system, they're able to perform hundreds of chain delegation, request certificate from ADCF services to just obtain persistence. 

Nothing malicious happening here, just more of a persistence measure so we can demonstrate that aspect of MITRE ATT &CK. But the main focus is the machine delivery, the C2, the reconnaissance, and that slow X spill over that second beacon. 

So pause there, see if there's any questions or concerns about the scenario or how we're aligning that to MITRE. But this is what that, this is the network data that will be generated for that certain task set that they're playing with. I just had a quick question, not necessarily about the scenario or its alignment, which seems pretty intuitive. You did reference some of the ELOs, like slow exfil and stuff. I might have missed this, but where are those ELOs coming from? Are those coming from the network analysts, cybercoms, TMFGQRs? 

No, no, no. They're coming from the I don't know how to put it. The sound of different sounds works. Okay, gotcha. Thank you. The Network Analyst and Post Analyst JPR are separate entities. 

This corollary is closest to the... No, this is to you. 

This is the Cyber Defense Analyst JPR brought out by Cyber Command to develop. 

So, it's not going to look like Post and Network Analyst because it's supposed to be a discrete entity. 

We are using it to fill the gap with SVGIs because they have to do a little bit of both host and network and do it alone and free. So there's going to be some overlap between host and network application knowledge. From an internal or for us, how it would be is that, so first we go, how would we want to actually practice like the C2? Like I could not have them in the lab do a talk to somebody and make sure we're capable. Because if it's email and this is happening, they have internet. So they're not isolated. 

So they could talk to us. But that's how we want to structure that part of it. In the worst case, the IW wants to eat these people and then no longer talk to us ever. 

So we need to confirm and figure out what we want, how we want to fix that ending down. Does that make sense? Nothing for you guys yet. We need to figure out what that looks like on our end. 

I guess it's definitely the same thing. 

the information ends up what's happening, they can't. And so they say, I guess it's definitely this type of thing. 

So we figure out how do we build something that we actually know. You have to keep doing your analysis, but also make sure you're communicating with your machine, and the machine is talking to you. Yeah, I think there was mention of CCRR on the content side, right? Is that kind of, is that not strong? Yeah, so we understand that these things play a part, right? Obviously, in a lab, we can't We can try to represent that. 

We talked about that with like white party. We can put in a scenario and it's already communicated with the launch core VWC. This is stuff going on. Right, like, at this point, you know, I probably do a good job of running through those labs, but as you scroll through a lab, there'll be a question, so you move on to the next section. make them actually fill out that form, and that's the same as whatever reports could be there. So one, we can bring that up in the static content. 

We can give them the initial and the final. But if you move on to step five, that's where we're going to go reporting. And you'll see some of this, again, we understand it's a long time frame. We're trying to encapsulate that. 

And we're definitely looking for any ideas that help that long term. And that's where I just, yeah, fill in those gaps so I can get all the things that are happening behind the scenes that we'd like to implement in there. It's just one of the, you know, you've got all of the, you've done your analysis and everything, and you're kind of putting it together for your final report or yeah. Yeah, and based upon, it's been a long time for me, but based upon that IIR, there's different fields that are required for information. we can make that part of the checks for different fields. So it's not just a one answer, one question. 

There'd be multiple questions for kind of like each one of those fields to do checks against to ensure that they're getting the proper information that you require. Okay. the customer end, a lot of them are just houses. Locally, it can be as good as possible, but if it's not communicated correctly for validation, then it's only doing so much. 

And especially if that's being used to communicate with like the ship's company, defenders, I just, I think that's something that definitely needs to be stressed out. 

Back to that piece of communication and building those relationships over the ship, because if you don't have a good relationship with the ITs and you're just going off the other boats, You know, if it's a report about your agent input that has been found, then it may be lacking information. 

So we probably have a hard point. Hey, this is the stuff that they need. 

Make sure you get this stuff, provide it to them. 

We'll get those reports before the sentence is adopted. 

We're gonna try to get that form of relationship going. That was really the wrap for the labs. 

You know, if there's anything else you wanted to dig into, either the lab scenario, the resources, phishing, et cetera, or if we wanted to pivot back to the static content or the static training for assessment, I'm happy to do so. But that kind of wraps up everything that we went ahead on for NC DOC, right? Or do you want us to delete room and just have it up here? Can you just pull that up? Yeah. Do we want to leave the team's call open, or? 

We'll just tell them. Hey, Priscilla and David, can you get off the team's call? I've got it covered. Yep, sure. Everyone leaves. It's a team's representative environment.


Transcribed with Cockatoo
