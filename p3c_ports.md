# YBEZ 2Gen P3-C RUN 1 — 항구 접근축 감사표

- 작성일: 2026-09-21
- 단계: `RUN 1`
- 성격: 20개 신규 섬의 항구 접근축 데이터 감사
- runtime 수정: **없음**
- `index_candidate.html` 수정: **없음**

## 1. RUN 1 판정

**PASS**

- 섬: **20/20**
- 진입축: **23/23**
- EXACT: **7축**
- SAME_EUPMYEON: **5축**
- FALLBACK: **11축**
- MANUAL: **0축**
- 승인 access node: **8개 unique node**
- 임의 요금 생성: **0건**
- 다른 읍·면 proxy 자동대입: **0건**
- REVIEW/비활성 route를 자동승인값으로 사용: **0건**

## 2. 판정 규칙

1. `EXACT`: 항구 자체/항구 정류장으로 식별되는 canonical node.
2. `SAME_EUPMYEON`: 최신 handover에서 항구 소재 읍·면이 확정되어 있고, node 주소가 같은 읍·면이며 GPS 근접성이 확인된 경우.
3. `FALLBACK`: exact 또는 같은 읍·면 근거가 부족하면 기존 parent LV4→항구축을 유지.
4. 실제 계산 시에는 해당 출발지→승인 node route가 `active=true` + `SAFE_AUTO_MAIN` + 실제 grade/provider evidence를 가져야 direct 사용.
5. 우등/일반이 함께 있으면 기존 `routes.json` grade priority에 따라 우등을 기본으로 하고 일반 선택 가능.

## 3. 20개 섬 / 23개 진입축 전수표

| 섬 | parent | gateway | 판정 | 승인 access node | GPS 거리 | 실제 DB 상태 | 비고 |
|---|---|---|---|---|---:|---|---|
| 안마도 | 영광 | 계마항 | **SAME_EUPMYEON** | `NODE_0611` 홍농버스터미널 | 4.45km | SAFE_AUTO_MAIN 유입 5개 / bustago, tmoney | handover: 계마항권=홍농읍; node address confirms 홍농읍 |
| 가사도 | 진도 | 쉬미항 | **FALLBACK** | — | — | 새 proxy 미승인 | 동일 읍·면 또는 exact port node 근거 미확정; 기존 진도→쉬미항 유지. 최근접 참고=진도공용터미널 5.32km (자동대입 금지) |
| 금오도 | 여수 | 여수항 | **FALLBACK** | — | — | 새 proxy 미승인 | 동일 읍·면 또는 exact port node 근거 미확정; 기존 여수→여수항 유지. 최근접 참고=여수종합버스터미널 2.67km (자동대입 금지) |
| 서거차도 | 진도 | 진도항 | **EXACT** | `NODE_0625` 진도항화물터미널 | 1.21km | SAFE_AUTO_MAIN 유입 4개 / bustago | provider endpoint 진도항→canonical NODE_0625; port-area stop |
| 관사도 | 진도 | 진도항 | **EXACT** | `NODE_0625` 진도항화물터미널 | 1.21km | SAFE_AUTO_MAIN 유입 4개 / bustago | provider endpoint 진도항→canonical NODE_0625; port-area stop |
| 연도 | 여수 | 여수항 | **FALLBACK** | — | — | 새 proxy 미승인 | 동일 읍·면 또는 exact port node 근거 미확정; 기존 여수→여수항 유지. 최근접 참고=여수종합버스터미널 2.67km (자동대입 금지) |
| 개도 | 여수 | 여수항 | **FALLBACK** | — | — | 새 proxy 미승인 | 동일 읍·면 또는 exact port node 근거 미확정; 기존 여수→여수항 유지. 최근접 참고=여수종합버스터미널 2.67km (자동대입 금지) |
| 거문도 | 여수 | 여수항 | **FALLBACK** | — | — | 새 proxy 미승인 | 동일 읍·면 또는 exact port node 근거 미확정; 기존 여수→여수항 유지. 최근접 참고=여수종합버스터미널 2.67km (자동대입 금지) |
| 거문도 | 고흥 | 녹동항 | **SAME_EUPMYEON** | `NODE_0168` 녹동공영버스터미널 | 1.87km | SAFE_AUTO_MAIN 유입 20개 / bustago, kobus, tmoney | handover: 녹동항=도양읍; node address confirms 도양읍 |
| 낙월도 | 영광 | 향화도항 | **FALLBACK** | — | — | 새 proxy 미승인 | 동일 읍·면 또는 exact port node 근거 미확정; 기존 영광→향화도항 유지. 최근접 참고=해제여객터미널 9.09km (자동대입 금지) |
| 어불도 | 해남 | 어란진항 | **SAME_EUPMYEON** | `NODE_0629` 산정정류소 | 3.76km | SAFE_AUTO_MAIN 유입 4개 / tmoney | handover/user GPS: 어란진항=송지면; node address confirms 송지면 |
| 조도 | 진도 | 진도항 | **EXACT** | `NODE_0625` 진도항화물터미널 | 1.21km | SAFE_AUTO_MAIN 유입 4개 / bustago | provider endpoint 진도항→canonical NODE_0625; port-area stop |
| 대마도(진도) | 진도 | 진도항 | **EXACT** | `NODE_0625` 진도항화물터미널 | 1.21km | SAFE_AUTO_MAIN 유입 4개 / bustago | provider endpoint 진도항→canonical NODE_0625; port-area stop |
| 모도(진도 의신) | 진도 | 초평항 | **SAME_EUPMYEON** | `NODE_0624` 쏠비치진도정류소 | 0.65km | SAFE_AUTO_MAIN 유입 6개 / tmoney | handover/user GPS: 초평항=의신면; node address confirms 의신면 |
| 넙도 | 완도 | 이목항 | **FALLBACK** | — | — | 새 proxy 미승인 | 동일 읍·면 또는 exact port node 근거 미확정; 기존 완도→이목항 유지. 최근접 참고=땅끝정류소 12.03km (자동대입 금지) |
| 넙도 | 해남 | 땅끝항 | **EXACT** | `NODE_0628` 땅끝정류소 | 1.03km | SAFE_AUTO_MAIN 유입 12개 / bustago, tmoney | handover: 사실상 항구 직접 접근 node |
| 서넙도 | 완도 | 이목항 | **FALLBACK** | — | — | 새 proxy 미승인 | 동일 읍·면 또는 exact port node 근거 미확정; 기존 완도→이목항 유지. 최근접 참고=땅끝정류소 12.03km (자동대입 금지) |
| 서넙도 | 해남 | 땅끝항 | **EXACT** | `NODE_0628` 땅끝정류소 | 1.03km | SAFE_AUTO_MAIN 유입 12개 / bustago, tmoney | handover: 사실상 항구 직접 접근 node |
| 대모도 | 완도 | 완도항 | **EXACT** | `NODE_0193` 완도항정류장 | 0.25km | SAFE_AUTO_MAIN 유입 1개 / kobus | node display is explicit port stop; 0.25km from gateway GPS |
| 대경도 | 여수 | 국동항 | **FALLBACK** | — | — | 새 proxy 미승인 | 동일 읍·면 또는 exact port node 근거 미확정; 기존 여수→국동항 유지. 최근접 참고=여수종합버스터미널 3.46km (자동대입 금지) |
| 대두라도 | 여수 | 돌산항 | **FALLBACK** | — | — | 새 proxy 미승인 | 동일 읍·면 또는 exact port node 근거 미확정; 기존 여수→돌산항 유지. 최근접 참고=여수종합버스터미널 15.75km (자동대입 금지) |
| 여자도 | 여수 | 섬달천항 | **SAME_EUPMYEON** | `NODE_0609` 덕양시외버스터미널 | 7.14km | SAFE_AUTO_MAIN 유입 28개 / bustago, tmoney | handover/user GPS: 섬달천항=소라면; node address confirms 소라면 |
| 시산도 | 고흥 | 오천항 | **FALLBACK** | — | — | 새 proxy 미승인 | 동일 읍·면 또는 exact port node 근거 미확정; 기존 고흥→오천항 유지. 최근접 참고=소록도 14.46km (자동대입 금지) |

## 4. 승인 node별 대표 실수집 운임

### 녹동항 → 녹동공영버스터미널 (`NODE_0168`)
- 판정: **SAME_EUPMYEON**
- 항구↔node GPS 직선거리: **1.87km**
- node 주소: `전남 고흥군 도양읍 천마로 57`
- SAFE_AUTO_MAIN 유입 route: **20개**
- providers: `bustago, kobus, tmoney`
- 광주유스퀘어→녹동공영버스터미널 시외우등 24,400원 [tmoney]
- 여수종합버스터미널→녹동공영버스터미널 시외우등 21,200원 [tmoney]
- 고흥공용버스정류장→녹동공영버스터미널 시외우등 3,400원 [tmoney]

### 완도항 → 완도항정류장 (`NODE_0193`)
- 판정: **EXACT**
- 항구↔node GPS 직선거리: **0.25km**
- node 주소: `전남 완도군 완도읍 장보고대로 339`
- SAFE_AUTO_MAIN 유입 route: **1개**
- providers: `kobus`
- 서울고속버스터미널→완도항정류장 고속우등 44,200원 [kobus]

### 섬달천항 → 덕양시외버스터미널 (`NODE_0609`)
- 판정: **SAME_EUPMYEON**
- 항구↔node GPS 직선거리: **7.14km**
- node 주소: `전남 여수시 소라면 하세동길 17-5`
- SAFE_AUTO_MAIN 유입 route: **28개**
- providers: `bustago, tmoney`
- 광주유스퀘어→덕양시외버스터미널 시외일반 12,200원 [tmoney]
- 해남종합버스터미널→덕양시외버스터미널 시외일반 20,000원 [bustago]
- 여수종합버스터미널→덕양시외버스터미널 시외일반 1,700원 [bustago/tmoney]

### 계마항 → 홍농버스터미널 (`NODE_0611`)
- 판정: **SAME_EUPMYEON**
- 항구↔node GPS 직선거리: **4.45km**
- node 주소: `전남 영광군 홍농읍 상하길 28`
- SAFE_AUTO_MAIN 유입 route: **5개**
- providers: `bustago, tmoney`
- 광주유스퀘어→홍농버스터미널 시외일반 9,700원 [tmoney]
- 영광종합버스터미널→홍농버스터미널 시외일반 2,400원 [tmoney]

### 초평항 → 쏠비치진도정류소 (`NODE_0624`)
- 판정: **SAME_EUPMYEON**
- 항구↔node GPS 직선거리: **0.65km**
- node 주소: `전남 진도군 의신면 송군길 30-40`
- SAFE_AUTO_MAIN 유입 route: **6개**
- providers: `tmoney`
- 광주유스퀘어→쏠비치진도정류소 시외우등 23,100원 [tmoney]

### 진도항 → 진도항화물터미널 (`NODE_0625`)
- 판정: **EXACT**
- 항구↔node GPS 직선거리: **1.21km**
- node 주소: `전남 진도군 임회면 남동리`
- SAFE_AUTO_MAIN 유입 route: **4개**
- providers: `bustago`
- 진도공용터미널→진도항화물터미널 시외일반 3,300원 [bustago]
- 목포종합버스터미널→진도항화물터미널 시외일반 11,600원 [bustago]

### 땅끝항 → 땅끝정류소 (`NODE_0628`)
- 판정: **EXACT**
- 항구↔node GPS 직선거리: **1.03km**
- node 주소: `전남 해남군 송지면 땅끝마을길`
- SAFE_AUTO_MAIN 유입 route: **12개**
- providers: `bustago, tmoney`
- 광주유스퀘어→땅끝정류소 시외일반 20,600원 [bustago/tmoney]
- 해남종합버스터미널→땅끝정류소 시외일반 6,400원 [tmoney]
- 진도공용터미널→땅끝정류소 시외일반 3,800원 [tmoney]

### 어란진항 → 산정정류소 (`NODE_0629`)
- 판정: **SAME_EUPMYEON**
- 항구↔node GPS 직선거리: **3.76km**
- node 주소: `전남 해남군 송지면 산정1길 74`
- SAFE_AUTO_MAIN 유입 route: **4개**
- providers: `tmoney`
- 광주유스퀘어→산정정류소 시외일반 19,200원 [tmoney]
- 해남종합버스터미널→산정정류소 시외일반 4,900원 [tmoney]
- 나주버스터미널→산정정류소 시외일반 14,900원 [tmoney]

## 5. FALLBACK으로 유지한 축

- **가사도 / 쉬미항**: 동일 읍·면 또는 exact port node 근거 미확정; 기존 진도→쉬미항 유지. 최근접 참고=진도공용터미널 5.32km (자동대입 금지)
- **금오도 / 여수항**: 동일 읍·면 또는 exact port node 근거 미확정; 기존 여수→여수항 유지. 최근접 참고=여수종합버스터미널 2.67km (자동대입 금지)
- **연도 / 여수항**: 동일 읍·면 또는 exact port node 근거 미확정; 기존 여수→여수항 유지. 최근접 참고=여수종합버스터미널 2.67km (자동대입 금지)
- **개도 / 여수항**: 동일 읍·면 또는 exact port node 근거 미확정; 기존 여수→여수항 유지. 최근접 참고=여수종합버스터미널 2.67km (자동대입 금지)
- **거문도 / 여수항**: 동일 읍·면 또는 exact port node 근거 미확정; 기존 여수→여수항 유지. 최근접 참고=여수종합버스터미널 2.67km (자동대입 금지)
- **낙월도 / 향화도항**: 동일 읍·면 또는 exact port node 근거 미확정; 기존 영광→향화도항 유지. 최근접 참고=해제여객터미널 9.09km (자동대입 금지)
- **넙도 / 이목항**: 동일 읍·면 또는 exact port node 근거 미확정; 기존 완도→이목항 유지. 최근접 참고=땅끝정류소 12.03km (자동대입 금지)
- **서넙도 / 이목항**: 동일 읍·면 또는 exact port node 근거 미확정; 기존 완도→이목항 유지. 최근접 참고=땅끝정류소 12.03km (자동대입 금지)
- **대경도 / 국동항**: 동일 읍·면 또는 exact port node 근거 미확정; 기존 여수→국동항 유지. 최근접 참고=여수종합버스터미널 3.46km (자동대입 금지)
- **대두라도 / 돌산항**: 동일 읍·면 또는 exact port node 근거 미확정; 기존 여수→돌산항 유지. 최근접 참고=여수종합버스터미널 15.75km (자동대입 금지)
- **시산도 / 오천항**: 동일 읍·면 또는 exact port node 근거 미확정; 기존 고흥→오천항 유지. 최근접 참고=소록도 14.46km (자동대입 금지)

## 6. RUN 2 적용 whitelist

RUN 2에서는 아래 승인 access node만 사용한다. runtime에서 전국 정류장 GPS nearest 검색을 하지 않는다.

- `계마항` → `NODE_0611` 홍농버스터미널 / SAME_EUPMYEON
- `진도항` → `NODE_0625` 진도항화물터미널 / EXACT
- `녹동항` → `NODE_0168` 녹동공영버스터미널 / SAME_EUPMYEON
- `어란진항` → `NODE_0629` 산정정류소 / SAME_EUPMYEON
- `초평항` → `NODE_0624` 쏠비치진도정류소 / SAME_EUPMYEON
- `땅끝항` → `NODE_0628` 땅끝정류소 / EXACT
- `완도항` → `NODE_0193` 완도항정류장 / EXACT
- `섬달천항` → `NODE_0609` 덕양시외버스터미널 / SAME_EUPMYEON

### 대표 5개에 실제 적용되는 whitelist

- 광주→어불도: `어란진항 → NODE_0629 산정정류소`
- 광주→모도(진도 의신): `초평항 → NODE_0624 쏠비치진도정류소`
- 광주→여자도: `섬달천항 → NODE_0609 덕양시외버스터미널`
- 광주→안마도: `계마항 → NODE_0611 홍농버스터미널`
- 광주→거문도(녹동축): `녹동항 → NODE_0168 녹동공영버스터미널`

## 7. RUN 2에서 지켜야 할 검수포인트

- 출발지→승인 access node에 안전한 실제 route가 있으면 parent LV4를 생략.
- 안전 direct가 없으면 기존 parent LV4→gateway fallback 유지.
- route-embedded 3개(어불도/모도/여자도)는 해상·도선축을 수정하지 않고 육상 prefix만 교체.
- 거문도는 여수축과 녹동축을 유지하며 녹동축 안에서만 direct 판정.
- 시외/고속 본선에는 km를 붙이지 않음.
- 접근/관내 장거리/환승 설명 구간에만 GPS 기반 거리를 표시.
- GPS 거리는 도로거리로 위장하지 않으며 내부 근거는 좌표 기반 거리로 보존.
- `port_access` 내부키 화면 노출 금지.

## 8. 무결성

- `index_candidate.html` SHA-256: `39d0146198e292e2d05f7912474f74255fb1c855eca87760b3095289b05f7e7d`
- `nodes.json` SHA-256: `301ad71a621f6c40738f30b46fe17aed653a3f706f6eedbbabc1e69272ad0f18`
- `routes.json` SHA-256: `b1b44437caad811ffeb23c608e0ead05118b8ca70506c37c46d3c7bf43b32506`
- RUN 1에서 위 세 파일 수정 없음.

## 9. 다음 단계

**RUN 1 PASS. 다음은 RUN 2 대표 5개 국소 패치.**
