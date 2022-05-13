import React from "react";
import BodyCollection from "../component/body/BodyCollection";
import NavbarBootstrap from "../component/navbar/NavbarBootstrap";

export default function Collection() {
  return (
    <div>
      <NavbarBootstrap></NavbarBootstrap>
      <BodyCollection></BodyCollection>
    </div>
  );
}
