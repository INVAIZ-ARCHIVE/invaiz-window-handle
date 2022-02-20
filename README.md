# `invaiz-window-handle`

🖼📟💷🖥⚙`Windows`, `macOS`에서 모두 사용할 수 있는 크로스 플랫폼 `Window Handler`, 창 조작, 관리 기능을 `npm`을 통해 배포하는 프로젝트입니다.

- `npm install invaiz-window-handle` 명령어를 통해 사용할 수 있습니다.

```shell
npm install invaiz-window-handle
```

- 사용

```ts
import WindowHandle from "invaiz-window-handle";

WindowHandle.senMeesage("messageType", "actionType", "typeKey", 0);
```

- 매개변수
  - `meesageType`: 송신할 메세지의 타입.
  - `actionType`: 송신할 행동의 타입.
  - `typeKey`: 송신할 키의 타입.
  - `s`: 송신할 메세지와 함께 넘길 값.
  
- 반환 값: 결과 값을 `string` 타입으로 반환.
  - 비정상적인 행동일 경우 `Error!` 반환.
  - `try { ... } catch (e) { ... }`를 사용하지 않을 수 있도록 에러 캐치.
