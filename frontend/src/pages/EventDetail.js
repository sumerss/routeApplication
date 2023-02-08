import EventItem from "../components/EventItem";

import { useParams } from "react-router-dom";

const events = [
    {
        "id": "e1",
        "title": "A dummy event 1",
        "date": "2023-02-22",
        "image": "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
        "description": "Join this amazing event and connect with fellow developers."
    },
    {
        "id": "e2",
        "title": "A dummy event 2",
        "date": "2023-02-22",
        "image": "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
        "description": "Join this amazing event and connect with fellow developers."
    }
]

function EventDetail() {

    const params = useParams();

    const id = params.id;

    const event = events.find((item) => item.id === id);

    return (
        <>
            <EventItem event={event} />
        </>
    )
};

export default EventDetail;