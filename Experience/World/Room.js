import * as THREE from "three";
import Experience from "../Experience.js";

export default class Room {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.room = this.resources.items.beach;
    this.actucalRoom = this.room.scene;
    this.setModel();
  }

  setModel() {
    this.scene.add(this.actucalRoom);
    this.actucalRoom.scale.set(0.3, 0.3, 0.3);
    this.actucalRoom.rotation.y = Math.PI * 0.25;
    // this.animate();
  }

  animate() {
    // requestAnimationFrame(animate());
    this.actucalRoom.rotation.x += 0.01;
    this.actucalRoom.rotation.y += 0.01;
    console.log("hello");
  }

  resize() {}

  update() {}
}
