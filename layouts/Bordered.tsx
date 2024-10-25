export default function Boredered({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col items-center justify-start gap-[18px] self-stretch">
            <div className="relative h-px self-stretch">
                <div className="absolute left-[0px] top-[0px] box-border h-[50px] w-[50px] border-l-[1px] border-t-[1px] border-solid border-primary lg:h-[100px] lg:w-[100px]" />
                <div className="absolute right-[0px] top-[0px] box-border h-[50px] w-[50px] border-r-[1px] border-t-[1px] border-solid border-primary lg:h-[100px] lg:w-[100px]" />
            </div>
            {children}
            <div className="relative h-px self-stretch">
                <div className="absolute bottom-[1px] left-[0px] box-border h-[50px] w-[50px] border-b-[1px] border-l-[1px] border-solid border-primary lg:h-[100px] lg:w-[100px]" />
                <div className="absolute bottom-[1px] right-[0px] box-border h-[50px] w-[50px] border-b-[1px] border-r-[1px] border-solid border-primary lg:h-[100px] lg:w-[100px]" />
            </div>
        </div>
    )
}
