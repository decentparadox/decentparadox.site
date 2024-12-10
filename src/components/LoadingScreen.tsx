import Image from 'next/image'
export default function LoadingScreen() {
    return (
        <div className="ml-[calc(-50vw+50%+10px)] h-[calc(100vh-20px)] w-[calc(100vw-20px)]">
            <div className="m-auto h-full w-full p-16">
                <div className="flex h-full w-full items-center justify-center">
                    <Image src="static/images/logoAccent.svg" alt="" width={0}
                        height={0}
                        style={{ width: 'auto', height: '64px' }} />
                </div>
            </div>
        </div>
    )
}
