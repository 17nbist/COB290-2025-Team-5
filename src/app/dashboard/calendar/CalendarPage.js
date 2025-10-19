"use client";
import Calendar from "@/components/Calendar/Calendar.js";
import { useState } from "react";
import { useEffect } from 'react';
export default function CalendarPage({events}) {
  useEffect(() => {
    document.title = 'Calendar | Make-It-All';
  }, []);
    return (
      <div style={{height: "900px", marginTop: "30px"}}>
          <Calendar tasks={events} startRangeType="Day"/>
      </div>
    );
}
