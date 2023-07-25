"use client"
import placeholder from '@/public/placeholder.png'; // Placeholder image path
import React, { useState, useEffect, useRef } from 'react';

const FrameAnimation = () => {
  const canvasRef = useRef(null);
  const totalFrames = 26;
  const frameWidth = 498;
  const frameHeight = 403;
  const animationDuration = 100; // 3 seconds for one loop

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let currentFrame = 0;
    let startTime = null;

    // Tải tấm hình "btn-download.png"
    const image = new Image();
    image.src = 'https://chamthoi.com/images/yulgang/public/btn-download.png';
    image.onload = () => setIsLoading(false);

    // Vẽ tấm hình placeholder lên canvas
    const placeholderImage = new Image();
    placeholderImage.src = placeholder.src;
    placeholderImage.onload = () => ctx.drawImage(placeholderImage, 0, 0, frameWidth, frameHeight);

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (!isLoading && progress >= animationDuration) {
        // Reset startTime when animation loop completes
        startTime = timestamp - (progress % animationDuration);
        const yPos = currentFrame * frameHeight;

        // Xóa khung hình trước nếu không dùng placeholder
        ctx.clearRect(0, 0, frameWidth, frameHeight);

        // Vẽ tấm hình "btn-download.png" lên canvas
        ctx.drawImage(image, 0, yPos, frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);

        currentFrame = (currentFrame + 1) % totalFrames;
      }

      requestAnimationFrame(animate);
    };

    const animationInterval = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationInterval);
    };
  }, [isLoading]);

  return (
    <canvas
      ref={canvasRef}
      width={frameWidth}
      height={frameHeight}
      className="w-full h-full"
    />
  );
};

export default FrameAnimation;