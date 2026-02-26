// 전체 카피 텍스트, 섹션 ID, 네비게이션 링크 등 상수 (카피 변경은 여기서만)
export const SECTION_IDS = {
  HOME: "home",
  ABOUT: "about",
  MODES: "modes",
  FEATURES: "features",
  HOW_IT_WORKS: "how-it-works",
  SAFETY: "safety",
  STATS: "stats",
  JOIN: "join",
  FAQ: "faq",
} as const;

export const NAV_LINKS = [
  { label: "소개", href: `#${SECTION_IDS.ABOUT}` },
  { label: "모드", href: `#${SECTION_IDS.MODES}` },
  { label: "기능", href: `#${SECTION_IDS.FEATURES}` },
  { label: "안전", href: `#${SECTION_IDS.SAFETY}` },
  { label: "사전등록", href: `#${SECTION_IDS.JOIN}` },
] as const;

export const COPY = {
  hero: {
    title: "우리 동네에서,\n믿고 만나는 반려견 보호자",
    sub: "동네 기반 인증으로 신뢰할 수 있는 보호자를 연결·매칭합니다.",
    summary: "친구 · 돌봄 · 가족 모드로 관계를 확장하세요",
    cta: "지금 사전 등록하기",
    trusts: [
      { icon: "shield", text: "철저한 신원 인증" },
      { icon: "users", text: "안전한 1:1 매칭" },
      { icon: "map-pin", text: "동네 기반 커뮤니티" },
    ],
  },
  about: {
    title: "우리 동네 보호자와 연결되는 가장 안전한 방법",
    description:
      "댕개팅은 실명 인증, 반려견 등록, 동네 인증을 거친 보호자만 참여할 수 있는 신뢰 기반 커뮤니티입니다. 만남 기록과 후기가 쌓일수록 더 안전한 네트워크가 만들어집니다.",
    marquee: [
      "신뢰 인증",
      "동네 매칭",
      "안전한 만남",
      "돌봄 교환",
      "기록 기반 신뢰",
      "보호자 커뮤니티",
    ],
  },
  modes: {
    title: "세 가지 모드로 관계를 확장하세요",
    items: [
      {
        name: "친구 모드",
        tagline: "부담 없는 신뢰 기반 만남",
        description:
          "같은 동네 보호자와 산책 친구를 만들어보세요. 인증된 보호자끼리 안전하게 만나고, 서로의 경험을 나눕니다.",
        features: ["동네 기반 매칭", "산책 동행", "정보 교류"],
        accent: false,
      },
      {
        name: "돌봄 모드",
        tagline: "신뢰가 쌓이면 열리는 교환 구조",
        description:
          "신뢰 점수가 일정 수준에 도달하면 활성화됩니다. 보호자 간 돌봄 교환으로 합리적인 반려견 케어가 가능해집니다.",
        features: ["신뢰 점수 기반", "돌봄 교환", "기록 관리"],
        accent: true,
      },
      {
        name: "가족 모드",
        tagline: "신뢰 기반 소규모 커뮤니티",
        description:
          "오래 함께한 보호자들이 만드는 작은 커뮤니티. 깊은 관계를 바탕으로 함께 성장합니다.",
        features: ["소규모 그룹", "공동 활동", "장기 관계"],
        accent: false,
      },
    ],
  },
  features: {
    title: "신뢰를 설계하는 네 가지 시스템",
    tabs: [
      {
        id: "auth",
        label: "인증 시스템",
        title: "다층 인증으로 쌓는 신뢰",
        description:
          "휴대폰 인증, 반려견 등록, 지역 인증, 그리고 활동 기반 뱃지까지. 단계별 인증을 통해 진짜 보호자만 참여합니다.",
        points: [
          "휴대폰 본인 인증",
          "반려견 정보 등록",
          "지역(동네) 인증",
          "활동 기반 신뢰 뱃지",
        ],
      },
      {
        id: "matching",
        label: "매칭 시스템",
        title: "조건이 맞는 보호자를 연결",
        description:
          "거리, 활동 시간대, 반려견 성향을 기반으로 최적의 보호자를 매칭합니다. 무분별한 만남이 아닌 맞춤 연결.",
        points: [
          "반경 기반 거리 필터",
          "활동 시간대 매칭",
          "반려견 성향 호환",
          "매칭 선호도 학습",
        ],
      },
      {
        id: "danglog",
        label: "댕로그",
        title: "기록이 곧 신뢰의 증거",
        description:
          "모든 만남과 활동이 기록됩니다. 축적된 데이터가 보호자의 신뢰도를 객관적으로 보여줍니다.",
        points: [
          "만남 기록 자동 저장",
          "활동 타임라인",
          "신뢰 점수 시각화",
          "반려견 건강/활동 메모",
        ],
      },
      {
        id: "review",
        label: "후기 시스템",
        title: "경험이 순환하는 신뢰 구조",
        description:
          "만남 이후 서로에 대한 후기를 남깁니다. 긍정적 경험이 쌓일수록 더 많은 기능과 기회가 열립니다.",
        points: [
          "만남 후 양방향 후기",
          "후기 기반 신뢰 점수",
          "신뢰 레벨 업그레이드",
          "우수 보호자 인증",
        ],
      },
    ],
  },
  howItWorks: {
    title: "시작은 간단합니다",
    summary: "신뢰가 쌓일수록, 더 많은 기능이 열립니다.",
    steps: [
      {
        number: 1,
        title: "가입 및 인증",
        description: "휴대폰 인증으로 간편하게 가입하세요.",
      },
      {
        number: 2,
        title: "반려견 등록",
        description: "반려견 정보를 등록하고 프로필을 완성하세요.",
      },
      {
        number: 3,
        title: "동네 설정",
        description: "활동 동네를 설정하면 근처 보호자를 찾을 수 있어요.",
      },
      {
        number: 4,
        title: "친구 매칭",
        description: "조건에 맞는 보호자를 추천받고 매칭을 요청하세요.",
      },
      {
        number: 5,
        title: "채팅·만남",
        description: "매칭된 보호자와 채팅하고 만남 약속을 잡으세요.",
      },
      {
        number: 6,
        title: "기록·후기",
        description: "만남 후 기록과 후기를 남기며 신뢰를 쌓으세요.",
      },
      {
        number: 7,
        title: "모드 확장",
        description: "신뢰가 쌓이면 돌봄·가족 모드가 열립니다.",
      },
    ],
  },
  safety: {
    title: "신뢰를 가장 중요한 기준으로 삼습니다",
    badges: [
      {
        icon: "user-check",
        title: "실명 인증",
        description: "본인 인증을 거친 보호자만 활동할 수 있습니다.",
      },
      {
        icon: "paw",
        title: "반려견 등록",
        description: "반려견 정보를 등록하여 책임감 있는 보호자임을 증명합니다.",
      },
      {
        icon: "map",
        title: "동네 인증",
        description: "실제 거주 지역을 인증하여 동네 기반 신뢰를 형성합니다.",
      },
      {
        icon: "eye",
        title: "24시간 모니터링",
        description: "신고/차단 시스템과 운영팀이 안전한 환경을 유지합니다.",
      },
    ],
  },
  stats: {
    items: [
      { value: 1000, suffix: "+", label: "사전등록" },
      { value: 300, suffix: "+", label: "동네" },
      { value: 98, suffix: "%", label: "재사용 의향" },
    ],
  },
  join: {
    title: "댕개팅 첫 사용자로\n참여해보세요",
    cta: "유저테스트 · 사전 등록 신청하기",
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        question: "댕개팅은 강아지 소개팅 앱인가요?",
        answer:
          "아닙니다. 댕개팅은 반려견 보호자를 위한 신뢰 기반 매칭 서비스입니다. 보호자 간 산책 동행, 돌봄 교환, 소규모 커뮤니티 형성을 돕고, 신원 인증·활동 기록·후기 시스템으로 안전한 만남을 설계합니다.",
      },
      {
        question: "안전한가요? 낯선 사람을 어떻게 믿을 수 있나요?",
        answer:
          "댕개팅은 다단계 신뢰 구조를 갖추고 있습니다. 휴대폰 본인 인증, 반려견 등록, 동네 인증, 활동 기반 신뢰 뱃지, 만남 후기 시스템, 신고·차단 기능, 24시간 운영 모니터링으로 구조적 안전을 보장합니다.",
      },
    ],
  },
  footer: {
    email: "dangdating.team@gmail.com",
    representative: "대표 김윤아",
  },
} as const;
