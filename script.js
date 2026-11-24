// ============================================================
// 두근두근 닥터X - 계수정 루트
// 대사·점수를 바꾸고 싶으면 2번(대본)과 3번(엔딩)만 고치면 돼요.
// ============================================================



// ============================================================
// 0. 중국어(간체) 번역표 — 왼쪽 한국어 문장이 오른쪽 중국어로 바뀌어요
//    대사를 고치면 여기 왼쪽 문장도 똑같이 고쳐 주세요 (없으면 한국어 그대로 나와요)
// ============================================================
const ZH = {
  // 장면 1
  "어떡하지? 지각 할 것 같은데…": "怎么办？好像要迟到了…",
  "누구지?": "谁啊？",
  "안녕하세요! 오늘부터 근무하게 된 인턴입니다!": "您好！我是今天开始上班的实习生！",
  "아.": "啊。",
  "뭐라고 대답할까?": "该怎么回答呢？",
  "길 좀 알려주세요…": "能给我指个路吗…",
  "그런건 계약내용에 없었어서.": "合同里可没写这个。",
  "그쪽은 누군데 초면에 반말이에요?": "你谁啊？第一次见面就不用敬语？",
  "계수정.": "계수정。",
  "바나나 우유 드실래요?": "要喝香蕉牛奶吗？",
  "...... 길 정도는 알려줄 수 있어.": "……指个路还是可以的。",
  "마취과의 조원진 교수님을 아세요?": "您认识麻醉科的조원진教授吗？",
  "혹시… 마취과의 조원진 교수님을 아세요?": "请问…您认识麻醉科的조원진教授吗？",
  "......그건 왜 묻지?": "……为什么问这个？",
  // 장면 2
  "(점심시간, 병원 매점에서 계수정과 다시 마주쳤다.)": "（午休时间，在医院小卖部又碰到了계수정。）",
  "바나나 우유 있습니까? 아니면 칸쵸라도.": "有香蕉牛奶吗？没有的话，Kancho饼干也行。",
  "🍌 있어요": "🍌 有",
  "🙅 없어요": "🙅 没有",
  "여기 있어요, 선생님.": "给您，医生。",
  "{player}, 고맙습니다.": "{player}，谢谢。",
  "죄송해요, 없어요...": "对不起，没有…",
  "바나나 우유가 얼마나 중요한건지 모르는겁니까": "你不知道香蕉牛奶有多重要吗？",
  "🤔 조원진 교수님이랑 친하신가요?": "🤔 您和조원진教授很熟吗？",
  "근데… 조원진 교수님이랑 친하신가요?": "不过…您和조원진教授很熟吗？",
  "...바나나 우유 얘기 중이었습니다만.": "…我们刚才在说香蕉牛奶的事。",
  // 장면 3
  "(그때, 병원 전체에 응급 호출이 울렸다.)": "（就在这时，全院响起了紧急呼叫。）",
  "수술 들어가야돼. 따라와..": "要进手术了。跟上…",
  "메스.": "手术刀。",
  "... 잘하네.": "……不错嘛。",
  "내 수술방에 메스조차 건네지 못하는 사람은 필요없어..": "连手术刀都递不好的人，我的手术室不需要…",
  // 장면 4
  "봉합은 {player} 선생이 해 보세요.": "缝合就交给{player}医生试试吧。",
  "깔끔하네요. 합격입니다.": "很利落。合格了。",
  "...비키세요. 내가 하죠.": "…让开。我来吧。",
  // 장면 5
  "수고했습니다. 잠깐 쉬죠.": "辛苦了。休息一下吧。",
  "뭐라고 할까?": "说点什么呢？",
  "수고하셨습니다, 선생님!": "您辛苦了，医生！",
  "...그쪽도.": "…你也是。",
  "계선생님, 조원진 교수님이 부르세요": "계医生，조원진教授找您",
  "아 참, 계선생님! 조원진 교수님이 부르세요.": "对了，계医生！조원진教授找您。",
  "...지금 간다고 전해 주세요.": "…帮我转告他，我马上过去。",
  // 장면 6
  "(수술이 끝나고, 매점 앞 뽑기 기계.)": "（手术结束后，小卖部门口的抓娃娃机。）",
  "저 안에 바나나 우유. 뽑을 수 있습니까?": "里面那个香蕉牛奶。你能抓到吗？",
  "...고맙습니다. 이건 기억해 두죠.": "…谢谢。这个我会记住的。",
  "됐습니다. 내가 사 먹죠.": "算了。我自己去买。",
  // 장면 7
  "(퇴근길, 병원 옥상.)": "（下班路上，医院天台。）",
  "{player} 선생. 오늘 하루, 어땠습니까?": "{player}医生。今天过得怎么样？",
  "(지금 아니면 기회가 없다. 용기를 내자!)": "（现在不说就没机会了。鼓起勇气！）",
  "선생님… 저, 선생님 좋아해요!": "医生…我、我喜欢您！",
  // 엔딩
  "미안합니다. 사실 저, 조원진 교수님이랑 사귀고 있습니다.": "对不起。其实我正在和조원진教授交往。",
  "네…?!": "什么…？！",
  "...바나나 우유 사러 가야 해서. 먼저 갑니다.": "…我得去买香蕉牛奶了。先走了。",
  "그럴 시간있으면, 그 시간에 봉합 연습이나 더 해..": "有那个时间，不如多练练缝合…",
  "계수정: 내일 수술, 늦지 마.": "계수정：明天的手术，别迟到。",
  "100점": "100分",
  "70~99점": "70~99分",
  "40~69점": "40~69分",
  "39점 이하": "39分以下",
  "히든": "隐藏",
  "여자친구 이제 퇴근.": "女朋友现在下班了。",
  // 미니게임
  "🔪 메스를 건네라!": "🔪 递手术刀！",
  "표시가 초록 영역에 왔을 때 아래 [지금!] 버튼 또는 스페이스바! (4번 중 3번 성공)": "指针进入绿色区域时，按下方的【就是现在！】按钮或空格键！（4次中成功3次）",
  "🔪 지금!": "🔪 就是现在！",
  "🪝 내려!": "🪝 放下！",
  "🧵 봉합하기!": "🧵 缝合！",
  "1번부터 7번까지 동그라미를 순서대로 터치! (제한시간 6초, 순서 틀리면 실패)": "按1到7的顺序点击圆圈！（限时6秒，顺序错误即失败）",
  "🍌 바나나우유 뽑기!": "🍌 抓香蕉牛奶！",
  "집게가 바나나우유 위에 왔을 때 아래 [내려!] 버튼 또는 스페이스바! (기회 3번)": "爪子移到香蕉牛奶上方时，按下方的【放下！】按钮或空格键！（3次机会）",
  "★ 성공! ★": "★ 成功！★",
  "✘ 실패...": "✘ 失败…",
  "✔ 슥-! 정확해요!": "✔ 唰—！很准！",
  "✘ 앗, 빗나갔다!": "✘ 啊，偏了！",
  "(순서가 틀렸어요!)": "（顺序错了！）",
  "(⏰ 시간 초과!)": "（⏰ 超时！）",
  "🍌 바나나우유": "🍌 香蕉牛奶",
  "🍓 딸기우유": "🍓 草莓牛奶",
  "🍫 초코우유": "🍫 巧克力牛奶",
  "... 꽝!": "……没抓到！",
  "허공을 집었다!": "抓了个空！",
  "남은 기회: ": "剩余机会：",
  // 화면 글자
  "♥ 병원 연애 시뮬레이션 ♥": "♥ 医院恋爱模拟 ♥",
  "게임 방법": "游戏玩法",
  "엔딩 도감": "结局图鉴",
  "당신의 이름은?": "你的名字是？",
  "누구에게 다가갈까요?": "想接近谁呢？",
  "← 돌아가기": "← 返回",
  "사진을 보냈습니다.": "发送了一张照片。",
  "클릭하면 건너뛰기 ▶": "点击跳过 ▶",
  "♥ 다시하기 ♥": "♥ 再玩一次 ♥",
  "닫기": "关闭",
  "이름 입력 (최대 6자)": "输入名字（最多6个字）",
  "이름을 입력해 주세요!": "请输入名字！",
  "호감도 ": "好感度 ",
  "점": "分",
  "🕵️ 미스터리 ": "🕵️ 神秘值 ",
  "히든 엔딩": "隐藏结局",
  "♥ 계수정 루트": "♥ 계수정线",
  "💘 엔딩 도감": "💘 结局图鉴",
  "📖 게임 방법": "📖 游戏玩法",
  "💬 대화창 클릭 또는 스페이스바로 대사 넘기기": "💬 点击对话框或按空格键继续对话",
  "♥ 선택지에 따라 호감도가 오르거나 내려가요": "♥ 好感度会随着选择上升或下降",
  "🔪 메스: 표시가 초록 영역에 왔을 때 [지금!] 버튼!": "🔪 手术刀：指针进入绿色区域时按【就是现在！】按钮！",
  "🧵 봉합: 1번부터 순서대로 빠르게 클릭!": "🧵 缝合：从1开始按顺序快速点击！",
  "🍌 뽑기: 집게가 바나나우유 위에 왔을 때 [내려!] 버튼!": "🍌 抓娃娃：爪子移到香蕉牛奶上方时按【放下！】按钮！",
  "💘 호감도 100점이면 연애 성공! 낮으면…?": "💘 好感度100分即恋爱成功！分数低的话…？",
  "🕵️ 어떤 선택을 계속하면… 숨겨진 엔딩이?": "🕵️ 一直做某种选择的话…会有隐藏结局？",
  // 조원진 루트
  "(외과에서 쫓겨난 다음 날. 마취과로 향하는 복도.)": "（被外科赶出来的第二天。走向麻醉科的走廊。）",
  "그쪽이 그 외과에서 쫓겨났다는 인턴이에요? 계수정 선생한테 말 많이 들었어요.": "你就是那个被外科赶出来的实习生？我从계수정医生那儿听说了不少。",
  "마취과가 편해보여서요": "麻醉科看起来比较轻松",
  "마취과가 편해보여서요.": "因为麻醉科看起来比较轻松。",
  "마취과가 만만한가보네.": "看来你觉得麻醉科很好混啊。",
  "이번엔 잘 할 자신 있습니다": "这次我有信心做好",
  "이번엔 잘 할 자신 있습니다!": "这次我有信心做好！",
  "… 믿어볼게요.": "……那我就信你一次。",
  "조교수님이랑 일하고싶었어요": "我一直想和조教授一起工作",
  "조교수님이랑 일하고싶었어요.": "我一直想和조教授一起工作。",
  "초면부터 아부는 그닥, 내 취향이 아니네요.": "第一次见面就拍马屁，不太合我胃口。",
  "교수님 말씀 많이 들었습니다": "久仰教授大名",
  "저도 교수님 말씀 많이 들었습니다.": "我也久仰教授大名。",
  "계선생이 내 얘기해요?": "계医生会提起我？",
  "(그날 밤. 휴대폰이 울렸다.)": "（那天晚上，手机响了。）",
  "저녁 먹었어요?": "吃晚饭了吗？",
  "요즘 애들은 뭐 좋아하지?": "现在的年轻人都喜欢什么？",
  "교수님이요♡": "喜欢教授您♡",
  "…일찍 자요.": "……早点睡吧。",
  "저도 능이백숙 먹을 줄 알아요": "我也会吃香菇炖鸡哦",
  "그건 내가 더 잘 먹을걸요.": "那个我应该更会吃。",
  "샌드위치요. 제가 다음에 교수님도 만들어드릴게요!": "三明治！下次我也给教授做一个！",
  "기대할게요.": "我会期待的。",
  "(다음 날 아침, 마취과 첫 출근. 수술 준비가 한창이다.)": "（第二天早上，第一天去麻醉科上班。手术准备正忙。）",
  "인턴 선생, 이쪽. 마취과 오면 제일 먼저 보는 게 이거예요.": "实习医生，这边。来麻醉科第一个要看的就是这个。",
  "심전도 모니터. 환자 심장이 하는 말을 듣는 거죠.": "心电监护仪。就是听病人的心脏在说什么。",
  "교수님 설명 들으니까 하나도 안 어려운데요?": "听教授一讲，一点都不难嘛？",
  "…말은 잘하네. 그럼 직접 해 봐요.": "……嘴倒挺甜。那你亲自试试。",
  "솔직히 하나도 모르겠어요": "说实话我完全看不懂",
  "솔직히 하나도 모르겠어요…": "说实话我完全看不懂…",
  "솔직해서 좋네. 그럼 몸으로 배워요.": "挺诚实，不错。那就用身体来学吧。",
  "계수정 선생님도 이거 잘 보세요?": "계수정医生也很会看这个吗？",
  "계선생은… 수술방에서 내 모니터만 믿는 사람이에요.": "계医生在手术室里……只相信我的监护仪。",
  "자, 손 줘 봐요. 인턴 선생 심박수부터 재 보죠.": "来，把手给我。先测测实习医生的心率。",
  "…이 정도면 합격. 생각보다 침착하네요.": "……这样算合格。比想象中沉着嘛。",
  "인턴 선생, 이러다 내가 마취해야겠는데요?": "实习医生，再这样我得给你上麻醉了？",
  "(밤늦은 병원 복도. 조원진 교수가 혼자 무릎을 끌어안고 앉아 있다.)": "（深夜的医院走廊。조원진教授独自抱着膝盖坐着。）",
  "말을 걸어 볼까?": "要不要搭话呢？",
  "교수님, 괜찮으세요?": "教授，您还好吗？",
  "…들켰네. 오늘 좀 힘든 수술이 있었어요.": "……被发现了。今天有台很难的手术。",
  "옆에, 잠깐 앉을래요?": "要不要在旁边坐一会儿？",
  "바나나우유를 건넨다": "递上香蕉牛奶",
  "(조용히 바나나우유를 건넸다.)": "（默默递上了香蕉牛奶。）",
  "이거… 계선생이 좋아하는 건데.": "这个……是계医生喜欢的。",
  "…아, 고마워요.": "……啊，谢谢。",
  "못 본 척 지나간다": "装作没看见走过去",
  "(못 본 척 지나가려는데…)": "（正想装作没看见走过去…）",
  "…거기, 다 보였어요.": "……那边的，我都看见了。",
  "(퇴근 후, 병원 휴게실. 약속대로 샌드위치를 만들어 주기로 했다.)": "（下班后，医院休息室。按照约定给他做三明治。）",
  "그때 만들어 준다던 그 샌드위치?": "就是你说要给我做的那个三明治？",
  "내 나이에 너 만나면!": "我这个年纪跟你在一起的话！",
  "말 끊고 대답하기!": "打断他抢答！",
  "개꿀이죠": "那可太赚了",
  "개꿀이죠.": "那可太赚了。",
  "…말 끝까지 들어요. 도둑놈 소리 듣는다고 하려 했는데.": "……听我把话说完。我本来想说会被骂老牛吃嫩草。",
  "근데 개꿀은 맞네.": "不过确实挺赚。",
  "안돼요?": "不行吗？",
  "……안 된다고는 안 했어요.": "……我可没说不行。",
  "아줌마라서 좋은건데.": "就是因为是大婶才喜欢的。",
  "방금 뭐라고 했어요? …아줌마 아니고 교수님.": "你刚说什么？……不是大婶，是教授。",
  "자, 그럼 셰프님 실력 좀 볼까요. 난 커피 마시면서 기다릴게요.": "来，让我看看大厨的手艺。我边喝咖啡边等。",
  "너 나한테 시집오려고 연습했어?": "你是为了嫁给我才练的吗？",
  "귀엽네. 음식 말고 만든 사람이.": "真可爱。不是说吃的，是说做的人。",
  "……우리 그냥 배달 시킬까? 내가 살게.": "……我们还是点外卖吧？我请。",
  "(퇴근길, 병원 옥상. 노을이 지고 있다.)": "（下班路上，医院天台。晚霞正落下。）",
  "{player} 선생, 할 말 있다면서요.": "{player}医生，听说你有话要说？",
  "교수님, 첫날 제가 잘할 자신 있다고 했잖아요.": "教授，第一天我说过我有信心做好吧。",
  "…일 말고, 교수님 옆에서도요. 좋아해요!": "……不只是工作，在教授身边也是。我喜欢您！",
  "인턴 선생도 나랑 취향도 비슷하니 좋네요.": "实习医生跟我品味也挺像，真好。",
  "조원진: 뭐해요? 나랑 도라지 캐러가야죠.": "조원진：愣着干嘛？跟我去挖桔梗啊。",
  "영상 출처: SBS Catch": "视频来源：SBS Catch",
  "마취과로 보내뒀더니, 제 여친을 꼬시고 있었습니까?": "把你送去麻醉科，结果你在勾搭我女朋友？",
  "너가 보고싶대서 찍었어.": "你说想我，所以拍了。",
  "있다 비상계단에서 만나": "待会儿安全通道见",
  "미안해요. 아직 마음에 둔 사람이 있어요.": "对不起。我心里还有别人。",
  "내일도 수술실에 올거죠?": "明天也会来手术室吧？",
  "(…눈을 떠 보니 당직실이었다.)": "（……睁开眼，是值班室。）",
  "인턴 선생, 자다가 왜 내 이름을 불러요?": "实习医生，你睡觉怎么喊我名字？",
  "💓 심박수를 지켜라!": "💓 守住心率！",
  "[침착하자!] 버튼 연타로 심박수를 초록 구간에! (15초 중 9초 유지)": "连按【冷静！】按钮，让心率保持在绿色区域！（15秒内保持9秒）",
  "🥪 딸기 샌드위치 만들기!": "🥪 做草莓三明治！",
  "재료 고르기 → 딸기 썰기 → 생크림 → 반 자르기, 4단계!": "选材料 → 切草莓 → 挤奶油 → 对半切，共4步！",
  "어딘가에 무언가가 숨어 있다…": "某处藏着什么东西…",
  "이건 아닌 것 같은데…": "这个好像不对…",
  "초": "秒",
  "초록 구간(60~80)에서 멈춰요!": "在绿色区域（60~80）停下！",
  "🌸 도라지 ": "🌸 桔梗 ",
  "💚 유지 ": "💚 保持 ",
  "…방금 그거 도라지 아니에요?": "……刚才那个不是桔梗吗？",
  "나랑 음악취향이 비슷한가봐요.": "看来你跟我音乐品味挺像。",
  "등산 좋아해요?": "喜欢爬山吗？",
  "왜 그렇게 긴장해?": "干嘛那么紧张？",
  "내가 그렇게 좋아?": "就那么喜欢我？",
  "어머, 또 올라간다…": "哎呀，又升上去了…",
  "너 왜 이렇게 심장이 빨리 뛰어?": "你心跳怎么这么快？",
  "천천히 해요. 커피 있으니까.": "慢慢来。我有咖啡。",
  "커피 다 마셔 가는데?": "咖啡快喝完了哦？",
  "나 배고파요…": "我饿了…",
  "…생각보다 진지하네.": "……比想象中认真嘛。",
  "🍞 식빵": "🍞 吐司",
  "🍓 딸기": "🍓 草莓",
  "🥛 생크림": "🥛 鲜奶油",
  "🍅 케첩": "🍅 番茄酱",
  "🥬 김치": "🥬 泡菜",
  "🍄 능이버섯": "🍄 香菇",
  "🐟 고등어": "🐟 青花鱼",
  "재료 3개를 골라요!": "选出3种材料！",
  "딸기를 빠르게 썰어요!": "快速切草莓！",
  "생크림을 딱 알맞게!": "奶油要刚刚好！",
  "가운데를 반듯하게 잘라요!": "从正中间切开！",
  "완벽한 재료!": "材料完美！",
  "재료 준비 완료!": "材料准备完毕！",
  "시간 초과!": "超时！",
  "칼질 장인!": "刀工大师！",
  "시간 끝!": "时间到！",
  "폭신폭신!": "松松软软！",
  "조금 아쉬워요!": "有点可惜！",
  "크림 폭발!": "奶油爆炸！",
  "크림이 모자라요!": "奶油不够！",
  "반듯하게 싹둑!": "整整齐齐！",
  "살짝 삐뚤어요!": "有点歪！",
  "와르르…": "哗啦…",
  "🔪 썰기!": "🔪 切！",
  "🥛 멈춰!": "🥛 停！",
  "🔪 자르기!": "🔪 切开！",
  "♡ 침착하자! ♡": "♡ 冷静！♡",
  "심박수 폭주!": "心率爆表！",
  "☆ 무난! ☆": "☆ 还行！☆",
  "건너뛰기 ▶": "跳过 ▶",
  "새 메시지": "新消息",
  "♥ 조원진 루트": "♥ 조원진线",
  "💓 심박수: [침착하자!] 버튼을 연타해서 초록 구간 유지!": "💓 心率：连按【冷静！】按钮保持在绿色区域！",
  "🥪 샌드위치: 재료 → 썰기 → 크림 → 자르기 4단계!": "🥪 三明治：材料 → 切 → 奶油 → 切开，共4步！",
  "📱 호감도가 높으면 문자가 올지도?": "📱 好感度高的话，也许会收到短信？",
  "🌸 어딘가에 숨은 무언가를 찾아보세요…": "🌸 找找藏在某处的东西吧…"
};

let lang = "ko";
try {
  lang = localStorage.getItem("drx_lang") || "ko";
} catch (e) {
  lang = "ko";
}

function t(str) {
  if (lang === "zh" && ZH[str] !== undefined) {
    return ZH[str];
  }
  return str;
}

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
  run: "image/sujeong_run.png",             // 도망 엔딩
  sad: "image/sujeong_sad.png",             // 거절 엔딩

  // --- 조원진 ---
  w_low: "image/wonjin_basic_low.png",       // 평소 (호감도 50 미만)
  w_high: "image/wonjin_basic_high.png",     // 평소 (호감도 50 이상, 웃는 얼굴)
  w_coffee: "image/wonjin_coffee.png",       // 커피 들고 기다릴 때
  w_alone: "image/wonjin_alone.png",         // 혼자 있을 때
  w_cook: "image/wonjin_cook_success.png",   // 샌드위치 성공
  w_tease1: "image/wonjin_tease1.png",       // 심박수 게임 방해 1
  w_tease2: "image/wonjin_tease2.png",       // 심박수 게임 방해 2
  w_hidden: "image/wonjin_hidden.png",       // 히든 엔딩 (계수정 등장)
  w_reject: "image/wonjin_reject.png",       // 새드 엔딩
  w_normal: "image/wonjin_normal.png",       // 노멀 엔딩
  w_dream: "image/wonjin_bad_dream.png"      // 배드 엔딩 (꿈)
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
  ],

  // ==========================================================
  // 조원진 루트
  //  face를 안 적은 조원진 대사는 호감도에 따라 w_low / w_high 자동
  //  doraji: 숨은 도라지 (id, 화면 위치 x, y) — 3개 다 찾으면 히든 엔딩 2
  //  sms: 문자 이벤트 / minLove: 호감도가 이만큼 이상일 때만 / ifFlag: 그 선택을 했을 때만
  // ==========================================================
  wonjin: [
    // --- 첫만남 ---
    { bg: "hallway", char: false, name: "", text: "(외과에서 쫓겨난 다음 날. 마취과로 향하는 복도.)", doraji: { id: 1, x: 95, y: 280 } },
    {
      char: true,
      name: "조원진",
      text: "그쪽이 그 외과에서 쫓겨났다는 인턴이에요? 계수정 선생한테 말 많이 들었어요.",
      question: "뭐라고 대답할까?",
      choices: [
        {
          text: "마취과가 편해보여서요",
          love: -10,
          reply: [
            { name: "player", text: "마취과가 편해보여서요." },
            { name: "조원진", text: "마취과가 만만한가보네." }
          ]
        },
        {
          text: "이번엔 잘 할 자신 있습니다",
          love: 10,
          reply: [
            { name: "player", text: "이번엔 잘 할 자신 있습니다!" },
            { name: "조원진", text: "… 믿어볼게요." }
          ]
        },
        {
          text: "조교수님이랑 일하고싶었어요",
          love: 0,
          reply: [
            { name: "player", text: "조교수님이랑 일하고싶었어요." },
            { name: "조원진", text: "초면부터 아부는 그닥, 내 취향이 아니네요." }
          ]
        },
        {
          text: "교수님 말씀 많이 들었습니다",
          love: 0,
          mystery: 1,
          reply: [
            { name: "player", text: "저도 교수님 말씀 많이 들었습니다." },
            { name: "조원진", text: "계선생이 내 얘기해요?" }
          ]
        }
      ]
    },

    // --- 문자 이벤트 ---
    { char: false, name: "", text: "(그날 밤. 휴대폰이 울렸다.)" },
    {
      minLove: 0,
      sms: {
        from: "조원진",
        messages: ["저녁 먹었어요?", "요즘 애들은 뭐 좋아하지?"],
        replies: [
          { text: "교수님이요♡", love: -10, answer: "…일찍 자요." },
          { text: "저도 능이백숙 먹을 줄 알아요", love: -10, answer: "그건 내가 더 잘 먹을걸요." },
          { text: "샌드위치요. 제가 다음에 교수님도 만들어드릴게요!", love: 10, flag: "sandwich", answer: "기대할게요." }
        ]
      }
    },

    // --- 장면 2: 심전도 ---
    { bg: "or", name: "", text: "(다음 날 아침, 마취과 첫 출근. 수술 준비가 한창이다.)", doraji: { id: 2, x: 860, y: 300 } },
    { char: true, name: "조원진", text: "인턴 선생, 이쪽. 마취과 오면 제일 먼저 보는 게 이거예요." },
    {
      name: "조원진",
      text: "심전도 모니터. 환자 심장이 하는 말을 듣는 거죠.",
      question: "뭐라고 할까?",
      choices: [
        {
          text: "교수님 설명 들으니까 하나도 안 어려운데요?",
          love: 10,
          reply: [
            { name: "player", text: "교수님 설명 들으니까 하나도 안 어려운데요?" },
            { name: "조원진", text: "…말은 잘하네. 그럼 직접 해 봐요." }
          ]
        },
        {
          text: "솔직히 하나도 모르겠어요",
          love: 0,
          reply: [
            { name: "player", text: "솔직히 하나도 모르겠어요…" },
            { name: "조원진", text: "솔직해서 좋네. 그럼 몸으로 배워요." }
          ]
        },
        {
          text: "계수정 선생님도 이거 잘 보세요?",
          love: 0,
          mystery: 1,
          reply: [
            { name: "player", text: "계수정 선생님도 이거 잘 보세요?" },
            { name: "조원진", text: "계선생은… 수술방에서 내 모니터만 믿는 사람이에요." }
          ]
        }
      ]
    },
    {
      name: "조원진",
      text: "자, 손 줘 봐요. 인턴 선생 심박수부터 재 보죠.",
      minigame: {
        type: "heart",
        success: { love: 25, reply: [{ name: "조원진", text: "…이 정도면 합격. 생각보다 침착하네요." }] }, // (임시)
        fail: { love: -10, reply: [{ name: "조원진", text: "인턴 선생, 이러다 내가 마취해야겠는데요?" }] } // (임시)
      }
    },

    // --- 밤의 복도 ---
    {
      bg: "hallway",
      dim: true,
      char: true,
      face: "w_alone",
      name: "",
      text: "(밤늦은 병원 복도. 조원진 교수가 혼자 무릎을 끌어안고 앉아 있다.)",
      question: "말을 걸어 볼까?",
      choices: [
        {
          text: "교수님, 괜찮으세요?",
          love: 10,
          reply: [
            { name: "player", text: "교수님, 괜찮으세요?" },
            { face: "w_alone", name: "조원진", text: "…들켰네. 오늘 좀 힘든 수술이 있었어요." },
            { face: "w_alone", name: "조원진", text: "옆에, 잠깐 앉을래요?" }
          ]
        },
        {
          text: "바나나우유를 건넨다",
          love: 0,
          mystery: 1,
          reply: [
            { name: "", text: "(조용히 바나나우유를 건넸다.)" },
            { face: "w_alone", name: "조원진", text: "이거… 계선생이 좋아하는 건데." },
            { face: "w_alone", name: "조원진", text: "…아, 고마워요." }
          ]
        },
        {
          text: "못 본 척 지나간다",
          love: -10,
          reply: [
            { name: "", text: "(못 본 척 지나가려는데…)" },
            { face: "w_alone", name: "조원진", text: "…거기, 다 보였어요." }
          ]
        }
      ]
    },

    // --- 휴게실: 샌드위치 ---
    { bg: "store", face: "w_coffee", name: "", text: "(퇴근 후, 병원 휴게실. 약속대로 샌드위치를 만들어 주기로 했다.)", doraji: { id: 3, x: 900, y: 200 } },
    { ifFlag: "sandwich", face: "w_coffee", name: "조원진", text: "그때 만들어 준다던 그 샌드위치?" },
    {
      face: "w_coffee",
      name: "조원진",
      text: "내 나이에 너 만나면!",
      question: "말 끊고 대답하기!",
      choices: [
        {
          text: "개꿀이죠",
          love: 0,
          reply: [
            { name: "player", text: "개꿀이죠." },
            { face: "w_coffee", name: "조원진", text: "…말 끝까지 들어요. 도둑놈 소리 듣는다고 하려 했는데." },
            { face: "w_coffee", name: "조원진", text: "근데 개꿀은 맞네." }
          ]
        },
        {
          text: "안돼요?",
          love: 0,
          reply: [
            { name: "player", text: "안돼요?" },
            { face: "w_coffee", name: "조원진", text: "……안 된다고는 안 했어요." }
          ]
        },
        {
          text: "아줌마라서 좋은건데.",
          love: 0,
          reply: [
            { name: "player", text: "아줌마라서 좋은건데." },
            { face: "w_coffee", name: "조원진", text: "방금 뭐라고 했어요? …아줌마 아니고 교수님." }
          ]
        }
      ]
    },
    {
      face: "w_coffee",
      name: "조원진",
      text: "자, 그럼 셰프님 실력 좀 볼까요. 난 커피 마시면서 기다릴게요.",
      minigame: {
        type: "sandwich",
        success: { love: 35, reply: [{ face: "w_cook", name: "조원진", text: "너 나한테 시집오려고 연습했어?" }] },
        normal: { love: 15, reply: [{ face: "w_coffee", name: "조원진", text: "귀엽네. 음식 말고 만든 사람이." }] },
        fail: { love: -10, reply: [{ face: "w_coffee", name: "조원진", text: "……우리 그냥 배달 시킬까? 내가 살게." }] }
      }
    },

    // --- 옥상: 고백 ---
    { bg: "rooftop", char: false, name: "", text: "(퇴근길, 병원 옥상. 노을이 지고 있다.)" },
    { char: true, name: "조원진", text: "{player} 선생, 할 말 있다면서요." },
    { name: "player", text: "교수님, 첫날 제가 잘할 자신 있다고 했잖아요." },
    { name: "player", text: "…일 말고, 교수님 옆에서도요. 좋아해요!" }
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
      title: "HIDDEN END",
      text: "",
      lines: [
        { face: "basic", name: "계수정", text: "……" },
        { face: "hidden", name: "계수정", text: "미안합니다. 사실 저, 조원진 교수님이랑 사귀고 있습니다." },
        { name: "player", text: "네…?!" } // (임시)
      ]
    },
    { id: "sujeong_happy", min: 100, range: "100점", title: "HAPPY END", text: "", phone: { name: "계수정", notice: "사진을 보냈습니다.", steps: [{ action: "photo", src: "image/sujeong_happy_selfie.jpg" }, { action: "text", text: "여자친구 이제 퇴근." }] } },
    { id: "sujeong_sad", min: 70, range: "70~99점", title: "SAD END", text: "", lines: [{ face: "sad", name: "계수정", text: "그럴 시간있으면, 그 시간에 봉합 연습이나 더 해.." }] },
    { id: "sujeong_normal", min: 40, range: "40~69점", title: "NORMAL END", text: "계수정: 내일 수술, 늦지 마." },
    { id: "sujeong_bad", min: -999, range: "39점 이하", title: "BAD END", text: "", lines: [{ face: "run", name: "계수정", text: "...바나나 우유 사러 가야 해서. 먼저 갑니다." }] }
  ],

  wonjin: [
    {
      id: "wonjin_hidden2",
      cond: "doraji",
      range: "히든",
      title: "HIDDEN END 2",
      text: "",
      lines: [{ face: "w_high", name: "조원진", text: "인턴 선생도 나랑 취향도 비슷하니 좋네요." }],
      video: { src: "video/hidden2.mp4", caption: "조원진: 뭐해요? 나랑 도라지 캐러가야죠.", credit: "영상 출처: SBS Catch" }
    },
    {
      id: "wonjin_hidden",
      hidden: true,
      range: "히든",
      title: "HIDDEN END",
      text: "",
      lines: [{ bg: "or", char: true, face: "w_hidden", name: "계수정", text: "마취과로 보내뒀더니, 제 여친을 꼬시고 있었습니까?" }]
    },
    { id: "wonjin_happy", min: 100, range: "100점", title: "HAPPY END", text: "", phone: { name: "조원진", notice: "사진을 보냈습니다.", steps: [{ action: "photo", src: "image/wonjin_happy_selfie.jpg" }, { action: "text", text: "너가 보고싶대서 찍었어." }, { action: "text", text: "있다 비상계단에서 만나" }] } },
    { id: "wonjin_sad", min: 70, range: "70~99점", title: "SAD END", text: "", lines: [{ face: "w_reject", name: "조원진", text: "미안해요. 아직 마음에 둔 사람이 있어요." }] },
    { id: "wonjin_normal", min: 40, range: "40~69점", title: "NORMAL END", text: "", lines: [{ face: "w_normal", name: "조원진", text: "내일도 수술실에 올거죠?" }] },
    {
      id: "wonjin_bad",
      min: -999,
      range: "39점 이하",
      title: "BAD END",
      text: "",
      lines: [
        { fx: "flash", bg: "room", char: false, name: "", text: "(…눈을 떠 보니 당직실이었다.)" },
        { char: true, face: "w_dream", name: "조원진", text: "인턴 선생, 자다가 왜 내 이름을 불러요?" }
      ]
    }
  ]
};


// ============================================================
// 4. 미니게임 설명 + 난이도
// ============================================================
const MG_TEXT = {
  scalpel: { title: "🔪 메스를 건네라!", info: "표시가 초록 영역에 왔을 때 아래 [지금!] 버튼 또는 스페이스바! (4번 중 3번 성공)" },
  suture: { title: "🧵 봉합하기!", info: "1번부터 7번까지 동그라미를 순서대로 터치! (제한시간 6초, 순서 틀리면 실패)" },
  claw: { title: "🍌 바나나우유 뽑기!", info: "집게가 바나나우유 위에 왔을 때 아래 [내려!] 버튼 또는 스페이스바! (기회 3번)" },
  heart: { title: "💓 심박수를 지켜라!", info: "[침착하자!] 버튼 연타로 심박수를 초록 구간에! (15초 중 9초 유지)" },
  sandwich: { title: "🥪 딸기 샌드위치 만들기!", info: "재료 고르기 → 딸기 썰기 → 생크림 → 반 자르기, 4단계!" }
};

// 미스터리 점수가 이만큼 모이면 고백할 때 히든 엔딩이 나와요 (조원진 선택지 3개 중 3개)
const MYSTERY_NEED = 3;

const SETTINGS = {
  textSpeed: 35,                                          // 글자 나오는 속도 (작을수록 빠름)
  scalpel: { tries: 4, need: 3, speed: 8, zoneWidth: 48 }, // 메스: 시도, 필요 성공, 속도, 초록 영역 너비
  suture: { dots: 7, time: 6 },                            // 봉합: 점 개수, 제한시간(초)
  claw: { tries: 3, speed: 6, grab: 20 },                  // 뽑기: 기회, 집게 속도, 잡히는 범위
  heart: { time: 15, need: 9, low: 70, high: 105, rise: 4, calm: 4.5, tease: 22 }, // 심박수: 시간, 필요한 초, 초록 구간, 오르는 속도, 버튼 한 번에 내려가는 양, 방해 때 오르는 양
  sandwich: { chopTarget: 14, chopTime: 4 },                                           // 샌드위치: 딸기 썰기 목표 횟수, 시간(초)
  wonjinSmileLove: 50                                                                   // 조원진이 웃는 기본 표정으로 바뀌는 호감도
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
let flags = {};          // 선택에 따라 켜지는 표시 (예: 샌드위치 약속)
let dorajiFound = 0;     // 찾은 도라지 개수
let dorajiIds = [];      // 이미 찾은 도라지 번호


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
  const w = window.innerWidth;
  const h = window.innerHeight;
  // 휴대폰을 세로로 들고 있으면 게임을 90도 돌려서 가로 화면처럼 보여 줘요
  if (h > w) {
    const scale = Math.min(h / 960, w / 540);
    game.style.transform = "rotate(90deg) scale(" + scale + ")";
  } else {
    const scale = Math.min(w / 960, h / 540);
    game.style.transform = "scale(" + scale + ")";
  }
}
window.addEventListener("resize", fitGame);
window.addEventListener("orientationchange", function () {
  setTimeout(fitGame, 200);
});
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
  return t(str).replaceAll("{player}", playerName);
}

function setBg(key, dim) {
  bg.style.backgroundImage = key ? "url(" + BACKGROUNDS[key] + ")" : "none";
  bg.classList.toggle("dim", !!dim);
  // 배경이 바뀌면 그 장면에 숨겨 둔 도라지도 사라져요
  game.querySelectorAll(".doraji").forEach(function (el) {
    el.remove();
  });
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
  // 조건에 안 맞는 줄은 건너뛰기 (호감도 기준, 선택 표시)
  if ((line.minLove !== undefined && love < line.minLove) || (line.ifFlag && !flags[line.ifFlag])) {
    goNext();
    return;
  }
  if (line.fx === "flash") {
    flashScreen();
  }
  if (line.bg) {
    setBg(line.bg, line.dim);
  }
  if (line.doraji) {
    placeDoraji(line.doraji);
  }
  if (line.sms) {
    openSms(line);
    return;
  }
  if (line.char === true) {
    character.classList.remove("hidden");
  }
  if (line.char === false) {
    character.classList.add("hidden");
  }
  let face = line.face;
  // 조원진 루트: 표정을 안 정한 조원진 대사는 호감도에 따라 기본 표정이 바뀌어요
  if (!face && currentRoute === "wonjin" && line.name === "조원진") {
    face = love >= SETTINGS.wonjinSmileLove ? "w_high" : "w_low";
  }
  if (face && FACES[face]) {
    charImg.classList.remove("hidden");
    charPlaceholder.classList.add("hidden");
    charImg.src = FACES[face];
    // 전신 사진(도망)은 크게 띄우고 아래를 대화창 뒤로 숨겨서 상반신만 보이게
    character.classList.toggle("full-body", face === "run");
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
  sfx("next");
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
  if (result.flag) {
    flags[result.flag] = true;
  }
  story.splice(index + 1, 0, ...result.reply);
  goNext();
}

function changeMystery(amount) {
  mystery = mystery + amount;
  sfx("mystery");
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
  sfx(amount > 0 ? "loveUp" : "loveDown");
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
  sfx("sparkle");
  choiceTitle.textContent = fill(line.question || line.text);
  choiceList.innerHTML = "";

  for (const choice of line.choices) {
    const button = document.createElement("button");
    button.textContent = fill(choice.text);
    button.addEventListener("click", function () {
      sfx("select");
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
  mgTitle.textContent = t(MG_TEXT[type].title);
  mgInfo.textContent = t(MG_TEXT[type].info);
  mgArea.innerHTML = "";
  mgArea.onclick = null;
  mgResult.textContent = "";
  mgResult.className = "";

  dialogueBox.classList.add("hidden");
  minigameBox.classList.remove("hidden");

  sfx("start");
  mgGame = MINIGAMES[type]();
  mgGame.start();
}

// result: true(성공) / false(실패) / "normal"(무난, 샌드위치 게임)
function endMinigame(result, why) {
  if (!mgGame) {
    return;
  }
  mgGame.stop();
  mgGame = null;
  mgArea.onclick = null;
  const key = result === true ? "success" : result === false ? "fail" : result;
  const label = { success: "★ 성공! ★", fail: "✘ 실패...", normal: "☆ 무난! ☆" }[key];
  mgResult.textContent = t(label) + (why ? " " + t(why) : "");
  mgResult.className = key === "fail" ? "bad" : "ok";
  sfx(key === "success" ? "win" : key === "fail" ? "lose" : "loveUp");

  setTimeout(function () {
    minigameBox.classList.add("hidden");
    dialogueBox.classList.remove("hidden");
    busy = false;
    const outcome = mgLine.minigame[key] || mgLine.minigame.fail;
    mgLine = null;
    applyResult(outcome);
  }, 1300);
}

function showMessage(text, good) {
  mgResult.textContent = text;
  mgResult.className = good ? "ok" : "bad";
}


// 휴대폰용: 미니게임 아래 큰 버튼 하나만 누르면 되도록 (누르는 순간 바로 반응)
function addTapButton(label, onPress, container) {
  const button = document.createElement("button");
  button.className = "tap-btn";
  button.textContent = t(label);
  button.addEventListener("pointerdown", function (e) {
    e.preventDefault();
    if (!mgGame) {
      return;
    }
    if (navigator.vibrate) {
      navigator.vibrate(25);
    }
    onPress();
  });
  (container || mgArea).appendChild(button);
  return button;
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
      sfx("hit");
      showMessage(t("✔ 슥-! 정확해요!"), true);
    } else {
      marks.push("✖️");
      sfx("miss");
      showMessage(t("✘ 앗, 빗나갔다!"), false);
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
      addTapButton("🔪 지금!", press);
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
    sfx("tick");
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
    triesBox.textContent = t("남은 기회: ") + "🪙".repeat(S.tries - tries);
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
    sfx("drop");
    rope.style.height = "76px";

    setTimeout(function () {
      let caught = null;
      for (const m of milks) {
        if (Math.abs(m.x - x) < S.grab) {
          caught = m;
        }
      }
      rope.style.height = "20px";
      if (caught) {
        caught.el.style.bottom = "100px";
      }

      setTimeout(function () {
        tries = tries + 1;
        if (caught && caught.kind === "banana") {
          endMinigame(true, "(" + t(NAMES.banana) + " GET!)");
          return;
        }
        sfx("miss");
        if (caught) {
          showMessage(t(NAMES[caught.kind]) + t("... 꽝!"), false);
        } else {
          showMessage(t("허공을 집었다!"), false);
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
      addTapButton("🪝 내려!", press);
    },
    press: press,
    stop: function () {
      clearInterval(timer);
    }
  };
}

// ============================================================
// 13-2. 미니게임 ④ 심박수 지키기 (조원진 루트)
// ============================================================
const TEASE_LINES = ["왜 그렇게 긴장해?", "내가 그렇게 좋아?", "어머, 또 올라간다…", "너 왜 이렇게 심장이 빨리 뛰어?"];

// 미니게임 옆에 조원진 사진 + 말풍선 띄우기 (심박수·샌드위치 공용)
function showSideWonjin(face, text, side) {
  let box = minigameBox.querySelector(".side-wonjin");
  if (!box) {
    box = document.createElement("div");
    box.className = "side-wonjin";
    box.innerHTML = '<div class="side-talk"></div><img alt="">';
    minigameBox.appendChild(box);
  }
  box.classList.toggle("left", side === "left");
  box.querySelector("img").src = FACES[face];
  box.querySelector(".side-talk").textContent = fill(text);
  box.classList.remove("pop");
  void box.offsetWidth;
  box.classList.add("pop");
}

function removeSideWonjin() {
  minigameBox.querySelectorAll(".side-wonjin").forEach(function (el) {
    el.remove();
  });
}

function makeHeartGame() {
  const S = SETTINGS.heart;
  let bpm = 80;
  let elapsed = 0;
  let inZone = 0;
  let nextTease = 2.2 + Math.random() * 1.6;
  let teaseCount = 0;
  let phase = 0;
  let last = 0;
  let raf = null;
  let ctx, canvas, bpmBox, zoneBox, timeBox;
  const W = 520;
  const H = 130;
  const MIN = 50;
  const MAX = 170;
  const trace = [];

  function yOf(value) {
    return H - ((value - MIN) / (MAX - MIN)) * H;
  }

  function draw() {
    ctx.fillStyle = "#14201a";
    ctx.fillRect(0, 0, W, H);
    // 초록 구간
    ctx.fillStyle = "rgba(60, 220, 120, 0.22)";
    ctx.fillRect(0, yOf(S.high), W, yOf(S.low) - yOf(S.high));
    ctx.strokeStyle = "rgba(60, 220, 120, 0.7)";
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.moveTo(0, yOf(S.high));
    ctx.lineTo(W, yOf(S.high));
    ctx.moveTo(0, yOf(S.low));
    ctx.lineTo(W, yOf(S.low));
    ctx.stroke();
    ctx.setLineDash([]);
    // 심전도 선
    const good = bpm >= S.low && bpm <= S.high;
    ctx.strokeStyle = good ? "#5dff9a" : "#ff5d8f";
    ctx.lineWidth = 3;
    ctx.beginPath();
    trace.forEach(function (y, i) {
      if (i === 0) {
        ctx.moveTo(i * 4, y);
      } else {
        ctx.lineTo(i * 4, y);
      }
    });
    ctx.stroke();
  }

  function tease() {
    bpm = bpm + S.tease;
    const face = teaseCount % 2 === 0 ? "w_tease1" : "w_tease2";
    showSideWonjin(face, TEASE_LINES[teaseCount % TEASE_LINES.length], "right");
    teaseCount = teaseCount + 1;
    sfx("loveUp");
    nextTease = elapsed + 2.2 + Math.random() * 1.6;
  }

  function frame(now) {
    const dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
    last = now;
    elapsed = elapsed + dt;
    bpm = Math.max(MIN, Math.min(MAX, bpm + S.rise * dt));
    if (elapsed >= nextTease) {
      tease();
    }
    const good = bpm >= S.low && bpm <= S.high;
    if (good) {
      inZone = inZone + dt;
    }
    // 심장 박동 모양 (bpm이 높을수록 빨리 뛰어요)
    phase = phase + dt * bpm / 60;
    const p = phase % 1;
    let spike = 0;
    if (p < 0.06) {
      spike = -38;
    } else if (p < 0.1) {
      spike = 22;
    } else if (p > 0.3 && p < 0.38) {
      spike = -8;
    }
    trace.push(yOf(bpm) + spike);
    if (trace.length > W / 4) {
      trace.shift();
    }
    draw();
    bpmBox.textContent = "♥ " + Math.round(bpm) + " BPM";
    bpmBox.className = "bpm " + (good ? "ok" : "bad");
    zoneBox.textContent = t("💚 유지 ") + inZone.toFixed(1) + " / " + S.need + t("초");
    timeBox.textContent = "⏱ " + Math.max(0, S.time - elapsed).toFixed(1);

    if (inZone >= S.need) {
      endMinigame(true);
      return;
    }
    if (elapsed >= S.time) {
      endMinigame(false, "심박수 폭주!");
      return;
    }
    raf = requestAnimationFrame(frame);
  }

  function press() {
    bpm = Math.max(MIN, bpm - S.calm);
    sfx("tick");
  }

  return {
    start: function () {
      mgArea.innerHTML =
        '<div class="heart-top"><span class="bpm"></span><span class="hzone"></span><span class="htime"></span></div>' +
        '<canvas class="ecg" width="' + W + '" height="' + H + '"></canvas>';
      canvas = mgArea.querySelector(".ecg");
      ctx = canvas.getContext("2d");
      bpmBox = mgArea.querySelector(".bpm");
      zoneBox = mgArea.querySelector(".hzone");
      timeBox = mgArea.querySelector(".htime");
      addTapButton("♡ 침착하자! ♡", press);
      raf = requestAnimationFrame(frame);
    },
    press: press,
    stop: function () {
      cancelAnimationFrame(raf);
      setTimeout(removeSideWonjin, 1300);
    }
  };
}


// ============================================================
// 13-3. 미니게임 ⑤ 딸기 샌드위치 (4단계, 결과 3가지)
// ============================================================
const SANDWICH_GOOD = ["🍞 식빵", "🍓 딸기", "🥛 생크림"];
const SANDWICH_BAD = ["🍅 케첩", "🥬 김치", "🍌 바나나우유", "🍄 능이버섯", "🐟 고등어"];
const BUDDY_LINES = ["천천히 해요. 커피 있으니까.", "커피 다 마셔 가는데?", "나 배고파요…", "…생각보다 진지하네."];

function makeSandwichGame() {
  const C = SETTINGS.sandwich;
  let stage = 0;
  let total = 0;
  let timers = [];
  let loop = null;
  let pressFn = null;
  let locked = false;

  function later(fn, ms) {
    timers.push(setTimeout(fn, ms));
  }

  function setStage(title) {
    showSideWonjin("w_coffee", BUDDY_LINES[stage], "left");
    mgArea.innerHTML =
      '<div class="sw-head"><span class="sw-step"></span><span class="sw-score"></span></div><div class="sw-body"></div>';
    mgArea.querySelector(".sw-step").textContent = (stage + 1) + "/4 " + t(title);
    mgArea.querySelector(".sw-score").textContent = "🥪 " + total + t("점");
    locked = false;
    return mgArea.querySelector(".sw-body");
  }

  function finishStage(points, msg) {
    if (locked) {
      return;
    }
    locked = true;
    clearInterval(loop);
    pressFn = null;
    points = Math.max(0, Math.min(25, Math.round(points)));
    total = total + points;
    showMessage(t(msg) + " +" + points, points >= 15);
    sfx(points >= 15 ? "hit" : "miss");
    later(function () {
      stage = stage + 1;
      showMessage("", true);
      if (stage < 4) {
        STAGES[stage]();
      } else if (total >= 75) {
        endMinigame(true, "(" + total + t("점") + ")");
      } else if (total >= 40) {
        endMinigame("normal", "(" + total + t("점") + ")");
      } else {
        endMinigame(false, "(" + total + t("점") + ")");
      }
    }, 900);
  }

  // ① 재료 고르기: 맞는 재료 3개
  function pickStage() {
    const body = setStage("재료 3개를 골라요!");
    const items = SANDWICH_GOOD.concat(SANDWICH_BAD).sort(function () {
      return Math.random() - 0.5;
    });
    let found = 0;
    let wrong = 0;
    const grid = document.createElement("div");
    grid.className = "sw-grid";
    items.forEach(function (name) {
      const b = document.createElement("button");
      b.className = "sw-item";
      b.textContent = t(name);
      b.addEventListener("pointerdown", function (e) {
        e.preventDefault();
        if (locked || b.disabled) {
          return;
        }
        b.disabled = true;
        if (SANDWICH_GOOD.includes(name)) {
          found = found + 1;
          b.classList.add("good");
          sfx("tick");
          if (found === 3) {
            finishStage(25 - wrong * 9, wrong === 0 ? "완벽한 재료!" : "재료 준비 완료!");
          }
        } else {
          wrong = wrong + 1;
          b.classList.add("wrong");
          sfx("miss");
          showMessage(t("이건 아닌 것 같은데…"), false);
        }
      });
      grid.appendChild(b);
    });
    body.appendChild(grid);
    const myStage = stage;
    later(function () {
      if (!locked && stage === myStage) {
        finishStage(found * 8 - wrong * 9, "시간 초과!");
      }
    }, 9000);
  }

  // ② 딸기 썰기: 4초 안에 14번
  function chopStage() {
    const body = setStage("딸기를 빠르게 썰어요!");
    let taps = 0;
    let left = C.chopTime;
    body.innerHTML = '<div class="sw-chop">🍓</div><div class="sw-bar"><div class="sw-fill"></div></div><div class="sw-note"></div>';
    const fillBar = body.querySelector(".sw-fill");
    const note = body.querySelector(".sw-note");
    const berry = body.querySelector(".sw-chop");
    function draw() {
      fillBar.style.width = Math.min(100, (taps / C.chopTarget) * 100) + "%";
      note.textContent = "🔪 " + taps + " / " + C.chopTarget + "  ⏱ " + left.toFixed(1);
    }
    pressFn = function () {
      if (locked) {
        return;
      }
      taps = taps + 1;
      sfx("tick");
      berry.classList.remove("chop");
      void berry.offsetWidth;
      berry.classList.add("chop");
      draw();
      if (taps >= C.chopTarget) {
        finishStage(25, "칼질 장인!");
      }
    };
    draw();
    addTapButton("🔪 썰기!", function () {
      pressFn && pressFn();
    }, body);
    loop = setInterval(function () {
      left = Math.max(0, left - 0.1);
      draw();
      if (left <= 0) {
        finishStage((taps / C.chopTarget) * 25, "시간 끝!");
      }
    }, 100);
  }

  // ③ 생크림: 게이지를 60~80에서 멈추기
  function creamStage() {
    const body = setStage("생크림을 딱 알맞게!");
    let value = 0;
    let dir = 1;
    body.innerHTML = '<div class="sw-gauge"><div class="sw-zone"></div><div class="sw-level"></div></div><div class="sw-note"></div>';
    const level = body.querySelector(".sw-level");
    body.querySelector(".sw-note").textContent = t("초록 구간(60~80)에서 멈춰요!");
    pressFn = function () {
      if (locked) {
        return;
      }
      if (value >= 60 && value <= 80) {
        finishStage(25, "폭신폭신!");
      } else if (value >= 50 && value <= 90) {
        finishStage(12, "조금 아쉬워요!");
      } else {
        finishStage(0, value > 80 ? "크림 폭발!" : "크림이 모자라요!");
      }
    };
    addTapButton("🥛 멈춰!", function () {
      pressFn && pressFn();
    }, body);
    loop = setInterval(function () {
      value = value + 2.2 * dir;
      if (value >= 100) {
        value = 100;
        dir = -1;
      }
      if (value <= 0) {
        value = 0;
        dir = 1;
      }
      level.style.width = value + "%";
    }, 16);
  }

  // ④ 반 자르기: 칼이 가운데 선에 올 때
  function cutStage() {
    const body = setStage("가운데를 반듯하게 잘라요!");
    const WIDTH = 360;
    let pos = 0;
    let dir = 1;
    body.innerHTML = '<div class="sw-bread"><div class="sw-center"></div><div class="sw-knife">🔪</div></div>';
    const knife = body.querySelector(".sw-knife");
    pressFn = function () {
      if (locked) {
        return;
      }
      const d = Math.abs(pos - WIDTH / 2);
      knife.classList.add("down");
      if (d <= 10) {
        finishStage(25, "반듯하게 싹둑!");
      } else if (d <= 26) {
        finishStage(12, "살짝 삐뚤어요!");
      } else {
        finishStage(0, "와르르…");
      }
    };
    addTapButton("🔪 자르기!", function () {
      pressFn && pressFn();
    }, body);
    loop = setInterval(function () {
      pos = pos + 7 * dir;
      if (pos >= WIDTH) {
        pos = WIDTH;
        dir = -1;
      }
      if (pos <= 0) {
        pos = 0;
        dir = 1;
      }
      knife.style.left = pos + "px";
    }, 16);
  }

  const STAGES = [pickStage, chopStage, creamStage, cutStage];

  return {
    start: function () {
      STAGES[0]();
    },
    press: function () {
      if (pressFn) {
        pressFn();
      }
    },
    stop: function () {
      clearInterval(loop);
      timers.forEach(clearTimeout);
      setTimeout(removeSideWonjin, 1300);
    }
  };
}

const MINIGAMES = {
  scalpel: makeScalpelGame,
  suture: makeSutureGame,
  claw: makeClawGame,
  heart: makeHeartGame,
  sandwich: makeSandwichGame
};


// ============================================================
// 14. 시작 / 엔딩
// ============================================================
function startGame(route) {
  playerName = nameInput.value.trim();
  if (playerName === "") {
    nameInput.placeholder = t("이름을 입력해 주세요!");
    nameInput.focus();
    return;
  }
  currentRoute = route;
  story = stories[route].slice();
  index = 0;
  love = 0;
  mystery = 0;
  endingChosen = null;
  flags = {};
  dorajiFound = 0;
  dorajiIds = [];
  updateDorajiCount();
  busy = false;
  state = "play";
  nameScreen.classList.add("hidden");
  dialogueBox.classList.remove("hidden");
  showLine();
}

function pickEnding() {
  const list = endings[currentRoute];
  for (const e of list) {
    if (e.cond === "doraji") {
      if (dorajiFound >= 3) {
        return e;
      }
    } else if (e.hidden) {
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
  endingTitle.textContent = t(ending.title);
  if (ending.cond === "doraji") {
    endingScore.textContent = t("🌸 도라지 ") + dorajiFound + "/3 · " + t("호감도 ") + love + t("점");
  } else if (ending.hidden) {
    endingScore.textContent = t("🕵️ 미스터리 ") + mystery + t("점") + " · " + t("호감도 ") + love + t("점");
  } else {
    endingScore.textContent = t("호감도 ") + love + t("점");
  }
  endingText.textContent = fill(ending.text);
  dialogueBox.classList.add("hidden");
  character.classList.add("hidden");

  if (!ending.phone && !ending.video) {
    sfx(ending.hidden ? "mystery" : "lose");
  }
  if (ending.phone) {
    playPhoneScene(ending.phone, function () {
      endingScreen.classList.remove("hidden");
    });
  } else if (ending.video) {
    playEndingVideo(ending.video, function () {
      sfx("win");
      endingScreen.classList.remove("hidden");
    });
  } else {
    endingScreen.classList.remove("hidden");
  }
}


// ============================================================
// 14-2. 해피 엔딩 문자 장면 (영상처럼 자동 재생, 클릭하면 건너뛰기)
// ============================================================
// 해피 엔딩 문자 순서 (사진·문자 내용은 각 엔딩의 phone 칸에서 정해요)
function buildPhoneScript(steps) {
  const script = [{ wait: 900, action: "noti" }];
  steps.forEach(function (step) {
    script.push({ wait: 1500, action: "dots" });
    script.push(Object.assign({ wait: 1200 }, step));
  });
  script.push({ wait: 900, action: "hearts" });
  script.push({ wait: 2200, action: "end" });
  return script;
}

const phoneScene = $("phone-scene");
const phoneChat = $("phone-chat");
const phoneNoti = $("phone-noti");
const phoneName = $("phone-name");
const phoneReplies = $("phone-replies");
let phoneTimers = [];
let phoneDone = null;
let phoneMode = "auto";   // auto(엔딩 영상처럼) / sms(답장 고르기)

function setPhoneHeader(name, notice) {
  phoneName.textContent = "‹ " + name;
  phoneNoti.innerHTML = "<b>💬 " + name + "</b><span></span>";
  phoneNoti.querySelector("span").textContent = t(notice);
}

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
    addBubble("", t(step.text));
    ding();
  }
  if (step.action === "hearts") {
    heartBurst();
  }
  if (step.action === "end") {
    finishPhoneScene();
  }
}

function playPhoneScene(config, onDone) {
  phoneMode = "auto";
  phoneScene.classList.remove("sms");
  phoneReplies.innerHTML = "";
  setPhoneHeader(config.name, config.notice || "새 메시지");
  phoneDone = onDone;
  phoneChat.innerHTML = "";
  phoneNoti.classList.remove("show");
  phoneScene.querySelectorAll(".burst").forEach(function (el) {
    el.remove();
  });
  phoneScene.classList.remove("hidden");

  let time = 0;
  for (const step of buildPhoneScript(config.steps)) {
    time = time + step.wait;
    phoneTimers.push(setTimeout(function () {
      runPhoneStep(step);
    }, time));
  }
}

function finishPhoneScene() {
  if (phoneScene.classList.contains("hidden") || phoneMode !== "auto") {
    return;
  }
  sfx("win");
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

// ============================================================
// 14-3. 문자 이벤트 (중간에 문자가 오면 답장 고르기)
// ============================================================
function openSms(line) {
  busy = true;
  phoneMode = "sms";
  const sms = line.sms;
  dialogueBox.classList.add("hidden");
  phoneScene.classList.add("sms");
  setPhoneHeader(sms.from, sms.messages[0]);
  phoneChat.innerHTML = "";
  phoneReplies.innerHTML = "";
  phoneNoti.classList.remove("show");
  phoneScene.classList.remove("hidden");

  let time = 600;
  phoneTimers.push(setTimeout(function () {
    phoneNoti.classList.add("show");
    ding();
  }, time));
  sms.messages.forEach(function (msg) {
    time = time + 1100;
    phoneTimers.push(setTimeout(function () {
      phoneNoti.classList.remove("show");
      addBubble("dots", "• • •");
    }, time));
    time = time + 1000;
    phoneTimers.push(setTimeout(function () {
      addBubble("", fill(msg));
      ding();
    }, time));
  });
  time = time + 700;
  phoneTimers.push(setTimeout(function () {
    sfx("sparkle");
    sms.replies.forEach(function (reply) {
      const button = document.createElement("button");
      button.textContent = fill(reply.text);
      button.addEventListener("click", function () {
        chooseSmsReply(reply);
      });
      phoneReplies.appendChild(button);
    });
  }, time));
}

function chooseSmsReply(reply) {
  sfx("select");
  phoneReplies.innerHTML = "";
  addBubble("me", "");
  phoneChat.lastChild.textContent = fill(reply.text);
  phoneTimers.push(setTimeout(function () {
    addBubble("dots", "• • •");
  }, 700));
  phoneTimers.push(setTimeout(function () {
    addBubble("", fill(reply.answer));
    ding();
  }, 1800));
  phoneTimers.push(setTimeout(function () {
    phoneTimers.forEach(clearTimeout);
    phoneTimers = [];
    phoneScene.classList.add("hidden");
    phoneScene.classList.remove("sms");
    phoneMode = "auto";
    dialogueBox.classList.remove("hidden");
    busy = false;
    applyResult({ love: reply.love, mystery: reply.mystery, flag: reply.flag, reply: [] });
  }, 3400));
}


// ============================================================
// 14-4. 도라지 이스터에그 (3개 다 찾으면 히든 엔딩 2)
// ============================================================
const DORAJI_LINES = ["…방금 그거 도라지 아니에요?", "나랑 음악취향이 비슷한가봐요.", "등산 좋아해요?"];
const DORAJI_SVG =
  '<svg viewBox="0 0 40 40" width="34" height="34">' +
  '<g fill="#9b6bd6" stroke="#5b3a8f" stroke-width="1.5">' +
  '<path d="M20 4 L24 16 L20 14 L16 16 Z"/><path d="M36 15 L25 21 L26 17 L23 14 Z"/>' +
  '<path d="M30 35 L21 25 L25 24 L27 21 Z"/><path d="M10 35 L13 21 L15 24 L19 25 Z"/>' +
  '<path d="M4 15 L17 14 L14 17 L15 21 Z"/></g>' +
  '<circle cx="20" cy="19" r="4" fill="#fff3a8" stroke="#5b3a8f" stroke-width="1.2"/></svg>';

function placeDoraji(info) {
  if (currentRoute !== "wonjin" || dorajiIds.includes(info.id)) {
    return;
  }
  const el = document.createElement("button");
  el.className = "doraji";
  el.innerHTML = DORAJI_SVG;
  el.style.left = info.x + "px";
  el.style.top = info.y + "px";
  el.addEventListener("click", function (e) {
    e.stopPropagation();
    dorajiIds.push(info.id);
    dorajiFound = dorajiFound + 1;
    el.remove();
    sfx("hit");
    updateDorajiCount();
    showToast("조원진", DORAJI_LINES[dorajiFound - 1]);
  });
  game.appendChild(el);
}

function updateDorajiCount() {
  const box = $("doraji-count");
  box.textContent = "🌸 " + dorajiFound + "/3";
  box.classList.toggle("hidden", dorajiFound === 0);
}

let toastTimer = null;
function showToast(name, text) {
  const toast = $("toast");
  toast.innerHTML = "<b></b><span></span>";
  toast.querySelector("b").textContent = "♥ " + name;
  toast.querySelector("span").textContent = fill(text);
  toast.classList.remove("hidden");
  toast.classList.remove("pop");
  void toast.offsetWidth;
  toast.classList.add("pop");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    toast.classList.add("hidden");
  }, 2800);
}

function flashScreen() {
  const flash = $("flash");
  flash.classList.remove("play");
  void flash.offsetWidth;
  flash.classList.add("play");
}


// ============================================================
// 14-5. 엔딩 영상 (히든 엔딩 2)
// ============================================================
function playEndingVideo(info, onDone) {
  const scene = $("video-scene");
  const video = $("end-video");
  let done = false;
  function finish() {
    if (done) {
      return;
    }
    done = true;
    video.pause();
    scene.classList.add("hidden");
    if (soundOn) {
      bgm.play().catch(function () {});
    }
    onDone();
  }
  $("video-caption").textContent = t(info.caption);
  $("video-credit").textContent = t(info.credit || "");
  scene.classList.remove("hidden");
  bgm.pause();
  video.src = info.src;
  video.muted = !soundOn;
  video.currentTime = 0;
  video.onended = finish;
  $("video-skip").onclick = finish;
  video.play().catch(function () {
    // 소리 있는 재생이 막히면 소리 없이라도 재생
    video.muted = true;
    video.play().catch(finish);
  });
}

// 메뉴 버튼들 클릭 소리
document.querySelectorAll(".jelly, .text-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    sfx("click");
  });
});

function goTitle() {
  state = "title";
  endingScreen.classList.add("hidden");
  nameScreen.classList.add("hidden");
  dialogueBox.classList.add("hidden");
  character.classList.add("hidden");
  setBg(null);
  nameInput.value = "";
  nameInput.placeholder = t("이름 입력 (최대 6자)");
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
  let html = "";
  [["sujeong", "♥ 계수정 루트"], ["wonjin", "♥ 조원진 루트"]].forEach(function (pair) {
    html += '<div class="album-col"><p>' + t(pair[1]) + "</p><ul>";
    for (const e of endings[pair[0]]) {
      if (seen.includes(e.id)) {
        html += "<li>" + t(e.title) + " <small>(" + t(e.range) + ")</small></li>";
      } else {
        let hint = t("호감도 ") + t(e.range);
        if (e.hidden) {
          hint = t("히든 엔딩");
        }
        if (e.cond === "doraji") {
          hint = t("어딘가에 무언가가 숨어 있다…");
        }
        html += '<li class="locked">??? <small>(' + hint + ")</small></li>";
      }
    }
    html += "</ul></div>";
  });
  openPopup(t("💘 엔딩 도감"), '<div class="album-cols">' + html + "</div>");
}

function openHowTo() {
  const items = [
    "💬 대화창 클릭 또는 스페이스바로 대사 넘기기",
    "♥ 선택지에 따라 호감도가 오르거나 내려가요",
    "🔪 메스: 표시가 초록 영역에 왔을 때 [지금!] 버튼!",
    "🧵 봉합: 1번부터 순서대로 빠르게 클릭!",
    "🍌 뽑기: 집게가 바나나우유 위에 왔을 때 [내려!] 버튼!",
    "💘 호감도 100점이면 연애 성공! 낮으면…?",
    "🕵️ 어떤 선택을 계속하면… 숨겨진 엔딩이?",
    "💓 심박수: [침착하자!] 버튼을 연타해서 초록 구간 유지!",
    "🥪 샌드위치: 재료 → 썰기 → 크림 → 자르기 4단계!",
    "📱 호감도가 높으면 문자가 올지도?",
    "🌸 어딘가에 숨은 무언가를 찾아보세요…"
  ];
  openPopup(t("📖 게임 방법"), "<ul>" + items.map(function (x) { return "<li>" + t(x) + "</li>"; }).join("") + "</ul>");
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

// 효과음: 소리 파일 없이 코드로 만든 소리들 (이름으로 불러 써요)
function tone(freq, when, dur, type, vol, slideTo) {
  const t = audioCtx.currentTime + when;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  if (slideTo) {
    osc.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
  }
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(vol, t + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(gain).connect(audioCtx.destination);
  osc.start(t);
  osc.stop(t + dur + 0.02);
}

const SFX = {
  click: function () { tone(880, 0, 0.07, "square", 0.08); },                       // 메뉴 버튼
  next: function () { tone(1200, 0, 0.05, "sine", 0.08); },                         // 대사 넘기기
  sparkle: function () { [1047, 1319, 1568, 2093].forEach(function (f, i) { tone(f, i * 0.05, 0.15, "sine", 0.12); }); }, // 선택지 등장
  select: function () { tone(660, 0, 0.15, "triangle", 0.3, 1320); },              // 선택지 고르기
  loveUp: function () { [784, 988, 1175].forEach(function (f, i) { tone(f, i * 0.08, 0.2, "triangle", 0.2); }); },     // 호감도 +
  loveDown: function () { tone(330, 0, 0.35, "sawtooth", 0.12, 165); },            // 호감도 -
  mystery: function () { tone(415, 0, 0.3, "sine", 0.18); tone(392, 0.25, 0.5, "sine", 0.18); },                        // 미스터리 +
  start: function () { tone(300, 0, 0.3, "triangle", 0.2, 900); },                 // 미니게임 시작
  hit: function () { tone(1568, 0, 0.12, "triangle", 0.2); tone(2093, 0.06, 0.18, "sine", 0.15); },                    // 미니게임 성공 1번
  miss: function () { tone(180, 0, 0.25, "square", 0.12, 120); },                  // 미니게임 실패 1번
  tick: function () { tone(1400, 0, 0.05, "square", 0.1); },                       // 봉합 점 클릭
  drop: function () { tone(900, 0, 0.5, "sine", 0.15, 200); },                     // 집게 내려가기
  win: function () { [523, 659, 784, 1047].forEach(function (f, i) { tone(f, i * 0.1, 0.3, "triangle", 0.22); }); },   // 성공 팡파레
  lose: function () { [392, 370, 349, 262].forEach(function (f, i) { tone(f, i * 0.18, 0.3, "sawtooth", 0.1); }); }    // 실패 효과음
};

function sfx(name) {
  if (!soundOn || !SFX[name]) {
    return;
  }
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    SFX[name]();
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
$("btn-wonjin").addEventListener("click", function () {
  startGame("wonjin");
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


// ============================================================
// 17. 언어 바꾸기 (한국어 ↔ 中文)
// ============================================================
function applyLang() {
  document.querySelectorAll(".i18n").forEach(function (el) {
    if (!el.dataset.ko) {
      el.dataset.ko = el.textContent;
    }
    el.textContent = t(el.dataset.ko);
  });
  nameInput.placeholder = t("이름 입력 (최대 6자)");
  game.classList.toggle("lang-zh", lang === "zh");
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "ko";
  $("btn-lang").textContent = lang === "zh" ? "한" : "中";
}

$("btn-lang").addEventListener("click", function () {
  sfx("click");
  lang = lang === "zh" ? "ko" : "zh";
  try {
    localStorage.setItem("drx_lang", lang);
  } catch (e) {
    // 저장이 안 되는 환경이면 넘어가요
  }
  applyLang();
  // 대사 중에 바꾸면 지금 대사도 바로 바뀌게
  if (state === "play" && !busy && story[index]) {
    showLine();
  }
});

applyLang();
