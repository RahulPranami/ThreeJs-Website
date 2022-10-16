import * as THREE from "three";
import EventEmitter from "events";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import Experience from "../Experience";

export default class Resources extends EventEmitter {
  constructor(assets) {
    super();

    this.experience = new Experience();
    this.renderer = this.experience.renderer;

    // this.assets = assets;
    this.assets = assets;
    // console.log(assets);
    this.items = {};

    this.queue = this.assets.length;
    this.loaded = 0;

    this.setLoaders();
    this.startLoading();
  }

  setLoaders() {
    this.loaders = {};
    this.loaders.gltfLoader = new GLTFLoader();
    this.loaders.dracoLoader = new DRACOLoader();
    this.loaders.dracoLoader.setDecoderPath("/draco/");
    this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);
  }
  startLoading() {
    for (const asset of this.assets) {
      if (asset.type === "glbmodel") {
        this.loaders.gltfLoader.load(asset.path, (file) => {
          this.singleAssetLoaded(asset, file);
        });
      }
    }
  }
  singleAssetLoaded(asset, file) {
    this.items[asset.name] = file;
    this.loaded++;

    // console.log(asset.name);

    if (this.loaded === this.queue) {
      // console.log("Empty");
      this.emit("Ready");
    }
  }
}
