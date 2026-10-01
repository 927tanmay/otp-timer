// Default import only: Node's ESM loader can't detect named exports on older
// CommonJS builds of React (e.g. 16.x), so `import { useState }` would fail there.
import React from "react";
import type { CSSProperties, MouseEvent, ReactNode } from "react";

const { useEffect, useRef, useState } = React;

export interface OtpTimerProps {
  /** Minutes to count down from. Default: 0 */
  minutes?: number;
  /** Seconds to count down from. Values above 59 roll over into minutes. Default: 30 */
  seconds?: number;
  /** Called when the resend button is clicked, before the timer restarts. */
  resend?: () => void;
  /** Label shown before the countdown. Default: "Time left:" */
  text?: ReactNode;
  /** Resend button content. Default: "Resend" */
  ButtonText?: ReactNode;
  /** Timer text color. Default: "#000000" */
  textColor?: string;
  /** Resend button text color. Default: "#fff" */
  buttonColor?: string;
  /** Resend button background color. Default: "#0033cc" */
  background?: string;
  buttonClassName?: string;
  buttonStyle?: CSSProperties;
  timerSpanClass?: string;
  timerSpanStyle?: CSSProperties;
}

const pad = (n: number) => String(n).padStart(2, "0");

export function OtpTimer({
  minutes = 0,
  seconds = 30,
  resend,
  text = "Time left:",
  ButtonText = "Resend",
  textColor = "#000000",
  buttonColor = "#fff",
  background = "#0033cc",
  buttonClassName,
  buttonStyle,
  timerSpanClass,
  timerSpanStyle,
}: OtpTimerProps) {
  const total = Math.max(0, Math.floor(minutes * 60 + seconds));
  const [remaining, setRemaining] = useState(total);
  // Bumped on every resend to restart the countdown effect.
  const [cycle, setCycle] = useState(0);
  const durationRef = useRef(total);

  useEffect(() => {
    const duration = durationRef.current;
    if (duration <= 0) return;

    // Count against a fixed deadline so throttled intervals (e.g. background
    // tabs) don't make the timer drift.
    const deadline = Date.now() + duration * 1000;
    const id = setInterval(() => {
      const left = Math.max(0, Math.round((deadline - Date.now()) / 1000));
      setRemaining(left);
      if (left === 0) clearInterval(id);
    }, 1000);

    return () => clearInterval(id);
  }, [cycle]);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    resend?.();
    durationRef.current = total;
    setRemaining(total);
    setCycle((c) => c + 1);
  };

  const textStyle: CSSProperties = {
    fontSize: "16px",
    fontFamily: "Roboto",
    lineHeight: "22px",
    color: textColor,
  };

  const buttonStyling: CSSProperties = {
    border: "none",
    cursor: "pointer",
    background,
    color: buttonColor,
    fontSize: "16px",
    lineHeight: "22px",
    ...buttonStyle,
  };

  return (
    <div style={textStyle}>
      {remaining === 0 ? (
        <button
          type="button"
          style={buttonStyling}
          onClick={handleClick}
          className={buttonClassName}
        >
          <span>{ButtonText}</span>
        </button>
      ) : (
        <span role="timer" className={timerSpanClass} style={timerSpanStyle}>
          <span>{text} </span>
          {pad(Math.floor(remaining / 60))}:{pad(remaining % 60)}
        </span>
      )}
    </div>
  );
}
