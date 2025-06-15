import React, { useRef, useEffect } from 'react';
import brainLogo from './images/brain_logo-transparent.png';
import './App.css'; // Assuming brain-canvas styles are here or globally accessible

const BrainCanvas = () => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const shimmerAnimationRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Failed to get canvas context');
      return;
    }

    const baseCanvasWidth = 400;
    const baseCanvasHeight = 300;
    // These are the drawing buffer dimensions, matching previous logic
    canvas.width = baseCanvasWidth * 1.3; 
    canvas.height = baseCanvasHeight * 1.3;

    const img = new Image();
    imageRef.current = img; 

    let animationFrameId;

    const draw = () => {
      if (!imageRef.current || !imageRef.current.complete || imageRef.current.naturalWidth === 0) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      const currentCanvas = canvasRef.current;
      if (!currentCanvas) {
        cancelAnimationFrame(animationFrameId);
        return;
      }
      const currentCtx = currentCanvas.getContext('2d');
      if (!currentCtx) {
        console.error('Failed to get canvas context in draw loop');
        cancelAnimationFrame(animationFrameId);
        return;
      }

      currentCtx.clearRect(0, 0, currentCanvas.width, currentCanvas.height);

      const hRatio = currentCanvas.width / imageRef.current.naturalWidth;
      const vRatio = currentCanvas.height / imageRef.current.naturalHeight;
      const ratio = Math.min(hRatio, vRatio, 1);
      const scaledWidth = imageRef.current.naturalWidth * ratio;
      const scaledHeight = imageRef.current.naturalHeight * ratio;
      const offsetX = (currentCanvas.width - scaledWidth) / 2;
      const offsetY = (currentCanvas.height - scaledHeight) / 2;

      currentCtx.drawImage(imageRef.current, offsetX, offsetY, scaledWidth, scaledHeight);

      shimmerAnimationRef.current = (shimmerAnimationRef.current + 0.007) % 2;
      const gradientW = currentCanvas.width * 0.5;
      const gradientXVal = (shimmerAnimationRef.current * (currentCanvas.width + gradientW)) - gradientW;

      const shimmerGradient = currentCtx.createLinearGradient(gradientXVal, 0, gradientXVal + gradientW, 0);
      shimmerGradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
      shimmerGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.4)');
      shimmerGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      currentCtx.globalCompositeOperation = 'source-atop';
      currentCtx.fillStyle = shimmerGradient;
      currentCtx.fillRect(0, 0, currentCanvas.width, currentCanvas.height);
      currentCtx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(draw);
    };

    const startAnimation = () => {
      // Check if image is loaded and ready
      if (imageRef.current && imageRef.current.complete && imageRef.current.naturalWidth > 0) {
        draw();
      } else {
        // If not, img.onload should trigger this. This is a fallback.
        // console.warn('Image not ready when startAnimation called directly');
      }
    };

    img.onload = startAnimation;
    img.onerror = () => console.error("Failed to load brain image for canvas.");
    img.src = brainLogo;

    // Handle cases where the image might already be cached and 'onload' might not fire reliably
    if (img.complete && img.naturalWidth > 0) {
      startAnimation();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Empty dependency array: effect runs on mount and cleans up on unmount

  // The className allows App.css to style the canvas (e.g., drop-shadow, display size via container)
  return <canvas ref={canvasRef} className="brain-canvas"></canvas>; 
};

export default BrainCanvas;
