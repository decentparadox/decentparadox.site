export default function Boredered ({ children }: { children: React.ReactNode }) {
  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[18px]">
      <div className="self-stretch relative h-px">
        <div className="absolute top-[0px] left-[0px] box-border w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] border-t-[1px] border-solid border-primary border-l-[1px]" />
        <div className="absolute top-[0px] right-[0px] box-border w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] border-t-[1px] border-solid border-primary border-r-[1px]" />
      </div>
      {children}
      <div className="self-stretch relative h-px">
        <div className="absolute bottom-[1px] left-[0px] box-border w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] border-b-[1px] border-solid border-primary border-l-[1px]" />
        <div className="absolute right-[0px] bottom-[1px] box-border w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] border-r-[1px] border-solid border-primary border-b-[1px]" />
      </div>
    </div>
  );
}
