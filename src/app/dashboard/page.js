"use client";
import Card from "@/components/Card";
import NavBar from "@/components/NavBar";
import PieChart from "@/components/PieChart";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const navItems = ["Today", "Projects", "Forum", "Requests"]
  const [activeTab, setActiveTab] = useState(navItems[0]);
  var InputDataExample = {
    "labels": ["Late", "On time", "Early"],
    "dataSetLabel": "submission(%)",
    "data": [17, 60, 23],
    "title": "Submission Timing"
  }
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "20vw", width: "50vw" }}>
      {/* <NavBar items={navItems} activeTab={activeTab} setActiveTab={setActiveTab}/>
      */}
      {/* <PieChart InputData={InputDataExample}></PieChart> */}
      <div style={{ display: "grid", gridTemplateColumns: "30% 70%", height: "100%", width: "100%", backgroundColor: "blue" }}>

        {/* the part for the profile section */}
        <div style={{ padding: "10px" }}>

          <Card style={{ height: "100%", width: "100%", padding: "10%", margin: "1%", postition: "relative" }}>
            <div style={{ display: "flex", height: "100%" }}>
              <div className="top-left" style={{ flex: "1" }}>
                <p>Profile</p>
              </div>
              <div className="top-right" style={{ flex: "1" }}>
                <p><svg width="24px" height="24px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>profile_round [#1342]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -2159.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M100.562548,2016.99998 L87.4381713,2016.99998 C86.7317804,2016.99998 86.2101535,2016.30298 86.4765813,2015.66198 C87.7127655,2012.69798 90.6169306,2010.99998 93.9998492,2010.99998 C97.3837885,2010.99998 100.287954,2012.69798 101.524138,2015.66198 C101.790566,2016.30298 101.268939,2016.99998 100.562548,2016.99998 M89.9166645,2004.99998 C89.9166645,2002.79398 91.7489936,2000.99998 93.9998492,2000.99998 C96.2517256,2000.99998 98.0830339,2002.79398 98.0830339,2004.99998 C98.0830339,2007.20598 96.2517256,2008.99998 93.9998492,2008.99998 C91.7489936,2008.99998 89.9166645,2007.20598 89.9166645,2004.99998 M103.955674,2016.63598 C103.213556,2013.27698 100.892265,2010.79798 97.837022,2009.67298 C99.4560048,2008.39598 100.400241,2006.33098 100.053171,2004.06998 C99.6509769,2001.44698 97.4235996,1999.34798 94.7348224,1999.04198 C91.0232075,1998.61898 87.8750721,2001.44898 87.8750721,2004.99998 C87.8750721,2006.88998 88.7692896,2008.57398 90.1636971,2009.67298 C87.1074334,2010.79798 84.7871636,2013.27698 84.044024,2016.63598 C83.7745338,2017.85698 84.7789973,2018.99998 86.0539717,2018.99998 L101.945727,2018.99998 C103.221722,2018.99998 104.226185,2017.85698 103.955674,2016.63598" id="profile_round-[#1342]"> </path> </g> </g> </g> </g></svg></p>
              </div>
              <div className="center">
                <p></p>
                <p>profile picture</p>
              </div>
            </div>
          </Card>
        </div>

        {/* the part for the task section */}
        <div className="justify-left item-start" style={{ display: "grid", gridTemplateRows: "60% 40%", padding: "10px", margin: "1%" }}>
          {/* add in the different type of cards the 2 top and the one bottom */}
          <div style={{ display: "grid", gridTemplateColumns: "50% 50%", gap: "10px" }}>
            <Card style={{ height: "100%", width: "100%" }}>
              <div className="justify-left item-start">
                <p>test1</p>
              </div>
            </Card>
            <Card style={{ height: "100%", width: "100%", padding: "10px" }}>
              <div className="justify-left item-start">
                <p>test2</p>
              </div>
            </Card>
          </div>
          <div style={{ backgroundColor: "purple", width: "100%", marginTop: "1%" }}>
            <Card style={{ height: "100%", width: "100%" }}>
              <div className="justify-left item-start">
                <p>test2</p>
              </div>
            </Card>
          </div>

        </div>

      </div>
    </div>

  );
}