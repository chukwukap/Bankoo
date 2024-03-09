function BreakPointIndicator() {
  return (
    <div
      className=" bg-rose-500
      fixed left-0 bottom-0 p-2  rounded-full"
    >
      <div className="sm:hidden">sm</div>
      <div className="hidden sm:block md:hidden">md</div>
      <div className="hidden md:block lg:hidden ">lg</div>
      <div className="hidden lg:block xl:hidden">xl</div>
      <div className="hidden xl:block">xl up</div>
    </div>
  );
}

export default BreakPointIndicator;
