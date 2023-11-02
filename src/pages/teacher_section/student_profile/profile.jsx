import { ReactComponent as Chat } from "../../../assets/icons/fluent_chat-16-filled.svg";
import lightning from "../../../assets/icons/lightning_icon.png";
import Meter from "../../../assets/icons/Meter_icon.png";
import Statistics from "../../../assets/icons/statistics_icon.png";
import CalenderHeatmap from "../../../components/heatmaps/calenderHeatmap.jsx";

export default function Profile({ children }) {
    return (
        <>
            <div className="courses-section bg-[#131313] rounded-2xl px-5 py-6 pt-5">
                <div className="flex w-full justify-between font-semibold text-2xl">
                    <div className="heading">Student Profile</div>
                </div>
                <div className="flex gap-6 mt-8">
                    <div className="profilepic">
                        <img src="https://i.pravatar.cc?img=68" alt="student_picture" className="block rounded-full w-36 border-2 border-white p-1" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <div>
                            <div className="font-semibold text-2xl leading-[1.875rem]">Raj Anadkat</div>
                            <div className="mt-1">
                                <div className="font-medium text-base leading-5">{"Student ID : TIPSG5682"}</div>
                                <div className="font-medium text-base leading-5">{"Student ID : TIPSG5682"}</div>
                            </div>
                        </div>
                        <div>
                            <button type="button" className="flex bg-[#2C2C2C] rounded-xl p-3 px-4 font-normal border border-white text-sm leading-5 justify-center items-center" >
                                <Chat className="inline-block mr-2" />
                                Chat With Student
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-auto h-fit ml-6 self-end justify-between gap-8">
                        <div className="flex w-1/3 bg-[#454545] items-center p-4 rounded-2xl gap-4">
                            <img src={lightning} alt="" className="flex justify-center items-center h-8 w-auto aspect-square" />
                            <div className="font-semibold">
                                <div className="text-xl">56</div>
                                <div className="text-sm opacity-60">Quizzes</div>
                            </div>
                        </div>
                        <div className="flex w-1/3 bg-[#454545] items-center p-4 rounded-2xl gap-4">
                            <img src={Meter} alt="" className="flex justify-center items-center h-8 w-auto aspect-square" />
                            <div className="font-semibold">
                                <div className="text-xl">86%</div>
                                <div className="text-sm opacity-60">Attendence</div>
                            </div>
                        </div>
                        <div className="flex w-1/3 bg-[#454545] items-center p-4 rounded-2xl gap-4">
                            <img src={Statistics} alt="" className="flex justify-center items-center h-8 w-auto aspect-square" />
                            <div className="font-semibold">
                                <div className="text-xl">99.65</div>
                                <div className="text-sm opacity-60">Percentile</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="studygraph bg-[#2C2C2C] mt-8 h-auto rounded-2xl p-4">
                    <div className="font-poppins font-bold text-base leading-5">Study Graph</div>
                    <div className="flex heatmap w-full mt-4">
                        <CalenderHeatmap />
                    </div>
                </div>
                <div className="tabs mt-4">
                    <ul className="flex outline-2 outline-blue-500 text-[#A1A1A1]">
                        <li className="font-semibold text-xl leading-6 p-5 px-10 text-blue-500 border-b-2 border-blue-400 hover:border-b-2 hover:border-gray-400">All</li>
                        <li className="font-semibold text-xl leading-6 p-5 px-10 hover:border-b-2 hover:border-gray-400">Quiz</li>
                        <li className="font-semibold text-xl leading-6 p-5 px-10 hover:border-b-2 hover:border-gray-400">Exams</li>
                        <li className="font-semibold text-xl leading-6 p-5 px-10 hover:border-b-2 hover:border-gray-400">Assignment</li>
                        <li className="font-semibold text-xl leading-6 p-5 px-10 hover:border-b-2 hover:border-gray-400">Classes</li>
                    </ul>
                </div>
                <hr className="opacity-10 -translate-y-0 scale-x-[]" />
                <div className="mt-5">
                    {children}
                </div>
            </div>
        </>
    )
}

