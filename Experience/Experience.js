import * as THREE from "three";
import Camera from "./Camera.js";
import Renderer from "./Renderer.js";
import assets from "./Utils/assets.js";
import Resources from "./Utils/Resources.js";

import Sizes from "./Utils/Sizes.js";
import Time from "./Utils/Time.js";
import World from "./World/World.js";

export default class Experience {
  static instance;

  constructor(canvas) {
    if (Experience.instance) {
      return Experience.instance;
    }
    Experience.instance = this;

    this.canvas = canvas;
    this.scene = new THREE.Scene();
    // this.scene.background = new THREE.Color(0x2d101e);
    this.scene.background = new THREE.Color(0xdddddd);
    this.time = new Time();

    this.sizes = new Sizes();
    this.camera = new Camera();

    this.renderer = new Renderer();

    this.resources = new Resources(assets);

    this.world = new World();

    this.sizes.on("Resize", () => {
      this.resize();
    });

    this.time.on("Update", () => {
      this.update();
    });
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  update() {
    this.camera.update();
    this.renderer.update();
  }
}
