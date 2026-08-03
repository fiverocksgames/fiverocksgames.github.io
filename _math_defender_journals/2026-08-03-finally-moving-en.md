---
title: It Finally Moves
date: 2026-08-03
lang: en
category: FIRST PLAYABLE PROTOTYPE
summary: The first combat prototype now has moving enemies, placeable defenses, attacks, damage, and visible HP.
description: The first playable Math Defender combat prototype and the bugs encountered while making it work.
permalink: /games/math-defender/en/journals/2026-08-03-finally-moving.html
translation_url: /games/math-defender/journals/2026-08-03-finally-moving.html
---
This time, something actually moves on the screen.

![First playable combat prototype of Math Defender](/games/math-defender/assets/journals/2026-08-03/first-playable-combat-prototype.png)

*Asset ID: J003-01*

*The first playable combat prototype of Math Defender. Enemy movement, tower placement, and the battle UI work together for the first time.*

Enemies follow a path.

Placed defenses attack them.

Their health goes down when they are hit.

Written like that, it does not sound impressive. These are things a game is supposed to have.

Until now, though, Math Defender did not have even those basics.

For a while after starting the project, most of the work was documentation and rules. I defined the game flow, decided how to work with AI, and organized where the records would live.

The preparation looked convincing. The problem was that there was still nothing on the screen.

This time I opened Unity and built an actual combat prototype.

The player can select a cell, place a defense, and start the battle. Enemies move, defenses attack, and HP bars shrink.

There are no math problems yet, and there is no scouting phase. The graphics are still simple prototype shapes, and I do not know whether the combat is fun.

Still, for the first time, running the project showed something that looked like a game.

It did not work perfectly on the first attempt.

Temporary graphics created in the editor disappeared when entering Play Mode. The textures only existed in memory and did not survive Unity's Domain Reload.

I changed the setup so the shapes were saved as PNG files and imported again as persistent sprites.

The HP bar also shrank from the center at first. Technically the health was decreasing, but it looked wrong. I changed it so the left side stays fixed and the bar shrinks from right to left.

The strangest problem was the placement UI.

On the first cell click, the panel appeared for a moment and immediately disappeared.

The inactive panel was running `Start()` the first time it became active. A `Hide()` call inside `Start()` closed the panel right after `ShowForCell()` opened it.

I had written code that opened and closed the same panel, then spent time wondering why it was not visible.

Fixing these bugs made the project feel more like a real game project.

Everything looks clean in a design document. In the actual build, the first click fails, stale state remains, graphics disappear, and an HP bar shrinks in the wrong direction.

Maybe game development is largely the work of finding and correcting these small mismatches.

The game is still far from finished.

But something has clearly changed.

Math Defender now has moving enemies, placeable defenses, attacks, and damage.

The previous entry ended by saying it was time to make the game move.

This time, it really did.

The next step is to connect math problems and the scouting phase in front of this combat loop.

A more important question also remains.

Is it fun?

From here, that answer has to come from playing, not from documents.
