import React, { useState } from "react";
import { Card, Button, Input, List } from "antd";
import { Calendar, Badge } from "antd";
import ScheduleShow from "./ScheduleShow";
import Lottie from "lottie-react";
import Meeting from "../assets/meeting.json";

function CalenderUI() {
  // Sample data for notices or events
  const notices = [
    { date: "2023-10-10", content: "Meeting at 2:00 PM" },
    { date: "2023-10-15", content: "Project deadline" },
    { date: "2023-10-16", content: "Meeting" },
    { date: "2023-10-17", content: "Urgent meeting" },
    // Add more notices/events as needed
  ];
  // Function to render badges for each day on the calendar
  const dateCellRender = (value) => {
    const dateStr = value.format("YYYY-MM-DD");
    const notice = notices.find((item) => item.date === dateStr);

    return notice ? <Badge status="success" text={notice.content} /> : null;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#EFF2F5",
      }}
    >
      <div style={{ margin: "20px", padding: "10px", width: "70%" }}>
        <Calendar dateCellRender={dateCellRender} />
      </div>
      <div>
        <ScheduleShow meeting={notices} style={{width:"30%"}}/>
      </div>
    </div>
  );
}

export default CalenderUI;
