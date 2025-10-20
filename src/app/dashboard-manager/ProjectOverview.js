export default function ProjectOverview() {
    return (
        <div className="table" style={{ height: "30vh", width: "30vh" }} >
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
                    <div className="item">||||___</div>
                    <div className="item">|______</div>
                    <div className="item">||||||_</div>
                </div>
                {/* status */}
                <div className="table__right">
                    <div className="item">On Track</div>
                    <div className="item">Behind</div>
                    <div className="item">Almost Completed</div>
                </div>
            </div>
            <div className="table_header">
                <div className="item_header" style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
                    <p>45</p><p>Total Task</p></div>
                <div className="item_header" style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
                    <p>25</p><p>Completed</p></div>
                <div className="item_header" style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
                    <p>14</p><p>in progress</p></div>
                <div className="item_header" style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
                    <p>4</p><p>Overdiew</p></div>
            </div>

        </div>

    )
}