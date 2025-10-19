import Card from "@/components/Card";
export default function DashboardProfileCard({ title, label, result, Icon }) {
    return (
        <>
        <Card style={{ height: "100%", width: "100%", overflow: "hidden" }}>
            <div style={{ display: "grid", height: "100%", width: "100%", position: "relative", gap: "15px", gridTemplateRows: " auto auto " }}>
                <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
                    <div style={{ justifySelf: "start" }}>
                        <p>{title}</p>
                    </div>
                    <div style={{ justifySelf: "end" }}>
                        {Icon}                       
                    </div>
                </div>
                <div className="grid bottom-left" style={{ lineHeight: "1", alignItems: "flex-start", bottom: "10px", left: "15px", display: "flex", flexDirection: "column", gridTemplateRows: "auto auto", rowGap: "0px", marginTop: "18%", padding: "0" }}>
                    <span style={{ fontSize: "40px", fontFamily: "bold" }}>{result}</span>
                    <span>{label}</span>
                </div>
            </div>
        </Card>
        </>
    )
}