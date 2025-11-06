import React from "react";
import "../App.css";


export default function Profile({ profile }) {
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
      <div className="border p-4 w-72 mx-auto rounded shadow">
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Bio:</strong> {profile.bio}</p>
      </div>
    </div>
  );
}
