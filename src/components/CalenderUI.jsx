
import React, { useState } from 'react';
import { Card, Button, Input, List } from 'antd';
import { Calendar, Badge } from 'antd';
function CalenderUI() {
    // Sample data for notices or events
    const notices = [
      { date: '2023-10-10', content: 'Meeting at 2:00 PM' },
      { date: '2023-10-15', content: 'Project deadline' },
      // Add more notices/events as needed
    ];
  
    // Function to render badges for each day on the calendar
    const dateCellRender = (value) => {
      const dateStr = value.format('YYYY-MM-DD');
      const notice = notices.find((item) => item.date === dateStr);
  
      return notice ? <Badge status="success" text={notice.content} /> : null;
    };
  
    return (
      <div style={{ width: '300px', margin: '0 auto', width:"100%"}}>
        <Calendar dateCellRender={dateCellRender} />
      </div>
    );
  }
  
  export default CalenderUI;
  
  