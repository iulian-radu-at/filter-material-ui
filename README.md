# filter-material-ui ![Weekly downloads](https://img.shields.io/npm/dw/filter-material-ui 'Weekly downloads')

A material-ui component which allows to edit a user defined set of fields representing a filter and display it as a text or a form

---

## Demo

You can access the storybook for this component [here](https://iulian-radu-at.github.io/filter-material-ui/).

## Props

The component accepts the props defined bellow in the table.

### Props accepted by FilterMaterialUi

| Name       | Type                                           | Required | Default   | Description                                           |
| ---------- | ---------------------------------------------- | -------- | --------- | ----------------------------------------------------- |
| id         | string                                         | no       | undefined | The id of the field                                   |
| fields     | FilterField[]                                  | yes      | -         | The fields of the filter                              |
| data       | Dictionary<string \| string[]>                 | no       | {}        | The initial values for the filter's fields            |
| onChange   | (data: Dictionary<string \| string[]>) => void | yes      | -         | The callback function called when the data is changed |
| textPrefix | string                                         | no       | ""        | The text displayed before the fields in text mode     |
| textSuffix | string                                         | no       | ""        | The text displayed after the fields in text mode      |

### Fields defined by FilterField

| Name    | Type     | Required | Default | Description                                             |
| ------- | -------- | -------- | ------- | ------------------------------------------------------- |
| label   | string   | yes      | -       | The text used as label for the field                    |
| name    | string   | yes      | -       | The name associated to the field and in the data object |
| options | string[] | no       | []      | The options used in a select                            |
| text    | TEXT     | yes      | -       | The texts displayed in the text mode                    |
| type    | TYPE     | yes      | -       | The type of the field                                   |

### Fields defined by TEXT

| Name                 | Type   | Required | Description                                                      |
| -------------------- | ------ | -------- | ---------------------------------------------------------------- |
| all                  | string | yes      | The text displayed when there is no value selected               |
| noOptionsAvailable   | string | no       | The text when there are no longer options selectable             |
| noOptionsMatchFilter | string | no       | The text when there are no options matching the filter in select |
| plural               | string | yes      | The text displayed when there is one value selected              |
| singular             | string | yes      | The text displayed when there is more then one value selected    |

### Values valid for type

| Enum            | Type of the field                       |
| --------------- | --------------------------------------- |
| INPUT           | Input                                   |
| COLORS_SELECT   | Multiple Select with preview for colors |
| MULTIPLE_SELECT | Multiple Select                         |
| SINGLE_SELECT   | Single Select                           |

---

## Versions

| FilterMaterialUi _uses_ | Material-ui |      React       |
| ----------------------: | :---------: | :--------------: |
|                   1.0.x |    3.2.0    |      16.5.2      |
|                   1.1.x |    3.6.0    |      16.6.3      |
|                   1.2.x |    3.9.2    |      16.8.1      |
|                   1.3.x |    3.9.3    |      16.8.6      |
|                   2.0.x |    4.0.2    |      16.8.6      |
|                   2.1.x |    4.2.0    |      16.8.6      |
|                   2.2.x |    4.3.3    |      16.9.0      |
|                   2.3.x |    4.9.0    |      16.9.0      |
|                   2.4.x |    4.9.7    |      16.9.0      |
|                   2.5.x |   4.10.2    |      16.9.0      |
|                   2.6.x |   4.11.0    |      16.9.0      |
|                   2.7.x |   4.11.3    | 16.9.0 or 17.0.0 |
|                   2.8.x |   4.12.3    | 16.9.0 or 17.0.0 |
|                   2.9.x |    5.0.4    | 16.9.0 or 17.0.0 |
|                   3.0.x |   5.10.17   |     >=18.0.0     |
|                   3.1.x |   5.14.20   |     >=18.0.0     |

### About versioning schema used for FilterMaterialUi

- Major - it will be increased if the major version of the dependat package changes or there are breaking changes in the code of FilterMaterialUi
- Minor - it will be increased if no major version of the dependat package changes, but there are changes of the minor or patch versions of it
- Patch - it will be increased if there are no changes of the dependat packages, but there are non breaking changes in the code of FilterMaterialUi

---

## Example

The base component which allows to create read-only or creatable select components for selecting only one or more values:

```js
import React from "react";

import FilterMaterialUi, { FilterField, TYPE } from "filter-material-ui";

class App extends React.Component<any, AppState> {
  public state: AppState = {
    data: {
      name: "Green-Field",
      categories: "Open-Source",
      colors: ["red", "yellow"]
    }
  };

  private fields: FilterField[] = [
    {
      label: "App types",
      name: "types",
      options: ["JS", "JAVA", "C#"],
      text: {
        all: "of any type",
        singular: "having the type",
        plural: "having the types"
      },
      type: TYPE.MULTIPLE_SELECT
    },
    {
      label: "Name",
      name: "name",
      text: {
        all: "having any name",
        singular: "having names containing",
        plural: "having names containing"
      },
      type: TYPE.INPUT
    },
    {
      label: "Category",
      name: "categories",
      options: ["Open-Source", "Commercial", "Educational"],
      text: {
        all: "ignoring categories",
        singular: "having the category",
        plural: "having the categories"
      },
      type: TYPE.SINGLE_SELECT
    },
    {
      label: "Colors",
      name: "colors",
      options: ["red", "green", "blue", "white", "black", "gray", "yellow"],
      text: {
        all: "ignoring colors",
        singular: "having the color",
        plural: "having the colors"
      },
      type: TYPE.COLORS_SELECT
    }
  ];

  public render() {
    return (
      <div className="App">
        <h3>App</h3>
        <FilterMaterialUi
          textPrefix="Display apps "
          textSuffix="."
          data={this.state.data}
          fields={fields}
          onChange={this.handleChange}
        />
      </div>
    );
  }

  private handleChange = (data: Dictionary) => {
    console.log({
      data
    });

    this.setState({
      data
    });
  };
}

interface AppState {
  data: Dictionary;
}

interface Dictionary {
  [key: string]: string | string[];
}

export default App;
```

---

## Changelog

### 1.0.0

- filter-material-ui is made publicly available

### 1.0.2

- Added texts for select fields for the case when there are no longer selectable options or no option matches the filter in select

### 1.0.3

- Made the icon fo edit button scale with the text

### 1.0.4

- Reduced number of re-renders

### 1.1.0

- Updated the react and material-ui packages

### 1.1.1

- Fixed the line height when the text is wrapped

### 1.2.0

- Updated packages

### 1.3.0

- Updated packages

### 1.3.1

- Updated packages
- Fixed display of the pencil button at different font sizes

### 2.0.0

- Updated packages

### 2.0.1

- Fixed the selects to use defaultValue(s) instead of value(s)
- Added a storybook for this component
- Updated packages

### 2.1.0

- Updated packages

### 2.2.0

- Updated packages

### 2.3.0

- Updated packages

### 2.3.1

- Updated packages

### 2.4.0

- Updated packages
- Moved from npm to yarn
- Made SingleSelect clearable
- Fixed the crash when there are no options selected in dropdown
- Made stories for both not pre-filled and pre-filled filters

### 2.5.0

- Updated packages

### 2.6.0

- Updated packages

### 2.6.1

- Fixed crash produced by "export \* from"

### 2.7.0

- Accepting React 17 as peerDependencies
- Fixed security warnings

### 2.8.0

- Updated the packages

### 2.9.0

- Updated the packages

### 3.0.0

- Migrated to material-ui 5
- Supports minimum React 18

### 3.1.0

- Updated the packages
