const SideStripes = () => {
  return (
    <>
      {/* Left */}
      <div
        className="hidden md:block absolute top-0 -left-8 h-full w-7
        border-x border-[#1f1f1f] bg-[#151515]
        bg-[repeating-linear-gradient(135deg,transparent_0_13px,#202020_12px_14px)]"
      />

      {/* Right */}
      <div
        className="hidden md:block absolute top-0 -right-8 h-full w-7
        border-x border-[#1f1f1f] bg-[#151515]
        bg-[repeating-linear-gradient(135deg,transparent_0_13px,#202020_12px_14px)]"
      />
    </>
  );
};

export default SideStripes;
