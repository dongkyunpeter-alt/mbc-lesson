## 요청

너는 전통적인 웹 표준을 엄격하게 준수하는 프론트엔드 개발자야. 제공된 Figma 디자인 링크를 바탕으로, 레거시 웹 환경에 맞춘 MPA(Multi-Page Application) 방식의 웹사이트를 구현해 줘.

**[Figma 디자인 링크]**
https://www.figma.com/design/FbvfglDU4QsAhnqA6Pb7JA/84%EC%AA%BD?node-id=23-104&t=nqThlraKS0xKknrk-4

**[핵심 요구사항]**

1. **개발 스택 (Strict Vanilla)**
   - Node.js 기반의 빌드 도구(Vite, Webpack 등), React, Vue 등은 절대 사용하지 마.
   - 오직 순수 바닐라 HTML5, CSS3, JavaScript만 사용할 것.
   - 브라우저에서 바로 열 수 있는 전통적인 정적 파일 구조로 만들어 줘.

2. **아키텍처 (MPA 방식)**
   - JS 기반의 라우팅(SPA)을 사용하지 마.
   - 페이지 이동이 필요할 경우, 전통적인 HTML `<a>` 태그의 `href` 속성을 이용하여 실제 다른 HTML 문서(예: subpage.html 등)로 이동하도록 구현해 줘.
   - 공통 요소(헤더, 푸터 등)가 있다면 각 HTML 파일에 명시적으로 포함시켜 줘.

3. **UI & 레이아웃 구현**
   - 링크된 피그마의 `node-id=23-104` 레이아웃을 픽셀 퍼펙트(Pixel-perfect)하게 구현할 것.
   - Flexbox 등을 활용하되, 지나치게 실험적인 최신 CSS 기능은 피하고 범용적으로 호환되는 방식을 우선해 줘.
   - 반응형(모바일/태블릿/데스크톱) 처리는 순수 CSS Media Query(`@media`)만 사용해서 구현해 줘.

4. **인터랙션 및 스크립트**
   - JS는 DOM을 직접 조작하는 전통적인 방식(`document.querySelector` 등)으로 작성해 줘.
   - 외부 라이브러리(jQuery 등) 없이 순수 Vanilla JS로만 이벤트 리스너(클릭, 호버, 모달창 등)를 구현해 줘.

위 요구사항을 확실히 인지했다면, 먼저 파일 구조(HTML 파일들, CSS, JS)를 어떻게 나눌 것인지 설명한 뒤 즉시 첫 번째 메인 페이지의 코드를 작성해 줘.
