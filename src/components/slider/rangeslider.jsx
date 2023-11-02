import "./rangeslider.css";

function Rangeslider() {
    return (
        <div className="slider flex w-full">
            <input type="range" min="1" max="10" defaultValue={0} className="myrange w-full appearance-none h-[0.38rem]" id="MyRange" />
        </div>
    )
}

export default Rangeslider