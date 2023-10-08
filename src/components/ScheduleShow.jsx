import React, { useState } from "react";
import { Input, Button, List } from "antd";
import { FcVideoCall } from 'react-icons/fc';
import Lottie from "lottie-react";
import Meeting from "../assets/meeting.json"
const ScheduleShow = (props) => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim() === "") {
      return;
    }

    setTasks([...tasks, task]);
    setTask("");
  };
  console.log("these are the props", props.meeting);

  return (
    <div className="container" style={{  margin: "0 auto" }}>
      <h6 style={{ textAlign: "center" , margin:"30px"}}>Upcoming meetings</h6>

      <List
        style={{ marginTop: "16px" ,backgroundColor:"#fff",padding:"10px",width:"280px"}}
        bordered
        dataSource={props.meeting} // Assuming tasks is the array you want to display
        renderItem={(item, index) => (
          <div key={index}>
            <p style={{ padding: "5px" }}>{item.content}</p>
          </div>
        )}
      />
      <hr/>
       <Button style={{ backgroundColor:"#fff",padding:"5px",margin:"5px"}}><FcVideoCall style={{fontSize:"30px",padding:"5px"}}/>Schedule your meeting</Button>
       <Lottie animationData={Meeting} style={{ width: "50%" }} />
    </div>
  );
};

export default ScheduleShow;
