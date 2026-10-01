# Changelog

## 3.0.0

Same props as 2.x. For most apps, upgrading needs no code changes.

### Fixed

- **React 18/19 support.** React was listed as a regular dependency, so every install pulled in a second copy of React 16. On React 19 this crashed with "Objects are not valid as a React child". React is now only a peer dependency.
- `seconds={0}` was treated as "not set" and fell back to 30 (so `minutes={2} seconds={0}` started at 2:30).
- Clicking Resend threw an error when no `resend` prop was passed.
- `seconds` above 59 rendered as e.g. `00:90`; it now rolls over into minutes (`01:30`).
- The countdown no longer drifts when the browser throttles timers in background tabs.
- The Resend button is now `type="button"`, so it never submits an enclosing form.

### Changed (breaking)

- Requires React **16.8 or newer** (hooks).
- The package now ships only the `dist/` build. Deep imports such as `otp-timer/lib/timer` no longer exist; import from `otp-timer`.
- `propTypes` were removed in favour of bundled TypeScript types.

### Added

- TypeScript types, ESM build, and a named `OtpTimer` export.
- The timer text has `role="timer"`.
