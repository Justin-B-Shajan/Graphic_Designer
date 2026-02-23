'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface UseFullPageScrollOptions {
    totalSections: number;
    /** Minimum ms between section transitions to prevent scroll spam */
    cooldown?: number;
}

interface UseFullPageScrollReturn {
    currentIndex: number;
    direction: 1 | -1;
    goTo: (index: number) => void;
    goNext: () => void;
    goPrev: () => void;
}

export function useFullPageScroll({
    totalSections,
    cooldown = 800,
}: UseFullPageScrollOptions): UseFullPageScrollReturn {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<1 | -1>(1);
    const isAnimating = useRef(false);
    const touchStartY = useRef<number | null>(null);

    const goTo = useCallback(
        (index: number) => {
            if (isAnimating.current) return;
            if (index < 0 || index >= totalSections) return;
            setDirection(index > currentIndex ? 1 : -1);
            setCurrentIndex(index);
            isAnimating.current = true;
            setTimeout(() => {
                isAnimating.current = false;
            }, cooldown);
        },
        [currentIndex, totalSections, cooldown]
    );

    const goNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
    const goPrev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            if (isAnimating.current) return;
            if (e.deltaY > 0) goNext();
            else if (e.deltaY < 0) goPrev();
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); goNext(); }
            if (e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); goPrev(); }
        };

        const handleTouchStart = (e: TouchEvent) => {
            touchStartY.current = e.touches[0].clientY;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            if (touchStartY.current === null) return;
            const delta = touchStartY.current - e.changedTouches[0].clientY;
            if (Math.abs(delta) > 50) {
                if (delta > 0) goNext();
                else goPrev();
            }
            touchStartY.current = null;
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchend', handleTouchEnd, { passive: true });

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [goNext, goPrev]);

    return { currentIndex, direction, goTo, goNext, goPrev };
}
