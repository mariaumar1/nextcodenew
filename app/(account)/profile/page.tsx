import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const profile = () => {
  const jobsbodding = [
    {
      title: "Food Dekivery Mobile App",
      location: "San Francisco",
      price: "$1,000 - $2,500",
      pricetype: "Fixed",
      time: "2 Day Ago",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisici elit Provident explicabo quod odit quas non distinctio",
    },
    {
      title: "Food Dekivery Mobile App",
      location: "San Francisco",
      price: "$1,000 - $2,500",
      pricetype: "Fixed",

      time: "2 Day Ago",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisici elit Provident explicabo quod odit quas non distinctio",
    },
    {
      title: "Food Dekivery Mobile App",
      location: "San Francisco",
      price: "$1,000 - $2,500",
      pricetype: "Fixed",

      time: "2 Day Ago",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisici elit Provident explicabo quod odit quas non distinctio",
    },
    {
      title: "Food Dekivery Mobile App",
      location: "San Francisco",
      price: "$1,000 - $2,500",
      pricetype: "Fixed",
      time: "2 Day Ago",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisici elit Provident explicabo quod odit quas non distinctio",
    },
  ];
  return (
    <>
      <main>
        <div className="container container_wrap">
          <div className="row_box">
            <div className="flex">
              <div className="w-3/12">
                <div className="left__side">
                  <div className="left__side__box">
                    <h4>Location</h4>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                      <input
                        type="search"
                        id="search"
                        className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Location"
                        required
                      ></input>
                      <button
                        type="submit"
                        className="icons_btns text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        <FontAwesomeIcon icon={faLocationDot} />
                      </button>
                    </div>
                  </div>

                  <div className="left__side__box">
                    <h4>Category</h4>
                    <select
                      id="countries"
                      className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>All Categories</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>

                  <div className="left__side__box">
                    <h4>Keywords</h4>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                      <input
                        type="search"
                        id="search"
                        className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="e.g task title"
                        required
                      ></input>
                      <button
                        type="submit"
                        className="icons_btns text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="left__side__box">
                    <h4>Fixed Price</h4>
                    <div>
                      <input
                        type="range"
                        className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
                        id="customRange1"
                      />
                    </div>
                  </div>

                  <div className="left__side__box">
                    <h4>Skills</h4>
                    <div className="skills_box">
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        Front-End Dev
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        Angular
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        vue.js
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        Web Apps
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        Design
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        Wordpress
                      </span>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                      <input
                        type="search"
                        id="search"
                        className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search"
                        required
                      ></input>
                      <button
                        type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-9/12">
                <div className="right__side">
                  <h4>Search Reults</h4>
                  <div className="grey_box">
                    <div className="flex items-center">
                      <div className="w-10/12">
                        <p>
                          <label className="relative inline-flex items-center  cursor-pointer">
                            <input
                              type="checkbox"
                              value=""
                              className="sr-only peer"
                            ></input>
                            <div className="w-11 h-6 bg-gray-200 rounded-fulls peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                              Turn on email alerts for this search
                            </span>
                          </label>
                        </p>
                      </div>
                      <div className="w-2/12">
                        <p className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                          Sort By: Relevence
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="jobsbodding">
                    {jobsbodding.map(
                      (
                        {
                          title,
                          location,
                          price,
                          pricetype,
                          time,
                          description,
                        },
                        index
                      ) => (
                        <div key={index} className="row_box">
                          <div className="right__side__box">
                            <div className="flex items-center">
                              <div className="w-10/12">
                                <div className="box_left">
                                  <h6 className="box_title">{title}</h6>
                                  <p className="box_location_time">
                                    <span>
                                      <FontAwesomeIcon icon={faLocationDot} />
                                      {location}
                                    </span>
                                    <span>
                                      {" "}
                                      <FontAwesomeIcon icon={faClock} />
                                      {time}
                                    </span>
                                  </p>
                                  <p className="box_description">
                                    {description}
                                  </p>
                                  <p className="box_skills">
                                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                                      iOS
                                    </span>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                                      Android
                                    </span>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                                      Mobile Apps
                                    </span>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                                      Design
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="w-2/12">
                                <div className="box_right">
                                  <p>{price}</p>
                                  <p className="pricetype">{pricetype} Price</p>
                                  <button
                                    type="button"
                                    className="btn-block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                  >
                                    Bid Now
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                    {/* ======right__side__box================== */}
                  </div>

                  {/*============================ */}

                  <nav
                    className="page_navigation"
                    aria-label="Page navigation example"
                  >
                    <ul className="inline-flex items-center -space-x-px">
                      <li>
                        <a
                          href="#"
                          className="arrows block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          <span className="sr-only">Previous</span>
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          aria-current="page"
                          className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                        >
                          3
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          4
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          5
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="arrows block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          <span className="sr-only">Next</span>
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </nav>

                  {/* ======================== */}
                </div>
              </div>
            </div>
          </div>

          {/* =============================== */}
        </div>
      </main>
    </>
  );
};

export default profile;
