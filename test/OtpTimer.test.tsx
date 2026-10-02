import React from "react";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import OtpTimer from "../src";

const tick = (seconds: number) =>
  act(() => {
    vi.advanceTimersByTime(seconds * 1000);
  });

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe("OtpTimer", () => {
  it("defaults to 30 seconds", () => {
    render(<OtpTimer />);
    expect(screen.getByRole("timer").textContent).toBe("Time left: 00:30");
  });

  it("counts down and shows the resend button at zero", () => {
    render(<OtpTimer seconds={3} />);
    tick(1);
    expect(screen.getByRole("timer").textContent).toBe("Time left: 00:02");
    tick(2);
    expect(screen.queryByRole("timer")).toBeNull();
    expect(screen.getByRole("button").textContent).toBe("Resend");
  });

  it("treats seconds={0} as zero, not the default", () => {
    render(<OtpTimer minutes={2} seconds={0} />);
    expect(screen.getByRole("timer").textContent).toBe("Time left: 02:00");
  });

  it("rolls seconds over 59 into minutes", () => {
    render(<OtpTimer seconds={90} />);
    expect(screen.getByRole("timer").textContent).toBe("Time left: 01:30");
    tick(31);
    expect(screen.getByRole("timer").textContent).toBe("Time left: 00:59");
  });

  it("accepts numeric strings like 2.x did", () => {
    const props = { minutes: "1", seconds: "30" } as Record<string, unknown>;
    render(<OtpTimer {...props} />);
    expect(screen.getByRole("timer").textContent).toBe("Time left: 01:30");
  });

  it("falls back to defaults for null, empty or invalid numbers", () => {
    const props = { minutes: null, seconds: null } as Record<string, unknown>;
    const { rerender } = render(<OtpTimer {...props} />);
    expect(screen.getByRole("timer").textContent).toBe("Time left: 00:30");

    const bad = { minutes: "", seconds: "abc" } as Record<string, unknown>;
    rerender(<OtpTimer key="bad" {...bad} />);
    expect(screen.getByRole("timer").textContent).toBe("Time left: 00:30");
  });

  it("falls back to default text and colors for empty values like 2.x did", () => {
    render(<OtpTimer seconds={1} text="" ButtonText="" textColor="" background="" buttonColor="" />);
    expect(screen.getByRole("timer").textContent).toBe("Time left: 00:01");
    tick(1);
    const button = screen.getByRole("button");
    expect(button.textContent).toBe("Resend");
    expect(button.style.background).toBe("rgb(0, 51, 204)");
    expect(button.style.color).toBe("rgb(255, 255, 255)");
    expect((button.parentElement as HTMLElement).style.color).toBe("rgb(0, 0, 0)");
  });

  it("shows the button immediately for a zero duration", () => {
    render(<OtpTimer minutes={0} seconds={0} />);
    expect(screen.getByRole("button")).toBeTruthy();
  });

  it("calls resend and restarts the countdown", () => {
    const resend = vi.fn();
    render(<OtpTimer seconds={2} resend={resend} />);
    tick(2);
    fireEvent.click(screen.getByRole("button"));
    expect(resend).toHaveBeenCalledTimes(1);
    expect(screen.getByRole("timer").textContent).toBe("Time left: 00:02");
    tick(1);
    expect(screen.getByRole("timer").textContent).toBe("Time left: 00:01");
    tick(1);
    expect(screen.getByRole("button")).toBeTruthy();
  });

  it("does not crash when resend is not provided", () => {
    render(<OtpTimer seconds={1} />);
    tick(1);
    expect(() => fireEvent.click(screen.getByRole("button"))).not.toThrow();
    expect(screen.getByRole("timer")).toBeTruthy();
  });

  it("does not submit an enclosing form", () => {
    const onSubmit = vi.fn((e: React.FormEvent) => e.preventDefault());
    render(
      <form onSubmit={onSubmit}>
        <OtpTimer seconds={0} />
      </form>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("applies custom text, classes and styles", () => {
    const { rerender } = render(
      <OtpTimer
        seconds={5}
        text="Code expires in"
        timerSpanClass="timer"
        timerSpanStyle={{ fontWeight: "bold" }}
      />
    );
    const timer = screen.getByRole("timer");
    expect(timer.textContent).toBe("Code expires in 00:05");
    expect(timer.className).toBe("timer");
    expect(timer.style.fontWeight).toBe("bold");

    rerender(
      <OtpTimer
        seconds={0}
        key="expired"
        ButtonText="Send again"
        buttonClassName="btn"
        background="red"
        buttonStyle={{ color: "green" }}
      />
    );
    const button = screen.getByRole("button");
    expect(button.textContent).toBe("Send again ");
    expect(button.className).toBe("btn");
    expect(button.style.background).toBe("red");
    expect(button.style.color).toBe("green");
  });

  it("stops ticking after unmount", () => {
    const { unmount } = render(<OtpTimer seconds={5} />);
    unmount();
    expect(vi.getTimerCount()).toBe(0);
  });
});
