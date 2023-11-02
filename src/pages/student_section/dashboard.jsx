import React from "react";
import "../student_section/dashboard.css";
import ProgressBar from "../../assets/images/ProgressBar.png";
import Avatar from "../../assets/images/Avatar.png";
import spiderweb from "../../assets/images/spiderweb.png";
import icon from "../../assets/images/icon.png";
import icon1 from "../../assets/images/icon1.png";
import icon3 from "../../assets/images/icon3.png";
import write from "../../assets/images/write.png";
import linegrp from "../../assets/images/linegrp.png";
import rightArrow from "../../assets/images/rightArrow.png";
import arrow_drop_up from "../../assets/images/arrow_drop_up.png";
import downArrow from "../../assets/images/downArrow.png";
import Suggested from "../../assets/images/Suggested.png";
import tick from "../../assets/images/tick.png";
import star from "../../assets/images/star.png";
import uiux from "../../assets/images/uiux.png";
import bookmark from "../../assets/images/bookmark.png";
import comment from "../../assets/images/comment.png";
import Ellipse from "../../assets/images/Ellipse.png";

const dashboard = () => {
  const ArrayList = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const taskSummary = [
    {
      id: 1,
      task: "Assigned",
      count: "40",
      img: icon,
      color: "#2563EB",
      txtcolor: "#FFFFFF",
    },
    {
      id: 2,
      task: "Assigned",
      count: "79",
      img: icon1,
      color: "#38BDF8",
      txtcolor: "#FFFFFF",
    },
    {
      id: 3,
      task: "Assigned",
      count: "89",
      img: icon3,
      color: "#F0F5FA",
      txtcolor: "#000",
    },
  ];
  const buttonArray = [
    {
      id: 1,
      task: "Ui Designer",
    },
    {
      id: 2,
      task: "Figma ",
    },
    {
      id: 3,
      task: "Landing Page",
    },
  ];

  const numberArray = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];

  const silderArray = [
    {
      id: 1,
      name: "Designing",
      count: "648 of 751",
      color: "#FF715B",
      width: "60%",
    },
    {
      id: 2,
      name: "Backend",
      count: "215 of 651",
      color: "#34D1BF",
      width: "20%",
    },
    {
      id: 3,
      name: "Data analytics",
      count: "84 of 120",
      color: "#0496FF",
      width: "80%",
    },
    {
      id: 4,
      name: "Drawing",
      count: "804 of 846",
      color: "#6665DD",
      width: "90%",
    },
    {
      id: 5,
      name: "Social science",
      count: "458 of 901",
      color: "#DE0D92",
      width: "50%",
    },
    {
      id: 6,
      name: "Green",
      count: "215 of 651",
      color: "#04E762",
      width: "20%",
    },
  ];
  return (
    <>
      <div className="w-full flex flex-row">
        <div className="w-3/4 mr-4">
          <div className=" bg-neutral-900 rounded-xl p-5">
            <div className="flex flex-row justify-between w-full items-stretch ">
              <h2 className="text-base text-slate-100 font-bold">
                Recent work
              </h2>
              <h1 className="text-sm text-slate-600">•••</h1>
            </div>
            <div className="bg-zinc-800 h-0.5  my-4"></div>

            <div className="flex justify-between ">
              {ArrayList.map(() => {
                return (
                  <div
                    style={{
                      padding: "10px",
                      backgroundColor: "#2C2C2C",
                      borderRadius: "12px",
                      width: "30%",
                    }}
                  >
                    <h1 className="text-base text-slate-100 font-bold">
                      Ui Design
                    </h1>
                    <div className="flex flex-row justify-between w-full items-stretch  mt-3">
                      <p className="text-xs text-slate-500 font-normal">
                        Progress
                      </p>
                      <p className="text-xs text-slate-100 font-semibold ">
                        55%
                      </p>
                    </div>

                    <div className="bg-zinc-600  rounded-xl h-2 my-6 flex flex-row items-center ">
                      <div className="bg-blue-700 w-3/5 rounded-xl h-2 my-6"></div>
                      <img
                        className="h-5 w-5 object-contain"
                        alt=""
                        src={ProgressBar}
                      />
                    </div>

                    <p className="text-xs text-slate-100 font-semibold ">
                      AI Prediction
                    </p>
                    <p className="text-xs text-slate-500 font-normal">
                      AI To be completed by 12oct 2023
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex mt-4 h-72">
            <div className="bg-neutral-900 rounded-xl p-5 w-1/2 mr-4 "></div>
            <div className="bg-neutral-900 rounded-xl p-5 w-1/2">
              <div className="flex flex-row justify-between w-full items-stretch ">
                <h2 className="text-base text-slate-100 font-bold">
                  Task Summary
                </h2>
                <h1 className="text-xs text-slate-600">•••</h1>
              </div>
              <div className="flex justify-between mt-4">
                {taskSummary.map((item, index) => {
                  return (
                    <div
                      style={{ background: item?.color }}
                      className="py-5 rounded-lg w-24 flex justify-center items-center flex-col"
                    >
                      <img
                        className="h-10 w-10 object-contain"
                        alt=""
                        src={item?.img}
                      />
                      <p
                        style={{
                          color: item?.txtcolor,
                          opacity: index == 2 ? 0.5 : 1,
                          fontSize: "12px",
                          marginTop: "6px",
                        }}
                      >
                        Courses
                      </p>
                      <p
                        style={{
                          color: item?.txtcolor,
                          opacity: index == 2 ? 0.5 : 1,
                          fontSize: "12px",
                        }}
                      >
                        {item?.task}
                      </p>
                      <p
                        style={{
                          color: item?.txtcolor,
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        {item?.count}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p
                    style={{
                      color: "rgba(255, 255, 255, 0.6)",
                      fontSize: "12px",
                    }}
                  >
                    On-time Completion Rate
                  </p>
                  <div className="flex  items-baseline">
                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.6)",
                        fontSize: "24px",
                        fontWeight: "bold",
                        marginRight: "10px",
                      }}
                    >
                      95%
                    </p>
                    <p
                      style={{
                        color: "#24D164",
                        fontSize: "12px",
                      }}
                    >
                      +2,5%
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    style={{
                      height: "30px",
                      width: "100px",
                      objectFit: "contain",
                    }}
                    alt=""
                    src={linegrp}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex mt-4 py-8 px-8 bg-blue-700  rounded-lg">
            <img
              style={{
                height: "120px",
                width: "140px",
                objectFit: "contain",
                marginRight: "10px",
              }}
              alt=""
              src={write}
            />
            <div>
              <p
                style={{
                  color: "rgba(255, 255, 255, 1)",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                Create new goal with AI{" "}
              </p>
              <p
                style={{
                  color: "rgba(255, 255, 255, 1)",
                  fontSize: "14px",
                }}
              >
                Every large design company whether it’s a multi-national
                branding corporation or a regular down at heel tatty magazine
                publisher.{" "}
              </p>
              <button className="w-52 h-10 bg-white rounded-md mt-4 flex justify-center items-center">
                <p
                  style={{
                    color: "#2664EB",
                    fontSize: "14px",
                    fontWeight: "bold",
                    marginRight: "10px",
                  }}
                >
                  Generate goal
                </p>
                <img
                  style={{
                    height: "12px",
                    width: "18px",
                    objectFit: "contain",
                  }}
                  alt=""
                  src={rightArrow}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Right top div   */}

        <div className="w-1/4 bg-neutral-900 rounded-2xl flex  items-center flex-col ">
          <div className="w-28 h-28 bg-zinc-800 rounded-full mt-8">
            <img className="h-25 w-25 object-contain" alt="" src={Avatar} />
          </div>
          <h1 className="text-2xl text-slate-100 font-bold mt-2">
            Charles Robbie
          </h1>
          <p className="text-sm text-slate-500 font-normal">New York, USA</p>
          <div className="w-52 h-10 bg-zinc-800 rounded-md mt-8 flex justify-center items-center">
            <h1 className="text-sm text-slate-100">View Profile</h1>
          </div>

          <h1 className="text-2xl text-slate-100 mt-10 font-bold">
            AI swot Analysis
          </h1>
          <div className="mt-8">
            <img className="h-25 w-25 object-contain" alt="" src={spiderweb} />
          </div>
          <div className=" mt-4 flex justify-center items-center">
            <h1 className="text-l text-blue-500 font-bold mr-2">
              View full SWOT analysis
            </h1>
            <img
              style={{
                height: "12px",
                width: "18px",
                objectFit: "contain",
              }}
              alt=""
              src={rightArrow}
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row mt-4">
        <div className="w-3/4 mr-4">
          <div className=" bg-neutral-900 rounded-xl p-5 h-80">
            <div className="flex flex-row justify-between w-full items-stretch ">
              <h2 className="text-xl text-slate-100 font-bold">All</h2>
              <div className="flex items-center">
                <h1 className="text-sm text-teal-500">Designing</h1>
                <img
                  className="m-[auto] h-5 w-5 rounded-full"
                  src={arrow_drop_up}
                  alt=""
                ></img>
              </div>
            </div>

            <div className="flex flex-row justify-between w-full items-stretch mt-4 ">
              <h2 className="text-xs text-slate-100 font-normal ">
                Overall Score
              </h2>

              <h1 className="text-xs text-blue-700">2005/2,100</h1>
            </div>
            <div className="bg-black  rounded-xl h-2 my-1 flex flex-row items-center ">
              <div
                style={{
                  height: "100%",
                  width: "90%",
                  backgroundColor: "#4339F2",
                  borderRadius: "20px",
                }}
              ></div>
            </div>
            <div className=" flex flex-row justify-between ">
              <div style={{ width: "45%" }}>
                <div className="flex flex-row justify-between w-full items-stretch mt-4">
                  <h2 className="text-xs text-slate-100 font-normal ">
                    Designing
                  </h2>

                  <h1 className="text-xs text-blue-700">321/350</h1>
                </div>
                <div className="bg-black  rounded-xl h-2 my-1 flex flex-row items-center">
                  <div
                    style={{
                      height: "100%",
                      width: "90%",
                      backgroundColor: "#FFB200",
                      borderRadius: "20px",
                    }}
                  ></div>
                </div>

                <div className="flex flex-row justify-between w-full items-stretch mt-4">
                  <h2 className="text-xs text-slate-100 font-normal ">
                    Illustrations making
                  </h2>

                  <h1 className="text-xs text-blue-700">321/350</h1>
                </div>
                <div className="bg-black  rounded-xl h-2 my-1 flex flex-row items-center ">
                  <div
                    style={{
                      height: "100%",
                      width: "90%",
                      backgroundColor: "#4339F2",
                      borderRadius: "20px",
                    }}
                  ></div>
                </div>

                <div className="flex flex-row justify-between w-full items-stretch mt-4">
                  <h2 className="text-xs text-slate-100 font-normal ">
                    Business associate
                  </h2>

                  <h1 className="text-xs text-blue-700">321/350</h1>
                </div>
                <div className="bg-black  rounded-xl h-2 my-1 flex flex-row items-center ">
                  <div
                    style={{
                      height: "100%",
                      width: "90%",
                      backgroundColor: "#4339F2",
                      borderRadius: "20px",
                    }}
                  ></div>
                </div>
              </div>

              <div style={{ width: "45%" }}>
                <div className="flex flex-row justify-between w-full items-stretch mt-4">
                  <h2 className="text-xs text-slate-100 font-normal ">
                    Backend
                  </h2>

                  <h1 className="text-xs text-blue-700">395/470</h1>
                </div>
                <div className="bg-black  rounded-xl h-2 my-1 flex flex-row items-center">
                  <div
                    style={{
                      height: "100%",
                      width: "90%",
                      backgroundColor: "#25FC02",
                      borderRadius: "20px",
                    }}
                  ></div>
                </div>

                <div className="flex flex-row justify-between w-full items-stretch mt-6">
                  <h2 className="text-xs text-slate-100 font-normal ">
                    Data analytics
                  </h2>

                  <h1 className="text-xs text-blue-700">395/470</h1>
                </div>
                <div className="bg-black  rounded-xl h-2 my-1 flex flex-row items-center ">
                  <div
                    style={{
                      height: "100%",
                      width: "90%",
                      backgroundColor: "#4339F2",
                      borderRadius: "20px",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div className=" flex flex-row items-center mt-8">
              <div
                style={{
                  height: "13px",
                  width: "13px",
                  borderRadius: "50px",
                  backgroundColor: "#FFB200",
                  marginRight: "6px",
                }}
              />
              <h2 className="text-xs text-slate-100 font-normal ">
                Weaknesses
              </h2>
              <div
                style={{
                  height: "13px",
                  width: "13px",
                  borderRadius: "50px",
                  backgroundColor: "#4339F2",
                  marginRight: "6px",
                  marginLeft: "12px",
                }}
              />
              <h2 className="text-xs text-slate-100 font-normal ">Strengths</h2>
              <div
                style={{
                  height: "13px",
                  width: "13px",
                  borderRadius: "50px",
                  backgroundColor: "#25FC02",
                  marginRight: "6px",
                  marginLeft: "12px",
                }}
              />
              <h2 className="text-xs text-slate-100 font-normal ">Average</h2>
            </div>
          </div>

          <div className="flex mt-4 h-72">
            <div className="bg-neutral-900 rounded-xl p-5 w-1/2 mr-4 "></div>
            <div className="bg-neutral-900 rounded-xl p-5 w-1/2"></div>
          </div>
        </div>

        <div className="w-1/4 bg-neutral-900 rounded-2xl p-4">
          <div className="flex flex-row justify-between w-full items-stretch ">
            <h2 className="text-base text-slate-100 font-bold">
              Suggested jobs
            </h2>
            <div
              className="flex items-center border	rounded-lg p-1 border-slate-700

"
            >
              <p className="text-xs text-slate-400">This Week</p>
              <img
                className="m-[auto] h-5 w-5 rounded-full"
                src={downArrow}
                alt=""
              ></img>
            </div>
          </div>
          {buttonArray.map((item, index) => {
            return (
              <>
                <div className="flex justify-between mt-4 ">
                  <img className=" h-14 w-14" src={Suggested} alt=""></img>
                  <div style={{ width: "75%" }}>
                    <div
                      style={{
                        backgroundColor: "#1DB75A",
                        borderRadius: "20px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        width: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <p style={{ fontSize: "12px", color: "black" }}>
                        95% Match
                      </p>
                    </div>
                    <h2 className="text-base text-slate-100 font-bold">
                      Figma Designer
                    </h2>
                    <p className="text-xs text-slate-500">
                      We are looking for figma designers who can help designing
                      ...
                    </p>
                    {buttonArray.map((item) => {
                      return (
                        <button
                          style={{
                            paddingTop: "4px",
                            paddingBottom: "4px",
                            paddingRight: "8px",
                            paddingLeft: "8px",
                            backgroundColor: "#2C2C2C",
                            borderRadius: "6px",
                            fontSize: "10px",
                            color: "white",
                            marginRight: "4px",
                          }}
                        >
                          {item?.task}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex items-center mt-4">
                  <div className="flex items-center ">
                    <img className=" h-3 w-3" src={star} alt=""></img>
                    <img className=" h-3 w-3" src={star} alt=""></img>
                    <img className=" h-3 w-3" src={star} alt=""></img>
                    <img className=" h-3 w-3" src={star} alt=""></img>
                    <img className=" h-3 w-3" src={star} alt=""></img>
                  </div>
                  <div className="flex items-center mx-5 ">
                    <img className=" h-4 w-4" src={tick} alt=""></img>
                    <p
                      style={{
                        fontSize: "9px",
                        color: "rgba(131, 131, 131, 1)",
                        marginLeft: "4px",
                      }}
                    >
                      Project Verified
                    </p>
                  </div>

                  <div className="flex items-center ">
                    <p
                      style={{
                        fontSize: "10px",
                        color: "white",
                        marginLeft: "4px",
                      }}
                    >
                      Proposals:
                    </p>
                    <p
                      style={{
                        fontSize: "9px",
                        color: "rgba(131, 131, 131, 1)",
                        marginLeft: "4px",
                      }}
                    >
                      10 to 15
                    </p>
                  </div>
                </div>

                {buttonArray.length - 1 == index ? (
                  <div />
                ) : (
                  <div
                    style={{
                      height: "1px",
                      backgroundColor: "rgba(255, 255, 255, 0.12)",
                      marginTop: "14px",
                      marginBottom: "14px",
                    }}
                  />
                )}
              </>
            );
          })}
          <div className="flex justify-between items-center mt-10 ">
            <h1 className="text-l text-white font-bold mr-2"></h1>
            <div className=" flex  items-center">
              <h1 className="text-l text-blue-500 font-bold mr-2">View all</h1>
              <img
                style={{
                  height: "12px",
                  width: "18px",
                  objectFit: "contain",
                }}
                alt=""
                src={rightArrow}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row mt-4 bg-neutral-900 rounded-2xl  p-4">
        <div style={{ width: "68%" }}>
          <h2 className="text-xl text-slate-100 font-bold">
            Suggested courses for improving your weaknesses
          </h2>
          {numberArray.map((item, index) => {
            return (
              <>
                <div className="flex justify-between mt-4 ">
                  <img
                    style={{ height: "140px", width: "190px" }}
                    src={uiux}
                    alt=""
                  ></img>
                  <div style={{ width: "75%" }}>
                    <div className="flex items-center justify-between">
                      <h2 className="text-base text-slate-100 font-bold">
                        Ui/Ux Design course
                      </h2>
                      <div
                        style={{
                          backgroundColor: "#1DB75A",
                          borderRadius: "20px",
                          paddingTop: "2px",
                          paddingBottom: "2px",
                          width: "15%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <p style={{ fontSize: "12px", color: "black" }}>
                          95% Match
                        </p>
                      </div>
                      <img className=" h-4 w-4" src={bookmark} alt=""></img>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      We are looking for figma designers who can help designing
                      ...
                    </p>

                    <div className="flex items-center mt-2">
                      <img className=" h-4 w-4" src={comment} alt=""></img>
                      <p className="text-xs text-slate-300">
                        5hrs/day to complete it in 15 days
                      </p>
                    </div>
                    <div className="flex items-center mt-2 mb-2">
                      <div className="flex items-center mr-2">
                        <img className=" h-4 w-4 mr-2" src={Ellipse} alt=""></img>
                        <p className="text-xs text-slate-300">5,667 Users</p>
                      </div>
                      <div className="flex items-center ">
                        <img className=" h-4 w-4 mr-2" src={comment} alt=""></img>
                        <p className="text-xs text-slate-300">12 comments </p>
                      </div>
                    </div>
                    {buttonArray.map((item) => {
                      return (
                        <button
                          style={{
                            paddingTop: "4px",
                            paddingBottom: "4px",
                            paddingRight: "8px",
                            paddingLeft: "8px",
                            backgroundColor: "#2C2C2C",
                            borderRadius: "6px",
                            fontSize: "14px",
                            color: "white",
                            marginRight: "8px",
                          }}
                        >
                          {item?.task}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {numberArray.length - 1 == index ? (
                  <div />
                ) : (
                  <div
                    style={{
                      height: "1px",
                      backgroundColor: "rgba(255, 255, 255, 0.12)",
                      marginTop: "14px",
                      marginBottom: "14px",
                    }}
                  />
                )}
              </>
            );
          })}

          <div className="flex justify-between items-center mt-10">
            <h1 className="text-l text-white font-bold mr-2">Refresh</h1>
            <div className=" flex  items-center self-end">
              <h1 className="text-l text-blue-500 font-bold mr-2">View all</h1>
              <img
                style={{
                  height: "12px",
                  width: "18px",
                  objectFit: "contain",
                }}
                alt=""
                src={rightArrow}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            height: "100%",
            width: "1px",
            backgroundColor: "rgba(255, 255, 255, 0.12)",
            marginRight: "20px",
            marginLeft: "20px",
          }}
        />

        <div
          style={{
            width: "28%",
          }}
        >
          <h2 className="text-xl text-slate-100 font-bold">Course category</h2>
          {silderArray.map((e) => {
            return (
              <>
                <div className="flex flex-row justify-between w-full items-stretch mt-4 ">
                  <h2 className="text-xs text-gray-400  font-normal ">
                    {e.count}
                  </h2>

                  <h1 className="text-xs text-slate-100">{e.name}</h1>
                </div>
                <div className="bg-black  rounded-xl h-2 my-2 flex flex-row items-center ">
                  <div
                    style={{
                      height: "100%",
                      width: e.width,
                      backgroundColor: e.color,
                      borderRadius: "20px",
                    }}
                  ></div>
                </div>
              </>
            );
          })}
          <div className="flex justify-between items-center mt-20 ">
            <h1 className="text-l text-white font-bold mr-2"></h1>
            <div className=" flex  items-center">
              <h1 className="text-l text-blue-500 font-bold mr-2">View all</h1>
              <img
                style={{
                  height: "12px",
                  width: "18px",
                  objectFit: "contain",
                }}
                alt=""
                src={rightArrow}
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "100px" }} />
    </>
  );
};

export default dashboard;
