(() => {
  const LANGS = [
    ["ko","한국어"],["en","English"],["zh-CN","中文"],["ja","日本語"],
    ["es","Español"],["fr","Français"],["pt-BR","Português (BR)"],["de","Deutsch"]
  ];

  const T = (ko,en,zh,ja,es,fr,pt,de) => ({ko,en,"zh-CN":zh,ja,es,fr,"pt-BR":pt,de});

  const common = [
    T("게임 소개","About","游戏介绍","ゲーム紹介","Acerca del juego","Présentation","Sobre o jogo","Spielinfo"),
    T("플레이","Play","开始游戏","プレイ","Jugar","Jouer","Jogar","Spielen"),
    T("바로 플레이","Play now","立即游玩","今すぐプレイ","Jugar ahora","Jouer maintenant","Jogar agora","Jetzt spielen"),
    T("지금 플레이","Play now","立即游玩","今すぐプレイ","Jugar ahora","Jouer maintenant","Jogar agora","Jetzt spielen"),
    T("게임 알아보기","Learn more","了解游戏","ゲームについて","Más información","En savoir plus","Saiba mais","Mehr erfahren"),
    T("스크린샷","Screenshots","截图","スクリーンショット","Capturas","Captures d’écran","Capturas de tela","Screenshots"),
    T("스크린샷 보기","View screenshots","查看截图","スクリーンショットを見る","Ver capturas","Voir les captures","Ver capturas","Screenshots ansehen"),
    T("개발 일지","Devlog","开发日志","開発日誌","Diario de desarrollo","Journal de développement","Diário de desenvolvimento","Entwicklungsblog"),
    T("개발 일지 읽기","Read devlog","阅读开发日志","開発日誌を読む","Leer diario de desarrollo","Lire le journal","Ler diário de desenvolvimento","Entwicklungsblog lesen"),
    T("프로젝트 홈","Project home","项目主页","プロジェクトホーム","Página del proyecto","Page du projet","Página do projeto","Projektseite"),
    T("설치 없는 플레이","No installation","无需安装","インストール不要","Sin instalación","Sans installation","Sem instalação","Keine Installation"),
    T("PC와 모바일 브라우저에서 링크를 열어 바로 시작할 수 있습니다.","Open the link and play instantly on desktop or mobile browsers.","在电脑或手机浏览器中打开链接即可开始游戏。","PCやモバイルのブラウザでリンクを開くだけですぐ遊べます。","Abre el enlace en un navegador de PC o móvil y empieza al instante.","Ouvrez le lien dans un navigateur PC ou mobile et jouez immédiatement.","Abra o link no navegador do PC ou celular e comece na hora.","Öffne den Link im Desktop- oder Mobilbrowser und spiele sofort.")
  ];

  const pages = {
    home: [
      T("게임처럼 즐기면서 자연스럽게 생각하고 연습할 수 있는 프로젝트를 만듭니다. 완성된 게임뿐 아니라 실험과 개발 과정도 함께 기록합니다.",
        "We create projects that make thinking and practice feel like play. We share not only finished games, but experiments and the development process too.",
        "我们制作让思考与练习像游戏一样自然有趣的项目，也记录成品之外的实验与开发过程。",
        "遊びながら自然に考え、練習できるプロジェクトを作っています。完成したゲームだけでなく、実験や開発の過程も記録します。",
        "Creamos proyectos para pensar y practicar jugando. Compartimos no solo juegos terminados, sino también experimentos y el proceso de desarrollo.",
        "Nous créons des projets où réfléchir et s’exercer devient un jeu. Nous partageons aussi les expérimentations et le processus de développement.",
        "Criamos projetos em que pensar e praticar faz parte da diversão. Também registramos experimentos e o processo de desenvolvimento.",
        "Wir entwickeln Projekte, bei denen Denken und Üben Teil des Spielens sind. Auch Experimente und der Entwicklungsprozess werden dokumentiert."),
      T("🎮 Game Hub 바로가기","🎮 Open Game Hub","🎮 打开 Game Hub","🎮 Game Hub を開く","🎮 Abrir Game Hub","🎮 Ouvrir le Game Hub","🎮 Abrir Game Hub","🎮 Game Hub öffnen"),
      T("같은 디자인 언어 안에서 각 게임의 플레이 방식과 개성을 만나보세요.",
        "Explore each game's unique play style within one shared design language.",
        "在统一的设计语言中体验每款游戏独特的玩法与个性。",
        "共通のデザイン言語の中で、それぞれのゲームの遊び方と個性を楽しめます。",
        "Descubre la personalidad y la forma de jugar de cada título dentro de un mismo lenguaje visual.",
        "Découvrez le style de jeu et la personnalité de chaque titre dans un même univers visuel.",
        "Conheça o estilo e a personalidade de cada jogo dentro da mesma linguagem visual.",
        "Entdecke Spielweise und Charakter jedes Titels in einer gemeinsamen Designsprache."),
      T("수학 문제로 자원을 얻고 적을 정찰한 뒤 방어 전략을 세우는 게임입니다.","Solve math problems to earn resources, scout enemies, and plan your defense.","通过数学题获取资源、侦察敌人并制定防御策略。","数学問題で資源を集め、敵を偵察し、防衛戦略を立てるゲームです。","Resuelve problemas de matemáticas, consigue recursos, explora enemigos y prepara tu defensa.","Résolvez des problèmes de maths, gagnez des ressources, repérez les ennemis et préparez votre défense.","Resolva problemas de matemática, ganhe recursos, reconheça inimigos e planeje sua defesa.","Löse Matheaufgaben, sammle Ressourcen, erkunde Gegner und plane deine Verteidigung."),
      T("빠른 계산과 전투 리듬을 결합한 모바일 수학 액션 게임입니다.","A mobile math action game combining quick calculation with battle rhythm.","将快速计算与战斗节奏结合的移动数学动作游戏。","素早い計算とバトルのリズムを組み合わせたモバイル数学アクションゲームです。","Un juego de acción matemática para móvil que combina cálculo rápido y ritmo de combate.","Un jeu d’action mathématique mobile mêlant calcul rapide et rythme de combat.","Um jogo de ação matemática mobile que combina cálculo rápido e ritmo de batalha.","Ein mobiles Mathe-Actionspiel, das schnelles Rechnen mit Kampfrhythmus verbindet."),
      T("떨어지는 수학 문제를 바닥에 닿기 전에 해결하는 브라우저 게임입니다.","A browser game where you solve falling math problems before they hit the ground.","在数学题落地前解答它们的浏览器游戏。","落ちてくる数学問題が地面に着く前に解くブラウザゲームです。","Un juego de navegador donde resuelves operaciones antes de que caigan al suelo.","Un jeu navigateur où vous résolvez les problèmes avant qu’ils ne touchent le sol.","Um jogo de navegador em que você resolve contas antes que elas cheguem ao chão.","Ein Browserspiel, in dem du fallende Matheaufgaben löst, bevor sie den Boden erreichen."),
      T("카드의 위치를 기억하고 짝을 맞추며 관찰력과 기억력을 훈련합니다.","Remember card positions, match pairs, and train observation and memory.","记住卡片位置并配对，训练观察力和记忆力。","カードの位置を覚えてペアをそろえ、観察力と記憶力を鍛えます。","Recuerda la posición de las cartas, encuentra parejas y entrena memoria y observación.","Mémorisez la position des cartes, trouvez les paires et entraînez mémoire et observation.","Memorize a posição das cartas, encontre os pares e treine memória e observação.","Merke dir Kartenpositionen, finde Paare und trainiere Beobachtung und Gedächtnis."),
      T("숫자 카드를 배치해 가능한 가장 큰 결과를 만드는 수학 퍼즐 게임입니다.","A math puzzle where you arrange number cards to create the largest possible result.","排列数字卡片，得到尽可能大的结果的数学益智游戏。","数字カードを並べて、できるだけ大きな結果を作る数学パズルです。","Un puzle matemático donde colocas cartas numéricas para obtener el mayor resultado posible.","Un puzzle mathématique où vous placez des cartes-nombres pour obtenir le résultat le plus grand possible.","Um puzzle matemático em que você organiza cartas numéricas para obter o maior resultado possível.","Ein Mathepuzzle, bei dem du Zahlenkarten so anordnest, dass das größtmögliche Ergebnis entsteht.")
    ],
    fighter: [
      T("두뇌를 단련하고,","Train your brain,","锻炼大脑，","頭を鍛えて、","Entrena tu mente,","Entraînez votre esprit,","Treine sua mente,","Trainiere deinen Kopf,"),
      T("수학으로 싸워라.","fight with math.","用数学战斗。","数学で戦え。","lucha con matemáticas.","combattez avec les maths.","lute com matemática.","kämpfe mit Mathe."),
      T("반복적인 연산 연습을 빠르고 경쾌한 전투 리듬으로 바꿉니다. 원하는 모드를 선택하고 한 판씩 실력을 높여 보세요.","Turn repetitive arithmetic practice into fast, energetic battle rhythm. Pick a mode and improve one round at a time.","把重复的算术练习变成快速轻快的战斗节奏。选择模式，一局一局提升实力。","反復的な計算練習を、テンポのよいバトルへ。モードを選び、1プレイずつ実力を伸ばしましょう。","Convierte la práctica repetitiva en un combate rápido y dinámico. Elige un modo y mejora partida a partida.","Transformez les exercices répétitifs en combats rapides et rythmés. Choisissez un mode et progressez partie après partie.","Transforme exercícios repetitivos em batalhas rápidas e dinâmicas. Escolha um modo e evolua a cada partida.","Verwandle wiederholtes Rechnen in schnelle, dynamische Kämpfe. Wähle einen Modus und werde Runde für Runde besser."),
      T("게임의 리듬으로 즐기는 수학 연습","Math practice with a game rhythm","跟着游戏节奏练数学","ゲームのリズムで楽しむ数学練習","Práctica matemática con ritmo de juego","Les maths au rythme du jeu","Matemática no ritmo do jogo","Mathetraining im Spielrhythmus"),
      T("짧은 플레이와 즉각적인 피드백으로 반복 연습을 더 가볍고 흥미롭게 만듭니다.","Short sessions and instant feedback make repeated practice lighter and more engaging.","短局游戏与即时反馈，让重复练习更轻松有趣。","短いプレイと即時フィードバックで、反復練習を気軽で楽しいものにします。","Las partidas cortas y el feedback inmediato hacen la práctica más ligera y entretenida.","Des sessions courtes et un retour immédiat rendent la répétition plus légère et motivante.","Partidas curtas e feedback imediato deixam a prática repetida mais leve e divertida.","Kurze Sessions und direktes Feedback machen Wiederholungen leichter und motivierender."),
      T("다양한 플레이 모드","Multiple play modes","多种游戏模式","多彩なプレイモード","Varios modos de juego","Plusieurs modes de jeu","Vários modos de jogo","Mehrere Spielmodi"),
      T("일반 모드와 도전 모드 중 목적에 맞는 경험을 선택합니다.","Choose between Normal and Challenge modes depending on your goal.","可根据目标选择普通模式或挑战模式。","目的に合わせて通常モードとチャレンジモードを選べます。","Elige entre modo normal y desafío según tu objetivo.","Choisissez le mode normal ou défi selon votre objectif.","Escolha entre os modos normal e desafio conforme seu objetivo.","Wähle je nach Ziel zwischen Normal- und Herausforderungsmodus."),
      T("빠른 반복","Fast replay","快速重复","すぐに再挑戦","Repetición rápida","Rejouer rapidement","Repetição rápida","Schnelle Wiederholung"),
      T("다음 판을 빠르게 시작하며 계산 감각과 자신감을 쌓습니다.","Start the next round quickly and build calculation fluency and confidence.","快速开始下一局，提升计算感觉与自信。","すぐ次のプレイを始め、計算感覚と自信を積み上げます。","Empieza otra partida enseguida y gana soltura y confianza con el cálculo.","Relancez vite une partie et développez aisance et confiance en calcul.","Comece a próxima partida rapidamente e ganhe agilidade e confiança nos cálculos.","Starte schnell die nächste Runde und verbessere Rechengefühl und Selbstvertrauen."),
      T("모바일 중심","Mobile first","移动优先","モバイル中心","Pensado para móvil","Pensé pour mobile","Foco no mobile","Mobile first"),
      T("문제와 시간에 집중할 수 있는 간결한 화면을 제공합니다.","A clean interface keeps the focus on the problem and the timer.","简洁界面让你专注于题目和时间。","問題と時間に集中できるシンプルな画面です。","Una interfaz clara te mantiene centrado en el problema y el tiempo.","Une interface épurée vous aide à rester concentré sur le problème et le chrono.","Uma interface simples mantém o foco no problema e no tempo.","Eine klare Oberfläche hält den Fokus auf Aufgabe und Zeit."),
      T("게임 화면","Game screens","游戏画面","ゲーム画面","Pantallas del juego","Écrans du jeu","Telas do jogo","Spielansichten"),
      T("로비, 플레이, 일반 모드와 도전 모드를 확인하세요.","See the lobby, gameplay, Normal mode, and Challenge mode.","查看大厅、游戏画面、普通模式和挑战模式。","ロビー、プレイ画面、通常モード、チャレンジモードをご覧ください。","Mira el lobby, la partida, el modo normal y el modo desafío.","Découvrez le lobby, le jeu, le mode normal et le mode défi.","Veja o lobby, a partida, o modo normal e o modo desafio.","Sieh dir Lobby, Gameplay, Normal- und Herausforderungsmodus an.")
    ],
    rain: [
      T("빠르게 생각하고,","Think fast,","快速思考，","素早く考えて、","Piensa rápido,","Réfléchissez vite,","Pense rápido,","Denk schnell,"),
      T("수학 비를 멈춰라.","stop the math rain.","阻止数学雨。","数学の雨を止めよう。","detén la lluvia matemática.","arrêtez la pluie de maths.","pare a chuva matemática.","stoppe den Mathe-Regen."),
      T("하늘에서 떨어지는 수학 문제를 바닥에 닿기 전에 해결하세요. 짧고 빠른 라운드로 계산 속도와 집중력을 함께 훈련합니다.","Solve math problems falling from the sky before they hit the ground. Short, fast rounds train calculation speed and focus.","在数学题落地前解答它们。短而快的回合同时训练计算速度和专注力。","空から落ちてくる数学問題が地面に着く前に解きましょう。短く速いラウンドで計算速度と集中力を鍛えます。","Resuelve los problemas que caen del cielo antes de que toquen el suelo. Las rondas rápidas entrenan cálculo y concentración.","Résolvez les problèmes qui tombent du ciel avant qu’ils ne touchent le sol. Des manches courtes entraînent calcul et concentration.","Resolva os problemas que caem do céu antes que cheguem ao chão. Rodadas rápidas treinam cálculo e foco.","Löse die vom Himmel fallenden Aufgaben, bevor sie den Boden erreichen. Kurze Runden trainieren Rechentempo und Fokus."),
      T("수학 연습을 빠른 게임 리듬으로","Math practice at game speed","快节奏数学练习","ゲームのテンポで数学練習","Matemáticas a ritmo de juego","Les maths au rythme du jeu","Matemática no ritmo do jogo","Mathetraining im Spieltempo"),
      T("복잡한 설명 없이 바로 시작하고 반복 플레이를 통해 계산 감각을 높입니다.","Start right away without complicated instructions and build fluency through repeated play.","无需复杂说明即可开始，通过反复游玩提升计算能力。","複雑な説明なしですぐ始め、繰り返し遊びながら計算感覚を高めます。","Empieza sin explicaciones complicadas y mejora el cálculo jugando repetidamente.","Commencez sans explications compliquées et gagnez en aisance en rejouant.","Comece sem explicações complicadas e melhore a fluência jogando várias vezes.","Starte ohne komplizierte Erklärungen und verbessere dein Rechengefühl durch Wiederholung."),
      T("빠른 판단","Quick decisions","快速判断","素早い判断","Decisiones rápidas","Décisions rapides","Decisões rápidas","Schnelle Entscheidungen"),
      T("떨어지는 문제를 보고 제한된 시간 안에 답을 선택하거나 입력합니다.","See a falling problem and choose or enter the answer before time runs out.","看到下落的题目，在限时内选择或输入答案。","落ちてくる問題を見て、時間内に答えを選ぶか入力します。","Mira el problema que cae y elige o escribe la respuesta antes de que se acabe el tiempo.","Repérez le problème qui tombe et choisissez ou saisissez la réponse avant la fin du temps.","Veja o problema caindo e escolha ou digite a resposta antes do tempo acabar.","Sieh die fallende Aufgabe und wähle oder tippe die Antwort ein, bevor die Zeit abläuft."),
      T("반복 학습","Repeat to improve","反复练习","反復学習","Aprende repitiendo","Apprendre en répétant","Aprenda repetindo","Lernen durch Wiederholung"),
      T("짧은 플레이를 이어가며 계산 속도와 정확도를 높입니다.","Keep playing short rounds to improve speed and accuracy.","通过连续的短局提升计算速度与准确率。","短いプレイを重ねて計算速度と正確さを高めます。","Encadena rondas cortas para mejorar velocidad y precisión.","Enchaînez de courtes parties pour gagner en vitesse et précision.","Faça rodadas curtas para melhorar velocidade e precisão.","Spiele kurze Runden und verbessere Tempo und Genauigkeit."),
      T("비가 시작됩니다","The rain is starting","数学雨开始了","雨が始まります","Empieza la lluvia","La pluie commence","A chuva vai começar","Der Regen beginnt"),
      T("별도의 다운로드 없이 playable 페이지에서 바로 도전해 보세요.","Jump straight into the playable version with no download required.","无需下载，直接进入可玩页面开始挑战。","ダウンロード不要で、そのままプレイページから挑戦できます。","Entra directamente en la versión jugable sin descargar nada.","Lancez directement la version jouable, sans téléchargement.","Entre direto na versão jogável sem precisar baixar nada.","Starte direkt in die spielbare Version – ganz ohne Download."),
      T("Math Rain 플레이","Play Math Rain","玩 Math Rain","Math Rain をプレイ","Jugar a Math Rain","Jouer à Math Rain","Jogar Math Rain","Math Rain spielen"),
      T("정답을 입력하세요","Enter the answer","输入答案","答えを入力","Introduce la respuesta","Saisissez la réponse","Digite a resposta","Antwort eingeben"),
      T("문제가 바닥에 닿기 전에!","Before it hits the ground!","在题目落地之前！","地面に着く前に！","¡Antes de que toque el suelo!","Avant qu’il ne touche le sol !","Antes de chegar ao chão!","Bevor sie den Boden erreicht!")
    ],
    memory: [
      T("자세히 보고,","Look closely,","仔细观察，","よく見て、","Mira bien,","Observez bien,","Olhe bem,","Schau genau hin,"),
      T("짝을 기억하세요.","remember the pairs.","记住配对。","ペアを覚えよう。","recuerda las parejas.","mémorisez les paires.","lembre dos pares.","merke dir die Paare."),
      T("카드를 뒤집어 위치를 기억하고 같은 그림의 짝을 찾아보세요. 컴퓨터 대전과 1:1 대전, 다양한 보드 크기와 테마로 짧고 집중도 높은 플레이를 즐길 수 있습니다.","Flip cards, remember their positions, and find matching pairs. Play against the computer or another player with different board sizes and themes.","翻开卡片记住位置并找到相同图案的配对。支持电脑对战、1对1以及不同棋盘大小和主题。","カードをめくって位置を覚え、同じ絵柄のペアを探しましょう。CPU対戦や1対1、さまざまな盤面とテーマで遊べます。","Voltea cartas, recuerda su posición y encuentra las parejas. Juega contra la IA o en 1 contra 1 con varios tamaños y temas.","Retournez les cartes, mémorisez leur position et trouvez les paires. Jouez contre l’ordinateur ou à deux, avec plusieurs tailles et thèmes.","Vire as cartas, memorize as posições e encontre os pares. Jogue contra o computador ou em 1x1 com vários tamanhos e temas.","Drehe Karten um, merke dir ihre Position und finde Paare. Spiele gegen den Computer oder zu zweit mit verschiedenen Größen und Themen."),
      T("간단한 규칙, 선택할수록 달라지는 기억 대결","Simple rules, varied memory battles","规则简单，选择让记忆对战更丰富","シンプルなルール、選択で変わる記憶バトル","Reglas simples, partidas de memoria variadas","Des règles simples, des défis mémoire variés","Regras simples, desafios de memória variados","Einfache Regeln, abwechslungsreiche Memory-Duelle"),
      T("보드 크기와 테마를 고르고, 혼자 컴퓨터와 겨루거나 같은 화면에서 친구와 대결해 보세요.","Choose a board size and theme, then play against the computer or a friend on the same screen.","选择棋盘大小和主题，与电脑或同屏朋友对战。","盤面サイズとテーマを選び、CPUまたは同じ画面の友だちと対戦できます。","Elige tamaño y tema y juega contra el ordenador o un amigo en la misma pantalla.","Choisissez la taille et le thème, puis affrontez l’ordinateur ou un ami sur le même écran.","Escolha o tamanho e o tema e jogue contra o computador ou um amigo na mesma tela.","Wähle Größe und Thema und spiele gegen den Computer oder einen Freund am selben Bildschirm."),
      T("AI & 1:1 대전","AI & 1v1","AI 与 1v1 对战","AI & 1対1","IA y 1 contra 1","IA et 1 contre 1","IA e 1x1","KI & 1-gegen-1"),
      T("세 단계 AI 난이도 또는 같은 화면의 1:1 모드로 플레이할 수 있습니다.","Play with three AI difficulty levels or a same-screen 1v1 mode.","可选择三档AI难度或同屏1对1模式。","3段階のAI難易度、または同じ画面での1対1モードで遊べます。","Juega con tres niveles de IA o en modo 1 contra 1 en la misma pantalla.","Jouez avec trois niveaux d’IA ou en 1 contre 1 sur le même écran.","Jogue com três níveis de IA ou em modo 1x1 na mesma tela.","Spiele mit drei KI-Stufen oder im 1-gegen-1 am selben Bildschirm."),
      T("다양한 보드와 테마","Boards & themes","多种棋盘与主题","多彩な盤面とテーマ","Tableros y temas","Plateaux et thèmes","Tabuleiros e temas","Boards & Themen"),
      T("4×4, 6×6, 8×8 보드와 동물·과일·무늬 테마를 선택할 수 있습니다.","Choose 4×4, 6×6, or 8×8 boards with animal, fruit, or pattern themes.","可选择4×4、6×6、8×8棋盘以及动物、水果、图案主题。","4×4、6×6、8×8の盤面と、動物・果物・模様のテーマを選べます。","Elige tableros 4×4, 6×6 u 8×8 y temas de animales, frutas o patrones.","Choisissez des plateaux 4×4, 6×6 ou 8×8 et des thèmes animaux, fruits ou motifs.","Escolha tabuleiros 4×4, 6×6 ou 8×8 e temas de animais, frutas ou padrões.","Wähle 4×4-, 6×6- oder 8×8-Boards mit Tier-, Obst- oder Musterthemen."),
      T("모든 짝을 찾을 준비가 됐나요?","Ready to find every pair?","准备好找到所有配对了吗？","すべてのペアを見つける準備はできましたか？","¿Listo para encontrar todas las parejas?","Prêt à trouver toutes les paires ?","Pronto para encontrar todos os pares?","Bereit, alle Paare zu finden?"),
      T("별도의 다운로드 없이 브라우저에서 바로 시작하세요.","Start right in your browser with no download required.","无需下载，直接在浏览器中开始。","ダウンロード不要でブラウザからすぐ始められます。","Empieza directamente en el navegador sin descargar nada.","Commencez directement dans votre navigateur, sans téléchargement.","Comece direto no navegador sem baixar nada.","Starte direkt im Browser – ohne Download."),
      T("Memory Game 플레이","Play Memory Game","玩 Memory Game","Memory Game をプレイ","Jugar a Memory Game","Jouer à Memory Game","Jogar Memory Game","Memory Game spielen")
    ],
    max: [
      T("계산만 하지 말고,","Don't just calculate,","别只计算，","計算するだけじゃなく、","No solo calcules,","Ne calculez pas seulement,","Não basta calcular,","Nicht nur rechnen,"),
      T("가장 크게 만드세요.","make it as big as possible.","把结果做到最大。","いちばん大きくしよう。","hazlo lo más grande posible.","faites le plus grand résultat.","faça o maior resultado possível.","mach das Ergebnis maximal."),
      T("주어진 숫자 카드를 어떻게 배치하느냐에 따라 결과가 달라집니다. 여러 경우를 비교하고 더 큰 값을 만드는 조합을 찾아보세요.","The result changes depending on how you arrange the number cards. Compare possibilities and find the combination that makes the biggest value.","数字卡片的排列方式会改变结果。比较不同可能，找出能得到最大值的组合。","数字カードの並べ方で結果が変わります。いくつものパターンを比べ、より大きな値になる組み合わせを探しましょう。","El resultado cambia según cómo coloques las cartas. Compara opciones y encuentra la combinación que produzca el valor más alto.","Le résultat change selon la disposition des cartes. Comparez les possibilités et trouvez la combinaison qui donne la plus grande valeur.","O resultado muda conforme você organiza as cartas. Compare possibilidades e encontre a combinação que gera o maior valor.","Das Ergebnis hängt davon ab, wie du die Zahlenkarten anordnest. Vergleiche Möglichkeiten und finde die Kombination mit dem größten Wert."),
      T("같은 숫자도, 배치에 따라 결과는 달라집니다","Same numbers, different results","同样的数字，不同排列，不同结果","同じ数字でも、並べ方で結果が変わる","Mismos números, resultados distintos","Mêmes nombres, résultats différents","Mesmos números, resultados diferentes","Gleiche Zahlen, andere Ergebnisse"),
      T("정답 하나를 빠르게 찾는 대신 여러 선택지를 비교하고 더 좋은 조합을 생각하는 수학 퍼즐입니다.","Instead of racing to one answer, compare options and think through better combinations.","不是快速找到唯一答案，而是比较多种选择，思考更好的组合。","正解を急いで探すのではなく、複数の選択肢を比べてより良い組み合わせを考える数学パズルです。","En vez de buscar una única respuesta rápido, compara opciones y piensa en mejores combinaciones.","Au lieu de chercher vite une réponse unique, comparez les options et trouvez de meilleures combinaisons.","Em vez de correr atrás de uma única resposta, compare opções e pense em combinações melhores.","Statt nur schnell eine Antwort zu finden, vergleichst du Optionen und suchst bessere Kombinationen."),
      T("조합을 비교하기","Compare combinations","比较组合","組み合わせを比べる","Comparar combinaciones","Comparer les combinaisons","Compare combinações","Kombinationen vergleichen"),
      T("주어진 숫자와 연산을 어떻게 배치할지 바꿔 보며 더 큰 결과를 찾습니다.","Rearrange the given numbers and operations to find a larger result.","调整给定数字和运算的位置，寻找更大的结果。","与えられた数字と演算の並べ方を変え、より大きな結果を探します。","Cambia la disposición de números y operaciones para obtener un resultado mayor.","Changez la disposition des nombres et opérations pour obtenir un résultat plus grand.","Mude a posição dos números e operações para encontrar um resultado maior.","Ordne Zahlen und Rechenzeichen neu an, um ein größeres Ergebnis zu finden."),
      T("계산 + 전략","Calculation + strategy","计算 + 策略","計算 + 戦略","Cálculo + estrategia","Calcul + stratégie","Cálculo + estratégia","Rechnen + Strategie"),
      T("단순 연산뿐 아니라 어떤 순서와 조합이 유리한지 판단하는 과정을 함께 연습합니다.","Practice not only arithmetic but also judging which order and combination works best.","不仅练习运算，也练习判断怎样的顺序和组合更有利。","単純な計算だけでなく、どの順番と組み合わせが有利か判断する力も鍛えます。","Practica no solo operaciones, sino también qué orden y combinación conviene más.","Entraînez non seulement le calcul, mais aussi le choix de l’ordre et de la combinaison les plus efficaces.","Pratique não só as contas, mas também a decisão sobre a melhor ordem e combinação.","Trainiere nicht nur Rechnen, sondern auch die Entscheidung, welche Reihenfolge und Kombination am besten ist."),
      T("얼마나 크게 만들 수 있을까요?","How big can you make it?","你能做到多大？","どこまで大きくできる？","¿Qué tan grande puedes hacerlo?","Jusqu’où pouvez-vous monter ?","Até onde você consegue chegar?","Wie groß kannst du es machen?"),
      T("여러 조합을 시험하며 가장 큰 결과에 도전해 보세요.","Try different combinations and challenge yourself to reach the biggest result.","尝试不同组合，挑战最大的结果。","いろいろな組み合わせを試して、最大の結果に挑戦しましょう。","Prueba distintas combinaciones y busca el mayor resultado.","Essayez différentes combinaisons et visez le résultat maximal.","Teste combinações diferentes e busque o maior resultado.","Probiere verschiedene Kombinationen und strebe das größte Ergebnis an."),
      T("Make It Max 플레이","Play Make It Max","玩 Make It Max","Make It Max をプレイ","Jugar a Make It Max","Jouer à Make It Max","Jogar Make It Max","Make It Max spielen")
    ],
    defender: [
      T("수학 문제를 풀어 자원을 얻고, 적을 정찰한 뒤 방어 전략을 세우는 게임을 만들고 있습니다. 이곳에는 완성된 결과뿐 아니라 설계, 시행착오, 프로토타입과 출시까지의 과정을 기록합니다.","We are building a game where players solve math problems to earn resources, scout incoming enemies, and plan a defense. This site records finished results as well as design decisions, experiments, prototypes, and the road to release.","我们正在制作一款通过解数学题获取资源、侦察敌人并制定防御策略的游戏。这里记录成品，也记录设计、尝试、原型到发布的过程。","数学問題を解いて資源を得て、敵を偵察し、防衛戦略を立てるゲームを制作しています。完成形だけでなく、設計、試行錯誤、プロトタイプ、リリースまでの過程も記録します。","Estamos creando un juego donde resolver problemas de matemáticas da recursos para explorar enemigos y preparar la defensa. Registramos resultados, diseño, pruebas, prototipos y el camino al lanzamiento.","Nous développons un jeu où les problèmes de maths permettent de gagner des ressources, repérer les ennemis et préparer la défense. Nous documentons aussi la conception, les essais, les prototypes et le chemin vers la sortie.","Estamos criando um jogo em que resolver problemas de matemática gera recursos para reconhecer inimigos e planejar a defesa. Registramos resultados, design, testes, protótipos e o caminho até o lançamento.","Wir entwickeln ein Spiel, in dem Matheaufgaben Ressourcen liefern, um Gegner auszukundschaften und die Verteidigung zu planen. Dokumentiert werden Ergebnisse, Design, Versuche, Prototypen und der Weg zum Release."),
      T("최근 기록","Latest entries","最新记录","最新の記録","Últimas entradas","Dernières entrées","Registros recentes","Neueste Einträge"),
      T("Play","Play","开始游戏","プレイ","Jugar","Jouer","Jogar","Spielen"),
      T("Read the journal","Read the journal","阅读开发日志","開発日誌を読む","Leer el diario","Lire le journal","Ler o diário","Journal lesen"),
      T("Latest entries","Latest entries","最新记录","最新の記録","Últimas entradas","Dernières entrées","Registros recentes","Neueste Einträge"),
      T("We are building a game where players solve math problems to earn resources, scout incoming enemies, and plan a defense. This site records not only finished results, but also design decisions, failed attempts, prototypes, and the road to release.","We are building a game where players solve math problems to earn resources, scout incoming enemies, and plan a defense. This site records finished results as well as design decisions, experiments, prototypes, and the road to release.","我们正在制作一款通过解数学题获取资源、侦察敌人并制定防御策略的游戏。这里记录成品，也记录设计、尝试、原型到发布的过程。","数学問題を解いて資源を得て、敵を偵察し、防衛戦略を立てるゲームを制作しています。完成形だけでなく、設計、試行錯誤、プロトタイプ、リリースまでの過程も記録します。","Estamos creando un juego donde resolver problemas de matemáticas da recursos para explorar enemigos y preparar la defensa. Registramos resultados, diseño, pruebas, prototipos y el camino al lanzamiento.","Nous développons un jeu où les problèmes de maths permettent de gagner des ressources, repérer les ennemis et préparer la défense. Nous documentons aussi la conception, les essais, les prototypes et le chemin vers la sortie.","Estamos criando um jogo em que resolver problemas de matemática gera recursos para reconhecer inimigos e planejar a defesa. Registramos resultados, design, testes, protótipos e o caminho até o lançamento.","Wir entwickeln ein Spiel, in dem Matheaufgaben Ressourcen liefern, um Gegner auszukundschaften und die Verteidigung zu planen. Dokumentiert werden Ergebnisse, Design, Versuche, Prototypen und der Weg zum Release.")
    ]
  };

  function pageKey() {
    const p = location.pathname;
    if (p === "/" || p === "/index.html") return "home";
    if (p.includes("/games/math-fighter/")) return "fighter";
    if (p.includes("/games/math-rain/")) return "rain";
    if (p.includes("/games/memory-game/")) return "memory";
    if (p.includes("/games/make-it-max/")) return "max";
    if (p.includes("/games/math-defender/") && (p.endsWith("/math-defender/") || p.endsWith("/math-defender/en/") || p.endsWith("/math-defender/index.html"))) return "defender";
    return null;
  }

  function normalizeBrowserLang(v) {
    v = (v || "").toLowerCase();
    if (v.startsWith("ko")) return "ko";
    if (v.startsWith("zh")) return "zh-CN";
    if (v.startsWith("ja")) return "ja";
    if (v.startsWith("es")) return "es";
    if (v.startsWith("fr")) return "fr";
    if (v.startsWith("pt")) return "pt-BR";
    if (v.startsWith("de")) return "de";
    return "en";
  }

  const key = pageKey();
  if (!key) return;
  const groups = [...common, ...(pages[key] || [])];
  const lookup = new Map();
  groups.forEach((g, i) => Object.values(g).forEach(v => lookup.set(v, i)));

  function translateText(lang) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const raw = node.nodeValue;
      const trimmed = raw.trim();
      if (!trimmed || !lookup.has(trimmed)) return;
      const g = groups[lookup.get(trimmed)];
      const next = g[lang] || g.en || g.ko;
      node.nodeValue = raw.replace(trimmed, next);
    });
    document.documentElement.lang = lang;
  }

  function addPicker(lang) {
    const host = document.querySelector(".site-nav") || document.querySelector(".header-row") || document.querySelector("header");
    if (!host) return;
    const wrap = document.createElement("div");
    wrap.className = "frg-language";
    const select = document.createElement("select");
    select.setAttribute("aria-label","Language");
    LANGS.forEach(([code,label]) => {
      const o = document.createElement("option");
      o.value = code; o.textContent = label; o.selected = code === lang;
      select.appendChild(o);
    });
    select.addEventListener("change", () => {
      localStorage.setItem("frg-lang", select.value);
      translateText(select.value);
    });
    wrap.appendChild(select);
    host.appendChild(wrap);
  }

  let lang = localStorage.getItem("frg-lang");
  if (!LANGS.some(([code]) => code === lang)) lang = normalizeBrowserLang(navigator.language);
  addPicker(lang);
  translateText(lang);
})();