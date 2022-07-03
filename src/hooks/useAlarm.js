import { useEffect, useState } from "react";

import leapfrog from "../assets/sounds/Leapfrog.ogg";
import marimba from "../assets/sounds/Marimba.ogg";
import twinBell from "../assets/sounds/Twin Bell.ogg";

const Leapfrog = new Audio(leapfrog);
const Marimba = new Audio(marimba);
const TwinBell = new Audio(twinBell);

export const useAlarm = (alarm) => {
  const [selectedAlarm, setSelectedAlarm] = useState(undefined);

  console.log(alarm);

  const selectAlarm = (alarm) => {
    if (alarm.value === "leapfrog") {
      setSelectedAlarm(Leapfrog);
    }

    if (alarm.value === "marimba") {
      setSelectedAlarm(Marimba);
    }

    if (alarm.value === "twinBell") {
      setSelectedAlarm(TwinBell);
    }
  };

  useEffect(() => {
    selectAlarm(alarm);
    console.log(selectedAlarm);
  }, [alarm]);

  return { selectedAlarm };
};
