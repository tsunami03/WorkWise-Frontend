import React, { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../utils/contexts/User";
import { useContext } from "react";
import { Alert } from "antd";
import image from "../icons/logo.png";
import image2 from "../icons/photo2.jpg"
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function Login() {
  const CLIENT_ID=process.env.REACT_APP_GITHUB_CLIENT_ID
  const CALLBACK_URL=process.env.REACT_APP_GITHUB_CALLBACK_URL
  
  const navigate = useNavigate();
  const { baseUrl } = useContext(UserContext);

  const redirectToGithubAuth = async () => {
    const url = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${CALLBACK_URL}`
    
    const newWindow = window.open(url, "_self");
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex justify-center h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-2/3"
          style={{
            backgroundImage: `url(${image2})`,
          }}
        >
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40 ">
            <div>
              <h2 className="text-4xl font-bold text-white sm:text-3xl">
                WorkWise
              </h2>

              <p className="max-w-md text-lg mt-3 text-gray-300">
                WorkWise is a productivity app that helps users stay focused,
                manage their work, and improve efficiency. Customizable widgets
                and kanban boards make it easy to stay on track and be more
                productive.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <div className="flex justify-center mx-auto">
                <svg
            className="h-16 w-[4rem] md:w-[3rem] loader-spin"
            width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M91.4062 0C108.75 0 120 11.25 120 28.5938V91.4062C120 108.75 108.75 120 91.4062 120H28.5938C11.25 120 0 108.75 0 91.4062V28.5938C0 11.25 11.25 0 28.5938 0H91.4062Z" fill="#222222"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M35.0782 86.5L44.5782 92.5L56.5782 72L74.0782 82.5L89.5782 54.5L100.578 61L96.5782 32L69.5782 43L80.0782 49L70.0782 67L52.5782 56.5L35.0782 86.5Z" fill="white"/>
            <path d="M24.8651 67.2509L49.6539 82.3012L43.7888 91.9615L19 76.9111L24.8651 67.2509Z" fill="white"/>
            </svg>


            <svg 
            className="ml-6 h-16 w-[25rem] md:w-[15rem]"
            width="100%" height="100%" viewBox="0 0 595 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M114.27 3.28648L100.344 83.1481C100.097 84.627 99.3579 85.8595 98.1254 86.8454C96.893 87.8314 95.4141 88.3243 93.6887 88.3243H76.0649C74.4216 88.3243 72.9427 87.8314 71.6281 86.8454C70.3957 85.8595 69.6562 84.5859 69.4098 83.0249L59.92 27.6886C59.6735 25.7989 59.427 23.9503 59.1806 22.1427C58.9341 20.253 58.6876 18.4043 58.4411 16.5968H56.0995C55.9352 18.4043 55.7297 20.253 55.4833 22.1427C55.2368 24.0324 54.9903 25.8811 54.7438 27.6886L45.2541 83.0249C45.0076 84.5859 44.227 85.8595 42.9125 86.8454C41.68 87.8314 40.2422 88.3243 38.5989 88.3243H20.8519C19.2087 88.3243 17.7297 87.8314 16.4152 86.8454C15.1827 85.8595 14.4433 84.627 14.1968 83.1481L0.27029 3.28648H19.2497L28.1233 62.4432C28.3698 64.2508 28.5752 66.1816 28.7395 68.2357C28.9038 70.2897 29.0681 72.467 29.2325 74.7676H31.5741C31.9027 72.7957 32.2314 70.7416 32.56 68.6054C32.9708 66.387 33.2995 64.333 33.546 62.4432L42.9125 9.07892C43.1589 7.35351 43.8984 5.95676 45.1308 4.88865C46.3633 3.82054 47.8422 3.28648 49.5676 3.28648H65.0962C66.8216 3.28648 68.2595 3.82054 69.4098 4.88865C70.6422 5.95676 71.3816 7.35351 71.6281 9.07892L81.1179 62.5665C81.4465 64.5384 81.7752 66.5924 82.1038 68.7286C82.4325 70.7827 82.72 72.7957 82.9665 74.7676H85.4314C85.5957 72.7957 85.76 70.7416 85.9243 68.6054C86.1708 66.4692 86.3762 64.4973 86.5406 62.6897L95.2908 3.28648H114.27ZM151.855 25.84C159.496 25.84 165.617 26.9081 170.218 29.0443C174.819 31.0984 178.105 34.467 180.077 39.1503C182.131 43.8335 183.158 50.1189 183.158 58.0065C183.158 65.7297 182.131 71.933 180.077 76.6162C178.105 81.2995 174.819 84.6681 170.218 86.7222C165.617 88.7762 159.496 89.8032 151.855 89.8032C144.296 89.8032 138.175 88.7762 133.491 86.7222C128.89 84.6681 125.563 81.2995 123.509 76.6162C121.455 71.933 120.428 65.7297 120.428 58.0065C120.428 50.1189 121.455 43.8335 123.509 39.1503C125.563 34.467 128.89 31.0984 133.491 29.0443C138.175 26.9081 144.296 25.84 151.855 25.84ZM151.855 39.1503C148.732 39.1503 146.268 39.6843 144.46 40.7524C142.652 41.8205 141.379 43.7103 140.64 46.4216C139.9 49.133 139.53 52.9946 139.53 58.0065C139.53 62.9362 139.9 66.7568 140.64 69.4681C141.379 72.1795 142.652 74.0692 144.46 75.1373C146.268 76.1232 148.732 76.6162 151.855 76.6162C154.977 76.6162 157.442 76.1232 159.249 75.1373C161.057 74.0692 162.33 72.1795 163.07 69.4681C163.809 66.7568 164.179 62.9362 164.179 58.0065C164.179 52.9946 163.809 49.133 163.07 46.4216C162.33 43.7103 161.057 41.8205 159.249 40.7524C157.442 39.6843 154.977 39.1503 151.855 39.1503ZM209.883 27.4422L212.101 39.52L213.827 41.1222V88.3243H195.587V27.4422H209.883ZM239.585 25.84L237.859 42.7243H232.806C229.931 42.7243 226.932 43.1351 223.809 43.9568C220.687 44.7784 216.744 46.0108 211.978 47.6541L210.746 37.4249C215.018 33.6454 219.332 30.7697 223.686 28.7978C228.041 26.8259 232.272 25.84 236.38 25.84H239.585ZM307.092 27.4422L291.194 48.64C290.454 49.7903 289.509 50.8995 288.359 51.9676C287.209 53.0357 286.264 53.8162 285.524 54.3092V54.8022C286.264 55.213 287.209 56.0757 288.359 57.3903C289.509 58.7049 290.454 60.0195 291.194 61.3341L309.187 88.3243H288.852L268.024 54.0627L286.757 27.4422H307.092ZM266.422 2.05405L266.545 37.6714C266.545 40.547 266.381 43.3405 266.052 46.0519C265.723 48.7632 265.23 51.4335 264.573 54.0627C265.148 56.6097 265.6 59.2389 265.929 61.9503C266.257 64.5795 266.422 67.0443 266.422 69.3449V88.3243H248.182V2.05405H266.422ZM274.926 48.8865V59.9784H260.753V48.8865H274.926ZM426.711 3.28648L412.785 83.1481C412.538 84.627 411.799 85.8595 410.566 86.8454C409.334 87.8314 407.855 88.3243 406.13 88.3243H388.506C386.862 88.3243 385.384 87.8314 384.069 86.8454C382.837 85.8595 382.097 84.5859 381.851 83.0249L372.361 27.6886C372.114 25.7989 371.868 23.9503 371.621 22.1427C371.375 20.253 371.128 18.4043 370.882 16.5968H368.54C368.376 18.4043 368.171 20.253 367.924 22.1427C367.678 24.0324 367.431 25.8811 367.185 27.6886L357.695 83.0249C357.448 84.5859 356.668 85.8595 355.353 86.8454C354.121 87.8314 352.683 88.3243 351.04 88.3243H333.293C331.65 88.3243 330.171 87.8314 328.856 86.8454C327.624 85.8595 326.884 84.627 326.638 83.1481L312.711 3.28648H331.691L340.564 62.4432C340.811 64.2508 341.016 66.1816 341.18 68.2357C341.345 70.2897 341.509 72.467 341.673 74.7676H344.015C344.344 72.7957 344.672 70.7416 345.001 68.6054C345.412 66.387 345.74 64.333 345.987 62.4432L355.353 9.07892C355.6 7.35351 356.339 5.95676 357.572 4.88865C358.804 3.82054 360.283 3.28648 362.008 3.28648H377.537C379.262 3.28648 380.7 3.82054 381.851 4.88865C383.083 5.95676 383.822 7.35351 384.069 9.07892L393.559 62.5665C393.887 64.5384 394.216 66.5924 394.545 68.7286C394.873 70.7827 395.161 72.7957 395.407 74.7676H397.872C398.037 72.7957 398.201 70.7416 398.365 68.6054C398.612 66.4692 398.817 64.4973 398.981 62.6897L407.732 3.28648H426.711ZM455.869 27.4422V88.3243H437.752V27.4422H455.869ZM450.816 0.575137C454.431 0.575137 456.238 2.42378 456.238 6.12108V12.653C456.238 16.3503 454.431 18.1989 450.816 18.1989H442.928C439.313 18.1989 437.506 16.3503 437.506 12.653V6.12108C437.506 2.42378 439.313 0.575137 442.928 0.575137H450.816ZM494.489 25.84C497.447 25.84 500.651 25.9632 504.102 26.2097C507.553 26.3741 510.922 26.6205 514.208 26.9492C517.495 27.2778 520.411 27.6886 522.958 28.1816L521.726 39.52C517.782 39.4378 513.797 39.3968 509.771 39.3968C505.828 39.3146 501.966 39.2735 498.186 39.2735C494.982 39.1914 492.517 39.2324 490.792 39.3968C489.066 39.5611 487.834 39.9719 487.095 40.6292C486.437 41.2043 486.109 42.2724 486.109 43.8335C486.109 45.6411 486.725 46.8735 487.957 47.5308C489.19 48.1059 491.244 48.7632 494.119 49.5027L510.018 53.3232C515.112 54.6378 518.891 56.6097 521.356 59.2389C523.821 61.7859 525.053 65.6476 525.053 70.8238C525.053 75.9178 524.109 79.8205 522.219 82.5319C520.329 85.2432 517.33 87.133 513.222 88.2011C509.114 89.187 503.815 89.68 497.324 89.68C494.777 89.68 490.997 89.5568 485.985 89.3103C480.973 89.0638 475.469 88.4476 469.471 87.4616L470.703 76.1232C472.182 76.2054 474.072 76.2876 476.372 76.3697C478.673 76.3697 481.179 76.3697 483.89 76.3697C486.602 76.3697 489.313 76.3697 492.024 76.3697C496.215 76.3697 499.419 76.2876 501.637 76.1232C503.856 75.8768 505.376 75.3838 506.197 74.6443C507.019 73.9049 507.43 72.7957 507.43 71.3168C507.43 69.5092 506.731 68.2768 505.335 67.6195C503.938 66.9622 501.719 66.2638 498.679 65.5243L483.274 61.7038C479.412 60.6357 476.413 59.28 474.277 57.6368C472.141 55.9935 470.621 53.9805 469.717 51.5978C468.896 49.2151 468.485 46.3805 468.485 43.0941C468.485 38.9038 469.306 35.5762 470.95 33.1114C472.675 30.5643 475.428 28.7157 479.207 27.5654C483.069 26.4151 488.163 25.84 494.489 25.84ZM565.631 25.84C575.902 25.84 583.255 27.6065 587.692 31.1395C592.211 34.5903 594.47 39.7665 594.47 46.6681C594.552 52.2551 593.156 56.4454 590.28 59.2389C587.404 61.9503 582.434 63.3059 575.368 63.3059H541.352V53.0768H570.315C573.108 53.0768 574.875 52.5016 575.614 51.3514C576.436 50.1189 576.846 48.4346 576.846 46.2984C576.764 43.4227 575.902 41.4508 574.258 40.3827C572.697 39.2324 570.027 38.6573 566.248 38.6573C562.879 38.6573 560.25 39.1092 558.36 40.013C556.47 40.9168 555.156 42.6422 554.416 45.1892C553.677 47.7362 553.307 51.4335 553.307 56.2811C553.307 61.3751 553.759 65.3189 554.663 68.1124C555.566 70.8238 557.086 72.7135 559.223 73.7816C561.441 74.8497 564.481 75.3838 568.343 75.3838C571.136 75.3838 574.587 75.3016 578.695 75.1373C582.885 74.8908 587.076 74.5211 591.266 74.0281L592.991 85.2432C590.609 86.3935 587.897 87.2973 584.857 87.9546C581.817 88.6119 578.695 89.0638 575.491 89.3103C572.286 89.6389 569.205 89.8032 566.248 89.8032C558.524 89.8032 552.28 88.6941 547.515 86.4757C542.831 84.1751 539.422 80.6832 537.285 76C535.231 71.3168 534.204 65.3189 534.204 58.0065C534.204 50.0368 535.272 43.7103 537.409 39.027C539.545 34.3438 542.914 30.9751 547.515 28.9211C552.116 26.867 558.155 25.84 565.631 25.84Z" fill="#1C1D22"/>
            </svg>
              </div>

              <p className="mt-3 text-gray-500 dark:text-gray-300">
                Sign in or Register to access your account
              </p>
            </div>
            <div className="mt-8">
              <div className="mt-2">
                <button
                  className="flex items-center justify-center w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-black rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:ring focus:ring-gray-700 focus:ring-opacity-50"
                  onClick={redirectToGithubAuth}
                >
                  <FaGithub className="mr-2" />
                  Sign in with Github
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
