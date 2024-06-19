"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
// @ts-ignore
function SmoothScrolling({ children }) {
  return (
    // @ts-ignore
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;