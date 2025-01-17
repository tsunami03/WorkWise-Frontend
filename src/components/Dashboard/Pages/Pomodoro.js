import axios from "axios";
import { useEffect, useState } from "react";

const Pomodoro = (props) => {
  
  const [timers, setTimers] = useState(props.timer);

  return (
    <div className="rounded-sm border mb-8 border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Name
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Value
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-medium text-black dark:text-white">
                  Maximum Possible Focus Time
                </h5>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">
                  {timers.maximumFocusTime/60} minutes
                </p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <div className="flex items-center space-x-3.5"></div>
              </td>
            </tr>
            <tr>
              <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-medium text-black dark:text-white">
                  Productivity
                </h5>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">
                  {timers.productivity}%
                </p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p
                  className={`inline-flex rounded-full ${
                    timers.productivity > 70
                      ? "bg-success"
                      : timers.productivity > 30
                      ? "bg-yellow-300"
                      : "bg-danger"
                  } bg-opacity-100 py-1 px-3 text-sm font-medium text-white`}
                >
                  {timers.productivity > 70
                    ? "High"
                    : timers.productivity > 30
                    ? "Medium"
                    : "Low"}
                </p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <div className="flex items-center space-x-3.5"></div>
              </td>
            </tr>
            <tr>
              <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-medium text-black dark:text-white">
                  Your Focus Time
                </h5>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">
                  {timers.totalFocusTime} seconds
                </p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p
                  className={`inline-flex rounded-full ${
                    timers.totalFocusTime < 120
                      ? "bg-success"
                      : timers.totalFocusTime < 300
                      ? "bg-yellow-300"
                      : "bg-danger"
                  } bg-opacity-100 py-1 px-3 text-sm font-medium text-white`}
                >
                  {timers.totalFocusTime < 120
                    ? "High"
                    : timers.totalFocusTime < 300
                    ? "Medium"
                    : "Low"}
                </p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <div className="flex items-center space-x-3.5"></div>
              </td>
            </tr>
            <tr>
              <td className="py-5 px-4 pl-9 xl:pl-11">
                <h5 className="font-medium text-black dark:text-white">
                  Your Break Time
                </h5>
              </td>
              <td className="py-5 px-4">
                <p className="text-black dark:text-white">
                  {timers.totalBreakTime} seconds
                </p>
              </td>
              <td className="py-5 px-4">
                <p
                  className={`inline-flex rounded-full ${
                    timers.totalBreakTime < 120
                      ? "bg-success"
                      : timers.totalBreakTime < 300
                      ? "bg-yellow-300"
                      : "bg-danger"
                  } bg-opacity-100 py-1 px-3 text-sm font-medium text-white`}
                >
                  {timers.totalBreakTime < 120
                    ? "High"
                    : timers.totalBreakTime < 300
                    ? "Medium"
                    : "Low"}
                </p>
              </td>
              <td className="py-5 px-4">
                <div className="flex items-center space-x-3.5"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pomodoro;
