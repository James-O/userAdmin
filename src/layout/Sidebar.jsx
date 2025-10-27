import { ChevronDown, ChevronUp, LayoutGrid, NotebookText } from "lucide-react";
import { BsBarChart, BsBoxArrowInDownRight, BsCardList, BsDashCircle, BsEnvelope, BsFileEarmark, BsGem, BsJournalText,
  BsLayoutTextWindow, BsMenuButtonWide, BsPerson, BsQuestionCircle } from "react-icons/bs";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => setOpenMenu(openMenu === menu ? null : menu);

  return (
    <div className="bg-white text-blue-900 flex p-6 w-full h-screen">
      <div className="max-h-130">
        <div
          className={`{transition-all duration-300 overflow-y-auto ease-in-out 
         bg-white}`}
        >
          <ul className="space-y-2">
            <Link
              to="/"
              className={`flex gap-2 flex-row items-center hover:bg-gray-100 p-2 rounded ${
                location.pathname === "/"
                  ? "bg-gray-100 text-blue-600 font-semibold"
                  : "text-blue-900"
              }`}
            >
              <LayoutGrid size={18} />
              <span className="font-semibold ">Dashboard</span>
            </Link>


         
            <li>
              <button
                onClick={() => toggleMenu("Components")}
                 className={`flex gap-2 flex-row items-center hover:bg-gray-100 p-2 rounded font-semibold justify-between space-x-22 w-full ${
                location.pathname ===  "/alert"
                  ? "bg-gray-100 text-blue-600 font-semibold"
                  : "text-blue-900"
              }`}
              >
                <span className="flex flex-row gap-2 items-center">
                  <BsMenuButtonWide size={18} />
                  <span className="font-semibold ">Components</span>
                </span>

                {openMenu === "Components" ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openMenu === "Components" && (
                <ul className="ml-4 mt-1 space-y-1">
                  <Link
                    to="/alert"
                    className={`hover:bg-gray-200 p-2 rounded flex items-center text-left font-semibold  hover:text-blue-600 ${
                      location.pathname === "/alert"
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full border mr-2 ${
                        location.pathname === "/alert"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-500"
                      }`}
                    ></span>
                    Alert
                  </Link>

                  <Link
                    to="/accordion"
                    className={`hover:bg-gray-200 p-2 rounded flex items-center text-left font-semibold  hover:text-blue-600 ${
                      location.pathname === "/accordion"
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full border mr-2 ${
                        location.pathname === "/accordion"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-500"
                      }`}
                    ></span>
                    Accordion
                  </Link>

                  <Link
                    to="/bages"
                    className={`hover:bg-gray-200 p-2 rounded flex items-center text-left font-semibold  hover:text-blue-600 ${
                      location.pathname === "/bages"
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full border mr-2 ${
                        location.pathname === "/bages"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-500"
                      }`}
                    ></span>
                    Bages
                  </Link>

                  <Link
                    to="/breadcrumbs"
                    className={`hover:bg-gray-200 p-2 rounded flex items-center text-left font-semibold  hover:text-blue-600 ${
                      location.pathname === "/breadcrumbs"
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full border mr-2 ${
                        location.pathname === "/breadcrumbs"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-500"
                      }`}
                    ></span>
                    Breadcrumbs
                  </Link>

                  <Link
                    to="/buttons"
                    className={`hover:bg-gray-200 p-2 rounded flex items-center text-left font-semibold  hover:text-blue-600 ${
                      location.pathname === "/buttons"
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full border mr-2 ${
                        location.pathname === "/buttons"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-500"
                      }`}
                    ></span>
                    Buttons
                  </Link>

                  <Link
                    to="/cards"
                    className={`hover:bg-gray-200 p-2 rounded flex items-center text-left font-semibold  hover:text-blue-600 ${
                      location.pathname === "/cards"
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full border mr-2 ${
                        location.pathname === "/cards"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-500"
                      }`}
                    ></span>
                    Cards
                  </Link>

                  <Link
                    to="/carousel"
                    className={`hover:bg-gray-200 p-2 rounded flex items-center font-semibold  text-left hover:text-blue-600 ${
                      location.pathname === "/carousel"
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full border mr-2 ${
                        location.pathname === "/carousel"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-500"
                      }`}
                    ></span>
                    Carousel
                  </Link>

                  <Link
                    to="/listgroups"
                    className={`hover:bg-gray-200 p-2 rounded flex items-center text-left font-semibold  hover:text-blue-600 ${
                      location.pathname === "/listgroups"
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full border mr-2 ${
                        location.pathname === "/listgroups"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-500"
                      }`}
                    ></span>
                    List group
                  </Link>

                  <Link
                    to="/modals"
                    className={`hover:bg-gray-200 p-2 rounded flex items-center text-left font-semibold  hover:text-blue-600 ${
                      location.pathname === "/modals"
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full border mr-2 ${
                        location.pathname === "/modals"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-500"
                      }`}
                    ></span>
                    Modal
                  </Link>

                  <Link
                    to="/tabs"
                    className={`hover:bg-gray-200 p-2 rounded flex items-center text-left font-semibold  hover:text-blue-600 ${
                      location.pathname === "/tabs"
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full border mr-2 ${
                        location.pathname === "/tabs"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-500"
                      }`}
                    ></span>
                    Tabs
                  </Link>

                  <Link
                    to="/paginations"
                    className={`hover:bg-gray-200 p-2 rounded flex items-center text-left font-semibold  hover:text-blue-600 ${
                      location.pathname === "/paginations"
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full border mr-2 ${
                        location.pathname === "/paginations"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-500"
                      }`}
                    ></span>
                    Pagination
                  </Link>

                  <Link
                    to="/progress"
                    className={`hover:bg-gray-200 p-2 rounded flex items-center font-semibold  text-left hover:text-blue-600 ${
                      location.pathname === "/progress"
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full border mr-2 ${
                        location.pathname === "/progress"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-500"
                      }`}
                    ></span>
                    Progress
                  </Link>

                  <Link
                    to="/spinners"
                    className={`hover:bg-gray-200 p-2 rounded flex items-center text-left font-semibold  hover:text-blue-600 ${
                      location.pathname === "/spinners"
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full border mr-2 ${
                        location.pathname === "/spinners"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-500"
                      }`}
                    ></span>
                    Spinners
                  </Link>

                  <Link
                    to="/tooltips"
                    className={`hover:bg-gray-200 p-2 rounded flex items-center text-left font-semibold  hover:text-blue-600 ${
                      location.pathname === "/tooltips"
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full border mr-2 ${
                        location.pathname === "/tooltips"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-500"
                      }`}
                    ></span>
                    Tooltips
                  </Link>
                </ul>
              )}
            </li>

            <li>
              <button
                onClick={() => toggleMenu("Forms")}
                 className={`flex gap-2 flex-row items-center hover:bg-gray-100 p-2 rounded font-semibold justify-between   w-full ${
                location.pathname ===  "/formelements"
                  ? "bg-gray-100 text-blue-600 font-semibold"
                  : "text-blue-900"
              }`}
              >
                <span className="flex flex-row gap-2 items-center">
                  <BsJournalText size={18} />{" "}
                  <span className="font-semibold ">Forms</span>
                </span>
                {openMenu === "Forms" ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openMenu === "Forms" && (
                <ul className="ml-4 mt-1 space-y-1">
                  <Link
                    to="/formelements"
                    className={`hover:bg-gray-200 p-2 rounded flex items-center font-semibold  text-left hover:text-blue-600 ${
                      location.pathname === "/formelements"
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full border mr-2 ${
                        location.pathname === "/formelements"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-500"
                      }`}
                    ></span>
                    Form Elements
                  </Link>

                  <Link
                    to="/formlayouts"
                    className={`hover:bg-gray-200 p-2 rounded flex items-center text-left font-semibold  hover:text-blue-600 ${
                      location.pathname === "/formlayouts"
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full border mr-2 ${
                        location.pathname === "/formlayouts"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-500"
                      }`}
                    ></span>
                    Form Layouts
                  </Link>

                  <Link
                    to="/formeditors"
                    className={`hover:bg-gray-200 p-2 rounded flex items-center text-left font-semibold  hover:text-blue-600 ${
                      location.pathname === "/formeditors"
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full border mr-2 ${
                        location.pathname === "/formeditors"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-500"
                      }`}
                    ></span>
                    Form Editors
                  </Link>

                  <Link
                    to="/validations"
                    className={`hover:bg-gray-200 p-2 rounded flex items-center text-left font-semibold  hover:text-blue-600 ${
                      location.pathname === "/validations"
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full border mr-2 ${
                        location.pathname === "/validations"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-500"
                      }`}
                    ></span>
                    Form Validations
                  </Link>
                </ul>
              )}
            </li>

            <li>
              <button
                onClick={() => toggleMenu("Tables")}
                className={`flex gap-2 flex-row items-center hover:bg-gray-100 p-2 rounded font-semibold justify-between  w-full ${
                location.pathname ===  "/generaltables"
                  ? "bg-gray-100 text-blue-600 font-semibold"
                  : "text-blue-900"
              }`}
              >
                <span className="flex flex-row gap-2 items-center">
                  <BsLayoutTextWindow size={18} />{" "}
                  <span className="font-semibold ">Tables</span>
                </span>
                {openMenu === "Tables" ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openMenu === "Tables" && (
                <ul className="ml-4 mt-1 space-y-1">
                  <Link
                    to="/generaltables"
                    className={`hover:bg-gray-200 p-2 rounded flex items-center text-left font-semibold  hover:text-blue-600 ${
                      location.pathname === "/generaltables"
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full border mr-2 ${
                        location.pathname === "/generaltables"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-500"
                      }`}
                    ></span>
                    General Tables
                  </Link>

                  <Link
                    to="/datatables"
                    className={`hover:bg-gray-200 p-2 rounded flex items-center text-left font-semibold  hover:text-blue-600 ${
                      location.pathname === "/datatables"
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full border mr-2 ${
                        location.pathname === "/datatables"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-500"
                      }`}
                    ></span>
                    Data Tables
                  </Link>
                </ul>
              )}
            </li>

            <li>
              <button
                onClick={() => toggleMenu("Charts")}
                className={`flex gap-2 flex-row items-center hover:bg-gray-100 p-2 rounded font-semibold justify-between  w-full ${
                location.pathname ===  "/chart"
                  ? "bg-gray-100 text-blue-600 font-semibold"
                  : "text-blue-900"
              }`}
              >
                <span className="flex flex-row gap-2 items-center">
                  <BsBarChart size={18} />
                  <span className="font-semibold ">Charts</span>
                </span>
                {openMenu === "Charts" ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openMenu === "Charts" && (
                <ul className="ml-4 mt-1 space-y-1">
                  <Link
                    to="/chart"
                    className={`hover:bg-gray-200 p-2 rounded flex items-center text-left font-semibold  hover:text-blue-600 ${
                      location.pathname === "/chart"
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full border mr-2 ${
                        location.pathname === "/chart"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-500"
                      }`}
                    ></span>
                    Chart.js
                  </Link>

                  <Link
                    to="/apexcharts"
                    className={`hover:bg-gray-200 p-2 rounded flex items-center text-left font-semibold  hover:text-blue-600 ${
                      location.pathname === "/apexcharts"
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full border mr-2 ${
                        location.pathname === "/apexcharts"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-500"
                      }`}
                    ></span>
                    ApexCharts
                  </Link>

                  <Link
                    to="/echarts"
                    className={`hover:bg-gray-200 p-2 rounded flex items-center text-left font-semibold  hover:text-blue-600 ${
                      location.pathname === "/echarts"
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full border mr-2 ${
                        location.pathname === "/echarts"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-500"
                      }`}
                    ></span>
                    ECharts
                  </Link>
                </ul>
              )}
            </li>
            

            <li>
              <button
                onClick={() => toggleMenu("Icons")}
                 className={`flex gap-2 flex-row items-center hover:bg-gray-100 p-2 rounded font-semibold justify-between  w-full ${
                location.pathname ===  "/bootstraps"
                  ? "bg-gray-100 text-blue-600 font-semibold"
                  : "text-blue-900"
              }`}
              >
                <span className="flex flex-row gap-2 items-center">
                  <BsGem size={18} />
                  <span className="font-semibold ">Icons</span>
                </span>
                {openMenu === "Icons" ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openMenu === "Icons" && (
                <ul className="ml-4 mt-1 space-y-1">
                  <Link
                    to="/bootstraps"
                    className={`hover:bg-gray-200 p-2 rounded flex items-center text-left font-semibold  hover:text-blue-600 ${
                      location.pathname === "/bootstraps"
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full border mr-2 ${
                        location.pathname === "/bootstraps"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-500"
                      }`}
                    ></span>
                    Bootstraps Icons
                  </Link>

                  <Link
                    to="/remix"
                    className={`hover:bg-gray-200 p-2 rounded flex items-center text-left font-semibold  hover:text-blue-600 ${
                      location.pathname === "/remix"
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full border mr-2 ${
                        location.pathname === "/remix"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-500"
                      }`}
                    ></span>
                    Remix Icons
                  </Link>

                  <Link
                    to="/boxicons"
                    className={`hover:bg-gray-200 p-2 rounded flex items-center text-left font-semibold hover:text-blue-600 ${
                      location.pathname === "/boxicons"
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full border mr-2 ${
                        location.pathname === "/boxicons"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-500"
                      }`}
                    ></span>
                    Boxicons
                  </Link>
                </ul>
              )}
            </li>

            <li className="mt-4 font-semibold text-sm ml-3">PAGES</li>
            <Link
              to="/myprofile"
              className={`flex gap-2 flex-row items-center hover:bg-gray-100 p-2 rounded ${
                location.pathname === "/myprofile"
                  ? "bg-gray-100 text-blue-600 font-semibold"
                  : "text-blue-900"
              }`}
            >
              <BsPerson size={18} />
              <span className="font-semibold ">Profile</span>
            </Link>

             <Link
              to="/frequentquestn"
              className={`flex gap-2 flex-row items-center hover:bg-gray-100 p-2 rounded font-semibold ${
                location.pathname === "/frequentquestn"
                  ? "bg-gray-100 text-blue-600 font-semibold"
                  : "text-blue-900"
              }`}
            >
               <BsQuestionCircle size={18} />
              <span className="font-semibold ">FAQ</span>
            </Link>


             <Link
               to="/contact"
              className={`flex gap-2 flex-row items-center hover:bg-gray-100 p-2 rounded font-semibold ${
                location.pathname ===  "/contact"
                  ? "bg-gray-100 text-blue-600 font-semibold"
                  : "text-blue-900"
              }`}
            >
               <BsEnvelope size={18} />
              <span className="font-semibold ">Contact</span>
            </Link>

           <Link
               to="/register"
              className={`flex gap-2 flex-row items-center hover:bg-gray-100 p-2 rounded font-semibold ${
                location.pathname ===  "/register"
                  ? "bg-gray-100 text-blue-600 font-semibold"
                  : "text-blue-900"
              }`}
            >
                <BsCardList size={18} />
              <span className="font-semibold ">Register</span>
            </Link>

            <Link
              to="/login"
              className={`flex gap-2 flex-row items-center hover:bg-gray-100 p-2 rounded font-semibold ${
                location.pathname ===  "/login"
                  ? "bg-gray-100 text-blue-600 font-semibold"
                  : "text-blue-900"
              }`}
            >
                <BsBoxArrowInDownRight size={18} />
              <span className="font-semibold ">Login</span>
            </Link>

             <Link
              to="/error"
              className={`flex gap-2 flex-row items-center hover:bg-gray-100 p-2 rounded font-semibold ${
                location.pathname ===  "/error"
                  ? "bg-gray-100 text-blue-600 font-semibold"
                  : "text-blue-900"
              }`}
            >
                <BsDashCircle size={18} />
              <span className="font-semibold ">Error 404</span>
            </Link>

              <Link
              to="/blank"
              className={`flex gap-2 flex-row items-center hover:bg-gray-100 p-2 pb-24 rounded font-semibold ${
                location.pathname === "/blank"
                  ? "bg-gray-100 text-blue-600 font-semibold"
                  : "text-blue-900"
              }`}
            >
                <BsFileEarmark size={18} />
              <span className="font-semibold ">Blank</span>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
