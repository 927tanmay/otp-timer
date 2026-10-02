# otp-timer

[![npm](https://img.shields.io/npm/v/otp-timer)](https://www.npmjs.com/package/otp-timer)
[![CI](https://github.com/927tanmay/otp-timer/actions/workflows/ci.yml/badge.svg)](https://github.com/927tanmay/otp-timer/actions/workflows/ci.yml)
[![license](https://img.shields.io/npm/l/otp-timer)](./LICENSE)

A tiny React countdown timer for OTP screens. It counts down, then swaps itself for a **Resend** button that restarts the timer.

- Works with React 16.8 through 19
- Zero dependencies, ~2 KB
- TypeScript types included
- ESM and CommonJS builds

## Demo

[927tanmay.github.io/otp-timer](https://927tanmay.github.io/otp-timer/)

## Install

```bash
npm install otp-timer
```

## Usage

```jsx
import OtpTimer from "otp-timer";

export default function VerifyOtp() {
  const handleResend = () => {
    // request a new OTP here
  };

  return <OtpTimer minutes={1} seconds={0} resend={handleResend} />;
}
```

A named export is also available: `import { OtpTimer } from "otp-timer"`.

## Props

### Behaviour

| Prop         | Description                                                    | Default        | Example                     |
| :----------- | :------------------------------------------------------------- | :------------- | :-------------------------- |
| `minutes`    | Minutes to count down from                                     | `0`            | `minutes={1}`               |
| `seconds`    | Seconds to count down from (values over 59 roll into minutes)  | `30`           | `seconds={20}`              |
| `resend`     | Called when the resend button is clicked; the timer restarts   | –              | `resend={handleResend}`     |
| `text`       | Label shown before the countdown                               | `"Time left:"` | `text="Code expires in"`    |
| `ButtonText` | Resend button content                                          | `"Resend"`     | `ButtonText="Send again"`   |

### Styling

| Prop              | Description                     | Default     | Example                            |
| :---------------- | :------------------------------ | :---------- | :--------------------------------- |
| `textColor`       | Timer text color                | `"#000000"` | `textColor="#333"`                 |
| `buttonColor`     | Resend button text color        | `"#fff"`    | `buttonColor="#fff"`               |
| `background`      | Resend button background color  | `"#0033cc"` | `background="#0033cc"`             |
| `buttonClassName` | Class name for the button       | –           | `buttonClassName="btn"`            |
| `buttonStyle`     | Inline styles for the button    | –           | `buttonStyle={{ padding: 8 }}`     |
| `timerSpanClass`  | Class name for the timer text   | –           | `timerSpanClass="timer"`           |
| `timerSpanStyle`  | Inline styles for the timer text| –           | `timerSpanStyle={{ fontWeight: 600 }}` |

## Upgrading from v2

See [CHANGELOG.md](./CHANGELOG.md#300). For most apps, no code changes are needed.

## Development

```bash
npm install
npm run dev     # example app at http://localhost:5173
npm test
npm run build
```

## License

MIT © [Simran Gupta](https://github.com/1209simran) & [Tanmay Sharma](https://github.com/927tanmay)
