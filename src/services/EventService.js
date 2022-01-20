import apiClient from "@/config/axios";

export function getEvents(perPage, page) {
  return apiClient.get("/events?_limit=" + perPage + "&_page=" + page);
}

export function getEvent(id) {
  return apiClient.get(`/events/${id}`);
}
export function postEvent(event) {
  return apiClient.post("/events", event);
}
