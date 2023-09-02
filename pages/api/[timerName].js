import supabase from "./supabase";

export default async function timer(req, res) {
    const {timerName} = req.query;

    const timer = {
        time_start: "",
        time_end: ""
    };
    const getTimer = await supabase.from("timer").select("time_start, time_end").eq('codename', timerName);
    if (getTimer.data.length > 0) {
        timer.time_start = getTimer.data[0].time_start;
        timer.time_end = getTimer.data[0].time_end;
    }
    
    return res.json({ timer });

}
