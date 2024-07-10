export default function LoadingScreen() {
    return(
        <div className="w-[calc(100vw-20px)] h-[calc(100vh-20px)] ml-[calc(-50vw+50%+10px)] mt-[calc(-100px)]">
            <div className="w-full h-full p-16 m-auto">
                <div className="w-full h-full flex justify-center items-center">
                    <img src="static/images/logoAccent.svg" alt="" />
                </div>
            </div>
        </div>
    )
}