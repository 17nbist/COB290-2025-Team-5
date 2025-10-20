"use client";
import Calendar from "@/components/Calendar/Calendar.js";
import { useState } from "react";
import { useEffect } from 'react';
export default function CalendarPage({events}) {
  useEffect(() => {
    document.title = 'Calendar | Make-It-All';
  }, []);

  return (
    <div style={{width: "80%", height: "80%", marginTop: "30px"}}>
        <Calendar tasks={events} startRangeType="Day"/>
    </div>
  );
}
