import { getImageUrl } from "./utils.js";

function Avatar({ person, size }) {
  if (size < 90) {
    return (
      <img
        className="avatar"
        src={getImageUrl(person, "s")}
        alt={person.name}
        width={size}
        height={size}
      />
    );
  } else if (size >= 90) {
    return (
      <img
        className="avatar"
        src={getImageUrl(person, "b")}
        alt={person.name}
        width={size}
        height={size}
      />
    );
  }
}

export default function Profile() {
  return (
    <Avatar
      size={90}
      person={{
        name: "Gregorio Y. Zara",
        imageId: "7vQD0fP",
      }}
    />
  );
}
