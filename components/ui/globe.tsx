"use client"
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

// https://github.com/shuding/cobe

export default function Globe() {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 1.75,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0.18,
      dark: 1,
      offset: [-100, 100],
      scale: 0.95,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [48.3705, 10.8978], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      }
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="App bg-inherit mt-0 flex items-center justify-center">
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: "100%", }}
        className="w-full h-full max-w-full aspect-auto p-0 m-0"
      />
    </div>
  );
}
