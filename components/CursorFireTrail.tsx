'use client';

import { useEffect, useRef } from 'react';

type Point = {
  x: number;
  y: number;
  life: number;
};

const MAX_POINTS = 60;
const MELT_DISTANCE = 180;
const MELT_TIME = 1200;
const WET_TIME = 3200;

export default function CursorFireTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointsRef = useRef<Point[]>([]);
  const animationRef = useRef<number>(0);
  const timeoutsRef = useRef(new WeakMap<HTMLElement, number[]>());
  const isActiveRef = useRef(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (!isFinePointer || prefersReducedMotion || navigator.webdriver) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpi = window.devicePixelRatio || 1;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpi;
      canvas.height = height * dpi;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpi, 0, 0, dpi, 0, 0);
    };

    const setState = (element: HTMLElement, state: 'snowy' | 'melting' | 'wet') => {
      element.dataset.snowState = state;
      element.classList.toggle('is-snowy', state === 'snowy');
      element.classList.toggle('is-melting', state === 'melting');
      element.classList.toggle('is-wet', state === 'wet');
    };

    const clearTimers = (element: HTMLElement) => {
      const timers = timeoutsRef.current.get(element);
      if (timers) {
        timers.forEach((timer) => window.clearTimeout(timer));
      }
    };

    const triggerMelt = (element: HTMLElement) => {
      clearTimers(element);
      setState(element, 'melting');
      const meltingTimer = window.setTimeout(() => {
        setState(element, 'wet');
      }, MELT_TIME);
      const wetTimer = window.setTimeout(() => {
        setState(element, 'snowy');
      }, MELT_TIME + WET_TIME);
      timeoutsRef.current.set(element, [meltingTimer, wetTimer]);
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMove = (event: MouseEvent) => {
      isActiveRef.current = true;
      pointsRef.current.push({ x: event.clientX, y: event.clientY, life: 1 });
      if (pointsRef.current.length > MAX_POINTS) {
        pointsRef.current.shift();
      }

      document.querySelectorAll<HTMLElement>('[data-snow="true"]').forEach((el) => {
        if (!el.dataset.snowState) {
          setState(el, 'snowy');
        }
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.hypot(centerX - event.clientX, centerY - event.clientY);
        const isSnowy = el.dataset.snowState === 'snowy';
        if (distance < MELT_DISTANCE && isSnowy) {
          triggerMelt(el);
        }
      });
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      if (isActiveRef.current) {
        context.globalCompositeOperation = 'lighter';
        pointsRef.current.forEach((point, index) => {
          const life = Math.max(point.life, 0);
          const size = 28 + index * 1.15;
          const inner = size * 0.3;
          const outer = size * 3;
          const rise = 14 * life;
          const drift = ((index % 5) - 2) * 2;
          const flameX = point.x + drift;
          const flameY = point.y - rise;
          const flameGradient = context.createRadialGradient(
            flameX,
            flameY,
            inner,
            flameX,
            flameY,
            outer
          );
          flameGradient.addColorStop(0, `rgba(255, 245, 230, ${0.95 * life})`);
          flameGradient.addColorStop(0.25, `rgba(255, 205, 150, ${0.85 * life})`);
          flameGradient.addColorStop(0.55, `rgba(255, 145, 90, ${0.6 * life})`);
          flameGradient.addColorStop(0.8, `rgba(255, 100, 55, ${0.35 * life})`);
          flameGradient.addColorStop(1, 'rgba(255, 70, 30, 0)');
          context.save();
          context.translate(flameX, flameY);
          context.scale(1.1, 1.6);
          context.fillStyle = flameGradient;
          context.beginPath();
          context.arc(0, 0, outer, 0, Math.PI * 2);
          context.fill();
          context.restore();

          const coreY = point.y - rise * 0.65;
          const coreGradient = context.createRadialGradient(
            point.x,
            coreY,
            0,
            point.x,
            coreY,
            size
          );
          coreGradient.addColorStop(0, `rgba(255, 255, 255, ${0.55 * life})`);
          coreGradient.addColorStop(0.65, `rgba(255, 200, 130, ${0.35 * life})`);
          coreGradient.addColorStop(1, 'rgba(255, 130, 90, 0)');
          context.save();
          context.translate(point.x, coreY);
          context.scale(1, 1.2);
          context.fillStyle = coreGradient;
          context.beginPath();
          context.arc(0, 0, size, 0, Math.PI * 2);
          context.fill();
          context.restore();

          point.life -= 0.035;
        });
        context.globalCompositeOperation = 'source-over';

        pointsRef.current = pointsRef.current.filter((point) => point.life > 0);
      }
      animationRef.current = window.requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener('mousemove', handleMove);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
      aria-hidden="true"
    />
  );
}
