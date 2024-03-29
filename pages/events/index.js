import Link from "next/link";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { useRouter } from "next/router";

function EventsPage() {
  const router = useRouter();
  const events = getAllEvents();
  function findEventHandler(year, month){
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <div>
      <EventSearch onSearch={findEventHandler}/>
      <EventList items={events} />
    </div>
  );
}

export default EventsPage;
