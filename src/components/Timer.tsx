"use client";

import { useState, useEffect, useRef } from "react";
import { IconClock } from "@tabler/icons-react";

type TimerProps = {
  /**
   * Whether the timer should be running or paused
   */
  isRunning?: boolean;

  /**
   * Optional initial time in seconds
   */
  initialTime?: number;

  /**
   * Optional callback when time changes
   */
  onTimeChange?: (time: number) => void;

  /**
   * Optional className for custom styling
   */
  className?: string;

  /**
   * Whether to show hours in timer (default: false)
   */
  showHours?: boolean;
};

export function Timer({
  isRunning = true,
  initialTime = 0,
  onTimeChange,
  className = "",
  showHours = false,
}: TimerProps) {
  const [time, setTime] = useState(initialTime);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Reset timer when initialTime changes
  useEffect(() => {
    setTime(initialTime);
  }, [initialTime]);

  // Report time changes to parent component via callback
  useEffect(() => {
    if (onTimeChange) {
      onTimeChange(time);
    }
  }, [time, onTimeChange]);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning]);

  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    if (showHours) {
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <IconClock size={18} />
      <span className="font-mono">{formatTime()}</span>
    </div>
  );
}
