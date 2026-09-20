# YBEZ 2Gen Desktop

YBEZ 2Gen Desktop 1차 정식 마감본.

## 로컬 데스크톱 실행
`_runtime\run.bat` 더블클릭

기본 주소: `http://127.0.0.1:8085/index.html`

## 실제 모바일 시험
PC와 휴대폰을 같은 Wi-Fi/LAN에 연결한 뒤 `_runtime\run_m.bat` 실행.
콘솔에 표시되는 `http://<PC IPv4>:8085/index.html` 주소를 휴대폰에서 연다.

## GitHub Pages
이 폴더의 웹 파일을 repository root에 그대로 push한다.
`.nojekyll` 포함.

## 운영 규칙
- `index.html` = 최종 PASS 실사용본
- 다음 수정은 `index_candidate.html`에서 시험
- PASS 후 `index.html`로 승격
- 이미지 자산은 이번 패키지에서 제외했으며 추후 별도 반영
