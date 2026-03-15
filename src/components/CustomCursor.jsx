import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let animFrameId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) {
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
      }
    };

    const animateRing = () => {
      // Trailing effect — ring lags behind dot
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ring) {
        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;
      }
      animFrameId = requestAnimationFrame(animateRing);
    };

    const addHover = () => {
      if (dot) dot.classList.add('hovered');
      if (ring) ring.classList.add('hovered');
      setHovered(true);
    };

    const removeHover = () => {
      if (dot) dot.classList.remove('hovered');
      if (ring) ring.classList.remove('hovered');
      setHovered(false);
    };

    window.addEventListener('mousemove', onMouseMove);

    // Attach hover listeners to all interactive elements
    const setupHoverTargets = () => {
      const targets = document.querySelectorAll('a, button, [data-cursor-hover]');
      targets.forEach((el) => {
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
      });
      return targets;
    };

    let targets = setupHoverTargets();

    // Re-scan after possible re-renders
    const observer = new MutationObserver(() => {
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
      targets = setupHoverTargets();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    animFrameId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} id="cursor-dot" />
      <div ref={ringRef} id="cursor-ring" />
    </>
  );
}
