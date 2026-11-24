// ============================================================
// 두근두근 닥터X - 계수정 루트
// 대사·점수를 바꾸고 싶으면 2번(대본)과 3번(엔딩)만 고치면 돼요.
// ============================================================


// ============================================================
// 1. 배경 이름표 (image 폴더의 파일)
// ============================================================
const BACKGROUNDS = {
  lobby: "image/bg_lobby.jpg",
  hallway: "image/bg_hallway.jpg",
  store: "image/bg_store.jpg",
  or: "image/bg_or.jpg",
  room: "image/bg_room.jpg",
  rooftop: "image/bg_rooftop.jpg"
};


// ============================================================
// 1-2. 계수정 표정 이름표 (image 폴더의 사진)
// ============================================================
const FACES = {
  basic: "image/sujeong_basic.png",          // 평소
  banana: "image/sujeong_banana.png",        // 바나나 우유 받았을 때
  scalpel: "image/sujeong_scalpel.png",      // 메스·봉합 시킬 때
  fail: "image/sujeong_fail.png",            // 메스·봉합 실패
  clawAsk: "image/sujeong_claw_ask.png",     // 뽑기 부탁
  clawFail: "image/sujeong_claw_fail.png",   // 뽑기 실패
  clawSuccess: "image/sujeong_claw_success.png", // 뽑기 성공 (봉합 성공에도 사용)
  hidden: "image/sujeong_hidden.png",       // 히든 엔딩
  run: "image/sujeong_run.png"              // 도망 엔딩
};


// ============================================================
// 2. 대본
//  name: "계수정" / "player"(플레이어 이름) / ""(이름표 없는 나레이션)
//  bg: 배경 바꾸기 (위 1번의 이름)
//  char: true → 계수정 등장, false → 퇴장
//  face: 계수정 표정 바꾸기 (위 1-2번의 이름)
//  {player} → 플레이어가 입력한 이름으로 바뀜
//  (임시) 표시된 대사는 나중에 원하는 대사로 바꾸세요.
// ============================================================
const stories = {
  sujeong: [
    // --- 1-1 첫만남 ---
    { bg: "lobby", char: false, name: "player", text: "어떡하지? 지각 할 것 같은데…" },
    { char: true, face: "basic", name: "계수정", text: "누구지?" },
    { name: "player", text: "안녕하세요! 오늘부터 근무하게 된 인턴입니다!" },
    {
      name: "계수정",
      text: "아.",
      question: "뭐라고 대답할까?",
      choices: [
        {
          text: "길 좀 알려주세요…",
          love: -5,
          reply: [
            { name: "player", text: "길 좀 알려주세요…" },
            { face: "fail", name: "계수정", text: "그런건 계약내용에 없었어서." }
          ]
        },
        {
          text: "그쪽은 누군데 초면에 반말이에요?",
          love: 0,
          reply: [
            { name: "player", text: "그쪽은 누군데 초면에 반말이에요?" },
            { name: "계수정", text: "계수정." }
          ]
        },
        {
          text: "바나나 우유 드실래요?",
          love: 5,
          reply: [
            { name: "player", text: "바나나 우유 드실래요?" },
            { face: "banana", name: "계수정", text: "...... 길 정도는 알려줄 수 있어." }
          ]
        },
        {
          text: "마취과의 조원진 교수님을 아세요?",
          love: 0,
          mystery: 1,
          reply: [
            { name: "player", text: "혹시… 마취과의 조원진 교수님을 아세요?" },
            { face: "basic", name: "계수정", text: "......그건 왜 묻지?" }
          ]
        }
      ]
    },

    // --- 매점: 바나나 우유 ---
    { bg: "store", face: "basic", name: "", text: "(점심시간, 병원 매점에서 계수정과 다시 마주쳤다.)" }, // (임시)
    {
      name: "계수정",
      text: "바나나 우유 있습니까? 아니면 칸쵸라도.",
      choices: [
        {
          text: "🍌 있어요",
          love: 10,
          reply: [
            { name: "player", text: "여기 있어요, 선생님." },
            { face: "banana", name: "계수정", text: "{player}, 고맙습니다." }
          ]
        },
        {
          text: "🙅 없어요",
          love: -5,
          reply: [
            { name: "player", text: "죄송해요, 없어요..." },
            { face: "fail", name: "계수정", text: "바나나 우유가 얼마나 중요한건지 모르는겁니까" }
          ]
        },
        {
          text: "🤔 조원진 교수님이랑 친하신가요?",
          love: 0,
          mystery: 1,
          reply: [
            { name: "player", text: "근데… 조원진 교수님이랑 친하신가요?" },
            { face: "basic", name: "계수정", text: "...바나나 우유 얘기 중이었습니다만." } // (임시)
          ]
        }
      ]
    },

    // --- 수술실: 메스 ---
    { bg: "hallway", face: "basic", name: "", text: "(그때, 병원 전체에 응급 호출이 울렸다.)" }, // (임시)
    { name: "계수정", text: "수술 들어가야돼. 따라와.." },
    {
      bg: "or",
      face: "scalpel",
      name: "계수정",
      text: "메스.",
      minigame: {
        type: "scalpel",
        success: { love: 20, reply: [{ face: "scalpel", name: "계수정", text: "... 잘하네." }] },
        fail: { love: -10, reply: [{ face: "fail", name: "계수정", text: "내 수술방에 메스조차 건네지 못하는 사람은 필요없어.." }] }
      }
    },

    // --- 수술실: 봉합 --- (대사 전부 임시)
    {
      face: "scalpel",
      name: "계수정",
      text: "봉합은 {player} 선생이 해 보세요.",
      minigame: {
        type: "suture",
        success: { love: 30, reply: [{ face: "clawSuccess", name: "계수정", text: "깔끔하네요. 합격입니다." }] },
        fail: { love: -10, reply: [{ face: "fail", name: "계수정", text: "...비키세요. 내가 하죠." }] }
      }
    },

    // --- 수술 후: 조원진 떡밥 선택지 --- (임시)
    {
      face: "basic",
      name: "계수정",
      text: "수고했습니다. 잠깐 쉬죠.",
      question: "뭐라고 할까?",
      choices: [
        {
          text: "수고하셨습니다, 선생님!",
          love: 0,
          reply: [
            { name: "player", text: "수고하셨습니다, 선생님!" },
            { name: "계수정", text: "...그쪽도." }
          ]
        },
        {
          text: "계선생님, 조원진 교수님이 부르세요",
          love: 0,
          mystery: 1,
          reply: [
            { name: "player", text: "아 참, 계선생님! 조원진 교수님이 부르세요." },
            { face: "clawSuccess", name: "계수정", text: "...지금 간다고 전해 주세요." }
          ]
        }
      ]
    },

    // --- 매점: 바나나우유 뽑기 --- (대사 전부 임시)
    { bg: "store", face: "clawAsk", name: "", text: "(수술이 끝나고, 매점 앞 뽑기 기계.)" },
    {
      name: "계수정",
      text: "저 안에 바나나 우유. 뽑을 수 있습니까?",
      minigame: {
        type: "claw",
        success: { love: 35, reply: [{ face: "clawSuccess", name: "계수정", text: "...고맙습니다. 이건 기억해 두죠." }] },
        fail: { love: -10, reply: [{ face: "clawFail", name: "계수정", text: "됐습니다. 내가 사 먹죠." }] }
      }
    },

    // --- 옥상: 엔딩 직전 --- (임시)
    { bg: "rooftop", face: "basic", name: "", text: "(퇴근길, 병원 옥상.)" },
    { name: "계수정", text: "{player} 선생. 오늘 하루, 어땠습니까?" },
    { name: "", text: "(지금 아니면 기회가 없다. 용기를 내자!)" }, // (임시)
    { name: "player", text: "선생님… 저, 선생님 좋아해요!" } // (임시)
  ]
};


// ============================================================
// 3. 엔딩 (점수 높은 것부터 순서대로!)  ※ 문구는 전부 임시
// ============================================================
const endings = {
  sujeong: [
    {
      id: "sujeong_hidden",
      hidden: true,
      range: "히든",
      title: "HIDDEN END 🤫 계수정에게는 이미…",
      text: "",
      lines: [
        { face: "basic", name: "계수정", text: "……" },
        { face: "hidden", name: "계수정", text: "미안합니다. 사실 저, 조원진 교수님이랑 사귀고 있습니다." },
        { name: "player", text: "네…?!" } // (임시)
      ]
    },
    { id: "sujeong_happy", min: 100, range: "100점", title: "HAPPY END ♥", text: "", phone: true },
    { id: "sujeong_sad", min: 70, range: "70~99점", title: "SAD END 💔 계수정에게 거절당했어요", text: "계수정: 그럴 시간있으면, 그 시간에 봉합 연습이나 더 해.." },
    { id: "sujeong_normal", min: 40, range: "40~69점", title: "NORMAL END 🤝 좋은 동료로 남았어요", text: "계수정: 내일 수술, 늦지 마." },
    { id: "sujeong_bad", min: -999, range: "39점 이하", title: "BAD END 🏃 계수정이 도망갔어요", text: "", lines: [{ face: "run", name: "계수정", text: "...바나나 우유 사러 가야 해서. 먼저 갑니다." }] }
  ]
};


// ============================================================
// 4. 미니게임 설명 + 난이도
// ============================================================
const MG_TEXT = {
  scalpel: { title: "🔪 메스를 건네라!", info: "표시가 초록 영역에 왔을 때 스페이스바 또는 클릭! (4번 중 3번 성공)" },
  suture: { title: "🧵 봉합하기!", info: "1번부터 7번까지 순서대로 클릭! (제한시간 6초, 순서 틀리면 실패)" },
  claw: { title: "🍌 바나나우유 뽑기!", info: "집게가 바나나우유 위에 왔을 때 스페이스바 또는 클릭! (기회 3번)" }
};

// 미스터리 점수가 이만큼 모이면 고백할 때 히든 엔딩이 나와요 (조원진 선택지 3개 중 3개)
const MYSTERY_NEED = 3;

const SETTINGS = {
  textSpeed: 35,                                          // 글자 나오는 속도 (작을수록 빠름)
  scalpel: { tries: 4, need: 3, speed: 8, zoneWidth: 48 }, // 메스: 시도, 필요 성공, 속도, 초록 영역 너비
  suture: { dots: 7, time: 6 },                            // 봉합: 점 개수, 제한시간(초)
  claw: { tries: 3, speed: 6, grab: 20 }                             // 뽑기: 기회, 집게 속도
};


// ============================================================
// 5. 게임 상태
// ============================================================
let playerName = "";
let currentRoute = "";
let story = [];
let index = 0;
let love = 0;
let mystery = 0;
let endingChosen = null;
let state = "title";   // title / play / ending
let busy = false;      // 선택지·미니게임 중이면 true
let typing = false;
let typeTimer = null;
let fullText = "";
let mgLine = null;
let mgGame = null;


// ============================================================
// 6. 화면 상자 찾기
// ============================================================
const $ = (id) => document.getElementById(id);
const game = $("game");
const bg = $("bg");
const character = $("character");
const charImg = $("char-img");
const charPlaceholder = $("char-placeholder");
const dialogueBox = $("dialogue-box");
const nameTag = $("name-tag");
const textBox = $("text");
const nextMark = $("next-mark");
const loveFx = $("love-fx");
const choicesBox = $("choices");
const choiceTitle = $("choice-title");
const choiceList = $("choice-list");
const minigameBox = $("minigame");
const mgTitle = $("mg-title");
const mgInfo = $("mg-info");
const mgArea = $("mg-area");
const mgResult = $("mg-result");
const titleScreen = $("title-screen");
const nameScreen = $("name-screen");
const nameInput = $("name-input");
const endingScreen = $("ending-screen");
const endingTitle = $("ending-title");
const endingScore = $("ending-score");
const endingText = $("ending-text");
const popup = $("popup");
const popupTitle = $("popup-title");
const popupBody = $("popup-body");


// ============================================================
// 7. 화면 크기 맞추기 + 캐릭터 사진 확인
// ============================================================
function fitGame() {
  const scale = Math.min(window.innerWidth / 960, window.innerHeight / 540);
  game.style.transform = "scale(" + scale + ")";
}
window.addEventListener("resize", fitGame);
fitGame();

function showCharPlaceholder() {
  charImg.classList.add("hidden");
  charPlaceholder.classList.remove("hidden");
}
charImg.addEventListener("error", showCharPlaceholder);
if (charImg.complete && charImg.naturalWidth === 0) {
  showCharPlaceholder();
}


// ============================================================
// 8. 대사 진행
// ============================================================
function fill(str) {
  return str.replaceAll("{player}", playerName);
}

function setBg(key) {
  bg.style.backgroundImage = key ? "url(" + BACKGROUNDS[key] + ")" : "none";
}

function typeText(str) {
  clearInterval(typeTimer);
  const chars = Array.from(str);
  fullText = str;
  textBox.textContent = "";
  nextMark.classList.remove("show");
  typing = true;
  let i = 0;
  typeTimer = setInterval(function () {
    i = i + 1;
    textBox.textContent = chars.slice(0, i).join("");
    if (i >= chars.length) {
      finishTyping();
    }
  }, SETTINGS.textSpeed);
}

function finishTyping() {
  clearInterval(typeTimer);
  textBox.textContent = fullText;
  typing = false;
  nextMark.classList.add("show");
}

function showLine() {
  const line = story[index];
  if (line.bg) {
    setBg(line.bg);
  }
  if (line.char === true) {
    character.classList.remove("hidden");
  }
  if (line.char === false) {
    character.classList.add("hidden");
  }
  if (line.face && FACES[line.face]) {
    charImg.classList.remove("hidden");
    charPlaceholder.classList.add("hidden");
    charImg.src = FACES[line.face];
    // 전신 사진(도망)은 크게 띄우고 아래를 대화창 뒤로 숨겨서 상반신만 보이게
    character.classList.toggle("full-body", line.face === "run");
  }
  let speaker = line.name;
  if (speaker === "player") {
    speaker = playerName;
  }
  nameTag.textContent = speaker ? "♥ " + speaker : "";
  typeText(fill(line.text));
}

function advance() {
  if (state !== "play" || busy) {
    return;
  }
  if (typing) {
    finishTyping();
    return;
  }
  const line = story[index];
  if (line.choices) {
    openChoices(line);
    return;
  }
  if (line.minigame) {
    openMinigame(line);
    return;
  }
  goNext();
}

function goNext() {
  if (index < story.length - 1) {
    index = index + 1;
    showLine();
  } else {
    showEnding();
  }
}

function applyResult(result) {
  changeLove(result.love);
  if (result.mystery) {
    changeMystery(result.mystery);
  }
  story.splice(index + 1, 0, ...result.reply);
  goNext();
}

function changeMystery(amount) {
  mystery = mystery + amount;
  console.log("미스터리 점수:", mystery);
  loveFx.textContent = "🕵️ ?";
  loveFx.classList.add("minus");
  loveFx.classList.remove("play");
  void loveFx.offsetWidth;
  loveFx.classList.add("play");
}

function changeLove(amount) {
  love = love + amount;
  console.log("현재 호감도:", love);
  if (amount === 0) {
    return;
  }
  loveFx.textContent = (amount > 0 ? "♥ +" : "💔 ") + amount;
  loveFx.classList.toggle("minus", amount < 0);
  loveFx.classList.remove("play");
  void loveFx.offsetWidth;
  loveFx.classList.add("play");
}


// ============================================================
// 9. 선택지
// ============================================================
function openChoices(line) {
  busy = true;
  choiceTitle.textContent = fill(line.question || line.text);
  choiceList.innerHTML = "";

  for (const choice of line.choices) {
    const button = document.createElement("button");
    button.textContent = fill(choice.text);
    button.addEventListener("click", function () {
      clickSound();
      choicesBox.classList.add("hidden");
      dialogueBox.classList.remove("hidden");
      busy = false;
      applyResult(choice);
    });
    choiceList.appendChild(button);
  }

  dialogueBox.classList.add("hidden");
  choicesBox.classList.remove("hidden");
}


// ============================================================
// 10. 미니게임 공통
// ============================================================
function openMinigame(line) {
  busy = true;
  mgLine = line;
  const type = line.minigame.type;
  mgTitle.textContent = MG_TEXT[type].title;
  mgInfo.textContent = MG_TEXT[type].info;
  mgArea.innerHTML = "";
  mgArea.onclick = null;
  mgResult.textContent = "";
  mgResult.className = "";

  dialogueBox.classList.add("hidden");
  minigameBox.classList.remove("hidden");

  mgGame = MINIGAMES[type]();
  mgGame.start();
}

function endMinigame(success, why) {
  if (!mgGame) {
    return;
  }
  mgGame.stop();
  mgGame = null;
  mgArea.onclick = null;
  mgResult.textContent = (success ? "★ 성공! ★" : "✘ 실패...") + (why ? " " + why : "");
  mgResult.className = success ? "ok" : "bad";

  setTimeout(function () {
    minigameBox.classList.add("hidden");
    dialogueBox.classList.remove("hidden");
    busy = false;
    const result = success ? mgLine.minigame.success : mgLine.minigame.fail;
    mgLine = null;
    applyResult(result);
  }, 1300);
}

function showMessage(text, good) {
  mgResult.textContent = text;
  mgResult.className = good ? "ok" : "bad";
}


// ============================================================
// 11. 미니게임 ① 메스 건네기 (타이밍 바)
// ============================================================
function makeScalpelGame() {
  const S = SETTINGS.scalpel;
  const BAR = 514;
  let tries = 0;
  let hits = 0;
  let pos = 0;
  let dir = 1;
  let zoneLeft = 0;
  let timer = null;
  let pause = false;
  const marks = [];
  let zone, marker, triesBox;

  function placeZone() {
    zoneLeft = 40 + Math.random() * (BAR - 80 - S.zoneWidth);
    zone.style.left = zoneLeft + "px";
    zone.style.width = S.zoneWidth + "px";
  }

  function drawTries() {
    const list = [];
    for (let i = 0; i < S.tries; i++) {
      list.push(marks[i] || "♡");
    }
    triesBox.textContent = list.join(" ");
  }

  function move() {
    if (pause) {
      return;
    }
    pos = pos + S.speed * dir;
    if (pos >= BAR) {
      pos = BAR;
      dir = -1;
    }
    if (pos <= 0) {
      pos = 0;
      dir = 1;
    }
    marker.style.left = pos + "px";
  }

  function press() {
    if (pause) {
      return;
    }
    tries = tries + 1;
    const hit = pos >= zoneLeft && pos <= zoneLeft + S.zoneWidth;
    if (hit) {
      hits = hits + 1;
      marks.push("💗");
      showMessage("✔ 슥-! 정확해요!", true);
    } else {
      marks.push("✖️");
      showMessage("✘ 앗, 빗나갔다!", false);
    }
    drawTries();

    if (hits >= S.need) {
      endMinigame(true);
      return;
    }
    if (tries - hits > S.tries - S.need) {
      endMinigame(false);
      return;
    }
    pause = true;
    setTimeout(function () {
      pause = false;
      placeZone();
    }, 500);
  }

  return {
    start: function () {
      mgArea.innerHTML =
        '<div class="tbar"><div class="tzone"></div><div class="tmarker"></div></div>' +
        '<div class="tries"></div>';
      zone = mgArea.querySelector(".tzone");
      marker = mgArea.querySelector(".tmarker");
      triesBox = mgArea.querySelector(".tries");
      placeZone();
      drawTries();
      timer = setInterval(move, 16);
      mgArea.onclick = press;
    },
    press: press,
    stop: function () {
      clearInterval(timer);
    }
  };
}


// ============================================================
// 12. 미니게임 ② 봉합 (순서대로 클릭)
// ============================================================
function makeSutureGame() {
  const S = SETTINGS.suture;
  const points = [];
  let nextNum = 1;
  let timer = null;
  let stitches, timerFill;

  function drawStitch(a, b) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", a.x);
    line.setAttribute("y1", a.y);
    line.setAttribute("x2", b.x);
    line.setAttribute("y2", b.y);
    line.setAttribute("stroke", "#1d1d1d");
    line.setAttribute("stroke-width", "5");
    line.setAttribute("stroke-linecap", "round");
    stitches.appendChild(line);
  }

  function clickDot(num, button) {
    if (!mgGame) {
      return;
    }
    if (num !== nextNum) {
      endMinigame(false, "(순서가 틀렸어요!)");
      return;
    }
    button.classList.add("done");
    if (num > 1) {
      drawStitch(points[num - 2], points[num - 1]);
    }
    nextNum = nextNum + 1;
    if (nextNum > S.dots) {
      endMinigame(true);
    }
  }

  return {
    start: function () {
      mgArea.innerHTML =
        '<div class="suture-area">' +
        '<svg width="540" height="230">' +
        '<path d="M 30 115 Q 150 90 270 115 T 510 115" stroke="#d94b6a" stroke-width="12" fill="none" stroke-linecap="round"/>' +
        '<g class="stitches"></g>' +
        '</svg></div>' +
        '<div class="timer"><div class="timer-fill"></div></div>';
      const area = mgArea.querySelector(".suture-area");
      stitches = mgArea.querySelector(".stitches");
      timerFill = mgArea.querySelector(".timer-fill");

      for (let i = 1; i <= S.dots; i++) {
        const p = {
          x: 60 + (i - 1) * (420 / (S.dots - 1)),
          y: i % 2 === 1 ? 62 : 168
        };
        points.push(p);
        const button = document.createElement("button");
        button.className = "stitch-dot";
        button.textContent = i;
        button.style.left = p.x + "px";
        button.style.top = p.y + "px";
        button.addEventListener("click", function () {
          clickDot(i, button);
        });
        area.appendChild(button);
      }

      const startTime = Date.now();
      timer = setInterval(function () {
        const remain = S.time * 1000 - (Date.now() - startTime);
        timerFill.style.width = Math.max(0, (remain / (S.time * 1000)) * 100) + "%";
        if (remain <= 0) {
          endMinigame(false, "(⏰ 시간 초과!)");
        }
      }, 50);
    },
    stop: function () {
      clearInterval(timer);
    }
  };
}


// ============================================================
// 13. 미니게임 ③ 바나나우유 뽑기 (인형뽑기)
// ============================================================
function makeClawGame() {
  const S = SETTINGS.claw;
  const W = 534;
  const SLOTS = [70, 170, 270, 370, 470];
  const NAMES = { banana: "🍌 바나나우유", strawberry: "🍓 딸기우유", choco: "🍫 초코우유" };
  const EMOJI = { banana: "🍌", strawberry: "🍓", choco: "🍫" };
  let tries = 0;
  let x = 40;
  let dir = 1;
  let timer = null;
  let dropping = false;
  let area, claw, rope, triesBox;
  let milks = [];

  function setupMilks() {
    for (const m of milks) {
      m.el.remove();
    }
    milks = [];
    const bananaSlot = Math.floor(Math.random() * SLOTS.length);
    SLOTS.forEach(function (slotX, i) {
      let kind = Math.random() < 0.5 ? "strawberry" : "choco";
      if (i === bananaSlot) {
        kind = "banana";
      }
      const el = document.createElement("div");
      el.className = "milk " + kind;
      el.textContent = EMOJI[kind];
      el.style.left = slotX + "px";
      area.appendChild(el);
      milks.push({ x: slotX, kind: kind, el: el });
    });
  }

  function drawTries() {
    triesBox.textContent = "남은 기회: " + "🪙".repeat(S.tries - tries);
  }

  function move() {
    if (dropping) {
      return;
    }
    x = x + S.speed * dir;
    if (x >= W - 30) {
      x = W - 30;
      dir = -1;
    }
    if (x <= 30) {
      x = 30;
      dir = 1;
    }
    claw.style.left = x + "px";
  }

  function press() {
    if (dropping) {
      return;
    }
    dropping = true;
    rope.style.height = "112px";

    setTimeout(function () {
      let caught = null;
      for (const m of milks) {
        if (Math.abs(m.x - x) < S.grab) {
          caught = m;
        }
      }
      rope.style.height = "20px";
      if (caught) {
        caught.el.style.bottom = "130px";
      }

      setTimeout(function () {
        tries = tries + 1;
        if (caught && caught.kind === "banana") {
          endMinigame(true, "(" + NAMES.banana + " GET!)");
          return;
        }
        if (caught) {
          showMessage(NAMES[caught.kind] + "... 꽝!", false);
        } else {
          showMessage("허공을 집었다!", false);
        }
        drawTries();
        if (tries >= S.tries) {
          endMinigame(false);
          return;
        }
        setTimeout(function () {
          setupMilks();
          dropping = false;
        }, 700);
      }, 600);
    }, 550);
  }

  return {
    start: function () {
      mgArea.innerHTML =
        '<div class="claw-area">' +
        '<div class="claw-rail"></div>' +
        '<div class="claw"><div class="claw-rope"></div><div class="claw-hand">🪝</div></div>' +
        '<div class="claw-floor"></div>' +
        '</div>' +
        '<div class="tries"></div>';
      area = mgArea.querySelector(".claw-area");
      claw = mgArea.querySelector(".claw");
      rope = mgArea.querySelector(".claw-rope");
      triesBox = mgArea.querySelector(".tries");
      setupMilks();
      drawTries();
      timer = setInterval(move, 16);
      mgArea.onclick = press;
    },
    press: press,
    stop: function () {
      clearInterval(timer);
    }
  };
}

const MINIGAMES = {
  scalpel: makeScalpelGame,
  suture: makeSutureGame,
  claw: makeClawGame
};


// ============================================================
// 14. 시작 / 엔딩
// ============================================================
function startGame(route) {
  playerName = nameInput.value.trim();
  if (playerName === "") {
    nameInput.placeholder = "이름을 입력해 주세요!";
    nameInput.focus();
    return;
  }
  currentRoute = route;
  story = stories[route].slice();
  index = 0;
  love = 0;
  mystery = 0;
  endingChosen = null;
  busy = false;
  state = "play";
  nameScreen.classList.add("hidden");
  dialogueBox.classList.remove("hidden");
  showLine();
}

function pickEnding() {
  const list = endings[currentRoute];
  for (const e of list) {
    if (e.hidden) {
      if (mystery >= MYSTERY_NEED) {
        return e;
      }
    } else if (love >= e.min) {
      return e;
    }
  }
  return list[list.length - 1];
}

function showEnding() {
  // 엔딩을 고르고, 엔딩 전에 나올 대사(lines)가 있으면 먼저 보여 줘요
  if (!endingChosen) {
    endingChosen = pickEnding();
    if (endingChosen.lines && endingChosen.lines.length > 0) {
      story.push(...endingChosen.lines);
      goNext();
      return;
    }
  }
  state = "ending";
  const ending = endingChosen;
  saveEnding(ending.id);
  endingTitle.textContent = ending.title;
  endingScore.textContent = ending.hidden ? "🕵️ 미스터리 " + mystery + "점 · 호감도 " + love + "점" : "호감도 " + love + "점";
  endingText.textContent = fill(ending.text);
  dialogueBox.classList.add("hidden");
  character.classList.add("hidden");

  if (ending.phone) {
    playPhoneScene(function () {
      endingScreen.classList.remove("hidden");
    });
  } else {
    endingScreen.classList.remove("hidden");
  }
}


// ============================================================
// 14-2. 해피 엔딩 문자 장면 (영상처럼 자동 재생, 클릭하면 건너뛰기)
// ============================================================
const PHONE_SCRIPT = [
  { wait: 900, action: "noti" },
  { wait: 1600, action: "dots" },
  { wait: 1200, action: "photo", src: "image/sujeong_happy_selfie.jpg" },
  { wait: 1300, action: "dots" },
  { wait: 1200, action: "text", text: "여자친구 이제 퇴근." },
  { wait: 900, action: "hearts" },
  { wait: 2200, action: "end" }
];

const phoneScene = $("phone-scene");
const phoneChat = $("phone-chat");
const phoneNoti = $("phone-noti");
let phoneTimers = [];
let phoneDone = null;

function ding() {
  if (!soundOn) {
    return;
  }
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    [880, 1320].forEach(function (freq, i) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.value = freq;
      osc.type = "sine";
      gain.gain.setValueAtTime(0.0001, ctx.currentTime + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + i * 0.12 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.12 + 0.35);
      osc.connect(gain).connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.12);
      osc.stop(ctx.currentTime + i * 0.12 + 0.4);
    });
  } catch (e) {
    // 소리가 안 나는 환경이면 넘어가요
  }
}

function removeDots() {
  const dots = phoneChat.querySelector(".dots");
  if (dots) {
    dots.remove();
  }
}

function addBubble(className, html) {
  removeDots();
  const bubble = document.createElement("div");
  bubble.className = "bubble " + className;
  bubble.innerHTML = html;
  phoneChat.appendChild(bubble);
}

function heartBurst() {
  for (let i = 0; i < 14; i++) {
    const heart = document.createElement("div");
    heart.className = "burst";
    heart.textContent = "♥";
    heart.style.left = "480px";
    heart.style.top = "270px";
    heart.style.setProperty("--dx", Math.cos((i / 14) * Math.PI * 2) * 300 + "px");
    heart.style.setProperty("--dy", Math.sin((i / 14) * Math.PI * 2) * 200 + "px");
    phoneScene.appendChild(heart);
  }
}

function runPhoneStep(step) {
  if (step.action === "noti") {
    phoneNoti.classList.add("show");
    ding();
  }
  if (step.action === "dots") {
    phoneNoti.classList.remove("show");
    addBubble("dots", "• • •");
  }
  if (step.action === "photo") {
    addBubble("photo", '<img src="' + step.src + '" alt="">');
    ding();
  }
  if (step.action === "text") {
    addBubble("", step.text);
    ding();
  }
  if (step.action === "hearts") {
    heartBurst();
  }
  if (step.action === "end") {
    finishPhoneScene();
  }
}

function playPhoneScene(onDone) {
  phoneDone = onDone;
  phoneChat.innerHTML = "";
  phoneNoti.classList.remove("show");
  phoneScene.querySelectorAll(".burst").forEach(function (el) {
    el.remove();
  });
  phoneScene.classList.remove("hidden");

  let time = 0;
  for (const step of PHONE_SCRIPT) {
    time = time + step.wait;
    phoneTimers.push(setTimeout(function () {
      runPhoneStep(step);
    }, time));
  }
}

function finishPhoneScene() {
  phoneTimers.forEach(clearTimeout);
  phoneTimers = [];
  phoneScene.classList.add("hidden");
  if (phoneDone) {
    const done = phoneDone;
    phoneDone = null;
    done();
  }
}

phoneScene.addEventListener("click", finishPhoneScene);

function goTitle() {
  state = "title";
  endingScreen.classList.add("hidden");
  nameScreen.classList.add("hidden");
  dialogueBox.classList.add("hidden");
  character.classList.add("hidden");
  setBg(null);
  nameInput.value = "";
  nameInput.placeholder = "이름 입력 (최대 6자)";
  titleScreen.classList.remove("hidden");
}


// ============================================================
// 15. 엔딩 도감 (이 브라우저에 기록) / 게임 방법
// ============================================================
function loadSeen() {
  try {
    return JSON.parse(localStorage.getItem("drx_seen") || "[]");
  } catch (e) {
    return [];
  }
}

function saveEnding(id) {
  const seen = loadSeen();
  if (!seen.includes(id)) {
    seen.push(id);
  }
  try {
    localStorage.setItem("drx_seen", JSON.stringify(seen));
  } catch (e) {
    // 저장이 안 되는 환경이면 그냥 넘어가요
  }
}

function openPopup(title, html) {
  popupTitle.textContent = title;
  popupBody.innerHTML = html;
  popup.classList.remove("hidden");
}

function openAlbum() {
  const seen = loadSeen();
  let html = "<p>♥ 계수정 루트</p><ul>";
  for (const e of endings.sujeong) {
    if (seen.includes(e.id)) {
      html += "<li>" + e.title + " <small>(" + e.range + ")</small></li>";
    } else {
      html += '<li class="locked">??? <small>(' + (e.hidden ? "히든 엔딩" : "호감도 " + e.range) + ")</small></li>";
    }
  }
  html += '</ul><p>🔒 조원진 루트 · 업데이트 예정</p>';
  openPopup("💘 엔딩 도감", html);
}

function openHowTo() {
  openPopup(
    "📖 게임 방법",
    "<ul>" +
      "<li>💬 대화창 클릭 또는 스페이스바로 대사 넘기기</li>" +
      "<li>♥ 선택지에 따라 호감도가 오르거나 내려가요</li>" +
      "<li>🔪 메스: 표시가 초록 영역에 왔을 때 스페이스바!</li>" +
      "<li>🧵 봉합: 1번부터 순서대로 빠르게 클릭!</li>" +
      "<li>🍌 뽑기: 집게가 바나나우유 위에 왔을 때 스페이스바!</li>" +
      "<li>💘 호감도 100점이면 연애 성공! 낮으면…?</li>" +
      "<li>🕵️ 어떤 선택을 계속하면… 숨겨진 엔딩이?</li>" +
    "</ul>"
  );
}


// ============================================================
// 15-2. 배경음악 + 클릭 효과음
// ============================================================
const bgm = $("bgm");
const btnSound = $("btn-sound");
let soundOn = true;
let audioCtx = null;
bgm.volume = 0.4;

function startBgm() {
  if (soundOn && bgm.paused) {
    bgm.play().catch(function () {
      // 브라우저가 막으면 다음 클릭 때 다시 시도
    });
  }
}

function clickSound() {
  if (!soundOn) {
    return;
  }
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const t = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(660, t);
    osc.frequency.exponentialRampToValueAtTime(1320, t + 0.08);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.3, t + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start(t);
    osc.stop(t + 0.2);
  } catch (e) {
    // 소리가 안 나는 환경이면 넘어가요
  }
}

btnSound.addEventListener("click", function () {
  soundOn = !soundOn;
  btnSound.classList.toggle("off", !soundOn);
  btnSound.textContent = soundOn ? "♪" : "✕";
  if (soundOn) {
    startBgm();
  } else {
    bgm.pause();
  }
});

// 화면을 처음 누르는 순간 배경음악 시작 (브라우저는 클릭 전에 소리를 못 틀어요)
document.addEventListener("pointerdown", startBgm);
document.addEventListener("keydown", startBgm);


// ============================================================
// 16. 버튼·키보드 연결
// ============================================================
$("btn-start").addEventListener("click", function () {
  titleScreen.classList.add("hidden");
  nameScreen.classList.remove("hidden");
  nameInput.focus();
});

$("btn-back").addEventListener("click", goTitle);
$("btn-sujeong").addEventListener("click", function () {
  startGame("sujeong");
});
$("btn-howto").addEventListener("click", openHowTo);
$("btn-album").addEventListener("click", openAlbum);
$("btn-album2").addEventListener("click", openAlbum);
$("btn-restart").addEventListener("click", goTitle);
$("popup-close").addEventListener("click", function () {
  popup.classList.add("hidden");
});

dialogueBox.addEventListener("click", advance);
bg.addEventListener("click", advance);

document.addEventListener("keydown", function (e) {
  if (e.target.tagName === "INPUT") {
    if (e.key === "Enter") {
      startGame("sujeong");
    }
    return;
  }
  if (e.code === "Space" || e.key === "Enter") {
    e.preventDefault();
    if (mgGame) {
      if (mgGame.press) {
        mgGame.press();
      }
      return;
    }
    if (!popup.classList.contains("hidden")) {
      return;
    }
    advance();
  }
});
