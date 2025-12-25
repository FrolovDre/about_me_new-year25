'use client';

import { useEffect, useRef } from 'react';

type Point = {
  x: number;
  y: number;
  life: number;
};

const MAX_POINTS = 48;
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
    if (!isFinePointer) return;

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
          const size = 26 + index * 1.1;
          const inner = size * 0.28;
          const outer = size * 2.6;
          const rise = 14 * life;
          const drift = ((index % 5) - 2) * 2;
          const flameGradient = context.createRadialGradient(
            point.x + drift,
            point.y - rise,
            inner,
            point.x + drift,
            point.y - rise,
            outer
          );
          flameGradient.addColorStop(0, `rgba(255, 245, 220, ${0.95 * life})`);
          flameGradient.addColorStop(0.25, `rgba(255, 200, 140, ${0.8 * life})`);
          flameGradient.addColorStop(0.5, `rgba(255, 140, 80, ${0.6 * life})`);
          flameGradient.addColorStop(0.8, `rgba(255, 90, 40, ${0.3 * life})`);
          flameGradient.addColorStop(1, 'rgba(255, 60, 20, 0)');
          context.fillStyle = flameGradient;
          context.beginPath();
          context.arc(point.x + drift, point.y - rise, outer, 0, Math.PI * 2);
          context.fill();

          const coreGradient = context.createRadialGradient(
            point.x,
            point.y - rise * 0.6,
            0,
            point.x,
            point.y - rise * 0.6,
            size * 0.9
          );
          coreGradient.addColorStop(0, `rgba(255, 255, 255, ${0.5 * life})`);
          coreGradient.addColorStop(0.6, `rgba(255, 190, 120, ${0.35 * life})`);
          coreGradient.addColorStop(1, 'rgba(255, 120, 80, 0)');
          context.fillStyle = coreGradient;
          context.beginPath();
          context.arc(point.x, point.y - rise * 0.6, size * 0.9, 0, Math.PI * 2);
          context.fill();

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
