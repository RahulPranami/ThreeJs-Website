import * as THREE from "three";
import Experience from "../Experience.js";
import Environment from "./Environment.js";
import Room from "./Room.js";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;
    this.resources = this.experience.resources;

    this.resources.on("Ready", () => {
      this.room = new Room();
      this.environment = new Environment();
      //   console.log("room");
    });

    // console.log(this.camera, this.camera.perspectiveCamera);

    // this.setRenderer();

    // console.log(this.experience, this.canvas, this.scene, this.sizes);
  }

  resize() {}

  update() {}
}
