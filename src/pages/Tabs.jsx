import React, { useState } from "react";

export default function Tabs() {
  // Utility for horizontal tab styles
  const Tabs = ({ tabs, activeTab, setActiveTab, type }) => {
    const base =
      "px-4 py-2 text-sm font-medium cursor-pointer transition duration-200";
    const styles = {
      active: {
        default: "border-b-2 border-blue-600 text-blue-600",
        bordered: "border border-blue-600 text-blue-600 rounded-t-md",
        pills: "bg-blue-600 text-white rounded-md",
      },
      inactive: {
        default: "text-gray-600 hover:text-blue-600",
        bordered: "border border-transparent text-gray-600 hover:text-blue-600",
        pills: "text-gray-600 hover:bg-blue-100 rounded-md",
      },
    };

    return (
      <div
        className={`flex flex-wrap gap-2 border-b border-gray-200 mb-3 ${
          type === "pills" ? "border-none" : ""
        }`}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${base} ${
              activeTab === tab ? styles.active[type] : styles.inactive[type]
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    );
  };

  // Vertical Pills Component
  const VerticalTabs = ({ tabs, activeTab, setActiveTab }) => (
    <div className="flex flex-col sm:flex-row gap-6">
      <div className="flex sm:flex-col flex-row sm:w-40 gap-2 sm:gap-2 w-full justify-between sm:justify-start">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-100 text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex-1 text-sm text-gray-700">
        {activeTab === "Home" && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            temporibus!
          </p>
        )}
        {activeTab === "Profile" && (
          <p>
            Doloremque obcaecati at, quas facilis porro placeat saepe fuga
            delectus.
          </p>
        )}
        {activeTab === "Messages" && (
          <p>
            Sapiente animi molestiae illo voluptas ad alias eveniet dolorum
            deleniti.
          </p>
        )}
      </div>
    </div>
  );

  // States for all tab groups
  const [defaultTab, setDefaultTab] = useState("Home");
  const [defaultJustifiedTab, setDefaultJustifiedTab] = useState("Home");
  const [borderedTab, setBorderedTab] = useState("Home");
  const [borderedJustifiedTab, setBorderedJustifiedTab] = useState("Home");
  const [pillsTab, setPillsTab] = useState("Home");
  const [verticalPillsTab, setVerticalPillsTab] = useState("Home");

  const tabContents = {
    Home: "Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit.",
    Profile:
      "Accusantium quibusdam perspiciatis qui qui omnis magnam. Officiis accusamus impedit molestias nostrum veniam. Qui amet ipsum iure.",
    Contact:
      "Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.",
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen text-gray-800 space-y-6">
      {/* Responsive Grid for Tab Groups */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Default Tabs */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-semibold mb-3">Default Tabs</h2>
          <Tabs
            tabs={["Home", "Profile", "Contact"]}
            activeTab={defaultTab}
            setActiveTab={setDefaultTab}
            type="default"
          />
          <p className="text-sm">{tabContents[defaultTab]}</p>
        </div>

        {/* Default Tabs Justified */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-semibold mb-3">Default Tabs Justified</h2>
          <div className="flex justify-between border-b border-gray-200 mb-3">
            {["Home", "Profile", "Contact"].map((tab) => (
              <button
                key={tab}
                onClick={() => setDefaultJustifiedTab(tab)}
                className={`w-full px-4 py-2 text-sm font-medium ${
                  defaultJustifiedTab === tab
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <p className="text-sm">{tabContents[defaultJustifiedTab]}</p>
        </div>

        {/* Bordered Tabs */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-semibold mb-3">Bordered Tabs</h2>
          <Tabs
            tabs={["Home", "Profile", "Contact"]}
            activeTab={borderedTab}
            setActiveTab={setBorderedTab}
            type="bordered"
          />
          <p className="text-sm">{tabContents[borderedTab]}</p>
        </div>

        {/* Bordered Tabs Justified */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-semibold mb-3">Bordered Tabs Justified</h2>
          <div className="flex justify-between border-b border-gray-200 mb-3">
            {["Home", "Profile", "Contact"].map((tab) => (
              <button
                key={tab}
                onClick={() => setBorderedJustifiedTab(tab)}
                className={`w-full px-4 py-2 text-sm font-medium ${
                  borderedJustifiedTab === tab
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <p className="text-sm">{tabContents[borderedJustifiedTab]}</p>
        </div>

        {/* Pills Tabs */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-semibold mb-3">Pills Tabs</h2>
          <Tabs
            tabs={["Home", "Profile", "Contact"]}
            activeTab={pillsTab}
            setActiveTab={setPillsTab}
            type="pills"
          />
          <p className="text-sm">{tabContents[pillsTab]}</p>
        </div>

        {/* Vertical Pills Tabs */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-semibold mb-3">Vertical Pills Tabs</h2>
          <VerticalTabs
            tabs={["Home", "Profile", "Messages"]}
            activeTab={verticalPillsTab}
            setActiveTab={setVerticalPillsTab}
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 pt-6 border-t">
        © Copyright <span className="font-semibold text-blue-600">NiceAdmin</span>. All Rights Reserved
        <br />
        Designed by{" "}
        <a
          href="#"
          className="text-blue-600 hover:underline"
        >
          BootstrapMade
        </a>
      </footer>
    </div>
  );
}
