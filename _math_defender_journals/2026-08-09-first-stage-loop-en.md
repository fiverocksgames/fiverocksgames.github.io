---
title: This Time, It Really Makes a Full Loop
date: 2026-08-09 08:00:00 +0900
lang: en
category: FIRST STABLE STAGE LOOP
summary: The first connected Stage Loop still had blocking holes. After another round of fixes and validation, the game can now actually complete one full stage from start to finish.
description: The blocking bugs found after Math Defender's first full Stage Loop integration and the work that stabilized true end-to-end play.
permalink: /games/math-defender/en/journals/2026-08-09-first-stage-loop.html
translation_url: /games/math-defender/journals/2026-08-09-first-stage-loop.html
---
Last time, I thought the math phase, scouting, and combat had finally been connected into one flow.

I even published a post about it.

Then I ran it again properly.

It was not actually done.

The screen could freeze after Scout,

and even if the game reached the combat phases, important pieces such as the Grid, Spawner, and HUD were missing.

The flow existed on paper and in the state machine, but the game could not actually finish the stage.

So I took the post back down.

It is a little embarrassing, but this is probably exactly the kind of thing worth keeping in a development log.

The intended structure was already clear:

> Problem → Scout → Preparation → Battle → Result

The problem was that Unity had its own interpretation of “connected.”

The Scout UI controller lived on a panel GameObject that started inactive. That meant the controller never got the startup lifecycle calls it needed to subscribe to events. Later, when Scout ended, the next transition could simply fail.

Combat had an even more obvious problem.

While rebuilding the Stage Loop scene, I had not correctly recreated all the pieces from the original combat prototype: the Grid, WaypointPath, WaveSpawner, Goal, and HUD.

There were phases called Preparation and Battle, but there was not enough gameplay there to actually play them.

The HUD also collapsed into the center of the screen, and the WaveData reference disappeared because of the order in which scene serialization was applied.

Connecting the flow once was not enough.

So I separated the UI Controllers from their visual Panels. The controllers now stay alive, while only the visible panels are toggled on and off.

Then I integrated the core combat prototype pieces back into the Stage Loop scene:

12 grid cells,

the enemy path,

Spawn and Goal,

WaveSpawner,

the placement system,

and the combat HUD.

Restarting from the Result screen now reloads the scene completely so towers, enemies, and other leftover state do not leak into the next run.

Then I played it from the beginning again.

Solve five problems,

pass through Scout,

prepare for battle,

spawn enemies,

fight,

win or lose,

see the Result screen,

and restart.

This time it reached the end.

All 20 Edit Mode tests passed, and the complete loop was also verified in Play Mode.

So now I can say this a little more carefully:

Math Defender can actually run one stage from beginning to end.

I still do not know whether it is fun.

I do not know whether Scout deserves to exist,

whether the money earned from math problems meaningfully changes combat decisions,

or whether anyone would want to repeat this loop two or three times.

But at least those questions can now be tested by actually playing the game.

The lesson this time was simple.

“Connected” and “playable” are not the same thing.

I suspect I will run into that distinction again.

But this time, it really does make a full loop.
