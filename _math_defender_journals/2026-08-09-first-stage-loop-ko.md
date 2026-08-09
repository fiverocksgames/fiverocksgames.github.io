---
title: 이번엔 진짜 한 바퀴 돈다
date: 2026-08-09 08:00:00 +0900
lang: ko
category: FIRST STABLE STAGE LOOP
summary: 처음 연결한 Stage Loop에는 치명적인 구멍이 있었다. 다시 고치고 검증해서 이제는 실제로 처음부터 끝까지 한 바퀴 돈다.
description: Math Defender의 첫 전체 Stage Loop 통합 뒤 발견된 blocking bug와 실제 end-to-end 플레이 안정화 과정.
permalink: /games/math-defender/journals/2026-08-09-first-stage-loop.html
translation_url: /games/math-defender/en/journals/2026-08-09-first-stage-loop.html
---
지난번에 문제 풀이부터 정찰, 전투까지 처음으로 하나의 흐름으로 붙었다고 생각했다.

그래서 글까지 올렸다.

그런데 실제로 다시 돌려보니 아니었다.

Scout 다음에서 화면이 멈췄고,

전투 단계로 넘어가도 정작 Grid, Spawner, HUD 같은 전투 요소가 빠져 있었다.

말 그대로 흐름은 연결돼 있었는데, 게임은 끝까지 못 했다.

그래서 올렸던 글도 다시 내렸다.

조금 민망하지만 이런 게 기록할 만한 개발 과정인 것 같다.

문서와 상태 머신에서는

> Problem → Scout → Preparation → Battle → Result

라고 잘 이어져 있었다.

이번에는 이 흐름의 실제 화면도 같이 남겨둔다.

![Math Defender Problem 단계의 난이도와 보상 선택 화면](/games/math-defender/assets/journals/2026-08-09/01-problem-phase.webp)

*J006-01 · Problem 단계. 현재 프로토타입에서는 문제 풀이 전에 난이도와 제한 시간, 보상을 선택한다.*

![Math Defender Scout 단계의 적 정보 확인 화면](/games/math-defender/assets/journals/2026-08-09/02-scout-phase.webp)

*J006-02 · Scout 단계. 전투에 들어가기 전에 적의 체력과 이동 속도를 확인하는 최소 정찰 화면이다.*

하지만 Unity 씬 안에서는 다른 문제가 숨어 있었다.

Scout UI 패널을 꺼놓으니 그 안에 붙어 있던 Controller도 같이 비활성화됐다. 그러면 시작할 때 받아야 할 이벤트를 못 받고, 나중에 Scout가 끝나도 다음 단계로 넘어가지 못했다.

전투 쪽은 더 직접적이었다.

Stage Loop용 씬을 다시 만들면서 기존 전투 프로토타입의 Grid, WaypointPath, WaveSpawner, Goal, HUD를 제대로 다시 넣지 못했다.

Preparation과 Battle이라는 단계 이름은 있었지만 실제로 할 수 있는 게 없는 상태였다.

HUD도 화면 중앙에 한꺼번에 뭉쳤고, WaveData 참조는 씬 생성 과정에서 직렬화 순서 때문에 날아갔다.

한 번 연결했다고 끝이 아니었다.

그래서 UI Controller와 실제 Panel을 분리했다. Controller는 계속 살아 있게 두고, 보이는 Panel만 켜고 끄도록 바꿨다.

그리고 기존 전투 프로토타입의 핵심 요소들을 Stage Loop 씬 안으로 다시 통합했다.

Grid 12칸,

적 이동 경로,

Spawn과 Goal,

WaveSpawner,

배치 시스템,

전투 HUD까지.

![Math Defender Preparation 단계에 통합된 전투 보드와 배치 그리드](/games/math-defender/assets/journals/2026-08-09/03-preparation-phase.webp)

*J006-03 · Preparation 단계. 기존 전투 프로토타입의 경로, Spawn/Goal, 12칸 배치 Grid와 HUD가 전체 Stage Loop 안으로 들어왔다.*

Result에서 다시 시작할 때는 씬을 통째로 다시 로드하도록 바꿨다. 이전 전투에서 놓았던 타워나 적 상태가 남는 것도 막았다.

그 뒤 다시 처음부터 돌렸다.

문제 5개를 풀고,

Scout를 지나고,

전투를 준비하고,

적이 나오고,

싸우고,

승리하거나 패배하고,

결과 화면을 보고,

다시 시작했다.

이번에는 끝까지 갔다.

![Math Defender 전체 Stage Loop 완료 후 Victory 결과 화면](/games/math-defender/assets/journals/2026-08-09/04-result-victory.webp)

*J006-04 · Result 단계. 이 캡처에서는 적 10개를 처치하고 Victory에 도달한 뒤 재시작할 수 있는 상태까지 확인된다.*

Edit Mode 테스트도 20개 전부 통과했고, Play Mode에서도 전체 흐름을 직접 확인했다.

그래서 이번에는 조금 조심해서 말할 수 있을 것 같다.

이제 Math Defender는 처음부터 끝까지 한 스테이지를 실제로 돌릴 수 있다.

아직 재미있는지는 모른다.

Scout가 정말 필요한지도 모르고,

수학 문제에서 번 돈이 전투 선택을 얼마나 바꿀지도 모르고,

이걸 두 번 세 번 반복하고 싶을지도 아직 모른다.

하지만 적어도 이제는 그 질문을 실제 플레이로 확인할 수 있는 상태가 됐다.

이번에 배운 건 꽤 단순하다.

"연결됐다"와 "플레이된다"는 다른 말이었다.

그리고 아마 앞으로도 비슷한 일이 계속 생길 것 같다.

그래도 이번에는 정말 한 바퀴 돈다.
