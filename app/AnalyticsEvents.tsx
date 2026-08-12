"use client";

import { useEffect } from "react";

const gaMeasurementId = "G-8TNM54RXVY";
const customEventDelayMs = 1000;

type EventParameters = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackGa4CustomEvent(
  eventName: "whatsapp_click" | "catalog_download_completed",
  parameters: EventParameters = {},
) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...parameters,
  });

  const gaParameters = {
    send_to: gaMeasurementId,
    ...parameters,
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, gaParameters);
    return;
  }

  window.dataLayer.push(["event", eventName, gaParameters]);
}

function shouldDelayNavigation(event: MouseEvent, anchor: HTMLAnchorElement) {
  return (
    event.button === 0 &&
    !event.altKey &&
    !event.ctrlKey &&
    !event.metaKey &&
    !event.shiftKey &&
    anchor.target !== "_blank"
  );
}

export function delayNavigationTo(url: string) {
  window.setTimeout(() => {
    window.location.href = url;
  }, customEventDelayMs);
}

export function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest<HTMLAnchorElement>('a[href*="wa.me"]');

      if (!anchor) {
        return;
      }

      trackGa4CustomEvent("whatsapp_click", {
        link_url: anchor.href,
      });

      if (shouldDelayNavigation(event, anchor)) {
        event.preventDefault();
        delayNavigationTo(anchor.href);
      }
    }

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return null;
}
