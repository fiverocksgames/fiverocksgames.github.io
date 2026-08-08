---
title: The Game Can Finally Make One Full Loop
date: 2026-08-08
lang: en
category: FIRST STAGE LOOP
summary: Problem solving, scouting, preparation, battle, and results are finally connected into one playable stage flow.
description: Math Defender's first playable full stage loop and the state-transition bugs uncovered while connecting it.
permalink: /games/math-defender/en/journals/2026-08-08-first-stage-loop.html
translation_url: /games/math-defender/journals/2026-08-08-first-stage-loop.html
---
In the last entry, I wrote that combat had finally started moving.

I ended that post with this:

> Next comes attaching the math problems and scouting phase in front of this battle.

This time, they are actually attached.

The game no longer drops straight into combat when it starts.

First you solve math problems,

then go through scouting,

prepare for battle,

fight,

and see the result.

The current flow looks like this:

> Problem → Scout → Preparation → Battle → Result

Written down, it sounds almost too obvious.

That is the flow I had already described in the design documents.

But drawing five boxes with arrows between them and making those five phases actually connect inside Unity turned out to be very different things.

The problem screen had to award resources for correct answers. A timeout had to move to the next problem. That state then had to survive through scouting and preparation before entering the combat prototype that already existed.

And, as usual, it did not work perfectly on the first try.

The worst issue was timeout handling.

The first implementation treated a timeout almost like a wrong answer.

When time expired, the UI entered a flow similar to `INCORRECT! Try again!`, and the player did not advance to the next problem.

According to the game rules, a timeout should award 0G and continue to the next question. Instead, the game could simply get stuck.

So correct answers, wrong answers, and timeouts were separated into explicit result types.

Unity lifecycle problems showed up again too.

Depending on the order in which managers and UI components ran `Start()`, the opening state could freeze. In generated scenes, the StageData reference could disappear. Scout and Result panels sometimes re-enabled themselves at the wrong time, and answer buttons overlapped the problem text.

I ran into similar problems while building the first combat prototype. Adding more phases also added more places where state could become tangled.

This time, though, the tests grew with the prototype.

By the end, 20 Edit Mode tests were passing, and Play Mode checks confirmed the initial state and phase transitions.

The project looks a little different now.

Before, it was a prototype with a combat system.

Now it is still rough, but it is closer to a prototype where you can follow one stage from beginning to end.

Of course, none of the important questions have been answered yet.

Is solving the problems fun?

Does scouting actually help you make a decision?

Does the money earned from problems change what you do in battle?

Would anyone want to repeat these five phases?

I still do not know.

The graphics are still prototype-level, and scouting is only a minimal implementation.

But for the first time, the game can make one full loop.

Solve,

look,

prepare,

fight,

see the result.

From here, adding more pieces may be less important than repeatedly playing this loop and finding what is boring, unnecessary, or missing.

The question has changed a little.

From "Does the game run?"

to "Do I want to do this one more time?"
