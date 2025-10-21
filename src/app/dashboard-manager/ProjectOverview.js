import { progress } from "framer-motion"
export default function ProjectOverview() {
    return (
        // style={{ height: "40vh", width: "40vh" }}
        <>
            <div className="table"  >
                <div className="table__title">Project Overview</div>
                <div className="table_header">
                    <div className="item_header">Project</div>
                    <div className="item_header">Progress</div>
                    <div className="item_header">Status</div>
                </div>
                <div className="table__data">
                    {/* project */}
                    <div className="table__right">
                        <div className="item">Website Design</div>
                        <div className="item">Mobile App</div>
                        <div className="item">odkeode</div>
                    </div>
                    {/* progress */}
                    <div className="table__right">
                        <div className="item"><progress value={0.6} style={{color:"blue"}} /></div>
                        <div className="item"><progress value={0.2} /></div>
                        <div className="item"><progress value={0.9} /></div>
                    </div>
                    {/* status */}
                    <div className="table__right">
                        <div className="item">On Track</div>
                        <div className="item">Behind</div>
                        <div className="item">Almost Completed</div>
                    </div>
                </div>
                <div className="table_header">
                    <div className="item_header" style={{ display: "grid", gridTemplateRows: "auto auto", justifyContent: "center", alignItems: "center" }}>
                        <p>45</p><p>Total Task</p>
                    </div>
                    <div className="item_header" style={{ display: "grid", gridTemplateRows: "auto auto", justifyContent: "center" }}>
                        <p>25</p><p>Completed</p>
                    </div>
                    <div className="item_header" style={{ display: "grid", gridTemplateRows: "auto auto", justifyContent: "center" }}>
                        <p>14</p><p>in progress</p>
                    </div>
                    <div className="item_header" style={{ display: "grid", gridTemplateRows: "auto auto", justifyContent: "center" }}>
                        <p>14</p><p>in progress</p>
                    </div>
                </div>

            </div>
        </>
    )
}