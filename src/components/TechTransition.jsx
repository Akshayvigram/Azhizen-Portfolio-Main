import React, { useEffect, useRef } from 'react';

/**
 * TechTransition Component
 * 
 * Performs a liquid wave animation using HTML5 Canvas:
 * - mode = 'toDiary': First Blue drains down -> Second Green fills up. Text: "Switching to Azhizen Diary Tech"
 * - mode = 'toTech': First Green drains down -> Second Blue fills up. Text: "Switching to Azhizen Tech"
 * - Triggers onComplete callback when transition ends.
 */
export const TechTransition = ({ onComplete, mode = 'toDiary' }) => {
  const canvasRef = useRef(null);

  const isToDiary = mode === 'toDiary';
  const labelText = isToDiary ? "Switching to Azhizen Diary Tech" : "Switching to Azhizen Tech";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imgBlue = new Image();
    const imgGreen = new Image();

    // Image paths from public directory
    imgBlue.src = '/azhizen-logo-blue.png';
    imgGreen.src = '/azhizen-logo-green.png';

    let loadedCount = 0;
    let animationId;
    let hasCompleted = false;

    const handleLoad = () => {
      loadedCount++;
      if (loadedCount === 2) {
        startAnimation();
      }
    };

    const handleError = (e) => {
      console.warn("Logo image load issue, falling back:", e.target?.src);
      loadedCount++;
      if (loadedCount === 2) {
        startAnimation();
      }
    };

    imgBlue.onload = handleLoad;
    imgGreen.onload = handleLoad;
    imgBlue.onerror = handleError;
    imgGreen.onerror = handleError;

    // Instant start if images are cached
    if (imgBlue.complete && imgGreen.complete && loadedCount < 2) {
      loadedCount = 2;
      startAnimation();
    }

    // Reuse offscreen canvases to optimize performance and prevent garbage collection stutter
    const liquidCanvas = document.createElement('canvas');
    const lctx = liquidCanvas.getContext('2d');

    const maskedCanvas = document.createElement('canvas');
    const mctx = maskedCanvas.getContext('2d');

    function buildLiquid(W, H, fillY, waveOffset, colors) {
      liquidCanvas.width = W;
      liquidCanvas.height = H;
      lctx.clearRect(0, 0, W, H);

      // Layer 1: Darkest Background Wave (Depth Effect)
      lctx.beginPath();
      lctx.moveTo(0, H);
      for (let x = 0; x <= W; x += 2) {
        const y = fillY + Math.sin((x * 0.01) + (waveOffset * 0.04)) * 15;
        lctx.lineTo(x, y);
      }
      lctx.lineTo(W, H);
      lctx.closePath();
      lctx.fillStyle = colors.dark;
      lctx.fill();

      // Layer 2: Main Gradient Wave
      lctx.beginPath();
      lctx.moveTo(0, H);
      for (let x = 0; x <= W; x += 2) {
        const y = fillY + Math.sin((x * 0.015) + (waveOffset * 0.07) + 2) * 12;
        lctx.lineTo(x, y);
      }
      lctx.lineTo(W, H);
      lctx.closePath();

      const g = lctx.createLinearGradient(0, fillY, 0, H);
      g.addColorStop(0, colors.light);
      g.addColorStop(0.3, colors.main);
      g.addColorStop(1, colors.dark);

      lctx.fillStyle = g;
      lctx.fill();

      return liquidCanvas;
    }

    function maskLiquid(img, liquid, W, H) {
      maskedCanvas.width = W;
      maskedCanvas.height = H;
      mctx.clearRect(0, 0, W, H);

      if (img.complete && img.naturalWidth !== 0) {
        mctx.drawImage(img, 0, 0, W, H);
      } else {
        mctx.fillStyle = isToDiary ? "#4caf50" : "#1a8fd0";
        mctx.font = "bold 36px sans-serif";
        mctx.textAlign = "center";
        mctx.fillText("AZHIZEN", W / 2, H / 2);
      }

      mctx.globalCompositeOperation = 'source-in';
      mctx.drawImage(liquid, 0, 0);
      return maskedCanvas;
    }

    function startAnimation() {
      const W = imgBlue.naturalWidth || 600;
      const H = imgBlue.naturalHeight || 200;
      canvas.width = W;
      canvas.height = H;

      let waveOffset = 0;
      let progress = 0;
      let isFlipping = false;

      const themes = [
        {
          // Theme 0: BLUE
          img: imgBlue,
          colors: {
            light: '#00EAFF', // Bright Cyan
            main: '#1a8fd0',  // Tech Blue
            dark: '#053E6B'   // Deep Blue
          }
        },
        {
          // Theme 1: GREEN
          img: imgGreen,
          colors: {
            light: '#B2FF59', // Bright Lime
            main: '#4caf50',  // Eco Green
            dark: '#143D16'   // Dark Green
          }
        }
      ];

      // If mode === 'toDiary': First Blue (0) -> Second Green (1)
      // If mode === 'toTech': First Green (1) -> Second Blue (0)
      const firstThemeIndex = isToDiary ? 0 : 1;
      const secondThemeIndex = isToDiary ? 1 : 0;

      function drawFrame() {
        waveOffset += 2;
        ctx.clearRect(0, 0, W, H);

        if (!isFlipping) {
          // PHASE 1: First Color Drains Down
          progress += 0.012;
          const fillY = progress * H;
          const theme = themes[firstThemeIndex];

          const liquid = buildLiquid(W, H, fillY, waveOffset, theme.colors);
          const masked = maskLiquid(theme.img, liquid, W, H);

          ctx.globalAlpha = 0.08;
          if (theme.img.complete && theme.img.naturalWidth !== 0) {
            ctx.drawImage(theme.img, 0, 0, W, H);
          }
          ctx.globalAlpha = 1;
          ctx.drawImage(masked, 0, 0);

          if (progress >= 1) {
            isFlipping = true;
          }
        } else {
          // PHASE 2: Second Color Fills Up
          progress -= 0.012;
          const fillY = progress * H;
          const theme = themes[secondThemeIndex];

          const liquid = buildLiquid(W, H, fillY, waveOffset, theme.colors);
          const masked = maskLiquid(theme.img, liquid, W, H);

          ctx.globalAlpha = 0.08;
          if (theme.img.complete && theme.img.naturalWidth !== 0) {
            ctx.drawImage(theme.img, 0, 0, W, H);
          }
          ctx.globalAlpha = 1;
          ctx.drawImage(masked, 0, 0);

          if (progress <= 0) {
            if (!hasCompleted) {
              hasCompleted = true;
              setTimeout(() => {
                if (onComplete) onComplete();
              }, 400);
            }
            return;
          }
        }

        animationId = requestAnimationFrame(drawFrame);
      }

      drawFrame();
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [onComplete, mode, isToDiary]);

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center">
      {/* Liquid Wave Animation Canvas */}
      <canvas 
        ref={canvasRef} 
        className="w-[300px] md:w-[380px] object-contain drop-shadow-md" 
      />

      {/* Loading Spinner & Label */}
      <div className="mt-10 flex flex-col items-center gap-3">
        <div className={`w-6 h-6 border-2 ${isToDiary ? 'border-lime-500' : 'border-blue-500'} border-t-transparent rounded-full animate-spin`} />
        <p className="text-gray-400 font-medium tracking-widest text-[11px] uppercase">
          {labelText}
        </p>
      </div>
    </div>
  );
};

export default TechTransition;
