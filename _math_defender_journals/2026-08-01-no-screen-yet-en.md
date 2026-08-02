---
title: There Is No Screen Yet, but the Game Is Taking Shape
date: 2026-08-01
lang: en
category: DESIGN / AI TEAM
summary: There is still nothing playable, but the core flow—solve, scout, defend—now exists.
description: The core solve, scout, defend loop and an AI-assisted team workflow.
permalink: /games/math-defender/en/journals/2026-08-01-no-screen-yet-but-the-game-is-taking-shape.html
translation_url: /games/math-defender/journals/2026-08-01-no-screen-yet-but-the-game-is-taking-shape.html
---
A few days have passed since I posted that the project had begun.

There is still nothing to show on screen. No moving character, no incoming monsters, not even a math problem.

Almost everything created so far is documentation.

That sounds worrying. I said I was making a game, but it looks like I am only making documents. Honestly, I feel that too.

This time, though, I decided to define the flow of the game before opening Unity and building random pieces.

In earlier projects, moving one character, adding one button, or spawning one enemy felt like progress. The problem came afterward. Without a clear destination, every added feature made the project more ambiguous.

I ended up with prototypes, but not games.

This time I changed the order.

A stage in Math Defender currently follows this structure:

> Problem Solving → Scouting → Defense

First, the player solves math problems to earn resources. Next, the player checks the incoming enemies and the battlefield. Finally, those resources are used to place defenses and survive the battle.

The player will not simply watch after combat begins. The plan is to allow additional placement and upgrades during battle. Time slows while adjusting the build, and normal combat speed can also be changed.

None of this has been tested in a real prototype yet. It may sound reasonable in a document and still be boring in play. The prototype will have to answer that.

The unusual part of this project is how I am using AI.

Instead of only asking for code and copying the result, I separated responsibilities such as planning, design, architecture, development, QA, and documentation.

I also created handoff documents so work can continue when a session, model, or agent changes. Every pull request is expected to include a factual worklog.

That may sound excessive for a small personal project. It probably is.

But this game is being built in small fragments between work and raising children. After a few days away, I may forget exactly what I was doing. AI does not preserve every piece of context forever either.

Whether the next worker is a person or an AI, the project needs enough context to continue.

There is also a risk: building the documentation system may become more satisfying than building the game.

I could keep refining rules and workflows until this becomes another beautifully organized prototype.

So the preparation phase needs to stop here.

The next goal is clear:

Solve one problem.

Inspect one map.

Place one defense.

Watch one enemy move.

There is no screen yet, but the sequence of the game now exists.

Now it is time to make it move.
