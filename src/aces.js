import { action, condition, expression } from "../template/aceDefine.js";

const category = "general";

action(
  category,
  "Snapshot",
  {
    highlight: false,
    deprecated: false,
    isAsync: true,
    listName: "Snapshot",
    displayText: "Snapshot localstorage",
    description: "Snapshot the entire localstorage",
    params: [],
  },
  async function () {
    this.lastSnapshot = JSON.stringify(await this.SnapshotObj());
    this._trigger("OnSnapshot");
  }
);

action(
  category,
  "LoadFromSnapshot",
  {
    highlight: false,
    deprecated: false,
    isAsync: true,
    listName: "Load from snapshot",
    displayText: "Load from snapshot {0}",
    description: "Load from a snapshot",
    params: [
      {
        id: "snapshot",
        name: "Snapshot",
        desc: "The snapshot to load from",
        type: "string",
        initialValue: "",
      },
    ],
  },
  async function (dataStr) {
    try {
      const data = JSON.parse(dataStr);
      await this.LoadFromSnapshotObj(data);
    } catch (e) {
      console.error(e);
    }
    this._trigger("OnLoaded");
  }
);

action(
  category,
  "SaveSnapshotToFile",
  {
    highlight: false,
    deprecated: true,
    isAsync: true,
    listName: "Save snapshot to file",
    displayText: "Save snapshot to {0} {1}",
    description: "Save the snapshot to a file",
    params: [
      {
        id: "pathMode",
        name: "Path mode",
        desc: "The path mode to use",
        type: "combo",
        initialValue: "appdata",
        items: [{ appdata: "AppData" }, { absolute: "Absolute path" }],
      },
      {
        id: "filename",
        name: "Filename",
        desc: "The filename to save the snapshot to",
        type: "string",
        initialValue: '"snapshot.json"',
      },
    ],
  },
  async function (pathMode, path) {
    alert("SaveSnapshotToFile: This action has been deprecated");
    return;
  }
);

action(
  category,
  "LoadSnapshotFromFile",
  {
    highlight: false,
    deprecated: true,
    isAsync: true,
    listName: "Load snapshot from file",
    displayText: "Load snapshot from {0} {1}",
    description: "Load the snapshot from a file",
    params: [
      {
        id: "pathMode",
        name: "Path mode",
        desc: "The path mode to use",
        type: "combo",
        initialValue: "appdata",
        items: [{ appdata: "AppData" }, { absolute: "Absolute path" }],
      },
      {
        id: "filename",
        name: "Filename",
        desc: "The filename to save the snapshot to",
        type: "string",
        initialValue: '"snapshot.json"',
      },
    ],
  },
  async function (pathMode, path) {
    alert("LoadSnapshotFromFile: This action has been deprecated");
    return;
  }
);

condition(
  category,
  "OnSnapshot",
  {
    highlight: false,
    deprecated: false,
    isTrigger: true,
    listName: "On Snapshot",
    displayText: "On Snapshot",
    description: "Triggered when a snapshot is taken",
    params: [],
  },
  function () {
    return true;
  }
);

condition(
  category,
  "OnLoaded",
  {
    highlight: false,
    deprecated: false,
    isTrigger: true,
    listName: "On Loaded",
    displayText: "On Loaded",
    description: "Triggered when a snapshot is loaded",
    params: [],
  },
  function () {
    return true;
  }
);

expression(
  category,
  "LastSnapshot",
  {
    highlight: false,
    deprecated: false,
    returnType: "string",
    description: "Last snapshot taken",
    params: [],
  },
  function () {
    return this.lastSnapshot;
  },
  false
);
