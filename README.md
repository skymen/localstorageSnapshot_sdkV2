<img src="./examples/cover.webp" width="150" /><br>
# Local Storage Snapshot
<i>Allows you to save and load snapshots of local storage.</i> <br>
### Version 2.0.0.1

[<img src="https://placehold.co/200x50/4493f8/FFF?text=Download&font=montserrat" width="200"/>](https://github.com/skymen/localstorageSnapshot_sdkV2/releases/download/skymen_localstoragesnapshot-2.0.0.1.c3addon/skymen_localstoragesnapshot-2.0.0.1.c3addon)
<br>
<sub> [See all releases](https://github.com/skymen/localstorageSnapshot_sdkV2/releases) </sub> <br>

---
<b><u>Author:</u></b> skymen <br>
<b>[Construct Addon Page](https://www.construct.net/en/make-games/addons/1210/localstorage-snapshot)</b>  <br>
<b>[Documentation](https://www.construct.net/en/make-games/addons/1210/localstorage-snapshot)</b>  <br>
<sub>Made using [CAW](https://marketplace.visualstudio.com/items?itemName=skymen.caw) </sub><br>

## Table of Contents
- [Usage](#usage)
- [Examples Files](#examples-files)
- [Properties](#properties)
- [Actions](#actions)
- [Conditions](#conditions)
- [Expressions](#expressions)
---
## Usage
To build the addon, run the following commands:

```
npm i
npm run build
```

To run the dev server, run

```
npm i
npm run dev
```

## Examples Files
| Description | Download |
| --- | --- |

---
## Properties
| Property Name | Description | Type |
| --- | --- | --- |


---
## Actions
| Action | Description | Params
| --- | --- | --- |
| Load from snapshot | Load from a snapshot | Snapshot             *(string)* <br> |
| Load snapshot from file | Load the snapshot from a file | Path mode             *(combo)* <br>Filename             *(string)* <br> |
| Save snapshot to file | Save the snapshot to a file | Path mode             *(combo)* <br>Filename             *(string)* <br> |
| Snapshot | Snapshot the entire localstorage |  |


---
## Conditions
| Condition | Description | Params
| --- | --- | --- |
| On Loaded | Triggered when a snapshot is loaded |  |
| On Snapshot | Triggered when a snapshot is taken |  |


---
## Expressions
| Expression | Description | Return Type | Params
| --- | --- | --- | --- |
| LastSnapshot | Last snapshot taken | string |  | 
