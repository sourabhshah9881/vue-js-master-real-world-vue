import apiClient from "@/config/axios";

export function getEvents() {
  return apiClient.get("/events");
}

export function getEvent(id) {
  return apiClient.get(`/events/${id}`);
}
