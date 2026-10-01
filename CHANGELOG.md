# Changelog

## 3.0.0

Same props and same rendered output as 2.x. If you `import OtpTimer from "otp-timer"`, upgrading needs no code changes.

### Fixed

- **React 18/19 support.** React was listed as a regular dependency, so every install pulled in a second copy of React 16. On React 19 this crashed with "Objects are not valid as a React child". React is now only a peer dependency.
- `seconds={0}` was treated as "not set" and fell back to 30, so `minutes={2} seconds={0}` started at 2:30 and `minutes={0} seconds={0}` ran for 30 seconds. `0` now means 0.
- `seconds` above 59 rendered as e.g. `00:90`; it now rolls over into minutes (`01:30`).
- Clicking Resend threw an error when no `resend` prop was passed.
- The countdown no longer drifts when the browser throttles timers in background tabs.

### Breaking

- Requires React **16.8 or newer** (hooks).
- The package now ships only the `dist/` build. Deep imports such as `otp-timer/lib/timer` no longer work; import from `otp-timer`.
- The component is now a function component. Code that used a `ref` to reach the old class instance, or tests that read its internal state (e.g. Enzyme `.state()`), will need updating.
- Snapshot tests will show two new attributes: `role="timer"` on the timer and `type="button"` on the resend button.

### Added

- TypeScript types, an ESM build, and a named `OtpTimer` export.
