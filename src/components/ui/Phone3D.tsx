import Spline from '@splinetool/react-spline/next';

export default function Phone3D() {
  return (
    <main className="relative w-full flex-1 min-h-[30rem] md:min-h-0 hover:cursor-pointer rounded-xl overflow-hidden border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent">
      {/* Absolutely positioned so the canvas fills the box instead of stretching it */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/bvW-rGMs2tMnuqxh/scene.splinecode"
        />
      </div>
    </main>
  );
}
