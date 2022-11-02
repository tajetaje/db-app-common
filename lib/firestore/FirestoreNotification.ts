import { FirestoreDocumentData } from "../shims/Firestore.js";

export interface FirestoreNotification extends FirestoreDocumentData {
  body: string;
  sendTime: string;
  sound?: string;
  title: string;
  payload?: Record<string, unknown>;
}

export function isFirestoreNotification(notification?: object): notification is FirestoreNotification {
  if (notification == null) {
    return false;
  }

  const {
    body, payload, sendTime, sound, title
  } = notification as Partial<FirestoreNotification>;

  // Check that all required fields are present and of the correct type
  if (body == null) {
    return false;
  } else if (typeof body !== "string") {
    return false;
  }

  if (sendTime == null) {
    return false;
  } else if (!(typeof sendTime === "string")) {
    return false;
  }

  if (sound != null && typeof sound !== "string") {
    return false;
  }

  if (title == null) {
    return false;
  } else if (typeof title !== "string") {
    return false;
  }

  if (payload != null && typeof payload !== "object") {
    return false;
  }

  return true;
}
