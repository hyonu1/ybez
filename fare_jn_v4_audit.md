# 전남·광주 메인노드 요금표 v4 최종 후보

기준일: 2026-09-22

## 이번 v4에서 해소한 잔여 방향

| 방향 | 일반 | 우선/우등 | 근거 |
|---|---:|---:|---|
| 화순 → 고흥 | 13,700 | 17,800 | MustardData 화순터미널 + BUSTIME 고흥→화순 |
| 화순 → 장흥 | 9,000 | 9,000 | MustardData 화순터미널 |
| 화순 → 보성 | 8,000 | 8,000 | MustardData 화순터미널 |
| 나주 → 남악 | 8,200 | 8,200 | BUSTIME 남악→나주 |
| 보성 → 남악 | 13,300 | 13,300 | BUSTIME 보성→남악 |
| 남악 → 보성 | 13,300 | 13,300 | BUSTIME 남악→보성 |

## 최종 정책

- TMONEY/BUSTAGO/KOBUS actual evidence가 최우선입니다.
- provider 누락 구간은 구간·터미널·요금이 명시된 출처 하나로도 승격할 수 있습니다.
- 같은 실제 노선은 사용자 승인에 따라 역방향 동일요금을 인정합니다.
- 보성북문처럼 메인터미널과 다른 endpoint를 메인터미널로 치환하지 않습니다.
- 오류가 있는 2026 수기 XLSX는 사용하지 않았습니다.
- JNE2026 및 2023 PDF는 reference/audit 전용입니다.

## 상태

- DIRECT_PROVIDER: 200방향
- DIRECT_WEB_VERIFIED(공식 웹): 2방향
- DIRECT_SOURCE_VERIFIED: 14방향
- v4 신규 승격: 6방향
- 남은 v3 hold: 0방향
- YBEZ runtime 변경: 0건