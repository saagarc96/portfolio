Situation: 
Like most non-technical Claude Code users, I found myself reaching for Claude Code for lots of small tasks like scripts, text analysis, and eventually, even drafting documents after going through multiple call transcripts. However, I did not have a consolidated way of working with everything and wanted a single surface to work with everything. I also found myself repeating the same AI-based workflows over and over again – from analyzing calls to extract to-dos to managing up to keep my founder updated on what I was working on – and felt the need to consolidate all of this context so it could build on top of itself. 

Task: 
As the year wound down, I began experimenting with creating a single set of files that I could store all of my documentation and notes. At the same time, I began noticing how effective Claude Code in the web was and wondered if I decided to consolidate everythign into a single repository, could I actually have AI work on my non-technical tasks when I am away from work? 

Action: 

I first started by creating the repo and identifying the core file structure. The Claude.MD would serve as a guide to navigating the repository while a cockpit would be a great place to centralize all of the key decisions, open big ideas and concepts, and on-going specifics. If Claude ever needed to reference that information, it would be able to quickly read the file and use it as a store of memory. In addition, I also created a changelog that would track each commit to allow Claude to quickly track when we did what. 

From there, I set about figuring out how to get the most important bit of context into this repository: my calls. I initially wanted to setup a Zap that would listen out for any new Fireflies recordings and from there, add them to the repository and commit the change. However, it was never able to pull a full transcript and instead, just added a document with a link to a pdf, creating extra steps in this workflow. I ended up setting up a Github Action that runs every 2 hours to pull all new transcripts on my account and creates markdown files for each new transcript. From there, it commits it to the repository and once I did that, I was able to create a slash command, /ingest-transcript, that would generate a quick summary, determine any next steps, extract to-dos, and if need be, write a note to hubspot.This has by far proven to be the most useful aspect of consolidating my workspace with the ability to essentially never forget something discussed on a call. 


Result: 

As the month has progressed, I've added more slash commands and skills like one to generate a week end review to extract product insights, analyze relationships, monitor open deals, and also serve as a coach for me. In addition, I now let Claude manage my to-dos using a P0 to P2 system and it is able to dynamically adjust my day as needed to make sure things get out when they need to. The reduction in cognitive load has been immense and the intertwining of so many different systems with the use of MCPs for things like Hubspot or my Calendar or Email have made me stick with the tool instead of switching over to Claude Cowork. On the whole, I see personal productivity systems within a harness like Claude Code becoming more commonplace and the possibilities are really endless. Having all my work in one place also makes it easy to track just how much I am doing and to see where I may be missing points of leverage or overextending myself. 


Roadmap/How Would I Improve this? 
 Here are some ideas I have for how to improve this: 
 - A lot of our core business systems run in Notion and I believe setting up the Notion MCP is the next step to really have Claude manage more of my day to day. I would probably create a notion-directory.md file that would specify where to look for specific databases to make querying them more effective. 
 - I am also considering setting up a lightweight CRM within the repository. While I can use hubspot pretty efficiently and keep track of my relationships easily, Claude may have a harder time doing so and I think creating a structure format for it to keep track of all of the moving pieces may help it improve recall. 
 - A far fetched idea I have is taking my task management system and turning it into a backend and front-end where it essentially becomes an orchestrator for the running claude code instance. This would run on my local system and allow me to easily take tasks & assign them to claude. I already have a folder called to-dos for Claude that I use to kick off asynchronous, pre-planned tasks via CC Web but what if i could do it through the front-end for smaller tasks. It would then be able to move things into review or ping me in the CLI if it has any questions & work through a queue in it's own time. 

Skills Displayed: 
- Claude Code Management 
- Skills, Subagents, MCP 
- Workflow Automation 
- Prompt Engineering 
- Context Engineering
- Agentic Product Design
