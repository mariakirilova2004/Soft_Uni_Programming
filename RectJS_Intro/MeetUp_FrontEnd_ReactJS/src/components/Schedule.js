import ScheduleNav from "./ScheduleNav";
import ScheduleTabPanes from "./ScheduleTabPanes";

export default function Schedule() {
    return(
  <div className="container">
    <div className="row me-row schedule" id="schedule">
      <h2 className="row-title content-ct">Event Schedule</h2>
      <div className="col-md-12">
        {/* <!-- Nav tabs --> */}

        <ScheduleNav/>

        {/* <!-- Tab panes --> */}
        <ScheduleTabPanes/>
      </div>
    </div>
  </div>
    );
}