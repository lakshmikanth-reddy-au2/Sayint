import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: null,
      columns: [],
      space_bw_rows: null,
      space_bw_columns: null
    };
    this.row = this.row.bind(this);
    this.column = this.column.bind(this);
    this.rowGutter = this.rowGutter.bind(this);
    this.columnGutter = this.columnGutter.bind(this);
  }
  row(e) {
    this.setState({ rows: e.target.value });
  }
  column(e) {
    this.setState({ columns: e.target.value.split(',') });
  }
  rowGutter(e) {
    this.setState({ space_bw_rows: e.target.value + "px" });
  }
  columnGutter(e) {
    this.setState({ space_bw_columns: e.target.value + "px" });
  }
  createTable = props => {
    console.log("function", props);
    let table = [];
    let space = props.space_bw_columns;
    let rows = props.rows;
    for (let i = 0; i < rows; i++) {
      let children = [];
      let columns = props.columns;
      for (var j = 0; j < columns[i]; j++) {
        children.push(
          <div
            style={{
              height: "100px",
              flexGrow: "1",
              marginRight: `${space}`,
              backgroundColor: "red"
            }}
          />
        );
      }
      table.push(
        <div
          style={{
            height: "100px",
            display: "flex",
            marginBottom: `${props.space_bw_rows}`,
            backgroundColor: "white"
          }}
        >
          {children}
        </div>
      );
    }
    return table;
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h3>REACT FRONTEND CODING CHALLENGE</h3>
        <div class="form-row">
          <div class="form-group col-md-6">
            <input
              name="no-of-rows"
              onChange={this.row}
              class="form-control"
              placeholder="Number of Rows"
            />
          </div>
          <div class="form-group col-md-6">
            <input
              name="columns-string"
              onChange={this.column}
              class="form-control"
              placeholder="Number of columns"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <input
              name="gutter-row"
              onChange={this.rowGutter}
              class="form-control"
              placeholder="Space between rows"
            />
          </div>
          <div class="form-group col-md-6">
            <input
              name="gutter-col"
              onChange={this.columnGutter}
              class="form-control"
              placeholder="Space between columns"
            />
          </div>
        </div>

        <br />
        {this.createTable(this.state)}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
